// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""
    for (let i = 0; i < sentence.length; i++) {
    if(buildMeUp[i] % 3 === 0){
        buildMeUp =buildMeUp +"!"+ sentence[i];
        // console.log(buildMeUp);
    }
    else {
        buildMeUp =buildMeUp + " " +sentence[i];
        // console.log(buildMeUp);
    }
    console.log(buildMeUp);
    }
}
addExcitement(sentence);