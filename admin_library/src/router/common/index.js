export default [
    {
        name: 'login',
        path: '/login',
        meta: {
            isAuth: false,
            title: '欢迎来到图书馆管理系统!'
        },
        component: () => import('@/views/login/Login')
    },
    {
        name: '403',
        path: '/403',
        meta: {
            isAuth: false,
            title: '403'
        },
        component: () => import('@/components/error/403')
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        name: '404',
        path: '/404',
        meta: {
            isAuth: false,
            title: '404'
        },
        component: () => import('@/components/error/404')

    },
    {
        name: '500',
        path: '/500',
        meta: {
            isAuth: false,
            title: '500'
        },
        component: () => import('@/components/error/500')
    }
]
