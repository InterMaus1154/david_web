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
