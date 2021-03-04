// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './mock'
import './mock/modules/manager/driverApi'
import './mock/modules/manager/dictionaryApi'
import './mock/modules/manager/driverAttributeApi'
import './mock/modules/manager/pointAttribute'
import './mock/modules/manager/profileApi'
import './mock/modules/manager/driverInfo'
import './mock/modules/manager/point'
import './mock/modules/manager/group' 
import './mock/modules/manager/deviceApi' 
import './mock/modules/manager/pointInfoApi' 
import './mock/modules/data/pointValueApi' 
import './mock/modules/data/deviceEvent' 

import store from './store/store'
import './plugins/element/element.js'
//import axios from './config/axios'
// import api from './http/index'

Vue.config.productionTip = false
//Vue.prototype.$http = axios
//Vue.use(api)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
