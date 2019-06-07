<template>
	<div>
		<Head title="登录"></Head>
		<div class="register">
			<div class="text">
				<input type="text" placeholder="用户名/邮箱/手机号" v-model="username" />
			</div>
			<div class="text">
				<input type="password" placeholder="密码" v-model="userpassword" />
			</div>
			<div class="btn">
				<input type="button" value="登录" @click="toLogin()"/>
			</div>
			<div class="toRegister">
				<router-link to="/register">
					去注册
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "../../components/head";
	export default{
		components:{
			Head
		},
		data(){
			return{
				username:"",
				userpassword:"",
				userInfo:{}
			}
		},
		methods:{
			toLogin(){
				let that=this;
				if(that.username==""){
					alert("用户名不能为空")
				}else if(that.userpassword==""){
					alert("请输入密码")
				}else{
					that.$http.post('/login',{
						loginName:that.username,
						loginPass:that.userpassword
					}).then((res)=>{
						console.log(res.status)
						if(res.status==200){
							that.userInfo=res.data
							console.log(that.userInfo.status)
							window.sessionStorage.userInfo=JSON.stringify(that.userInfo);
							//JSON.stringify  将对象转换成字符串型对象
							console.log(window.sessionStorage.userInfo)
							if(that.userInfo.status==1){
								that.$router.push({
									path:"/mine"
								})
							}
							
							//cookie
								//存储量小 4k
								//不安全
								//在浏览器端，浏览器关闭失效
							//sessionStorage
								//在浏览器端，网页关闭，消失
								//可以存储，5M
							
							//localStorage
								//在浏览器端，如果不主动清除，永远存在
								//可以存储，5M
						}
					})
				}
			}
		}
		
	}
</script>

<style lang="less">
	.register{
		margin-top: 1.8rem;
		.text{
			width: 80%;
			height: 44px;
			margin: 10px auto;
			input{
				border: 1px solid #EFEFEF;
				height: 44px;
				width: 100%;
				text-indent: 10px;
			}
		}
		.btn{
			width: 80%;
			height: 44px;
			margin: 10px auto;
			input{
				border: 1px solid #0055AA;
				height: 44px;
				width: 100%;
				text-indent: 10px;
				background: #0055AA;
				color: #fff;
			}
		}
		.toRegister{
			width: 80%;
			margin: 10px auto;
			text-align: right;
			a{
				font-size: .44rem;
				text-decoration: underline;
			}
		}
	}
</style>