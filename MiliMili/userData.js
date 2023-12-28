/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-28 14:34:14
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2023-12-28 19:44:03
 * @FilePath: /MiliMili/userData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
//引入express模块以及cors中间件
const cors = require('cors');
const mysql = require('mysql');
const jsonParser = express.json();
let PORT = 3939;

let expressApp = express();
expressApp.use(cors());

expressApp.post('/getUserData',jsonParser,(req,res)=>{

    let userData = {
        uName:"雪景四季",
        uFollow:18,
        uFans:26,
        uPosts:67,
        uSign:"世界第一的公主殿下",
        uAvatar:"./image/IMG_4908_副本.JPG"
    }

    let uid = req.body.uid;
    console.log(uid);
    res.json(userData);
})

expressApp.listen(PORT,()=>{
    console.log(`服务器已成功启动，端口${PORT}`);
})
