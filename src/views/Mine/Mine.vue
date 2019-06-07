<template>
	<div>
		<div id="head">
			<div class="head-left" @click="$router.back()">
				<i class="iconfont icon-jiantou3"></i>
			</div>
			<div class="head-center">
				个人中心
			</div>
			<div class="head-right">
				<div>
					<router-link to="/register">
						注册
					</router-link>
				</div>
			</div>
		</div>
		<h2 class="user">用户信息{{loginUserInfo.user_name}}</h2>
		<img :src="loginUserInfo.user_photo" alt="" />
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../../components/footer"; //引入公共底部组件
	export default{
		name:"classify",
		components:{
			Footer
		},
		data(){
			return {
				loginUserInfo:{}
			}
		},
		methods:{
			getUserDatas(){
				let that=this;
				let userObj=JSON.parse(window.sessionStorage.userInfo)
				console.log(userObj)
				let userId=userObj.user_id
				//that.loginUserInfo=userObj
				console.log(userId)
				console.log(that)
				that.$http.get('/userinfo',{
					params:{
						uId:userId
					}
				}).then((res)=>{
					console.log(res)
					that.loginUserInfo=res.data
				})
			}
		},
		mounted(){
			this.getUserDatas()
		}
	}
	
</script>

<style lang="less">
	#head{
		width: 100%;
		height: 1.5rem;
		background: #fff;
		position: fixed;
		top: 0px;
		z-index: 999;
		border-bottom: 1px solid #EFEFEF;
		text-align: center;
		line-height: 1.5rem;
		.head-left{
			width: 10%;
			height: 100%;
			float: left;
		}
		.head-center{
			width: 80%;
			height: 100%;
			float: left;
			font-size: 0.44rem;
		}
		.head-right{
			width: 10%;
			height: 100%;
			float: left;
			font-size: 0.44rem;
		}
	}
	.user{
		margin-top: 1.5rem;
	}
</style>