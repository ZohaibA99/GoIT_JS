// Write a script to calculate the area of a rectangle with sides, 
// whichvalues are stored in the values variable as a string. 
// Values guaranteed separated by a space.

const values = '8 11';
const arr = values.split(" ");
const firstVal = Number(arr[0]);
const secondVal = Number(arr[arr.length-1]);
const total = firstVal * secondVal;

console.log(total);