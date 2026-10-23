# SRC-091 taxonomic reconciliation — tranche 1

**Review date:** 2026-10-23  
**Source:** Talukdar et al. (2026), *Cultural ecology and conservation of traditional beverage practices among selected communities of Assam, Northeast India*, Discover Food 6:376. DOI: https://doi.org/10.1007/s44187-026-01101-w  
**Scope:** Preliminary name-and-family crosswalk for Table 1; not specimen identification.

## Dataset treatment

- The 41 source rows remain unchanged in `data/src091_table1_transcription.csv`.
- `data/src091_taxonomic_reconciliation.csv` adds a separate 41-row reconciliation layer.
- Eight rows received targeted nomenclatural review in this tranche; the other 33 remain explicitly pending. “Pending” means not reviewed here, not incorrect.
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

## Still open

- Reconcile the remaining 33 rows against POWO and/or World Flora Online, recording authority URLs and exact author citations.
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
