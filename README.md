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
