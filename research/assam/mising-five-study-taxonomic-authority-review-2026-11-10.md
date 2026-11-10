# Mising Apong plant-name candidate review — POWO authority check

**Review date:** 10 November 2026  
**Scope:** 17 candidate rows in `mising-five-study-candidate-taxonomic-aliases.csv`, arising from SRC-007, SRC-146, SRC-153 and SRC-161.  
**Authority consulted:** Royal Botanic Gardens, Kew, Plants of the World Online (POWO), using the current Kew Names and Taxonomic Backbone / World Checklist of Vascular Plants pages surfaced on the review date.

## Decisions

### Authority-level synonym relationships confirmed

| Source spelling | POWO result | Archive treatment |
|---|---|---|
| SRC-153 `Eupatorium odoratum` ↔ SRC-161 `Chromolaena odorata` | POWO treats `Eupatorium odoratum` as a synonym of accepted `Chromolaena odorata`. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:100517-2 | Add an authority crosswalk relationship only. Retain both source strings and do not infer specimen identity without vouchers. |
| SRC-161 `Bergera koenigii` ↔ SRC-007/SRC-160 `Murraya koenigii` | POWO accepts `Bergera koenigii` and lists `Murraya koenigii` as a homotypic synonym. https://powo.science.kew.org/taxon/771522-1 | Authority relationship confirmed; source strings remain immutable. |
| SRC-161 `Hellenia speciosa` ↔ SRC-007/SRC-160 `Costus speciosus` | POWO treats `Costus speciosus` as a homotypic synonym under accepted `Hellenia speciosa`. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60469691-2 | Authority relationship confirmed; source strings remain immutable. |
| SRC-007 `Occimum sunctum` ↔ candidate `Ocimum sanctum` / `Ocimum tenuiflorum` | POWO treats `Ocimum sanctum` as a synonym of accepted `Ocimum tenuiflorum`. https://powo.science.kew.org/taxon/30252269-2 ; https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:453130-1 | Likely typo plus synonym chain, but original table image/voucher must be checked before normalization. |

### Similar-looking names that must not be merged

| Source spelling | Authority result | Decision |
|---|---|---|
| SRC-153 `Spilanthes acmella` vs SRC-161 `Acmella paniculata` | POWO treats `Spilanthes acmella` as a synonym of `Blainvillea acmella`; it treats `Spilanthes paniculata` and `Spilanthes acmella var. paniculata` as synonyms of `Acmella paniculata`. https://powo.science.kew.org/taxon/250748-1 ; https://powo.science.kew.org/taxon/914780-1 | Do not merge. The epithet/genus similarity is misleading. |
| SRC-007 `Hydrocotyl rotundifolia` vs `Centella asiatica` | POWO treats `Hydrocotyle rotundifolia` as a synonym of `Hydrocotyle sibthorpioides var. sibthorpioides`, while `Centella asiatica` is separately accepted. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77386873-1 ; https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:1197718-2 | Do not merge the two source rows. The printed `Hydrocotyl` still needs source-image/voucher review. |

### Probable spelling/transcription issues; authority name checked, specimen identity not proven

- `Centala acciatica` (SRC-007) may be a misspelling of accepted `Centella asiatica`; POWO accepts the latter: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:1197718-2.
- `Drymeria cordata` (SRC-146) is likely a spelling variant of accepted `Drymaria cordata`: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:30172747-2.
- `Alstonia shcolaris` (SRC-153) is likely a typographic transposition of accepted `Alstonia scholaris`: https://powo.science.kew.org/taxon/60445977-2.
- `Albizzia lucida` (SRC-153) is likely an orthographic variant of accepted `Albizia lucida`: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:473295-1.
- `Melia azadirach` (SRC-153) is likely a spelling error for accepted `Melia azedarach`: https://powo.science.kew.org/taxon/578949-1.
- `Paderia foetida` (SRC-161) is likely a spelling error for accepted `Paederia foetida`: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:758897-1.
- `Guilandian bonduc` (SRC-161) is likely a spelling error for accepted `Guilandina bonduc`: https://powo.science.kew.org/taxon/114706-2.
- `Termalia arjuna` (SRC-161) is likely a spelling error for accepted `Terminalia arjuna`: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:170962-1.

### Unresolved / keep source-faithful

- `Swertia chirata` (SRC-007) and `Swernia chirata` (SRC-146): POWO confirms `Swertia chirayita` as an accepted Assam-native species, but that does not establish that the source's printed epithet `chirata` refers to it. Keep unresolved until original page images, vouchers or author confirmation are available: https://powo.science.kew.org/taxon/60447535-2.
- `Polygonum plebeium` / `Polygonum plebejum` (SRC-153): internal source spelling variation; check the printed table and prose images and any voucher label.
- `Zanthoxylum oxyphyllum` repeated at SRC-161 rows 20 and 33: a duplicate source-row issue, not a taxonomic synonym question. Retain both observations pending voucher/author clarification.

## Method and limits

1. POWO pages were used to check accepted-name and synonym relationships, not to identify the physical plants used by the Mising informants.
2. A taxonomic synonym is not proof that two studies sampled the same population, plant part, household recipe role or beverage subtype.
3. Source strings must remain unchanged in the transcription inventories. Any normalized taxon key belongs in a separate, reversible authority crosswalk.
4. Misspellings inferred from spelling similarity are explicitly provisional. Do not create a canonical plant record or merge cross-study counts from these candidates without original table-image and voucher checks.
5. The POWO backbone can reflect alternative taxonomic treatments; this audit records the current Kew treatment, not a claim that no alternative classification exists.

## Archive update

The candidate-alias CSV was updated with these authority outcomes and direct POWO URLs. No beverage, plant, community or place record was created or modified. The unresolved plant-voucher and field-matrix gaps remain open.
