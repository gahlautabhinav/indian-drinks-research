# Black Rohi Modh and Rohi Modh: Pukia sample identity audit — 2026-11-02

## Executive finding

Das, Medhi and Tamang (2026; SRC-046) document **Black Rohi Modh (BR)** and **Rohi Modh (RH)** as two separately analyzed fermented rice beverage sample categories, both collected from **Pukia, Dhemaji district**. This is stronger than a secondary name-list: the paper's sampling section explicitly states that both samples came from Pukia, and Fig. 1 labels the two there.

However, the study's community attribution is only **Kachari** in the accessible main text. It does not identify the exact Kachari subcommunity or household. The authors collected only one authentic household batch per beverage type; technical triplicates are not independent household/production replicates. The article therefore establishes a pair of Pukia sample cases, not the prevalence or distribution of a community-wide beverage tradition.

The archive retains Black Rohi Modh as a provisional substrate-associated sample record (ASM-021-BRM) and creates a separate provisional Pukia Rohi Modh record (ASM-022-RMH), rather than silently merging the latter into Sonowal Kachari Rohi (ASM-019-ROH). The community and naming boundary remains open.

## Source and study design

Das, R., Medhi, M. C. and Tamang, B. (2026), “Microbial diversity and its links to retinol pathways and aroma compounds in ethnic fermented rice beverages of Assam,” *AMB Express* 16, article 91. DOI: 10.1186/s13568-026-02062-0. Published 4 June 2026; version of record 8 September 2026.

The study analyzes four beverages:
- Black Rohi Modh (BR) — Pukia, Dhemaji; black-rice sample.
- Rohi Modh (RH) — Pukia, Dhemaji; common-rice sample.
- Jou Bidwi (JOU) — Kaljar, Baksa.
- Sai Mod (SM) — Jamuuri Panchali, Dhemaji.

The authors describe 12 sample units representing the four beverage categories, but explicitly state that each beverage was collected only once as one authentic household batch. Analyses were performed in triplicate technical measurements, not independent biological replicates across multiple household batches. The authors call this a case-study dataset and caution against population-level generalization. This distinction governs all metrics and statistical claims in the archive.

The paper says BR and RH were made from black and common rice, respectively. The article's general background describes Rohi Modh as made with Bora chaul/glutinous rice and a starter called aaroi, and says fermentation normally takes four days. It does not provide a complete, sample-specific starter recipe and process for the BR batch. Do not automatically assign aaroi to BR, or transfer all RH steps to BR.

## Locality and community identity

The main text identifies the Pukia collection locality and the figure labels both BR and RH at Pukia. Supplementary File ST1 is described as listing sample codes with longitude and latitude. The supplementary DOCX was not retrievable in this pass, so no coordinates are transcribed and no map pin more precise than Pukia is added.

The article uses a broad Kachari community label and cites Sonowal (2023) in its Rohi Modh discussion. This is not enough to establish that the Pukia producer is Sonowal Kachari, or that the Pukia RH batch is identical to the Sonowal Kachari Rohi documented in Dibrugarh by SRC-044/SRC-045. The archive therefore:
- updates existing Pukia locality ASM-PL-043 to link both BR and RH sample records;
- keeps ASM-021-BRM provisional;
- creates ASM-022-RMH as a separate provisional Pukia sample record;
- keeps ASM-019-ROH as the Dibrugarh Sonowal Kachari record;
- does not claim the three records are synonyms or distinct community traditions until a knowledge-holder or stronger source confirms the relationship.

## Published metrics transcribed

The structured CSV `research/assam/src046-published-sample-metrics.csv` preserves exact main-text values for HPLC ethanol, GC-MS/MS ethanol, DPPH and FRAP, plus the pH/acidity extrema explicitly assigned to RH and JOU.

| Metric | BR | RH |
|---|---:|---:|
| HPLC ethanol | 8.13 ± 0.21% v/v | 5.44 ± 0.16% v/v |
| DPPH radical scavenging | 56.91 ± 2.29% | 57.99 ± 1.21% |
| FRAP | 96.67 ± 1.47 µmol/mL | 84.76 ± 2.36 µmol/mL |
| GC-MS/MS ethanol | 8.98% | 5.67% |

The article also reports HPLC ethanol of 5.55 ± 0.18% for JOU and 4.28 ± 0.14% for SM; DPPH 48.21 ± 1.31% for JOU and 46.84 ± 1.39% for SM; FRAP 86.12 ± 2.01 µmol/mL for JOU and 96.93 ± 1.46 µmol/mL for SM. RH has the highest reported pH (4.5 ± 0.1) and lowest titratable acidity (0.58 ± 0.04% lactic acid); JOU has the lowest pH (4.1 ± 0.2) and highest acidity (0.72 ± 0.06%).

HPLC and GC-MS/MS ethanol estimates differ for all four beverage types. Keep both platform-specific values rather than averaging them. The main text reports HPLC values and separate GC-MS/MS values; the authors attribute differences to analytical platform characteristics. The supplementary ST2 file may contain additional proximate metrics, but was not extracted in this pass.

These antioxidant results are in-vitro chemical assay outcomes, not clinical health benefits. The predicted retinol-metabolism genes describe microbial metabolic potential and do not demonstrate direct vitamin A production. With only four independent household beverage batches, microbial correlations and group comparisons are exploratory, not confirmatory population-level evidence.

## Data-quality observations

1. **One biological batch per beverage:** triplicate technical measurements cannot substitute for independent producer or batch sampling.
2. **Broad community attribution:** “Kachari” is insufficient to assign the Pukia samples to Sonowal Kachari or another subcommunity.
3. **Starter/process gap:** the article's general Rohi Modh description mentions Bora chaul and aaroi; the exact BR batch's starter and preparation are not fully described.
4. **Platform differences:** HPLC and GC-MS/MS ethanol estimates differ; preserve methods and values separately.
5. **Exploratory statistics:** the paper itself cautions that n=4 independent product batches limits statistical power.
6. **Supplementary metadata:** ST1 is described as holding GPS coordinates and sample codes, but the DOCX could not be retrieved. Coordinates are not guessed.
7. **Terminology:** BR and RH are distinct sample labels in the study, but this does not prove that Black Rohi Modh is a locally recognized separate beverage tradition rather than a black-rice variant of Rohi.

## Repository changes

- Updated SRC-046 in `sources/source_register.csv` with full-text sampling, methodology and limitations.
- Updated ASM-PL-043 to link both BR and RH samples from Pukia.
- Updated ASM-021-BRM to preserve black-rice sample evidence without over-assigning aaroi or the RH process.
- Added provisional canonical sample record ASM-022-RMH for the Pukia RH sample, separate from Sonowal Kachari ASM-019-ROH.
- Added `research/assam/src046-published-sample-metrics.csv`.
- Updated ASM-GAP-037; it remains Open.

## Remaining research actions

1. Retrieve Supplementary File ST1 and transcribe GPS/sample metadata exactly.
2. Ask the corresponding author whether the Pukia household identifies as Sonowal Kachari or another Kachari subgroup, and whether “Black Rohi Modh” is a local name or a study/sample label.
3. Confirm the exact starter and fermentation sequence for the BR batch.
4. Compare Pukia RH with Dibrugarh Sonowal Kachari Rohi only after community identity and naming are resolved.
5. Seek additional independent household batches before treating the study's chemical or microbiome metrics as representative.

**Primary source:** https://link.springer.com/article/10.1186/s13568-026-02062-0
