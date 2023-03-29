// Write a script to iterate over the fruits array with a for loop. 
// For each array element print a string in the format 
// element_number: element_value to the console. 
// Element numbering must start from 1.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0, num = 1; i < fruits.length; i++, num++){
    console.log(`Number ${num}`, fruits[i]);
}