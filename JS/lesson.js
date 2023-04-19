const customer = {
    firstname: "David",
    lastname: "Mercer",
    getFullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

function makeMessage(callback){
    console.log(`Processing request from ${callback()}`);
}

makeMessage(customer.getFullName.bind(customer));