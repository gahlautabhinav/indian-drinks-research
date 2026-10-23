# Indian Traditional Beverages Research Archive

> **[Open the live research dashboard](https://gahlautabhinav.github.io/indian-drinks-research/)** — browse the archive's state and beverage research dossiers.

[Repository](https://github.com/gahlautabhinav/indian-drinks-research) · [Live dashboard](https://gahlautabhinav.github.io/indian-drinks-research/)

A source-led archive of India's traditional alcoholic beverage heritage, tracking state, district and village evidence where available.

## Research principles
- Separate documented facts, research leads, and unresolved questions.
- Every material factual claim should link to one or more source IDs.
- Do not infer village-level production from a state-level association or an applicant address alone.
- Do not treat alternate spellings as separate beverages until synonym/variant status is assessed.
- Distinguish fermented beverages from distilled spirits and from modern commercial products.
- Record current practice separately from historical documentation.
- Respect community knowledge; do not assume restricted ceremonial knowledge is public.
- Record uncertainty and source limitations instead of filling gaps with guesses.

## Data files
- `data/beverages.csv` — canonical beverage register
- `data/places_coverage.csv` — state/district/village leads and coverage status
- `data/communities.csv` — community associations and cultural context
- `data/production_methods.csv` — source-specific process descriptions
- `data/cultural_practices.csv` — documented cultural contexts
- `data/research_gaps.csv` — questions and next research actions
- `sources/source_register.csv` — source metadata and limitations
- `research/assam/judima.md` — Judima dossier updated with historical North Cachar Hills sources SRC-097 and SRC-098, preserving unresolved beverage-name boundaries.
- `research/assam/judima.md` — initial dossier for Judima
- `research/assam/apong-mising.md` — Apong forms among Mising communities.
- `research/assam/sujen-deori.md` — Sujen among Deori communities.
- `research/arunachal-pradesh/nyishi-opo.md` — Nyishi Opo rice wine, including unresolved Tisar/Kecha/Adak labels and sample-locality gaps.
- `research/arunachal-pradesh/apong-ennog-opo.md` — comparative dossier on Apong, Ennog and Nyishi Opo; separates source-specific methods and keeps product-to-village attribution unresolved.
- `research/manipur/thadou-kuki-anthom.md` — Thadou-Kuki Anthom, Chol starter and the reported aning liquid fraction.

## Evidence labels
- **Well documented:** supported by credible sources, within the scope stated.
- **Documented lead:** a source identifies a lead but more corroboration or geographic precision is needed.
- **Provisional:** requires further verification.
- **Unverified:** not yet supported by a suitable source.

Geographic confidence is tracked separately from beverage identity confidence.

## Updating this archive
Use stable IDs. Add new records rather than duplicating records for spelling variants. Preserve source URLs and record the review date. If correcting a record, explain the correction in the commit message. Run `python scripts/validate_archive.py` before committing CSV changes; GitHub Actions also runs the validator on relevant pushes and pull requests.

## Scope
The archive began with Assam and is now expanding state by state; Union Territories will be tracked separately. Non-Assam records use state-specific IDs and keep unknown localities explicit rather than guessing.
- `research/assam/karbi-hor.md` — Hor-alank and Hor-arak among Karbi communities.
- `research/assam/rabha-jonga-mod.md` — Jonga-mod / Choko among Rabha communities, with cross-border evidence labelled.

- `research/assam/tai-ahom-xajpani.md` — Xajpani / Xaj pani / Koloh pani among Tai-Ahom communities, with starter-culture and locality evidence.
- `research/assam/bodo-jou.md` — Bodo Jou tradition, including Jou Gishi, Maibra Jou Bidwi, Joufinai and Jou Gwran, with GI, starter-culture and locality evidence.
- `research/assam/chaodang-saj-laopani.md` — Chaodang Saj/Laopani in Jorhat district, with village-level gaps retained.
- `research/assam/tiwa-zu-chu.md` — Tiwa Zu/Chu and Bakhor starter culture, with locality and product-boundary uncertainties.
- `research/assam/tea-tribe-haria.md` — Tea-tribe Haria in southern Assam, with Dabai/Dawai and village-level uncertainties retained.
- `research/assam/zeme-nao-zao-zou.md` — Zeme Naga Zao/Zou, distinguishing related names and possible filtered/distilled subtypes.
- `research/assam/hmar-zu.md` — Hmar Zu and Chol starter culture in southern Assam, separate from Tiwa Zu/Chu and Zeme Naga Zao/Zou.
- `research/assam/sonowal-kachari-rohi-sepa.md` — Sonowal Kachari Rohi and Sepa, plus a provisional Black Rohi Modh variant lead from Pukia, Dhemaji; community identity and product boundary remain unresolved.
- `research/assam/garo-chu.md` — provisional Garo Chu record; Assam village distribution and its relationship to Su/Meghalaya Chubitchi remain unresolved.
- `research/assam/hajang-jatha-kasa-ruhi.md` — unresolved Hajang naming lead; separates beverage-name collisions and avoids creating unsupported canonical records.
- `research/assam/mech-kachari-haaz-photika-jau.md` — provisional Mech Kachari naming lead; documents the Jau/Photika attribution discrepancy and keeps product identities unresolved.


- `research/assam/coverage-audit.md` — repository-level Assam coverage audit, evidence tiers, geographic limitations and exit criteria before moving to another state.
- `research/assam/beverage-record-closeout-review.md` — all 22 Assam beverage records checked for source-reference integrity, geographic confidence, process/name risks and close-out actions.
- `data/assam_district_coverage_matrix.csv` — 35-district archive-presence matrix with explicit evidence classes, linked place/beverage/source IDs and next actions.
- `research/assam/district-community-coverage-matrix.md` — methodology, current administrative name normalization, 10 districts with no relevant place row, and next search-log actions.
- `research/assam/district-search-log.md` — grouped search queries, district-level leads found, ten districts still lacking a relevant archive place row, and follow-up actions.
- [SRC-095 systematic review screening note](research/assam/src-095-systematic-review-screen.md) — preview-level screening of the 2026 Assam fermented-rice-beverage review, with a verified four-source reference crosswalk (SRC-096–SRC-099); full-text and inclusion-list limits retained.
- `research/assam/assam-state-baseline-release.md` — release candidate for the transition-ready Assam baseline, with counts, known limitations and final CI/Pages gate.
- `research/assam/geography-normalization-audit.md` — refreshed 84-row Assam place-register audit, raw district-label counts, priority geographic exceptions and safe normalization rules.
- [Assam archive integrity audit](research/assam/integrity-audit.md) — current CSV row counts, schema and reference validation, repaired source-register issue, and remaining evidence-quality risks.
- [Southern Assam sample audit](research/assam/southern-assam-sample-audit.md) — full-text review of the 2024 and 2026 multi-community studies and limits of village-level attribution.
- [Southern Assam sequencing accession crosswalk](research/assam/sequence-accession-crosswalk.md) — verified mapping of five public BioSample/SRA Sample records to Haria, Judima, Zao/Zou, Hor Alank and Hmar Zu; original-sample pooling and locality limits remain explicit.
- [Assam claim-level audit — tranche 1](research/assam/claim-level-audit-01.md) — nine beverage records reviewed against recent Mising, Bodo and Rabha/Ahom sources, with claim-level limitations preserved.
- [Bodo GI provenance audit](research/assam/bodo-gi-provenance-audit.md) — official registry metadata, authorized-user address caveats, and document-level access gaps for GI applications 968–970.
- [Mising Apong locality audit](research/assam/mising-apong-locality-audit.md) — ten named Jorhat study villages and a 2026 Majuli study, with beverage-to-village attribution left unresolved where the source does not map it.
- `research/assam/district-crosswalk.md` — working normalization rules for combined, historical and unresolved Assam district labels.


- [SRC-091 Table 1 audit](research/assam/src-091-table1-audit.md) — row-level table/prose discrepancies, life-form counts and FL metric cautions.
- [SRC-091 taxonomic reconciliation](research/assam/src-091-taxonomic-reconciliation.md) — preliminary POWO crosswalk, family conflicts and pending specimen-level verification.
- `data/src091_table1_transcription.csv` — 41 Table 1 rows preserved as published.
- `data/src091_taxonomic_reconciliation.csv` — separate 41-row taxonomic crosswalk; pending records are not treated as errors.


- [SRC-091 taxonomic reconciliation](research/assam/src-091-taxonomic-reconciliation.md) — first-pass POWO crosswalk for all 41 Table 1 names; nomenclatural conflicts and voucher-level limitations remain explicit.
- `data/src091_table1_transcription.csv` — 41 Table 1 rows preserved as published.
- `data/src091_taxonomic_reconciliation.csv` — separate 41-row POWO crosswalk, with source names retained and taxonomic treatment differences flagged.
- `data/src091_voucher_audit.csv` — checks 41 printed voucher identifiers; flags ST/EES/2024/015, which appears against two taxa.
- [SRC-091 voucher audit](research/assam/src-091-voucher-audit.md) — flags the repeated ST/EES/2024/015 identifier and defines specimen-verification steps without guessing a correction.

## Dashboard

The repository includes **Fieldnotes**, a static research dashboard for browsing beverage records, linked evidence, source-specific production methods, cultural-practice notes, geographic coverage and open research gaps. The interface loads its data from the CSV files in this repository and the dossiers from `research/`; the CSV/Markdown archive remains the source of truth.

### Publish with GitHub Pages

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. The workflow at `.github/workflows/pages.yml` deploys the static site from the repository root.
4. Open the Pages URL shown in Settings → Pages. For this repository it will normally be `https://gahlautabhinav.github.io/indian-drinks-research/`.

The dashboard requires no Node build step or backend. It uses browser-side CSV parsing and the Marked library CDN for Markdown dossier rendering. The first deployment runs after Pages is configured to use GitHub Actions; later pushes to `main` trigger deployment automatically.


- [Assam cross-community study source-quality audit](research/assam/cross-community-2026-source-quality-audit.md) — claim-scope limits and internal numerical checks for SRC-091; preserves district-vs-village distinction and flags the FL interpretation and life-form-count discrepancy.

- [SRC-091 Table 1 audit](research/assam/src-091-table1-audit.md) — compares the 41-row publisher table against the prose life-form counts and flags the Drymaria/Pouzolzia naming conflicts and FL-scale issue.
- [SRC-091 Table 1 transcription](data/src091_table1_transcription.csv) — source-faithful 41-row transcription of community labels, voucher strings, scientific names, family/life-form labels, plant parts, CKSI and FL values.

## Research datasets

- [`data/lab_profiles.csv`](data/lab_profiles.csv) — sample-level laboratory measurements (alcohol, DPPH, ABTS and total phenolic content) transcribed from the 2019 Assam rice-beer study (`SRC-087`), with reported SEM and caveats.
- [`data/epop_plant_inventory_majuli_2026.csv`](data/epop_plant_inventory_majuli_2026.csv) — 2026 Majuli E’pob plant inventory transcription; source spellings and uncertainty retained.
- [`data/epop_plant_taxon_reconciliation.csv`](data/epop_plant_taxon_reconciliation.csv) — 48-row Majuli-to-Sivasagar name reconciliation with partial POWO accepted-name, family, lookup-status and authority-URL fields; 21 rows have a verified or qualified lookup status, and unchecked taxa remain explicitly unresolved.
- [`data/epop_taxonomy_quality_audit.csv`](data/epop_taxonomy_quality_audit.csv) — source-table duplicate and cross-study taxonomy quality flags, including verified POWO family conflicts for *Hydrocotyle sibthorpioides*, *Vitex negundo* and *Scoparia dulcis*.
- [`data/epop_cross_site_comparison.csv`](data/epop_cross_site_comparison.csv) — 48-row cross-site comparison of Majuli and Sivasagar plant names, family labels and uncertainty.
- [`data/epop_plant_inventory_sivasagar_2023.csv`](data/epop_plant_inventory_sivasagar_2023.csv) — 31-row Sivasagar ÉPOP plant inventory transcribed from Mili & Sundriyal (2023).

- [SRC-091 quantitative-metrics audit](research/assam/src-091-quantitative-metrics-audit.md) — documents the life-form count mismatch, FL formula/scale inconsistency, CKSI reproducibility limits, and specific author clarification questions; no source values are silently changed.

- [SRC-091 author clarification request](research/assam/src-091-author-clarification-request.md) — a draft-only, respectful query about voucher records, life-form counts, FL calculations and CKSI reproducibility; no message has been sent.

- [SRC-061 locality and claim-level audit](research/assam/src-061-locality-and-claim-audit.md) — records the six named study districts, the 32-village/202-respondent scope, and strict limits on district-by-beverage and village-level inference.
- [SRC-095 systematic-review screening note](research/assam/src-095-systematic-review-screen.md) — records what the 2026 review abstract supports and what remains unverified pending full-text review.
