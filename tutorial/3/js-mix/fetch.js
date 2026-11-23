// ===================================
// 7. FETCH + ASYNC/AWAIT
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
