import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import axios from 'axios'
import './assets/css/base.css'

Vue.config.productionTip = false

Vue.prototype.$Axios = axios
axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/12538/'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
