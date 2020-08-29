<template>
	<div>
		<!-- 头部区域 -->
		<div id="zufang-header">
			<header>
				<ul class="header_wrap w">
					<li>
						<a href="javascript:;">首页</a>
					</li>
					<li>
						<a href="javascript:;">二手房</a>
					</li>
					<li>
						<a href="javascript:;">新房</a>
					</li>
					<li>
						<a class="active" href="javascript:;">租房</a>
					</li>
					<li>
						<a href="javascript:;">海外</a>
					</li>
					<li>
						<a href="javascript:;">小区</a>
					</li>
					<li>
						<a href="javascript:;">百科</a>
					</li>
					<li>
						<a href="javascript:;">房价</a>
					</li>
					<li>
						<a href="javascript:;">发布房源</a>
					</li>
					<li>
						<a href="javascript:;">下载APP</a>
					</li>
					<li>
						<a href="javascript:;">贝壳开放平台</a>
					</li>
					<li class="last_li">
						<img src="./images/user_icon.png" alt="">
						<span><a href="javascript:;">登录/</a></span>
						<span><a href="javascript:;">注册</a></span>
					</li>
				</ul>
			</header>
		</div>
		<!-- 租房头部 -->
		<div class="search_area">
			<!-- 贝壳租房 -->
			<div class="beike_nav">
				<a href="#"><img src="./images/logo.png" alt=""></a>
				<ul class="beike_nav_tab">
					<li><a class="current" href="#">首页</a></li>
					<li><a href="#">整租</a></li>    
					<li><a href="#">合租</a></li>
					<li><a href="#">发布房源</a></li>
					<li><a href="#">下载APP</a></li>
				</ul>
				<div class="search_wrap">
					<input type="text" placeholder="请输入区域、商圈或小区名开始找房">
					<span class="search"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import './zufang.css'
export default {
	name: 'rentHouse',
	data () {
		return {
		}
	},

	created () {

	},

	methods: {

	}
}
</script>

<style scoped lang='less'>

</style>
