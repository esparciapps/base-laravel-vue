import store from '@/store';

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
            const response = await axios.get('/api/me');

            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    login: async (form) => {
        try {
            const response = await axios.post('/login', form);
            const token = response.data.api_token;
            store.commit('setToken', { token });
            
            const user = await api.auth.getAuthenticatedUser();
            store.commit('setUser', { user });

            redirects.home();
        } catch (error) {
            console.log('error:', error);
        }
    },

    logout: () => {
        store.dispatch('logout');
        redirects.login();
    }
};