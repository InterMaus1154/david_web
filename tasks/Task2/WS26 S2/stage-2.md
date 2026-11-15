# Task 01 - Fare Class (L1)

**Folder:** `task-01/`·
**Edit:** `css/style.css` and `js/fares.js`·
**Marks:** 8
**Description:** Style the three fare-class cards (Economy / Business / First) and add interactivity so a passenger can select a fare.

**Restrictions:** You should not modify the HTML. Modify only the specified CSS and JS files, in the specified locations.

**Samples:** see _**task-01/sample/task-01.mp4**_ and _**task-01/sample/task-01.png**_.

#### Requirements

- Add a **hover effect** for `.fare` (the cards). Any visible change is acceptable: lift, shadow change, border colour, etc.
- Add a **hover effect** for `.fare-cta` (the buttons). Any visible change is acceptable.
- Style `.fare.selected` so the **selected card is visibly distinct** from unselected cards (e.g. coloured border, ring, glow, or different background).
- When a user clicks any `.fare-cta` button, add the class `selected` to that button's parent `.fare` card.
- Remove the `selected` class from any previously selected card — **only one card can be selected at a time**.

# Task 03 - Destination Search (L2)

**Folder:** `task-03/`·
**Edit:** `js/search.js`·
**Marks:** 10
**Description:** Filter the Südwest destination list as the user types and highlight the matching substring in each visible item.

**Restrictions:** Modify only `js/search.js`. Do not modify the HTML or CSS.

**Sample:** see _**task-03/sample/task-03.mp4**_.

#### Requirements

- A `highlight(text, query)` helper is **already provided** in `js/search.js` — it returns the destination name with the matched substring wrapped in `<mark>`. Use it to render visible items. Do not modify the helper.
- As the user types in `#searchInput`, filter the items in `#destinationList` so only destinations whose name contains the search string remain visible.
- Matching is **case-insensitive** and **substring-based** (e.g. typing `an` matches `Frankfurt` and `Milan`; typing `RAGUE` matches `Prague`).
- For each visible item, set its `innerHTML` to `highlight(name, query)`.
- Hide non-matching items with `el.hidden = true` (the CSS already handles `[hidden]`).
- When no items match, show the `#noResults` element. Hide it whenever at least one item is visible.
- When the input is **empty**, show all items with no highlight.

---

# Task 04 - Flight Load Bars (L1)

**Folder:** `task-04/`·
**Edit:** `css/style.css`·
**Marks:** 8
**Description:** Style four flight-load bars so they animate from 0 to their target occupancy percentage on page load.

**Restrictions:** Modify only `css/style.css` after the `PUT YOUR CSS CODE FROM THIS POINT ONWARD` comment. Do not modify the HTML.

**Sample:** see _**task-04/sample/task-04.mp4**_.

#### Requirements

- Each `.flight` element has its target percentage set via the inline custom property `style="--p: NN%"`. Use this property in your animation.
- Each bar has a visible track (`.load-track`) and a fill (`.load-fill`).
- On page load, the fill **animates from 0** to its target percentage (defined by `--p`).
- The animation **does not repeat** — it plays once and stops at the target width.
- The load **percentage label** (`.load-percent`) is visible on each bar.
- The fill uses a colour or gradient that is **distinct from the track**.

---

# Task 05 - Flight Review (L1)

**Folder:** `task-05/`·
**Edit:** `js/counter.js`·
**Marks:** 8
**Description:** Live character and word counter on the flight-review textarea — updates as the passenger types.

**Restrictions:** Modify only `js/counter.js`. Do not modify the HTML or CSS.

**Samples:** see _**task-05/sample/task-05.mp4**_ and _**task-05/sample/task-05.png**_.

#### Requirements

- Listen to the `input` event on `#review`.
- Update `#charCount` with the total character count (including spaces and newlines).
- Update `#wordCount` with the total whitespace-separated word count. A run of whitespace counts as a single separator.
- An empty textarea must show `0`, `0`.
- Counts must update live on every keystroke.

---

# Task 06 - Flight Rating (L2)

**Folder:** `task-06/`·
**Edit:** `js/rating.js`·
**Marks:** 10
**Description:** Implement the 5-star flight-rating component with hover preview, click-to-set, and revert-on-leave.

**Restrictions:** Modify only `js/rating.js`. Do not modify the HTML or CSS.

**Sample:** see _**task-06/sample/task-06.mp4**_.

#### Requirements

- Hover over a star: that star and **all stars before it** become highlighted (add the `active` class).
- Mouse leaves the stars container: the display reverts to the **currently selected** rating.
- Click a star: set the **current rating** to that star's `data-value`. Stars stay highlighted up to that value after click.
- The label `#ratingLabel` always shows the **current** rating in the form `N / 5` (hover preview does not change the label).
- Initial state on load: rating is **0**, no stars highlighted, label shows `0 / 5`.
- Re-clicking a different star updates the rating correctly; hovering does not change the persistent rating.

