// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.
// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const chickenComboMeal = {
    sandwichType:"Chicken",
    fries: false,
    drinkSize: "Small"
}
const steakComboMeal = {
    sandwichType:"Steak",
    fries: true,
    drinkSize: "Super Large"
}

const restaurant = {
    name: "Bob's Burgers",
    orders: ["Mashed Potatoes"],
    placeOrder: function (orderPlace) {
        this.orders.push(orderPlace);
    },
}

restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(steakComboMeal);

for(let i = 0; i < restaurant.orders.length; i++){
    console.log(restaurant.orders[i])
}

// Place an order

// Invoke the function to return the list of all orders
// Output all orders to the console using console.table()
// makeDrink: function(drinkParam){
//     let sentenceToReturn = "No Can Do!"
//     for(let i = 0; i <this.drinksCanMake.length; i++){
//         if(this.drinksCanMake[i] === drinkParam){
//             sentenceToReturn = `Here's your ${drinkParam}`;
//         }
//     }
// },