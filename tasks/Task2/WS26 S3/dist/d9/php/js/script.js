/*
  js/script.js - provided, do not modify
  =================
  Fills the airport selects, calls api/journeys on submit and renders the result.
  A journey is { legs: [flight, ...], duration: minutes, fare: total }.
*/

const form = document.getElementById('search-form');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const resultsTitle = document.getElementById('results-title');
const results = document.getElementById('results');

const AIRPORTS = {
  STR: 'Stuttgart',
  FRA: 'Frankfurt',
  FKB: 'Karlsruhe/Baden-Baden',
  VIE: 'Vienna',
  PRG: 'Prague',
  BUD: 'Budapest',
  BCN: 'Barcelona',
  LIS: 'Lisbon',
  MXP: 'Milan Malpensa',
  ORY: 'Paris Orly',
};

for (const [code, name] of Object.entries(AIRPORTS)) {
  fromSelect.add(new Option(name + ' (' + code + ')', code));
  toSelect.add(new Option(name + ' (' + code + ')', code));
}
fromSelect.value = 'STR';
toSelect.value = 'BCN';

function hoursMinutes(minutes) {
  return (
    Math.floor(minutes / 60) +
    'h ' +
    String(minutes % 60).padStart(2, '0') +
    'm'
  );
}

function renderJourneys(journeys, from, to) {
  resultsTitle.textContent =
    from +
    ' to ' +
    to +
    ': ' +
    journeys.length +
    (journeys.length === 1 ? ' journey' : ' journeys');
  results.innerHTML = '';
  if (!journeys.length) {
    results.innerHTML = '<li class="empty">No journeys found</li>';
    return;
  }
  for (const journey of journeys) {
    const legs = journey.legs
      .map(
        (leg) =>
          '<span class="leg">' +
          leg.flight +
          ' ' +
          leg.from +
          ' ' +
          leg.dep +
          ' - ' +
          leg.to +
          ' ' +
          leg.arr +
          '</span>'
      )
      .join('');
    const via =
      journey.legs.length > 1
        ? '<span class="via">via ' + journey.legs[0].to + '</span>'
        : '<span class="via">direct</span>';
    results.innerHTML +=
      '<li><div class="legs">' +
      legs +
      via +
      '</div>' +
      '<div class="totals"><span>' +
      hoursMinutes(journey.duration) +
      '</span><span class="fare">' +
      journey.fare +
      ' EUR</span></div></li>';
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const from = fromSelect.value;
  const to = toSelect.value;
  results.innerHTML = '<li class="empty">Searching...</li>';
  try {
    const response = await fetch('api/journeys?from=' + from + '&to=' + to);
    const body = await response.json();
    if (!response.ok || !Array.isArray(body)) {
      results.innerHTML =
        '<li class="empty">HTTP ' +
        response.status +
        ': ' +
        JSON.stringify(body) +
        '</li>';
      return;
    }
    renderJourneys(body, from, to);
  } catch (err) {
    results.innerHTML =
      '<li class="empty">Request failed: ' + err.message + '</li>';
  }
});
