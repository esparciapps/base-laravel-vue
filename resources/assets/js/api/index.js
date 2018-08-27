import axios from 'axios';

import Auth from './resources/auth';
import UserResource from './resources/user_resource';

const config = {};
const client = axios.create(config);

// Add a request interceptor
client.interceptors.request.use((config) => {
    const token = Auth.token();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
client.interceptors.response.use((response) => {
    return Promise.resolve(response);
}, (error) => {
    return Promise.reject(error);
});

const api = {
    auth: new Auth(client),
    users: new UserResource(client),
};

export default api;
