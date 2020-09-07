<template>
	<div>
		<ul>
			<li v-for="(item,index) in childList" :key="index">
				<a href="#">{{item}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			 childList: ['长庆租房', '南星租房', '复兴租房', '仁和租房', '文一西路租房', '清泰租房', '西兴租房', '义桥租房', '建德租房', '九堡租房', '万达广场租房', '黄龙租房', '古荡租房', '和睦租房', '西溪租房', '拱宸桥租房', '翡翠城租房', '武林租房', '天水租房', '大江东租房', '彩虹城租房', '华家池租房','申花租房', '丝绸城租房' ,'湖滨租房' ,'笕桥租房', '半山租房', '浦沿租房', '三塘租房', '长河租房' ,'三墩租房', '勾庄租房', '沿江北租房' ,'古荡租房', '火车东站租房' ,'义桥租房', '雄镇楼租房' ,'丁桥租房', '近江租房', '良渚租房', '德胜东租房', '长河租房' ,'富阳租房', '大关租房', '和平租房', '学军租房', '临浦租房', '桐庐租房', '闸弄口租房' ,'嘉绿租房' ,'清泰租房', '景芳租房', '大江东租房', '三塘租房', '文一西路租房', '闲林租房', '沿江南租房', '复兴租房', '金沙湖租房', '留下租房']
		}
	},

	created () {

	},

	methods: {

	}
}
</script>

<style scoped lang='less'>
ul {
	width: 100%;
	height: 100px;
	padding-left: 0;
	li {
		float: left;
		a {
			display: inline-block;
			margin-right: 15px;
			color: #707787;
			cursor: pointer;
			margin-bottom: 4px;
		}
	}
}
</style>
