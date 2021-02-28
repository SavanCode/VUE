// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './mock/mock'
//import store from './store/store'
//import axios from 'axios'
import api from './http/index'

Vue.config.productionTip = false
//Vue.prototype.$http = axios
Vue.use(api)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //store,
  render: h => h(App)
}).$mount('#app')
