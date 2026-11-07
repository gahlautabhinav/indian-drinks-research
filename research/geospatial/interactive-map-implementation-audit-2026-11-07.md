# Interactive administrative map implementation audit — 2026-11-07

## Decision and implementation

The dashboard now uses the **LivingAtlas/IND_AdminBoundary** ArcGIS REST map service, whose service metadata credits **Survey of India, Esri India** and exposes three polygon layers: Country (0), State (1), and District (2). The associated ArcGIS item is described as India administrative boundaries, Release 2026; its item description states that data up to district level is provided by Survey of India.

- Service: https://livingatlas.esri.in/server/rest/services/LivingAtlas/IND_AdminBoundary/MapServer
- State polygon layer: https://livingatlas.esri.in/server/rest/services/LivingAtlas/IND_AdminBoundary/MapServer/1
- District polygon layer: https://livingatlas.esri.in/server/rest/services/LivingAtlas/IND_AdminBoundary/MapServer/2
- Item: https://www.arcgis.com/home/item.html?id=ee1dfe59e66d48829d95bd00de6816bd
- Survey of India national political map catalogue: https://surveyofindia.gov.in/pages/political-map-of-india
- Survey of India ABDB catalogue: https://surveyofindia.gov.in/pages/administrative-boundary-data-base-abdb-

## Metadata inspected

- State and District are polygon feature layers.
- State fields include `state` and `country`; District fields include `district`, `state`, and `country`.
- Both layers advertise JSON, GeoJSON and PBF query formats and support query operations.
- Service spatial reference: Web Mercator (WKID 102100 / 3857).
- Service full extent in Web Mercator: X 7,583,508.4975 to 10,843,809.3651; Y 753,607.8429 to 4,451,428.4398. Approximate geographic extent after inverse Web Mercator: 68.12°E–97.41°E, 6.75°N–37.09°N.
- The full extent is a metadata bounding rectangle, not proof that every political claim or boundary segment is represented exactly as the 2026 SoI political map.

## Dashboard behaviour implemented

- Leaflet map occupies the main geographic-intelligence panel.
- India view loads state/UT polygons; clicking a polygon queries and displays the selected state's district polygons.
- Districts with place rows in the archive are highlighted; districts without a linked place row remain muted.
- Clicking a district selects it in the existing district explorer and reveals source-linked beverage/locality records where available.
- “All India” returns to the national state view.
- Existing selectors and district list remain as accessible alternatives.
- Map labels, source attribution, responsive sizing and keyboard-accessible buttons are included.
- Geometry is requested as GeoJSON in EPSG:4326 from the hosted service; the service itself stores/advertises Web Mercator geometry.

## Important limitations

1. This is an interactive research-navigation map, not a legal cadastral or survey product.
2. The hosted service is a runtime dependency; the map will show an error state if the service is unavailable or changes its access policy.
3. The service item is labelled Release 2026 and credits SoI / Esri India, but its layer metadata does not independently expose a complete boundary-vintage statement for every feature. The SoI ABDB download remains the preferred archival geometry source when it can be extracted and verified.
4. District archive highlighting means a relevant place row exists in this research archive. It does not mean the beverage is produced throughout that district.
5. A muted district means no linked place row is currently present; it must never be interpreted as absence of a tradition.
6. Non-Assam state district coverage remains incomplete in the research archive. The geometry is visible nationally, but research coverage is not complete nationally.
7. The service full extent is consistent with a broad India extent (approximately 68.12°E–97.41°E and 6.75°N–37.09°N), but final cartographic review against the SoI 2026 political map is still required before describing the display as a definitive political map.

## Files changed

- `index.html`: Leaflet assets, interactive map container, service attribution and revised boundary note.
- `assets/app.js`: GeoJSON retrieval, India state view, state-to-district drilldown, archive coverage styling and district selection.
- `assets/style.css`: dark theme map controls, attribution, tooltips and responsive layout.
- `sources/source_register.csv`: SRC-159.

## Verification status

- JavaScript syntax check: PASS (V8 parser).
- GitHub Pages workflow: pending after commit.
- Live browser rendering and live service CORS/query response: not independently verified in this environment; verify on the deployed site.
- District-name crosswalk against Assam's 35-row archive matrix: visual/data check still required. The map layer may use a different district naming convention; do not assume exact string equality without checking.

