// ===================================
// 4. ARRAY AND STRING METHODS
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
