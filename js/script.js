//fetch api request
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => {
//         // handle repsonse
//         if(!response.ok){
//             throw new Error(response.status);
//         }
//         return response.json();
//     })
//     .then(data => { 
//         //data handling
//     })
//     .catch(error => console.log(error.message));


//setting up api requests

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//     fetchUsers()
//     .then((user) => renderUserList(user))
//     .catch((error) => console.error(error.message));
// }) 

// function fetchUsers(){
//     return fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => {
//                 if(!response.ok){
//                     throw new Error(response.status);
//                 }
//                 return response.json();
//             })
// }

// function renderUserList(users) {
//     const markup = users.map((user) => {
//         return `
//         <li>
//             <p>Name: ${user.name}</p>
//             <p>Email: ${user.email}</p>
//             <p>address: ${user.company.name}</p>
//         </li>
//         `;
//     })
//     .join("");
//     userList.innerHTML = markup;
// }

//type a key word in to the search bar. on click we should return all articles
//that are similar to the key word we search for.

//news api
//GET news articles 
//if using search feature return closely matching news articles

import API from "./api.js";

const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    const form = e.currentTarget;
    const inputValue = form.elements.news.value;

    API.getNews(inputValue)
        .then(({articles}) => {
            if(articles.length === 0) throw new Error("No data");

            return articles.reduce(
                (markup, article) => createMarkup(article) + markup
            )

        })
        .then(updateNewsList)
        .catch(onError)
        .finally(form.reset());
}

function createMarkup({author, title, description, url, urlToImage}){
    return `
    <div class="article-card">
        <h2 class="article-title">${title}</h2>
        <h3 class='article-author'>${author}</h3>
        <img class='article-image' src=${urlToImage}/>
        <p class='article-description'>${description}</p>
        <a href=${url} class='article-link' target="_blank">Read More<a>
    </div>
    `
}

function updateNewsList(markup){
    document.getElementById("articlesWrapper").innerHTML = markup
}

function onError(err){
    console.error(err);
    updateNewsList('<p>Articles not found</p>');
}