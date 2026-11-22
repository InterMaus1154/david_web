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


// ===================================
// SHARED DATA
// Used by the callback and array/string method sections below.
// ===================================

const products = [
    { name: "Falcon", price: 1299.99, inStock: true },
    { name: "Titan", price: 2499.00, inStock: false },
    { name: "Aero", price: 1099.50, inStock: true },
    { name: "Nimbus", price: 349.99, inStock: true },
    { name: "Quantum", price: 699.00, inStock: true }
];


// ===================================
// 2. CALLBACK FUNCTIONS
// ===================================

// A callback is just a function passed into another function to be run later
function processOrder(productName, callback) {
    console.log("Processing order for " + productName + "...");
    callback(productName);
}

function printConfirmation(productName) {
    console.log(productName + " has shipped!");
}

processOrder("Falcon", printConfirmation);

// You've already been using callbacks without naming them: the function
// passed to addEventListener is a callback, run later when the click happens

// setTimeout takes a callback and a delay in milliseconds
setTimeout(() => {
    console.log("This runs 1 second later, as a callback");
}, 1000);

// Interactive demo: look up a typed product name after a short delay, then
// run one of two different callbacks depending on what was found
const stockInput = document.querySelector(".callback-product-input");
const stockButton = document.querySelector(".callback-check-button");
const stockResult = document.querySelector(".callback-result");

function checkStock(name, onFound, onNotFound) {
    setTimeout(() => {
        const product = products.find((product) => product.name.toLowerCase() === name.toLowerCase());

        if (product) {
            onFound(product);
        } else {
            onNotFound(name);
        }
    }, 500);
}

stockButton.addEventListener("click", () => {
    const name = stockInput.value;
    stockResult.textContent = "Checking stock...";

    checkStock(
        name,
        (product) => {
            stockResult.textContent = product.inStock
                ? `${product.name} is in stock!`
                : `${product.name} is out of stock.`;
        },
        (name) => {
            stockResult.textContent = `No product called "${name}" was found.`;
        }
    );
});


// ===================================
// 3. ARRAY AND STRING METHODS
// ===================================

// .map() builds a new array by transforming every item
const names = products.map((product) => product.name);
console.log(names);

// .filter() builds a new array with only the items that pass a test
const inStockOnly = products.filter((product) => product.inStock);
console.log(inStockOnly);

// .reduce() combines every item down into a single value
const totalValue = products.reduce((total, product) => total + product.price, 0);
console.log(totalValue);

// String methods: toLowerCase(), includes(), trim()
function matchesSearch(productName, query) {
    return productName.toLowerCase().includes(query.trim().toLowerCase());
}

console.log(matchesSearch("Aero", "aero"));

// Interactive demo wired to buttons and a live search input
const arrayOutput = document.querySelector(".array-output");
const arrayMessage = document.querySelector(".array-message");
const searchInput = document.querySelector(".array-search-input");

function renderList(list) {
    arrayOutput.innerHTML = "";
    list.forEach((product) => {
        const item = document.createElement("li");
        item.textContent = `${product.name} - £${product.price}`;
        arrayOutput.appendChild(item);
    });
}

document.querySelector(".array-names-button").addEventListener("click", () => {
    arrayMessage.textContent = "All products:";
    renderList(products);
});

document.querySelector(".array-instock-button").addEventListener("click", () => {
    arrayMessage.textContent = "In stock only:";
    renderList(products.filter((product) => product.inStock));
});

document.querySelector(".array-total-button").addEventListener("click", () => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    arrayMessage.textContent = `Total value of all products: £${total.toFixed(2)}`;
    arrayOutput.innerHTML = "";
});

searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    const matches = products.filter((product) => matchesSearch(product.name, query));

    arrayMessage.textContent = query ? `Results for "${query}":` : "All products:";
    renderList(query ? matches : products);
});


// ===================================
// 4. LOCAL STORAGE
// ===================================

