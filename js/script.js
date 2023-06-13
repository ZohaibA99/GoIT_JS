// //create to get some stones from an object of stones 
// //sequentaill implenetation

// function getStone(stoneName) {
//     const stones = {
//             Emerald: {
//                 price: 1300,
//                 quantity: 4,
//             },
            
//             Diamond: {
//                 price: 2700,
//                 quantity: 3,
//             },
//             Sapphire: {
//                 price: 400,
//                 quantity: 7,
//             },
//             Rubble: {
//                 price: 200,
//                 quantity: 2,
//             }
            
//     };

//     return new Promise((resolve) => 
//         setTimeout(() => resolve(stones[stoneName]) ,500)
//     );
// }   

// /*
//     1. await can only be used inside asynchronous functions
//     2. the await instruction freezes the execution of an asynchronous function until the promise enters the rejected or fulfilled state 
//     (that is, we simulate synchronicity in the execution of asynchronous code)
//     3. await will not return a promise, but its result
//     4. an asynchronous function always returns a promise
// */

// async function getStonesSequentiallyAsync() {
//     console.time("getStones");
//     console.log("start");

//     // const emerald = await getStone("Emerald");
//     // console.log(emerald);

//     // const sapphire = await getStone("Sapphire");
//     // console.log(sapphire);

//     const emerald = getStone("Emerald");
//     const sapphire = getStone("Sapphire");


//     const stones = await Promise.all([emerald, sapphire]);
//     console.log("🚀 ~ stones", stones);

//     console.log("end");
//     console.timeEnd("getStones");
//     return stones;
// }

// function getStonesSequentially(){
//     getStone("Emerald").then((stone) => {
//         console.log(stone);

//         getStone("Sapphire").then(console.log)
//     });
// }

// console.log("Before");
// getStonesSequentiallyAsync();
// console.log("After");


// Macro tasks and Microtask
//ScriptQueue:
//PromiseJobs:

console.log("1"); //first synchcronus operatioin

setTimeout(() => console.log("2"), 0); //asynchronous operation , macro task, 5

const promise = new Promise((res) => {
    console.log('3'); //synchronus operation 2
    res('4');
})

promise.then((data) => console.log(data));  //Asynchronous operation, micro task, 4

console.log("5");  //synchronus operation 3