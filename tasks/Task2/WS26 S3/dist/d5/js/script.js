/*
  js/script.js
  =================
  Passenger selector: element references, limits, state, the plural() helper and
  the click wiring. Provided file, don't change it: write your code in solution.js.
*/

const MAX_SEATED = 9; // adults + children
const MIN_ADULTS = 1;

function stepper(type) {
  const row = document.querySelector('[data-type="' + type + '"]');
  return {
    count: row.querySelector('.count'),
    minus: row.querySelector('.minus'),
    plus: row.querySelector('.plus'),
  };
}

const adults = stepper('adults');
const children = stepper('children');
const infants = stepper('infants');
const summary = document.getElementById('summary');

// The current selection: change() updates it, render() shows it.
const state = { adults: 1, children: 0, infants: 0 };

// plural(2, 'adult', 'adults') returns "2 adults"; plural(1, 'child', 'children') returns "1 child".
function plural(count, singular, pluralForm) {
  return count + ' ' + (count === 1 ? singular : pluralForm);
}

adults.minus.addEventListener('click', () => change('adults', -1));
adults.plus.addEventListener('click', () => change('adults', 1));
children.minus.addEventListener('click', () => change('children', -1));
children.plus.addEventListener('click', () => change('children', 1));
infants.minus.addEventListener('click', () => change('infants', -1));
infants.plus.addEventListener('click', () => change('infants', 1));

// Shows the starting selection once the page has loaded (render() is in solution.js).
document.addEventListener('DOMContentLoaded', () => render());
