# SRC-169 — Borah (2026), Majuli Mising E’pob plant inventory audit

**Source:** Porismita Borah (2026), “Documentation of Ethnobotanical Plants Used in the Preparation of Apong, a Traditionally Prepared Rice Beer by the Mishing Tribal Community of Majuli District,” *International Journal of Advanced Research* 14(04):1361–1368. DOI: https://doi.org/10.21474/IJAR01/23298. Public full-text copy and extracted article text: https://www.researchgate.net/publication/404971872_DOCUMENTATION_OF_ETHNOBOTANICAL_PLANTS_USED_IN_THE_PREPARATION_OF_APONG_A_TRADITIONALLY_PREPARED_RICE_BEER_BY_THE_MISHING_TRIBAL_COMMUNITY_OF_MAJULI_DISTRICT.

## Evidence recovered

- Field survey in **three randomly selected Mising-inhabited villages in Majuli district**, April–October 2024. The paper does not name the villages.
- **28 informants**, reported as aged 40–70; key informants, with emphasis on older women involved in Apong preparation.
- Semi-structured interviews, informal discussions and transect field walks. The paper states prior informed consent and confidentiality.
- Plant identification used regional floras and online taxonomic databases (World Flora Online and Plants of the World Online); herbarium sheets were reportedly deposited at Jengraimukh College. No voucher accession numbers or village-by-village specimen allocation are supplied.
- The stated objective is to identify plants used in **E’pob starter cake**. The article discusses both Po:ro and Nogin Apong, but it does **not** map individual plant taxa to either beverage variant, village or informant.
- Table 1 contains **48 numbered entries** and reports local names, families, plant parts, relative frequency of citation (RFC) and use value (UV). The complete source-row transcription is in `research/assam/src169-borah-2026-majuli-epob-plant-inventory.csv`.

## Process evidence — source-specific, not universal

**E’pob starter cake:** rice is cleaned and soaked for about 2–3 hours, pounded with a wooden pestle and mortar (printed vernacular terms Ki:per and E’gi), mixed with dried/pounded plant material and rice powder, and inoculated with old E’pob. Cakes are shaped and dried for 2–3 days on a bamboo sieve over paddy straw and Rukji leaves (*Dryopteris filix-mas*); stored in an earthen pot. The paper reports storage of 1–2 months.

**Nogin Apong:** mostly non-glutinous rice is cooked, cooled, hand-smashed and mixed with powdered E’pob; placed in an earthen pot lined with banana leaf and sealed with paddy straw. The text gives at least 6–7 days undisturbed and 10–15 days for complete fermentation in summer, then water is added to the fermented rice.

**Po:ro Apong:** dry paddy straw and husk are partially burnt and the ash retained. Cooked (often non-sticky) rice is cooled, mixed with ash and kneaded into a black mass; powdered E’pob is added. The mixture is left overnight or transferred to an earthen pot sealed with straw/leaves/Rukji. The paper gives 10–15 days in summer, then describes separation through a funnel-shaped bamboo strainer called Ta:suk with straw at its base and water poured over the fermented mass. The filtrate is collected as Apong.

**Important process distinction:** this paper's Po:ro account describes water extraction/filtration through Ta:suk, not a distillation apparatus. Do not rewrite this as distillation or use it to resolve the wider source conflict about “distilled” Po:ro/Saimod accounts. Keep each source's process wording separate.

## Table and data-quality audit

1. **48 numbered rows are not automatically 48 unique, fully identified species.** `Zanthoxylum oxyphyllum` appears twice (rows 20 and 33) with different vernacular names (Prothoma and Mejenga) and different RFC/UV values. Preserve both source rows until voucher or informant evidence explains the duplicate.
2. `Tinospora Miers` (row 6) is genus-level, not a complete species identification.
3. `Aschasma loroglossum` is paired with family Scytosiphonaceae (row 14), a conspicuous taxonomic anomaly for a terrestrial root-harvest account. Do not normalize or assign an accepted name without voucher review.
4. The source prints `Paderia foetida`, `Guilandian bonduc`, and `Termalia arjuna`; likely spelling/typographic issues are flagged in the transcription, not silently corrected.
5. Family assignments differ across sources for *Hydrocotyle sibthorpioides* (Araliaceae here; Apiaceae in SRC-005) and *Vitex negundo* (Lamiaceae here; Verbenaceae in SRC-005). These may reflect taxonomic treatments; preserve each source's own family and resolve in a separate authority crosswalk.
6. The source calls *Codiaeum variegatum* “Croton”; this is not sufficient to equate it with *Croton caudatus* in SRC-005.
7. The source includes *Oryza sativa* grain in the 48-row starter-cake inventory. Keep rice visible as a substrate ingredient, but do not classify it as a wild herbal additive.
8. RFC is defined as FC/N and UV as ΣU/N. The paper does not publish the raw informant-by-taxon matrix or voucher accession list, so the indices cannot be independently recalculated from the article alone. The values are retained as printed.
9. The paper reports 30 families; the row transcription is preserved as published rather than silently recalculating the family count from potentially inconsistent taxonomic strings.

## Cross-source reconciliation

- SRC-005 (Mili & Sundriyal 2023) is a Sivasagar ÉPOP field study with 31 reported taxa from 15 surveyed villages and in-depth work at Majorbari and Ligiribari. It is not the same sampling frame as this Majuli study.
- SRC-169's 48-row Majuli inventory is a second, district-specific starter-cake dataset. Differences between the 31- and 48-row inventories may reflect locality, informant selection, taxonomic treatment and table-quality issues; they are not proof that either study has a universal or exhaustive recipe.
- SRC-169 does not resolve plant-to-village or plant-to-variant attribution. Do not assign its whole inventory to Po:ro alone or Nogin alone.
- Compare with SRC-007 (Majuli, 2022), SRC-061 (multi-community, 2021), SRC-008 (2013 review/field component), SRC-146 and SRC-148 as source-specific lists. Do not merge lists by fuzzy vernacular-name matching.

## Archive decisions

- Register as **SRC-169**.
- Add a source-faithful 48-row CSV transcription with source row numbers, local names, families, plant parts, RFC/UV and explicit audit notes.
- Add SRC-169 as evidence for the Mising E’pob/Apong starter-culture umbrella record, but do not change either canonical variant's ingredients or assign taxa to Po:ro/Nogin.
- Do not create three village place records: the paper does not name its sampled villages.
- Keep ASM-GAP-060 open: SRC-169 improves the Majuli cross-source inventory, but the separate Pawe & Gogoi (2013) full plant table and precise locality remain unrecovered.

## Next research actions

1. Retrieve the original Pawe & Gogoi (2013) NeBIO 4(2):46–49 PDF and transcribe its Apob table and direct Poro account; ResearchGate's record confirms the two Mising Apong forms and the ash distinction, but the full article endpoint returned 403 during this pass.
2. Obtain the Jengraimukh College herbarium voucher register or author clarification for the 48 rows, especially the duplicate *Zanthoxylum oxyphyllum*, genus-only *Tinospora*, and row 14.
3. Build a taxonomic crosswalk across SRC-005/006/007/061/084/146/148/169 without overwriting source strings.
4. Recheck the PO:RO flavour-chemistry review DOI 10.1016/j.frinr.2026.100006. ScienceDirect assigns it to the December 2026 issue, while ResearchGate displays July 2026; as of 10 November 2026, confirm online-first/version-of-record status and obtain the full text before registering it as a completed published source.
