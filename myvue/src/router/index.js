import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import One from '@/components/One' 
import Two from '@/components/Two'

Vue.use(Router)

export default new Router({
  routes: [    
    {
    path: '/', 
    redirect:'/HelloWorld'//为了让直接进入页面显示的是helloworld
  },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[ // 嵌套子路由
        {
            path:'/one', // 子页面1 
            component:One
        },
        {
            path:'/two', // 子页面2 
            component:Two
        },
    ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode:'history'//这里设置模式，不会有#出现
})
