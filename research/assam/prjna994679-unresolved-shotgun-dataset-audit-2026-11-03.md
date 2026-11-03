# NCBI BioProject PRJNA994679 — unresolved southern Assam fermented-rice shotgun dataset

**Audit date:** 2026-11-03  
**Archive record:** https://www.ncbi.nlm.nih.gov/bioproject/994679  
**Project accession:** PRJNA994679 (NCBI BioProject ID 994679)  
**Repository source record:** SRC-133

## 1. Project summary verified

NCBI's BioProject record is titled **“Bacterial community of rice-based fermented products Metagenome”**. Its description reads: “Studies on shotgun metagenomics insights into microbial communities of fermented rice products from Ethnic tribes of Southern Assam”. The submitter is Assam University; registration date 14 July 2023. The record reports:

- Data type: Metagenome
- Scope: Multispecies
- SRA experiments: 10
- BioSamples: 6
- Sequence volume: 2 Gbases / 1,227 Mbytes

This is a credible archive lead for a southern Assam fermented-rice shotgun dataset, but the project summary is not sufficient to establish the beverage identities, ethnic communities, sample design, locality, platform, or analytical workflow.

## 2. Publication-link inconsistency

The project page links to Lu X et al. (2024), “Metagenomic analysis reveals high diversity of gut viromes in yaks (*Bos grunniens*) from the Qinghai-Tibet Plateau”, *Communications Biology* 7:1097. That publication is apparently unrelated to fermented rice beverages in southern Assam. This mismatch could reflect a mistaken publication association or metadata linkage. It is not evidence that the fermented-rice project is invalid, but it must be resolved before attributing the data to any paper or author group.

## 3. Cross-link from PRJNA1017140

Each of the five BioSamples in PRJNA1017140 (SAMN36419340–SAMN36419344) displays links to both PRJNA1017140 and PRJNA994679. For example, SAMN36419344 (sample name TT) shows both project accessions, isolation source “rice fermented beverage”, collection date 2022-07-25, geographic location “India”, and coordinates 20.59 N, 78.96 E.

This establishes a database cross-link at the BioSample record level. It does **not** establish that the five BioSamples are part of both sequencing projects in a way that makes their experiments interchangeable, that PRJNA994679 is a second publication dataset, or that its 10 experiments are shotgun data for those exact five beverage cohorts. PRJNA994679 reports six BioSamples, not five, so at least one additional sample record requires reconciliation.

## 4. Access limitations in this audit

The BioProject summary page was accessible and inspected. Its linked “all BioSamples” and “all SRA Experiments” result pages redirected to NCBI browser CAPTCHA during this pass. The 10 experiment accessions, six BioSample accessions, library layouts, platforms, run accessions and sample attributes therefore remain unverified. No SRX, SRR or SAMN identifiers are invented or copied from the separate PRJNA1017140 project.

## 5. Research decision

Keep PRJNA994679 as a **separate unresolved archive lead** (SRC-133). Do not:

- Merge it into SRC-132 or claim it is the same study.
- Treat the project description as proof that the 2024 Yumnam et al. study performed shotgun metagenomics; that paper's methods describe Illumina MiSeq 16S V3–V4 amplicon sequencing.
- Attribute the 10 experiments to any particular beverage or community.
- Use the project-level 2 Gbases/1,227 Mbytes as a per-sample metric.
- Map the repeated generic BioSample coordinates as southern Assam collection locations.

## 6. Next actions

1. Retrieve the six BioSample and ten SRA experiment records via NCBI Run Selector, SRA RunInfo or an INSDC mirror such as ENA.
2. Export a complete experiment/run table with BioSample, library strategy, library source, platform, instrument, run accession, spots/bases and file size.
3. Compare the six BioSamples against SAMN36419340–SAMN36419344 from PRJNA1017140; distinguish shared sample records from separate sequencing experiments.
4. Identify the sixth BioSample and determine whether it is an additional beverage/community cohort or an unrelated sample.
5. Inspect the linked publication metadata and contact the submitter if the yak virome citation is erroneous.
6. Only after record-level mapping, create sample-level research records and consider raw-read reanalysis.

## Evidence references

- NCBI BioProject PRJNA994679: https://www.ncbi.nlm.nih.gov/bioproject/994679
- Example linked BioSample SAMN36419344: https://www.ncbi.nlm.nih.gov/biosample/SAMN36419344
- NCBI SRA Run Selector guidance: https://trace.ncbi.nlm.nih.gov/Traces/study1/?go=help
- Separate 2024 16S paper: https://pmc.ncbi.nlm.nih.gov/articles/PMC11459095/
