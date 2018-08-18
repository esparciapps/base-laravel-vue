import routes from './routes';
import redirects from './router_redirects';

const api_token = 'api_token';

export default {
    routes,
    redirects,
    auth: {
        token: localStorage.getItem(api_token),

        isLoggedIn: function () {
            return localStorage.getItem(api_token) !== null;
        },

        login: async function (form) {
            try {
                const response = await axios.post('/login', form);
                localStorage.setItem('api_token', response.data.api_token);
                redirects.home();
            } catch (error) {
                console.log(error);
            }
        },

        logout: function () {
            localStorage.removeItem(api_token);
            redirects.login();
        }
    }
};
