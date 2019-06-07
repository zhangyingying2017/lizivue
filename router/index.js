const express = require("express");
const mysql = require("mysql");
const md5 = require('md5'); //cnpm install md5 --save

const db = mysql.createPool({
	host: 'localhost', //数据库的地址
	user: 'root', //mysql用户名  默认是root
	password: '123456', //mysql密码
	port: 3306, //端口号
	database: 'shop' //数据库名称
});
console.log(db)

module.exports = function() {
	const route = express.Router(); //使用express路由
	//查询产品product表中的数据    SELECT product_id,product_name FROM product
	const getHomeDatas = `SELECT product_id,product_name,product_price,product_img_url,product_dprice FROM product`;
	//查询分类数据
	//DESC  降序
	//ASC   升序
	const getClassify = `SELECT * FROM classify ORDER BY classify_id ASC`;

	//查询分类
	route.get("/home", (req, res) => {
		getHomeListDatas(getHomeDatas, res)
	})
	//定义查询home数据的函数
	function getHomeListDatas(getHomeDatas, res) {
		db.query(getHomeDatas, (err, data) => {
			if(err) {
				console.log(err)
				res.end()
			} else {
				if(data.length == 0) {
					res.end()
				} else {
					res.send(data)
				}
			}
		})
	}

	//	分类数据接口
	route.get("/classify", (req, res) => {
		getClassifyDatas(getClassify, res)
	})

	function getClassifyDatas(getClassify, res) {
		db.query(getClassify, (err, data) => {
			if(err) {
				console.log(err)
				res.end()
			} else {
				if(data.length == 0) {
					res.end()
				} else {
					res.send(data)
				}
			}
		})
	}

	//	分类商品数据接口

	route.get('/classifygoods', (req, res) => {
		//console.log(req.query)
		let myId = req.query.myId
		const goodsSql = `SELECT * FROM classify,product WHERE product.classify_id=classify.classify_id AND classify.classify_id='${myId}'`
		classifyGoods(goodsSql, res)
	})

	function classifyGoods(goodsSql, res) {
		db.query(goodsSql, (err, data) => {
			if(err) {
				console.log(err)
				res.end()
			} else {
				if(data.length == 0) {
					res.end()
				} else {
					res.send(data)
				}
			}
		})
	};

	//注册接口
	route.post("/register", (req, res) => {
		console.log(req.body); //表单中通过post提交的数据
		//{ '{"regName":"aaa","regPassword":"123456"}': '' }
		let userObj = {}
		for(let obj in req.body) {
			//obj='{"regName":"aaa","regPassword":"123456"}'
			userObj = JSON.parse(obj)
		}
		console.log(userObj) //{ regName: 'admin', regPassword: '123456' }
		//INSERT INTO `user`(user_name,login_password) VALUES ('llr','123456');
		let regName = userObj.regName;
		let regPassword = md5(userObj.regPassword);
		const insUserInfo = `INSERT INTO user(user_name,login_password) VALUES ('${regName}','${regPassword}')`

		insUserInfoFn(insUserInfo, res)
	})

	function insUserInfoFn(insUserInfo, res) {
		db.query(insUserInfo, (err) => {
			if(err) {
				console.log(err);
				res.send("服务器出错").end()
			} else {
				res.send("注册成功").end()
			}
		})
	}

	//登录接口
	route.post('/login', (req, res) => {
		let userObj = {}
		console.log(req.body)
		for(let obj in req.body) {
			//obj={ '{"loginName":"aaa","loginPass":"123456"}': '' }
			userObj = JSON.parse(obj)
		}
		let loginName = userObj.loginName
		let loginPass = userObj.loginPass
		const selectUser = `SELECT * FROM user WHERE user_name='${loginName}'`
		db.query(selectUser, (err, data) => {
			if(err) {
				console.log(err)
				res.send({
					'msg': "服务器出错",
					'status': 0
				}).end()
			} else {
				if(data.length == 0) {
					res.send({
						'msg': "该用户不存在",
						'status': 0
					}).end()
				} else {
					let oData=data[0]
					oData.msg="登录成功"
					oData.status=1
					console.log(data[0].user_name)
					console.log("登录成功")
					res.send(oData).end()
					//res.send({"msg":"登录成功","status":1})
				}
			}
		})

	})

	//获取用户信息接口
	//查询语句：SELECT * FROM user WHERE user_id='1'
	route.get('/userinfo', (req, res) => {
		let uId = req.query.uId
		console.log(uId)

		const getUserData = `SELECT * FROM user WHERE user_id='${uId}'`

		db.query(getUserData, (err, data) => {
			if(err) {
				console.log(err);
				res.status(500).send("服务器出错").end()
			} else {
				if(data.length == 0) {
					res.status(500).send("用户信息不存在").end()
				} else {
					console.log(data[0])
					res.send(data[0])
				}
			}
		})

	})
	
	//商品详情页接口
	//SELECT * FROM product_image WHERE product_id='1'  对应id下面的图片信息
	//SELECT * FROM product WHERE product_id='1'	          查询对应产品id的详情数据
	
	route.get('/goodsdetail',(req,res)=>{
		console.log(req.query.myId)
		let productId=req.query.myId;  //myId前台传过来的
		const imageStr=`SELECT * FROM product_image WHERE product_id='${productId}'`;
		const productStr=`SELECT * FROM product WHERE product_id='${productId}'`
		let detailDatas=[];
		db.query(imageStr,(err,imgDatas)=>{
			if(err){
				console.log(err);
				res.status(500).send('服务器出错').end();
			}else{
				detailDatas.push(imgDatas)
				db.query(productStr,(err,data)=>{
					if(err){
						console.log(err);
						res.status(500).send('服务器出错').end();
					}else{
						detailDatas.push(data)
						res.send(detailDatas)
					}
				})
			}
		})
		
		
		
	})
	
	
	
	
	return route
}