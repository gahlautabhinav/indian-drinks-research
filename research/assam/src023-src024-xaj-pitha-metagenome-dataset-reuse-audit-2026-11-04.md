# SRC-023 / SRC-024 — Xaj-pitha metagenome dataset identity and reuse audit

**Audit date:** 2026-11-04  
**Purpose:** Determine whether the 2016 Bora et al. and 2020 Keot et al. publications provide independent whole-genome-shotgun (WGS) metagenomic datasets, and document the limits of the public accession trail.

## Sources

1. **SRC-023:** Bora, S. S., Keot, J., Das, S., Sarma, K., & Barooah, M. (2016). “Metagenomics analysis of microbial communities associated with a traditional rice wine starter culture (Xaj-pitha) of Assam, India.” *3 Biotech* 6, 153. DOI: https://doi.org/10.1007/s13205-016-0471-1. Full text: https://link.springer.com/article/10.1007/s13205-016-0471-1
2. **SRC-024:** Keot, J., Bora, S. S., Kangabam, R. D., & Barooah, M. (2020). “Assessment of microbial quality and health risks associated with traditional rice wine starter Xaj-pitha of Assam, India: a step towards defined and controlled fermentation.” *3 Biotech* 10, 64. DOI: https://doi.org/10.1007/s13205-020-2059-z. Full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC6977804/

## 1. 2016 sample and sequencing design

Bora et al. report five Xaj-pitha starter samples from rural Ahom households in Titabar subdivision, Jorhat district, collected on **20 August 2014**. The five samples were pooled into one composite under sterile laboratory conditions for DNA extraction and WGS. The article gives Titabar coordinates as 26.60°N, 94.20°E.

The five sample codes in Table 1 are:
- ABT-S4J3
- ABT-S5J3
- ABT-S6J3
- ABT-S7J3
- ABT-S8J3

The composite was sequenced on an Illumina MiSeq paired-end workflow. The 2016 article reports 278,231 sequences, 143,119,277 post-QC base pairs, 272,929 sequences retained after QC, and MG-RAST phylotyping identifier **4556318.3** (the later paper formats this as **mgm4556318.3**).

## 2. 2020 sampling and sequencing design

Keot et al. report 60 Ahom Xaj-pitha starter samples from six Upper Brahmaputra Valley districts, using two clusters per district and five samples per cluster. Five samples from each cluster were pooled equally to form 12 cluster composites for culture-based microbial diversity analysis.

The 2020 methods explicitly state that **one representative composite from Titabar subdivision, Jorhat district** was used for Illumina-based metagenomic analysis. The paper gives the same MG-RAST accession **mgm4556318.3** and SRA BioProject **PRJNA597963**.

## 3. Dataset identity finding

The following evidence supports treating the 2016 and 2020 WGS reporting as the **same underlying metagenomic dataset**, not two independent sequencing studies:

- Both papers identify the metagenomic material as Ahom Xaj-pitha starter from Titabar, Jorhat.
- The 2016 paper documents five household starter samples collected on 20 August 2014 and pooled into one composite.
- The 2020 paper identifies one Titabar/Jorhat composite as its WGS sample.
- The 2020 paper cites the same MG-RAST record as the 2016 study (4556318.3 / mgm4556318.3).
- The 2016 and 2020 papers report the same distinctive sequencing totals: 278,231 sequences and 143,119,277 base pairs.

**Interpretation:** The 2020 publication should be treated as a broader culture-based survey (60 samples, 12 cluster composites) plus a metagenomic analysis of the previously reported Titabar composite. Its WGS component is not an independent replication of the 2016 WGS dataset. The 60-sample culture-based data remain additional evidence and must not be collapsed into the five-household 2014 collection.

**Provenance caveat:** The matching accession and sequence statistics make dataset reuse compelling. The accessible article texts do not provide a sample-code crosswalk explicitly stating that the 2020 Titabar composite is exactly the same physical 2014 composite represented by ABT-S4J3–ABT-S8J3. Record it as the same underlying dataset/reanalysis for evidence counting, while retaining the missing explicit sample-code linkage as a provenance caveat.

## 4. What must not be counted twice

- Do not count the 2016 and 2020 metagenomic publications as two independent WGS datasets.
- Do not describe the 2020 WGS result as sequencing all 60 samples or all 12 composites.
- Do not treat the 2016 five-household collection as 60 samples.
- Do not treat the 2016 and 2020 microbial taxonomic profiles as independent confirmations merely because they appear in separate papers.
- Do preserve the 2020 culture-based counts, isolate collection, fermentation dynamics and defined-starter experiments as additional experiments distinct from the reused WGS dataset.

## 5. Separate isolate-sequence accessions in SRC-108 (2024)

Saikia et al. (2024; SRC-108) report three ITS sequence accessions:
- **MK110643** — *Saccharomyces cerevisiae*, isolate Y-32 (group I).
- **MK110642** — *Saccharomycopsis fibuligera*, isolate Y-6 (group II).
- **MK110644** — *Candida tropicalis*, isolate Y-21 (group III).

These are isolate-level ITS sequence submissions from the 2024 study, not the Xaj-pitha WGS BioProject. The article describes nine starter samples and 16 yeast strains; it does not supply a sample-to-village/community mapping. The publisher PDF states the accession-to-isolate mapping, but direct NCBI nucleotide record metadata (including linked BioSample and collection attributes) could not be independently retrieved in this audit. Do not infer collection villages or link these isolates to SRC-023/SRC-024.

## 6. Limits of public accession retrieval

The 2020 paper cites SRA BioProject **PRJNA597963**, but direct NCBI BioProject/SRA pages were not readable through the available retrieval path during this audit. No individual SRR, SRX or BioSample accessions are asserted here. NCBI describes BioProject as an umbrella linking related deposited data and SRA as the archive for high-throughput sequence reads; the accession must be followed to record-level metadata before making claims about run count, library details or sample attributes.

The 2024 paper's three GenBank accession numbers are recorded exactly as printed in the article. Their nucleotide records and linked BioSamples remain to be independently inspected.

## 7. Research implications and next actions

1. Count SRC-023/SRC-024 as **one shared Titabar WGS dataset**, with the 2020 study adding a separate 60-sample culture-based survey.
2. Retain the 2014 Titabar collection date and five sample codes from SRC-023; do not assign that date to all 60 samples in SRC-024.
3. Retrieve PRJNA597963 through NCBI SRA Run Selector or an INSDC mirror to enumerate the BioSamples, experiments and runs and compare record metadata with the paper's Titabar composite description.
4. Retrieve MK110642, MK110643 and MK110644 from NCBI Nucleotide and capture the exact submitted organism, isolate, sequence length, collection source, BioSample link (if any), submission date and version.
5. Keep SRC-108 sample-to-community/locality mapping unresolved unless a record or author-supplied sample register resolves it.

## Evidence references

- Bora et al. 2016 publisher full text and sampling/methods: https://link.springer.com/article/10.1007/s13205-016-0471-1
- Bora et al. 2016 full-text PDF: https://link.springer.com/content/pdf/10.1007/s13205-016-0471-1.pdf
- Keot et al. 2020 full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC6977804/
- Saikia et al. 2024 publisher PDF: https://arccarticles.s3.amazonaws.com/OnlinePublish/Final-article-attachemnt-with-doi-DR-1829-6089603e9087340b9bdcbbb1.pdf
- NCBI SRA overview: https://www.ncbi.nlm.nih.gov/sra/docs/
- NCBI BioProject FAQ: https://www.ncbi.nlm.nih.gov/bioproject/docs/faq/
