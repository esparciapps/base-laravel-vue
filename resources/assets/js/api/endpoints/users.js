import Resource from '@/api/resource';

class UserResource extends Resource {
    map (response) {
        return {
            id: response.id,
            name: response.username,
            email: response.email,
        };
    }

    name () {
        return 'users';
    }
}

export default UserResource;
