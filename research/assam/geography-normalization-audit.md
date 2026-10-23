# Assam geography normalization audit

**Review date:** 2026-10-23  
**Input:** `data/places_coverage.csv`, cross-checked against `research/assam/district-crosswalk.md` and `research/assam/coverage-audit.md`.  
**Purpose:** Reconcile the repository's current place-row footprint and prioritize normalization work before the state transition gate. This is a desk audit of archive records, not an official gazetteer or a census of beverage production.

## Current counts

A CSV-aware parse of the current place register returns:

- **84 place rows across the project**
- **80 rows tagged Assam**, four rows tagged to other geographies
- **25 distinct raw district-field strings** among Assam rows
- **30 distinct tokens** after splitting those strings on semicolons
- **22 Assam beverage records** and **48 Assam research gaps** in the current registers

These are archive-row counts, not unique villages or verified administrative districts. Place rows may repeat a locality across beverages, represent starter-culture sampling rather than finished-beverage production, or record broad study scope, historical evidence, applicant addresses, or unresolved locality names.

## High-priority geography exceptions

| Place ID | Current source-faithful entry | Issue | Safe archive treatment / next action |
|---|---|---|---|
| ASM-PL-007 | Majuli; more than 20 households/areas, individual names not reported | Study scope is not a village inventory | Keep as unnamed multi-village scope; do not invent locality names. |
| ASM-PL-008 | Lakhimpur; locality not specified | District-level research lead only | Retain district-level confidence until primary text identifies the locality. |
| ASM-PL-014 / ASM-PL-015 | Karbi Anglong; rural villages or locality not specified | Fieldwork geography is broader than a named-village record | Extract exact locality list from the cited primary source if available; otherwise preserve as district/subdivision evidence. |
| ASM-PL-033 | Kokrajhar; “Jalpaiguri” as printed in 2025 article | Apparent locality/district mismatch, unresolved | Do not silently change the printed name. Check the original article, maps/supplements and independent local evidence. |
| ASM-PL-035 / ASM-PL-036 | Bongaigaon; village not identified / Jorhat; ten villages unnamed in accessible abstract | Named study region without named village list | Search full text and supplements; if unavailable, explicitly record “not reported in accessible source”. |
| ASM-PL-037 | Nagaon; Morigaon study scope with five printed locality spellings | Individual localities not reliably mapped to current districts | Preserve source spellings and uncertainty; map only when the primary source supports it. |
| ASM-PL-038 to ASM-PL-040 | Combined southern Assam labels for Haria, Zao/Zou and Hmar Zu | Cohort/community-region evidence does not establish sample villages or district for each sample | Keep district attribution broad; do not assign the cohort to every district in the label. Supplementary sample-to-library and locality metadata remain needed. |
| ASM-PL-041 / ASM-PL-042 | Jokai area, exact village unknown / Sepa district not established in reviewed abstract | Different levels of geographic precision for related study records | Keep Rohi's Jokai-area evidence separate from Sepa's unresolved locality; do not transfer locality across drinks. |
| ASM-PL-046 to ASM-PL-051 | District-level Bodo, Rabha and Tai-Ahom fieldwork | District coverage does not identify the village producing each named beverage | Retain district-level confidence; do not infer all beverage variants occur at all study sites. |
| ASM-PL-052 to ASM-PL-054 | Bongaigaon, Baksa and Goalpara community-specific Rabha leads | Sample/community evidence but village and beverage-name boundaries unresolved | Keep community and district evidence distinct from named production villages; follow ASM-GAP-039 and ASM-GAP-041. |
| ASM-PL-060 | Kokrajhar district-level literature lead | Village not identified | Do not present as village-level evidence. |
| ASM-PL-061 to ASM-PL-064 | Kokrajhar survey localities including Amlaiguri, Gendrabili, “Jalpaiguri” and Banshigaon | Survey locality does not prove every Bodo Jou subtype is made at each place; one printed name is unresolved | Keep the village list and subtype-to-village mapping separate; investigate the printed “Jalpaiguri” name. |
| ASM-PL-065 to ASM-PL-077 | Ten Mising survey villages and multiple Tiwa/Garo study localities | Some named villages exist in the source, but drink-to-village mapping or current production is not always explicit | Preserve village evidence and its actual scope; do not upgrade a study village to confirmed current production of every linked drink. |
| ASM-PL-078 | Majuli; three randomly selected villages unnamed in accessible text | Study-level geography only | Retain the unnamed-village status and seek the supplement/author clarification if worthwhile. |
| ASM-PL-080 / ASM-PL-081 | Multi-district Mising studies; seven or nine villages without names or sample mapping | Broad study scope and missing locality/sample mapping | Do not count as named villages; request supplements and keep source scope explicit. |

The table above is a **priority exception list**, not an exhaustive list of all 80 rows. Rows with named places still require source-scope review: a named field site does not by itself prove present-day production or beverage-specific attribution.

## Normalization rules for the close-out pass

1. Preserve each raw district and locality string in `data/places_coverage.csv`; do not replace source-era wording with a normalized guess.
2. Treat a current administrative district, historical district name, cultural region, study-wide region, applicant address, and unresolved locality as different evidence types.
3. Do not split a combined district label into multiple confirmed districts unless sample-level or primary-source metadata supports that split.
4. Keep named study villages separate from beverage-to-village attribution. A paper can survey a village without proving every beverage in its study was produced there.
5. Keep historical production evidence separate from current practice.
6. Where a source does not name a village, write that it is not reported in the accessible source; do not reverse-geocode a community or cohort label into a village.
7. The four non-Assam place rows must remain outside Assam's coverage count, even when used as comparison evidence.

## Current blockers before state transition

- The “Jalpaiguri” locality remains unresolved in the source records.
- Southern Assam cohort metadata does not resolve village/sample-level geography for Haria, Zao/Zou and Hmar Zu.
- Some district-level records have no village list in the accessible source text.
- The place register does not yet have dedicated structured columns for normalized district, geography evidence type, and current-vs-historical status; these are presently conveyed through raw fields and notes.
- The coverage snapshot had been stale; it has now been refreshed to 80 Assam rows, 25 raw district-field labels and 30 semicolon-separated tokens.

## Completion decision

Do **not** block the next state indefinitely on unavailable author replies or fieldwork. Before transition, the minimum requirement is that every row be reviewed and explicitly classed as named locality, district-level fieldwork, multi-district/study scope, regional/community lead, applicant-address lead, or unresolved. Unresolved rows can pass the gate if the reason, source and next action are documented. The district/community search matrix and a final beverage-record review are still required.
