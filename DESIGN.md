---
name: Fieldnotes · Indian Drinks Research
description: A government register read as negative microfilm on a backlit reader; evidence printed as hatch density, uncertainty printed as data.
colors:
  film-black: "#0b0d0f"
  z1: "#121518"
  z2: "#1a1d20"
  z3: "#23272a"
  z4: "#2e3337"
  z5: "#3a3f42"
  z6: "#555b5f"
  z7: "#7a8084"
  z8: "#a3a69f"
  z9: "#c9c6bb"
  silver-gelatin: "#e6e1d6"
  lamp: "#f2eee4"
  ledger-red: "#d9483b"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tabular-nums lining-nums"
  register:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tabular-nums lining-nums"
  label:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.04em"
    lineHeight: 1.35
  control:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  hair: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  page: "28px"
components:
  running-head:
    backgroundColor: "{colors.film-black}"
    textColor: "{colors.silver-gelatin}"
    typography: "{typography.control}"
    height: "44px"
    padding: "0 20px"
  register-cell:
    backgroundColor: "{colors.film-black}"
    textColor: "{colors.silver-gelatin}"
    typography: "{typography.register}"
    padding: "7px 8px"
  register-head:
    backgroundColor: "{colors.film-black}"
    textColor: "{colors.z8}"
    typography: "{typography.label}"
    padding: "7px 8px 6px"
  row-link-hover:
    backgroundColor: "{colors.z1}"
    textColor: "{colors.silver-gelatin}"
  row-link-selected:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.film-black}"
  stamp:
    textColor: "{colors.z8}"
    typography: "{typography.label}"
    padding: "0 4px"
    height: "14px"
  hatch:
    textColor: "{colors.z9}"
    width: "40px"
    height: "12px"
  footnotes:
    textColor: "{colors.z8}"
    typography: "{typography.control}"
    padding: "10px 0 0 1.6em"
  field:
    backgroundColor: "{colors.z1}"
    textColor: "{colors.silver-gelatin}"
    typography: "{typography.control}"
    padding: "6px 10px 7px"
  slip-action:
    backgroundColor: "{colors.z1}"
    textColor: "{colors.silver-gelatin}"
    typography: "{typography.label}"
    padding: "7px 11px"
  slip-action-hover:
    backgroundColor: "{colors.z2}"
  slip-action-primary:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.film-black}"
    typography: "{typography.label}"
    padding: "7px 11px"
  tab:
    textColor: "{colors.z8}"
    typography: "{typography.control}"
    padding: "8px 12px"
  tab-selected:
    textColor: "{colors.silver-gelatin}"
  flag:
    textColor: "{colors.ledger-red}"
    typography: "{typography.label}"
  toast:
    backgroundColor: "{colors.lamp}"
    textColor: "{colors.film-black}"
    typography: "{typography.control}"
    padding: "8px 12px"
---

# Design System: Fieldnotes · Indian Drinks Research

## Overview

**Creative North Star: "District Handbook on Microfilm"**

The archive is a government register, a District Census Handbook, read as negative microfilm on a backlit reader. Everything on the page is a ruled register: state, district, locality and beverage rows in tabular columns, double-ruled column heads, hairline row rules, a running head across the top, footnotes under every table. The page is one long scroll of register pages (Gazetteer, Register of beverages, Record, Ledger of open questions) separated by double rules, each with its own head. Selecting a state or district does not navigate; the register re-pages in place.

