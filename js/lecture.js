// ///if the user is authorized to even access the account
// ///retrieve the user account data (name, address, posts, ....)
// const fetchFriends = () =>{
//     //"/me" -> access rights to this users account
//     return fetch("my-api.com/me")
//         .then(token => {
//             return fetch(`my-api.com/profile?token=${token}`);
//         })
//         .then(user => {
//             return fetch(`my-api.com/users/${user.id}/friends`);
//         })
// };

// //checking if user has access , if so retrive account
// //then we must retrieve the users friends
// fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error))







// //async await example    
// const fetchFriendsAsyncAwait = async () => {
//     const token = await fetch("my-api.com/me");
//     const user = await fetch(`my-api.com/profile?token=${token}`);
//     const friends = await fetch(`my-api.com/users/${user.id}/friends`);

//     return friends;
// }



// fetchFriendsAsyncAwait()
//     .then(friends => console.log(friends))
//     .catch(error => console.log(error));



// ///DIFFERENT TYPES OF ASYNC/AWAIT functions

// //function declaration of async/await
// async function foo(){
//     //await can only be used within this block
// }
// //can't use await outside of the async block


// //functional expression
// const foo = async function() {
//      //await can only be used within this block
// }
// //can't use await outside of the async block


// //Arrow funciton
// const foo = async () => {
//     //await
// }



// //Object Method
// const user = {
//     async foo() {
//         //await
//     }
// }


// //Class Method
// class user {
//     async foo(){
//         //await
//     }
// }


// /* 
// If the result of an asynchronous function (promise) is not used in outer code, 
// errors are handled in the function body by the try...catch construct. 
// The error parameter value in the catch block is the error that await will generate if the promise is rejected.
// */

// const fetchUsers = async () => {
//     try{
//         //any code that might throw error
//         //this hold my await 
//         const response = await fetch("http://jsonplaceholder.typicode.com/users");
//         const user = await response.json();
//         console.log(user);
//     }
//     catch (error){
//         //return error
//         console.error(error.message)
//     }
// }

// fetchUsers();


// /* 
// If the result of an asynchronous function (promise) is used in outer (global) code, that is, 
// outside of other asynchronous functions, errors are handled by the catch() method’s callback. 
// The error parameter value in the catch() method is the error that await will generate if the promise is rejected.
// */

// const fetchUsersGlobalError = async () =>{
//     const response = await fetch("http://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// }

// fetchUsersGlobalError()
//     .then(user => console.log(user))
//     .catch(error => console.log(error));



// /* 
// If the result of an asynchronous function is used in another asynchronous function, 
// errors are handled by the try...catch construct. 
// The error parameter value in the catch block is the error that await will generate if the promise is rejected.
// */
// const fetchUsersAsynctoAsync = async () => {
//     const response = await fetch("http://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// }

// const doStuff = async () =>{
//     try{
//         const users = await fetchUsersAsynctoAsync();
//         console.log(users);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }


//Parallell Requests
// const fetchUsersParallelReq = async () => {
//     const baseUrl =  "https://jsonplaceholder.typicode.com";

//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);

//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();

//     console.log(firstUser, secondUser, thirdUser);
// }

// fetchUsersParallelReq();


const fetchUsersPromiseArray = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const userIds = [1, 2, 3];

    const arrayOfPromises = userIds.map(async userId => {
        const response = await fetch(`${baseUrl}/users/${userId}`);
        return response.json();
    })

    const users  = await Promise.all(arrayOfPromises);
    console.log(users);
};

fetchUsersPromiseArray();