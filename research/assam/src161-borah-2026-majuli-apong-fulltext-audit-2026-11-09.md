# SRC-161 — Borah (2026): Majuli Mising Apong starter inventory audit

**Source:** Porismita Borah (2026), “Documentation of ethnobotanical plants used in the preparation of Apong, a traditionally prepared rice beer by the Mishing tribal community of Majuli district,” *International Journal of Advanced Research* 14(04):1361–1368. DOI: https://doi.org/10.21474/IJAR01/23298. CC BY 4.0.
**Full text inspected:** ResearchGate-hosted publisher PDF text, pages 1361–1368.
**Related records:** SRC-148, SRC-151, SRC-153, SRC-160; ASM-GAP-070.

## 1. Field design and geography

- Three randomly selected Mising villages in Majuli district.
- Fieldwork April–October 2024.
- 28 informants, described as age group 40–70; the article says special emphasis was given to elderly women involved in Apong preparation.
- Semi-structured interviews, informal discussions and transect walks.
- Plant specimens were identified using regional floras and online nomenclatural databases; herbarium sheets were reportedly submitted to Jengraimukh College herbarium.

**Not reported:** village names, village coordinates, per-village informant counts, household/batch counts, plant-by-village matrix, individual voucher numbers or herbarium accession IDs. The study supports district-level Majuli evidence only.

## 2. Inventory transcription and count anomaly

The article reports 48 plant species in 30 families and presents 48 numbered table rows with vernacular names, family, plant part, Relative Frequency of Citation (RFC) and Use Value (UV). The complete row-level transcription is committed in:
`research/assam/src161-borah-2026-majuli-apong-48-plant-inventory.csv`.

**Duplicate-name anomaly:** table rows 20 and 33 both print *Zanthoxylum oxyphyllum* Edgew. but give different vernacular names (Prothoma; Mejenga) and different RFC/UV (0.7/0.6; 0.9/1.1). The table therefore has 48 records but only 47 unique scientific-name strings. This may be a duplicate identification, two local-name records for the same taxon, or a table error. Retain both rows; do not silently collapse them or count 48 unique taxa until the author clarifies.

Other transcription/identity flags:
- Row 6 gives “Tinospora Miers” without a species epithet.
- Row 14 gives *Aschasma loroglossum* with family Scytosiphonaceae; this taxon/family pairing is anomalous and requires voucher verification.
- Row 31 assigns *Scoparia dulcis* to Plantaginaceae; preserve the published family pending taxonomic review.
- Row 38 prints “Guilandian bonduc”.
- Row 39 prints “Termalia arjuna”.
- Row 42 prints “Bergera koenigii” (the familiar curry-leaf taxon is commonly treated as *Murraya koenigii*); retain the published label pending review.
- Several scientific-name spellings were split by PDF line wrapping. The CSV notes the few OCR-normalized joins; no silent taxonomic synonym correction is imposed.

## 3. Starter-cake and beverage-process findings

The paper explicitly frames its plant inventory as plants incorporated in E’pob starter-cake preparation, not as a list of ingredients added directly to finished beverage.

Starter process as reported:
- Glutinous rice soaked 2–3 hours, pounded in a wooden pestle/mortar (Ki:per and E:gi), mixed with dried/pounded plant material and rice powder, and inoculated with old E’pob.
- Small oval cakes formed and dried 2–3 days on a bamboo sieve covered with paddy straw and Rukji (*Dryopteris filix-mas*) leaves.
- Cakes stored in an earthen pot plugged with Rukji leaves; stated storage period 1–2 months.

Nogin account:
- Mostly non-glutinous cooked rice mixed with powdered E’pob.
- Earthen pot lined with banana leaf, plugged with paddy straw.
- At least 6–7 days undisturbed; 10–15 days for full fermentation in summer.
- Water added to fermented rice before consumption.

Po:ro account:
- Dry paddy straw and paddy husk partially burnt; ash mixed into cooked non-sticky rice.
- E’pob added; mixture stored in an earthen pot, plugged with straw, leaves or Rukji.
- 10–15 days for summer fermentation.
- Extracted through a funnel-shaped bamboo strainer called Ta:suk with water poured through the fermented mass.

These are one author's district-specific descriptions, not universal Mising process standards. The study does not assign individual plant species to the Po:ro versus Nogin preparation variants; the list belongs to E’pob generally.

## 4. Quantitative findings and interpretation

- *Oryza sativa* and *Dryopteris filix-mas* have reported RFC 1.0 and UV 1.6 and 1.5 respectively.
- Other taxa with RFC 1.0 include *Saccharum officinarum*, *Chromolaena odorata*, *Leucas aspera*, *Acmella paniculata*, *Mikania scandens*, *Psidium guajava* and *Zingiber officinale*.
- The paper's formula defines RFC as FC/N and UV as sum of use reports/N. These are informant-citation/use metrics within this study, not evidence of biochemical function or prevalence outside its sample.
- The article discusses potential antimicrobial/fermentation/flavour roles but explicitly says further phytochemical and microbial validation is needed. No beverage microbiology, ethanol assay or biochemical composition test is reported here.

## 5. Cross-study comparison: SRC-151

A preliminary exact two-word botanical-name crosswalk between SRC-161 and the deduplicated 36-entry SRC-151 Mising inventory finds 11 shared name strings:
- *Artocarpus heterophyllus*
- *Saccharum officinarum*
- *Vitex negundo*
- *Chromolaena odorata*
- *Piper longum*
- *Centella asiatica*
- *Hydrocotyle sibthorpioides*
- *Drymaria cordata*
- *Scoparia dulcis*
- *Zanthoxylum nitidum*
- *Psidium guajava*

