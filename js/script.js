// const list = document.getElementById('list');
// if(list){
//     console.log(list.children.length);
// } else{
//     console.log('This element does not exist in the DOM');
// }

//* 1. Create a list of technologies studied in the Fullstack course using js
// Show how it is done with the help of **map** and **reduce**

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

//gets a reference (connection) to our div element with id of container 
const container = document.getElementById('container');

//creating ul (remeber it has not been added to the DOM yet)
const list = document.createElement('ul');

//mapFunction

// const listContent = technologies.map((tech) => `<li>${tech}</li>`).join("");
// list.insertAdjacentHTML("beforeend", listContent);
// list.innerHTML = listContent;

// container.append(list);



//reduce function
const listContent = technologies.reduce((acc, techonolgy) => (acc += `<li>${techonolgy}</li>`), "");

//add li to ul (remember they will not be displayed until you add the ul to the DOM)
list.insertAdjacentHTML("beforeend", listContent);

//adde ul to dom
container.append(list);


//default way

/*
    1. Create a container for ul tag
    2. Create a cycle for sorting array elements
    3. Create a li tag
    4. Write the text from the array into the li tag
    5. Place li inside of ul
    6. Place ul tag with items on the page
*/

// const list = document.createElement('ul');
// for (const tech of technologies){
//     const liEl = document.createElement('li');
//     liEl.textContent = tech;
//     list.append(liEl);
// }
// container.append(list);

///2. Create several buttons based on an array of objects using createElement

const createTheseButtons = [
    {
        label: 'red',
        color: "#FF0000"
    },
    {
        label: 'blue',
        color: "#0000FF"
    },
    {
        label: "green",
        color: "#00FF00"
    }

];


/*
    1. Iterate through the array of colors using a loop
    2. Create a button
    3. Set the background color of the button
    4. Set the text of the button
    5. Add a button to the document
*/

createTheseButtons.forEach(({label, color}) => {
    const buttonEl = document.createElement('button');
    buttonEl.style.backgroundColor = color;
    buttonEl.classList.add("indents");
    buttonEl.style.margin = '5px';
    buttonEl.textContent = label;
    container.appendChild(buttonEl);
})