# SRC-313 — Saikia et al. (2024): Assam nine-starter mycoflora survey

**Audit date:** 20 November 2026  
**Citation:** Bandana Saikia, M.S. Ali, Shankar Hemanta Gogoi and P.D. Nath (2024), “Isolation and Characterization of the Mycofloral Diversity in Traditional Assamese Alcoholic Fermentation from India,” *Asian Journal of Dairy and Food Research* 43(1):104–110. DOI: 10.18805/ajdfr.DR-1829. The publisher page states first online 28 March 2022; the issue citation is March 2024.  
**Publisher full-text page:** https://arccjournals.com/journal/asian-journal-of-dairy-and-food-research/DR-1829  
**Alternative article record:** https://indianjournals.com/article/jdfhs-43-1-017

## 1. Scope and sample count

The study aimed to isolate native yeasts and other fungi associated with traditional Assam rice-beer starter inocula. The authors report collecting **nine different dry starter samples** during 2019–2020 and bringing them to the Department of Plant Pathology, Assam Agricultural University, Jorhat.

The abstract lists seven districts:
- Jorhat
- Sivasagar
- Golaghat
- Lakhimpur
- Dhemaji
- Majuli
- Karbi Anglong

However, the introduction states that the survey was carried out in **six** districts. This is an internal inconsistency. The accessible paper does not explain whether one district was omitted from the introduction, whether Majuli was counted separately, or whether the abstract list is incorrect. Preserve both statements and request author clarification.

The authors name three starter types in Materials and Methods:
- Xaaj pitha
- Apong
- Suzen (mod pitha)

No sample-by-sample register is published in the accessible text. The paper does not state which of the nine samples belongs to which district, village, community, starter type or finished-beverage batch. It is therefore not possible to assign any microbial result to Jorhat, to the Chaodang community, or to the Saj/Laopani tradition documented in SRC-312.

## 2. Culture and isolation methods

The starter cakes were ground to powder. Ten grams of starter were suspended in 90 mL sterile water, serially diluted to 10^-4 and 10^-5, then plated on:
- Yeast extract peptone dextrose (YEPD) agar
- Potato dextrose agar (PDA)
- V8 juice agar

The media contained 200 ppm streptomycin sulphate to suppress bacterial growth. Plates were incubated at 25 ± 1°C for 48 hours. Colonies with distinct morphology were picked, purified, sub-cultured and stored in mineral oil.

This is a culture-dependent study: the recovered organisms are those that grew under the selected media and incubation conditions. The method does not recover or quantify the entire starter microbiome and does not provide a direct culture-independent abundance profile.

## 3. Yeast isolates

The authors report **16 yeast isolates**, grouped by morphology and physiological properties:

| Group | Number of isolates | Identification |
|---|---:|---|
| I | 9 | *Saccharomyces cerevisiae* |
| II | 3 | *Saccharomycopsis fibuligera* |
| III | 4 | *Candida tropicalis* |

The paper says *S. cerevisiae* was dominant in all nine starter samples. It does not give a sample-level occurrence matrix or abundance values, so “dominant in all nine” should be retained as the authors' qualitative statement rather than converted into isolate counts per sample.

### Molecular accessions

The authors selected representative yeast isolates for sequencing and report:
- *Saccharomyces cerevisiae*: MK110643
- *Saccharomycopsis fibuligera*: MK110642
- *Candida tropicalis*: MK110644

The article's methods describe representative strains selected from each group. These accessions do not constitute separate sequence confirmations for all 16 isolates. The article discusses morphology, physiology and phylogenetic comparison, but does not provide an accession-per-isolate register.

## 4. Filamentous fungi

Two filamentous fungi were reported:
- *Aspergillus oryzae*
- *Aspergillus niger*

The authors state that *A. oryzae* was confirmed by the National Centre for Fungal Taxonomy, New Delhi, with ID No. **2001.17**. *A. niger* is described as identified by morphological characters in the article; do not imply it received the same NCFT confirmation.

