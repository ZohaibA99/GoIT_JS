//1.   set inline styles of block class element 
//..   give each text class element a new class "active"
//...  for each button check dataset "active" value and style background of each button accordingaly
//.... add a click event to showCT button
// const block = document.getElementById('block');
// block.style.backgroundColor = 'blue';

// const texts = document.getElementsByClassName('text');
// texts[2].classList.add("active");

// console.log(texts);

// const text1 = document.querySelector(".container .text:last-child");
// console.log("🚀 ~ text1", text1);

// text1.style.backgroundColor = "green";

// const buttons = [...document.getElementsByTagName("button")];

// buttons.forEach((el) => {
//     const status = el.dataset.active;
//     if(status === "true") el.style.backgroundColor = "pink";
//     else el.style.backgroundColor = 'red';
// })

// showCT.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.currentTarget);
// });



////////////////////////////////////
//2.  form events practice
//..  add submit event to form
//... and use a function handle submit that will handle our submit event for use


// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event){
//     event.preventDefault();

//     console.dir(event.currentTarget.elements.login);

//     const{
//         elements:{login, password},
//     } = event.currentTarget;


//     if(login.value === "" || password.value === ""){
//         return console.log("Types something in to the input fields");
//     }

//     console.log(`login: ${login.value}  Password: ${password.value}`);
//     event.currentTarget.reset();
// }


////////////////////////////////////
//3. more button event practice
//.. create an obj mango that has a username property and a showUsername() method

// const mango = {
//     username: "Mango",
//     showUsername(){
//         console.log(this);
//         console.log(`My username: ${this.username}`);
//     }
// }


// const btn = document.querySelector(".js-btn");

// mango.showUsername();


// //XXXX this will refer to the button if you use showUsername as the call back
// //btn.addEventListener("click", mango.showUsername());///this is incorrect

// //// remeber to bind the contect of the objects methods
// btn.addEventListener("click", mango.showUsername.bind(mango));

// document.addEventListener('keydown', event =>{
//     console.log(event);
// })



///////////////Part 2 of exercise 3

// const btn = document.querySelector(".js-btn");

// btn.addEventListener("click", handleClick);

// let counter = 0;

// function handleClick(e){
//     counter++;
//     console.log(counter);
//     if(counter === 5){
//         btn.removeEventListener("click", handleClick);
//     }
// }



//////////////////////////////////
//4.  modal window practice
//..  implement event to open modal 
//... implement event to close modal
//... Also implement keyboard event that should close modal window when the user presses the "esc" key
//    ANYWHERE IN THE DOCUMENT (not just the modal).

// const openModalBtn = document.getElementById("openModalBtn");
// const overlay = document.getElementById("overlay");
// const closeBtn = document.getElementById("closeBtn");
// const openClass = "open";

// openModalBtn.addEventListener("click", handleModalOpen);
// overlay.addEventListener("click", handleModalClose);
// closeBtn.addEventListener("click", handleModalClose);
// document.body.addEventListener("keydown", handleModalCloseOnESC);

// function handleModalCloseOnESC({key}){
//     if(key === "Escape"){
//         console.log(`Escape key pressed`)
//         handleModalClose();
//     } else{}
// }

// function handleModalOpen() {
//   document.body.classList.add(openClass);
//   console.log('open modal bttn')
// }

// function handleModalClose() {
//   document.body.classList.remove(openClass);
//   console.log('close modal')
// }