This is a name-level comparison only. It does not prove the same plant part, local name, household recipe, village distribution, taxonomic determination or independent replication. In particular, *Hydrocotyle sibthorpioides* family placement differs across papers and requires voucher review.

## 6. Cross-study comparison: SRC-153

The existing SRC-151/SRC-153 audit reports seven shared exact binomial strings between those two studies. SRC-161 shares seven exact binomial strings with SRC-153:
- *Artocarpus heterophyllus*
- *Psidium guajava*
- *Piper longum*
- *Saccharum officinarum*
- *Vitex negundo*
- *Scoparia dulcis*
- *Hydrocotyle sibthorpioides*

Additional possible relationships require spelling or taxonomic review and are not counted as exact overlaps. The crosswalk must not convert name overlap into evidence that the same household uses all these taxa in the same starter cake.

## 7. Comparison with SRC-160 (Jorhat, 2026)

SRC-160 reports 10 Jorhat villages and 50 key informants for a broader fermented-food/medicinal-plant study, while SRC-161 reports three unnamed Majuli villages and 28 informants focused on Apong starter cake. The two 2026 studies are separate samples in different districts; do not merge their informant counts or infer common village-level use. SRC-160's conclusion allocates 20 starter plants collectively to Po:ro and Nogin, while SRC-161 does not allocate its 48-row list between the two beverage types.

## 8. Evidence request / gap

Request from the author/Jengraimukh College:
1. Names and coordinates (or official village identifiers) of the three surveyed villages.
2. Per-village and per-household informant/batch sample sizes.
3. De-identified plant-by-informant matrix and any beverage-specific (Po:ro/Nogin) allocation.
4. Herbarium accession numbers and access to sheets/photos for all 48 entries.
5. Clarification whether table rows 20 and 33 are duplicate *Zanthoxylum oxyphyllum* records or two different taxonomic determinations.
6. Correct identifications/families for the flagged entries and the complete binomial for “Tinospora Miers”.

**Archive decision:** register this as district-level Majuli starter-culture evidence and preserve the complete source transcription. Do not create village-specific place rows or split taxa by beverage type until the missing records are obtained.

## Sources
- DOI: https://doi.org/10.21474/IJAR01/23298
- Full text copy: https://www.researchgate.net/publication/404971872_DOCUMENTATION_OF_ETHNOBOTANICAL_PLANTS_USED_IN_THE_PREPARATION_OF_APONG_A_TRADITIONALLY_PREPARED_RICE_BEER_BY_THE_MISHING_TRIBAL_COMMUNITY_OF_MAJULI_DISTRICT
- OpenAlex metadata: https://openalex.org/works/W7161536275
- SRC-151 full transcription: `src151-duarah-et-al-2023-mising-36-plants.csv`
- SRC-153 full audit: `src153-mili-sundriyal-2023-epop-fulltext-audit.md`

## 9. Authority-backed taxonomic review (2026-11-09)

A separate reviewed layer is committed at `src161-taxonomic-review-2026-11-09.csv`. Raw source spellings in the 48-row transcription remain unchanged.

Key corrections/decisions based on Kew Plants of the World Online (POWO), Kew Medicinal Plant Names Services (MPNS), and India Flora Online:
- Row 1 “Paderia foetida” is a source spelling error; accepted spelling is *Paederia foetida* L. (Rubiaceae).
- Row 2 *Phlogacanthus thyrsiformis* is accepted in POWO (Acanthaceae).
- Row 6 “Tinospora Miers” is genus-only; no species epithet may be inferred.
- Row 13 *Hydrocotyle sibthorpioides* is accepted in Araliaceae. The SRC-151 transcription's Araliaceae agrees with POWO; do not treat it as a different species.
- Row 14 is especially important: “Aschasma loroglossum” corresponds to *Achasma loroglossum*, a synonym of accepted *Etlingera loroglossa* (Zingiberaceae). The SRC-161 table's Scytosiphonaceae assignment is erroneous/inconsistent; voucher identity still needs confirmation.
- Row 20/33 *Zanthoxylum oxyphyllum* is accepted in Rutaceae. The taxonomic name is accepted, but whether the two rows are separate local-name observations or duplicate table records remains unresolved.
- Row 31 *Scoparia dulcis* is accepted in Plantaginaceae. SRC-161's family is supported by current POWO/WFO; SRC-151's Scrophulariaceae reflects a different/older family treatment, not necessarily a distinct plant.
- Row 39 “Termalia arjuna” is likely a spelling error for *Terminalia arjuna* (Combretaceae); preserve the source string until voucher confirmation.
- Row 42 *Bergera koenigii* is **not** a typo under current POWO treatment: POWO accepts *Bergera koenigii* and lists *Murraya koenigii* as its synonym, following Esser (2021). Some other floristic frameworks retain Murraya; cite the taxonomic backbone used.

This is a nomenclatural crosswalk, not specimen authentication. The accepted name of a candidate does not prove that the field-collected plant was correctly identified. No raw source strings or canonical beverage/plant rows were overwritten.

## 10. Cross-study interpretation correction

The 11 SRC-151 overlaps and 7 SRC-153 overlaps are exact-name-string matches after removal of author abbreviations and punctuation, not synonym-resolved totals. Family disagreement for *Scoparia dulcis* is taxonomic-framework history; *Hydrocotyle sibthorpioides* is consistently Araliaceae in the current Kew treatment. These overlaps should be used as a research prioritization signal, not a claim of uniform use across Mising villages.
