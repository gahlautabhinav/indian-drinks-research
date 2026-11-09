# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The archive maintainer (one person), while actively researching. They work with ChatGPT, which writes CSV rows and Markdown dossiers into the GitHub repo; the dashboard ("Fieldnotes") is the maintainer's own browsing and QA surface over that data. Secondary readers (researchers who follow the public Pages link) are welcome but not the design target.

## Product Purpose

A source-led research archive of India's traditional alcoholic beverages, tracked at state, district and locality level with explicit evidence limits. The dashboard exists so the maintainer can see the archive's shape, move from a place to the records attached to it, and inspect one beverage's full evidence trail without opening raw CSVs. Success: the maintainer finds coverage gaps and weak-evidence records faster than by reading files.

## Positioning

Every claim is tied to a source ID, geographic confidence is tracked separately from identity confidence, and research gaps are first-class records. The dashboard shows what is documented, never what is "common". No competing beverage site publishes its uncertainty.

## Operating Context

- Data lives in `data/*.csv` and `sources/source_register.csv`; dossiers in `research/<state>/*.md`. The dashboard fetches them from `raw.githubusercontent.com` on `main`, so it always reflects the pushed archive.
- Static site on GitHub Pages, no build step. Leaflet for the India map; boundaries from the Survey of India / Esri India Living Atlas admin-boundary service (state layer 1, district layer 2). Marked renders dossiers.
- Primary task flow, confirmed: **explore by place first**. India → state → district → beverage records → dossier. Record inspection and archive-wide patterns are secondary.
- Used at a desk, long sessions, usually alongside a ChatGPT window and the GitHub repo.

## Capabilities and Constraints

- Seven linked CSV tables; `;`-separated multi-value references; ID prefixes `SRC-`, `<STATE>-NNN-<ABBR>`, `ASM-PL-`, `ASM-COM-`, `ASM-MTH-`, `ASM-GAP-`.
- Only Assam has a 35-district coverage matrix; other states derive district lists from place rows.
- Dossier mapping (`Beverage_ID` → markdown path) is hardcoded in `assets/app.js`.
- Confirmed: sections may be merged, reordered or dropped if it serves the maintainer; data truth, evidence labels and source links are non-negotiable.
- Confirmed: dark theme is a standing commitment.

## Brand Commitments

- Name: "Indian Drinks Research" / dashboard name "Fieldnotes".
- Dark palette, confirmed binding.
- Register: serious documentation. No hype, no "cultural tourism" or exoticising framing; respect community knowledge and stated knowledge-sensitivity notes.

## Evidence on Hand

- Real data: 37 beverage records (33 Assam, 3 Arunachal Pradesh, 1 Manipur), ~84 place rows, communities, methods, practices, ~160 sources, research gaps, Assam district matrix.
- Real dossiers: 130+ markdown files under `research/`.
- No photography, no logos beyond the "IR" mark and `assets/favicon.svg`. Do not fabricate imagery of communities or products.

## Product Principles

1. Place is the entry point; everything else hangs off a location.
2. Show uncertainty as data, not as a disclaimer buried in prose.
3. Counts describe documentation, never prevalence. Say so near every number.
4. One maintainer, long sessions: density and scanability beat decoration.
5. Source link within one click of any claim.
