# Mising Apong starter-plant cross-study reconciliation — SRC-007 / 146 / 153 / 160 / 161

**Audit date:** 10 November 2026  
**Purpose:** compare five independently registered Mising starter-culture / Apong plant inventories without silently merging taxa, variants, communities or study scopes.

## Sources included

- **SRC-007:** Yein et al. (2022), Majuli; 21 visible Table 1 entries; field survey September–December 2021. The paper says the researchers visited more than 20 village households but names none and does not allocate plants to Po:ro versus Nagin.
- **SRC-146:** Gogoi, Dutta & Mondal (2013), Sivasagar; article claims 39 plants but Table 1 exposes 37 numbered rows (serials 15 and 29 absent); the article combines a three-village field component with literature-derived material. It is not a clean village-only inventory.
- **SRC-153:** Mili & Sundriyal (2023), Sivasagar; 31 taxa (27 angiosperms, four pteridophytes), 15 sampled villages, two in-depth villages Majorbari and Ligiribari; voucher comparisons with ARUN/ASSAM herbaria are described, but accession numbers and village-by-taxon matrix are unavailable.
- **SRC-160:** Gogoi et al. (2026), Jorhat; 20 taxa listed in the Po:ro subsection. The article's conclusion attributes 20 starter plants collectively to Po:ro and Nogin, so no plant is assigned as Po:ro-exclusive without a household matrix. Ten villages and 50 key informants are reported, but village names, beverage-specific sample allocation and voucher specimens are absent.
- **SRC-161:** Borah (2026), Majuli; 48 numbered E’pob entries, 28 informants and three unnamed villages. No plant-by-beverage allocation is supplied. *Zanthoxylum oxyphyllum* is repeated at rows 20 and 33 with different vernacular names and RFC/UV.

## Data products

1. `src007-yein-2022-21-entry-inventory.csv`: source-faithful 21-row transcription of SRC-007 Table 1.
2. `src153-mili-sundriyal-2023-31-entry-inventory.csv`: source-faithful 31-row transcription of SRC-153 Table 1, including four pteridophytes.
3. `src160-gogoi-et-al-2026-20-entry-po-ro-subsection-inventory.csv`: the 20 taxa named in SRC-160's Po:ro subsection, explicitly carrying the collective-allocation caveat.
4. `mising-five-study-source-row-inventory.csv`: consolidated long-form source-row data for all five studies.
5. `mising-five-study-exact-name-crosswalk.csv`: exact lexical matching only, after removing author citations and punctuation. It is not a synonym database or accepted-name determination.
6. `mising-five-study-candidate-taxonomic-aliases.csv`: spelling/synonym candidates to investigate separately.

## Method and interpretation

- The comparison preserves every source's scientific-name string, vernacular name, family and plant part where available.
- Exact lexical matches are counted only when the first two scientific-name tokens match after removing author citations and punctuation. Genus-level records (e.g. *Neolitsea* sp., *Selaginella* sp.) remain at genus level.
- No fuzzy matching, vernacular-name-only matching, family-based matching, or automatic synonym consolidation was used.
- Potential misspellings and nomenclatural synonyms are isolated in the candidate-alias file. They must be checked against POWO/WFO and, where possible, voucher sheets or author clarification before being treated as the same taxon.
- Counts are source-row counts, not prevalence estimates. They cannot be added to estimate a universal Mising Apong recipe.
- SRC-160's 20 entries are not 20 independently confirmed Po:ro-exclusive plants. The conclusion attributes them collectively to Po:ro and Nogin.
- SRC-007 and SRC-146 contain medicinal-use statements; these are traditional-use claims in those articles, not clinical efficacy or safety evidence.

## Preliminary reconciliation results

- Source-row inventory size: SRC-007 = 21; SRC-146 = 37 visible rows; SRC-153 = 31; SRC-160 = 20; SRC-161 = 48. Total rows compared = 157.
- SRC-161 contains 47 unique printed scientific-name labels because *Zanthoxylum oxyphyllum* is repeated twice; the two original rows remain preserved.
- Exact lexical overlaps (not taxonomic synonym matches), after removing author citations and treating hyphenated epithets as one token, are: SRC-007/SRC-146 9; SRC-007/SRC-153 7; SRC-007/SRC-160 11; SRC-007/SRC-161 10; SRC-146/SRC-153 9; SRC-146/SRC-160 12; SRC-146/SRC-161 16; SRC-153/SRC-160 8; SRC-153/SRC-161 13; SRC-160/SRC-161 13. These are lexical matches only, not taxonomic synonym matches. A shared exact name across studies establishes repeated reporting, not identical local use, plant part, recipe role, locality or beverage variant.
- Some apparent differences may disappear after taxonomic review: e.g. *Eupatorium odoratum* / *Chromolaena odorata*, *Spilanthes acmella* / *Acmella paniculata*, *Murraya koenigii* / *Bergera koenigii*, and *Costus speciosus* / *Hellenia speciosa*. These remain unmerged pending authority and voucher review.
- Conversely, similar vernacular labels must not be used to merge distinct taxa: e.g. SRC-007 *Lygodium japonicum* is not the same as *Lygodium flexuosum* in SRC-146/SRC-153/SRC-160.

## Key quality flags and next actions

1. SRC-007 Table 1 has source spellings such as “Centala acciatica”, “Hydrocotyl rotundifolia” and “Occimum sunctum”; preserve these in the transcription and verify the original page image before correction.
2. SRC-146 has a claimed total of 39 versus 37 visible numbered rows and several source spellings/column issues. The transcription retains only visible rows.
3. SRC-153's table includes source spellings/family assignments such as “Alstonia shcolaris”, “Albizzia lucida”, “Melia azadirach”, and Hydrocotyle family Apiaceae. Preserve them pending voucher/authority review.
4. SRC-160 has no vouchers and no beverage-by-household plant matrix; its 20 entries must not be presented as Po:ro-only.
5. SRC-161 has a duplicated *Zanthoxylum oxyphyllum* row, genus-only *Tinospora*, and the anomalous *Aschasma loroglossum* / Scytosiphonaceae pairing; request voucher catalogue and author clarification.
6. Compare plant parts only after taxon reconciliation; even exact binomial matches may have different parts reported.
7. Seek de-identified household/plant matrices and voucher accessions from all authors/institutions; do not create village pins from district-level samples or unnamed villages.

## Archive decision

No new canonical plant records, village records, or beverage records are created by this crosswalk. Keep ASM-GAP-068, ASM-GAP-069 and ASM-GAP-070 open for their respective missing voucher/field data. The crosswalk is a reproducible research aid, not a normalized taxonomic backbone.
