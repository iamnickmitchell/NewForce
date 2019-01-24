
let words = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""
    for (let i = 0; i < words.length; i++) {
      buildMeUp =buildMeUp + " " +words[i];
        console.log(buildMeUp);
    } 
}
addExcitement(words)