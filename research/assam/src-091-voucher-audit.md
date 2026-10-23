# SRC-091 voucher identifier audit

**Review date:** 2026-10-23  
**Source:** Talukdar et al. (2026), *Cultural ecology and conservation of traditional beverage practices among selected communities of Assam, Northeast India*. DOI: https://doi.org/10.1007/s44187-026-01101-w  
**Purpose:** Check identifier consistency in the article's Table 1; not a herbarium determination.

## Result

- Table 1 contains 41 rows and 40 unique voucher-number strings.
- The identifier **ST/EES/2024/015** is printed against two different taxa:
  - Table 1 row 1: *Drymaria diandra* (Sw.) Blume; local name Laaijabori; community Ahom.
  - Table 1 row 10: *Pteridium aquilinum* (L.) Kuhn; local name Bikh velengoni; communities Ahom and Rabha.
- The available article table alone does not show whether this is a duplicated/incorrect printed identifier, a collection-series convention, or a database/transcription issue. It must remain an unresolved quality-control flag, not be “fixed” by inventing a replacement number.
- The remaining 39 voucher strings are unique within this table, but uniqueness in a table is not proof that a publicly accessible herbarium accession exists.

## What this does and does not establish

**Established:** the same identifier string is printed on two Table 1 rows naming different taxa.

**Not established:** whether either plant was misidentified, whether a specimen is missing, where the physical vouchers are deposited, whether “ST/EES” maps to a publicly searchable herbarium, or whether the two entries refer to separate sheets with an intentionally reused local number.

The first-pass name crosswalk in `data/src091_taxonomic_reconciliation.csv` does not verify the specimens themselves.

## Recommended follow-up

1. Check the full article PDF and any supplementary files for a stated herbarium or voucher repository.
2. Search institutional herbarium catalogues using the full identifier and its prefix variants, without treating a no-result search as proof of non-existence.
3. Request the voucher-label image, accession details, and collection metadata from the corresponding author if no public record is found.
4. Confirm the taxon determination, collector, collection date, locality, and specimen repository separately for each row.
5. Keep the raw table unchanged until evidence supports a correction; log any future correction in a new commit and preserve the original published value.

## Related archive records

- Raw Table 1 transcription: `data/src091_table1_transcription.csv`
- Identifier-level audit: `data/src091_voucher_audit.csv`
- Taxonomic crosswalk: `data/src091_taxonomic_reconciliation.csv`
- Open research gap: `ASM-GAP-048` in `data/research_gaps.csv`
