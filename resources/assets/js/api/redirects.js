import router from '@/router';

export default {
    login: function () {
        router.push({ name: 'login' });
    },

    home: function () {
        router.push({ name: 'home' });
    }
}