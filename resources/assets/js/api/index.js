import client from './client';

import Auth from './endpoints/auth';
import UserResource from './endpoints/users';

const api = {
    auth: new Auth(client),
    users: new UserResource(client),
};

export default api;