The material is film: a fixed eleven-step grey ramp from film black to silver-gelatin, with one warm light (the reader lamp) for the selected row and one red (the ledger's red rule) for conflict. Evidence is printed as hatch density rather than colour. Every blank cell is printed as a blank (an em dash), every count is footnoted as documentation rather than prevalence. The world refuses the dark analytics-dashboard arrangement: no KPI tile row, no hero, no card grid, no eyebrow labels, no section numbers.

**Key Characteristics:**
- Edge-to-edge register density; tables are the primary surface, not a widget inside one.
- Eleven-step tonal ramp is the entire neutral vocabulary; depth is tonal, never shadowed.
- One reserved red for unresolved and conflict states; one warm lamp for selection.
- Serif register text with tabular lining figures; sans-serif only for controls and column labels.
- Hatch-density evidence swatches, a rotated UPDATED stamp, footnote apparatus under every table.
- Paging motion: rows arrive from below over 220ms, exponential ease-out; nothing else animates.

## Colors

A single grey ramp from film black to silver-gelatin, a warm lamp for the one selected row, and a red rule reserved for conflict.

### Primary
- **Reader Lamp** (`{colors.lamp}`): the selection colour. The selected register row's ground lifts to the lamp with film-black ink; the selected map polygon fills with it; the active tab underline, focus outline, caret, text selection and the primary slip action all use it. It is the light the reader shines on one record.

### Secondary
- **Ledger Red** (`{colors.ledger-red}`): reserved for unresolved and conflict states only: the `NAME BOUNDARY UNRESOLVED` flag, the `NOT IN SOURCE REGISTER` flag, high-priority gaps, the cross-hatch stroke of a conflicted evidence swatch, and the border of a fetch error note. It never decorates, never marks selection, never marks a link.

### Neutral
The ramp, dark to light. Named roles below are the only ways the ramp is used for text and rules.
- **Film Black** (`{colors.film-black}`, `--z0`): page ground, sticky column-head ground, dark ink on the lamp.
- **z1** (`{colors.z1}`): map frame, filter bar, slip actions, row hover ground, dossier code blocks, skeleton shimmer base.
- **z2** (`{colors.z2}`): slip-action hover, inline code, Leaflet zoom buttons.
- **z3** (`{colors.z3}`): soft rule (`--rule-soft`) between register rows and cells.
- **z4** (`{colors.z4}`): map polygon fill for places with rows, input underline at rest, dark ink for secondary text on a lamp row.
- **z5** (`{colors.z5}`): the standard rule (`--rule`): page borders, running-head bottom rule, footnote top rule, scrollbar thumb.
- **z6** (`{colors.z6}`): link underline at rest, blank-cell em dash, crumb separators, map polygon outline for states without rows, hover fill.
- **z7** (`{colors.z7}`): strong rule (`--rule-strong`) for double rules and column-head bottoms; tertiary ink (`--ink-3`) for counts, kbd hints, field labels; stamp border.
- **z8** (`{colors.z8}`): secondary ink (`--ink-2`): column heads, IDs, dates, notes, footnotes, inactive tabs and crumbs; map outline for states with rows.
- **z9** (`{colors.z9}`): hatch ink at rest, summary bars, selected-row borders.
- **Silver Gelatin** (`{colors.silver-gelatin}`, `--z10`): primary ink (`--ink`) for all register text.

### Named Rules
**The Ramp-Only Rule.** No neutral exists outside `--z0`..`--z10`. Any grey, border, ground or ink is one of the eleven steps; new surfaces pick a step, they do not mix a new one.

**The Red Rule.** Red marks an unresolved or conflicting fact and nothing else. If a red element is not a flag, a high priority, a cross-hatch or an error, it is wrong.

**The Lamp Rule.** The lamp lights exactly one row at a time. Selection is full lamp ground with film-black ink, not a tint; secondary text on a lamp row drops to z4.

## Typography

**Display Font:** Source Serif 4 (with Georgia, Times New Roman)
**Body Font:** Source Serif 4 (with Georgia, Times New Roman)
**Label/Control Font:** Source Sans 3 (with Segoe UI, system-ui)

**Character:** Register text is set in a serif with tabular lining figures, so columns of counts and dates align like printed census tables. The sans-serif is confined to the apparatus: column heads, field labels, controls, footnotes, IDs and dates. Nothing is tracked beyond 0.08em; nothing is set in small caps.

### Hierarchy
- **Display** (500, 28px, 1.1, -0.01em): page heads (`Gazetteer of places`) and the record slip's beverage name. Drops to 22px below 640px.
- **Headline** (600, 22px, 1.25): dossier second-level headings, under a single rule.
- **Title** (600, 15px, 1.25): register-section heads (`Assam · Districts`), pane headings, dossier prose size.
- **Body** (400, 13px, 1.5): page default, reader field values, beverage names in the main register.
- **Register** (400, 12px, 1.4): the table cell size for every register; `.name` cells are 600.
- **Label** (600, 11px, 0.04em, uppercase): column heads, field labels, reader field keys, priority words, colophon terms. The stamp tracks 0.08em.
- **Control** (400, 12px): crumbs, running head, tabs, filters, footnotes, page notes.

### Named Rules
**The Figures Rule.** `tabular-nums lining-nums` is set on `body` and inherited everywhere; numeric columns are right-aligned and never proportionally spaced.

**The Apparatus Rule.** Source Sans 3 appears only on apparatus (heads, labels, controls, notes, IDs, dates). Record content stays serif.

## Layout

One column of full-width register pages, each padded 28px 20px 36px, separated by a 3px double rule over a 1px rule (`.page + .page`). A 44px sticky running head (title, crumbs, counts, page links) sits above everything; column heads of scrolling registers stick beneath it at `top: 44px`.

- **Gazetteer:** two-column grid, map 38fr (min 300px) sticky under the running head, register 62fr. Map height `min(62vh, 640px)`.
- **Record reader:** slip in a 1.3fr / 0.7fr grid (main vs. side table), then a tab strip, then a two-column field grid.
- **Ledger:** 1fr register plus a 260–320px sticky side of summary tables.
- **Colophon:** three principle cells in a ruled grid.

Spacing rhythm is small and ruled rather than padded: cells 7px 8px, fields 6px 10px, section gaps 14–24px, grid gutters 24px. Prose measures: dossier 78ch, notes 62–80ch, footnotes 110ch.

Breakpoints: at 1180px the running-head counts hide and the map narrows to 42fr; at 960px the gazetteer, ledger and slip stack to one column, the map loses its stickiness, the crumbs drop to their own row, registers scroll horizontally at 560–720px minimum widths, filters go two-up; at 640px page padding drops to 20px 14px, display size drops to 22px, the map is 320px tall, filters and principles go one-up, slip actions stretch full width.

## Elevation & Depth

Flat. The page is one sheet of film; depth is conveyed by tonal steps (z0 ground, z1 for inset surfaces like the map frame, filter bar and slip actions, z2 on hover) and by rules (soft z3, standard z5, strong z7, 3px double for section heads). No surface casts a shadow at rest. The only shadows in the build sit on the two transient overlays that float above the sheet: the Leaflet tooltip (`0 2px 8px rgba(0,0,0,.5)`) and the toast (`0 6px 20px rgba(0,0,0,.5)`). The map carries a faint radial lamp wash (`rgba(242,238,228,.05)`) over the frame.

### Named Rules
**The Rules-Not-Shadows Rule.** Hierarchy is drawn with rules of three weights (hairline z3, standard z5, double z7). A new surface that needs separation gets a rule or a one-step tonal change, never a shadow.

## Shapes

Square. Every corner is 0px, including Leaflet controls, inputs, the stamp, swatches and the toast. Borders are 1px hairlines from the ramp; section heads and page boundaries use a 3px double rule. The one rotated element is the UPDATED stamp (`rotate(-4deg)`), a rubber stamp on the page. Inputs are underlined (1px z4, lamp on focus), never boxed. Swatches are 40×12px rectangles whose interior pattern carries meaning.

## Components

### Running head
- **Style:** sticky 44px bar on film black, 3px double rule above, 1px rule below, Source Sans 3 at 12px. Grid of title (600) · crumbs · counts · page links.
- **Crumbs:** buttons in z8, `/` separators in z6, current page in silver-gelatin 600; hover underlines in z6.
- **Page links:** z8 with a transparent 2px bottom border; hover lifts to ink with a z6 border.

### Register table
- **Shape:** full-width, collapsed borders, 12px serif at 1.4.
- **Heads:** Source Sans 3, 11px, 600, uppercase, 0.04em, z8, 1px z7 bottom rule, sticky at 44px on film black. Captions are serif 13px 600 over a 3px double rule.
- **Cells:** 7px 8px, 1px z3 bottom and left rules. `.num` right-aligned 3.6em; `.col-id` and `.col-date` in sans z8; `.blank` prints an em dash in z6; `small` secondary lines in sans 11px z7; `.em` italic z8.
- **Row link:** clickable rows (`tr.row-link`, tabindex 0). Hover and focus-within ground z1 with a 2px z6 left bar. Selected: lamp ground, film-black ink, z9 borders, z4 secondary ink, black left bar.
- **Scroll:** `.register-scroll` caps at `min(72vh, 900px)`; below 640px uncapped and horizontally scrollable.

### Hatch evidence swatch
- **Style:** 40×12px inline rectangle, 1px border in `--hatch-ink` (z9; z0 on a lamp row), 4px pattern cell. Variants: `solid` (filled), `hatched` (45° 1px lines), `dotted` (0.7px dots), `outlined` (empty), `crossed` (grey hatch over red counter-hatch with a red border, marking an unresolved name boundary). Followed by an `.ev-label` in sans 11px z8. In footnotes it shrinks to 22×10px; in ledger summaries to 28px wide.

### UPDATED stamp
- **Style:** inline sans 11px 600, 0.08em tracking, 1px z7 border, z8 ink, 14px line, rotated -4°. Shown on rows reviewed within the latest fortnight. On a lamp row the border and ink drop to z4.

### Footnotes
- **Style:** ordered list under every register, 1px z5 top rule, sans 12px z8, max 110ch. First note on any counted table states that counts describe documentation, not prevalence.

### Filters
- **Style:** a ruled grid on z1 (1px z5 border, no bottom), fields separated by 1px rules. Label in sans 11px 600 uppercase z7; input/select transparent with a 1px z4 underline; `kbd` hint (`/`) in a z4 box.
- **Focus:** underline turns lamp. Select arrow is drawn from two gradient triangles in z8.
- **Count:** sans 11px z8 cell aligned to the bottom.

### Slip
- **Style:** the record's header card-in-name-only: a 1.3fr / 0.7fr grid, display-size beverage name with the stamp, italic z8 alternate names, and a side table of sans 11px uppercase keys against serif 12px values. Closed by a 1px z5 rule.
- **Actions:** a ruled strip of z1 buttons (sans 11px, 7px 11px, 1px z5 dividers), hover z2; `.primary` is lamp ground with film-black 600 ink.

### Tabs
- **Style:** flex strip over a 1px z7 rule, sans 12px, 8px 12px, z8 ink with a transparent 2px underline; counts in z7. Hover lifts to ink; selected is ink 600 with a lamp underline. Panes toggle display.

### Dossier
- **Style:** rendered Markdown at serif 15px / 1.6, 78ch. h1 28px over a double rule, h2 22px over a single rule, h3 18px, h4 15px. Blockquotes italic z8 with a 1px z7 left rule; `pre` on z1 inside a z5 border; tables ruled 1px z5 with sans uppercase heads on z1; `hr` is a double rule.

### Ledger summaries
- **Style:** small captioned registers in the sticky side: a hatch swatch, tier word and a 3px z9 bar whose width is the share, with the count right-aligned in a 4em column. Priority words in sans 11px uppercase; `high` in ledger red, `medium` in z8. Long cells truncate behind a z8 underlined `more` button.

### Colophon
- **Style:** 3px double rule above, three ruled principle cells (sans 11px uppercase z8 terms, z8 definitions at 12px) and a sans 11px z7 colophon line, max 90ch.

### Error note, toast, skeleton
- **Error note:** 1px ledger-red border, ink text, sans 12px, 70ch.
- **Toast:** fixed bottom-right lamp block with film-black ink, sans 12px, 2.6s.
- **Skeleton:** 30px rows shimmering z1→z2→z1 over 1.6s while CSVs load.

### Paging motion
Selecting a state, district or record re-pages the register in place: the running head updates and the new rows arrive with `.paging-in` (opacity 0→1, translateY 10px→0, 220ms, `--ease` = `cubic-bezier(.16,1,.3,1)`). Hover, crumb, tab and map polygon transitions run 150–180ms on the same ease. Under `prefers-reduced-motion: reduce` the animation is removed and all transition durations are zeroed; the swap is instant. No page-load choreography.

## Do's and Don'ts

### Do:
- **Do** pick every grey from `--z0`..`--z10` and every rule from `--rule-soft` (z3), `--rule` (z5) or `--rule-strong` (z7).
- **Do** footnote every counted table with the documentation-not-prevalence line, in sans 12px z8 under a 1px rule.
- **Do** print blanks as an em dash in z6 (`.blank`); a missing value is a fact on the page, not whitespace.
- **Do** make the row itself the control: `tr.row-link` with hover z1, 2px z6 left bar, and full-lamp selection.
- **Do** set controls, heads and labels in Source Sans 3 at 11–12px and keep record text in Source Serif 4 with tabular lining figures.
- **Do** separate pages and heads with the 3px double rule; separate rows with hairlines.
- **Do** animate only arriving rows (opacity + transform, 220ms, `--ease`) and honour reduced motion with an instant swap.

### Don't:
- **Don't** introduce a neutral outside the ramp or tint a ramp step with alpha for a new surface.
- **Don't** use ledger red for anything but unresolved or conflicting states (flags, high priority, cross-hatch, fetch errors).
- **Don't** add eyebrow labels, kickers or section numbers above headings; the page head is a heading and a note, nothing above it.
- **Don't** build cards, KPI tiles, hero bands or card grids; every surface is a ruled register or a ruled strip.
- **Don't** round a corner or cast a shadow on a surface at rest; the tooltip and toast are the only floating overlays.
- **Don't** encode evidence with colour; evidence is hatch density (solid / hatched / dotted / outlined), conflict is cross-hatch.
- **Don't** present a count as prevalence, and don't let a number stand without its footnote.
