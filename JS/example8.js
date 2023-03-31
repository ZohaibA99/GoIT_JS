// Write a function formatTime(minutes) that will translate the value of minutes (number of minutes) 
// to a string in hour and minute format HH:MM.

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60).toString().padStart(2, 0);

    const min = (minutes % 60).toString().padStart(2,0);

    return `${hours}:${min}`;

}//implement this function

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"