<template>
	<div class="home-swiper">
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="(swipeListData,index) in swipeListDatas" :key="index">
		  	<img :src="swipeListData.imgsrc" alt="" />
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				"swipeListDatas":[{
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950c90968f8d.jpg"
				},{
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950c909a2259.jpg"
				},{
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950c908d2c46.jpg"
				}]
			}
		}
	}
</script>

<style lang="less">
	.home-swiper{
		height: 4.8rem;
		/*margin-top: 1.5rem;*/
		img{
			width: 100%;
			height: 4.8rem;
		}
	}
</style>