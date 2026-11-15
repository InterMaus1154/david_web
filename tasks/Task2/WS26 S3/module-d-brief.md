## Tasks

### D1 – Departures Board (Level 1)

**Folder:** `d1/`

**Edit:** `css/solution.css`

**Description:** Südwest's Stuttgart departures board is a plain table. Style it with CSS only so it reads at a glance: alternating rows, coloured statuses, a header that stays in view while the list scrolls, and fewer columns on narrow screens.

**Restrictions:** CSS only. Change only the solution file.

**Samples:** `sample/sample-a.png` (desktop), `sample/sample-b.png` (mobile), `sample/sample-video.mp4` (scrolling the board).

#### Requirements

- Body rows alternate between the default background and `--row-alt`.
- The Status cell text is coloured by its `data-status` value: `on-time` uses `--status-ok`, `delayed` uses `--status-warn` and `cancelled` uses `--status-bad`.
- The header row stays visible while the board (`.board`) scrolls.
- At viewport widths of 600px or less, the Gate and Aircraft columns (`.col-gate`, `.col-aircraft`) are hidden.

### D2 – Flight Progress (Level 1)

**Folder:** `d2/`

**Edit:** `css/solution.css`

**Description:** A flight-status card shows the route from Stuttgart to Vienna as a dashed line with an aircraft icon at the start. Using CSS only, make the aircraft fly along the route.

**Restrictions:** CSS only, no JavaScript. Change only the solution file.

**Samples:** `sample/sample-a.png`, `sample/sample-video.mp4`.

#### Requirements

- The aircraft (`.plane`) moves continuously from the Stuttgart end of the track (`.track`) to the Vienna end, taking about 6 seconds per crossing, then starts again from Stuttgart.
- While the pointer is over the route (`.route`), the aircraft pauses where it is; it continues when the pointer leaves.
- Both airport codes (`.airport strong`, STR and VIE) pulse continuously: each grows to about 1.2 times its size and back, about every 2 seconds.

### D3 – Booking Reference Check (Level 1)

**Folder:** `d3/`

**Edit:** `js/solution.js` (JavaScript) or `php/solution.php` (PHP). Pick one stack.

**Description:** Südwest booking references are six characters long and avoid characters that are easily confused. Write the two functions behind the booking reference form; the form (which stops at six characters) and the result line are provided.

**Restrictions:** Plain JavaScript or PHP. Change only the solution file.

**Samples:** `sample/sample-a.png` (valid), `sample/sample-b.png` (invalid).

**Test references:** `abc234` is valid (shown as ABC234); `abc123` is invalid.

#### Requirements

- `normaliseReference()` converts the value to upper case; the page checks and shows this value.
- `isValidReference()` returns true only for exactly six characters, each A–Z (except I and O) or 2–9. Use the pattern `/^[A-HJ-NP-Z2-9]{6}$/` (JavaScript `.test()`, PHP `preg_match()`).

### D4 – Fix the Page (Level 1)

**Folder:** `d4/`

**Edit:** `index.html`

**Description:** Südwest's online check-in page works, but an accessibility review found errors. Fix them in the HTML so that WAVE reports no errors or alerts.

**Restrictions:** HTML only. Do not modify `css/style.css` or the images. Keep every field, heading and the button; do not remove content to make an error disappear.

**Samples:** `sample/sample-a.png` (WAVE on the starter page: the errors to fix), `sample/sample-b.png` (WAVE on the fixed page: 0 errors, 0 alerts).

#### Requirements

- The page declares its language.
- Every form control (booking reference, surname, email address, checked baggage) has a visible label that assistive technology associates with it.
- The two heading icons are decorative and have an empty alternative text; the seat map conveys information and has alternative text that names your seat, 12A.
- Heading levels do not skip.
- "Continue to boarding pass" is a real button: it can be reached with the keyboard and activated with Enter or Space, and it still submits the form.
- After your fixes, WAVE reports no errors or alerts on the page.

### D5 – Passenger Selector (Level 2)

**Folder:** `d5/`

**Edit:** `solution.js`

**Description:** The booking flow needs a passenger selector: three steppers (adults, children, infants) with Südwest's booking rules applied, and a summary line that always reflects the current selection. The HTML, the CSS and `js/script.js` (element references, the `state` object, the `plural()` helper and the click wiring) are provided; write `change()` and `render()` in `solution.js`.

**Restrictions:** Plain JavaScript. Change only the solution file.

**Samples:** `sample/sample-a.png`, `sample/sample-video.mp4`.

