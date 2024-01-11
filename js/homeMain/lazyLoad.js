/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-27 15:53:13
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-11 16:00:59
 * @FilePath: /Miku/js/homeMain/lazyLoad.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



//封装为函数，在home-main中生成num个子div
function createHSubDiv(num){
    
    //获取父元素
    let homeMain = document.querySelector(".home-main")
    //在父元素中生成n个包含类名home-subDiv的子div元素
    for(let i=0;i<num;i++){
        //新创建一个div元素，并添加类名
        let homeSubDiv = document.createElement("div")
        homeSubDiv.classList.add('home-subDiv')
        //将新创建的div添加到父元素内（创建一个添加一个，循环n次，而不是只创建一次循环添加n次）
        homeMain.appendChild(homeSubDiv);
    }
}


//检测滑动到底部后加载新的元素
window.addEventListener('scroll', function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
   
    if (scrollTop + windowHeight == scrollHeight) {
        createHSubDiv(9);
    }
  });

createHSubDiv(9);

//在HSubDiv内添加新的子div