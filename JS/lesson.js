function hello(){
    console.log("hellow");
}

function greetUser(name, callback){
    callback();
    console.log(name);
}

greetUser("zohaib", hello);

const greetUser = (name, callback) => {
    callback();
    console.log(name);
}