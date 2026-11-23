// ===================================
// 2. OBJECTS
// ===================================

// An ARRAY is an ordered LIST, read by numeric index: products[0], products[1]...
// An OBJECT is a set of NAMED properties (key/value pairs), read by name.
// Use an array when you have many of the same kind of thing (a list of products).
// Use an object when you have many facts about one thing (everything about
// a single product).

// One product described as an object
const laptop = {
    name: "Aero",
    brand: "Aero",
    category: "Laptop",
    price: 1099.50,
    inStock: true,
    specs: {
        cpu: "AMD Ryzen 7 7840U",
        ramGB: 16,
        storageGB: 512
    }
};

// Reading properties: dot notation (most common)...
console.log(laptop.name);

// ...or bracket notation (useful when the key is stored in a variable)
const key = "price";
console.log(laptop[key]);

// Objects can be nested inside objects
console.log(laptop.specs.ramGB);

// products (from shared-data.js) is an ARRAY OF OBJECTS: use [index] to get
// one product out of the list, then dot notation to read its properties
console.log(products[0].name);
console.log(products.length);        // arrays have .length...
console.log(Object.keys(laptop));    // ...objects don't, but Object.keys()
                                      // turns their property names into an array

// Looping over an object's properties with for...in (arrays use forEach instead)
for (const propertyName in laptop) {
    console.log(propertyName + ": " + laptop[propertyName]);
}

// Properties can be changed, or added, after the object is created
laptop.price = 999.50;
laptop.onSale = true;

console.log(laptop);


// Interactive demo
const objectOutput = document.querySelector(".object-output");
const objectMessage = document.querySelector(".object-message");

function renderObject(obj) {
    objectOutput.innerHTML = "";
    Object.entries(obj).forEach(([propertyName, value]) => {
        const item = document.createElement("li");
        item.textContent = `${propertyName}: ${JSON.stringify(value)}`;
        objectOutput.appendChild(item);
    });
}

document.querySelector(".object-details-button").addEventListener("click", () => {
    objectMessage.textContent = "The laptop object - everything about ONE product:";
    renderObject(laptop);
});

document.querySelector(".object-discount-button").addEventListener("click", () => {
    laptop.price = Math.round(laptop.price * 0.9 * 100) / 100;
    objectMessage.textContent = "Updated the existing \"price\" property:";
    renderObject(laptop);
});

document.querySelector(".object-sale-button").addEventListener("click", () => {
    laptop.onSale = true;
    objectMessage.textContent = "Added a brand new \"onSale\" property:";
    renderObject(laptop);
});
