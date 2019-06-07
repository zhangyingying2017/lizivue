<template>
	<div class="header">
		<div class="header-left">
			<i class="iconfont icon-dingwei"></i>
			<span>郑州</span>
			<i class="icon iconfont icon-jiantou-copy-copy"></i>
		</div>
		<div class="header-center">
			<input type="text" />
		</div>
		<div class="header-right">
			<i class="iconfont icon-dkw_xiaoxi"></i>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.header{
		width: 100%;
		height: 1.5rem;
		position: fixed;
		top: 0px;
		background-image: linear-gradient(to bottom,#333,rgba(0,0,0,0));
		color: #fff;
		z-index: 999;
		.header-left{
			float: left;
			width: 25%;
			line-height:1.5rem;
			span{
				font-size: .3rem;
			}
			i{
				font-size: 0.5rem;
				line-height:1.5rem;
			}
		}
		.header-center{
			float: left;
			width: 65%;	
			font-size: 0.44rem;
			line-height:1.5rem;
			input{
				border-radius: 0.6rem;
				text-indent: 0.5rem;
				height:1rem;
				border: none;
				width: 95%;
				background: rgba(255,255,255,.5);
			}
		}
		.header-right{
			float: left;
			width: 10%;	
			i{
				font-size: 0.5rem;
				line-height:1.5rem;
			}
		}
	}
</style>