# Southern Assam five-community rice-beverage microbiome study — SRC-132 audit

**Source:** Yumnam, H.; Hazarika, P.; Sharma, I. (2024), *Metagenomic insights into traditional fermentation of rice-based beverages among ethnic tribes in southern Assam, Northeast India*, Frontiers in Microbiology 15:1410098. DOI: https://doi.org/10.3389/fmicb.2024.1410098. Published 11 September 2024. Open full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC11459095/

## Research value

This is a five-community, 15-sample comparative microbiome study. It links five named southern Assam rice beverages with microbiome profiles and provides cohort-level biochemical and diversity summaries. It is particularly useful for comparative coverage of Zeme Naga, Dimasa Kachari, Hmar, Karbi and Tea-tribe beverages.

## Critical method correction: not shotgun metagenomics

Although the article title and some body text use “metagenomic” language, the methods describe targeted bacterial 16S rRNA V3–V4 amplicon sequencing on Illumina MiSeq. DNA was PCR-amplified using V3–V4 primers, sequenced as paired-end reads, clustered into OTUs at 97% identity in QIIME using Greengenes 13.8, and analysed with PICRUSt for inferred functional profiles. It is not untargeted shotgun metagenomics and does not profile fungal ITS communities. PICRUSt functional outputs are predictions from 16S-derived community data, not direct gene-expression, metagenomic or metabolomic measurements.

## Sample design and product associations

The authors state that 15 traditional, non-commercial samples were collected before distillation: three samples for each of five community cohorts.

| Cohort code | Community | Beverage | Starter name in introduction | Samples |
|---|---|---|---|---:|
| ZN | Zeme Naga | Zao (intro); Zou (Table 1) | Ndhuihi | 3 |
| DMK | Dimasa Kachari | Judima | Humao | 3 |
| HM | Hmar | Zu | Chol | 3 |
| K1 | Karbi | Hor Alank | Thap | 3 |
| TT | Tea tribes | Haria | Dawai | 3 |

The introduction gives a general process description: glutinous/local rice is washed, cooked and mixed with starter; natural fermentation is generally described as 4–5 days to a week in earthen pots covered with banana leaves or sacks, followed by filtration. Table 1 gives cohort-specific fermentation periods: Zeme 3–5 days; Dimasa 3–5; Hmar 3–5 depending on season; Karbi 2–3 depending on season; Tea tribes up to 3–4 days. These are literature-based summaries cited by the article, not independently documented household protocols for each of the 15 samples.

The accessible main text does not identify sample villages, collection dates, producer households, or sample-to-village mapping. Table 2 gives district distribution/population context (Cachar; Cachar/Hailakandi/Karimganj etc.), but its footnote says this distribution is specific to places where the study included the groups; it is not a sample-site register. Do not convert Table 2 into village or district collection claims. The article does not establish current prevalence or representativeness of the five communities.

## Cohort-level measurements

The authors report pH and electrical conductivity (EC), mean ± SD:

| Code | pH | EC (S/cm) |
|---|---:|---:|
| DMK | 3.6 ± 0.25 | 0.65 ± 0.06 |
| HM | 3.4 ± 0.21 | 0.86 ± 0.05 |
| K1 | 3.5 ± 0.27 | 0.75 ± 0.10 |
| ZN | 3.5 ± 0.24 | 0.80 ± 0.09 |
| TT | 3.5 ± 0.30 | 0.60 ± 0.08 |

The text reports read-count ranges per cohort: ZN 16,603–137,757; DMK 22,652–45,696; HM 43,194–113,683; K1 119,306–144,316; TT 74,487–190,837. Shannon / inverse Simpson values shown in Figure 1 and described in text are: ZN 2.2 / 4.2; DMK 1.8 / 3.9; HM 1.6 / 2.9; K1 0.9 / 1.4; TT 1.3 / 1.8. The paper states three samples per group, but accessible table/figure summaries are cohort-level and do not expose all sample-wise observations. Do not use the three technical/sample entries as evidence of broad population prevalence.

## Taxonomic findings

The paper reports prominent phyla Firmicutes, Proteobacteria, Bacteroidetes (the abstract has a “Bacteroides” wording), and Actinobacteria. The discussion ranks Firmicutes first overall, followed by Proteobacteria, Bacteroidetes and Actinobacteria. At genus level the discussion ranks Lactobacillus, Pediococcus, Bacillus, Acetobacter and Staphylococcus as the more predominant genera, and lists Leuconostoc, Erwinia, Klebsiella, Delftia and Chryseobacterium at lower abundance. Families listed include Lactobacillaceae, Bacillaceae, Leuconostoc(e)aceae, Enterobacteriaceae, Acetobacteraceae, Ruminococcaceae, a truncated “urkholderiaceae” string, Staphylococcaceae, Comamonadaceae and Weeksellaceae.

Exact numeric abundance values are not transcribed from Figure 3; no genus-by-cohort allocation should be invented. The article reports Kruskal–Wallis p-values for taxonomic levels (phylum 0.041, class 0.024, family 0.014, genus 0.001). It also reports phylum-level PERMANOVA F=1.19, p=0.2, i.e. not significant by the conventional 0.05 threshold.

## Important internal inconsistencies and cautions