#### Requirements

- Each `+` and `-` button changes its own count by one; adults never go below 1.
- Adults and children are seated passengers; together they never exceed 9 (`MAX_SEATED`).
- Each infant travels on an adult's lap, so infants never exceed adults. When adults are reduced below the current number of infants, the infants count is reduced to match.
- A button is disabled whenever clicking it would break a rule, including on page load (for example `-` for adults at 1, both `+` seated buttons at 9 seated, `+` for infants when infants equal adults).
- `#summary` always shows the current selection with correct singular and plural words, listing only groups that are not zero: for example "1 adult", "2 adults, 1 child", "2 adults, 1 child, 1 infant".

### D8 – Fare Calendar (Level 3)

**Folder:** `d8/`

**Edit:** `solution.js`

**Description:** Südwest wants a fare calendar for Stuttgart to Barcelona: a month grid showing the lowest fare on each day, with the cheapest day highlighted, month navigation, and the flights of the selected day listed underneath. The page, the CSS, the data (`data/fares.js`, every flight from 18 November to 31 December 2026 with its fare) and `js/script.js` are provided: it draws the month grid (`drawGrid()`) and has the helpers `monthName()`, `addMonths()`, `longDate()` and `flightsOn()`. Complete `init()` in `solution.js`.

**Restrictions:** Plain JavaScript. Change only the solution file.

**Samples:** `sample/sample-a.png` (November with 18 November selected), `sample/sample-b.png` (December), `sample/sample-video.mp4`.

#### Requirements

- Each day with flights shows the lowest fare of that day in its `span.fare`.
- A day without flights shows `-` as its fare, has the class `day--empty` and is disabled.
- Every day whose lowest fare is the lowest in the displayed month has the class `day--cheapest`.
- `#prev` and `#next` move one month back or forward within `FIRST_MONTH` to `LAST_MONTH`, showing that month's grid and its name in `#month-title`; they are disabled at the ends of that range.
- Clicking a day with flights gives it the class `day--selected` (one day at a time), sets `#day-title` to the full date (for example "Wednesday 18 November 2026") and fills `#day-flights` with one `li` per flight that day, sorted by departure time, showing the flight number, departure and arrival times and the fare.

### D9 – Connection Finder (Level 3)

**Folder:** `d9/`

**Edit:** `js/solution.js` (JavaScript) or `php/solution.php` (PHP). Pick one stack.

**Description:** Südwest flies a point-to-point network, so many city pairs are only reachable with a change of aircraft. Build the search behind the connection finder page: given every flight of the day, the origin and the destination, return the direct flights and the one-stop journeys. The page, the airport selects, the rendering, the data, the layover limits (`MIN_LAYOVER`, `MAX_LAYOVER`) and a `minutes()` helper are provided; complete `findJourneys()` in the solution file.

**Restrictions:** Plain JavaScript or plain PHP, no libraries. Change only the solution file. The PHP page calls `api/journeys?from=STR&to=BCN`.

**Samples:** `sample/sample-a.png` (Stuttgart to Barcelona), `sample/sample-b.png` (no journeys).

**Test searches:**

| From | To  | Journeys                 | First journey listed                     |
| ---- | --- | ------------------------ | ---------------------------------------- |
| STR  | BCN | 6 (2 direct, 4 one-stop) | SW 706, 2h 15m, 99 EUR                   |
| FRA  | LIS | 3 (all one-stop)         | SW 824 + SW 830 via BCN, 4h 40m, 148 EUR |
| MXP  | STR | 2 (1 direct, 1 one-stop) | SW 631, 1h 10m, 69 EUR                   |
| FKB  | BCN | 0                        | "No journeys found"                      |

#### Requirements

- `findJourneys(flights, from, to)` returns the journeys from `from` to `to`, each `{ legs, duration, fare }` (PHP: an array with the same keys): `legs` holds the flights in travel order, `duration` is the minutes from the first departure to the last arrival, `fare` is the sum of the leg fares.
- A direct flight is a journey with one leg. A one-stop journey is two flights that connect at the same airport, with 45 minutes to 4 hours (both included) between the first arrival and the second departure.
- Journeys are sorted by `duration`, then by `fare`, lowest first. When nothing is found the function returns an empty array and the page shows "No journeys found".

## Provided files

In the `dist/` folder:

- `index.html` – the task index: it links to each task folder and shows which tasks are present in your submission
- `d1/` to `d9/` – one folder per task with its starter files and, where provided, a `sample/` folder

