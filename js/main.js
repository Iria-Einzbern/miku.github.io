/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-28 15:44:43
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2023-12-28 18:58:44
 * @FilePath: /Miku/js/homeMain/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function showTip(tipText,method){
    let tips = document.getElementById('tips');
    //创建一个新的tip，并创建内部的span和i元素
    let tip = document.createElement("div");
    let i = document.createElement("i");
    let span = document.createElement('span');
    //默认为oktip
    i.className = "fa fa-check";
    tip.classList.add('tip');
    span.textContent=tipText;
    if(method==="error"||method==="err"){
        i.className="fa fa-close";
        tip.classList.add('errorTip');
    }
    else if(method==="warn"){
        tip.classList.add('warnTip');
        i.className="fa fa-exclamation";
    }
    else{
        tip.classList.add('okTip');
    }
    tip.appendChild(i);
    tip.appendChild(span);
    tip.classList.add('hidden')

    tips.appendChild(tip);

    setTimeout(()=>{
        tip.classList.remove('hidden')
    },300)
    
    //闭包调用延迟函数
    setTimeout(function () {
        tip.classList.add('hidden','tipMove');
        setTimeout(()=>{
            tips.removeChild(tip);
        },300)
    }, 3000); // 3000 毫秒（3 秒）后移除，可以根据需要调整时间
}
