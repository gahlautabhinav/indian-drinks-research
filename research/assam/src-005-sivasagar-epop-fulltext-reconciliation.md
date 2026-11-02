# SRC-005 full-text reconciliation — Mising ÉPOP in Sivasagar

## Existing source record
Mili, R., & Sundriyal, R. C. (2023). “ÉPOP (traditional starter culture): a complex composition of plant resources prepared by the Misings of Assam, Northeast India.” Journal of Ethnic Foods 10, article 47. DOI: https://doi.org/10.1186/s42779-023-00214-2.

This is already registered as SRC-005. This memo is a full-text audit of that existing source, not a new source or a new independent study.

## Confirmed study design and localities
The article says researchers surveyed 15 randomly selected villages in Sivasagar district, then selected Majorbari and Ligiribari as two representative villages for in-depth documentation. Knowledgeable women were interviewed and observed while collecting ingredients and preparing starter culture. The article says specimens were identified with help from Botanical Survey of India taxonomists and by comparison with regional herbaria and floras.

Both named villages already exist in data/places_coverage.csv as ASM-PL-004 and ASM-PL-005. Do not create duplicates. Update their source links/evidence to include SRC-005 (which is already linked) and use the full-text details to improve the evidence note.

## Findings
- 31 plant species across 22 families were recorded for ÉPOP preparation: 27 angiosperms and four pteridophytes.
- Collection sources: forest 35.53%, fallow land 23.68%, agricultural fields 21.05%, homestead gardens 19.74%.
- Plant parts: leaves 69.23%, young shoots 20.51%, whole plants 10.26%.
- The described starter-making sequence includes collecting plant parts before flowering; washing and sun-drying them for 3–4 days; pounding them; soaking glutinous rice for 2–3 hours and crushing it with a traditional rice picker called KI-PAR; combining plant material and soaked rice at a reported ratio of 1:5; forming cakes generally around 20–25 g; applying ground prior starter; and drying the cakes in sun and over fire for at least seven days. The article reports storage for up to six months in a cool, dry place, preferably an earthen container called KI-LING.
- These are observations in this particular field study, not universal instructions or validated food-safety guidance.
- The article discusses Poro Apong and Nogin/Noggin Apong. It characterizes Poro as including ash from rice husks or bran mixed with cooked rice, while Nogin uses rice without that ash addition. Its introduction describes Poro as distilled, whereas other primary descriptions discuss extraction/filtration through a Ta:suk basket. Keep each account source-specific: filtration is not synonymous with distillation, and do not infer every stage from a broad description.
- The paper describes gendered knowledge, cultural restrictions and ritual/social roles in its field context. Do not universalize these practices across all Mising households or assume they remain unchanged today.

## Existing research gap
ASM-GAP-045 already tracks comparison between the Sivasagar ÉPOP inventory and the Majuli inventory. Keep it open: Mili & Sundriyal (2023) report 31 taxa in Sivasagar, while Borah (2026; SRC-084) reports 48 in Majuli across three villages whose names were not available in the reviewed text. Counts are not a time trend. A defensible crosswalk needs both full plant lists, raw names, accepted-name synonyms, plant parts, use roles and any voucher identifiers. Do not infer clinical benefits from traditional medicinal-use reports.

## Atlas action
- No new source-register entry is needed; this is SRC-005.
- No new beverage record is needed; existing Mising Apong records already represent Nogin and Poro forms.
- No new place records are needed for Majorbari and Ligiribari; existing rows ASM-PL-004 and ASM-PL-005 already cover them.
- Next useful work: update those two place rows with the fuller SRC-005 evidence, then continue the ASM-GAP-045 taxon-level comparison with SRC-084.


## 2026-11-02 — Complete SRC-005 Table 1 extraction

The complete 31-row inventory is now transcribed to `research/assam/epop-sivasagar-31-species-src005.csv`. It preserves the paper's taxon spelling, family as printed, Mising vernacular form, habit, plant part, collection-period code and land-use dependency symbols. This is a faithful source transcription, **not** an accepted-name taxonomic dataset. In particular:
- `Hydrocotyle sibthorpi-oides` appears with a line-break/OCR split in the PDF; the article body elsewhere prints *Hydrocotyle sibthorpioides*.
- `Alstonia shcolaris`, `Melia azadirach`, `Albizzia lucida`, `Myrtacaceae`, `Mimosaceae` and other legacy spellings/family labels are retained as published.
- `Neolitsea sp.` and `Selaginella sp.` remain genus-level identifications.
- The article's own totals are 31 taxa, 27 angiosperms and 4 pteridophytes across 22 families. The taxon list has not been independently re-identified from herbarium vouchers in this project.

### Additional locality context — acknowledgements

The article acknowledgements name villagers from Majorbari, Ligiribari, Afala, Balama, Charaipora of Disangmukh; Dolopa, Balikur, Samukjan, Kotiari, Milanpur of Rajabari; and Gumutha, Ramnagar and Balikuthi of Charaideo. This list is useful as field-visit/community-engagement context, but acknowledgements are not an explicit village-by-village ÉPOP production register. The methods say 15 randomly selected villages were surveyed and Majorbari/Ligiribari selected for in-depth study; the article does not map the 31 plant taxa to individual villages. Therefore, no additional village rows have been created from acknowledgements alone.

### Source-specific ecology summary

- Growth forms: herbs 41.94%; trees 38.71%; shrubs 12.90%; climbers 6.45%.
- Families: Asteraceae and Lauraceae have four taxa each; Scrophulariaceae and Verbenaceae have two each; remaining families are reported with one each (the paper spells Verbenaceae as “Verbinaceae” in one narrative passage).
- Collection land-use dependency: forest 35.53%; fallow land 23.68%; agricultural fields 21.05%; homestead gardens 19.74%.
- Parts: leaves 69.23%; young shoots 20.51%; whole plants 10.26%.
- Collection time: the article reports 51.61% afternoon, 16.13% morning/broad-day, 9.68% bright day, and 6.45% early morning/afternoon categories; it also mentions some aromatic plants collected in evening. These categories should not be over-interpreted as exact hourly schedules.

### Comparison caution

SRC-006 (Dhemaji) and SRC-007 (Majuli) provide other Mising starter plant lists, but their names and identifications contain spelling, taxonomic and reporting inconsistencies. A cross-study “shared species” statistic must distinguish:
1. exact same binomial spelling;
2. plausible synonym/renamed accepted taxon;
3. similar vernacular name only;
4. genus-only or unresolved identification.

Do not count category 2 as confirmed until a taxonomic authority/voucher check is complete, and do not treat category 3 as botanical identity. Keep the larger SRC-005/SRC-084 crosswalk in ASM-GAP-045; the 31-versus-48 inventory sizes are not a time trend or direct measure of local biodiversity.

## Repository data action

- Added the complete source transcription CSV.
- Updated ASM-GAP-006 with full inventory and evidence limitations.
- No new beverage or village records were created.
