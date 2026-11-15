/*
  solution.js
  =================
  Connection finder: complete findJourneys() below. js/script.js (provided) calls
  it when the form is submitted and shows the journeys it returns.
*/

// Provided: the layover window in minutes and a helper you can use.
const MIN_LAYOVER = 45;
const MAX_LAYOVER = 240;

// minutes('07:10') returns 430 (minutes since midnight).
function minutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

// flights:  every flight of the day, each
//           { flight: 'SW 702', from: 'STR', to: 'BCN', dep: '07:10', arr: '09:25', fare: 139 }
// from, to: airport codes, for example 'STR' and 'BCN'
// Returns an array of journeys, each
//   { legs: [flight, ...], duration: <minutes>, fare: <total> }
function findJourneys(flights, from, to) {
  // 1. Direct flights: every flight from `from` to `to` is a journey with one leg.
  // 2. One-stop journeys: a flight from `from` to another airport, then a flight from
  //    that airport to `to`, when the wait between the first arrival and the second
  //    departure is MIN_LAYOVER to MAX_LAYOVER minutes (both included).
  // 3. For each journey: duration = minutes from the first departure to the last
  //    arrival; fare = the sum of the leg fares.
  // 4. Return the journeys sorted by duration, then by fare (lowest first).
  return [];
}
