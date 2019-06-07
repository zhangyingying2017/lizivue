<template>
	<div id="head">
		<div class="head-left" @click="$router.back()">
			<i class="iconfont icon-jiantou3"></i>
		</div>
		<div class="head-center">
			{{title}}
		</div>
		<div class="head-right"></div>
	</div>
</template>

<script>
	export default{
		props:["title"]
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
		}
	}
</style>