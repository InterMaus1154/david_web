/*
  js/script.js
  =================
  Fare calendar: element references, the month range and helpers. Provided file,
  don't change it: write your code in solution.js.
*/

const FIRST_MONTH = '2026-11'; // first month in the data
const LAST_MONTH = '2026-12'; // last month in the data

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const monthTitle = document.getElementById('month-title');
const calendar = document.getElementById('calendar');
const dayTitle = document.getElementById('day-title');
const dayFlights = document.getElementById('day-flights');

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// monthName('2026-11') returns 'November 2026'.
function monthName(month) {
  const [y, m] = month.split('-').map(Number);
  return MONTHS[m - 1] + ' ' + y;
}

// addMonths('2026-11', 1) returns '2026-12'; addMonths('2026-12', -1) returns '2026-11'.
function addMonths(month, delta) {
  const [y, m] = month.split('-').map(Number);
  const d = new Date(y, m - 1 + delta, 1);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

// longDate('2026-11-18') returns 'Wednesday 18 November 2026'.
function longDate(date) {
  const [y, m, d] = date.split('-').map(Number);
  return (
    WEEKDAYS[new Date(y, m - 1, d).getDay()] +
    ' ' +
    d +
    ' ' +
    MONTHS[m - 1] +
    ' ' +
    y
  );
}

// flightsOn('2026-11-18') returns that day's flights from data/fares.js, for example
// [{ date: '2026-11-18', flight: 'SW 702', dep: '07:10', arr: '09:25', fare: 142 }, ...],
// or an empty array when there are none.
function flightsOn(date) {
  return FARES.flights.filter((f) => f.date === date);
}

// drawGrid('2026-11') fills #calendar with the month: empty span.day.day--pad cells
// before the 1st (weeks start on Monday), then one button.day per day with
// data-date="YYYY-MM-DD", a span.date with the day number and an empty span.fare.
// It returns the day buttons, in date order.
function drawGrid(month) {
  const [y, m] = month.split('-').map(Number);
  const daysInMonth = new Date(y, m, 0).getDate();
  const firstWeekday = (new Date(y, m - 1, 1).getDay() + 6) % 7; // Monday = 0
  calendar.innerHTML = '';
  for (let i = 0; i < firstWeekday; i++) {
    const pad = document.createElement('span');
    pad.className = 'day day--pad';
    calendar.appendChild(pad);
  }
  const buttons = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'day';
    button.dataset.date = month + '-' + String(day).padStart(2, '0');
    const number = document.createElement('span');
    number.className = 'date';
    number.textContent = day;
    const fare = document.createElement('span');
    fare.className = 'fare';
    button.append(number, fare);
    calendar.appendChild(button);
    buttons.push(button);
  }
  return buttons;
}

// Once the page has loaded: shows the first month, then starts your code.
document.addEventListener('DOMContentLoaded', () => {
  monthTitle.textContent = monthName(FIRST_MONTH);
  drawGrid(FIRST_MONTH);
  init();
});
