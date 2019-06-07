<template>
	<div id="footer-wrap">
		<ul class="footer">
			<router-link to="/home" tag="li">
				<div class="icons">
					<i class="iconfont icon icon-shouye1" style="color: #ff495e;" v-if="active=='home'"></i>
					<i class="iconfont icon icon-shouye" v-else></i>
				</div>
				<span>首页</span>
			</router-link>
			<router-link to="/classify/1" tag="li" :class="{'router-link-active':flag}">
				<div class="icons">
					<i class="iconfont icon icon-leimupinleifenleileibie2
            " style="color: #ff495e;" v-if="active=='classify'"></i>
					<i class="iconfont icon icon-leimupinleifenleileibie" v-else></i>
				</div>
				<span>分类</span>
			</router-link>
			<router-link to="/news" tag="li">
				<div class="icons">
					<i class="iconfont icon icon-dongtaixuanzhong" style="color: #ff495e;" v-if="active=='news'"></i>
					<i class="iconfont icon icon-dongtaiweixuanzhong
            " v-else></i>
				</div>
				<span>动态</span>
			</router-link>
			<router-link to="/cart" tag="li">
				<div class="icons">
					<i class="iconfont icon icon-gouwucheman
            " style="color: #ff495e;" v-if="active=='cart'"></i>
					<i class="iconfont icon-gouwuche
            " v-else></i>
				</div>
				<span>购物车</span>
			</router-link>
			<router-link to="/mine" tag="li">
				<div class="icons">
					<i class="iconfont icon icon-wodedangxuan
            " style="color: #ff495e;" v-if="active=='mine'"></i>
					<i class="iconfont icon icon-profile
            " v-else></i>
				</div>
				<span>我的</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				active:"home",
				flag:false
			}
		},
		mounted:function(){  //生命周期，模板编译完成
			//console.log(this.$route.path)
			//console.log(this.active)
			this.active=this.$route.path.slice(1)
			if(this.$route.path=="/classify/1"){
				this.flag=true
			}
		}
	}
</script>

<style lang="less" scoped>  /*lang="less" 定义css的编码规则*/
	/*安装less  css预处理   cnpm install less less-loader --save*/
	/*scoped 定义的样式只能在该组件中有效*/
	#footer-wrap{
		width: 100%;
		position: fixed;
		bottom: 0px;
		background: #fff;
		.footer{
			display:flex;
			text-align:center;
			height:1.8rem;
			border-top:1px solid #EFEFEF;
			li{
				display:flex;
				justify-content: center;
				flex-direction: column;
				width: 20%;
				span{
					font-size: .37rem;
				}
				i{
					font-size: .7rem;
				}
			}
		}
	}
	
	.router-link-active{
		color: #ff495e;
	}
</style>