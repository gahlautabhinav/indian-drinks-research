# SRC-091 Table 1 transcription and integrity check

**Checked:** 2026-10-23  
**Primary source:** Talukdar et al. (2026), *Discover Food* 6:376, Version of Record. https://doi.org/10.1007/s44187-026-01101-w  
**Transcription:** data/src091_table1_transcription.csv

## Raw-table counts

The publisher PDF's Table 1 contains 41 numbered entries. The archive transcription contains 41 rows, 41 distinct scientific-name strings as printed, and 29 distinct family labels as printed. This supports the headline count at the level of table rows and raw name strings, but does not independently establish 41 accepted taxa or 41 voucher-verified identities.

The article's prose reports life forms as 17 herbs, 13 shrubs, 9 trees, 4 climbers and 4 ferns. These values sum to 47. The transcription of Table 1 instead yields:

| Life-form label as printed | Number of rows |
|---|---:|
| Herb | 13 |
| Shrub | 10 |
| Tree | 9 |
| Climber | 4 |
| Fern | 3 |
| Small tree | 1 |
| Woody climber | 1 |
| **Total** | **41** |

The table labels sum exactly to 41, but the prose distribution differs. Some labels (small tree/woody climber) might be grouped into broader classes, but such grouping would not reconcile all reported prose counts. Do not overwrite source values or calculate percentages until the authors' classification is clarified.

## Specific cross-text conflicts

1. **Drymaria diandra vs Drymaria cordata.** Table 1 row 1 lists Drymaria diandra (Sw.) Blume; results/discussion also mention Drymaria cordata. These are different printed scientific names. Do not merge them or assume one is a typographical synonym without taxonomic and voucher evidence.
2. **Pouzolzia sanguinea vs Pouzolzia viminea.** Table 1 row 29 lists Pouzolzia sanguinea (Blume) Merrill; discussion mentions Pouzolzia viminea as significant among Bodo/Rabha. Preserve the distinction until underlying voucher and author attribution are checked.
3. **Zingiber officinale plant part.** Table 1 records “Bulb.” Preserve this exact source transcription, but flag the organ term for botanical clarification rather than silently changing it to “rhizome.”
4. **Scoparia dulcis family.** Table 1 prints Scrophulariaceae. The archive's existing POWO checks place this taxon in Plantaginaceae. Keep the source-published family in the transcription and accepted family in a separate reconciliation field; the discrepancy does not by itself invalidate the specimen identification.
5. **FL values and formula.** Methods define FL as a percentage, FL (%) = (Ip/Iu) × 100. Table 1 reports values such as 3.25 for Zingiber officinale and 3.78 for Musa paradisiaca, which the article interprets as high consensus. Underlying counts are not supplied in the accessible table, so do not rescale or recompute these values.

## Evidence limits

- Table 1 contains community labels and voucher-like identifiers, but the accessible table does not map each plant record to a named village or provide a complete voucher-to-specimen lookup.
- The six study districts are the study area, not a census of production villages for Jou, Choko/Chubitchi or Xajpani.
- Medicinal and ritual uses are reported by the authors from ethnobotanical research; they are not evidence that the alcoholic beverage has clinical benefits.
- Statements that taboos cause conservation outcomes should remain attributed interpretations, not treated as causal ecological measurements.

## Repository treatment

- The source table is transcribed to data/src091_table1_transcription.csv; original labels and reported metrics are retained.
- Canonical botanical names, accepted families, and possible synonyms must remain in a separate reconciliation layer.
- No beverage locality, starter-culture synonym or clinical claim is added from this table alone.
- High-priority follow-up: obtain author clarification or inspect voucher documentation for the life-form breakdown, FL calculations, and the Drymaria / Pouzolzia cross-text conflicts.
