<template>
	<div>
		<Header></Header>
		<Home-swiper></Home-swiper>
		<HomeNav></HomeNav>
		<HomeList></HomeList>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "../../components/footer"; //引入公共底部组件
	import Header from "../../components/Header"; 
	import HomeSwiper from "./component/HomeSwiper";
	import HomeNav from "./component/HomeNav";
	import HomeList from "./component/HomeList";
	export default{
		name:"home",
		components:{
			Footer,
			Header,
			HomeSwiper,
			HomeNav,
			HomeList
		}
	}
	
</script>

<style>
</style>