import store from '@/store';
import api from '@/api';

export default {
    token: () => {
        return store.getters.token;
    },
    user: () => {
        return store.getters.user;
    },

    authenticated: () => {
        return store.getters.authenticated;
    },

    getAuthenticatedUser: async () => {
        try {
            const response = await api.routes.me();
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    },

    login: async (form) => {
        try {
            const response = await api.routes.login(form);
            const token = response.data.api_token;
            store.commit('setToken', { token });

            const user = await api.auth.getAuthenticatedUser();
            store.commit('setUser', { user });

            api.redirects.home();
        } catch (error) {
            console.log('error:', error);
        }
    },

    logout: async () => {
        try {
            await api.routes.logout();
            await store.dispatch('logout');

            api.redirects.login();
        } catch (error) {
            console.log(error);
        }
    }
};
