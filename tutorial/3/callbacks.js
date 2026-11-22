// ===================================
// 3. CALLBACK FUNCTIONS
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