// localStorage only stores strings, so arrays/objects must be converted
// with JSON.stringify() to save, and JSON.parse() to read them back

const favouriteInput = document.querySelector(".favourite-input");
const favouriteAddButton = document.querySelector(".favourite-add-button");
const favouriteClearButton = document.querySelector(".favourite-clear-button");
const favouriteList = document.querySelector(".favourite-list");

function getFavourites() {
    const saved = localStorage.getItem("favouriteProducts");
    return saved ? JSON.parse(saved) : [];
}

function saveFavourites(favourites) {
    localStorage.setItem("favouriteProducts", JSON.stringify(favourites));
}

function renderFavourites() {
    const favourites = getFavourites();
    favouriteList.innerHTML = "";

    favourites.forEach((name) => {
        const item = document.createElement("li");
        item.textContent = name;
        favouriteList.appendChild(item);
    });
}

favouriteAddButton.addEventListener("click", () => {
    const name = favouriteInput.value.trim();
    if (name === "") return;

    const favourites = getFavourites();
    favourites.push(name);
    saveFavourites(favourites);
    renderFavourites();

    favouriteInput.value = "";
});

favouriteClearButton.addEventListener("click", () => {
    localStorage.removeItem("favouriteProducts");
    renderFavourites();
});

// Render whatever was saved the last time this page was open
renderFavourites();


// ===================================
// 5. EVENT HANDLING
// ===================================

// Every event listener callback receives an "event" object with details
// about what happened and where

const eventForm = document.querySelector(".event-form");
const eventInput = document.querySelector(".event-input");
const eventMessage = document.querySelector(".event-message");

eventForm.addEventListener("submit", (event) => {
    // preventDefault() stops the form from reloading the page
    event.preventDefault();
    eventMessage.textContent = `Form submitted with: "${eventInput.value}"`;
});

// The "input" event fires on every keystroke (and paste, etc.), so it's
// how you make something update live as the user types
const typingInput = document.querySelector(".event-typing-input");
const typingOutput = document.querySelector(".event-typing-output");

typingInput.addEventListener("input", () => {
    typingOutput.textContent = typingInput.value;
});

// Mouse events: mouseenter / mouseleave
const hoverBox = document.querySelector(".event-hover-box");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.textContent = "You're hovering!";
});

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.textContent = "Hover over me";
});

// Keyboard events: event.key tells you which key was pressed
const keypressInput = document.querySelector(".event-keypress-input");
const keypressResult = document.querySelector(".event-keypress-result");

keypressInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        keypressResult.textContent = `You typed: "${keypressInput.value}"`;
    }
});


// ===================================
// 6. FETCH + ASYNC/AWAIT
// ===================================

// fetch() asks for a file/URL and returns a Promise. Marking a function
// "async" lets it use "await", which pauses the function until that
// Promise finishes - so the code reads top-to-bottom instead of being
// nested inside .then() callbacks

const fetchButton = document.querySelector(".fetch-button");
const fetchMessage = document.querySelector(".fetch-message");
const fetchList = document.querySelector(".fetch-product-list");

async function loadProducts() {
    fetchMessage.textContent = "Loading...";
    fetchList.innerHTML = "";

    try {
        const response = await fetch("./products.json");

        if (!response.ok) {
            throw new Error("Could not load products.json");
        }

        const catalogue = await response.json();

        fetchMessage.textContent = `Loaded ${catalogue.length} products from the file:`;

        catalogue.forEach((product) => {
            const item = document.createElement("li");
            item.textContent = `${product.name} (${product.brand}) - £${product.price} - ${product.inStock ? "In stock" : "Out of stock"}`;
            fetchList.appendChild(item);
        });
    } catch (error) {
        fetchMessage.textContent = "Something went wrong loading the products.";
        console.log(error);
    }
}

fetchButton.addEventListener("click", loadProducts);
