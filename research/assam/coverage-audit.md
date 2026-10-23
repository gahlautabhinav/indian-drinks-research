# Assam Beverage Research Coverage Audit

**Audit date:** 2026-10-23  
**Purpose:** Assess the archive's current evidence footprint and identify what remains before treating Assam as ready for a state transition. This is an audit of the repository, not a census of Assam's beverage traditions.

## Executive finding

**The repository-level transition gate is passed, but Assam is not complete as a research census and remains active.** The baseline is suitable for a future state transition when you choose to make that switch; it does not mean research should stop now. Geographic coverage remains uneven, and several records rely on district-level leads, historical fieldwork, secondary name lists, or samples whose exact village is not reported.

### Snapshot of the repository

| Measure | Current count | What it means |
|---|---:|---|
| Canonical beverage records tagged Assam | 22 | Current working inventory; not a count of all Assam beverages |
| Assam place-coverage rows | 86 | Place leads and study locations; rows can be district-level, historical, unresolved, or address-only |
| Raw district-field labels represented in Assam place rows | 31 | Includes combined regional labels and unresolved labels; **not** 22 cleanly verified administrative districts |
| Assam research gaps | 46 | All 46 are currently marked Open |
| Sources in source register | 98 overall | Source-register rows across the project, not unique publications; SRC-090 is a retired duplicate alias of SRC-084 |

Counts refreshed from the current CSVs on 2026-10-23. The place register contains repeated places for different drinks and evidence types, so 86 Assam rows do not mean 86 unique villages. Some entries represent district-level studies without named villages, GI applicant addresses, broad study regions, or unresolved locality leads. The 31 distinct raw district-field labels split into 36 semicolon-separated tokens include combined and unresolved labels; they are not counts of verified administrative districts. The full place register contains 90 rows across all states. The new `data/assam_district_coverage_matrix.csv` provides one row for each of 35 administrative district names in the working baseline; 9 districts currently have no place row at all; Biswanath now has a district-level beverage-study-area lead (SRC-061) but still lacks product/community-specific attribution. See `district-community-coverage-matrix.md` for the administrative sources and caveats.

## Evidence tiers

### 1. Stronger place-linked evidence — still not a complete distribution map

These are the most useful anchors for follow-up because a source identifies a named locality or specific field-study area. “Strong” here means useful for a scoped claim, not proof of current prevalence.

- **Dimasa — Judima:** Dima Hasao has named locality leads including Dhansiri and Tereh, plus Dibarai as a GI applicant-address lead. Keep the applicant address separate from direct production evidence. (ASM-001-JUD; SRC-001–004)
- **Mising — Noggin/Poro Apong:** Majorbari and Ligiribari in Sivasagar are documented starter-culture study localities; Barmukuli in Dhemaji and district-level leads elsewhere add breadth, but starter sampling is not automatically proof that both finished beverages are currently produced at every site. (ASM-002-NOG, ASM-003-POR; SRC-005–008, SRC-069)
- **Deori — Sujen:** Historical field-study localities include Sunpura Deori gaon, Kololuwah, Rajabari and Borbam Deori gaon. The archive still needs current-practice verification. (ASM-004-SUJ; SRC-009–012)
- **Karbi — Hor-alank/Hor-arak:** Karbi Anglong evidence includes Kathkatia/Silonijan and rural fieldwork; the exact village list for some older work remains to be extracted. (ASM-005-HAL, ASM-006-HAR; SRC-013–016)
- **Rabha — Jonga-mod:** Dhupdhora, Goalpara is a named study locality. This does not settle whether Jonga-mod, Kecha-mod, Choko/Chokot, Matha Mod and Roshi Mod are synonyms or distinct subgroup-specific preparations. (ASM-007-JON; SRC-017–020, SRC-059)
- **Tai-Ahom — Xajpani:** Goahai Gaon, Dhemaji and Titabar, Jorhat are useful locality anchors; several other district entries refer to starter-culture sampling, not a current production census. Luk-Lau/Nam-Lau terminology remains unresolved. (ASM-008-XAJ; SRC-021–026, SRC-060–061, SRC-071–072)
- **Bodo — Jou family:** Kokrajhar has the densest cluster of place rows, including field-study villages such as Amlaiguri, Gendrabili and Banshigaon. Do not infer every subtype was produced in every village; the printed “Jalpaiguri” locality requires resolution before it is treated as an Assam village. (ASM-009-JOU through ASM-013-JGW; SRC-027–034, SRC-066)
- **Chaodang — Saj/Laopani:** A ten-village Jorhat study is noted, but the accessible source record does not name the villages. Retrieve the full paper or supplement to make this useful at village level. (ASM-014-CHS; SRC-035)
- **Tiwa — Plains-Tiwa Zu/Chu and Hill-Tiwa Chu:** Das (2016) names five Morigaon villages for Plains-Tiwa Zu/Bakhor fieldwork; the 2020 study gives additional Nagaon–Morigaon locality leads. Teron and Borthakur (2014) names ten Hill-Tiwa study villages in what is now West Karbi Anglong and documents Chu at community level. The Hill-Tiwa row is deliberately not linked to the Plains-Tiwa canonical record until the name/process boundary is resolved. (ASM-015-TZU; ASM-PL-087; SRC-036–038, SRC-078)
- **Sonowal Kachari — Rohi:** Jokai area, Dibrugarh is a field-study anchor; the exact village and broader production map remain unresolved. Sepa and Black Rohi Modh must not be folded into Rohi without stronger evidence. (ASM-019-ROH, ASM-020-SEP, ASM-021-BRM; SRC-044–046)

