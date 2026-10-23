# Assam district coverage matrix

**Prepared:** 2026-10-23  
**Data artifact:** `data/assam_district_coverage_matrix.csv`  
**Purpose:** Establish a transparent archive-presence baseline across the 35 district names listed in the Government of Assam district directory, applying the official rename from Karimganj to Sribhumi. This matrix is not a census of beverage traditions and does not certify that each district has been exhaustively searched.

## Snapshot

- **35 administrative district rows** in the matrix.
- **25 districts** have at least one place-register row or a combined regional/study-scope lead.
- **10 districts** have no relevant place row in the current archive.
- The archive has **80 Assam place rows** overall, but these repeat some localities across beverages/evidence types and include historical fieldwork, starter-culture sampling, broad study regions, applicant addresses and unresolved localities.
- A place row is not proof of current production, and absence from the register is not evidence of absence of a beverage tradition.

The matrix distinguishes named locality/study-site evidence, district-level leads, combined regional labels, and districts with no relevant place row in the current archive. Each row carries source IDs, beverage IDs where available, a caveat and a next research action.

## Administrative normalization

The Government of Assam General Administration Department's district directory (SRC-092; page last updated 28 April 2026) lists 35 districts but still uses the name Karimganj. The official renaming notification states that Karimganj district became Sribhumi with immediate effect on 21 November 2024 (SRC-093); the state portal's district commissioner list also uses Sribhumi (SRC-094). The matrix therefore uses **Sribhumi** as the current normalized name while preserving source-era **Karimganj** wording in the raw archive.

This is a practical working crosswalk. If a later official reorganization changes district boundaries or names, update the administrative reference sources and the matrix before comparing geographic counts across time.

## Districts with no relevant place row in the current archive

1. Barpeta
2. Biswanath
3. Bajali
4. Charaideo
5. Chirang
6. Darrang
7. Dhubri
8. Hojai
9. Nalbari
10. Sonitpur
11. South Salmara-Mankachar
12. Tamulpur
13. Udalguri

These are **archive gaps**, not a finding that those districts lack traditional beverages. They are priority targets for systematic source searches. In particular, do not assign older undivided Karbi Anglong research to West Karbi Anglong without verifying the original field site against the current boundary.

## Highest-priority coverage ambiguities

- **Cachar, Hailakandi and Sribhumi:** the current archive has combined southern Assam study-region labels for Haria, Zao/Zou and Hmar Zu; it does not map each sample to a district or village.
- **Nagaon and Morigaon:** a 2020 Tiwa study is recorded across both districts, but individual locality-to-district assignments remain unresolved. Morigaon also has separate named historical field-study villages.
- **Kokrajhar:** the strongest evidence density in the current archive, but the printed “Jalpaiguri” locality remains unresolved and the named survey villages are not automatically production sites for every linked Jou form.
- **Jorhat:** ten named Mising survey villages are recorded, but beverage-to-village attribution is not established for every drink.
- **Karbi Anglong / West Karbi Anglong:** the official West Karbi Anglong cultural page mentions Hor and Horpo but does not identify a production village or establish equivalence with Hor-alank/Hor-arak. Do not infer present-day district-level distribution from older fieldwork unless the actual villages and boundary history support the assignment.
- **Starter-culture studies:** several localities document starter preparation or sampling, not necessarily finished beverage production in every household or at present.

## How to use the CSV

- `Place_Row_Count` counts linked archive rows, not unique villages.
- `Evidence_Source_IDs` records sources cited by the linked place rows.
- `Administrative_Source_IDs` records the official administrative reference layer.
- `Beverage_IDs` are carried forward from existing place rows; blank values remain blank rather than being inferred from a parent study.
- `Archive_Coverage_Class` is a scoped description of the evidence already in the repository, not a ranking of cultural importance or beverage diversity.
- `Next_Research_Action` tells the next researcher how to improve the district record without overstating the evidence.

## Remaining work before Assam transition

This matrix completes the **archive-presence baseline**, but not the external search log. The next close-out pass should search the 14 uncovered districts in grouped, source-led queries and record whether each search found a reliable source, a weak lead, or no suitable source located. Then perform the release check: validate all CSVs, confirm the current Pages deployment, and publish the state-baseline note with remaining gaps listed.
