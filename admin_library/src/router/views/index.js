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
            }
            
        ]
    }
]
