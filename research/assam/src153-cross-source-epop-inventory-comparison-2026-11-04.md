# SRC-153 cross-source ÉPOP inventory comparison — first-pass string audit

**Date:** 2026-11-04  
**Compared:** SRC-153 (Mili & Sundriyal 2023, 31 taxa) against the committed plant tables for SRC-136 (16 rows), SRC-146 (37 visible rows) and SRC-084 (48 rows).

## Method
Two passes were kept separate:
1. Exact source-string equality on the scientific-name fields.
2. Candidate binomial-key equality using only the first two whitespace-separated name tokens after removing basic punctuation. This is a search aid only, not taxonomic synonymy or confirmed biological identity. Author citations, orthographic variants, misprints and identifications still require review.

## Results

| Comparator | Comparator rows | Exact identical source strings | Candidate first-two-token matches |
|---|---:|---:|---:|
| SRC-136 Epop 16-plant list | 16 | 0 | 3 |
| SRC-146 Apong list | 37 | 5 | 9 |
| SRC-084 Majuli 48-plant list | 48 | 7 | 13 |

### SRC-136 candidate binomial matches (3; none exact)
- SRC-153 Piper longum L. ↔ SRC-136 Piper longum (Linn)
- SRC-153 Scoparia dulcis L. ↔ SRC-136 Scoparia dulcis (Linn.)
- SRC-153 Selaginella sp ↔ SRC-136 Selaginella sp.

### SRC-146 matches
Exact identical strings (5):
- Ageratum conyzoides L.
- Psidium guajava L.
- Piper longum L.
- Scoparia dulcis L.
- Vitex negundo L.

Additional candidate binomial-key matches (4):
- Cinnamomum tamala (author-citation formatting differs)
- Artocarpus heterophyllus (author citation absent in comparator)
- Saccharum officinarum (Linn. vs L.)
- Lygodium flexuosum (author citation absent in comparator)

### SRC-084 matches
Exact identical strings (7):
- Hydrocotyle sibthorpioides Lam.
- Ageratum conyzoides L.
- Psidium guajava L.
- Piper longum L.
- Scoparia dulcis L.
- Vitex negundo L.
- Dryopteris filix-mas (L.) Schott

Additional candidate binomial-key matches (6):
- Mikania scandens (author citation formatting differs)
- Leucas aspera (source-author citations differ)
- Cinnamomum tamala (different author citation)
- Litsea salicifolia (different author citation)
- Artocarpus heterophyllus (author citation formatting differs)
- Saccharum officinarum (Linn. vs L.)

## Interpretation and controls
- The exact-string totals are conservative and reproducible against the committed transcriptions.
- Candidate binomial matches do not prove the same taxon was collected or used identically; voucher confirmation, source spelling review and plant-part/local-name comparison are still required.
- SRC-153 reports a four-pteridophyte set. Only Dryopteris filix-mas is an exact match to SRC-084; Lygodium flexuosum is a candidate match to SRC-146. These comparisons do not identify the two species in Neog's 2018 seminar presentation.
- SRC-136's zero exact matches do not mean no biological overlap; the three candidate names show author-citation and formatting differences.
- Do not sum these row-level matches into a statewide unique-species count. Inventories differ in scope, geography, table completeness and identification quality.
- SRC-061 is not included because its supplementary table is interleaved across community columns and requires page-image verification before a reliable Mising-only extraction.
- SRC-145 and SRC-148 are not included because their plant tables are not available as reliable complete structured transcriptions.

## Next
1. Review the candidate matches against voucher-supported taxonomic references without overwriting original spellings.
2. Add SRC-061 only after a verified Mising-only extraction.
3. Continue retrieving SRC-139/140 original articles and Neog's 2018 presentation.
