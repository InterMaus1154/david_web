// ===================================
// 5. LOCAL STORAGE
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
