import Index from '@/views/layout/Layout'
/**
*对于操作页面的router
*/
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
                    roles: ['student','admin'],
                    title: '首页'
                },
                component: () => import('@/views/home/Home')
            },
            {
                name: 'bookList',
                path: '/bookList',
                meta: {
                    isAuth: true,
                    roles: ['admin'],
                    title: '书库管理'
                },
                component: () => import('@/views/bookList/bookList')
            },
            {
                name: 'studentList',
                path: '/studentList',
                meta: {
                    isAuth: true,
                    roles: ['admin'],
                    title: '学生管理'
                },
                component: () => import('@/views/studentList/studentList')
            },
            {
                name: 'records',
                path: '/records',
                meta: {
                    isAuth: true,
                    roles: ['admin'],
                    title: '借书记录管理'
                },
                component: () => import('@/views/records/records')
            },
            {
                name: 'adminList',
                path: '/adminList',
                meta: {
                    isAuth: true,
                    roles: ['admin'],
                    title: '管理员管理'
                },
                component: () => import('@/views/adminList/adminList')
            },
            {
                name: 'bookType',
                path: '/bookType',
                meta: {
                    isAuth: true,
                    roles: ['admin'],
                    title: '书本类型管理'
                },
                component: () => import('@/views/bookType/bookType')
            },
            {
                name: 'bookSearch',
                path: '/bookSearch',
                meta: {
                    isAuth: true,
                    roles: ['admin','student'],
                    title: '书本查找管理'
                },
                component: () => import('@/views/bookSearch/bookSearch')
            },
            {
                name: 'adminList1',
                path: '/adminList1',
                meta: {
                    isAuth: true,
                    roles: ['admin'],
                    title: '管理员管理'
                },
                component: () => import('@/views/adminList/adminList1')
            } 
        ]
    }
]