### 2. Regional or district-level evidence — do not overstate village precision

The current register has meaningful leads but does not establish exact production villages or current household practice for:

- **Tea-tribe/Adivasi Haria** in the southern Assam study region; the public BioSample label `TT` maps to Haria (SAMN36419344; SRA Sample SRS18315173), but the three original field samples and their village origins are not mapped in the reviewed public metadata. (ASM-016-HAR; SRC-039–040, SRC-079; see [sequencing accession crosswalk](sequence-accession-crosswalk.md))
- **Zeme Naga Zao/Zou** in southern Assam; the public cohort label `ZN` maps to Zao/Zou (SAMN36419342; SRA Sample SRS18315171), but the three original field samples and their village origins remain unresolved. (ASM-017-ZAO; SRC-039–042, SRC-079; see [sequencing accession crosswalk](sequence-accession-crosswalk.md))
- **Hmar Zu** in southern Assam; the public cohort label `HM` maps to Hmar Zu (SAMN36419340; SRA Sample SRS18315169), but the three original field samples and their village origins remain unresolved. Broad cultural-region references must not be mistaken for verified production sites. (ASM-018-HZU; SRC-039–043, SRC-079; see [sequencing accession crosswalk](sequence-accession-crosswalk.md))
- **Garo Chu**: the 2016 Kokrajhar field study lists Chu as Garo and describes Wansi starter, a dekeli bamboo sieve and roughly one-week fermentation, but it does not map that recipe to a specific surveyed village. Chubok, Chubitchi and Su remain distinct lexical leads pending community confirmation. (ASM-022-CHU; SRC-047, SRC-054–057, SRC-075–077)
- **Mech Kachari Haaz/Photika/Jau**: Jou has better preparation-level support than the other names, but exact Assam village attribution and the mapping between drink names and starter names remain unresolved. (ASM-GAP-044; SRC-062–064, SRC-073–074)

### 3. Name-list or identity-boundary leads — not ready for new canonical records

The archive appropriately keeps these unresolved instead of treating a tourism listing or similar spelling as proof of a distinct drink:

- Hajang **Jatha Kasa/Ruhi** (ASM-GAP-038)
- Rabha **Matha Mod/Roshi Mod** in relation to Jonga-mod and subgroup-specific drinks (ASM-GAP-039)
- Tai-Ahom **Luk-Lau/Nam-Lau/Lao-pani** in relation to Xajpani/Koloh pani/Haj pani (ASM-GAP-040)
- Sonowal Kachari **Rochi Mod** in relation to Rohi/Rohi Modh (ASM-GAP-042)
- Garo **Chu/Su/Chubok/Chubitchi** (ASM-GAP-043)
- Mech Kachari **Haaz/Photika/Jau** and starter-term mappings (ASM-GAP-044)

These are important research targets, but adding canonical records before the identity and locality evidence is strong enough would make the archive look more complete while making it less reliable.

## Geographic footprint: what can and cannot be concluded

The current place register includes evidence leads across Upper Assam, central Assam, the BTR/Lower Assam area, Karbi Anglong, and southern Assam. Kokrajhar has the largest concentration of place rows, driven in part by detailed Bodo beverage work. This is an **evidence-density observation**, not proof that Kokrajhar has the most beverage diversity or that underrepresented districts have no traditions.

The raw district-field labels in the CSV cannot be compared directly with an official district count: some rows combine multiple districts into one regional label, and some are unresolved or study-scope labels rather than administrative districts. A proper district-coverage matrix still needs to normalize current and historical district names, distinguish present-day boundaries from older study geography, and mark each district as:
1. named village / direct field evidence;
2. district-level fieldwork only;
3. community or regional association only;
4. no source located yet; or
5. not assessed.

**Absence from this archive must not be interpreted as absence of a beverage tradition.**

## Highest-value next work

