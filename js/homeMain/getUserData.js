/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-28 14:44:00
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-09 17:17:56
 * @FilePath: /Miku/js/homeMain/getUserData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let userDataDiv = document.querySelector('.aboutme-main');

let uName = userDataDiv.querySelector('.user-name');
let uFollow = userDataDiv.querySelector('#follow .data-text');
let uFans = userDataDiv.querySelector('#fans .data-text');
let uPosts = userDataDiv.querySelector('#posts .data-text');
let uSign = userDataDiv.querySelector('.user-signature');
let uAvatar = userDataDiv.querySelector('.user-avatar img');

let miUID = getCookie("miUID");
console.log(miUID);
//通过获取cookie中的uid向后台获取数据
function getUserData(miUID){
    uid={
        uid:miUID
    }
    fetch("http://127.0.0.1:3939/api/getUserData",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(uid)
    })
    .then((res)=>{
        if (!res.ok) {
            // HTTP 错误状态码会在这里处理
            showTip("发生未知错误",'err');
            throw new Error(`HTTP错误! 状态码: ${res.status}`);
        }
        return res.json();
    })
    .then((uData)=>{
        console.log(uData);
        loadUserData(uData);
    })
    .catch((err)=>{
        console.log(err);
        showTip(err,"err");
    })
}

getUserData(miUID);


function loadUserData(data){
    uName.textContent=data.uName;
    uFollow.textContent=data.uFollow;
    uFans.textContent=data.uFans;
    uPosts.textContent=data.uPosts;
    uSign.textContent="——"+data.uSign;
    uAvatar.src=data.uAvatar;
    showTip("用户数据加载成功");
}




