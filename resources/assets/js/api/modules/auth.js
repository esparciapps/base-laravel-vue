import store from '@/store';
import routes from '@/api/routes';
import redirects from '@/api/redirects';

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
            const response = await api.me.get();

            return response.data;
        } catch (error) {
            console.log(error);
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
            await routes.logout();
            store.dispatch('logout');
            redirects.login();
        } catch (error) {
            console.log(error);
        }
    }
};