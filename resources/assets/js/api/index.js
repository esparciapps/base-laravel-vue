import routes from './routes';
import redirects from './router_redirects';
import interceptors from './axios_interceptors';
import store from '@/store';

import auth from './modules/auth';

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
