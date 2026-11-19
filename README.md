# Tennessee TSA Competitive Events (2026–27)

A static site covering all 42 Technology Student Association (TSA) high school
competitive events for the 2026–27 season. For each event it shows the official
theme or problem, national eligibility, official rule updates, Tennessee Regional
and State adjustments, and a timeline built for that event.

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Season overview, key dates, searchable and filterable event list, missing-info list, sources |
| `event.html` | Event detail page (`event.html?event=<slug>`) |
| `data.js` | All event data, key dates, and source links. **Edit this file to update content.** |
| `images.js` | Photo credits (photographer, license, Commons page) for every event image |
| `app.js` | Rendering, search, filters, and per-event timelines |
| `style.css` | Styles (blueprint sheet design in TSA blue, red, and white) |
| `images/` | Event photos from Wikimedia Commons (1280px and 480px versions) |

## Sources (all 2026–27)

Last checked: **November 19, 2026**.

- TSA High School Competitions, 2027 & 2028 guide: https://tsaweb.org/competitions/high-school
- TSA Themes and Problems 2026–2027: https://tsaweb.org/competitions/themes-and-problems
- 2027 & 2028 HS Eligibility Chart: https://tsaweb.org/docs/default-source/competitions/hs-events-eligibility-charts.pdf
- TSA Competition Updates: https://tsaweb.org/competitions/competition-updates
- 2027 problem PDFs: Architectural Design, Drone Challenge (UAV), Robotics, Structural Design & Engineering (linked on each event page)
- 2027 National TSA Conference dates and deadlines (June 23–27, 2027, Orlando): https://tsaweb.org/conferences/2027-national-tsa-conference/dates-and-deadlines_2027
- Tennessee TSA Regional Leadership Conference (Jan. 15, 2027, virtual): https://www.tntsa.org/rlc
- Tennessee TSA State Leadership Conference (Mar. 3–6, 2027, Chattanooga): https://tntsa.org/slc
- TNTSA 2027 Regional and State "Competitive Events Eligibility and Adjustments" documents (linked from the pages above)

Official event descriptions are quoted word for word from tsaweb.org, including
TSA's own spelling (for example, "folly sound effects" and "Unmanned Arial Vehicle").

## What isn't covered

See the "What we couldn't confirm" section on the home page. In short:

- The full Competitive Events Guide (rubrics, time limits, page limits) is behind the TSA member login.
- Cybersecurity is not on TNTSA's 2027 State event list.
- TNTSA's State list gives no per-chapter number for Hybrid Racer XL.
- Engineering Design eligibility differs between TSA's eligibility chart and its State Advisor Approval page.
- TNTSA's State pre-submission instructions come out February 8, 2027.

## Updating for a new season

1. Update `SEASON`, `KEY_DATES`, and each event's `theme`, `updates`, and `tn` fields in `data.js`.
2. Change `lastChecked` in `SEASON`.
3. Don't carry over themes from an earlier season. If a source isn't out yet, leave the field empty and add a `gaps` note.

## Photo credits

Event photos come from Wikimedia Commons under Creative Commons or public domain
licenses. They illustrate the kind of work involved; they are not TSA competition
entries. Each event page credits its photographer and license, and the full list
is in `images.js`.
