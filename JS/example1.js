/*Using the if..else and prompt constructs,
 write code that will ask: "What is the official name of JavaScript?". 
 If the user enters ECMAScript, then show an alert with the string "Correct!", 
 otherwise - "Do not know? ECMAScript!"*/

let userInput = prompt("What is the official name of JavaScript?");


if (userInput == "ECMAScript"){
    console.log('CORRECT!');
}
else{
    console.log("Do you not know ECMASCRIPT!?!?");
}