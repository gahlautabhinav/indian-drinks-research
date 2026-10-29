# Assam state-baseline release note

**Release candidate date:** 2026-10-23  
**Release status:** Research baseline in progress; state-transition gate not yet passed  
**Scope:** Publicly documented traditional beverage traditions represented in the current archive; not an exhaustive census of every Assam beverage or community practice.

**Live dashboard:** https://gahlautabhinav.github.io/indian-drinks-research/

## Snapshot at release candidate

| Measure | Current count | Interpretation |
|---|---:|---|
| Canonical Assam beverage records | 23 | Working inventory; not exhaustive |
| Assam place-register rows | 86 | Repeated/locality, district, historical, community, study-scope and unresolved leads; not 86 unique villages |
| Place rows across the project | 90 | Includes four rows tagged to other geographies |
| Raw district-field strings among Assam place rows | 31 | Combined and unresolved labels included |
| Semicolon-separated district tokens | 36 | Not an official district count |
| District baseline rows | 35 | One row for each district name in the working administrative reference layer |
| Districts with no place row at all | 9 | Barpeta, Bajali, Charaideo, Darrang, Dhubri, Hojai, Nalbari, South Salmara-Mankachar and Tamulpur. Biswanath has a study-area lead only; product/community attribution remains unresolved. |
| Assam research gaps | 55 | All remain open; each has a next action |
| Source-register rows | 127 | Includes retired duplicate aliases; row count is not a unique-publication count. SRC-080 is absent, so the highest ID (SRC-127) is not the row count. |

## What this baseline includes

- A current archive-integrity audit and CI validation for CSV shape, primary IDs, source/beverage references, district-matrix references, stray source-ID tokens in prose fields, and gap traceability.
- A district crosswalk and a 35-district archive-presence matrix that distinguish named locality/study-site evidence from district-level, community-distribution, combined-region and unresolved leads.
- A grouped district search log documenting the queries attempted, leads found and nine districts where no relevant place row was found in this pass.
- A desk review of all 23 Assam beverage records, with source IDs, process/name conflicts, geographic-confidence limits and next actions.
- A taxonomic, quantitative and voucher audit of the 2026 cross-community paper (SRC-091), including a draft author clarification request. The request has **not** been sent.
- Source-ID canonicalization for two duplicate source pairs: SRC-081 is a retired alias of SRC-066; SRC-090 is a retired alias of SRC-084. Active CSV references use canonical IDs.

## Known limitations that remain open

1. **Incomplete discovery:** nine districts have no relevant place row in the current archive. The search log does not claim that no traditions exist there.
2. **No exhaustive current-practice census:** several entries are historical, household-level, starter-culture, secondary-review or district-level evidence. Current prevalence and producer-village maps remain incomplete.
3. **Beverage identity/process conflicts:** Poro Apong filtration versus distillation; Bodo Jou-family product boundaries; Rabha Jonga-mod-related terms; Tai-Ahom Xajpani-related names; and Rohi/Sepa/Black Rohi Modh remain open where evidence does not settle equivalence.
4. **Primary GI specifications:** statements of case for Bodo Jou Gwran, Jou Gishi and Maibra Jou Bidwi still need extraction and product-specific comparison. Registration metadata confirms GI status but does not itself establish village-level production.
5. **SRC-091:** life-form totals do not reconcile with the reported species count, the FL formula/scale needs clarification, and voucher ST/EES/2024/015 is printed for two taxa. No author response or herbarium-label verification has been received.
6. **Community validation:** no substitute for consent-based community review or fieldwork is claimed. Restricted knowledge must not be published without appropriate permission.

## Transition decision

**Assam is not yet ready for the next-state transition.** The repository baseline and geography matrix are useful, but the close-out review still requires a primary-source GI specification pass for the Bodo Jou products and a targeted process/name claim audit. The Hill-Tiwa Chu record has been added and reviewed, but this does not close those remaining checks. “Complete” here means the scope, evidence classes, known gaps and next actions are published and reproducible. It does not mean every beverage has been discovered, all current research gaps are closed, or every listed tradition is currently practiced.

Keep Assam as the active research state until those repository-level checks are completed and you choose to move on. Long-term fieldwork and community-confirmation gaps may remain open, but the primary-source and process/name close-out tasks should be completed first. Do not mark unresolved claims as verified to achieve closure.

## Final workflow gate

- [x] CSV structure and cross-reference validation passed after the latest data changes.
- [x] The district/community matrix, search log, beverage-record review and known-limitations documents are indexed.
- [ ] Extract and compare the primary GI specifications for Jou Gwran, Jou Gishi and Maibra Jou Bidwi.
- [ ] Complete the targeted process/name claim audit identified in the close-out review.
- [x] Latest GitHub Pages deployment succeeds for the final documentation commit (run [39927405518](https://github.com/gahlautabhinav/indian-drinks-research/actions/runs/39927405518)).

## 2026-10-24 snapshot refresh

The 2026-10-23 release-candidate counts are superseded by the current CSV snapshot: **31 Assam beverage records; 100 Assam place-register rows (104 place rows project-wide); 32 distinct raw district-field strings / 36 semicolon-separated district tokens; 35 district baseline rows; 55 Assam-assigned research gaps (57 total project gaps, all Open); and 127 populated source-register rows (highest ID SRC-127; SRC-080 absent).** These are archive counts, not completeness measures or unique-village counts. The state-transition gate remains pending, particularly because the three Bodo Jou GI case statements, Journal 191 text and amended maps have not yet been extracted into the archive. See [coverage audit](coverage-audit.md) and [Bodo Jou GI audit](bodo-jou-gi-registry-audit-src-031-033.md).


**2026-10-28 source-count reconciliation (superseded by SRC-126):** Earlier historical notes overstated the source-row count by treating the highest SRC ID as the number of populated rows. The register snapshot at that point contained 124 populated rows; SRC-080 was absent and was not silently recreated or renumbered. After SRC-126 was added, the current register contains 126 populated rows; SRC-080 remains absent. This does not close ASM-GAP-026.


**2026-10-24 Luk Lao update:** Added provisional beverage record ASM-031-LKL and named commercial-production locality lead ASM-PL-101 for Demou, Sivasagar, based on SRC-117 (Open Magazine, 2024). Relationship to Xajpani/Sajpani/Nam-Lau/Laopani remains unresolved; see `research/assam/luk-lao-demou-locality-and-identity-audit.md` and ASM-GAP-054. This is not proof of village-wide current production.


**2026-10-24 regulatory source addition:** SRC-118 records the Government of Assam's 6 May 2017 Gazette amendment on Heritage Alcoholic Beverages. Its indexed extract establishes the regulatory framework and a definition of starter cake, not a Luk Lao-specific licence or recipe. The PDF timed out during direct retrieval; ASM-GAP-054 remains open.


**2026-10-24 SRC-119 update:** Added the Bodoland GI Heritage site as a community-heritage source and created `bodo-jou-community-heritage-source-audit-src-119.md`. It provides process leads but conflates official certificate numbers 648–650 with application numbers 968–970; those identifiers and the unclear Jou Gwran distillation/concentration claim are documented in the GI audit. This does not close the primary-specification gate.


**2026-10-24 SRC-120 update:** Added the official IP India consolidated GI register to disambiguate Bodo Jou list serial numbers (648–650), application numbers (968–970) and certificate numbers (648–650). The application IDs in this archive remain 968–970. This corroboration does not close the primary-specification gate.


**2026-10-28 SRC-124 plant attribution update:** Added `research/assam/src-124-bodo-plant-attribution-crosswalk.md`, extracting the 20 Table 1 entries whose community field explicitly includes Bodo and comparing cautious taxon-level leads against SRC-123. Because SRC-124 does not map plants to individual beverages, no canonical Amao ingredient or production-place records were added. ASM-GAP-041 and ASM-GAP-046 remain Open; the state-transition gate is still unmet.


**2026-10-28 SRC-125 update:** Added a source audit of the 2021 Jou heavy-metal study at `research/assam/jou-heavy-metal-study-audit-src-125.md`. It covers six Kokrajhar samples (two per beverage type) and flags analytical-uncertainty and risk-model interpretation limits. SRC-125 is now registered; ASM-GAP-055 remains Open and no production-place or safety claim was added. At that log entry, the source register contained 124 populated rows, with SRC-125 as the highest assigned ID; SRC-080 was absent and remains a numbering audit item. The later SRC-126 addition brings the current populated row count to 126.


**2026-10-29 source-count update after SRC-127:** The current source register now contains 127 populated data rows; SRC-127 is a new secondary review record, and SRC-080 remains absent. The earlier 126-row snapshot is historical. This source-count update does not close any research gap or pass the Assam transition gate.
