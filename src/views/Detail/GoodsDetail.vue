<template>
	<div>
		<Head title="商品详情"></Head>
		<div class="detail-wrap">
			<section class="banner-wrap">
				<mt-swipe :auto="2000">
				  <mt-swipe-item v-for="(goodsImageData,index) in goodsImageDatas" :key="index">
				  	<img :src="goodsImageData.image_url" alt="" />
				  </mt-swipe-item>
				</mt-swipe>
			</section>
			<section class="detail-content">
				<div v-for="(goodsData,index) in goodsDatas" :key="index">
					<h3 class="title">{{goodsData.product_name}}</h3>
					<h5 class="product_price">{{goodsData.product_price}}</h5>
					<h5 class="product_dprice">{{goodsData.product_dprice}}</h5>
					<div class="img-content">
						<img :src="goodsData.product_img_url" alt="" />
					</div>
				</div>
			</section>
			<section v-for='goodsAllData in goodsAllDatas'>
				<div class="goodsFooter">
					<div class="server">
						<i class="iconfont icon-kefu1"></i>
						<span>客服</span>
					</div>
					<div class="collect">
						<i class="iconfont icon-dongtaiweixuanzhong"></i>
						<span>收藏</span>
					</div>
					<div class="cart">
						<router-link to="/cart">
							<em>{{cartLength}}</em>
							<i class="iconfont icon-gouwuche1"></i>
							<span>购物车</span>
						</router-link>
						
					</div>
					<div class="shop">
						<i class="iconfont icon-xiangqingyeshangpu"></i>
						<span>店铺</span>
					</div>
					<div class="buy" @click="addGoods(goodsAllData)">加入购物车</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	import Head from "../../components/head";
	export default{
		name:"GoodsDetail",
		components:{
			Head
		},
		data(){
			return {
				goodsAllDatas:[],
				goodsImageDatas:[],
				goodsDatas:[],
				
			}
		},
		computed:{
			cartLength(){
				return this.$store.state.carts.length
			}
		},
		methods:{
			setGoodsDetail(id){
				let that=this;
				that.$http.get('/goodsdetail',{
					params:{
						myId:id
					}
				}).then((res)=>{
					console.log(res.data)
					that.goodsImageDatas=res.data[0]
					that.goodsDatas=res.data[1]
					that.goodsAllDatas=res.data
				})
			},
			addGoods(data){
				console.log(data[0])
				
				
				
				
				
				console.log(this.$store.state.carts)
				if(this.$store.state.carts!='undefined'){
					var isCarts=this.$store.state.carts.find(function(value){
						return value.product_id==data[0].product_id
					})
					if(!isCarts){
						
						let dataCart={
							classify_id: data[0].classify_id,
							product_detail: data[0].product_detail,
							product_dprice: data[0].product_dprice,
							product_id: data[0].product_id,
							product_img_url: data[0].product_img_url,
							product_name: data[0].product_name,
							product_price:data[0].product_price,
							showHide:false,
							value:1
						}
						
						this.$store.commit('setCarts',dataCart)
					}
				}
			}
		},
		mounted(){
			this.setGoodsDetail(this.$route.params.id)
			console.log(this.$route.params.id)
			
		}
	}
	
</script>

<style lang="less">
	.detail-wrap{
		width: 100%;
		height: 100%;
		margin-top: 1.5rem;
		.banner-wrap{
			height: 10rem;
			img{
				height: 10rem;
				width: 100%;
			}
		}
		.detail-content{
			padding-left: 10px;
			.title{
				font-size: 0.44rem;
				
			}
			.product_price{
				color: #ec5151;
			}
			.product_dprice{
				color: #999;
				text-decoration: line-through;
				font-weight: normal;
			}
			.img-content{
				width: 90%;
				margin: 0px auto;
				img{
					width: 100%;
				}
			}
		}
		.goodsFooter{
			height: 1.5rem;
			width: 100%;
			border-top: 1px solid #EFEFEF;
			position: fixed;
			bottom: 0px;
			display: flex;
			background: #fff;
			font-size: 0.36rem;
			text-align: center;
			div{
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				i{
					display: block;
					font-size: 0.6rem;
				}
				span{
					display: block;
				}
			}
			.buy{
				flex: 2;
				background: red;
				color: #fff;
			}
			.cart{
				position: relative;
				em{
					width: 0.6rem;
					height: 0.6rem;
					display: block;
					font-style: normal;
					background: red;
					color: #fff;
					border-radius: 50%;
					position: absolute;
					top: 0.2rem;
					right: 0.2rem;
				}
			}
		}
	}
</style>