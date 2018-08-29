class Rest {
    constructor(client) {
        this.client = client;
    }

    async get(route) {
        try {
            const { data } = await this.client.get(route);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async post(route, form) {    
        try {
            const { data } = await this.client.post(route, form);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async put(route, form) {
        try {
            const { data } = this.client.put(route, form);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(route) {
        try {
            const { data } = this.client.delete(route);   
            return Promise.resolve(data);         
        } catch(error) {
            return Promise.reject(error);            
        }
    }
}

export default Rest;