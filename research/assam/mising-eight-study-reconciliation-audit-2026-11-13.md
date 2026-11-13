# Eight-study Mising Apong / Epop starter-plant reconciliation

**Audit date:** 13 November 2026  
**Scope:** selected source-faithful Mising starter-plant inventories, using canonical source IDs only.  
**Data products:** `mising-eight-study-source-row-inventory-2026-11-13.csv` and `mising-eight-study-exact-name-crosswalk-2026-11-13.csv`.

## Included sources and row counts

| Source | Scope | Transcribed rows |
|---|---|---:|
| SRC-007 — Yein et al. (2022), Majuli | General Epop table; no Poro/Nogin allocation | 21 |
| SRC-146 — Gogoi et al. (2013), Sivasagar | 37 visible numbered rows; article claims 39 | 37 |
| SRC-151 — Duarah et al. (2023) | Mising Opo Pitha/Apob table; 36 distinct numbered entries | 36 |
| SRC-153 — Mili & Sundriyal (2023), Sivasagar | General ÉPOP table; no Poro/Nogin allocation | 31 |
| SRC-160 — Gogoi et al. (2026), Jorhat | 20 taxa in Po:ro subsection, conclusion attributes plants collectively to Po:ro and Nogin | 20 |
| SRC-161 — Borah (2026), Majuli | 48 E’pob entries; no variant allocation; repeated Zanthoxylum oxyphyllum retained | 48 |
| SRC-170 — Pawe & Gogoi (2013), Lakhimpur/Sonitpur | Poro-specific Apob table; 28 taxon strings, 27 visible serials | 28 |
| SRC-171 — Sarma & Devi (2016), Sonitpur | Nogin/Nogjin-specific Epop dicot subset; not a complete recipe | 11 |
| **Total** | **Eight canonical source records** | **232** |

The six-study inventory has been expanded by adding SRC-151 and SRC-171. Duplicate registrations SRC-172 and SRC-173 are aliases of SRC-153 and SRC-007 respectively and are not counted as additional studies. Their expanded transcriptions have been merged into the canonical SRC-153 and SRC-007 inventory files.

## Variant attribution and comparability

- **Explicit Poro-specific:** SRC-170.
- **Explicit Nogin/Nogjin-specific:** SRC-171, but only an 11-taxon dicot subset; the paper says monocots are also used.
- **General / not allocated to variant:** SRC-007, SRC-151, SRC-153, SRC-161.
- **Mixed or ambiguous allocation:** SRC-160 lists 20 taxa in its Po:ro subsection but its conclusion attributes starter plants to Po:ro and Nogin collectively; SRC-146's inventory is not allocated at individual-taxon level in this comparison.

Do not project SRC-170's Poro-specific taxa onto the general Epop lists, or SRC-171's dicot subset onto the complete Nogin recipe. Do not infer that every listed plant is used by every household, in every village, or in every batch.

## Pairwise first-two-token lexical overlaps

The crosswalk strips parenthetical author citations and punctuation, normalizes case/spacing, then compares the first two tokens of each source-published scientific-name string. These are search keys only—not accepted-name matches, taxonomic synonym decisions, voucher matches, or proof of shared traditional use.

| Source pair | Shared keys |
|---|---:|
| SRC-007/SRC-146 | 9 |
| SRC-007/SRC-151 | 6 |
| SRC-007/SRC-153 | 7 |
| SRC-007/SRC-160 | 11 |
| SRC-007/SRC-161 | 10 |
| SRC-007/SRC-170 | 4 |
| SRC-007/SRC-171 | 1 |
| SRC-146/SRC-151 | 10 |
| SRC-146/SRC-153 | 9 |
| SRC-146/SRC-160 | 12 |
| SRC-146/SRC-161 | 16 |
| SRC-146/SRC-170 | 8 |
| SRC-146/SRC-171 | 2 |
| SRC-151/SRC-153 | 7 |
| SRC-151/SRC-160 | 8 |
| SRC-151/SRC-161 | 11 |
| SRC-151/SRC-170 | 5 |
| SRC-151/SRC-171 | 3 |
| SRC-153/SRC-160 | 8 |
| SRC-153/SRC-161 | 13 |
| SRC-153/SRC-170 | 4 |
| SRC-153/SRC-171 | 0 |
| SRC-160/SRC-161 | 13 |
| SRC-160/SRC-170 | 8 |
| SRC-160/SRC-171 | 1 |
| SRC-161/SRC-170 | 7 |
| SRC-161/SRC-171 | 2 |
| SRC-170/SRC-171 | 0 |

