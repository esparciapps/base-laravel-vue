import routes from './routes';
import redirects from './router_redirects';
import interceptors from './axios_interceptors';
import store from '@/store';

const api_token = 'api_token';

const api = {
    routes,
    redirects,
    auth: {
        token: store.getters.token,
        user: store.getters.user,

        authenticated: function () {
            return store.getters.authenticated;
        },

        getAuthenticatedUser: async function () {
            try {
                const response = await axios.get('/api/me');

                return response.data;
            } catch (error) {
                console.log(error);
            }
        },

        login: async function (form) {
            try {
                const response = await axios.post('/login', form);
                console.log('response:', response);
                const token = response.data.api_token;
                store.commit('setToken', { token });
                
                const user = await api.auth.getAuthenticatedUser();
                store.commit('setUser', { user });

                redirects.home();
            } catch (error) {
                console.log('error:', error);
            }
        },

        logout: function () {
            store.dispatch('logout');
            redirects.login();
        },
    }
};

export default api;
