//Write a script to display hours and minutes in the browser console as a string format "14 hours 26 minutes."
//. If the value of the minutes variable is 0, then output the string "14 o'clock", without minutes.

const hrs = 15;
const minutes = 59;
let timeString;

if(minutes == 0){
    timeString = `${hrs} o'clock`;
    console.log(timeString);
}else{
    timeString = `${hrs} hours ${minutes} minutes`;
    console.log(timeString);
}