import store from '@/store';
import redirects from './redirects';
import Error from './error';

const requestInterceptor = (config) => {
    const token = store.getters.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
};

const requestErrorHandler = (error) => {
    return Promise.reject(error);
};

const responseInterceptor = (response) => {
    return response;
};

const responseErrorHandler = (error) => {
    const { status } = error.response;

    // Error 401: Unauthorized
    if (status === 401) {
        console.log('#Error 401: Unauthorized');
        redirects.login();
    }

     // Error 403: Forbiden
     if (status === 403) {
        console.log('#Error 403: Forbiden');
        redirects.home();
    }

    // Error 419: Token mismatch??
    if (status === 419) {
        console.log('#Error 419: Authentication Timeout');
    }

    // Error 500: Server error
    if (status >= 500) {
        console.log('#Error 500: Internal Server Error');
    }

    return Promise.reject(new Error(status));
};

export {
    requestInterceptor,
    requestErrorHandler,
    responseInterceptor,
    responseErrorHandler
};