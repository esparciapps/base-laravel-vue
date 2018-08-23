import http from '@/api/http';
import store from '@/store';

const auth = {
    token: () => {
        return store.getters.token;
    }
};

export default auth;
