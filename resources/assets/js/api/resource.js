import Rest from './rest';

class Resource extends Rest {
    constructor(client, prefix = '/api') {
        super(client);

        this.url = prefix + '/' + this.name() + '/';
    }

    route(id) {
        return id ? this.url + id : this.url;
    }

    find(id) {
        const data = this.get(this.route(id));

        return this.map(data) || data;
    }

    all() {
        return this.client.get(this.route()).forEach((entity) => {
            return this.map(entity) || entity;
        });
    }

    create(data) {
        const response = this.client.post(this.route(), data);

        return this.map(response) || response;
    }

    update(id, data) {
        return this.client.put(this.route(id), data);
    }

    destroy(id) {
        return this.client.delete(this.route(id));
    }

    delete(id) {
        return this.destroy(id);
    }

    map(response) {
        return false;
    }

    name() {
        return false;
    }
}

export default Resource;