# Southern Assam sequencing accession crosswalk

**Reviewed:** 2026-10-22  
**BioProject:** [PRJNA1017140](https://www.ncbi.nlm.nih.gov/bioproject/PRJNA1017140/)  
**Paper:** Yumnam, Hazarika & Sharma (2024), [Metagenomic insights into traditional fermentation of rice-based beverages among ethnic tribes in southern Assam](https://pmc.ncbi.nlm.nih.gov/articles/PMC11459095/).

## Verified public record-to-cohort mapping

The NCBI BioSample page linked from BioProject PRJNA1017140 lists five records. Each record exposes a sample name matching a cohort label used in the paper. This is a direct metadata match, not an inference based only on the number of records.

| Paper/BioSample sample name | Community cohort | Beverage in paper | BioSample accession | SRA Sample accession |
|---|---|---|---|---|
| TT | Tea tribes | Haria | SAMN36419344 | SRS18315173 |
| DMK | Dimasa Kachari | Judima | SAMN36419343 | SRS18315172 |
| ZN | Zeme Naga | Zao (also spelled Zou in Table 1) | SAMN36419342 | SRS18315171 |
| K1 | Karbi | Hor Alank | SAMN36419341 | SRS18315170 |
| HM | Hmar | Zu | SAMN36419340 | SRS18315169 |

Primary public metadata: [NCBI BioSample listing for PRJNA1017140](https://www.ncbi.nlm.nih.gov/biosample?Cmd=Link&Db=biosample&DbFrom=bioproject&IdsFromResult=1017140&LinkName=bioproject_biosample&LinkReadableName=BioSample&ordinalpos=1).

## What this establishes

- The five public BioSample records are explicitly named TT, DMK, ZN, K1 and HM.
- Those names map directly to the five beverage/community cohorts reported in the paper.
- The NCBI BioProject landing page lists five BioSamples and five SRA experiments.

## What it does not establish

- The paper's methods state that 15 field samples were collected, three per cohort. The five public cohort-labelled records do not disclose the original three sample identifiers per cohort or prove how each physical sample contributed to the final sequencing data.
- This table lists **SRA Sample accessions (SRS...)**, not the SRA Experiment (SRX...) accessions. Do not conflate these accession types.
- The public summary/listing reviewed here does not provide a reliable village-by-beverage crosswalk.
- The supplementary file `Data_Sheet_1.docx` remains to be retrieved and inspected.

## Next actions

1. Obtain and inspect the supplementary DOCX.
2. Retrieve the full accession-level SRA experiment/run metadata and library construction details.
3. Reconcile the three field samples per cohort with the submitted BioSample, experiment and run records.
4. If original sample identifiers or locality are not public, request clarification from the corresponding author, asking only for a community-approved locality crosswalk and non-identifying sample-to-library mapping.
5. Keep Haria, Judima, Zao/Zou, Hor Alank and Hmar Zu locality gaps open until supported by sample-level or locality-specific evidence.

**Research rule:** a confirmed cohort label is not a confirmed village origin, and a public sequencing accession is not automatically equivalent to one original field sample.
