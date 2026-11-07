# SRC-046 metagenomic data-access and reproducibility audit — 2026-11-03

## Purpose

Follow up the data-availability statement in Das, Medhi and Tamang (2026), which names NCBI BioProject **PRJNA1284041** for raw shotgun-metagenomic data. The objective is to establish what can be independently recovered from the article and what still requires the BioProject/SRA record and supplementary workbook.

## Confirmed from the publisher's full text

### Sampling and biological replication

The paper describes 12 samples representing four beverage types: Black Rohi Modh (BR), Rohi Modh (RH), Jou Bidwi (JOU) and Sai Mod (SM). It explicitly states that each beverage type could be collected only once as one authentic household batch and that triplicate measurements are technical replicates, not independent biological replicates. It characterizes the dataset as a case study, not a regional survey.

The metagenomic results report **four beverage assemblies** (one per beverage category), with 57,694,302 assembled base pairs in total and a mean of 14,423,575.5 bp per assembly. Therefore, “12 samples” must not be treated as 12 independently collected fermentation batches or 12 independent metagenomic replicates. The paper does not explain in enough detail how the 12 sample units map onto four authentic beverage batches and four metagenomic assemblies; this is retained as a reporting/metadata ambiguity.

### Sequencing and bioinformatics workflow

- DNA extraction: NucleoSpin Food kit from centrifuged and washed beverage pellets.
- DNA quantification/quality: Qubit 4 Fluorometer and agarose gel.
- Library: Oxford Nanopore MinION SQK-LSK109 ligation kit.
- Input: 1,000 ng DNA; shearing to >10 kb with Covaris g-TUBEs; repair, adapter ligation and AMPure XP cleanup.
- Sequencer/chemistry: MinION Mk1C, FLO-MIN106D R9.
- Device/basecalling software: MinKNOW v1.0.5 and Guppy v2.2.3.
- Raw read conversion/quality: FAST5 to FASTQ using Poretools v0.6.0; NanoPlot v1.33.0.
- Assembly: Canu v2.2.0; assembly quality assessed using QUAST.
- Taxonomic annotation: Kaiju v1.9.0 against NCBI nr + euk database; minimum match length 11, match score 80, up to five mismatches, E-value 0.01, SEG filter enabled, greedy algorithm.

### Assembly metrics explicitly recoverable from the main text

The CSV `src046-assembly-metrics.csv` contains only values stated in the article. Missing per-sample values are blank rather than estimated.

- Total assembled sequence: 57,694,302 bp; four assemblies; mean 14,423,575.5 bp.
- Contigs: 1,030 in SAI to 5,083 in BR.
- Assembly sizes: 21.25 Mb in SAI to 33.42 Mb in RH.
- Contigs ≥10 kb: 413 in JOU to 714 in RH.
- Contigs ≥100 kb: 6 in BR to 30 in SAI.
- Largest contigs: JOU 255,031 bp; BR 296,154 bp; SAI 301,971 bp; RH 309,913 bp.
- N50: BR 6,472 bp; RH 19,333 bp; JOU 32,388 bp; SAI 50,608 bp.
- GC: SAI 50.28%; JOU 51.18%.

The article uses “SAI” in assembly results and “SM” for Sai Mod in other sections. The CSV preserves both codes.

### Taxonomic abundance recoverable from the main text

Selected values are transcribed to `src046-taxonomic-abundance.csv`. The paper reports 48 phyla, 321 families, 1,034 genera and 1,785 species overall. Domain-level composition is Eukarya 66.12%, Bacteria 33.04% and Virus 0.82%.

Selected sample-level relative abundances:
- Ascomycota: BR 83.27%, JOU 77.85%, SM 51.93%.
- Bacillota: RH 55.21%.
- Saccharomycetaceae: BR 83.25%, JOU 79.43%, SM 52.68%.
- Lactobacillaceae: RH 44.59%.
- Saccharomyces: BR 81.54%, JOU 79.62%, RH 35.89%, SM 54.85%.
- Pediococcus: RH 17%.
- Lentilactobacillus: SM 28.29%.

These are relative abundances from four single-batch samples, not absolute cell counts or community-wide prevalence.

### Culture-dependent isolate identifications

The article reports 68 LAB isolates and 55 yeast isolates. It provides beverage-level isolate counts:
- LAB: BR 15, RH 25, SM 16, JOU 12 (sum 68).
- Yeasts: BR 10, RH 21, SM 11, JOU 13 (sum 55).