---

# Task 07 - Helper Functions (L2)

**Folder:** `task-07/`·
**Edit:** `js/functions.js`·
**Marks:** 10
**Description:** Implement five small utility functions used across the Südwest portal. The bundled validator tests them automatically.

**Restrictions:** Modify only `js/functions.js`. Function names must match exactly (case-sensitive). Do not modify any other files (`lib/validator.js`, `lib/harness.js`).

**Sample:** see _**task-07/sample/task-07.jpeg**_.

#### Requirements

- `capitalize(str)` → string. First letter of each word in upper-case, rest in lower-case; trim and collapse extra whitespace. `"hello world"` → `"Hello World"`. Empty / non-string → `""`.
- `clamp(value, min, max)` → number. Return `value` constrained to `[min, max]`. `clamp(5, 0, 10)` → `5`, `clamp(-3, 0, 10)` → `0`, `clamp(15, 0, 10)` → `10`.
- `unique(arr)` → array. Return a new array with duplicates removed, preserving first-occurrence order. Non-array → `[]`.
- `digitSum(n)` → number. Sum of digits of integer `n` (use absolute value for negatives). `digitSum(123)` → `6`, `digitSum(-42)` → `6`. Non-integer → `0`.
- `chunk(arr, size)` → array of arrays. Split `arr` into chunks of length `size`; the last chunk may be shorter. Invalid size or non-array → `[]`.
- The harness runs **10 tests** (2 per function); each function is tested independently.

---

# Task 08 - Flight Seat Selection (L3)

**Folder:** `task-08/`·
**Edit:** `js/booking.js`·
**Marks:** 15
**Description:** Interactive Südwest cabin seat map — passengers click seats on the plane to select/deselect, with live count, total fare, and highest fare in the basket.

**Restrictions:** Modify only `js/booking.js`. Do not modify the HTML or CSS.

**Samples:** see _**task-08/sample/task-08.mp4**_ and _**task-08/sample/task-08.png**_.

#### Requirements

- The cabin contains 60 seats laid out as 15 rows × 4 columns (rows 1–15, seats A–D, 2-aisle-2 with an aisle between B and C). Each `.seat` button has `data-row`, `data-pos`, and `data-price`.
- Seats with class `sold` are pre-marked and **must not** become selectable.
- Clicking an available seat toggles the `selected` class on it. Clicking a selected seat deselects it.
- Update three live stats whenever the selection changes:
  - `#selectedCount` — the number of currently selected seats.
  - `#totalPrice` — sum of `data-price` across all selected seats, formatted as `£N` (e.g. `£45`).
  - `#mostExpensive` — the highest `data-price` among selected seats, formatted as `£N` (e.g. `£15`); show `—` when nothing is selected.
- Initial state on page load: no seats selected, `#selectedCount` = `0`, `#totalPrice` = `£0`, `#mostExpensive` = `—`.

## Media Files

Most tasks include reference media in their `sample/` folder — a short video (`.mp4`) and/or screenshot (`.png` / `.jpeg`) showing the expected look or behaviour.

- Treat the sample as your **visual spec**. When the brief says _"hover effect"_, _"live counter"_, _"animate from 0"_ or _"reverts on leave"_, the sample shows you exactly what that should look and feel like.
- **Watch / view the sample before coding.** It only takes a few seconds and frequently surfaces edge cases (initial state, transitions, label format) that the bullets describe only briefly.
- Tasks 02 and 09 (SQL) have **no sample media** — the on-page **Expected** result table on the right is your reference.
- Media files are **read-only references**. Do not edit, replace, or remove them; just leave the `sample/` folder untouched.

---

## General Guidance

- Read the **Description**, **Restrictions** and **Requirements** for every task before you start coding. Each Requirement bullet is independently markable — missing one costs you marks even if everything else works.
- Use the browser's **dev tools** (Elements / Console) to find IDs, classes, and `data-*` attributes — the brief assumes you'll use the existing markup.
- **Test in the browser as you go.** Open the task's `index.html` and click / type / hover through the feature. Try edge cases: empty input, nothing selected, no matches, invalid values.
- Solutions are usually **short** — most tasks fit in a few dozen lines. If your code is sprawling, you may be over-engineering; re-read the brief and simplify.
- Tasks are **independent** and can be attempted in any order. If one is taking longer than its time guidance (see _Difficulty levels_ in the pre-shared materials), move on and come back to it.
- **Save before you switch tabs / tasks** (Ctrl+S / Cmd+S). Unsaved files are not in the ZIP.
- If you break the task and can't recover, the ZIP you received is your reset point — re-extract the original files for that single task only.

---

