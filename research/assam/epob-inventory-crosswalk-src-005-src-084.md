# ÉPOP/E’pob taxon crosswalk — first-pass reconciliation (SRC-005 vs SRC-084)

**Status:** Partial audit; not a complete taxonomic reconciliation.  
**Last reviewed:** 2026-10-24.

## Sources and scope

- **SRC-005:** Mili, R. & Sundriyal, R. C. (2023), “ÉPOP (traditional starter culture): a complex composition of plant resources prepared by the Misings of Assam, Northeast India,” *Journal of Ethnic Foods* 10, article 47. https://doi.org/10.1186/s42779-023-00214-2. The study surveyed 15 randomly selected Sivasagar villages and examined Majorbari and Ligiribari in depth. It reports 31 taxa across 22 families.
- **SRC-084:** Borah, P. (2026), “Documentation of ethnobotanical plants used in the preparation of Apong, a traditionally prepared rice beer by the Mishing tribal community of Majuli district,” *International Journal of Advanced Research* 14(4), 1361–1368. https://doi.org/10.21474/IJAR01/23298. It reports 48 taxa from three Majuli villages; the village names were not available in the accessible text reviewed for this pass.

## What this pass actually establishes

The companion CSV `data/epob_inventory_crosswalk.csv` preserves all 48 SRC-084 plant rows with the vernacular name, plant part, RFC and UV as reported. It marks 13 candidate overlaps because those scientific names are explicitly mentioned in the accessible narrative of SRC-005: Artocarpus heterophyllus, Saccharum officinarum, Piper longum, Hydrocotyle sibthorpioides, Litsea salicifolia, Alstonia scholaris, Leucas aspera, Ageratum conyzoides, Cinnamomum tamala, Scoparia dulcis, Mikania scandens, Psidium guajava and Dryopteris filix-mas.

**Important limitation:** SRC-005's narrative gives examples, not the full contents of its Table 1. The other 35 Majuli rows are therefore marked “pending full Table 1 comparison,” not “absent in Sivasagar.” This pass does not claim a confirmed total intersection, a list of locally unique plants, or a change over time. The overlap candidates still require row-by-row comparison of original spellings, plant parts and any vouchers.

## Data-quality flags retained

1. SRC-084's table includes taxonomic/string anomalies (for example “Tinospora Miers,” “Aschasma loroglossum” with Scytosiphonaceae, and “Termalia arjuna”). These are preserved as source-reported strings or minimally flagged, not silently corrected. Confirm names against herbarium sheets and authoritative taxonomic databases before normalizing.
2. SRC-084 lists Zanthoxylum oxyphyllum twice with different vernacular names and RFC/UV values (“Prothoma” and “Mejenga”). Do not merge these rows without checking whether this is a duplicate identification, separate local usage, or a table error.
3. Plant-part roles differ in the two papers' reporting. A species-level match alone does not establish that the same part is used or that the process is identical.
4. The two studies have different locations, sample designs, and reporting depth. The counts 31 and 48 must not be read as temporal growth or decline.
5. RFC and UV values are SRC-084 study-specific indices, not comparable across studies unless denominators, informant sampling and use-report definitions are harmonized.

## Next steps to close ASM-GAP-045

- Transcribe all 31 taxa and plant parts directly from SRC-005 Table 1 (not only narrative examples).
- Crosswalk all 48 SRC-084 rows against that transcription, preserving raw names and using a separate accepted-name field after taxonomic verification.
- Resolve the duplicated Zanthoxylum oxyphyllum entries and taxonomic anomalies with the authors/herbarium data where possible.
- Request the three Majuli village names and voucher/herbarium identifiers from the author.
- Only then classify taxa as exact-name match, synonym-supported match, likely match, unresolved, or not reported in the other study.

## Source links

- SRC-005 full text: https://link.springer.com/article/10.1186/s42779-023-00214-2
- SRC-084 article/PDF: https://www.journalijar.com/uploads/2026/04/6a083961a8984_IJAR-57528.pdf
- DOI: https://doi.org/10.21474/IJAR01/23298
