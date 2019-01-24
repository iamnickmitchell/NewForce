//1.
// - Create three new files: an `index.html`, a JavaScript file, and a CSS file
// - Copy and paste the following code into your `index.html` file:
// <article id="container"></article>
// 
// - Write a function called buildSection that accepts two arguments: `text` and `style`

function html(text, style){
    return `<h2 class=${style}>${text}</h2>`
}

// - The function should return an HTML component of a section element with whatever text and class (`style`) you pass in. 

document.querySelector("#container").innerHTML = html("Nicholas", "CEO");

// - Go ahead and add some CSS rules to whatever style you pass in so you can see if it worked or not.
// - Call the function and insert your section into the DOM