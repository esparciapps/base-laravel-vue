export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/stories/Home')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/stories/auth/Login')
    },
    {
        path: '/me',
        name: 'me',
        component: () => import('@/stories/User')
    },
];
