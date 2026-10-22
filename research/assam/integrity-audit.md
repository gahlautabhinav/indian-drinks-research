# Assam archive integrity audit

**Audit date:** 2026-10-22  
**Scope:** Structural and cross-reference validation of the core CSV archive, plus reconciliation of the written Assam coverage audit with current repository counts.  
**Method:** Read the current CSV files from `main`; parse quoted fields and embedded punctuation; compare row widths, identifiers, and source/beverage references. This is a repository integrity check, not a re-review of every claim against each original publication.

## Executive result

The core CSV archive is structurally consistent after one source-register repair. No broken source-ID or beverage-ID references were found in the CSV records checked. The written coverage audit had stale counts and has been updated. Assam remains **not complete**: data consistency does not establish exhaustive beverage discovery, current household practice, or village-level production coverage.

## Current archive snapshot

| File / measure | Current rows | Notes |
|---|---:|---|
| `data/beverages.csv` | 26 | 22 Assam, 3 Arunachal Pradesh, 1 Manipur; this is a working inventory, not a national census |
| `data/places_coverage.csv` | 70 | 66 Assam rows; rows may be repeated across beverages/evidence types or represent district/regional leads rather than villages |
| `data/communities.csv` | 17 | Community records across current project scope |
| `data/production_methods.csv` | 38 | Source-specific method records |
| `data/cultural_practices.csv` | 19 | Source-linked cultural-practice records |
| `data/research_gaps.csv` | 46 | 41 Assam gaps; all 41 remain Open |
| `sources/source_register.csv` | 79 | Source entries across the project |

The 66 Assam place rows contain 23 distinct raw district-field labels and 28 distinct semicolon-separated label tokens. Neither number is a count of verified administrative districts: combined, historical, cultural-region and unresolved labels remain in the register by design and are documented in `district-crosswalk.md`.

## Validation checks

| Check | Result | Interpretation |
|---|---|---|
| CSV row width matches header | Pass after repair | All populated rows in the seven core CSVs have the expected number of columns |
| Blank primary IDs | None found | Every populated data row has an identifier |
| Duplicate primary IDs within each CSV | None found | IDs are unique within each table |
| Source IDs referenced by core CSVs exist in source register | Pass | No dangling source references found |
| Beverage IDs referenced by places, communities, methods, practices and gaps exist in beverage register | Pass | No dangling beverage references found |
| Assam gap next-action fields | Pass | All 41 Assam gaps have a next action |
| Assam gap status | Open | All 41 remain open; do not interpret open as failure, because some questions need fieldwork or author/community input |
| Coverage audit snapshot counts | Corrected | Updated from older values to match current CSVs |

## Correction made during this audit

The `SRC-079` row in `sources/source_register.csv` had only 10 fields instead of the 11 declared by its header. The claim and caveat text had been combined in a way that left the limitations field missing. The row has been repaired into separate fields for:

- **Claims supported:** the public BioSample metadata maps cohort labels TT/DMK/ZN/K1/HM to Haria/Judima/Zao/Hor Alank/Hmar Zu; the accession crosswalk is linked.
- **Limitations:** the five public records do not resolve the 15 original field samples' relationship to the sequencing library or establish village origins; supplementary and experiment/run metadata review remains open.

The written coverage audit was also refreshed to report 66 Assam place rows, 23 raw district-field labels, 79 source entries and the latest cohort-to-accession provenance status for Haria, Zao/Zou and Hmar Zu.

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
