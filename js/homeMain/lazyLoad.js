/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-27 15:53:13
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-13 09:42:57
 * @FilePath: /Miku/js/homeMain/lazyLoad.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

let load;
let loading = document.querySelector('.loading')

//防抖函数（取自GPT）
function debounce(func, delay) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
//检测是否滚动到底部
function isScrollAtBottom() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const totalHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    // 判断是否滚动到底部，可以根据需要调整阈值
    return totalHeight - scrollTop <= windowHeight;
}
//封装为函数，在home-main中生成num个子div
function createHSubDiv(num){
    //获取父元素
    let homeMain = document.querySelector(".home-main")
    //在父元素中生成n个包含类名home-subDiv的子div元素
    for(let i=0;i<num;i++){
        //新创建一个div元素，并添加类名
        let homeSubDiv = document.createElement("div")
        let videoCover = document.createElement("div")
        videoCover.classList.add('video-cover')
            let coverImg = document.createElement('img')
            let videoData = document.createElement('div')
            videoData.classList.add('video-data')

            videoCover.appendChild(coverImg)
            videoCover.appendChild(videoData)


        let videoTitle = document.createElement("div")
        videoTitle.classList.add('video-title')

        
        homeSubDiv.appendChild(videoCover)
        homeSubDiv.appendChild(videoTitle)
        homeSubDiv.classList.add('home-subDiv')
        //添加一个empty类名，以便填充视频数据
        homeSubDiv.classList.add('empty')

        //将新创建的div添加到父元素内（创建一个添加一个，循环n次，而不是只创建一次循环添加n次）
        homeMain.appendChild(homeSubDiv);
    }
}



function getVideoData(){
    fetch('http://127.0.0.1:3939/api/getVideoData',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({uid:getCookie("miUID")})
    })
    .then((res)=>{
        if (!res.ok) {
            // HTTP 错误状态码会在这里处理
            throw new Error(`加载失败! HTTP状态码: ${res.status}`);
        }
        return res.json();
    })
    .then((videoData)=>{
        console.log(videoData)
        createHSubDiv(9);
        //获取所有包含empty类的视频元素块
        let homeMain = document.querySelector(".home-main")
        allEmpty = homeMain.querySelectorAll('.empty')
        //console.log(allEmpty)
        //空元素的数量
        let num = allEmpty.length
        allEmpty.forEach((element,index) => {
            //console.log(videoData.data[index].title)
            element.querySelector('.video-title').textContent=videoData.data[index].title
            element.querySelector('.video-cover img').src=videoData.data[index].cover
            element.querySelector('.video-data').textContent=videoData.data[index].viewCounts
            element.classList.remove('empty')
        });
        loading.classList.add('noBlock')
    })
    .catch((err)=>{
        showTip("内容加载失败","err")
        console.error(err)
        loading.textContent="加载失败"
    })
}
const debouncedGVD = debounce(getVideoData, 550);

//检测滑动到底部后加载新的元素
window.addEventListener('scroll', function() {
    if (isScrollAtBottom()) {
        loading.innerHTML='加载中...<i class="fa fa-circle-o-notch"></i>'
        loading.classList.remove('noBlock')
        debouncedGVD();
    }
});


debouncedGVD()


//回传的数据模板
// let videoData = {
//     isEnough:true,//大于9则传回true，小于9则传回准确的数值
//     data:[
//         {
//             cover:example,
//             title:'example',
//             viewCounts:example,
//             duration:example
//         },
//         {
//             cover:example,
//             title:'example',
//             viewCounts:example,
//             duration:example
//         }
//     ]
// }