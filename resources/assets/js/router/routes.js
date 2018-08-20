import Login from '@/stories/auth/Login';
import Home from '@/stories/Home';
import User from '@/stories/User';

export default [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/me',
        name: 'me',
        component: User,
    },
];