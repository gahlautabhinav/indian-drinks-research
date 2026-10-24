# E’pob duplicate-entry check: two Zanthoxylum oxyphyllum rows

**Audit date:** 2026-10-24  
**Research gap:** ASM-GAP-045  
**Related flag:** EP-TAX-006  
**Scope:** Determine whether the two SRC-084 entries under *Zanthoxylum oxyphyllum* Edgew. should be deduplicated.

## Question and source records

The Majuli starter-culture inventory (SRC-084) has two rows for the same reported scientific name and family, both listing leaves as the plant part, but with different vernacular names and quantitative indices:

| Crosswalk ID | Scientific name as reported | Vernacular name | Family | Part | RFC | UV |
|---|---|---|---|---|---:|---:|
| EP-CW-020 | *Zanthoxylum oxyphyllum* Edgew. | Prothoma | Rutaceae | Leaves | 0.7 | 0.6 |
| EP-CW-033 | *Zanthoxylum oxyphyllum* Edgew. | Mejenga | Rutaceae | Leaves | 0.9 | 1.1 |

Source: Borah (2026), SRC-084, DOI https://doi.org/10.21474/IJAR01/23298. The article reports three Majuli villages but the accessible article text does not name them.

## External cross-check

- Kew Plants of the World Online accepts *Zanthoxylum oxyphyllum* Edgew. and records it as native to Assam among other parts of Asia: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:775920-1
- India Flora Online gives **Mejenga / Mezenga** as Assamese vernacular names for *Z. oxyphyllum*: https://indiaflora-ces.iisc.ac.in/herbsheet.php?cat=13&id=12546
- A 2021 paper on Mising magico-religious plants reports *Z. oxyphyllum* under the Mising vernacular **Onger**, with voucher GP-97: https://pmc.ncbi.nlm.nih.gov/articles/PMC3331556/
- A regional wild-edible-plants-of-Assam reference likewise lists Mezenga (Assamese) and Onger (Mishing) for *Z. oxyphyllum*: https://www.balinghasai-farms.info/publication/wildEdible_plantsAssam.pdf

The external sources support Mejenga/Mezenga and Onger as names associated with this species in Assamese/Mising contexts. They do **not** establish “Prothoma” as a synonym, a second species, or a typographical error in the Majuli paper.

## Assessment

This is a **duplicate scientific-name / differing vernacular-label ambiguity**, not proof of two distinct botanical taxa and not enough evidence to delete either row. The different RFC and UV values could reflect separate informant-use/name entries, an author table duplication, or a transcription issue. The accessible evidence cannot choose among these explanations.

## Data decision

1. Preserve both rows and all original values in data/epob_inventory_crosswalk.csv.
2. Do not add the two rows together or select the higher RFC/UV as the “correct” value.
3. Keep EP-TAX-006 open and request the original table/voucher/author clarification, especially the meaning and spelling of “Prothoma”.
4. Do not create any new village or beverage record from this finding. The three Majuli study villages remain unnamed in accessible article text.
5. Keep the accepted taxon name separate from the source's vernacular strings; do not imply that a vernacular name independently verifies the specimen identification.

## Conclusion

**No deduplication performed.** The best-supported current treatment is to retain one accepted scientific-name concept with two separate source-reported vernacular entries, flagged as unresolved pending author clarification. ASM-GAP-045 remains Open.

## Sources

- SRC-084: https://doi.org/10.21474/IJAR01/23298
- POWO: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:775920-1
- India Flora Online: https://indiaflora-ces.iisc.ac.in/herbsheet.php?cat=13&id=12546
- Mising ethnobotany paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC3331556/
- Wild edible plants of Assam: https://www.balinghasai-farms.info/publication/wildEdible_plantsAssam.pdf
