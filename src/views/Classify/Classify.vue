<template>
	<div>
		<Head title="分类"></Head>
		<div class="classify-con">
			<ClassifyLeft></ClassifyLeft>
			<ClassifyRight></ClassifyRight>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../../components/footer"; //引入公共底部组件
	import Head from "../../components/head";
	import ClassifyLeft from "./component/ClassifyLeft";
	import ClassifyRight from "./component/ClassifyRight"
	export default{
		name:"classify",
		components:{
			Footer,
			Head,
			ClassifyLeft,
			ClassifyRight
		}
	}
</script>

<style lang="less">
	.classify-con{
		width: 100%;
		margin-top: 1.5rem;
		margin-bottom: 1.8rem;
		display: flex;
		overflow: hidden;
		/*下面三行代码让没有高度的盒子背景自适应*/
		position: absolute;
		top: 0px;
		bottom: 0px;
	}
</style>