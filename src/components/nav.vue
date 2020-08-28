<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <router-link :to="item.path">{{item.title}}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          title: '二手房',
          path: '/ershoufang'
        },
        {
          title: '新房',
          path: '/xinfang'
        },
        {
          title: '租房',
          path: '/zufang'
        },
        {
          title: '海外',
          path: '/haiwai'
        },
        {
          title: '商业办公',
          path: '/shangye'
        },
        {
          title: '小区',
          path: '/xiaoqu'
        },
        {
          title: '百科',
          path: '/baike'
        },
        {
          title: '我是业主',
          path: '/yezhu'
        },
        {
          title: '贝壳研究院',
          path: '/research'
        }]
    }
  },

  created () {

  },
  components: {
  },
  methods: {

  }
}
</script>

<style scoped lang='less'>
li {
  float: left;
  text-align: center;
  list-style: none;
}
li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
}
</style>
