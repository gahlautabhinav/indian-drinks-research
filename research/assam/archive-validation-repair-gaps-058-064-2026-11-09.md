# Archive validation repair — research gaps 058 and 064

**Date:** 2026-11-09  
**Affected file:** `data/research_gaps.csv`  
**Validator:** `scripts/validate_archive.py`

## Failure reproduced from GitHub Actions

The validator reported:
- Row 61 / `ASM-GAP-058`: unknown beverage references `Not yet assignable` and `PRJNA994679`.
- Row 67 / `ASM-GAP-064`: unknown beverage references `ASM-002-HOR` and `ASM-004-JUM`.

The validator was correct: `Beverage_ID` is a semicolon-delimited foreign-key field and cannot contain prose or BioProject accessions.

## Corrections

### ASM-GAP-058 — PRJNA994679

- Cleared the `Beverage_ID` field.
- Reason: this gap concerns an unresolved NCBI BioProject dataset. It is project-level metadata with no defensible canonical beverage assignment yet. The accession remains in the question, evidence and research audit; it is not a beverage ID.
- No beverage record was created and no sample identity was inferred.

### ASM-GAP-064 — SRC-143 comparative biochemical paper

- Replaced the invalid references with the existing canonical records:
  - `ASM-001-JUD` — Judima
  - `ASM-005-HAL` — Hor-alank
  - `ASM-003-POR` — Poro Apong
- Kept Jumai out of the beverage foreign-key list.
- Reason: the SRC-143 paper reports a product called Jumai, but does not establish its community/product crosswalk or field sample allocation. The current archive's Bodo terminology notes treat Jumai as a rice-and-starter intermediate mixture in some sources; it is not currently represented by a canonical finished-beverage record. The gap's `Next_Action` now explicitly preserves this unresolved identity and prohibits inventing a beverage ID.

## Validation interpretation

This is a data correction, not a validator relaxation. The foreign-key checks remain unchanged. The corrected references all point to existing canonical IDs; the project-level gap is intentionally unassigned. The next GitHub Actions run is the authoritative automated validation result.
