import Rest from '@/api/rest';
import store from '@/store';

class Auth extends Rest {
    async login (form) {
        console.log(form);
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

    token () {
        return store.getters.token;
    }

    user () {
        return store.getters.user;
    }

    async authenticatedUser () {
        const data = await this.get('/api/me');

        return data;
    }

    async ping () {
        return await this.get('/api/ping');
    }
}

export default Auth;
