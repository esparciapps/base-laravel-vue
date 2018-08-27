class Rest {
    constructor(client) {
        this.client = client;
    }

    async get(route) {
        try {
            const { data } = await this.client.get(route);
            return data;
        } catch (error) {
            console.log('error:', error);
        }
    }

    async post(route, form) {    
        try {
            const { data } = await this.client.post(route, form);

            return data;
        } catch (error) {
            console.log('error:', error);
        }
    }

    async put(route, form) {
        try {
            const { data } = this.client.put(route, form);
            return data;
        } catch (error) {
            console.log('error:', error);
        }
    }

    async delete(route) {
        try {
            const { data } = this.client.delete(route);   
            return data;         
        } catch(error) {
            console.log('error:', error);            
        }
    }
}

export default Rest;