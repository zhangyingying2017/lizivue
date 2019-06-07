//express			搭建服务器环境
//body-parser		表单提交数据
//cookie-parser		设置cookie信息
//cookie-session	可以设置密码的过期时间
//mysql				连接数据库

//下载需要的模块
//cnpm install express body-parser cookie-parser cookie-session mysql --save
const express=require("express");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cookieSession=require("cookie-session");
const mysql=require("mysql");

const server=new express()

server.use(bodyParser.urlencoded({ extended: false }))

//解决跨域请求问题
server.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});
//server.listen("3000",function(){
//	console.log("3000服务器已经启动")
//})
//等价于
server.listen("3000",()=>{
	console.log("3000服务器已经启动")
})


//server.use('/',function(req,res){
//	res.send("ok")
//})


server.use('/',require('./router/index.js')())