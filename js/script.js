//basic setup and adding event listeners
//create CRUD implementation of todoos
import { addNewTask, handleTaskBehavior, fillTasksList } from "./functions.js";

const addBtn = document.getElementById("addBtn");
const myUL = document.getElementById("myUL");

addBtn.addEventListener("click", addNewTask);
myUL.addEventListener("click", handleTaskBehavior);
window.addEventListener("DOMContentLoaded", fillTasksList);






















// const postId = 1;

// const url = "https://jsonplaceholder.typicode.com/posts"

////GET Method for API (READ)
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));


///POST METHOD for API (CREATE)
// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome"
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
// .then(response => response.json())
// .then(post => console.log(post))
// .catch(error => console.log(error));


////PATCH Method for (UPDATE) Request
// const postToUpdate = {
//     id: 101,
//     body: "CRUD is really awesome",
// };

// const options2 = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options2)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {method: "DELETE"})
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));