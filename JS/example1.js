/* 
Write a calcTotalPrice(stoneName) method that takes the name of a stone, 
calculates and returns the total cost of stones with that name, price, 
and quantity from the stones property.
*/

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    // return this.stones.reduce((acc, stone) => {
    //   if (stone.name === stoneName){
    //     return stone.price * stone.quantity
    //   }
    //   return acc;
    // }, 0)

    const currentStone = this.stones.find((stone) => stoneName === stone.name);
    return currentStone.quantity * currentStone.price;
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600