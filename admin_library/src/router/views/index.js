import Index from '@/views/layout/Layout'

export default [
    {
        path: '/',
        redirect: '/home',
        component: Index,
        children: [
            {
                name: 'home',
                path: '/home',
                meta: {
                    isAuth: true,
                    title: '首页'
                },
                component: () => import('@/views/home/Home')
            },
            {
                name: 'bookList',
                path: '/bookList',
                meta: {
                    isAuth: true,
                    title: '书库管理'
                },
                component: () => import('@/views/bookList/bookList')
            },
            {
                name: 'studentList',
                path: '/studentList',
                meta: {
                    isAuth: true,
                    title: '学生管理'
                },
                component: () => import('@/views/studentList/studentList')
            }
            
        ]
    }
]
