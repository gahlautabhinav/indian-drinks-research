---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["assets/app.js","assets/style.css"]
---

# Surface brief: Fieldnotes dashboard (index.html, assets/app.js, assets/style.css)

## Scope and mode

Whole-surface redesign of the only page. Mode: **Operate**. One maintainer, long desk sessions, map-first task: India → state → district → beverage records → dossier. Secondary: inspect one record's evidence trail; see archive shape (coverage, gaps, evidence quality).

## Audience, job, constraints

- Maintainer researching with ChatGPT + GitHub open beside it.
- Must stay: every data table, source link, evidence label, dossier rendering, Leaflet map on the Living Atlas service, URL `?id=` deep links, `/` search shortcut.
- Confirmed free: sections may be merged, reordered, dropped. Dark theme is pinned. No hype, no cultural-tourism register, no fabricated imagery.
- Counts describe documentation, never prevalence; say so near every number.

## Direction contract

THESIS: The archive is a government register, a District Census Handbook read as negative microfilm on a backlit reader. State, district, village in ruled tabular columns; every blank cell is printed as a blank. It refuses the dark analytics-dashboard arrangement: no KPI tile row, no hero, no card grid, no eyebrow labels, no section numbers.

OWN-WORLD: Eleven-step neutral ramp from film black #0B0D0F to silver-gelatin #E6E1D6; no neutral outside the ramp. One red, #D9483B, the ledger's red rule, reserved for unresolved and conflict states only. Selection is the reader lamp: the selected row's ground lifts to a warm light zone (#F2EEE4 at low opacity) with dark ink. Double-ruled column heads, hairline row rules, running heads at the top of every register page, footnote apparatus under tables. Register text in Source Serif 4 with tabular lining figures; controls and column labels in Source Sans 3 small caps-free, tracked 0. Evidence level as hatch density (solid / hatched / dotted / outlined), naming conflict as cross-hatch. Components: register table, margin index, reader lamp row, hatch swatch, footnote, stamp (UPDATED mark from Last_Reviewed).

STORY: The maintainer opens the page and is already inside the register at India level. They see which states have entries, click a polygon or a state row, the register re-pages to that state's districts, click a district, the register shows its place rows and linked beverages, open a beverage and read its full evidence trail and dossier in the same reader. They leave knowing where the archive is thin.

FIRST VIEWPORT: Full-width, no hero. A one-line running head across the top: archive name left, current page (India / State / District) centre, record counts right. Below: a two-column register page. Left column (approx 38%): the India map on film black, states outlined in ramp grey, states with records filled one step lighter, the selected one under the lamp. Right column (62%): the register table, first row visible at the top: columns State · Districts · Place rows · Beverages · Sources · Open gaps, each state a row, sorted alphabetically, Assam first because it leads. Primary action is the row itself (click = page into state). Beneath the table, its footnotes: "Counts describe documentation in this archive, not prevalence." The beverage register, record reader and research-gap ledger follow as further register pages down the scroll, each with its own running head.

FORM: District Census Handbook / State Gazetteer register, translated to negative microfilm for the pinned dark theme. Candidate 3 of 7 on my ordered list (1 SoI toposheet, 2 herbarium sheet, 3 census handbook, 4 lab run sheet, 5 field notebook, 6 fermentation vessel material, 7 card catalogue). Seed key 18bb6393. Raises: hatch-density evidence scale and fixed tonal ramp (from the exposure-record challenger); edge-to-edge density (Japanese high-density); polygon-as-control (zoo map); persistent UPDATED mark (gate board); fixed row furniture (mascot catalog).

SIGNATURE INTERACTION: Paging. Selecting a state or district does not navigate; the register re-pages in place: the running head updates, rows slide out and the next page's rows slide in from below over 220ms with exponential ease-out, and the map's selected polygon lifts under the lamp. Reduced motion: instant swap.

MOTION GRAMMAR: 150 to 220ms, exponential ease-out, transform + opacity only on rows; the lamp fades in over 180ms. No page-load choreography. Skeleton rows while CSVs load.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved

- Mobile: the two-column register stacks, map first at 320px tall, then table; confirmed as acceptable since mobile is not the primary scene.
