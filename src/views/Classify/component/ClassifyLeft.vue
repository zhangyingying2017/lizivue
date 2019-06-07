<template>
	<div class="classify-left">
		<ul>	
			<li v-for="(classifyListData,index) in classifyListDatas" >
				<router-link :to="'/classify/' + classifyListData.classify_id">
					{{classifyListData.classify_name}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				"classifyListDatas":[],
				classifyIndex:0
			}
		},
		mounted(){
			this.getLeftClassifyData()
		},
		methods:{
			getLeftClassifyData(){
				let that=this;
				that.$http.get("/classify").then(function(res){
					//console.log(res.data)
					that.classifyListDatas=res.data
				})
			}
		}
		
	}
</script>

<style lang="less">
	.classify-left{
		width: 3rem;
		height: 100%;
		background: #F3F5F7;
		font-size: 0.44rem;
		ul{
			height: 100%;
			overflow-y: scroll;
			a{
				height: 1.5rem;
				line-height: 1.5rem;
				text-align: center;
				display: block;
				border-bottom: 1px solid #dedede;
				border-right: 1px solid #dedede;
			}
		}
	}
	.classify-left .router-link-active{
				background: #fff;
				border-right: 1px solid #fff;
				color: #ec5151;
				border-left: 2px solid #ec5151;
			}
</style>