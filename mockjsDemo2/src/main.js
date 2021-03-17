// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './mock/'
import axios from 'axios'
axios.defaults.baseURL=''

Vue.config.productionTip = false
Vue.prototype.$http = axios//直接挂载给vue 主要是通过this.$http可以使用axios

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')