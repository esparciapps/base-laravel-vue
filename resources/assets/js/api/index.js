import routes from './routes';
import redirects from './router_redirects';
import interceptors from './axios_interceptors';
import store from '@/store';
import http from './http';

import auth from './modules/auth';

http({
    method: 'get',
    url: 'api/ping'
}).then((resp) => {
    console.log(resp);
});

const api = {
    routes,
    redirects,
    auth,

    ping: async () => {
        const response = await axios.get('/api/ping');
        return response;
    }
};

export default api;
