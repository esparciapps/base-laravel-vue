import axios from 'axios';
import auth from './modules/auth2';

export const DEFAULT_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

function http (config) {
    const baseURL = config.baseUrl || 'http://base-laravel-vue.test';
    const headers = Object.assign(DEFAULT_HEADERS, config.headers || {});
    const apiConfig = Object.assign({
        baseURL,
        headers
    }, config);

    const instance = axios.create(apiConfig);

    // Add a request interceptor
    instance.interceptors.request.use((config) => {
        const token = auth.token();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // Add a response interceptor
    instance.interceptors.response.use((response) => {
        return Promise.resolve(response);
    }, (error) => {
        return Promise.reject(error);
    });

    return instance.request(apiConfig);
};

export default http;
