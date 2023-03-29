// Write a script that "unwraps" a string (reverse letter order) 
// and prints it to the console.

const string = 'Welcome to the future';

// const result = string.split('');
// console.log(result.toString());
// const rev = result.reverse();
// console.log(rev.toString());
// const str = rev.join('');

const str = string.split('').reverse().join('')

console.log(str);
