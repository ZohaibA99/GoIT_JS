// Write a script to find the smallest number in an array. 
// The code should work for any array of numbers. 
// Use a loop to solve problems.

const numbers = [2, 17, 94, 1, -23, 37];
let min = numbers[0];

// for(const number of numbers){
//     if (min > number){
//         min = number;
//     }
// }


for (let i = 0; i < numbers.length; i++){
    if (min > numbers[i]){
        min=numbers[i];
    }
}

console.log(min); // 1