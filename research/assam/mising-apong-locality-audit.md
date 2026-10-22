# Mising Apong locality evidence audit

**Reviewed:** 2026-10-22  
**Scope:** Recent 2026 research leads for Po:ro apong and Noggin/Nogin apong in Jorhat and Majuli. This is a locality-evidence audit, not a census of current producers.

## What the evidence adds

### Jorhat study: ten named survey villages

Gogoi et al. (2026), *Ethnobotany Research and Applications* 34:1–31 (SRC-069; publisher page: https://ethnobotanyjournal.org/index.php/era/article/view/7814), reports a survey of 10 villages in Jorhat district from March 2024 to 2025 with 50 key informants. The accessible full-text mirror lists these study villages:

1. Charighoria
2. Upor Kareng
3. Kalbari
4. Neulgaon
5. Bormukoli
6. Bahfalla
7. Bor Pomua Gaon
8. Kumarbari Gaon
9. Jeng Rai Chapori
10. Kawoimari Bonoria Mishing Gaon

The study documents two rice-based fermented beverages, Po:ro apong and Noggin apong, and also discusses fermented foods Numsing and Iku. The study-area list is now represented in `data/places_coverage.csv` as records ASM-PL-068 through ASM-PL-077.

**Important limitation:** a village's inclusion in the study does not, by itself, establish that both beverages are made there. The beverage rows in the locality table are intentionally left blank for each village until the full text explicitly maps a drink to that village or community members confirm the attribution. Spelling and capitalization above follow the accessible full-text mirror; normalize only after checking the publisher PDF.

### Majuli study: starter-culture ethnobotany

Borah (2026), *International Journal of Advanced Research* 14(4):1361–1368 (SRC-084; DOI: https://doi.org/10.21474/IJAR01/23298), was subsequently reviewed from a public full-text mirror. The study surveyed three randomly selected Majuli villages from April to October 2024 and collected information from 28 informants. It documents 48 plant species used in E’pob starter-cake preparation and gives source-specific methods for Nogin Apong and Po:ro Apong. Rice and *Dryopteris filix-mas* are among the highest reported RFC/UV entries.

The accessible full text still does not name the three villages. The study does not justify assigning both beverage forms to each site. Its methods and plant inventory are recorded in `data/production_methods.csv` and the main dossier. Importantly, it describes Po:ro Apong extraction by staged water addition and filtration through a bamboo Ta:suk basket, not distillation. This conflicts with sources that call Poro Apong distilled; the archive now preserves this as an unresolved source-level process discrepancy rather than choosing one account without reconciliation.

## Repository changes

- Updated SRC-069 to include the named Jorhat study villages and the beverage-to-village limitation.
- Added SRC-084 for the 2026 Majuli ethnobotanical study.
- Added ASM-PL-068 to ASM-PL-077 as named Jorhat study-village records, with no beverage ID asserted at individual-village level.
- Updated ASM-PL-065 to point to the named records while retaining the unresolved beverage attribution.
- Cross-referenced SRC-084 in the Noggin Apong and Po:ro Apong beverage records and in research gap ASM-GAP-005.

## Next research actions

1. Retrieve the publisher-hosted PDF for Gogoi et al. and compare spellings, methods and results with the accessible full-text mirror.
2. Identify the three villages in the 2026 Majuli paper through its figure/map or author correspondence; the accessible text reviewed does not name them.
3. Resolve the Poro Apong process discrepancy: compare source methods and local terminology to determine whether distillation is a distinct variant, a translation issue or a reporting error.
4. Treat current production as unverified unless the source documents present-day practice or community confirmation is obtained.

## Source links

- SRC-069: https://ethnobotanyjournal.org/index.php/era/article/view/7814
- Full-text mirror used to recover village spellings: https://www.researchgate.net/publication/407534109_Ethnobotanical_documentation_of_medicinal_plants_and_traditional_fermented_foods_of_the_Mishing_community_in_Jorhat_district_of_Assam_India
- SRC-084: https://doi.org/10.21474/IJAR01/23298
