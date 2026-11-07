# India basemap source audit — 2026-11-07

## Decision

**Do not integrate the third-party India GeoJSON/TopoJSON files inspected during this pass.** The map repository labels its geometries `year: 2011_c`, and its India-wide outline was the source of concern about incomplete / misleading territorial presentation. The dashboard must not use that layer as its India political outline.

Use the Survey of India (SoI) as the authoritative reference for the national political outline and the administrative-boundary source. The map implementation is deliberately gated until the actual official vector files can be downloaded, inspected and tested in the browser.

## Official source hierarchy

1. **National political reference:** Survey of India, *Political Map of India*, English 13th Edition (2026), listed on the official map catalogue:
   - https://surveyofindia.gov.in/pages/political-map-of-india
   - The page lists English 13th Edition / 2026.
2. **Interactive administrative geometry:** Survey of India, *Administrative Boundary Data Base (ABDB)*:
   - https://surveyofindia.gov.in/pages/administrative-boundary-data-base-abdb-
   - The official page links the State/District/Sub-District boundary database for India and the Village Boundary Database.
   - The national State/District/Subdistrict archive is exposed as a RAR download at `https://surveyofindia.gov.in/documents/State_District_Subdistrict_PAN%20INDIA.rar`.
3. **Dataset specification:** Survey of India, *Vector Data Catalogue 2025* (SRC-158):
   - https://surveyofindia.gov.in/UserFiles/files/Vector%20Data%20Catalog%202025%281%29.pdf
   - ABDB formats: Shapefile (.shp) and Geodatabase (.gdb).
   - Boundary levels: State/UT, district, sub-district and village, described as Version 01 harmonized with ORGI.
   - Assam inventory: 35 districts, 162 subdistricts, 21,024 village polygons and 18,113 village points.

## Cross-checks and exclusions

- The official Survey of India political-map page lists the English 13th Edition (2026); use this as the territorial-reference edition when reviewing the final map.
- The 2025 SoI catalogue's 35-district count for Assam matches the current archive district-matrix row count (35). This is a count-level consistency check only; it does not establish that every current boundary polygon matches the matrix names.
- A third-party GitHub map repository inspected during this pass contains state GeoJSON features with `year: 2011_c`. Its India-wide file is not accepted as the national political outline for this project.
- NIC BharatMaps' public administrative district service reports that its layer was last updated in October 2017 and contains 717 districts / 36 states. It is useful as a historical reference only, not as the current production layer for this project.
- The SoI ABDB RAR was identified through the official portal, but its binary payload could not be extracted in this retrieval session. No district polygon from it has been integrated and no claim is made that the interactive map is already implemented.

## Dashboard interaction specification

Target navigation:

`India → State / UT → District → Beverage coverage → Beverage dossier`

- India level: clickable state/UT polygons, with the full national territorial presentation checked against the SoI 2026 political map.
- State level: clickable district polygons from SoI ABDB, with district names and current archive coverage.
- District level: beverage list, community associations, locality records, source links and confidence/coverage caveats.
- Beverage level: open the existing dossier and show all documented localities, but distinguish named production evidence from survey locations, starter sampling, regional leads and unresolved mentions.
- Coverage styling: districts with documented place rows, district-level leads only, and no place row must be visually distinct. “No place row” means no relevant record currently found in the archive, not absence of a beverage tradition.
- Beverage-specific layer: highlight only districts supported by linked place/source evidence. Never infer coverage from a state-level GI registration, applicant address, broad community distribution, or a sample with undisclosed collection locality.
- All counts and map states must be computed from the repository CSVs, not manually hard-coded.
- Responsive behaviour: map and detail panel stack on mobile; provide accessible list/select alternatives and keyboard navigation.

## Next technical gate

1. Obtain and extract the official SoI ABDB archive (or the state-level Assam ABDB file) from the official portal.
2. Inspect CRS, administrative codes, district names, year/version and geometry extent.
3. Compare the India outline against the current SoI political map and verify that the full Indian territorial representation is present before rendering.
4. Compare Assam district polygons and codes with the current 35-district administrative reference; document any name/crosswalk changes.
5. Only then simplify geometries for the static GitHub Pages client, retain source attribution and original dataset provenance, and wire up the click-through map.

**Status:** Source selected; official binary geometry not yet extracted; map implementation intentionally not started. This is a deliberate accuracy gate, not a completed dashboard feature.
