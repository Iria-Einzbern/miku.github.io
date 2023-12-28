/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-28 15:11:12
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2023-12-28 15:27:49
 * @FilePath: /Miku/js/homeMain/addCookie.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 */

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    //将 document.cookie 字符串按照分号分割成数组，得到所有的 Cookie
    var cookies = document.cookie.split(';');
    //遍历所有Cookie
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        //移除 Cookie 值前面可能存在的空格
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        //检查前缀，一致则返回cookie的值
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    //无则返回null
    return null;
}

setCookie('miUID',114514,1);

console.log("miUID:"+getCookie('miUID'))