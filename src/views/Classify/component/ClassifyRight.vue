<template>
	<div class="classify-right">
		<ul>
			<li v-for="classifyList in classifyListDatas">
				<router-link :to="'/goodsdetail/'+classifyList.product_id">
					<img :src="classifyList.product_img_url" alt="" />
					<span>{{classifyList.product_name}}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		mounted(){  //生命周期，模板编译之后
			//console.log(this)
			//console.log(this.$route.params.id)
			this.getClassifyData(this.$route.params.id)
		},
		data(){
			return {
				"classifyListDatas":[]
			}
		},
		watch:{
			//监视    谁
			//谁在干什么
			$route(to){
				//to 路由即将进入的路由对象
				//console.log(to.path) //   /classify/4
				var reg=/classify\/\d+/
				if(reg.test(to.path)){
					var classifyId=this.$route.params.id || 1
					this.getClassifyData(classifyId)
				}

			}
		},
		methods:{
			getClassifyData(id){
				let that=this;
				that.$http.get('/classifygoods',{
					params:{
						myId:id
					}
				}).then(function(res){
					console.log(res.data)
					that.classifyListDatas=res.data
				})
			}
		}
	}
</script>

<style lang="less">
	.classify-right{
		flex: 1;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		ul{
			display: flex;
			flex-wrap: wrap;
			text-align: center;
			li{
				width: 33%;
				text-align: center;
				img{
					width: 1.8rem;
					display: inline-block;
				}
				span{
					font-size: 0.44rem;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					height: 0.5rem;
					line-height:.5rem;
				}
			}
		}
	}
</style>