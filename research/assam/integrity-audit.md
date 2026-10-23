# Assam archive integrity audit

**Audit date:** 2026-10-23  
**Scope:** Structural and cross-reference validation of the core CSV archive, plus reconciliation of the written Assam coverage audit with current repository counts.  
**Method:** Read the current CSV files from `main`; parse quoted fields and embedded punctuation; compare row widths, identifiers, and source/beverage references. This is a repository integrity check, not a re-review of every claim against each original publication.

## Executive result

The core CSV archive is structurally consistent after one source-register repair. No broken source-ID or beverage-ID references were found in the CSV records checked. The written coverage audit had stale counts and has been updated. Assam remains **not exhaustive**, but the state-baseline transition gate has passed: data consistency does not establish exhaustive beverage discovery, current household practice, or village-level production coverage.

## Current archive snapshot

| File / measure | Current rows | Notes |
|---|---:|---|
| `data/beverages.csv` | 26 | 22 Assam, 3 Arunachal Pradesh, 1 Manipur; this is a working inventory, not a national census |
| `data/places_coverage.csv` | 88 | 84 Assam rows; rows may be repeated across beverages/evidence types or represent district/regional leads rather than villages |
| `data/communities.csv` | 17 | Community records across current project scope |
| `data/production_methods.csv` | 44 | Source-specific method records |
| `data/cultural_practices.csv` | 19 | Source-linked cultural-practice records |
| `data/research_gaps.csv` | 50 | 48 Assam gaps; all 48 remain Open |
| `data/assam_district_coverage_matrix.csv` | 35 | One row per district in the administrative baseline; 14 have no relevant place row in the current archive |
| `sources/source_register.csv` | 93 | Source-register rows across the project; SRC-090 is a retired duplicate alias of SRC-084 |

The 84 Assam place rows contain 29 distinct raw district-field labels and 34 distinct semicolon-separated label tokens. Neither number is a count of verified administrative districts: combined, historical, cultural-region, study-scope and unresolved labels remain in the register by design and are documented in `district-crosswalk.md`.

## Validation checks

| Check | Result | Interpretation |
|---|---|---|
| CSV row width matches header | Pass after repair | All populated rows in the eight tracked CSV tables have the expected number of columns |
| Blank primary IDs | None found | Every populated data row has an identifier |
| Duplicate primary IDs within each CSV | None found | IDs are unique within each table |
| Source IDs referenced by core CSVs and district matrix exist in source register | Pass | Evidence and administrative source references in the matrix also resolve |
| Beverage IDs referenced by places, communities, methods, practices and gaps exist in beverage register | Pass | No dangling beverage references found |
| Assam gap next-action fields | Pass | All 48 Assam gaps have a next action |
| Assam gap status | Open | All 48 remain open; do not interpret open as failure, because some questions need fieldwork or author/community input |
| Prose-field source-token guard | Pass | Validator rejects source-ID tokens accidentally appended to beverage Open_Questions fields |
| Research-gap traceability | Pass with no warnings | Every Assam beverage with an Open_Questions value has at least one Assam gap row referencing that beverage ID, parsing semicolon-separated IDs correctly |
| Coverage audit snapshot counts | Corrected | Updated from older values to match current CSVs |

## Correction made during this audit

The `SRC-079` row in `sources/source_register.csv` had only 10 fields instead of the 11 declared by its header. The claim and caveat text had been combined in a way that left the limitations field missing. The row has been repaired into separate fields for:

- **Claims supported:** the public BioSample metadata maps cohort labels TT/DMK/ZN/K1/HM to Haria/Judima/Zao/Hor Alank/Hmar Zu; the accession crosswalk is linked.
- **Limitations:** the five public records do not resolve the 15 original field samples' relationship to the sequencing library or establish village origins; supplementary and experiment/run metadata review remains open.

The written coverage audit was refreshed again on 2026-10-23 to report 84 Assam place rows, 29 raw district-field labels, 34 semicolon-separated district tokens, and 93 source-register rows. The gap register contains 48 Assam gaps, including three SRC-091 quantitative/taxonomic/voucher follow-up records. The 35-row district matrix is now tracked by CI; 10 districts have no relevant place row after adding West Karbi Anglong and three secondary district leads. The cohort-to-accession provenance limits for Haria, Zao/Zou and Hmar Zu remain unchanged.

## Duplicate-source reconciliation (2026-10-23)

A source-register review found that `SRC-084` and `SRC-090` describe the same Borah (2026) Majuli Apong ethnobotany article: same title, author, year, journal and DOI. To avoid counting the same publication twice, `SRC-090` is now explicitly retained as a retired duplicate alias pointing to canonical `SRC-084`; the related research-gap citation was updated to `SRC-084`. The stable ID remains in the register for traceability, so the register now has 93 rows; both SRC-090 (alias of SRC-084) and SRC-081 (alias of SRC-066) are retired duplicate aliases, and row count is not a count of unique publications. A second duplicate was found: `SRC-066` and `SRC-081` are the same 2025 Bodo beverage-methodology article with the same DOI. `SRC-081` is now a retired alias of `SRC-066`, and active CSV references were canonicalized to `SRC-066`.

## Remaining research-quality risks

These are not CSV parser failures; they are substantive evidence gaps that remain visible and should not be hidden by a clean integrity check:

1. **Geographic overreach risk.** Some rows represent district-level fieldwork, broad community distribution, starter-culture sampling, regional sample cohorts, or GI applicant addresses. They must not be rendered as confirmed village-level production.
2. **Current-practice risk.** Several records rely on historical studies. Historical documentation supports a scoped historical claim, not a claim that production remains common today.
3. **Name-boundary risk.** Similar names and transliterations (including related rice-beer terms across different communities) remain unresolved in some cases. Keep separate canonical records unless direct linguistic, process, or community evidence supports merging.
4. **Recipe-transfer risk.** A recipe cited from another state or a broad regional review is not automatically an Assam-specific recipe.
5. **Coverage-completeness risk.** Absence from the archive is not evidence that a district or community has no beverage tradition.

## Next actions

1. Continue extracting village lists and sample provenance from existing studies and supplements before adding more broad sources.
2. Prioritize the unresolved southern Assam sample-to-library relationship and locality crosswalk.
3. Add a reproducible automated validation script or CI check so row widths, unique IDs and reference integrity are tested on every change.
4. Keep the district crosswalk as the authority for how combined/historical labels are interpreted; do not silently rewrite source-era wording.
5. After the integrity pass, perform a **claim-level source audit** on high-priority beverages. Structural validity only proves that references resolve, not that each individual statement is fully supported by its cited source.

## Audit limitation

This pass validates CSV structure and referential integrity and reconciles selected summary counts. It does not verify all citations against full text, establish a complete Assam beverage inventory, validate every botanical identification, or certify current production at every listed locality.
