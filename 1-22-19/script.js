const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

let paulName = beatles.members[1].name
let paulBirth = beatles.members[1].birth
console.log(paulName, "was in the Beatles from ", beatles.history.formed, " to ", beatles.history.disbanded, ". He was born in", paulBirth,". He contributed heavily to the ", beatles.albums[3], " album.")

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.









// var myName = "Dwayne";
// console.log(myName);

// var myAge = 47;
// console.log(myAge);

// var sum = 2 + 2 + 2;
// console.log("This should be 6", sum)

// var mathProblem = "2 + 2 + 2";
// console.log("This is a math problem", mathProblem)

// var likesPizza = true;
// console.log("Does Dwayne like Pizza?", likesPizza)

//let acts like a variable

// let likesPizza = true;
// likesPizza = false;

// let myAge = 47;
// myAge = "cheese";
// console.log(myAge)

//const acts like a variable except you can't reassign input

// const name = "Nick";
// console.log(name)

// 1. Use the `var` keyword to instantiate and assign a variable called `myName` that holds the value of your name (a string)

// var myName = "Nick";

// 2. Use the `let` keyword to instantiate and assign a variable called `numberOfPets` that holds the number of pets you hvae

// let numberOfPets = 1;

// 3. Use the `const` keyword to instantiate and assign a variable called `socialSecurity` that holds a fake social security number (please don't use your real one, I'll get in trouble)

// const socialSecurity = "123-45-6789";
// const bio = `${myName} has ${numberOfPets} pet(s) and their social security number is ${socialSecurity}.`
// console.log(bio)

// console.log(myName)
// console.log(numberOfPets)
// console.log(socialSecurity)

// 1. Instantiate and assign a variable called `petNames` that stores an array of the names of your pets' names (as strings). If you don't have any pets, or just have one, make up a few.

// var petNames = ["Peyton", "Theodore","Fish", "Jr."]

// 2. Loop through your `petNames` array and log each pet's name to the console.

// for(let i = 0; i < petNames.length; i++){
//     console.log(petNames[i])
// }

// const hasPets = true;
// if(hasPets){
//     alert("What are your pets names?")
// } else {
//     alert("You should get some...")
// }

// const age = 21;
// const isCitizen = true;
// if(age >= 21){
//     console.log("You can drink.")
// } else if(age >= 18 && isCitizen === true){
//     console.log("You can vote!")
// } else {
//     console.log("Nope. You can't do anything.")
// }

// const myRealPet = "Peyton";
// for (let i =0; i < petNames.length; i++){
//     if(petNames[i] === "Peyton"){

//     }
// }

// 1. Create an array of your favorite foods. For the sake of this exercise, please include "noodles" as one of your favorite foods.

// let favoriteFoods = ["Cod", "Steak", "Buttered Pasta"]

// 2. Loop through the array and log each food to the console

// for(let i = 0; i < favoriteFoods.length; i++){
//     console.log(favoriteFoods[i])
// }

// 3. Add a conditional to the loop and check to see if any of your favorite foods are "noodles". If the current food is noodle, you should log "Heck yeah!! Noodles!" to the console.

// for(let i = 0; i < favoriteFoods.length; i++){
//     if(favoriteFoods[i] === "noodles" || favoriteFoods[i] === "Noodles" || favoriteFoods[i] === "Buttered Pasta" || favoriteFoods[i] === "pasta"){
//         console.log("Heck yeah!! Noodles!")
//     } else {
//         console.log(favoriteFoods[i])
//     }
// }

// Challenge: refactor the conditional so that it checks for variations on the word "noodles". This if statement should check if the current food is "noodles" OR "Noodles" OR "Pasta", etc. 
// Here's a link for reference: https://www.w3schools.com/js/js_comparisons.asp


// const cupOfCoffee = {
//     price: 1.99,
//     size: "16 oz",
//     ingredients: ["beans", "water"],
//     inStock: true
// }

// const employee001 = {
//     name: "Nick",
//     position: "Owner, Founder",
//     startDate: "11/10/19",
//     fullTime: true,
//     pay: "$500,000/year",
// }

// const employee002 = {
//     name: "Megan",
//     position: "Head of Customer Interactions",
//     startDate: "11/14/19",
//     fullTime: false,
//     pay: "$50,000/year",
// }

// const ayreshireTechEmployees = [employee001, employee002]
// console.log(ayreshireTechEmployees)

// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// const car = {
//     make: "Ford",
//     model: "Mustang",
//     color: "red",
//     year: "2015"
// }

// // Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// let shelterAnimals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// // Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// const dad = {
//     name: "Todd",
//     age: 48,
//     hairColor: "Black"
// }

// const mom = {
//     name: "Tracie",
//     age: 46,
//     hairColor: "Brown"
// }

// const sister = {
//     name: "Elizabeth",
//     age: 19,
//     hairColor: "Brown",
// }

// const pet = {
//     name: "Peyton",
//     age: 11,
//     hairColor: "Red"
// }

// const family = [dad, mom, sister, pet];

// console.log(family[0].name)
// console.log(dad["hairColor"])

// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height)
// console.log(wardrobe.manufacturer)
// console.log(wardrobe.contents)
// console.log(wardrobe.depth)
// console.log(wardrobe.width)



// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// console.log(empireStateBuilding.height)
// console.log(empireStateBuilding.stories)
// console.log(empireStateBuilding.squareFeet)
// console.log(empireStateBuilding.eastWestLength)
// console.log(empireStateBuilding.northSouthLength)

// // Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

// const keyForAddress = "address";
// const keyForCost = "cost";
// const keyForOwner = "owner";
// const keyForArchitect = "architect";
// const keyForConstructionDate = "constructionDate";

// console.log(empireStateBuilding[keyForAddress])
// console.log(empireStateBuilding[keyForCost])
// console.log(empireStateBuilding[keyForOwner])
// console.log(empireStateBuilding[keyForArchitect])
// console.log(empireStateBuilding[keyForConstructionDate])

// // Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

// const newForce = {
//     founded: 2018,
//     instructors: {
//         fullTime: ["Jordan", "Josh", "Kim"],
//     },
//     careerAdvisors: ["Natalie", "Kinsey"],
//     address: "1000 5th Ave, Huntington, WV 25701"
// }


// Lightning Exercise 1: Output the names of the instructors to the console.

// const instructors = newForce.instructors.fullTime
// console.log(instructors)
// console.log(newForce.instructors.fullTime)
// for(let i = 0; i < instructors.length; i++){
//     console.log(instructors[i])
// }

// Lightning Exercise 2: Output the names of the career advisors to the console.

// let advisors = newForce.careerAdvisors
// console.log(advisors)
// console.log(newForce.careerAdvisors)
// for(let i = 0; i < advisors.length; i++){
//     console.log(advisors[i])
// }