/* 
Write a script that prints to the console all 
the words of a string except the first and the last one.
The resulting string must not start or end whitespace character. 
The script should work for any line.
*/


const string = 'Welcome to the future';

const words = string.split(" ");
console.log(words.toString());

words.shift();
words.pop();

const str = words.join(" ");
console.log(str);