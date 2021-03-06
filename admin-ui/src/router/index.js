import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import NotFound from '@/components/404'
import Main from '@/components/Main'
import Menu from '@/components/Menu'
import User from '@/components/User'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children:[
                {path:'/main',component:Main,name:'系统介绍'},
                {path:'/user',component:User,name:'用户管理'},
                {path:'/menu',component:Menu,name:'菜单管理'},
            ]
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/404',
            name: 'notFound',
            component: NotFound
        }
    ]
})

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    // 登录界面登录成功之后，会把用户信息保存在会话
    // 存在时间为会话生命周期，页面关闭即失效。
    //let token = Cookies.get('token')
    //let userName = sessionStorage.getItem('user')
    let user = sessionStorage.getItem('user')
    if (to.path === '/login') {
        // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
        if(user) {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (!user) {
        // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
            next({ path: '/login' })
        } else {
        // 加载动态菜单和路由
         //   addDynamicMenuAndRoutes(userName, to, from)
            next()
        }
    }
})

export default router