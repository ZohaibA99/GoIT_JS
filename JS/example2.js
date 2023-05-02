/* 
Write a Storage class that creates objects for managing a warehouse of goods. 
When called, it will receive one argument - the initial array of goods, 
and write it to the items property.

Add class methods:

getItems() - returns an array of products.
addItem(item) - receives a new product and adds it to the current ones.
removeItem(item) - receives the product and, if it exists, 
removes it from the current.

*/

class Storage{
    constructor(arr){
        this.arr = arr;
    }

    getItems(){
        return this.arr;
    }

    addItem(item){
        this.arr.push(item);
    }

    removeItem(item){
        const idx = this.arr.indexOf(item);

        console.log(idx);
        if (!!~idx){
            this.arr.splice(idx, 1);
        }
        else{
            console.log("Doesn't exist");
        }
    }
}


const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
console.log(storage);