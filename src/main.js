import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$Axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
