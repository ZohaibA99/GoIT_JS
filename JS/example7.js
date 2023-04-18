//Make the code refactoring using forEach method and arrow functions.

// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }


const logItems = (items) => items.forEach((item, index) => console.log(`index: ${index+1} ${item}`));

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);