The SRC-151/SRC-153 pair retains seven shared binomial keys from the earlier dedicated crosswalk. These remain candidate name-level overlaps, not confirmed same specimens or equivalent plant-use records. Hydrocotyle sibthorpioides has different family placements in the two papers; Lygodium flexuosum is only a possible correspondence to SRC-151's combined “Lygodium japonicum/ L. Flexuosum”; Polygonum plebeium/plebium is a spelling candidate; and the Spilanthes row in SRC-151 has an anomalous botanical-name/family column layout. Keep all source strings unchanged.

## Source-specific quality controls

- SRC-007: 21 rows; original PDF page 499 checked. Preserve “Hydrocotyl rotundifolia(Roxb);”, “Leaves and Burk” and “Occimum sunctum” exactly as printed. No plant-to-village or variant allocation.
- SRC-146: retain 37 visible rows; do not invent missing serials 15 and 29 to match the article's claimed 39 taxa.
- SRC-151: the printed table repeats rows 22 and 23; the transcription contains each distinct numbered entry once. Preserve row 18–19 column anomalies and the combined Lygodium alternative.
- SRC-153: 31 taxa; preserve source family “Myrtacaceae” at row 19 and “Selaginella sp” at row 31. Table is general ÉPOP; no variant allocation.
- SRC-160: 20 taxa; no beverage-specific informant allocation or village-by-taxon matrix.
- SRC-161: preserve both Zanthoxylum oxyphyllum rows 20 and 33 pending author/voucher clarification; no Poro/Nogin allocation.
- SRC-170: 28 taxon strings across 27 visible serials; two Thelypteris names share row 25 and serial 26 is absent. Poro-specific table.
- SRC-171: 11 dicot entries for Nogin/Nogjin Epop; the 17-village/194-respondent field survey is broader than the Epop-specific sample. No Epop plant-by-village matrix or voucher accession IDs.

## Exclusions and unresolved work

- SRC-148 claims 51 species, but Table 1 remains unrecovered; no plant rows are included.
- SRC-061 remains excluded from Mising-only inventories because its multi-community table has not been reliably separated by page-image verification.
- SRC-136 and SRC-084 remain in their existing separate cross-source comparisons; this eight-study set is an expansion of the established six-study comparison plus SRC-151 and SRC-171, not an exhaustive census of every Mising paper.
- No village-by-taxon edges, canonical plant entities, accepted-name merges, abundance estimates, household prevalence or universal starter recipe are created by this lexical crosswalk.
- Voucher accessions and field matrices remain open for SRC-151, SRC-153, SRC-161 and SRC-171. Variant allocation remains open for SRC-007, SRC-151, SRC-153, SRC-160 and SRC-161.

## Archive decision

The two CSVs are reversible research aids. Source-row strings are preserved; all uncertainty and variant scope remain attached to the original source. Do not add or merge plant, village, or beverage records solely from these overlaps.


## Geographic cross-reference (2026-11-13)

SRC-171's field survey names 17 Sonitpur Mising villages: Dharikati, Khonamukh, Kathani, Rangajan, Rongajan Miri, Baligaon, Sotaimiri, Toupamiri, Bamunipam, Bordikorai, Sikomgaon, Silenighat, Morikhuti, Bokagaon, Kekokoli, Tinighoria and Gudamghat. They are recorded as named ethnobotanical study sites (ASM-PL-119–135), not as village-specific Nogin Apong production sites. The 11-taxon Nogin/Nogjin Epop dicot table has no plant-by-village allocation; ASM-GAP-074 tracks this missing evidence.
