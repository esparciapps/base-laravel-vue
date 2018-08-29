class Error {
    constructor (status) {
        this.status = status;
    }

    report () {
        console.error(this.status);
    }
}

export default Error;