1. The Zeme beverage is spelled “Zao” in the introduction and “Zou” in Table 1. Preserve both as source variants; do not resolve without community evidence.
2. The abstract uses “Bacteroides” at phylum level while the discussion uses “Bacteroidetes.” Retain a taxonomic-normalization flag.
3. One beta-diversity sentence calls the unweighted UniFrac result statistically significant but prints p>0.05. This is internally inconsistent; do not use it as a supported significance claim.
4. The article title uses “metagenomic,” but the actual described workflow is 16S amplicon sequencing. Any comparison to shotgun datasets (e.g. SRC-046 Pukia Rohi Modh) must be labelled methodologically non-equivalent.
5. The article's discussion includes speculation linking inferred PICRUSt pathways to human disease/health. These are not clinical outcomes and do not establish population-level disease susceptibility, probiotic efficacy, or beverage safety.
6. The Tea-tribe umbrella label covers internally diverse communities; do not present it as one homogeneous ethnicity.

## Public sequence data

The data availability statement identifies NCBI BioProject **PRJNA1017140**. Individual BioSample/SRA Study/Experiment/Run accessions were not independently reconciled in this audit. The article's supplementary Data_Sheet_1.docx is listed in PMC (30.8 KB), but its content was not extracted in this pass. No SRR identifiers, sample GPS coordinates or supplementary taxon tables are asserted.

## Reproducible files added

- `research/assam/src132-southern-assam-16s-cohort.csv` — five cohort summaries and source-specific sample counts, read ranges, pH/EC and diversity indices.
- `research/assam/src132-cross-community-taxonomy.csv` — phyla, families and genera reported in the main text, with normalization/interpretation caveats.
- `research/assam/southern-assam-five-community-16s-audit-src132.md` — this audit.

## Follow-up

- Resolve PRJNA1017140 to BioSamples, SRA Study, Experiments and Runs; map each accession to cohort and retrieve raw reads if public.
- Retrieve and inspect Data_Sheet_1.docx for sample metadata, taxa and raw summary tables.
- Request sample locality, date and producer metadata from authors if not in the supplement.
- Clarify Zao/Zou spelling with community sources.
- Compare only shared taxa at an appropriately broad rank against SRC-046 shotgun data; never pool raw relative-abundance values across different sequencing methods/pipelines.
- Keep exact village coverage open until actual collection sites are disclosed.


## NCBI accession reconciliation — verified 2026-11-03

The NCBI BioProject page for **PRJNA1017140** exposes **five SRA Experiments and five BioSamples**. The linked SRA records resolve to five runs, one run per cohort, all Illumina MiSeq paired-end 16S V3–V4 amplicon libraries. The linked SRA Study is **SRP460503**. Crosswalk:

| Cohort | BioSample | Experiment | Run | Spots | Bases |
|---|---|---|---|---:|---:|
| Tea tribes / Haria (TT) | SAMN36419344 | SRX21775002 | SRR26058871 | 589,968 | 354.1M |
| Dimasa / Judima (DMK) | SAMN36419343 | SRX21775001 | SRR26058872 | 343,425 | 206.3M |
| Zeme Naga / Zao-Zou (ZN) | SAMN36419342 | SRX21775000 | SRR26058873 | 460,980 | 276.9M |
| Karbi / Hor Alank (K1) | SAMN36419341 | SRX21774999 | SRR26058874 | 616,797 | 370.6M |
| Hmar / Zu (HM) | SAMN36419340 | SRX21774998 | SRR26058875 | 545,933 | 327.9M |

**Important unresolved discrepancy:** the article's Materials and Methods states 15 collected samples, three from each cohort. NCBI currently exposes only five BioSamples and five SRA runs, one per cohort. The SRA sample names are exactly the cohort codes TT, DMK, ZN, K1 and HM. Neither the article nor the linked NCBI records inspected here establish whether each SRA library represents a pooled set of three field samples, a representative sample, or an incomplete deposition. Do not describe the five runs as 15 separate sequenced samples, and do not assume pooling without author or metadata confirmation.

The NCBI BioProject page labels the data type “Metagenome”; the SRA experiment records explicitly label the library design “16S rRNA V3-V4 sequencing” and strategy “AMPLICON”, consistent with the article's PCR-based method. The SRA records report one run each and the accession mapping is independently captured in `research/assam/src132-ncbi-sra-accessions.csv`.

The BioProject and all five SRA experiment records were directly inspected. The supplementary DOCX remains unextracted; sample-to-village metadata and the 15-versus-5 discrepancy therefore remain open.


## BioSample metadata quality check — verified 2026-11-03

All five BioSample records were opened individually. They provide one collection date per cohort, but their geographic metadata is weak:

| Cohort | Collection date | Geographic location | Submitted latitude/longitude |
|---|---|---|---|
| HM | 2022-06-21 | India | 20.59 N, 78.96 E |
| K1 | 2022-07-01 | India | 20.59 N, 78.96 E |
| ZN | 2022-07-10 | India | 20.59 N, 78.96 E |
| DMK | 2022-07-17 | India | 20.59 N, 78.96 E |
| TT | 2022-07-25 | India | 20.59 N, 78.96 E |

The exact same coordinate pair is repeated for all five records, while the geographic-location attribute says only “India”. This is not sufficient evidence for southern Assam, a district, or a village; treat the coordinates as non-local/unverified metadata and do not map them as actual collection sites. Each BioSample also displays a link to a second BioProject, **PRJNA994679**, in addition to PRJNA1017140. That cross-link is recorded but its relationship to this paper's dataset has not been established in this pass.

The accession CSV now includes the BioSample collection dates, generic geographic label, repeated coordinate pair and secondary BioProject link. The key open issues are now more specific: why 15 field samples correspond to five deposited BioSamples/runs, whether samples were pooled, what the repeated coordinates represent, and whether PRJNA994679 contains overlapping or ancillary data.
