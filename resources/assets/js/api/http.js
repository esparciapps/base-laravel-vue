import axios from 'axios';
import auth from './modules/auth';

function client (config) {
    const instance = axios.create(config);

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

    return instance;
};

export default client;
