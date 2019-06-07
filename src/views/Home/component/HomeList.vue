<template>
	<div class="homelist-wrap">
		<div class="homelist">
			<img src="http://test.dscmall.cn/data/gallery_album/original_img/5951c2e0f166e.jpg" alt="" />
			<h2>推荐产品</h2>
			<ul>
				<li v-for="(homeListData,index) in homeListDatas" :key="index">
					<!--:key 
						不加修改数据会重复渲染，没有修改的也会再次渲染
						加上:key 修改某一条数据只渲染修改的数据
					-->
					<div>
						<img :src="homeListData.product_img_url"/>
					</div>
					<p class="name">{{homeListData.product_name}}</p>
					<p class="price">
						<span class="product-price">￥{{homeListData.product_price}}</span>
						<span class="product-dprice">￥{{homeListData.product_dprice}}</span>
					</p>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				"homeListDatas":[]
			}
		},
		methods:{
			//定义方法
			getHomeListDatas(){
				let that=this;
				that.$http.get('/home').then(function(res){
					//console.log(res.data)
					that.homeListDatas=res.data
				})
			}
		},
		mounted(){
			this.getHomeListDatas();  //模板编译完成之后自动执行函数
		}
	}
</script>

<style lang="less">
	.homelist-wrap{
		width: 100%;
		margin-bottom: 1.8rem;
		.homelist{
			background: #efefef;
			img{
				width: 100%;
			}
			h2{
				height: 1.38rem;
				line-height: 1.38rem;
				font-size: 0.44rem;
				text-indent: 10px;
				color: #333;
			}
			ul{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				li{
					width: 49%;
					.name{
						font-size: 0.44rem;
						margin-left: 10px;
					}
					.price{
						font-size: 0.44rem;
						margin-left: 10px;
						line-height: 0.88rem;
						.product-price{
							color: red;
						}
						.product-dprice{
							color: #666;
							float: right;
							margin-right: 10px;
							text-decoration: line-through;
						}
					}
				}
			}
		}
	}
</style>