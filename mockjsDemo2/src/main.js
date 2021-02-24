// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './mock/'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')