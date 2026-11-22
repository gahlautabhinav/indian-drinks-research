# SRC-170 — Pawe & Gogoi (2013): taxonomic authority review

**Review date:** 22 November 2026  
**Source:** Pawe, Dimbo; Gogoi, Rajib (2013), “Ethnobotany of Poro Apong or Chai Mod — A local rice beer of Mishing tribes of Assam,” *NeBIO* 4(2):46–49.  
**Scope:** A targeted authority check of selected source-published names in the 28-taxon Apob inventory. This is a nomenclatural review, not a re-identification of the collected plants.

## 1. Main result

The source-faithful inventory remains **28 taxon entries**. No taxon is added or removed. The review identifies several likely transcription/orthographic issues and authority-backed name relationships that should be held in a separate reconciliation layer. The original table strings remain unchanged.

The strongest database-backed relationships are:

- “Hydrocotile javanica” is a likely misspelling of *Hydrocotyle javanica* Thunb.; Kew POWO accepts the latter and places it in **Araliaceae**, not the source table's Apiaceae.
- “Leucus plukenetii” is a likely spelling/generic error for *Leucas plukenetii* (Roth) Spreng.; POWO treats that name as a synonym of accepted *Leucas aspera* (Willd.) Link.
- “Scoperia dulcis” is a likely misspelling of accepted *Scoparia dulcis* L.; POWO places it in **Plantaginaceae**, not the source table's printed “Scophulariaceae”.
- “Zenthoxylum nitidum” is a likely misspelling of accepted *Zanthoxylum nitidum* (Roxb.) DC.
- “Coctus speciosa” is consistent with a misspelled rendering of *Costus speciosus* (J.Koenig) Sm.; current POWO accepts *Hellenia speciosa* (J.Koenig) S.R.Dutta and lists *Costus speciosus* as a synonym. Older taxonomic authorities have accepted *Costus speciosus*, so the chosen backbone must be stated.

## 2. Selected authority crosswalk

See `src170-taxonomic-authority-crosswalk-2026-11-22.csv` for row-level decisions and URLs.

| Source string | Authority-level candidate | Treatment |
|---|---|---|
| *Artocarpus heterophylla* Lam. | *Artocarpus heterophyllus* Lam. | Probable orthographic error; not specimen-verified |
| *Capsicum annuam* Linn. | *Capsicum annuum* L. | Probable orthographic error; not specimen-verified |
| *Coctus speciosa* (Koenig) Smith | *Hellenia speciosa* (J.Koenig) S.R.Dutta; synonym *Costus speciosus* | Strong nomenclatural candidate; source string preserved |
| *Hydrocotile javanica* Thunb. | *Hydrocotyle javanica* Thunb. | Strong spelling candidate; source family conflicts with POWO |
| *Leucus plukenetii* Spreng. | *Leucas aspera* (Willd.) Link; synonym *Leucas plukenetii* | Strong spelling + synonym chain; voucher still needed |
| *Scoperia dulcis* Linn. | *Scoparia dulcis* L. | Strong spelling candidate; source family conflicts with POWO |
| *Zenthoxylum nitidum* Roxb. | *Zanthoxylum nitidum* (Roxb.) DC. | Strong spelling candidate; accepted species occurs in Assam |

## 3. What this does not prove

POWO/ Kew name acceptance does not identify a physical specimen. The paper reports that plants were collected and identification was confirmed at BSI Shillong (ASSAM) and Itanagar (ARUN), but does not publish collector numbers, voucher accession numbers or specimen images. Therefore:

1. Keep every source-published string and family in the transcription inventory.
2. Store authority names and family corrections in this separate crosswalk only.
3. Do not change the 28-taxon count on the basis of spelling normalization.
4. Do not claim that the specimen corresponding to a likely typo has been taxonomically confirmed by this desk review.
5. Seek the authors' collector details and ASSAM/ARUN voucher accessions before promoting candidate mappings to specimen-confirmed identities.

## 4. Important taxonomic nuance

The *Costus* case is not a simple spelling fix. POWO currently accepts *Hellenia speciosa* and lists *Costus speciosus* among its synonyms. Its page also records that some earlier taxonomic authorities treated *Costus speciosus* as accepted. For archive consistency, the crosswalk uses the current POWO accepted-name backbone while retaining the familiar historical name and the source's misspelled form.

The *Leucas* case is also more than a letter correction: POWO lists *Leucas plukenetii* as a synonym under *Leucas aspera*. The SRC-170 row and other studies' *Leucas aspera* rows should therefore be flagged as a **candidate taxonomic match**, not automatically merged as evidence of identical specimens, local use, plant part or recipe.

## 5. Next retrieval actions

1. Ask Rajib Gogoi for the original plant list, collector numbers and BSI herbarium accession identifiers.
2. Ask BSI Shillong (ASSAM) and the Itanagar herbarium (ARUN) to search using author/collector, seven named villages and the 2013 paper citation.
3. Compare voucher images or determination slips for the seven candidate names above.
4. Only after voucher or author confirmation should the archive promote candidate spellings to specimen-level taxonomic mappings.

## Sources

- Kew, Plants of the World Online — *Pteridium* is not in this SRC-170 subset; no SRC-044 name has been imported into this review.
- POWO, *Artocarpus heterophyllus*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:850389-1
- POWO, *Capsicum annuum*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:316944-2
- POWO, *Hellenia speciosa* (including *Costus speciosus* synonym): https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:60469691-2
- POWO, *Hydrocotyle javanica*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:843558-1
- POWO, *Leucas aspera* (including *Leucas plukenetii* synonym): https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:449314-1
- POWO, *Scoparia dulcis*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:230902-2
- POWO, *Zanthoxylum nitidum*: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:775896-1
