// Create an array genres with elements "Jazz" and "Blues".
// Add "Rock and Roll" to the end.
// Print the first element of the array to the console.
// Print the last element of the array to the console. 
// The code should work for an array random length.
// Remove the first element and print it to the console.
// Insert "Country" and "Reggae" at the beginning of the array.

const genres = ["Jazz", "Blues"];

genres.push("Rock and Roll");

console.log(genres[0]);
console.log(genres[genres.length-1]);

const deletedFirstElement = genres.shift();
console.log(deletedFirstElement);
console.log(genres);

genres.unshift('Country', "Reggae");
console.log(genres.toString());