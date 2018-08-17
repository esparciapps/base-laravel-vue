import Login from '@/stories/auth/Login';
import Home from '@/stories/Home';

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }
];