import Resource from '@/api/resource';

class UserResource extends Resource {
    name () {
        return 'users';
    }

    map (response) {
        return {
            id: response.id,
            name: response.username,
            email: response.email,
        };
    }
}

export default UserResource;
