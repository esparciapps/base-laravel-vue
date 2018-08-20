import axios from 'axios';
import router from '@/router';
import api from './api';

axios.interceptors.request.use(request => {
    const token = api.auth.token();
    if (token) {
        request.headers.common['Authorization'] = `Bearer ${token}`;
    }

    request.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';

    return request;
});

axios.interceptors.response.use(
    response => {
        return response;
    },

    async error => {
        if (!error.response) return;

        const { status } = error.response;

        if (status >= 500) {
            console.log('#Error 500: Internal Server Error');
        }

        // Error 401: Unauthorized
        if (status === 401) {
            console.log('#Error 401: Unauthorized');

            api.auth.logout();
        }

        // Error 419: Token mismatch??
        if (status === 419) {
            console.log('#Error 419: Authentication Timeout');
        }

        return Promise.reject(error);
    }
);

export default axios;