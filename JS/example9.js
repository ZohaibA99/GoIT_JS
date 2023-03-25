/*
Refactor the code so that the value is assigned to the value variable "variable" incomingValue if it is not equal to 
undefined or null. Otherwise, defaultValue must be assigned. Check work script for the following values of the 
incomingValue variable: null, undefined, 0, false. Use operator ?? (nullish coalescing operator).
*/

const incomingValue = 5;
const defaultValue = 10;

const coalescing = incomingValue ?? defaultValue;
console.log('coalcasingValue = ' + coalescing);
