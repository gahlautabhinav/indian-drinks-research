# ÉPOP/E’pob taxon crosswalk — full-table reconciliation (SRC-005 vs SRC-084)

**Status:** Full source-table transcription completed; accepted-name/synonym validation remains open.  
**Last reviewed:** 2026-10-24.

## Sources and scope

- **SRC-005:** Mili, R. & Sundriyal, R. C. (2023), “ÉPOP (traditional starter culture): a complex composition of plant resources prepared by the Misings of Assam, Northeast India,” *Journal of Ethnic Foods* 10, article 47. https://doi.org/10.1186/s42779-023-00214-2. Table 1 reports 31 taxa in Sivasagar; the study surveyed 15 villages and selected Majorbari and Ligiribari for in-depth study.
- **SRC-084:** Borah, P. (2026), “Documentation of ethnobotanical plants used in the preparation of Apong, a traditionally prepared rice beer by the Mishing tribal community of Majuli district,” *International Journal of Advanced Research* 14(4), 1361–1368. https://doi.org/10.21474/IJAR01/23298. The paper reports 48 plant entries from three villages whose names are not supplied in the accessible article text.

## Files and method

- `data/epob_sivasagar_inventory.csv` transcribes the 31 SRC-005 Table 1 entries, preserving reported taxon strings, vernacular names, families, plant parts, habits and collection-period codes.
- `data/epob_inventory_crosswalk.csv` compares all 48 SRC-084 rows against the complete SRC-005 table.
- Exact scientific-name matches are candidate overlaps; synonym-like names remain unverified. A no-exact-match result is not proof of biological absence or local uniqueness.

## Current findings

This pass finds **14 exact-name candidate overlaps**:
Hydrocotyle sibthorpioides, Alstonia scholaris, Ageratum conyzoides, Mikania scandens, Leucas aspera, Cinnamomum tamala, Litsea salicifolia, Artocarpus heterophyllus, Psidium guajava, Piper longum, Saccharum officinarum, Scoparia dulcis, Vitex negundo and Dryopteris filix-mas.

One apparent cross-name candidate is now explicitly **unresolved, not counted as an overlap**: Majuli's *Acmella paniculata* versus Sivasagar's *Spilanthes acmella* (reported with author citation “Murr.”). POWO accepts *Acmella paniculata* and lists *Spilanthes paniculata* and *Spilanthes acmella* var. *paniculata* as synonyms. The Sivasagar table instead reports *Spilanthes acmella* Murr.; the exact name/author-citation relationship is not established by the reviewed records. Do not merge the two inventory rows without checking the original botanical authority or voucher.

Taxonomy references: https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:914780-1 ; https://powo.science.kew.org/taxon/167609-3 ; https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:3242129-4

**Plant-part differences matter.** For example, Majuli reports fruit for *Piper longum* while Sivasagar Table 1 reports leaf; Majuli reports stem for *Saccharum officinarum* while Sivasagar Table 1 reports leaf; and Majuli reports leaves for *Scoparia dulcis* while Sivasagar reports the whole plant. All original part values remain in the CSV.

The remaining Majuli entries have no exact scientific-name match in the transcribed Sivasagar table. This is not a claim that they are unique to Majuli: synonyms, source spelling errors, taxonomic revisions and vernacular naming differences may conceal matches.

## Taxonomic and data-quality flags

1. SRC-084 includes apparent spelling/taxonomy issues, including “Aschasma loroglossum” paired with Scytosiphonaceae, “Guilandian bonduc,” and “Termalia arjuna.” “Tinospora Miers” is a valid genus-level name (POWO accepts *Tinospora* Miers), but it does not identify a species. Raw strings must remain preserved; do not silently correct them.
2. SRC-084 reports *Zanthoxylum oxyphyllum* twice with different vernacular names and RFC/UV values. Preserve both entries: they may represent different vernacular/use reports for one taxon or a table duplication; the accessible evidence does not resolve which.
3. SRC-005 itself uses source-specific spellings/taxonomic conventions, including “Melia azadirach,” “Albizzia lucida” and “Spilanthes acmella.” Keep accepted names in separate fields only after verification.
4. The two studies differ in field design, taxonomic methods and indices. Counts of 31 and 48 are not evidence of temporal increase/decrease. RFC and UV are not directly comparable across studies without aligned denominators and methods.
5. SRC-005 reports taxonomic support from Botanical Survey of India specialists and comparison with regional herbaria; the accessible SRC-084 table contains apparent inconsistencies. Neither source should be treated as error-free.

## Separate taxonomic-flag register

The companion file `data/epob_taxonomy_flags.csv` records six explicit review flags: the Acmella/Spilanthes author-citation conflict; apparent spellings “Guilandian bonduc” and “Termalia arjuna”; genus-level-only “Tinospora Miers”; the apparent *Aschasma loroglossum* / Scytosiphonaceae family mismatch; and the two *Zanthoxylum oxyphyllum* records. Raw strings are preserved and normalized names are provisional only.

## Remaining actions to close ASM-GAP-045

- Verify source-reported names against an authoritative taxonomic database and record accepted name plus confidence in separate fields.
- Resolve *Acmella paniculata* / *Spilanthes acmella* and other potential synonyms.
- Ask the SRC-084 author for voucher identifiers, the three Majuli village names, and clarification of the duplicate *Zanthoxylum oxyphyllum* rows.
- Keep the gap open until synonym resolution and missing source metadata are documented.

## Source links

- SRC-005 full text: https://link.springer.com/article/10.1186/s42779-023-00214-2
- SRC-084 article/PDF: https://www.journalijar.com/uploads/2026/04/6a083961a8984_IJAR-57528.pdf
- SRC-084 DOI: https://doi.org/10.21474/IJAR01/23298