The study does not provide a starter-sample-by-mould mapping, so neither species should be assigned to any specific starter type or district.

## 5. Amylolytic evidence

The authors performed a starch hydrolysis plate assay using starch agar, followed by iodine flooding. A clear zone after iodine treatment was interpreted as starch degradation.

The three *S. fibuligera* isolates formed clear zones and were described as producing amylase. The paper discusses a potential complementary role in which *S. fibuligera* releases reducing sugars from starch and *S. cerevisiae* ferments those sugars. This is a plausible functional interpretation supported by the cited literature and plate assay; the paper did not conduct a controlled co-culture fermentation trial on the nine Assam starter samples.

No quantitative enzyme activity, ethanol yield, finished-beverage alcohol concentration, volatile profile or fermentation kinetics is reported for the sampled traditional drinks.

## 6. Safety interpretation

The authors discuss *Candida tropicalis* as a possible health concern, citing external literature. The study does not measure pathogen burden in a finished beverage, demonstrate infection, test toxin levels, conduct consumer exposure assessment, or show that the presence of the organism caused illness. Do not convert the article's concern into a claim that all nine starters or their beverages were unsafe.

Conversely, culture results alone do not certify safety. A starter's food safety requires strain-level identification, appropriate toxin/pathogen testing, process hygiene evidence and assessment of the finished product. No such comprehensive safety validation is supplied here.

## 7. Relationship to other Assam sources

- **SRC-312 (Gogoi 2021):** documents Chaodang Saj/Laopani and Su-pitha/Modor-pitha in ten named Jorhat villages. SRC-313 does not map any of its nine starter samples to those villages or to Su-pitha, so it cannot be used as microbiological validation of Chaodang Saj.
- **SRC-308 (Tanti et al. 2010):** documents starter names and community/beverage pairings across Assam and other Northeast states. SRC-313 does not give a sample-to-community crosswalk for Xaaj pitha, Apong and Suzen.
- **SRC-306 and SRC-307:** document Assam starter preparation and Humao mycobiome, but with different sample identities and limitations. Do not merge their data with SRC-313.
- **SRC-309–SRC-311:** concern Bodo Emao and associated isolates. Their sample provenance is separate from this nine-starter survey.

The names Xaaj pitha, Apong and Suzen should remain source-reported starter labels. Do not assign Suzen to a specific community or infer that all samples were from one of the seven listed districts without the sample register.

## 8. Repository changes

- Added SRC-313 to `sources/source_register.csv`.
- Added ASM-GAP-132 to `data/research_gaps.csv` to track the six-versus-seven district discrepancy and the missing nine-sample provenance matrix.
- No beverage record was updated or created. The article does not provide sufficient sample-to-beverage/community mapping to attach the microbial results to Chaodang Saj, Ahom Xajpani, Mishing Apong or another specific beverage.
- No place-level production rows were created.

## 9. Next actions

1. Request the nine-sample register from the corresponding author: sample ID, starter name, community, village, district, collection date and whether it was a starter cake or material from a finished beverage.
2. Ask why the abstract lists seven districts while the introduction states six.
3. Request isolate-level mapping: which starter samples yielded the 16 yeast isolates and two filamentous fungi.
4. Obtain the original sequence records for MK110642–MK110644 and check their metadata; do not assume each accession corresponds to every isolate in its group.
5. Clarify whether *A. niger* was deposited or independently confirmed by a reference mycology collection.
6. Seek separate finished-beverage sampling and chemistry if the goal is to characterize the products rather than the starter cakes.

**Conclusion:** SRC-313 is a useful statewide culture-dependent mycoflora source: it reports nine Assam starter samples, 16 yeast isolates and two filamentous fungi, with *S. cerevisiae*, *S. fibuligera*, *C. tropicalis*, *A. oryzae* and *A. niger*. Its most important limitation is provenance: the accessible paper does not map samples to communities, villages or districts and even disagrees internally on the number of surveyed districts. It must remain statewide, sample-unresolved evidence until the authors' original metadata are recovered.
