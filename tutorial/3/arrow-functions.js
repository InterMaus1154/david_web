// ===================================
// 1. ARROW FUNCTIONS RECAP
// ===================================

// A traditional function
function addRegular(a, b) {
    return a + b;
}

// The same thing written as an arrow function
const addArrow = (a, b) => a + b;


console.log(addRegular(2, 3));
console.log(addArrow(2, 3));

// Arrow functions don't have their own "this" - they use "this" from
// wherever they were WRITTEN, not from how they are called. This matters
// when a function is used as a method on an object.
const priceTag = {
    label: "Falcon",

    // Regular function: "this" is priceTag when called as priceTag.showRegular()
    showRegular: function () {
        return `this.label is "${this.label}"`;
    },

    // Arrow function: "this" is NOT priceTag here - it's whatever "this" is
    // outside the object, so this.label is undefined
    showArrow: () => {
        return `this.label is "${this.label}"`;
    }
};

console.log(priceTag.showRegular()); // this.label is "Falcon"
console.log(priceTag.showArrow());   // this.label is "undefined"

// Interactive demo: click each button to see the difference on the page
const regularButton = document.querySelector(".this-regular-button");
const arrowButton = document.querySelector(".this-arrow-button");
const thisResult = document.querySelector(".this-result");

regularButton.addEventListener("click", () => {
    thisResult.textContent = "Regular method: " + priceTag.showRegular();
});

arrowButton.addEventListener("click", () => {
    thisResult.textContent = "Arrow method: " + priceTag.showArrow();
});
