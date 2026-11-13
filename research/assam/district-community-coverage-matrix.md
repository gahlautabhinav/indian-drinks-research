# Assam district coverage matrix

**Prepared:** 2026-11-13 (refreshed)  
**Data artifact:** `data/assam_district_coverage_matrix.csv`  
**Purpose:** Establish a transparent archive-presence baseline across the 35 district names listed in the Government of Assam district directory, applying the official rename from Karimganj to Sribhumi. This matrix is not a census of beverage traditions and does not certify that each district has been exhaustively searched.

## Snapshot

- **35 administrative district rows** in the matrix.
- **27 districts** have at least one place-register row or a combined regional/study-scope lead.
- **8 districts** have no relevant place row in the current archive.
- The archive has **134 Assam place rows** overall. These include named study sites, historical fieldwork, starter-culture sampling and broad study-region leads; they are not all current production locations.
- The district matrix assigns **124 place-row occurrences** to individual districts; 10 Assam place rows retain combined or unresolved district strings and are not assigned to a single district.
- A place row is not proof of current production, and absence from the register is not evidence of absence of a beverage tradition.

The matrix distinguishes named locality/study-site evidence, district-level leads, combined regional labels, and districts with no relevant place row in the current archive. The 2026-10-23 refresh adds the ten-village Hill-Tiwa ethnobotanical study scope under West Karbi Anglong (ASM-PL-087; SRC-038); Chu is documented at community level, not assigned to every village. Each row carries source IDs, beverage IDs where available, a caveat and a next research action.

## Administrative normalization

The Government of Assam General Administration Department's district directory (SRC-092; page last updated 28 April 2026) lists 35 districts but still uses the name Karimganj. The official renaming notification states that Karimganj district became Sribhumi with immediate effect on 21 November 2024 (SRC-093); the state portal's district commissioner list also uses Sribhumi (SRC-094). The matrix therefore uses **Sribhumi** as the current normalized name while preserving source-era **Karimganj** wording in the raw archive.

This is a practical working crosswalk. If a later official reorganization changes district boundaries or names, update the administrative reference sources and the matrix before comparing geographic counts across time.

## Districts with no relevant place row in the current archive

1. Barpeta
2. Bajali
3. Charaideo
4. Dhubri
5. Hojai
6. Nalbari
7. South Salmara-Mankachar
8. Tamulpur

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

The grouped public-web search pass and its limits are documented in [`district-search-log.md`](district-search-log.md).

## Remaining work after transition

This matrix completes the **archive-presence baseline**, but not the external search log. The next maintenance pass can continue searching the eight districts that still have no relevant place row and update the matrix only when evidence is found. The current release gate has passed: archive validation succeeded, the release note is published, and the latest Pages deployment succeeded. Keep unresolved questions open rather than filling them with inference.


## 2026-11-13 refresh — named Sonitpur Mising study sites and Dibrugarh reconciliation

SRC-171 (Sarma & Devi, 2016) explicitly names 17 Mising villages in Sonitpur district—Dharikati, Khonamukh, Kathani, Rangajan, Rongajan Miri, Baligaon, Sotaimiri, Toupamiri, Bamunipam, Bordikorai, Sikomgaon, Silenighat, Morikhuti, Bokagaon, Kekokoli, Tinighoria and Gudamghat—and reports 194 respondents across the 2013–2015 survey. Place rows ASM-PL-119–135 now record these as **named ethnobotanical field-study sites only**. Table 3's 11 Nogin/Nogjin Epop dicot taxa are not allocated by village, so the new rows have no beverage-specific production ID.

Dibrugarh now has 11 place rows after reconciliation of the two named Deori study villages (SRC-131) and four Sonowal Kachari study villages (SRC-045) with the existing historical/study-area rows. Neither paper supplies a village-to-batch or producer matrix; the rows remain study-site evidence, not a production census.

The eight zero-row districts remain Barpeta, Bajali, Charaideo, Dhubri, Hojai, Nalbari, South Salmara-Mankachar and Tamulpur. Recent Bodo (SRC-119), Tai-Ahom (SRC-174) and Deori (SRC-018) sources add process or district-level leads but no new named production localities in this pass. No place row is created from broad “Upper Assam” wording, a GI holder claim, or an unnamed Tinsukia field site.


### Bajali follow-up — 13 November 2026
The Bajali row remains at **zero beverage-specific place records**. The 2025 Bodo medicinal-plant study (SRC-176) names seven villages and 64 informants; the 2026 rural medicinal-plant study (SRC-177) names three villages and 94 informants. Both are medicinal-knowledge studies and do not document Jou or starter-culture production. The 2011 Barpeta DCHB (SRC-175) confirms Bajali RC/CD Block were within the then-Barpeta district; historical records require a village-level crosswalk. ASM-GAP-075 tracks the remaining direct beverage-evidence task.


### Dhubri follow-up — 13 November 2026
Dhubri remains a zero-place-row district. SRC-180 (NIPCCD 2022) documents Rabha Kesa mod/Jonga mod but gives no locality. SRC-102 (2021) documents Choko in five unnamed Goalpara villages; Deka & Sarma (2010) name Dhupdhora, Goalpara. SRC-181 confirms present Dhubri was part of erstwhile Goalpara until 1983, so historic Goalpara records require village-level crosswalks. SRC-124 (2026) identifies Rabha study districts as Goalpara and Kamrup, not Dhubri. New ASM-GAP-077 tracks named-site retrieval and present-Dhubri producer evidence. No Goalpara source is reassigned to Dhubri.
