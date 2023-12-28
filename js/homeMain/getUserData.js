const { json } = require("body-parser");

let userDataDiv = document.querySelector('.user-data');

let uFollow = userDataDiv.querySelector('#follow');
let uFans = userDataDiv.querySelector('#fans');
let uPosts = userDataDiv.querySelector('#posts');

let miUID = getCookie("miUID");
//通过获取cookie中的uid向后台获取数据
function getUserData(miUID){
    uid={
        uid:miUID
    }
    fetch("http://127.0.0.1:3939/getUserData",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(uid)
    })
    .then((res)=>{
        if (!res.ok) {
            // HTTP 错误状态码会在这里处理
            errTips("发生未知错误")
            throw new Error(`HTTP错误! 状态码: ${res.status}`);
        }
        return res.json();
    })
}