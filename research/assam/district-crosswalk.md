# Assam District Crosswalk

Updated 2026-10-23. This is a working normalization note for the current archive, not an official gazetteer. Keep source-era district names and original locality spellings in the place register; a normalized label must not upgrade a regional lead into village-level production evidence.

## Labels to retain

The following single-district labels can remain as written for current analysis: Dima Hasao, Sivasagar, Dhemaji, Majuli, Lakhimpur, Tinsukia, Dibrugarh, Karbi Anglong, Goalpara, Jorhat, Golaghat, Kamrup, Kamrup Metropolitan, Kokrajhar, Baksa and Bongaigaon.

Keep Kamrup and Kamrup Metropolitan distinct. Preserve historical locality wording such as Sadiya. A starter-culture sample does not prove that every finished beverage listed against that place is currently produced there.

## Historical Karbi Anglong / current West Karbi Anglong

- Teron and Borthakur (2014; SRC-038) studied Hill-Tiwa ethnobotany in the Hamren subdivision of the then Karbi Anglong district. The Assam government identifies West Karbi Anglong as the district formed from the former Karbi Anglong district's Hamren subdivision, with Hamren as headquarters. For study-area normalization, use **West Karbi Anglong (source-era district: Karbi Anglong)** while retaining the original historical label. This is a district-level normalization, not proof of beverage production in each named village. Official reference: https://westkarbianglong.assam.gov.in/portlets/district-profile-of-west-karbi-anglong (SRC-092 is the statewide administrative directory; SRC-100 is the specific official West Karbi Anglong district profile).

## Labels needing review

- **Kokrajhar (locality identity unresolved):** normalize the district to Kokrajhar for analysis only. The 2025 paper prints “Jalpaiguri”; keep the village unresolved until the original article/map or a reliable local source clarifies it. Do not silently correct the name.
- **Nagaon:** the Tiwa study spans Nagaon and Morigaon. Do not count this as a confirmed Nagaon-only production site until each locality is mapped from the full text.
- **Cachar; Hailakandi; Karimganj (formerly Sribhumi):** combined southern Assam label. Split into districts only when sample metadata supports it. Preserve Karimganj where that is the source's original wording; use Sribhumi only as a normalized current-name note.
- **Cachar; Hailakandi; Karimganj (southern Assam study region):** same treatment; exact sample district remains unknown in the reviewed source record.
- **Cachar; Karimganj (renamed Sribhumi); Dima Hasao (broader Hmar cultural-region lead):** mixed sample-region and cultural-region label. Do not count Dima Hasao as a confirmed Hmar Zu sample district.
- **Not established in reviewed abstract:** leave district unresolved. Do not infer it from community distribution or another beverage's locality.

## Register count reconciliation (2026-10-23)

A fresh CSV-aware parse of `data/places_coverage.csv` finds 90 rows total, of which 86 are tagged Assam. Those Assam rows contain 31 distinct raw district-field strings and 36 tokens when semicolon-separated strings are split. These are raw-label counts only: they are not counts of official districts or unique localities. See [geography normalization audit](geography-normalization-audit.md) for the priority exception register and treatment rules.

## Interpretation rules

1. Kokrajhar has the densest place-row cluster, largely due to Bodo beverage research. This is evidence density in the archive, not a ranking of actual beverage diversity.
2. Separate named-village observations, district-level fieldwork, regional sample cohorts, starter-culture sampling, GI applicant addresses and unresolved leads.
3. Keep original district text in the source register and add normalized geography as a separate field in any future data update.
4. Count unique named localities separately from district-level or multi-village study rows.
5. Do not infer that an unrepresented district lacks traditional beverages.

## Next actions

- Extract locality tables for the Tiwa study and southern Assam sample studies.
- Resolve the “Jalpaiguri” place-name through the original article and local corroboration.
- Add separate normalized-district and evidence-geography fields to the place register in a future schema update.
