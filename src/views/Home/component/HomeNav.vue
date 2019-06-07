<template>
	<div class="home-nav">
		<ul>
			<li v-for="(homeNavListData,index) in homeNavListDatas" :key="index">
				<img :src="homeNavListData.imgsrc" alt="" />
				<span>{{homeNavListData.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				"homeNavListDatas":[{
					"id":1,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcd2544f.png",
					"title":"店铺街"
				},{
					"id":2,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcbd4a78.png",
					"title":"品牌街"
				},{
					"id":3,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcdbb221.png",
					"title":"促销活动"
				},{
					"id":4,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcdaec56.png",
					"title":"最新团购"
				},{
					"id":5,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcd65430.png",
					"title":"积分换购"
				},{
					"id":6,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcd0d080.png",
					"title":"微社区"
				},{
					"id":7,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcd936f9.png",
					"title":"微筹"
				},{
					"id":8,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcd74357.png",
					"title":"拍卖活动"
				},{
					"id":9,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcb312ae.png",
					"title":"超值礼包"
				},{
					"id":10,
					"imgsrc":"http://test.dscmall.cn/data/gallery_album/original_img/5950cbcde3b3c.png",
					"title":"专题会"
				}]
			}
		}
	}
</script>

<style lang="less">
	.home-nav{
		width: 100%;
		ul{
			display: flex;	
			justify-content: center;
			flex-wrap: wrap;
			text-align: center;
			margin-top: 10px;
			margin-bottom: 10px;
			li{
				width: 20%;
				img{
					width: 1.5rem;
					height: 1.35rem;
					display: inline-block;
					margin-bottom: 2px;
				}
				span{
					font-size: 0.37rem;
					display: block;
					margin-bottom: 5px;
				}
			}
		}
	}
</style>