/* 
Write the following functions:

createProduct(obj, callback) - accepts a product object without an id, and also callback. 
The function creates a product object by adding a unique identifier to it in property id 
and calls the callback passing it the created object.

logProduct(product) - callback accepting a product object and logging it to console

logTotalPrice(product) - callback receiving product object and logging the 
total value of the item in the console
*/

function createProduct(partialProduct, callback) {
    const product = {id: Date.now(), ...partialProduct}
    callback(product);
}

function logProduct(product) {
    console.log(product);
}

function logTotalPrice(product) {
    console.log(`Price: ${product.price * product.quantity}`)
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);