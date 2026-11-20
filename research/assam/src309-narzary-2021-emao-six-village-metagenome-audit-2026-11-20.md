# SRC-309 — Narzary et al. (2021): six-village Emao starter and metagenome audit

**Audit date:** 20 November 2026  
**Citation:** Diganta Narzary, Nitesh Boro, Ashis Borah, Takashi Okubo and Hideto Takami (2021), “Community structure and metabolic potentials of the traditional rice beer starter ‘emao’,” *Scientific Reports* 11, article 14628. DOI: 10.1038/s41598-021-94059-x.  
**Full text:** https://www.nature.com/articles/s41598-021-94059-x  
**PMC record:** https://pmc.ncbi.nlm.nih.gov/articles/PMC8285430/

## 1. What was sampled

The paper reports six representative Emao starter samples, traditionally prepared by Bodo people, collected from six Bodo-dominated villages in Assam. Table 1 identifies the following collection sites and local informants:

| Sample | Village address as printed | Local informant as printed | District/area as printed |
|---|---|---|---|
| 1 | Panichanda, Rani | Deepa Kachari | Kamrup |
| 2 | Saukuchi | Kiran Swargiary | Guwahati |
| 3 | Boragari, Dotoma | Bhaigo Brahma | Kokrajhar |
| 4 | Goybari, Gossaigaon | Sambashi Brahma | Kokrajhar |
| 5 | Tengapara | Reena Narzary | Kokrajhar |
| 6 | Lechera | Laishri Narzary | Baksa |

These are starter collection sites and the paper's informant labels. They are not six finished-beer sampling sites, do not prove all six villages currently produce the same finished Jou/Jou bishi subtype, and do not constitute a complete producer census. The table's local informant names are transcribed as published; they are not interpreted as a count of producers or respondents.

The authors state that information on preparation methods and herbs was recorded. Only active starter samples less than one year old were selected. The authors explain that starters older than one year are generally not used directly; the culture is revived in fresh rice-based medium before one year.

## 2. Ingredient evidence by sample

Table 1 records dehusked rice and mother starter in all six samples, together with a presence/absence matrix for six named plants:

- *Artocarpus heterophyllus* leaves
- *Clerodendrum infortunatum* leaves/twigs containing leaves and flowers
- *Scoparia dulcis* leaves/twigs containing leaves and flowers
- *Saccharum officinarum* leaves
- *Musa balbisiana* leaves
- *Ananas comosus* leaves

All six table rows mark *Artocarpus heterophyllus* and *Clerodendrum infortunatum* as present. All six table rows also appear to mark *Scoparia dulcis* as present. *Saccharum officinarum* is marked in Saukuchi and Boragari; *Musa balbisiana* in Boragari and Goybari; *Ananas comosus* in Lechera. The table uses tick and dash symbols to indicate presence/absence.

**Internal source inconsistency:** The paragraph immediately below Table 1 says that *Artocarpus heterophyllus* and *Clerodendrum infortunatum* are common with rice powder and mother starter, while other herbs are used alternatively depending on availability. It does not mention *Scoparia dulcis* as common, despite its apparent tick in all six rows. The archive preserves the discrepancy rather than silently editing either the table or prose.

The discussion says Bodo Emao uses rice as the base and commonly draws from a pool of seven or eight herbs, with at least two or three herbs used in a preparation; alternatives depend on plant availability. This is an author-reported generalisation, not a recipe formula for every household.

## 3. Starter preparation process

The paper's workflow figure and description report:

1. Rice and selected herbs are mixed to prepare fresh cakes.
2. Fresh cakes are dusted all over with powdered mother starter.
3. Cakes are covered with clean cloth, rice straw or fern leaves.
4. Fermentation proceeds for 3–4 days; microbial growth turns the cake surface white.
5. Cakes are sun-dried for 2–3 days.
6. Dried cakes are preserved in bags or bamboo containers under aerated conditions.

The workflow does not provide a universal ingredient mass ratio, starter inoculation percentage, cake dimensions, temperature profile or humidity range. These should not be invented. It is a source-described traditional method, not a validated safety protocol.

## 4. Critical metagenomic sampling limitation

The six starter samples were **pooled** for shotgun metagenomic sequencing. Table 2 describes the sequence data as derived from the six-pooled sample. The study therefore reports one pooled Emao community profile, not six separately resolved village microbiomes.

Consequences:

- No species abundance can be assigned to Panichanda, Saukuchi, Boragari, Goybari, Tengapara or Lechera individually.
- The paper does not permit comparisons of microbial communities between those six villages.
- The local informant in each row is not an individual microbiome result.
- The sample pool cannot be treated as six independent biological replicates for the sequencing results.

