/* 
Write a class User which creates an object with properties 
login and email. Declare private properties #login and #email, 
which can be accessed via getter and setter of login and email. 
*/

class User{
    #login;
    #email;

    constructor({login, email}){
        this.#login = login;
        this.#email = email;
    }

    get login(){
        return this.#login;
    }

    set login(login){
        this.#login = login;
    }

    get email(){
        return this.#email;
    }

    set email(newEmail){
        this.#email = newEmail;
    }
}

const mango = new User({
    login: 'Mango',
    email: 'mango@dog.woof',
});
  
console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge
  
const poly = new User({
    login: 'Poly',
    email: 'poly@mail.com',
});
  
console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie