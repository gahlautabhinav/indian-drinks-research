# Assam state-baseline release note

**Release candidate date:** 2026-10-23  
**Release status:** Transition-ready baseline confirmed on 2026-10-23  
**Scope:** Publicly documented traditional beverage traditions represented in the current archive; not an exhaustive census of every Assam beverage or community practice.

**Live dashboard:** https://gahlautabhinav.github.io/indian-drinks-research/

## Snapshot at release candidate

| Measure | Current count | Interpretation |
|---|---:|---|
| Canonical Assam beverage records | 22 | Working inventory; not exhaustive |
| Assam place-register rows | 85 | Repeated/locality, district, historical, community, study-scope and unresolved leads; not 84 unique villages |
| Place rows across the project | 89 | Includes four rows tagged to other geographies |
| Raw district-field strings among Assam place rows | 29 | Combined and unresolved labels included |
| Semicolon-separated district tokens | 34 | Not an official district count |
| District baseline rows | 35 | One row for each district name in the working administrative reference layer |
| Districts with no place row at all | 9 | Barpeta, Bajali, Charaideo, Darrang, Dhubri, Hojai, Nalbari, South Salmara-Mankachar and Tamulpur. Biswanath has a study-area lead only; product/community attribution remains unresolved. |
| Assam research gaps | 48 | All remain open; each has a next action |
| Source-register rows | 99 | Includes two retired duplicate aliases; not 93 unique publications |

## What this baseline includes

- A current archive-integrity audit and CI validation for CSV shape, primary IDs, source/beverage references, district-matrix references, stray source-ID tokens in prose fields, and gap traceability.
- A district crosswalk and a 35-district archive-presence matrix that distinguish named locality/study-site evidence from district-level, community-distribution, combined-region and unresolved leads.
- A grouped district search log documenting the queries attempted, leads found and ten districts where no relevant place row was found in this pass.
- A desk review of all 22 Assam beverage records, with source IDs, process/name conflicts, geographic-confidence limits and next actions.
- A taxonomic, quantitative and voucher audit of the 2026 cross-community paper (SRC-091), including a draft author clarification request. The request has **not** been sent.
- Source-ID canonicalization for two duplicate source pairs: SRC-081 is a retired alias of SRC-066; SRC-090 is a retired alias of SRC-084. Active CSV references use canonical IDs.

## Known limitations that remain open

1. **Incomplete discovery:** ten districts have no relevant place row in the current archive. The search log does not claim that no traditions exist there.
2. **No exhaustive current-practice census:** several entries are historical, household-level, starter-culture, secondary-review or district-level evidence. Current prevalence and producer-village maps remain incomplete.
3. **Beverage identity/process conflicts:** Poro Apong filtration versus distillation; Bodo Jou-family product boundaries; Rabha Jonga-mod-related terms; Tai-Ahom Xajpani-related names; and Rohi/Sepa/Black Rohi Modh remain open where evidence does not settle equivalence.
4. **Primary GI specifications:** statements of case for Bodo Jou Gwran, Jou Gishi and Maibra Jou Bidwi still need extraction and product-specific comparison. Registration metadata confirms GI status but does not itself establish village-level production.
5. **SRC-091:** life-form totals do not reconcile with the reported species count, the FL formula/scale needs clarification, and voucher ST/EES/2024/015 is printed for two taxa. No author response or herbarium-label verification has been received.
6. **Community validation:** no substitute for consent-based community review or fieldwork is claimed. Restricted knowledge must not be published without appropriate permission.

## Transition decision

**Assam can be treated as complete for the purpose of starting the next state's research baseline once the latest archive validation and GitHub Pages deployment both pass.** “Complete” here means the scope, evidence classes, known gaps and next actions are published and reproducible. It does not mean every beverage has been discovered, all 48 research gaps are closed, or every listed tradition is currently practiced.

After the workflow gate passes, retain Assam as a maintainable archive with open gaps while beginning the next state. Do not wait indefinitely for author replies or fieldwork; do not mark unresolved claims as verified to achieve closure.

## Final workflow gate

- [x] CSV structure and cross-reference validation passed after the latest data changes.
- [x] The district/community matrix, search log, beverage-record review and known-limitations documents are indexed.
- [x] Latest GitHub Pages deployment succeeds for the final documentation commit (run [39927405518](https://github.com/gahlautabhinav/indian-drinks-research/actions/runs/39927405518)).
