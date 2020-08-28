import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import ershoufang from '../views/ershoufang.vue'
import xinfang from '../views/xinfang.vue'
import zufang from '../views/zufang.vue'
import haiwai from '../views/haiwai.vue'  
import shangye from '../views/shangye.vue'  
import xiaoqu from '../views/xiaoqu.vue'
import baike from '../views/baike.vue'
import yezhu from '../views/yezhu.vue'
import research from '../views/research.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/ershoufang',
    component: ershoufang
  },
  {
    path: '/xinfang',
    component: xinfang
  },
  {
    path: '/zufang',
    component: zufang
  },
  {
    path: '/haiwai',
    component: haiwai
  },
  {
    path: '/shangye',
    component: shangye
  },
  {
    path: '/xiaoqu',
    component: xiaoqu
  },
  {
    path: '/baike',
    component: baike
  },
  {
    path: '/yezhu',
    component: yezhu
  },
  {
    path: '/research',
    component: research
  }
]

const router = new VueRouter({
  routes
})

export default router
