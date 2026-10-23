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
- The article's Methods section explicitly states that herbarium specimens were deposited at **Arunachal University of Studies (AUS), Namsai, Arunachal Pradesh**. The publisher page does not provide a direct accession catalogue or images linked to these 41 voucher strings.

## What this does and does not establish

**Established:** the same identifier string is printed on two Table 1 rows naming different taxa.

**Not established:** whether either plant was misidentified, whether a specimen is missing, whether “ST/EES” maps to an accession series searchable by AUS, or whether the two entries refer to separate sheets with an intentionally reused local number. The stated repository is AUS, but individual accession identity remains unverified.

The first-pass name crosswalk in `data/src091_taxonomic_reconciliation.csv` does not verify the specimens themselves.

## Recommended follow-up

1. Ask Arunachal University of Studies (AUS), Namsai, for accession records or label images for all 41 voucher strings, prioritizing ST/EES/2024/015.
2. If AUS has no public catalogue, request the voucher-label images and collection metadata from the corresponding author, Simi Talukdar (contact listed on the publisher article page).
3. Confirm the taxon determination, collector, collection date, locality, and specimen repository separately for each row.
4. Keep the raw table unchanged until evidence supports a correction; log any future correction in a new commit and preserve the original published value.

## Contact and verification route

The corresponding author listed on the publisher page is Simi Talukdar (simfly2015@gmail.com). A respectful, targeted draft covering the repeated voucher string, life-form counts and FL formula is maintained at [src-091-author-clarification-request.md](src-091-author-clarification-request.md). It is a draft only; no email has been sent.

As an independent botanical contact only, the Botanical Survey of India's Arunachal Pradesh Regional Centre maintains the ARUN regional herbarium and publishes contact details at https://bsi.gov.in/rc-page/en?rcu=127%2C35. BSI/ARUN is **not** the repository named in this article and must not be described as holding these specimens. AUS remains the primary repository to query.

## Related archive records

- Raw Table 1 transcription: `data/src091_table1_transcription.csv`
- Identifier-level audit: `data/src091_voucher_audit.csv`
- Taxonomic crosswalk: `data/src091_taxonomic_reconciliation.csv`
- Open research gap: `ASM-GAP-048` in `data/research_gaps.csv`
