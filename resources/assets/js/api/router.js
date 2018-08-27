class Router {
    constructor (client) {
        this.client = client;

        this.resources = [];
    }

    async get (resource) {
        if (! this.hasResource(resource)) {
            // throw exception
            return false;
        }

        return await this.client.get(resource);
    }

    addResource (resource) {
        if (this.hasResource(resource)) {
            return false;
        }

        this.resources.push(resource);

        return true;
    }

    hasResource (resource) {
        return this.resources.includes(resource);
    }
}

