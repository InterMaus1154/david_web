/*
  js/script.js
  =================
  Booking reference check: the form wiring. Provided file, don't change it:
  write your code in solution.js.
*/

const form = document.getElementById('check-form');
const input = document.getElementById('reference');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const reference = normaliseReference(input.value);
  if (isValidReference(reference)) {
    result.textContent = 'Valid reference: ' + reference;
    result.className = 'result ok';
  } else {
    result.textContent = 'Invalid reference';
    result.className = 'result bad';
  }
});