The article reports 13,060,410 sequence reads in pairs, 6,530,205 merged contigs, 1,285,880 amino-acid sequences (minimum 50 aa) and 8,562 amino-acid sequences annotated as ribosomal proteins for community-structure analysis.

## 5. Microbial findings (pooled Emao)

The authors identify 74 microbial species using ribosomal-protein sequence homology analysis. Reported overall relative abundances include:

### Moulds
- *Rhizopus delemar* (syn. *R. oryzae*): 56%
- *Rhizopus microsporus*: 7%
- *Mucor circinelloides*: 5%

### Yeasts
- *Wickerhamomyces anomalus*: 9%
- *Wickerhamomyces ciferrii*: 1%
- *Ascoidea rubescens*: 0.6%
- *Cyberlindnera fabianii*: 0.6%
- *Pachysolen tannophilus*: 0.6%
- *Candida tropicalis*: 0.5%
- *Saccharomyces cerevisiae*: 0.4%

### Lactic acid bacteria
- *Leuconostoc mesenteroides*: 1.9%
- *Weissella confusa*: 1.8%
- *Lactococcus garvieae*: 1%

These are sequence-based overall relative abundance values in the pooled starter dataset, not viable-cell counts, absolute biomass estimates or finished-beverage measurements. Metagenomic detection does not establish that every detected organism was alive or metabolically active at sampling, nor does it establish safety or beneficial effects.

## 6. Functional potential and data availability

The study reports 19,702 carbohydrate-active enzyme (CAZyme) sequences and 34,493 biofuel-producing enzyme (BPZyme) sequences. Hotpep assigned 45% of the CAZymes to six families and 123 subfamilies. The paper further predicts 1,929 lignocellulolytic CAZymes and 5,576 lignocellulolytic BPZymes.

The authors report 489 KEGG metabolic modules with greater than zero module-completion ratio, of which 46% of those observed modules had 100% whole-community module completion. These are computational predictions of functional potential; they are not direct enzyme activity measurements in a brewing batch.

Raw nucleotide data are deposited in the European Nucleotide Archive under project **PRJEB45760**. Derived amino-acid sequences, KEGG module and ribosomal-protein community files are linked through figshare DOI **10.6084/m9.figshare.8868689**.

## 7. Cross-source interpretation

- SRC-309 supplies the strongest village-level starter collection evidence so far for Bodo Emao in this archive.
- SRC-308 (Tanti et al. 2010) reports Bodo emao and Zu at community level but lacks named villages; SRC-309 supplies six specific starter collection sites.
- SRC-306 (Anupma et al. 2018) documents Emao/Humao starter terminology across communities, but its Assam starter recipes are not allocated to specific sites. Do not override SRC-309's Bodo sample identities with Dimasa Humao labels.
- SRC-307 (Sha et al. 2018) reports five Assam Humao samples but no village/community provenance. Its results are not a substitute for the Bodo Emao pooled dataset.
- Finished beverage names Jou, Jou bishi, Jou Gishi, Maibra Jou Bidwi and Joufinai remain distinct records/terms where the archive already distinguishes them. SRC-309 sampled starter cakes, not finished beer, and cannot establish a village-level map for each finished beverage subtype.

## 8. Repository changes

- Added SRC-309 to `sources/source_register.csv`.
- Updated ASM-009-JOU in `data/beverages.csv` with six starter-sample sites and explicit caveats that these are not finished-beverage sampling locations.
- Added ASM-GAP-128 to `data/research_gaps.csv` to track village-to-finished-product mapping, unpooled data availability and the *Scoparia dulcis* table/prose inconsistency.
- No new village-level finished-beverage production records were created; no microbial profile was assigned to any one village.

## 9. Next actions

1. Retrieve ENA project PRJEB45760 and determine whether sample-level reads/metadata exist before pooling; request unpooled sample DNA/data from the corresponding author if available.
2. Ask the authors to clarify the Table 1 *Scoparia dulcis* tick/prose discrepancy.
3. Seek current, consent-led producer confirmation in the six named starter-sample villages and record the locally preferred names of finished beer products separately from starter Emao.
4. Verify current administrative spellings/boundaries for Panichanda, Saukuchi, Boragari, Goybari, Tengapara and Lechera before making map polygons or village IDs.
5. Keep pooled microbiome findings at the pooled-study level unless the underlying sample metadata support a stronger resolution.

**Conclusion:** SRC-309 moves the archive from district-level Bodo starter references to six named Emao starter collection sites. Its microbiome analysis remains pooled across all six, so the village table improves provenance but does not support village-specific microbial claims or a six-village finished-Jou production map.
