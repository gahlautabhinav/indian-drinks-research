# Indian Traditional Beverages Research Archive

A source-led, district-level archive of India's traditional alcoholic beverage heritage.

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
- `research/assam/judima.md` — initial dossier for Judima
- `research/assam/apong-mising.md` — Apong forms among Mising communities.
- `research/assam/sujen-deori.md` — Sujen among Deori communities.

## Evidence labels
- **Well documented:** supported by credible sources, within the scope stated.
- **Documented lead:** a source identifies a lead but more corroboration or geographic precision is needed.
- **Provisional:** requires further verification.
- **Unverified:** not yet supported by a suitable source.

Geographic confidence is tracked separately from beverage identity confidence.

## Updating this archive
Use stable IDs. Add new records rather than duplicating records for spelling variants. Preserve source URLs and record the review date. If correcting a record, explain the correction in the commit message.

## Scope
The project starts with Assam and will expand state by state, with Union Territories tracked separately.
- `research/assam/karbi-hor.md` — Hor-alank and Hor-arak among Karbi communities.
- `research/assam/rabha-jonga-mod.md` — Jonga-mod / Choko among Rabha communities, with cross-border evidence labelled.

- `research/assam/tai-ahom-xajpani.md` — Xajpani / Xaj pani / Koloh pani among Tai-Ahom communities, with starter-culture and locality evidence.
- `research/assam/bodo-jou.md` — Bodo Jou tradition, including Jou Gishi, Maibra Jou Bidwi, Joufinai and Jou Gwran, with GI, starter-culture and locality evidence.
- `research/assam/chaodang-saj-laopani.md` — Chaodang Saj/Laopani in Jorhat district, with village-level gaps retained.
- `research/assam/tiwa-zu-chu.md` — Tiwa Zu/Chu and Bakhor starter culture, with locality and product-boundary uncertainties.
- `research/assam/tea-tribe-haria.md` — Tea-tribe Haria in southern Assam, with Dabai/Dawai and village-level uncertainties retained.
- `research/assam/zeme-nao-zao-zou.md` — Zeme Naga Zao/Zou, distinguishing related names and possible filtered/distilled subtypes.
- `research/assam/hmar-zu.md` — Hmar Zu and Chol starter culture in southern Assam, separate from Tiwa Zu/Chu and Zeme Naga Zao/Zou.
- `research/assam/sonowal-kachari-rohi-sepa.md` — Sonowal Kachari Rohi and Sepa, with Sepa-specific process and locality gaps retained.


## Dashboard

The repository includes **Fieldnotes**, a static research dashboard for browsing beverage records, linked evidence, source-specific production methods, cultural-practice notes, geographic coverage and open research gaps. The interface loads its data from the CSV files in this repository and the dossiers from `research/`; the CSV/Markdown archive remains the source of truth.

### Publish with GitHub Pages

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. The workflow at `.github/workflows/pages.yml` deploys the static site from the repository root.
4. Open the Pages URL shown in Settings → Pages. For this repository it will normally be `https://gahlautabhinav.github.io/indian-drinks-research/`.

The dashboard requires no Node build step or backend. It uses browser-side CSV parsing and the Marked library CDN for Markdown dossier rendering. The first deployment runs after Pages is configured to use GitHub Actions; later pushes to `main` trigger deployment automatically.
