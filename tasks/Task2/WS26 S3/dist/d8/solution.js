/*
  solution.js
  =================
  Fare calendar: complete init() below. js/script.js (provided) calls it once the
  page has loaded; its helpers drawGrid(), monthName(), addMonths(), longDate() and
  flightsOn() are ready to use.
*/

function init() {
  // 1. The first month (FIRST_MONTH) is already drawn when init() runs. To show
  //    another month, set #month-title (monthName) and call drawGrid(month): it
  //    redraws the grid and returns the day buttons.
  // 2. On each day button show the lowest fare of that day in its span.fare; a day
  //    without flights (flightsOn) shows '-', gets the class day--empty and is disabled.
  // 3. Add the class day--cheapest to every day whose lowest fare is the lowest of the month.
  // 4. #prev and #next move one month (addMonths) within FIRST_MONTH to LAST_MONTH and
  //    are disabled at the ends of that range.
  // 5. Clicking a day with flights gives it the class day--selected (one day at a time),
  //    sets #day-title (longDate) and fills #day-flights with one li per flight,
  //    sorted by departure, showing the flight number, the times and the fare.
}
