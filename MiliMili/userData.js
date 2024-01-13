/*
 * @Author: kawaii-poi iria1314@qq.com
 * @Date: 2023-12-28 14:34:14
 * @LastEditors: kawaii-poi iria1314@qq.com
 * @LastEditTime: 2024-01-13 09:41:47
 * @FilePath: /MiliMili/userData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
//引入express模块以及cors中间件
const cors = require('cors');
const mysql = require('mysql');
//引入axios请求api
const axios = require('axios');


const jsonParser = express.json();
let PORT = 3939;

let expressApp = express();
expressApp.use(cors());

function getUserDataFromBili(uid){
    
    let userData = {
        uName:"雪景四季",
        uFollow:0,
        uFans:0,
         uPosts:67,
        uSign:"世界第一的公主殿下",
        uAvatar:"./image/IMG_4908_副本.JPG",
        error:false
    }
    const followAPI = `https://api.bilibili.com/x/relation/stat?vmid=${uid}`
    const infoAPI = `https://api.bilibili.com/x/space/acc/info?mid=${uid}`


    
    return axios.get(followAPI)
        .then((followRes)=>{
            //抓取粉丝数
            userData.uFans=followRes.data.data.follower
            userData.uFollow=followRes.data.data.following
            return userData;
        })
        .catch(error=>{
            console.log(error)
            userData.error=true;
            return userData;
        });
}

expressApp.post('/api/getUserData',jsonParser,async(req,res)=>{
    let uid = req.body.uid;
    console.log(uid);
    getUserDataFromBili(uid)
        .then(userData=>{
            console.log(userData);
            res.json(userData);
        })
        .catch(err=>{
            console.log(err);
        })
    
})

expressApp.post('/api/getVideoData',jsonParser,(req,res)=>{
    let num = 9
    let uid = req.body.uid

    let videoData = {
        isEnough:true,//大于9则传回true，小于9则传回准确的数值
        data:[]
    }

    for(let i=0;i<num;i++){
        let data = {
            cover:'https://pic.imgdb.cn/item/65a136ab871b83018ad67154.png',
            title:'example',
            viewCounts:Math.floor(Math.random() * 100) + 1,
            duration:0,
            uploader:uid
        }
        videoData.data.push(data)
    }
    //console.log(videoData)
    
    res.json(videoData)
    
    
})

expressApp.listen(PORT,()=>{
    console.log(`服务器已成功启动，端口${PORT}`);
})



