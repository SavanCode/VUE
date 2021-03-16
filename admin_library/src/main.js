import Vue from 'vue'
import App from './App.vue'
import router from './router'  
import store from './store'    

// 全局配置
import 'element-ui/lib/theme-chalk/index.css' 
//import http from '@/api/config'  //axios
import './mock'   // mockjs 
import '@/plugin/element.js'

//Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')