The main text explicitly names selected taxa and isolate codes. The CSV `src046-sanger-isolate-identifications.csv` transcribes those text-listed assignments. It does not claim to inventory all 123 isolates. Figure 3 labels sequence accession numbers at the end of organism names; exact accession strings are not transcribed in this pass because the full-size image labels are not sufficiently reliable for character-by-character extraction. They should be taken from a higher-resolution figure or the sequence records, not guessed.

## BioProject and supplementary data access status

The publisher article's Data Availability section explicitly states that raw shotgun-metagenomic data are in NCBI under **PRJNA1284041**. In this pass, the accession was confirmed from the article itself, but individual BioProject, BioSample (SAMN), SRA Study (SRP), Experiment (SRX) and Run (SRR) records could not be independently retrieved from the NCBI/ENA interfaces used. No run accession, read count, FASTQ URL or sample-to-run mapping is therefore asserted here.

The publisher lists one supplementary DOCX, `13568_2026_2062_MOESM1_ESM.docx`, containing:
- ST1: sample collection locations, sample codes, longitude and latitude;
- ST2: proximate analysis;
- ST3: LAB/yeast colony and cell morphology, staining, glucose fermentation and catalase;
- ST4: assembly quality and metataxonomy abundance data (>1% and <1%);
- ST5a: metabolomics quality-control parameters;
- ST5b: GC-MS/MS metabolomics abundance data (>1% and <1%).

The publisher's page exposes the file link and its contents description, but the DOCX binary could not be retrieved in the current research environment. Consequently, no GPS coordinates, per-sample ST2–ST5 values or missing assembly metrics have been inferred or fabricated.

## Data files added

- `research/assam/src046-sanger-isolate-identifications.csv` — selected LAB and yeast taxa/isolate codes stated in the main text.
- `research/assam/src046-assembly-metrics.csv` — per-sample assembly values stated in the main text; blank cells mean not stated in accessible text.
- `research/assam/src046-taxonomic-abundance.csv` — selected domain, phylum, family and genus relative-abundance values.

## Research interpretation

The paper's strongest reusable contribution is the first batch-specific integrated microbiome/metabolome snapshot for BR, RH, JOU and SM. The raw data may enable independent reanalysis, but only after run/sample metadata and supplementary files are obtained. The small biological sample size (one household batch per beverage) sharply limits inference: technical triplicates improve analytical precision but do not create independent biological replication. Statistical differences and correlations should remain exploratory.

The predicted retinol-pathway annotations are microbial functional predictions, not evidence that the beverages contain vitamin A or deliver clinical health benefits. Relative abundance values are compositional and should not be described as absolute organism loads.

## Remaining actions

1. Resolve PRJNA1284041 to BioProject and SRA Study records; list all BioSamples, Experiments and Runs with sample titles, collection locations, library layout, platform and read counts.
2. Retrieve the supplementary DOCX from Springer/PMC and transcribe ST1–ST5.
3. Reconcile four metagenomic assemblies against the paper's “12 samples” wording and exact sample/run design.
4. Transcribe Figure 3 Sanger accessions from a higher-resolution source and map them to isolate codes.
5. Check the raw Nanopore reads and metadata for reproducibility only after the sample/run map is verified.

**Primary source:** Das, R., Medhi, M.C. & Tamang, B. (2026). *AMB Express* 16, 91. https://doi.org/10.1186/s13568-026-02062-0


## 2026-11-07 — Sample-locality reconciliation and evidence crosswalk

A fresh full-text check of the publisher article confirms the four beverage/sample locality assignments in the main text: Black Rohi Modh (BR) and Rohi Modh (RH) from Pukia, Dhemaji; Jou Bidwi (JOU) from Kaljar, Baksa; and Sai Mod (SM) from Jamuuri Panchali, Dhemaji. The article states that each beverage was authentically collected once as a single household batch. Triplicate analytical measurements are technical replicates, not independent household or production batches. The paper explicitly says Sai Mod is also called Poro Apong in its background discussion; this is retained as a source-reported naming crosswalk, not assumed to be universally accepted terminology. The JOU sample is not automatically equated with GI-specific Maibra Jou Bidwi or Jou Gishi.

Added `ASM-PL-117` (Jamuuri Panchali / SM) and `ASM-PL-118` (Kaljar / JOU) to the place register and integrated both into the Dhemaji and Baksa district matrix rows. The place rows are single-household sample collection evidence, not a production census or current prevalence claim. Updated the broad Poro Apong and Jou umbrella source references with the explicit caveats above. Existing Pukia BR/RH sample record remains unchanged.

The publisher article continues to reference Supplementary File ST1 for sample codes/GPS coordinates and ST2–ST5 for analytical detail; those files have not been extracted in this update. NCBI BioProject PRJNA1284041 still needs resolution to individual BioSample/SRA run records. Gap ASM-GAP-056 remains Open.
