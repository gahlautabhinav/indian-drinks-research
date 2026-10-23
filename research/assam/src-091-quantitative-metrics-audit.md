# SRC-091 quantitative-metrics audit

**Review date:** 2026-10-23  
**Source:** Talukdar et al. (2026), *Cultural ecology and conservation of traditional beverage practices among selected communities of Assam, Northeast India*, *Discover Food* 6:376.  
**Publisher page:** https://link.springer.com/article/10.1007/s44187-026-01101-w  
**DOI:** https://doi.org/10.1007/s44187-026-01101-w

## Purpose and scope

This audit checks whether the quantitative claims visible in the article can be reproduced or reconciled internally. It does not recalculate indices from absent respondent-level data, alter the source-faithful transcription, or treat the paper's ethnobotanical results as evidence of clinical efficacy or causal conservation outcomes.

## Findings

### 1. Reported life-form counts do not reconcile with the reported species total

The article reports 41 plant species and describes the life-form distribution as 17 herbs, 13 shrubs, 9 trees, 4 climbers and 4 ferns. These category counts sum to 47. The source-faithful transcription of Table 1 contains 41 rows, classified as 13 herbs, 10 shrubs, 9 trees, 4 climbers, 3 ferns, 1 small tree and 1 woody climber. The Table 1 labels therefore sum to 41, while the prose counts do not.

**Assessment:** Confirmed internal discrepancy. Possible broad-category grouping is not sufficient evidence to repair it; the prose values cannot be reproduced from the transcribed labels without assumptions. Do not publish life-form percentages or overwrite source values until the authors clarify the categories.

### 2. Fidelity Level (FL) definition and reported values are inconsistent

The Methods describe FL as a percentage and give the formula as FL (%) = (Ip/Iu) × 100. However, Table 1 reports values including 3.78 for *Musa paradisiaca* and 3.25 for *Zingiber officinale*, and the article describes these small values as high consensus/cultural importance. A conventional percentage computed as a ratio multiplied by 100 is bounded between 0 and 100 when the numerator is a subset of the denominator. Values around 2–4 cannot be interpreted as high FL percentages under that definition.

The article does not provide enough underlying numerator/denominator counts in the accessible table to recompute the reported figures. It is not safe to assume that the decimal point is misplaced, that the formula is a different index, or that the values should be rescaled.

**Assessment:** Confirmed formula/scale/interpretation inconsistency; exact cause unresolved. Preserve published values verbatim, do not rank species by FL, and request the authors' calculation sheet or clarification of (a) the intended formula, (b) the meaning of Ip and Iu, (c) whether the values are percentages or another index, and (d) the counts behind the listed values.

### 3. CKSI values appear to use a different scale and should not be conflated with FL

The article's abstract reports CKSI up to 0.68. That range is not by itself internally contradictory for a normalized index, but the accessible description is insufficient to independently reproduce the CKSI calculations. CKSI and FL are distinct metrics; the FL inconsistency should not be used to invalidate CKSI automatically, nor should CKSI be used as a substitute for missing FL calculations.

**Assessment:** Not independently reproducible from the accessible evidence reviewed here. Preserve reported CKSI values and avoid asserting a verified ranking unless the formula, inputs and calculations are available.

### 4. Interpretive claims exceed what the reported design alone establishes

The study combines interviews, focus groups, participant observation and plant collection/identification. These methods support reporting what informants described and documenting cultural practices. They do not, by themselves, demonstrate that a particular taboo caused measurable biodiversity conservation, that a plant ingredient clinically treats disease, or that all production localities in the six districts follow the same practice.

**Assessment:** Retain such statements as author interpretations or participant-reported beliefs, not as established causal, clinical or statewide claims. The six named districts are study areas, not a village-level census.

## Reproducibility status

| Item | Status | Archive treatment |
|---|---|---|
| Table 1 row count | Reproduced: 41 rows | Keep source transcription unchanged |
| Table 1 life-form labels | Reproduced: 41 total labels | Preserve raw labels and report prose discrepancy |
| Prose life-form counts | Do not reconcile: sum is 47 | Do not calculate percentages |
| FL formula vs values | Inconsistent | Preserve values; no re-scaling or ranking |
| CKSI values | Not independently reproducible from reviewed material | Preserve reported values with method caveat |
| Voucher identities | Not specimen-verified | Keep separate voucher audit open |
| Conservation/health causal interpretation | Not established by this design alone | Attribute to authors or informants; no causal or clinical upgrade |

## Recommended author clarification request

1. Please confirm the correct life-form counts for the 41 Table 1 taxa and explain the difference from the counts in the Results.
2. Please provide the exact FL formula and define each variable. Are the reported values 3.78 and 3.25 percentages, decimal ratios, or values from another index?
3. Please provide the numerator and denominator counts and calculation worksheet for each reported FL value.
4. Please provide the CKSI formula and inputs so the reported values can be independently reproduced.
5. Please clarify the Table 1 voucher identifier printed as ST/EES/2024/015 for both *Drymaria diandra* and *Pteridium aquilinum*, or direct readers to the corresponding accession records.

No correspondence has been sent. The questions above are a research checklist only.

## Related archive records

- [Table 1 audit](src-091-table1-audit.md)
- [Taxonomic reconciliation](src-091-taxonomic-reconciliation.md)
- [Voucher audit](src-091-voucher-audit.md)
- [Source-faithful Table 1 transcription](../../data/src091_table1_transcription.csv)
- [Taxonomic crosswalk](../../data/src091_taxonomic_reconciliation.csv)
- [Research gap register](../../data/research_gaps.csv)

## Bottom line

SRC-091 is useful as a qualitative and descriptive ethnobotanical source, but its FL interpretation is not reproducible as written and its prose life-form counts conflict with Table 1. The archive preserves the source claims without silent correction and leaves the relevant verification work open.
