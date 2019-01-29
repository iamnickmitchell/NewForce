// const latte = {
//     name: "Latte",
//     price: 6.99,
//     availableSizes: ["Small", "Large"],
//     availableMilkTypes: ["normal", "soy"],
//     calories: 200
// }
// const americano = {
//     name: "Americano",
//     price: 1.99,
//     availableSizes: ["Small", "Large"],
//     calories: 0
// }
// const mocca = {
//     name: "Mocca",
//     price: 4.99,
//     availableSizes: ["Small", "Large"],
//     availableMilkTypes: ["normal", "soy"],
//     calories: 100
// }


// const coffeeShop = {
//     address: "123 street",
//     openHours: "6am to 6pm",
//     name: "Megan's Mocca",
//     menu: [
//         latte,
//         americano,
//         mocca
//     ]
// }

// console.log(coffeeShop);


// coffeeShop.openHours = "6am to 5pm";
// console.log(coffeeShop);

// ---------------------------------------------------------------------------------------------

// 1. Build three objects. Each one should represent an employee at the coffee shop.

// function makeDrink(drinkParam){
//     console.log(`I made you this ${drinkParam}`);
// }

const Nick = {
    name: "Nick",
    startDate: "2019",
    jobTitle: "Head Mocca Maker",
    payRate:"$15/hr",
    favoriteDrink:"Espresso Shot vanilla frappachinno",
    drinksCanMake:["coffee", "frappe", "lemonaid", "milkshakes", "punch"],
    makeDrink: function(drinkParam){
        let sentenceToReturn = "No Can Do!"
        for(let i = 0; i <this.drinksCanMake.length; i++){
            if(this.drinksCanMake[i] === drinkParam){
                sentenceToReturn = `Here's your ${drinkParam}`;
            }
        }
    },
    learnNewDrink: function(newDrinkParam){
     this.drinksCanMake.push(newDrinkParam);
    }
}
const Megan = {
    name: "Megan",
    startDate: "2019",
    jobTitle: "The Boss",
    payRate:"$20/hr",
    favoriteDrink:"Mountain Dew",
    drinksCanMake:["coffee", "punch", "lemonaid", "milkshakes"],
}
const otherNick = {
    name: "Nick 2",
    startDate: "2020",
    jobTitle: "Bus boy",
    payRate:"$7.50/hr",
    favoriteDrink:"coffee (straight black)",
    drinksCanMake:["coffee", "frappe", "lemonaid", "milkshakes"],
    makeDrink: function(drinkParam){
        console.log(`${this.name} made you this ${drinkParam}`);}
}

// 2. Each employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteDrink
// - an array of drinks they know how to make

const coffeeShopStaff = {
    fullTime:[Megan],
    partTime:[Nick, otherNick],
}

console.log(coffeeShopStaff);
Nick.makeDrink("latte");
Nick.learnNewDrink("Rootbeer");

// 2. Build another object called coffeeShopStaff
// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array. Put one of them in the full time array.
// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)


// Bonus: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"

// let sentenceToReturn = "No Can Do!"
// for(let i = 0; i <this.knownDrinks.length; i++){
//     if(this.knownDrinks[i] === drinkParam){
//         sentenceToReturn = `Here's your ${drinkParam}`;
//     }
// }