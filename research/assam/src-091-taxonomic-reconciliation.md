# SRC-091 taxonomic reconciliation — rolling audit

**Review date:** 2026-10-23  
**Source:** Talukdar et al. (2026), *Cultural ecology and conservation of traditional beverage practices among selected communities of Assam, Northeast India*, Discover Food 6:376. DOI: https://doi.org/10.1007/s44187-026-01101-w  
**Scope:** Preliminary name-and-family crosswalk for Table 1; not specimen identification.

## Dataset treatment

- The 41 source rows remain unchanged in `data/src091_table1_transcription.csv`.
- `data/src091_taxonomic_reconciliation.csv` adds a separate 41-row reconciliation layer.
- Thirty-five of 41 rows now have a targeted POWO name/family check or a specific taxonomic issue recorded; six remain pending. *Drymaria diandra* has been reviewed but remains unresolved at authorship level. This is a literature crosswalk, not voucher verification. “Pending” means not reviewed here, not incorrect.
- A literature or POWO accepted-name match does **not** independently verify the plant collected under a voucher number. Voucher images, herbarium records, or author confirmation would be needed for specimen-level identification.
- Do not replace source strings, families, plant parts, or values in the transcription layer with normalized values.

## Findings in this tranche

1. **Scoparia dulcis L.** — Table 1 reports Scrophulariaceae; Plants of the World Online (POWO) places the name in Plantaginaceae. Preserve the table label and maintain the conflict in the crosswalk.
2. **Hellenia speciosa** — POWO treats *Costus speciosus* as a synonym of *Hellenia speciosa*. The paper already uses the latter name.
3. **Vernonia cinerea** — POWO treats this name as a synonym of *Cyanthillium cinereum*. Keep the source name as published; use the crosswalk for normalized search.
4. **Acacia pennata** — POWO accepts *Senegalia pennata* and treats *Acacia pennata* as a synonym.
5. **Camphora glandulifera** — POWO accepts this name in Lauraceae and lists *Cinnamomum glanduliferum* among its synonyms.
6. **Pouzolzia sanguinea** — POWO recognizes the name in Urticaceae. The article narrative's reported use of *Pouzolzia viminea* remains a distinct textual discrepancy; no synonymy is assumed here.
7. **Zanthoxylum rhetsa** — POWO accepts the published name in Rutaceae.
8. **Drymaria diandra (Sw.) Blume** — left unresolved at authorship level. Search results surface different *Drymaria diandra* author citations and taxonomic treatments; a binomial-only match is not sufficient to harmonize this row.

9. **Pteridium aquilinum** — POWO places this taxon in Dennstaedtiaceae, whereas Table 1 reports Pteridaceae. Preserve the source family label and flag the classification conflict.
10. **Christella parasitica** — POWO treats the published name as a synonym of *Thelypteris parasitica*; fern taxonomy can vary by checklist, so retain the original row and record the crosswalk separately.
11. **Musa paradisiaca** — POWO treats *Musa × paradisiaca* as an accepted hybrid name. The article omits the hybrid marker; the transcription retains that exact published string.
12. **Thunbergia grandiflora** — POWO accepts the name with author citation Roxb.; the article includes “Roxb. ex Rottl.” in its citation. This is flagged for author-citation checking rather than silently corrected.
13. **Tinospora cordifolia** — the source's “(Thunb.) Miers” differs from POWO's accepted author citation “(Willd.) Hook.f. & Thomson”; requires source-level review.
14. **Chloranthus elatior** — POWO synonymizes this name under *Chloranthus serratus*, while some regional treatments accept *C. elatior*. This is an alternate-treatment issue.

## Still open

- Reconcile the remaining six pending rows against POWO and/or World Flora Online, recording authority URLs and exact author citations.
- Resolve the article's prose/table discrepancy for *Drymaria* and *Pouzolzia* against the final article text and, if possible, voucher records.
- Check the voucher numbers, including repeated voucher identifiers, against herbarium/accession records. A voucher number printed in the article is not itself a publicly verified accession.
- Keep ethnobotanical attribution, plant identity, reported plant part, and claimed beverage use as separate evidence dimensions.

## Authority links

- POWO, *Scoparia dulcis*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:230902-2
- POWO, *Hellenia speciosa* / *Costus speciosus*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:796383-1
- POWO, *Cyanthillium cinereum* / *Vernonia cinerea*: https://powo.science.kew.org/taxon/1164899-2
- POWO, *Senegalia pennata* / *Acacia pennata*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:77125575-1
- POWO, *Camphora glandulifera*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:463124-1
- POWO, *Pouzolzia sanguinea*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:856236-1
- POWO, *Zanthoxylum rhetsa*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:775986-1
- POWO, *Drymaria cordata* and related names: https://powo.science.kew.org/taxon/30172747-2
- POWO, *Pteridium aquilinum*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:17210060-1
- POWO, *Christella parasitica* / *Thelypteris parasitica*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:1109021-2
- POWO, *Musa × paradisiaca*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:797595-1
- POWO, *Thunbergia grandiflora*: https://powo.science.kew.org/taxon/117460-3
- POWO, *Tinospora cordifolia*: https://powo.science.kew.org/taxon/907828-1
