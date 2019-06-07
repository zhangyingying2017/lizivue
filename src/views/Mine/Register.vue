<template>
	<div>
		<Head title="注册"></Head>
		<div class="register">
			<div class="text">
				<input type="text" placeholder="用户名/邮箱/手机号" v-model="regname" />
			</div>
			<div class="text">
				<input type="password" placeholder="密码" v-model="regpassword" />
			</div>
			<div class="text">
				<input type="password" placeholder="确认密码"  v-model="regpassword_ag"/>
			</div>
			<div class="btn">
				<input type="button" value="注册" @click="toRegister()" />
			</div>
			<div class="toRegister">
				<router-link to="/login">
					去登录
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "../../components/head";
	export default{
		name:"classify",
		components:{
			Head
		},
		data(){
			return {
				regname:"",
				regpassword:"",
				regpassword_ag:"",
				regInfo:{}
			}
		},
		methods:{
			toRegister(){
				let that=this;
				console.log(that.regname)
				if(that.regname==""){
					alert("请输入注册用户名")
				}else if(that.regpassword=="" || that.regpassword_ag==""){
					alert("请输入密码")
				}else if(that.regpassword!=that.regpassword_ag){
					alert("两次密码输入不一致，请重新输入")
				}else{
					that.$http.post('/register',{
						regName:that.regname,
						regPassword:that.regpassword
					}).then((res)=>{
						if(res.status==200){
							console.log(that.$router)
							that.$router.push({
								path:"/login"
							})
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