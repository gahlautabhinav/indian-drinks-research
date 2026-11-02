# Mising ÉPOP cross-study inventory audit — 2026-11-02

## Purpose and scope

This audit extends the existing Sivasagar–Majuli comparison to include two earlier primary studies:
- SRC-005: Mili & Sundriyal (2023), Sivasagar; 31 starter-culture taxa, 15 villages surveyed, in-depth documentation in Majorbari and Ligiribari.
- SRC-006: Das, Deka & Miyaji (2012), Mising subsection in Lakhimpur; 12 listed plants; fieldwork Sep–Dec 2010.
- SRC-007: Yein et al. (2022), Majuli; 21 listed Table 1 taxa; fieldwork Sep–Dec 2021; authors state they visited more than 20 village households/areas but do not name them.

The 2026 Majuli paper is SRC-084 (Borah 2026), with 48 table entries. SRC-090 is a retired duplicate metadata row for the same article and is not an independent study. The inventory and taxonomic crosswalk files have been corrected to cite SRC-084.

## Table-level overlaps with the Sivasagar SRC-005 list

| Comparison | Listed taxa in comparator | Direct binomial matches to SRC-005 | Important unresolved candidates |
|---|---:|---:|---|
| Lakhimpur SRC-006 (2010 fieldwork) | 12 | 5 | Cyclosorus exlensa spelling/identity; source-specific names/identifications |
| Majuli SRC-007 (2021) | 21 | 7 | Centella spelling; Hydrocotyle species discrepancy; Cyclosorus species discrepancy |
| Majuli SRC-084 (2024 fieldwork; published 2026) | 48 table entries | Existing detailed crosswalk: 13 direct genus-species name matches, 1 provisional synonym candidate, 1 likely spelling-corrected candidate; 2 additional candidates remain unresolved/not counted | Acmella/Spilanthes; Azadirachta/Melia; duplicated Zanthoxylum oxyphyllum rows |

Direct matches are name-level table matches, not proof of identical plant populations, starter roles, plant parts, household practice or village-level use. Counts must not be added across studies as though they were distinct species: the same taxon can recur in multiple papers.

### SRC-006 / Lakhimpur — five direct matches

1. Centella asiatica — Bormanimuni (whole plant)
2. Hydrocotyle sibthorpioides — Horumanimuni (whole plant)
3. Saccharum officinarum — Kuhiar (leaves)
4. Scoparia dulcis — Senikuthi (leaves)
5. Lygodium flexuosum — Kopou dhekia (leaves)

The paper also lists Oldenlandia corymbosa (Banjaluk), Clerodendrum viscosum (Dhapat tita), Cyclosorus exlensa (Bhilongoni), Ipomoea sp. (Bam kolmou), Drymeria cordata (Lai jabori), Capsicum annuum (Jalokia) and Ananas comosus (Anaras). They are not exact binomial matches to the Sivasagar table. In particular, the Mising local name Banjaluk also appears beside Polygonum plebeium in the Sivasagar paper, but a shared vernacular label is not a botanical match; do not merge those taxa.

The SRC-006 study describes Lakhimpur district as its Mising fieldwork setting, but gives no named Mising villages. Its historical 2010 evidence is not a current-production census.

### SRC-007 / Majuli — seven direct matches

1. Artocarpus heterophyllus — Kathal (leaves)
2. Psidium guajava — Modhuri (leaves)
3. Scoparia dulcis — Bon-dhuniya (leaves)
4. Leucas aspera — Dronbon (whole plant)
5. Ageratum conyzoides — Gendali-bon (leaves and bark)
6. Vitex negundo — Posotiya (leaves and bark)
7. Piper longum — Jaluk (leaves)

Unresolved candidates preserved without automatic matching:
- “Centala acciatica” / Bor Manimuni likely contains a spelling/transcription error for Centella asiatica, but no voucher evidence was found in the reviewed article.
- “Hydrocotyl rotundifolia” / Soru-manimuni is not the same binomial as Hydrocotyle sibthorpioides / Horumanimuni in SRC-005. Do not equate them merely because both have a Manimuni element in the local name.
- Cyclosorus dentatus / Bihlongoni in SRC-007 is not silently merged with Cyclosorus exlensa / Bhilongoni in SRC-005.
- The paper's family labels include older or malformed terms (e.g. Umbelliferae, Laurels, Dogbanes) and should be preserved as published in the transcription.

SRC-007 does not identify the more-than-20 villages/households or assign individual plants to a particular village or to Po:ro versus Nogin Apong. Its ethnomedicinal column is a record of reported community beliefs/uses, not clinical evidence.

## What this comparison can and cannot tell us

- There is a recurring core of reported starter plants across studies, but no single statewide or universal ÉPOP recipe is demonstrated.
- The two Majuli studies differ in inventory size (21 taxa in SRC-007 versus 48 table entries in SRC-084). They have different fieldwork periods, sample descriptions, and reporting conventions. This is not evidence of a temporal increase or decrease in plant diversity.
- Sivasagar's 31 taxa are a study-level list; although two villages were selected for in-depth work, the paper does not map each taxon to Majorbari versus Ligiribari.
- Lakhimpur's 12 taxa are a historical district-level Mising list without village names.
- Majuli's SRC-007 21-taxon list is district-level with unnamed village/household scope.
- A robust future synthesis needs voucher identifiers, accepted taxonomic names with authorities, original vernacular names, plant parts, exact starter function, subtype association, collection habitat, locality and community confirmation.

## Repository artifacts

- `research/assam/epop-lakhimpur-12-species-src006.csv` — source-faithful transcription of SRC-006.
- `research/assam/epop-majuli-21-species-src007.csv` — source-faithful transcription of SRC-007.
- `research/assam/epop-sivasagar-31-species-src005.csv` — source-faithful transcription of SRC-005.
- `data/epop_plant_inventory_majuli_2026.csv` — SRC-084 canonical source ID corrected; SRC-090 remains retired duplicate metadata only.
- `data/epop_cross_site_comparison.csv` and `data/epop_plant_taxon_reconciliation.csv` — SRC-084 canonical references retained.

## Research gaps

ASM-GAP-006 and ASM-GAP-045 remain Open. No new village-level production records were created from district-level study scopes or unnamed survey households. No botanical synonym was promoted to a confirmed shared species without adequate taxonomic evidence.
