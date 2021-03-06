export default {
    login: (data) => {
        return axios.post('/login', data);
    },
    logout: () => {
        return axios.get('/api/logout');
    },
    me: () => {
        return axios.get('/api/me');
    }
}
