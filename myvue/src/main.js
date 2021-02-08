// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(from.matched)
  console.log(to.matched)
  if(to.meta.login==false){
    next('/login');
  }
  next();
});

router.afterEach((to, from)=>{
  document.title = to.meta.title;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
})
