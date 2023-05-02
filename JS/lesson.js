class User{
    name;

    #email;

    constructor({name, email}){
        this.name = name;
        this.#email = email;
    }

    get email(){
        return this.#email;
    }

    set email(newEmail){
        this.#email = newEmail;
    }
}

const mango = new User({ name: "Mango", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email);

class a extends b{
    
}