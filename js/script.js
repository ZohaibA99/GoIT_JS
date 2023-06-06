// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         if(isSuccess){
//             resolve("Success!");
//         }
//         else{
//             reject("Failure");
//         }
//     }, 2000);
// })

//promise.then(value => console.log(value)).catch(error => console.log(error)).finally(() => {console.log("promise finished executing")});

// promise.then((onResolve, onReject) => {
//     if(onReject){
//         console.log("rejected error")
//     }else{
//         console.log("onResolve call inside promise.then()");
//         console.log("Promise has resolved");
//     }
// })

/////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 2000);
// });

// promise.then(value => {
//     console.log(value); //5
//     return value * 2; 
// }).then((value => {
//     console.log(value);  //10
//     return value * 3;
// })).then(value => {
//     console.log(value);
// }).catch(error => {console.log(error)}).finally(() => console.log("promise finished executing"));


/////////////////////////////
// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(() => resolve(text), delay);
//     });
//   };

// const promiseA = makePromise("PromiseA", 10000);
// const promiseB = makePromise("promiseB", 3000);

// Promise.race([promiseA, promiseB])
// .then(value => console.log(value))
// .catch(error => console.log(error));

/////////////////////////////////////
// new Promise(resolve => resolve("success"))
// .then(value => console.log(value));

// Promise.resolve("success value").then(value => console.log(value));

// new Promise((resolve, reject) => reject("error"))
// .catch(error => console.error(error));

// Promise.reject("error .reject()").catch(error => console.error(error))

//!==============================
// console.log("a");

// Promise.reject("B")
//     .then(value => console.timeLog(value), (error) => console.error("c"))
//     .catch(err => console.error("c"))
//     .finally(() => console.log("D"));

// console.log("E") // a, E, c, D

//!==============================
// console.log('request data......');

// setTimeout(() =>  {
//     console.log("perparing data......");

//     const data = {
//         id: 1,
//         text: "hello world setTimeout()",
//         status: "important"
//     };

//     setTimeout(() => {
//         console.log("Data recieve: ", data);
//     }, 2000);
// }, 2000);

// console.log("Second Request for data....");

// const promise = new Promise((res, rej) =>{
//     setTimeout(() => {
//         console.log("perparing second pack of data.....");

//         const data = {
//             id: 1,
//             text: "hello world setTimeout()",
//             status: "important"
//         };

//         if(!data.id){
//             rej(new Error("No id!"));
//         }
//     }, 2000);
// });

// promise
// .then((data) => {
//     console.log("data changed");
//     data.status = "ordinary";
//     return data;
// })
// .then(((data) => console.log(data)))
// .catch(error => console.error(error))
// .finally(() => console.log("Promise end"));

// promise
// .then((data) => {
//     const p = new Promise((res) => {
//         console.log("Data changed");
//         data.status = "ordinary";
//         res(data);
//     });

//     p.then((data) => console.log(data))
// })
// .catch(error => console.error(error))
// .finally(() => console.log("Promise end"));

//!==============================
// const promise = new Promise((resolve, reject) => {
//     resolve("ok");
//     reject("Error: something went wrong");
// });

// promise.then(value => console.log(value));

//!==============================

// const sleep = (ms) => new Promise((res) => 
//     setTimeout(() => res(ms), ms));

// sleep(2000)
//     .then(value => console.log(`after ${value}ms`));

// sleep(50)
//     .then(value => console.log(`after ${value}ms`));

// sleep(500)
//     .then(value => console.log(`after ${value}ms`));

// Promise.all([sleep(2000), sleep(50), sleep(500)])
//     .then((value) => console.log(value));

// Promise.race([sleep(2000), sleep(50), sleep(500)])
//     .then(value => {
//         console.log(value);
//         console.log("race function");
//     });