1. **Normalize the geography first.** Build a district crosswalk for all Assam rows, including historical names, combined regional labels, current district names and uncertain village spellings. Resolve the printed “Jalpaiguri” entry rather than silently correcting it.
2. **Extract locality details from existing studies before broadening the bibliography.** Prioritize the ten-village Chaodang study (village names remain absent from the accessible record), Mising village-level source comparisons, the six-district Tai-Ahom starter studies, Karbi rural fieldwork, and Bodo/Rabha/Ahom source supplements.
3. **Separate historical documentation from present-day practice.** For older fieldwork, record year, locality and what was actually observed; do not imply that the practice remains common today.
4. **Prioritize low-geographic-confidence records.** Haria, Zao/Zou, Hmar Zu, Sepa, Black Rohi Modh, Garo Chu and Mech Kachari names need exact locality/community attribution or an explicit “not available” result. The new Tiwa Bakhor inventory also needs taxonomic reconciliation before any normalized plant-name analysis (ASM-GAP-049; SRC-078).
5. **Continue identity-boundary research without premature record creation.** Keep Chu/Su/Chubitchi, Luk-Lau/Xajpani, Rochi/Rohi and Haaz/Photika/Jau unresolved until suitable language, process and community evidence is found.
6. **Use community-led verification.** When direct fieldwork becomes possible, ask permission, preserve preferred local names, document who provided each claim and avoid publishing restricted ceremonial knowledge.

## Exit criteria before moving away from Assam

Do not use “complete” to mean every drink has been found. Instead, move to the next state only after the archive has a transparent, reproducible coverage baseline:

- [ ] All Assam beverage records have a source-backed identity statement and explicit geographic confidence.
- [ ] The place register has a normalized district crosswalk and no unreviewed combined/unresolved administrative labels.
- [ ] Every named village is traceable to a source and evidence type; applicant addresses and broad study regions are not presented as production villages.
- [ ] Every current open gap has a next action and a reason it remains open.
- [ ] A district/community search log records areas searched, evidence found, and areas where no reliable source was located.
- [ ] High-priority name collisions are either resolved with appropriate evidence or explicitly retained as unresolved.

**Recommendation:** The geography matrix, 22-record desk review and grouped district search pass are now in place. Do not call Assam exhaustive; finish the release note and verify the final CI/Pages runs, then treat this as a transition-ready baseline with clearly listed long-term gaps.


## District-label normalization follow-up

The working crosswalk is documented in [`district-crosswalk.md`](district-crosswalk.md), and the current 86-row Assam place register has been reviewed in [`geography-normalization-audit.md`](geography-normalization-audit.md). The 22-record desk review is in [`beverage-record-closeout-review.md`](beverage-record-closeout-review.md); it confirms source-ID resolution and records process/name risks, but is not a full-text re-verification of every cited claim. The 35-district archive-presence baseline is now published in [`district-community-coverage-matrix.md`](district-community-coverage-matrix.md) with the row-level CSV at [`data/assam_district_coverage_matrix.csv`](../../data/assam_district_coverage_matrix.csv). The targeted district search outcomes and ten remaining no-row districts are recorded in [`district-search-log.md`](district-search-log.md). The proposed transition-ready state baseline and final workflow gate are recorded in [`assam-state-baseline-release.md`](assam-state-baseline-release.md). It identifies combined southern Assam labels, the Tiwa study's Nagaon/Morigaon mapping issue, the unresolved “Jalpaiguri” place-name in a Kokrajhar-area paper, and rules for preserving source-era wording. This matrix records archive presence and administrative normalization; it does not upgrade any locality beyond the evidence in its source.

## Transition plan and completion estimate (2026-10-23)

“Assam complete” means **transition-ready baseline**, not an exhaustive census and not that all research gaps are closed. A state with living, changing traditions cannot responsibly be certified exhaustive from published sources alone.

### Minimum transition gate

The archive can move to the next state once the following repository-level checks pass:

- [x] **Integrity:** latest CSV validation passed after the current matrix and source-register changes; source and beverage references resolve; new audit files are indexed.
- [x] **Geography:** the 35-district matrix maps archive evidence to current administrative names or explicitly labels combined/unresolved geography. Raw source-era locality strings remain preserved.
- [x] **Record review:** all 22 Assam beverage records received a desk-review pass for identity, process classification, source attribution, evidence level and geographic confidence. This is not field verification or full-text revalidation of every claim.
- [x] **High-priority collisions:** major naming/process conflicts are either supported by source evidence or explicitly retained as unresolved with next actions.
- [x] **Coverage log:** the 35-district archive-presence matrix and grouped district search log are published; ten districts still have no relevant place row in the current archive, with next actions recorded.
- [x] **Release note:** [`assam-state-baseline-release.md`](assam-state-baseline-release.md) records scope, counts, known blind spots and open gaps.

### Practical estimate

The geography normalization, beverage-record desk review, district search log and release note are complete. Archive validation passed and the latest GitHub Pages deployment succeeded. **The repository-level transition gate is passed, but Assam is not exhaustive and remains open for evidence updates.** Continue Assam research until you explicitly choose to begin the next state; do not interpret this baseline as a complete census.

Author replies, new fieldwork, voucher-label access and community confirmation can remain long-term open gaps after transition, provided they are clearly documented and not represented as resolved. The next state may begin now; Assam remains an updateable archive with unresolved questions clearly documented.

