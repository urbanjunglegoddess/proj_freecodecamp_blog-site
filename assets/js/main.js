// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};
//Nav styles on scroll
const scrollHeader=( )=> {
    constheaderElement = selectElement('#header');
    if(this.scrollY >=15){
        headerElement.classlist.add('activated');}
    else{
        headerElement.classlist.remove('activated');}
}; 


// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper