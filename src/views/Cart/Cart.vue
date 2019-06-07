<template>
	<div>
		<Head title="购物车"></Head>
		<div class="cart-content">
			<ul>
				<li v-for="(cart,index) in carts" :key="index">
					<div class="select" @click="changeRadio(cart)">
						<i class="iconfont icon-danxuankuang"  v-show="!cart.showHide"></i>
						<i class="iconfont icon-danxuankuangxuanzhong"  v-show="cart.showHide"></i>
					</div>
					<div class="cart-img">
						<img :src="cart.product_img_url" alt="" />
					</div>
					<div class="cart-info">
						<div class="cart-name">
							{{cart.product_name}}
							<button type="button" @click="dele(index)">删除</button>
						</div>
						<div class="cart-price">{{cart.product_price}}</div>
						<div class="cart-number">
							<a href="javascript:;" @click="minus(index)">-</a>
							<input type="text" value="1" v-model="cart.value" />
							<a href="javascript:;" @click="add(index)">+</a>
						</div>
					</div>
					
				</li>
			</ul>
		</div>
		<div class="cartFooter">
			<div class="checkAll" @click="checkAll()">
				<i class="iconfont icon-danxuankuang"  v-show="!flag"></i>
				<i class="iconfont icon-danxuankuangxuanzhong"  v-show="flag"></i>
				<span>全选</span>
			</div>
			<div class="priceAll">
				合计：<span>{{total}}</span>元
			</div>
			<div class="buy">
				<a href="javascript:;">
					结算({{amount}})
				</a>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../../components/footer"; //引入公共底部组件
	import Head from "../../components/head";
	import { mapMutations } from 'vuex'
	export default{
		name:"classify",
		components:{
			Footer,
			Head
		},
		data(){
			return {
				flag:false
			}
		},
		methods:{
			changeRadio(cart){
				cart.showHide=!cart.showHide
				var arr=[];
				
				//1、定义一个空数组
				//2、如果选中一个向数组中添加被选中的元素
				//this.$store.state.carts
				var obj=this.$store.state.carts
				for(var i=0;i<obj.length;i++){
					if(obj[i].showHide){
						arr.push(obj[i])
					}
				}
				if(arr.length==obj.length){
					this.flag=true
				}
				if(!cart.showHide){
					this.flag=false
				}
				
			},
			checkAll(){
				this.flag=!this.flag
				//this.flag  如果为true 全选按钮处于选中状态
				if(this.flag){
//					this.$store.state.carts.forEach(function(value){
//						value.showHide=true
//					})
					//this.$store.state.carts  数组
					var objData=this.$store.state.carts
					for(var i=0;i<objData.length;i++){
						objData[i].showHide=true
					}
				}else{
					this.$store.state.carts.forEach(function(value){
						value.showHide=false
					})
				}
			},
			...mapMutations(['add','minus','dele']) //mapMutations  辅助函数   ，
			//必须引入import { mapMutations } from 'vuex' 按需引入
//			你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
			
//			add(index){
//				this.$store.commit('add',index)
//			},
//			minus(index){
//				this.$store.commit('minus',index)  //commit('minus',index)中的minus是在mutations中定义的函数
//			},
//			dele(index){
//				this.$store.commit('dele',index)
//			}
			
		},
		computed:{
			carts(){
				return this.$store.state.carts
			},
			total:function(){
				var total=0
				this.$store.state.carts.forEach(function(cart){
					if(cart.showHide){
						total+=cart.product_price*cart.value
					}
				})
				
				return total
			},
			amount:function(){
				var amount=0;
				this.$store.state.carts.forEach(function(cart){
					if(cart.showHide){
						amount+=cart.value
					}
				})
				return amount
			}
			
		},
		mounted(){
			console.log(this.$store.state.carts) //
			
			
		}
	}
	
</script>

<style lang="less">
	.cart-content{
		width: 100%;
		margin-top: 1.5rem;
		li{
			width: 100%;
			display: flex;
			height: 3rem;
			border-bottom: 1px solid #EFEFEF;
			.select{
				width: 10%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				i{
					font-size: 0.7rem;
					color: #ec5151;
				}
			}
			.cart-img{
				width: 20%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				img{
					width: 100%;
				}
			}
			.cart-info{
				width: 70%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 10px;
				input{
					width: 2rem;
					text-align: center;
				}
				.cart-name{
					font-size: 0.44rem;
				}
				.cart-price{
					font-size: 0.44rem;
					color: #ec5151;
				}
			}
		}
	}
	.cartFooter{
		position: fixed;
		bottom: 1.8rem;
		height: 1.2rem;
		border-top: 1px solid #efefef;
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 0.44rem;
		line-height: 1.2rem;
		.checkAll{
			width: 30%;
			display: flex;
			i{
				font-size: 0.7rem;
				color: #ec5151;
				display: flex;
			}
		}
		.buy{
			background: #ec5151;
			height: 1.2rem;
			width: 30%;
			text-align: center;
			a{
				color: #fff;
			}
		}
	}
</style>