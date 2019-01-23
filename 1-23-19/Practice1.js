// Use JavaScript to obtain a reference to the first section with the class of article__header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

let articleHeader = document.querySelectorAll(".article__header");
articleHeader.textContent = "Welcome to the Nick blog";
console.log(articleHeader);

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

for(let i = 0; i < articleHeader.length; i++){
articleHeader[i].classList.add("important");
}

// Obtain a reference the element with a class of dashed and remove it.

let removedDash = document.querySelector(".dashed");
removedDash.classList.remove("dashed");

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

let goldenrod = document.querySelector(".article__footer");
goldenrod.classList.add("goldenrod");
