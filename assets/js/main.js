// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector); // select the element element
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  // throw an error

}
console.log(selectElement('.footer'));

//Nav styles on scroll

// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper