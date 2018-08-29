import Rest from '@/api/rest';
import store from '@/store';

class Auth extends Rest {
    get token () {
        return store.getters.token;
    }

    get user () {
        return store.getters.user;
    }

    async login (form) {   
        const data = await this.post('/login', form);

        const token = data.api_token;
        store.commit('setToken', { token });

        const user = await this.authenticatedUser();
        store.commit('setUser', { user });   
    }

    async logout () {
        await this.get('/api/logout');
        store.dispatch('logout');
    }

    async authenticatedUser () {
        return await this.get('/api/me');
    }

    async ping () {
        return await this.get('/api/ping');
    }
}

export default Auth;
