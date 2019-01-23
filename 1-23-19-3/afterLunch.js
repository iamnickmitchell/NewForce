// function screamGreeting (studentName){
//     const studentGreeting = `Hello, ${studentName}!`;
//     console.log(screamGreeting);
// }

// // 1. Write a function called `addToCart` that takes one argument of `itemName`

// function addToCart (itemName){
//     const cart = `The ${itemName} has been added to your cart!`;
//     console.log(cart)
// }
// addToCart("pizza");
// addToCart("ice cream");
// addToCart("fries");

// const storeInventory = ["lemonaid", "orange juice", "pineapple juice"]

// function upperCasifyInventory(anyArray){
//     for(let i = 0; i < anyArray.length; i++){
//         anyArray[i]
//     }
// }

// for(let i = 0; i < screamGreeting; i++){
//     screamGreeting(studentArray[i]);
// }
// // 2. The function should log the sentence "The [itemName] has been added to your cart!" to the console.
// // 3. Call the function

// //control + D

// ## 2.
// 1. Copy and paste the following array into your JavaScript file

// const inventory = ["Coats", "Gloves", "Hats", "Scarves"]

// // ```const inventory = ["Coats", "Gloves", "Hats", "Scarves"]```
// // 2. Write a function that loops through the `inventory` array and prints each item to the console.
// function loopy(inventoryArray){
// for(let i = 0; i < inventoryArray.length; i++){
//     console.log(inventoryArray[i]);
// }
// }
// // 3. Call the function

// loopy(inventory);
// loopy(["pizza"]);

// const printInventory = function(inventoryArray){
//     for(let i = 0; i < inventoryArray.length; i++){
//         console.log(inventoryArray[i]);}
// }

// printInventory(inventory);

// ## 3. 
// 1. Copy and paste the following array into your JavaScript file:

// const detailedInventory = [
//   {
//     name: "Coat",
//     quantity: 9,
//     price: 79.99
//   },
//   {
//     name: "Gloves",
//     quantity: 24,
//     price: 12.99
//   },
//   {
//     name: "Hats",
//     quantity: 16,
//     price: 9.99
//   },
//   {
//     name: "Scarves",
//     quantity: 6,
//     price: 14.99,
//   }
// ]

// // 2. Write a function that loops through the `detailedInventoryArray` and prints the name of each item to the console.

// function inventoryStuff(inventoryArray){
//     for(let i = 0; i < inventoryArray.length; i++){
//         console.log(inventoryArray[i].name);
//     }
// }
// inventoryStuff(detailedInventory);

// // 3. Refactor the function so that it only prints the name of the item if it's under $20.00. 

// function inventoryDeals(inventoryArray){
//     for(let i = 0; i < inventoryArray.length; i++){
//         if(inventoryArray[i].price < 20){
//             console.log(inventoryArray[i].name)
//         } else if(inventoryArray[i].price >=20) {
//         }
//     }
// }

// // 4. Call the function

// inventoryDeals(detailedInventory);

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     // Divide the current number by 2, and check if the remainder is 0
//     if (currentNumber % 2 === 0) {
//         console.log(currentNumber) // Only 2, 4, 6 will appear
//     }
// }

