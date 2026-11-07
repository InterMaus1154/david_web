
// ===================================
// 1. VARIABLES
// ===================================

const coffeeShop = "The Daily Grind";
const openingHour = 8;

let customerCount = 0;

console.log(coffeeShop);
console.log(openingHour);
console.log(customerCount);


// ===================================
// 2. DATA TYPES
// ===================================

const drinkName = "Cappuccino";  // String
const drinkPrice = 3.50;         // Number
const isAvailable = true;        // Boolean

console.log(drinkName);
console.log(drinkPrice);
console.log(isAvailable);


// ===================================
// 3. FUNCTIONS
// ===================================

// Traditional function
function greetCustomer() {
    console.log("Welcome to " + coffeeShop + "!");
}

greetCustomer();


// Arrow function
const sayGoodbye = () => {
    console.log("Thank you for visiting!");
};

sayGoodbye();


// ===================================
// 4. FUNCTIONS WITH PARAMETERS
// ===================================

function greetByName(name) {
    return "Hello, " + name + "!";
}

// Arrow function with a parameter
const calculatePrice = (price, quantity) => {
    return price * quantity;
};

console.log(greetByName("John"));
console.log(calculatePrice(3.50, 2));


// ===================================
// 5. CONDITIONAL STATEMENTS
// ===================================

if (isAvailable) {
    console.log(drinkName + " is available!");
} else {
    console.log(drinkName + " is unavailable.");
}


// ===================================
// 6. DOM SELECTION
// ===================================

// Select a single element
const welcomeButton = document.querySelector(".welcome-button");
const welcomeMessage = document.querySelector(".welcome-message");

// Select multiple elements
const drinks = document.querySelectorAll(".drink-list li");

console.log(welcomeButton);
console.log(drinks);


// ===================================
// 7. EVENT LISTENERS
// ===================================

welcomeButton.addEventListener("click", () => {
    welcomeMessage.textContent = "Welcome to " + coffeeShop + "!";
});


// ===================================
// 8. READING USER INPUT
// ===================================

const nameInput = document.querySelector("#customer-name");
const greetingButton = document.querySelector(".greeting-button");
const greetingMessage = document.querySelector(".greeting-message");

greetingButton.addEventListener("click", () => {
    const customerName = nameInput.value;

    if (customerName === "") {
        greetingMessage.textContent = "Please enter your name.";
    } else {
        greetingMessage.textContent = greetByName(customerName);
    }
});


// ===================================
// 9. QUERY SELECTOR ALL
// ===================================

const drinkButton = document.querySelector(".drink-button");

drinkButton.addEventListener("click", () => {
    drinks.forEach((drink) => {
        drink.style.color = "#8b5e3c";
        drink.style.fontWeight = "bold";
    });
});


// ===================================
// 10. CHANGING HTML CONTENT
// ===================================

const specialButton = document.querySelector(".special-button");
const specialDrink = document.querySelector(".special-drink");

specialButton.addEventListener("click", () => {
    specialDrink.textContent = "Today's special is an Iced Latte!";
});
