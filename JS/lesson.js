// let a = 10;

const multiply = function(...args){
    let total = 1;
    console.log(a);

    for (const argument of args){
        total *= argument;
    }

    return total;
}


// function multiply(...args){
//     let total = 1;

//     for (const argument of args){
//         total *= argument;
//     }

//     return total;
// }


console.log(multiply(1, 2, 3));
console.log(multiply(1, 3, 5, 7, 9, 111, 22324));