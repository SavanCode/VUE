import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import One from '@/components/One' 
import Two from '@/components/Two'
import UserList from '@/components/UserList'
import User from '@/components/User'

const Login = { template: '<div>请登录</div>' }

Vue.use(Router)

export default new Router({
  routes: [    
    {
    path: '', 
    redirect:'/HelloWorld'//为了让直接进入页面显示的是helloworld
     },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '首页'
      },
      children:[ // 嵌套子路由
        {
            path:'one', // 子页面1 
            component:One
        },
        {
            path:'two', // 子页面2 
            component:Two
        }, 
    ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于'
      },
    },
    {
      path: '/user/:id/:userName',
      name: 'User',
      component: User,
      meta: {
        title: '个人中心'
      },
      beforeEnter: (to, from, next) => {
        console.log(to,from)
        //这里要限制login权限 就要变成全局哦 暂时不弄了 嘿嘿
        console.log('进入前执行');
            next();
        }
    },
    {
      path: '/userList',
      name: 'UserList',
      component: UserList,
      meta: {
        title: '用户列表',
        login: false
      },
    },
    { 
      path: '/login', 
      name:'login', 
      component:Login,},
    {
      path: '*',
      meta: {
        title: '访问失败'
      },
      component: () => import('@/components/404')
  }
  ],
  mode:'history'//这里设置模式，不会有#出现
})
