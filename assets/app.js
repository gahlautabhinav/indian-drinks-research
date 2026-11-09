(() => {
  "use strict";
  const OWNER = "gahlautabhinav/indian-drinks-research";
  const RAW = "https://raw.githubusercontent.com/" + OWNER + "/main/";
  const ADMIN_MAP = "https://livingatlas.esri.in/server/rest/services/LivingAtlas/IND_AdminBoundary/MapServer";
  const $ = (s) => document.querySelector(s);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const dossierPaths = {
    "ASM-001-JUD": "research/assam/judima.md",
    "ASM-002-NOG": "research/assam/apong-mising.md",
    "ASM-003-POR": "research/assam/apong-mising.md",
    "ASM-004-SUJ": "research/assam/sujen-deori.md",
    "ASM-005-HAL": "research/assam/karbi-hor.md",
    "ASM-006-HAR": "research/assam/karbi-hor.md",
    "ASM-007-JON": "research/assam/rabha-jonga-mod.md",
    "ASM-008-XAJ": "research/assam/tai-ahom-xajpani.md",
    "ASM-009-JOU": "research/assam/bodo-jou.md",
    "ASM-010-JGI": "research/assam/bodo-jou.md",
    "ASM-011-JBD": "research/assam/bodo-jou.md",
    "ASM-012-JFI": "research/assam/bodo-jou.md",
    "ASM-013-JGW": "research/assam/bodo-jou.md",
    "ASM-014-CHS": "research/assam/chaodang-saj-laopani.md",
    "ASM-015-TZU": "research/assam/tiwa-zu-chu.md",
    "ASM-016-HAR": "research/assam/tea-tribe-haria.md",
    "ASM-017-ZAO": "research/assam/zeme-nao-zao-zou.md",
    "ASM-018-HZU": "research/assam/hmar-zu.md",
    "ASM-019-ROH": "research/assam/sonowal-kachari-rohi-sepa.md",
    "ASM-020-SEP": "research/assam/sonowal-kachari-rohi-sepa.md",
    "ASM-021-BRM": "research/assam/sonowal-kachari-rohi-sepa.md",
    "ASM-022-CHU": "research/assam/garo-chu.md",
    "ASM-023-HTC": "research/assam/hill-tiwa-chu.md",
    "ASM-026-NDJ": "research/assam/nduijao-nduiyi-src-109.md",
    "ASM-031-LKL": "research/assam/luk-lao-demou-locality-and-identity-audit.md",
    "ARP-001-OPO": "research/arunachal-pradesh/nyishi-opo.md",
    "MNP-001-ANT": "research/manipur/thadou-kuki-anthom.md"
  };
  const dataFiles = {
    beverages: "data/beverages.csv", places: "data/places_coverage.csv", communities: "data/communities.csv",
    sources: "sources/source_register.csv", methods: "data/production_methods.csv",
    practices: "data/cultural_practices.csv", gaps: "data/research_gaps.csv", districts: "data/assam_district_coverage_matrix.csv"
  };

  const state = {
    beverages: [], places: [], communities: [], sources: [], methods: [], practices: [], gaps: [], districts: [],
    level: "india", geoState: "", geoDistrict: "", selected: null, tab: "overview",
    map: null, stateLayer: null, districtLayer: null, latestReview: "", recentCutoff: ""
  };

  /* ---------- utilities ---------- */
  function parseCSV(text) {
    const rows = []; let row = [], field = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i], next = text[i + 1];
      if (quoted) { if (c === '"' && next === '"') { field += '"'; i++; } else if (c === '"') quoted = false; else field += c; }
      else if (c === '"') quoted = true;
      else if (c === ",") { row.push(field); field = ""; }
      else if (c === "\n") { row.push(field.replace(/\r$/, "")); if (row.some(v => v !== "")) rows.push(row); row = []; field = ""; }
      else field += c;
    }
    if (field !== "" || row.length) { row.push(field.replace(/\r$/, "")); if (row.some(v => v !== "")) rows.push(row); }
    if (!rows.length) return [];
    const headers = rows.shift().map(h => h.replace(/^﻿/, ""));
    return rows.map(values => Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ""])));
  }
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const splitIDs = (s) => String(s || "").split(";").map(v => v.trim()).filter(Boolean);
  const shortText = (s, n = 160) => { s = String(s || ""); return s.length > n ? s.slice(0, n - 1).trim() + "…" : s; };
  const githubFile = (p) => "https://github.com/" + OWNER + "/blob/main/" + p;
  const cell = (v, cls = "") => v ? '<td class="' + cls + '">' + esc(v) + "</td>" : '<td class="blank ' + cls + '"></td>';
  const num = (n) => '<td class="num">' + (n ? n : '<span class="blank"></span>') + "</td>";
  const byBeverage = (rows, id) => rows.filter(r => splitIDs(r.Beverage_ID).includes(id) || splitIDs(r.Beverage_IDs).includes(id));
  const bevById = (id) => state.beverages.find(b => b.Beverage_ID === id);
  const bevName = (id) => { const b = bevById(id); return b ? b.Beverage_Name : id; };

  /* Evidence as hatch density. Derived from the record's free-text Evidence_Level. */
  function evidenceClass(b) {
    const t = String(b.Evidence_Level || "").toLowerCase();
    if (!t || /not assessed|unknown|not specified|unverified/.test(t)) return "outlined";
    if (/provisional/.test(t)) return "dotted";
    if (/well documented|well-documented|confirmed/.test(t)) return "solid";
    if (/documented/.test(t)) return "hatched";
    return "outlined";
  }
  const evidenceWord = { solid: "Well documented", hatched: "Documented", dotted: "Provisional", outlined: "Unverified / not classified" };
  function nameConflict(b) {
    return /unresolved|do not merge|not merge|collision|boundary/i.test(b.Variant_or_Synonym_Notes || "");
  }
  function hatch(b, withLabel = true) {
    const cls = evidenceClass(b), crossed = nameConflict(b);
    const swatch = '<i class="hatch ' + (crossed ? "crossed" : cls) + '" title="' + esc(evidenceWord[cls] + (crossed ? "; name boundary unresolved" : "")) + '"></i>';
    return withLabel ? swatch + '<span class="ev-label">' + esc(evidenceWord[cls]) + "</span>" : swatch;
  }
  function stamp(b) { return b.Last_Reviewed && b.Last_Reviewed >= state.recentCutoff ? '<span class="stamp" title="Reviewed ' + esc(b.Last_Reviewed) + '">UPDATED</span>' : ""; }

  function page(el, html) {
    el.innerHTML = html;
    if (!reduceMotion.matches) { el.classList.remove("paging-in"); void el.offsetWidth; el.classList.add("paging-in"); }
  }

  /* ---------- load ---------- */
  async function loadData() {
    await Promise.all(Object.entries(dataFiles).map(async ([key, path]) => {
      const r = await fetch(RAW + path); if (!r.ok) throw new Error("Could not load " + path + " (" + r.status + ")");
      state[key] = parseCSV(await r.text());
    }));
    const dates = state.beverages.map(b => b.Last_Reviewed).filter(Boolean).sort();
    state.latestReview = dates[dates.length - 1] || "";
    if (state.latestReview) { const d = new Date(state.latestReview); d.setDate(d.getDate() - 14); state.recentCutoff = d.toISOString().slice(0, 10); }
    $("#rh-counts").innerHTML = "<span><b>" + state.beverages.length + "</b> beverages</span><span><b>" + state.places.length + "</b> places</span><span><b>" + state.sources.length + "</b> sources</span><span><b>" + state.gaps.filter(g => /open/i.test(g.Status)).length + "</b> open gaps</span>";
    initFilters(); renderBeverages(); renderGazetteer(); renderLedger(); initMap();
    const id = new URLSearchParams(location.search).get("id");
    if (id && bevById(id)) selectBeverage(id, false);
    else renderReaderEmpty();
  }

  /* ---------- Page I: gazetteer ---------- */
  function statesInArchive() {
    const names = new Set([...state.beverages.map(b => b.State), ...state.places.map(p => p.State)].filter(Boolean));
    return [...names].sort();
  }
  function districtRows(st) {
    if (st === "Assam" && state.districts.length) return state.districts.slice().sort((a, b) => a.District_Current_Name.localeCompare(b.District_Current_Name)).map(d => ({
      name: d.District_Current_Name, count: Number(d.Place_Row_Count || 0), cls: d.Archive_Coverage_Class || "", beverages: splitIDs(d.Beverage_IDs), communities: splitIDs(d.Communities), caveat: d.Interpretation_Caveat || "", next: d.Next_Research_Action || "", matrix: true
    }));
    const names = [...new Set(state.places.filter(p => p.State === st && p.District).map(p => p.District))].sort();
    return names.map(name => { const rows = state.places.filter(p => p.State === st && p.District === name); return {
      name, count: rows.length, cls: "Place rows present; district matrix not yet compiled for this state", beverages: [...new Set(rows.flatMap(p => splitIDs(p.Beverage_IDs)))], communities: [...new Set(rows.map(p => p.Associated_Community).filter(Boolean))], caveat: "Only districts appearing in current place rows are listed for this state.", next: "", matrix: false
    }; });
  }
  function renderCrumbs() {
    const items = [["india", "India"]];
    if (state.geoState) items.push(["state", state.geoState]);
    if (state.geoDistrict) items.push(["district", state.geoDistrict]);
    $("#crumbs").innerHTML = items.map(([lvl, label], i) => '<li><button type="button" data-level="' + lvl + '"' + (i === items.length - 1 ? ' aria-current="page"' : "") + ">" + esc(label) + "</button></li>").join("");
    $("#crumbs").querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      if (b.dataset.level === "india") goIndia();
      else if (b.dataset.level === "state") goState(state.geoState);
      $("#gazetteer").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    }));
  }
  function renderGazetteer() {
    renderCrumbs();
    const body = $("#gz-register"), title = $("#gz-register-title"), count = $("#gz-register-count");
    $("#map-back").hidden = state.level === "india";
    if (state.level === "india") {
      const sts = statesInArchive();
      title.textContent = "India · States with archive entries";
      count.textContent = sts.length + " of 36 states and union territories";
      page(body, '<table class="register"><thead><tr><th scope="col">State / UT</th><th scope="col" class="num">Districts</th><th scope="col" class="num">Place rows</th><th scope="col" class="num">Beverages</th><th scope="col" class="num">Communities</th><th scope="col" class="num">Sources</th><th scope="col" class="num">Open gaps</th><th scope="col">Coverage</th></tr></thead><tbody>' +
        sts.map(st => {
          const bev = state.beverages.filter(b => b.State === st), pl = state.places.filter(p => p.State === st), com = state.communities.filter(c => c.State === st), gp = state.gaps.filter(g => g.State === st && /open/i.test(g.Status));
          const dist = st === "Assam" && state.districts.length ? state.districts.length : new Set(pl.map(p => p.District).filter(Boolean)).size;
          const src = new Set([...bev, ...pl].flatMap(r => splitIDs(r.Source_IDs))).size;
          const cov = st === "Assam" && state.districts.length ? state.districts.filter(d => Number(d.Place_Row_Count) > 0).length + " of " + state.districts.length + " districts have a place row" : (bev.length ? "Records present; district matrix not compiled" : "Place lead only; no canonical beverage record");
          return '<tr class="row-link" data-state="' + esc(st) + '" tabindex="0"><td class="name">' + esc(st) + "</td>" + num(dist) + num(pl.length) + num(bev.length) + num(com.length) + num(src) + num(gp.length) + '<td class="em">' + esc(cov) + "</td></tr>";
        }).join("") + "</tbody></table>" +
        '<div class="gz-sub"><div class="register-head"><h2>Communities recorded</h2><span class="register-count">' + state.communities.length + '</span></div><table class="register"><thead><tr><th scope="col">Community</th><th scope="col">State</th><th scope="col">Regions, as recorded</th><th scope="col">Beverages</th></tr></thead><tbody>' +
        state.communities.slice().sort((a, b) => a.Community_Name.localeCompare(b.Community_Name)).map(c => '<tr class="row-link" data-state="' + esc(c.State) + '" tabindex="0"><td class="name">' + esc(c.Community_Name) + "</td>" + cell(c.State) + '<td class="em">' + esc(shortText(c.Districts_or_Regions, 90)) + "</td><td>" + splitIDs(c.Associated_Beverage_IDs).map(bevName).map(esc).join("; ") + "</td></tr>").join("") + "</tbody></table></div>");
      body.querySelectorAll("[data-state]").forEach(tr => bindRow(tr, () => goState(tr.dataset.state)));
      return;
    }
    const rows = districtRows(state.geoState);
    if (state.level === "state") {
      title.textContent = state.geoState + " · Districts";
      const withRows = rows.filter(r => r.count > 0).length;
      count.textContent = rows.length + " district rows · " + withRows + " with place evidence";
      page(body, '<table class="register"><thead><tr><th scope="col">District</th><th scope="col" class="num">Place rows</th><th scope="col">Beverages linked</th><th scope="col">Coverage class</th></tr></thead><tbody>' +
        rows.map(r => '<tr class="row-link" data-district="' + esc(r.name) + '" tabindex="0"><td class="name">' + esc(r.name) + "</td>" + num(r.count) + (r.beverages.length ? "<td>" + r.beverages.map(id => esc(bevName(id))).join("; ") + "</td>" : '<td class="blank"></td>') + '<td class="em">' + esc(shortText(r.cls, 110)) + "</td></tr>").join("") +
        "</tbody></table>" + (rows.length ? "" : '<p class="gz-text">No district-level place rows are recorded for this state yet.</p>'));
      body.querySelectorAll("[data-district]").forEach(tr => bindRow(tr, () => goDistrict(tr.dataset.district)));
      return;
    }
    const d = rows.find(r => r.name === state.geoDistrict) || { name: state.geoDistrict, count: 0, cls: "", beverages: [], caveat: "", next: "" };
    const places = state.places.filter(p => p.State === state.geoState && p.District === state.geoDistrict);
    const bevIds = [...new Set([...d.beverages, ...places.flatMap(p => splitIDs(p.Beverage_IDs))])];
    const bevs = bevIds.map(bevById).filter(Boolean);
    title.textContent = state.geoState + " · " + state.geoDistrict;
    count.textContent = places.length + " place rows · " + bevs.length + " beverage records";
    page(body,
      '<p class="gz-text"><b>Coverage class.</b> ' + esc(d.count === 0 ? "No place row in current archive." : (d.cls || "Place evidence recorded.")) + (d.caveat ? " " + esc(d.caveat) : "") + "</p>" +
      (d.next ? '<p class="gz-text"><b>Next action on file.</b> ' + esc(d.next) + "</p>" : "") +
      '<div class="gz-sub"><div class="register-head"><h2>Linked beverage records</h2><span class="register-count">' + bevs.length + "</span></div>" +
      (bevs.length ? '<table class="register"><thead><tr><th scope="col" class="col-id">ID</th><th scope="col">Beverage</th><th scope="col">Community</th><th scope="col" class="col-ev">Evidence</th></tr></thead><tbody>' +
        bevs.map(b => '<tr class="row-link" data-bev="' + esc(b.Beverage_ID) + '" tabindex="0"><td class="col-id">' + esc(b.Beverage_ID) + '</td><td class="name">' + esc(b.Beverage_Name) + stamp(b) + "</td>" + cell(b.Community) + "<td>" + hatch(b) + "</td></tr>").join("") + "</tbody></table>"
        : '<p class="gz-text">No beverage record is linked to a named place row in this district.</p>') + "</div>" +
      '<div class="gz-sub"><div class="register-head"><h2>Locality and study evidence</h2><span class="register-count">' + places.length + "</span></div>" +
      (places.length ? '<table class="register"><thead><tr><th scope="col" class="col-id">Place</th><th scope="col">Locality</th><th scope="col">Beverages</th><th scope="col">What the source establishes</th><th scope="col">Status</th><th scope="col">Sources</th></tr></thead><tbody>' +
        places.map(p => '<tr><td class="col-id">' + esc(p.Place_ID) + '</td><td class="name">' + esc(p.Village_or_Locality || p.Block_or_Subdistrict || p.District) + (p.Associated_Community ? "<small>" + esc(p.Associated_Community) + "</small>" : "") + "</td><td>" + splitIDs(p.Beverage_IDs).map(id => '<button type="button" class="row-btn" data-bev="' + esc(id) + '" style="display:inline;width:auto;text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--z6)">' + esc(bevName(id)) + "</button>").join("<br>") + "</td><td>" + esc(shortText(p.Evidence_for_Production_or_Consumption, 300)) + '</td><td class="em">' + esc(p.Coverage_Status) + '</td><td class="col-id">' + esc(splitIDs(p.Source_IDs).join(", ")) + "</td></tr>").join("") + "</tbody></table>"
        : '<p class="gz-text">No place row is recorded for this district. This is a search-status fact, not evidence that the district has no beverage tradition.</p>') + "</div>");
    body.querySelectorAll("[data-bev]").forEach(el => { const go = () => selectBeverage(el.dataset.bev, true); if (el.tagName === "TR") bindRow(el, go); else el.addEventListener("click", go); });
  }
  function bindRow(tr, fn) { tr.addEventListener("click", fn); tr.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } }); }
  function goIndia() { state.level = "india"; state.geoState = ""; state.geoDistrict = ""; renderGazetteer(); showIndiaMap(); }
  function goState(st) { state.level = "state"; state.geoState = st; state.geoDistrict = ""; renderGazetteer(); showDistrictMap(st); }
  function goDistrict(d) { state.level = "district"; state.geoDistrict = d; renderGazetteer(); styleDistrictSelection(); }

  /* ---------- Leaflet map: the polygon is the control ---------- */
  async function fetchAdminGeoJSON(layer, where = "1=1") {
    const params = new URLSearchParams({ where, outFields: "*", returnGeometry: "true", outSR: "4326", f: "geojson" });
    const r = await fetch(ADMIN_MAP + "/" + layer + "/query?" + params.toString());
    if (!r.ok) throw new Error("Boundary service returned " + r.status);
    const data = await r.json(); if (data.error) throw new Error(data.error.message || "Boundary service query failed");
    return data;
  }
  const Z = { z1: "#121518", z2: "#1a1d20", z3: "#23272a", z4: "#2e3337", z6: "#555b5f", z7: "#7a8084", z8: "#a3a69f", lamp: "#f2eee4" };
  function stateHasRows(name) { return state.places.some(p => p.State === name) || state.beverages.some(b => b.State === name); }
  /* The Living Atlas district layer carries pre-2016 names and boundaries; the archive uses current names. */
  const districtAliases = { "Darang": "Darrang", "Golapara": "Goalpara", "Marigaon": "Morigaon", "Sibsagar": "Sivasagar", "North Cachar Hills": "Dima Hasao", "Kamrup Metro": "Kamrup Metropolitan", "Kamrup Rural": "Kamrup", "Karimganj": "Sribhumi" };
  const archiveDistrict = (f) => districtAliases[f.properties.district] || f.properties.district || "District";
  function districtCount(name) {
    if (state.geoState === "Assam" && state.districts.length) { const m = state.districts.find(x => x.District_Current_Name === name); return Number(m?.Place_Row_Count || 0); }
    return state.places.filter(p => p.State === state.geoState && p.District === name).length;
  }
  function stateStyle(f) { const has = stateHasRows(f.properties.state); return { color: has ? Z.z8 : Z.z6, weight: has ? 1 : .6, opacity: 1, fillColor: has ? Z.z4 : Z.z1, fillOpacity: 1 }; }
  function districtStyle(f) { const d = archiveDistrict(f), n = districtCount(d), sel = d === state.geoDistrict; return sel ? { color: Z.lamp, weight: 2, opacity: 1, fillColor: Z.lamp, fillOpacity: .9 } : { color: n ? Z.z8 : Z.z6, weight: .7, opacity: 1, fillColor: n ? Z.z4 : Z.z1, fillOpacity: 1 }; }
  function initMap() {
    const el = $("#india-map"); if (!el || !window.L) { $("#map-status").textContent = "Map library unavailable; the register remains usable."; return; }
    state.map = L.map(el, { zoomControl: true, scrollWheelZoom: false, minZoom: 3, maxZoom: 10, preferCanvas: false, attributionControl: false }).setView([22.8, 82.2], 4);
    L.control.scale({ metric: true, imperial: false, position: "bottomleft" }).addTo(state.map);
    $("#map-back").addEventListener("click", goIndia);
    fetchAdminGeoJSON(1).then(data => {
      state.stateLayer = L.geoJSON(data, { style: stateStyle, onEachFeature: (f, layer) => {
        const name = f.properties.state || "State / UT", has = stateHasRows(name);
        layer.bindTooltip(name + (has ? "" : " · no archive entry"), { sticky: true, direction: "auto" });
        layer.on("mouseover", () => { if (state.level === "india") layer.setStyle({ fillColor: has ? Z.z6 : Z.z2 }); });
        layer.on("mouseout", () => { if (state.level === "india") layer.setStyle(stateStyle(f)); });
        layer.on("click", () => { goState(name); $("#gazetteer").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" }); });
      } }).addTo(state.map);
      state.map.fitBounds(state.stateLayer.getBounds(), { padding: [4, 4] });
      $("#map-status").textContent = (data.features || []).length + " state and UT polygons. Lighter fill marks an archive entry.";
    }).catch(err => { $("#map-status").textContent = "Boundaries could not be loaded; the register below still works."; console.error("Administrative map:", err); });
  }
  function showIndiaMap() {
    if (!state.map || !state.stateLayer) return;
    if (state.districtLayer) { state.map.removeLayer(state.districtLayer); state.districtLayer = null; }
    state.stateLayer.addTo(state.map); state.stateLayer.setStyle(stateStyle);
    state.map.fitBounds(state.stateLayer.getBounds(), { padding: [4, 4] });
    $("#map-status").textContent = "India. Select a state or UT polygon.";
  }
  async function showDistrictMap(st) {
    if (!state.map) return;
    $("#map-status").textContent = "Loading district boundaries for " + st + "…";
    try {
      const data = await fetchAdminGeoJSON(2, "state='" + st.replace(/'/g, "''") + "'");
      if (state.geoState !== st) return;
      if (state.districtLayer) state.map.removeLayer(state.districtLayer);
      if (state.stateLayer) state.map.removeLayer(state.stateLayer);
      state.districtLayer = L.geoJSON(data, { style: districtStyle, onEachFeature: (f, layer) => {
        const d = archiveDistrict(f), n = districtCount(d), svc = f.properties.district;
        layer.bindTooltip(d + (svc !== d ? " (service name: " + svc + ")" : "") + " · " + n + " place row" + (n === 1 ? "" : "s"), { sticky: true });
        layer.on("mouseover", () => { if (d !== state.geoDistrict) layer.setStyle({ fillColor: n ? Z.z6 : Z.z2 }); });
        layer.on("mouseout", () => { if (d !== state.geoDistrict) layer.setStyle(districtStyle(f)); });
        layer.on("click", () => goDistrict(d));
      } }).addTo(state.map);
      if (state.districtLayer.getLayers().length) state.map.fitBounds(state.districtLayer.getBounds(), { padding: [8, 8] });
      const polyNames = new Set((data.features || []).map(archiveDistrict));
      const missing = districtRows(st).filter(r => !polyNames.has(r.name)).length;
      $("#map-status").textContent = (data.features || []).length + " district polygons in " + st + ". Lighter fill marks a place row." + (missing ? " " + missing + " newer archive districts have no polygon in this service; select them from the register." : "");
      styleDistrictSelection();
    } catch (err) { $("#map-status").textContent = "District boundaries for " + st + " could not be loaded."; console.error(err); }
  }
  function styleDistrictSelection() {
    if (!state.districtLayer) return;
    state.districtLayer.eachLayer(layer => { layer.setStyle(districtStyle(layer.feature)); if (archiveDistrict(layer.feature) === state.geoDistrict) layer.bringToFront(); });
  }

  /* ---------- Page II: beverage register ---------- */
  function initFilters() {
    const sts = [...new Set(state.beverages.map(b => b.State).filter(Boolean))].sort();
    $("#state-filter").innerHTML = '<option value="">All</option>' + sts.map(v => "<option>" + esc(v) + "</option>").join("");
    const types = [...new Set(state.beverages.map(b => (b.Beverage_Type || "").split(/[;(]/)[0].trim()).filter(Boolean))].sort();
    $("#type-filter").innerHTML = '<option value="">All</option>' + types.map(v => "<option>" + esc(v) + "</option>").join("");
    ["#search", "#state-filter", "#type-filter", "#evidence-filter"].forEach(s => $(s).addEventListener("input", renderBeverages));
  }
  function filteredBeverages() {
    const q = $("#search").value.toLowerCase().trim(), st = $("#state-filter").value, type = $("#type-filter").value, ev = $("#evidence-filter").value;
    return state.beverages.filter(b => {
      if (st && b.State !== st) return false;
      if (type && (b.Beverage_Type || "").split(/[;(]/)[0].trim() !== type) return false;
      if (ev && evidenceClass(b) !== ev) return false;
      if (!q) return true;
      const places = byBeverage(state.places, b.Beverage_ID).map(p => [p.District, p.Village_or_Locality, p.Block_or_Subdistrict].join(" ")).join(" ");
      const comm = state.communities.filter(c => splitIDs(c.Associated_Beverage_IDs).includes(b.Beverage_ID)).map(c => c.Community_Name).join(" ");
      return [b.Beverage_ID, b.Beverage_Name, b.Alternate_Names, b.State, b.District, b.Community, b.Beverage_Type, b.Starter_Culture, b.Source_IDs, places, comm].join(" ").toLowerCase().includes(q);
    }).sort((a, b) => a.Beverage_ID.localeCompare(b.Beverage_ID));
  }
  function renderBeverages() {
    const items = filteredBeverages();
    $("#result-count").textContent = items.length + " of " + state.beverages.length + " records";
    const tbody = $("#beverage-rows");
    page(tbody, items.length ? items.map(b => {
      const src = splitIDs(b.Source_IDs).length, pl = byBeverage(state.places, b.Beverage_ID).length, gp = state.gaps.filter(g => splitIDs(g.Beverage_ID).includes(b.Beverage_ID) && /open/i.test(g.Status)).length;
      return '<tr class="row-link' + (state.selected === b.Beverage_ID ? " selected" : "") + '" data-bev="' + esc(b.Beverage_ID) + '" tabindex="0"><td class="col-id">' + esc(b.Beverage_ID) + '</td><td><span class="name">' + esc(b.Beverage_Name) + "</span>" + stamp(b) + (b.Alternate_Names ? "<small>" + esc(shortText(b.Alternate_Names, 70)) + "</small>" : "") + "</td>" + cell(b.Community) +
        "<td>" + esc(b.State || "") + (b.District ? "<small>" + esc(shortText(b.District, 60)) + "</small>" : "") + "</td>" + cell((b.Beverage_Type || "").split(/[;(]/)[0].trim()) + cell(shortText(b.Starter_Culture, 40)) + "<td>" + hatch(b) + "</td>" + num(src) + num(pl) + num(gp) + '<td class="col-date">' + esc(b.Last_Reviewed || "") + "</td></tr>";
    }).join("") : '<tr class="empty-row"><td colspan="11">No record matches these filters.</td></tr>');
    tbody.querySelectorAll("[data-bev]").forEach(tr => bindRow(tr, () => selectBeverage(tr.dataset.bev, true)));
  }

  /* ---------- Page III: record reader ---------- */
  function renderReaderEmpty() {
    $("#rd-title").textContent = "Record";
    $("#rd-note").textContent = "No record selected. Choose a row in the beverage register or a linked beverage in the gazetteer.";
    $("#reader-body").innerHTML = '<p class="reader-empty">The reader shows one beverage at a time: its determination slip, the dossier, and every linked place, method, practice, source and open question.</p>';
  }
  function f(label, value, full = false) { return '<div class="f' + (full ? " full" : "") + '"><dt>' + esc(label) + "</dt>" + (value ? "<dd>" + esc(value) + "</dd>" : '<dd class="blank"></dd>') + "</div>"; }
  function subTable(head, rows) { return rows.length ? '<table class="register register-sub"><thead><tr>' + head.map(h => '<th scope="col">' + esc(h) + "</th>").join("") + "</tr></thead><tbody>" + rows.join("") + "</tbody></table>" : ""; }
  function renderReader(b) {
    const id = b.Beverage_ID;
    const sources = splitIDs(b.Source_IDs).map(s => state.sources.find(x => x.Source_ID === s) || { Source_ID: s, missing: true });
    const places = byBeverage(state.places, id), methods = byBeverage(state.methods, id), practices = byBeverage(state.practices, id), gaps = state.gaps.filter(g => splitIDs(g.Beverage_ID).includes(id));
    const community = state.communities.find(c => splitIDs(c.Associated_Beverage_IDs).includes(id));
    const dossier = dossierPaths[id];
    $("#rd-title").textContent = "Record · " + id;
    $("#rd-note").textContent = (b.State || "India") + (b.District ? " · " + shortText(b.District, 60) : "") + (b.Last_Reviewed ? " · last reviewed " + b.Last_Reviewed : "");
    const tabs = [["overview", "Overview"], ["dossier", "Dossier"], ["places", "Places", places.length], ["methods", "Methods", methods.length], ["culture", "Culture", practices.length], ["sources", "Sources", sources.length], ["gaps", "Open questions", gaps.length]];
    $("#reader-body").innerHTML =
      '<div class="slip"><div class="slip-main"><h2>' + esc(b.Beverage_Name) + stamp(b) + "</h2>" + (b.Alternate_Names ? '<p class="slip-alt">' + esc(b.Alternate_Names) + "</p>" : "") +
      '<div class="slip-actions">' + (dossier ? '<a class="primary" href="' + githubFile(dossier) + '" target="_blank" rel="noreferrer">Dossier on GitHub</a>' : "") + '<a href="' + githubFile("data/beverages.csv") + '" target="_blank" rel="noreferrer">beverages.csv</a><button type="button" id="share-record">Copy record link</button></div></div>' +
      '<div class="slip-side"><table class="register"><tbody><tr><th scope="row">Community</th>' + cell(b.Community) + '</tr><tr><th scope="row">Type</th>' + cell(b.Beverage_Type) + '</tr><tr><th scope="row">Evidence</th><td>' + hatch(b) + (nameConflict(b) ? '<br><span class="flag">NAME BOUNDARY UNRESOLVED</span>' : "") + '</td></tr><tr><th scope="row">Geographic confidence</th>' + cell(b.Geographic_Confidence) + '</tr><tr><th scope="row">GI / heritage</th>' + cell(b.GI_or_Heritage_Status) + "</tr></tbody></table></div></div>" +
      '<div class="tabs" role="tablist">' + tabs.map(([k, l, n]) => '<button type="button" role="tab" data-tab="' + k + '" aria-selected="' + (k === state.tab) + '">' + l + (n !== undefined ? "<span>" + n + "</span>" : "") + "</button>").join("") + "</div>" +
      '<section class="pane' + (state.tab === "overview" ? " active" : "") + '" data-pane="overview"><dl class="fields">' + f("Traditional process", b.Traditional_Process_Summary, true) + f("Primary ingredients", b.Primary_Ingredients) + f("Starter culture", b.Starter_Culture) + f("Traditional equipment", b.Traditional_Equipment) + f("Seasonality", b.Seasonality) + f("Cultural significance", b.Cultural_Significance, true) + f("Reported localities", b.Village_or_Locality || b.District, true) + f("Current status", b.Current_Status, true) + f("Variant / synonym notes", b.Variant_or_Synonym_Notes, true) + f("Evidence level, as recorded", b.Evidence_Level, true) + f("Open questions on the record", b.Open_Questions, true) + "</dl>" +
      (community ? "<h3>Community context · " + esc(community.Community_Name) + '</h3><dl class="fields">' + f("Regions", community.Districts_or_Regions, true) + f("Terminology", community.Language_or_Local_Terminology, true) + f("Cultural context", community.Cultural_Context, true) + f("Knowledge sensitivity", community.Knowledge_Sensitivity_Notes, true) + "</dl>" : "") + "</section>" +
      '<section class="pane' + (state.tab === "dossier" ? " active" : "") + '" data-pane="dossier"><div id="dossier" class="dossier"><p class="dossier-loading">Loading the dossier…</p></div></section>' +
      '<section class="pane' + (state.tab === "places" ? " active" : "") + '" data-pane="places"><p class="lead">Place evidence is labelled by what the source establishes. A sample locality is not automatically a current production site.</p>' + (subTable(["Place", "Locality", "What the source establishes", "Status", "Sources"], places.map(p => "<tr><td>" + esc(p.Place_ID) + "<small>" + esc(p.District) + '</small></td><td class="name">' + esc(p.Village_or_Locality || p.Block_or_Subdistrict || p.District) + "</td><td>" + esc(p.Evidence_for_Production_or_Consumption) + '</td><td class="em">' + esc(p.Coverage_Status) + "</td><td>" + esc(splitIDs(p.Source_IDs).join(", ")) + "</td></tr>")) || '<p class="lead">No place row is linked to this record yet.</p>') + "</section>" +
      '<section class="pane' + (state.tab === "methods" ? " active" : "") + '" data-pane="methods"><p class="lead">Method rows keep source-specific variation. None is a universal recipe.</p>' + (subTable(["Method", "Stage", "Description", "Conditions", "Variation and evidence notes", "Sources"], methods.map(m => "<tr><td>" + esc(m.Method_ID) + '</td><td class="name">' + esc(m.Stage) + "</td><td>" + esc(m.Method_Description) + (m.Ingredients_or_Materials ? "<small>Materials: " + esc(m.Ingredients_or_Materials) + "</small>" : "") + "</td><td>" + esc(m.Reported_Duration_or_Conditions) + "</td><td>" + esc([m.Variation_by_Locality, m.Evidence_Notes].filter(Boolean).join(" ")) + "</td><td>" + esc(splitIDs(m.Source_IDs).join(", ")) + "</td></tr>")) || '<p class="lead">No method row is linked to this record yet.</p>') + "</section>" +
      '<section class="pane' + (state.tab === "culture" ? " active" : "") + '" data-pane="culture">' + (subTable(["Practice", "Occasion", "Description", "Evidence type", "Cautions", "Sources"], practices.map(p => "<tr><td>" + esc(p.Practice_ID) + "<small>" + esc(p.District) + '</small></td><td class="name">' + esc(p.Occasion_or_Context) + "</td><td>" + esc(p.Practice_Description) + "</td><td>" + esc(p.Evidence_Type) + '</td><td class="em">' + esc(p.Cautions_or_Qualifiers) + "</td><td>" + esc(splitIDs(p.Source_IDs).join(", ")) + "</td></tr>")) || '<p class="lead">No cultural-practice row is linked to this record yet.</p>') + "</section>" +
      '<section class="pane' + (state.tab === "sources" ? " active" : "") + '" data-pane="sources"><p class="lead">Each source carries what it supports and where it stops.</p>' + (subTable(["Source", "Reference", "Claims supported", "Limitations"], sources.map(s => s.missing ? "<tr><td>" + esc(s.Source_ID) + '</td><td colspan="3" class="flag">NOT IN SOURCE REGISTER</td></tr>' : "<tr><td>" + esc(s.Source_ID) + "<small>" + esc(s.Year) + "</small></td><td>" + (s.URL ? '<a class="src-title" href="' + esc(s.URL) + '" target="_blank" rel="noreferrer">' + esc(s.Title) + "</a>" : '<span class="src-title">' + esc(s.Title) + "</span>") + '<span class="src-cite">' + esc(s.Author_or_Organisation) + " · " + esc(s.Publication_or_Source_Type) + "</span></td><td>" + esc(s.Claims_Supported) + '</td><td class="src-note">' + esc(s.Limitations_or_Caveats || "") + "</td></tr>")) || '<p class="lead">No source ID is attached to this record.</p>') + "</section>" +
      '<section class="pane' + (state.tab === "gaps" ? " active" : "") + '" data-pane="gaps"><p class="lead">Research gaps are first-class records, not omissions to be filled with guesses.</p>' + (subTable(["Gap", "Priority", "Question", "Why it matters", "Next action"], gaps.map(g => "<tr><td>" + esc(g.Gap_ID) + "<small>" + esc(g.Status) + '</small></td><td class="pri ' + esc(String(g.Priority).toLowerCase()) + '">' + esc(g.Priority) + '</td><td class="name">' + esc(g.Question_or_Gap) + "</td><td>" + esc(g.Why_It_Matters) + '</td><td class="next">' + esc(g.Next_Action) + "</td></tr>")) || '<p class="lead">No gap row names this beverage.</p>') + "</section>";
    $("#reader-body").querySelectorAll('[role="tab"]').forEach(btn => btn.addEventListener("click", () => { setTab(btn.dataset.tab); if (btn.dataset.tab === "dossier") loadDossier(b); }));
    $("#share-record").addEventListener("click", async () => { const url = location.origin + location.pathname + "?id=" + encodeURIComponent(id) + "#reader"; try { await navigator.clipboard.writeText(url); toast("Record link copied"); } catch { toast(url); } });
    if (state.tab === "dossier") loadDossier(b);
    if (!reduceMotion.matches) { const rb = $("#reader-body"); rb.classList.remove("paging-in"); void rb.offsetWidth; rb.classList.add("paging-in"); }
  }
  function setTab(tab) {
    state.tab = tab;
    document.querySelectorAll('#reader-body [role="tab"]').forEach(b => b.setAttribute("aria-selected", String(b.dataset.tab === tab)));
    document.querySelectorAll("#reader-body .pane").forEach(p => p.classList.toggle("active", p.dataset.pane === tab));
  }
  async function loadDossier(b) {
    const holder = $("#dossier"); if (!holder || holder.dataset.loaded === "true") return;
    const path = dossierPaths[b.Beverage_ID];
    if (!path) { holder.innerHTML = '<p class="lead">No dedicated dossier is mapped to this record yet. The overview and linked sources remain available.</p>'; holder.dataset.loaded = "true"; return; }
    try {
      const r = await fetch(RAW + path); if (!r.ok) throw new Error("Dossier not found");
      const md = await r.text();
      holder.innerHTML = window.marked && window.marked.parse ? window.marked.parse(md) : "<pre>" + esc(md) + "</pre>";
      holder.querySelectorAll("a[href]").forEach(a => { if (/^https?:/.test(a.getAttribute("href"))) { a.target = "_blank"; a.rel = "noreferrer"; } });
      holder.dataset.loaded = "true";
    } catch (e) { holder.innerHTML = '<div class="error-note">The dossier could not be loaded. <a href="' + githubFile(path) + '" target="_blank" rel="noreferrer">Open it on GitHub</a>.</div>'; }
  }
  function selectBeverage(id, scroll) {
    const b = bevById(id); if (!b) return;
    state.selected = id; state.tab = "overview";
    // The gazetteer mirrors the record: page to its state and, when the district is a register row, its district.
    if (b.State && statesInArchive().includes(b.State)) {
      const row = districtRows(b.State).find(r => r.name === String(b.District || "").trim());
      if (state.geoState !== b.State) goState(b.State);
      if (row) goDistrict(row.name);
      else if (state.level === "district") { state.level = "state"; state.geoDistrict = ""; renderGazetteer(); styleDistrictSelection(); }
    }
    document.querySelectorAll("#beverage-rows tr").forEach(tr => tr.classList.toggle("selected", tr.dataset.bev === id));
    renderReader(b);
    const url = new URL(location.href); url.searchParams.set("id", id); history.replaceState(null, "", url);
    if (scroll) $("#reader").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
  }

  /* ---------- Page IV: ledger ---------- */
  function renderLedger() {
    const open = state.gaps.filter(g => /open/i.test(g.Status));
    const order = { high: 0, medium: 1, low: 2 };
    open.sort((a, b) => (order[String(a.Priority).toLowerCase()] ?? 9) - (order[String(b.Priority).toLowerCase()] ?? 9) || a.Gap_ID.localeCompare(b.Gap_ID));
    $("#lg-count").textContent = open.length + " open · " + open.filter(g => /high/i.test(g.Priority)).length + " high";
    $("#gap-rows").innerHTML = open.map(g => {
      const long = g.Next_Action || "", short = shortText(long, 140), more = long.length > short.length;
      return "<tr><td class=\"col-id\">" + esc(g.Gap_ID) + '</td><td class="pri ' + esc(String(g.Priority).toLowerCase()) + '">' + esc(g.Priority) + "</td><td>" + splitIDs(g.Beverage_ID).map(id => bevById(id) ? '<button type="button" class="row-btn" data-bev="' + esc(id) + '" style="display:inline;width:auto;text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--z6)">' + esc(bevName(id)) + "</button>" : '<span class="flag" title="Not a beverage ID in the register">' + esc(id) + "</span>").join("<br>") + "</td>" + cell(g.District) + '<td class="name">' + esc(g.Question_or_Gap) + (g.Why_It_Matters ? "<small>" + esc(g.Why_It_Matters) + "</small>" : "") + "</td><td>" + (more ? '<span class="short">' + esc(short) + '</span><span class="long">' + esc(long) + '</span><button type="button" class="more">more</button>' : esc(long)) + "</td></tr>";
    }).join("") || '<tr class="empty-row"><td colspan="6">No open gap rows.</td></tr>';
    $("#gap-rows").querySelectorAll(".more").forEach(btn => btn.addEventListener("click", () => { const td = btn.closest("td"); td.classList.toggle("expanded"); btn.textContent = td.classList.contains("expanded") ? "less" : "more"; }));
    $("#gap-rows").querySelectorAll("[data-bev]").forEach(el => el.addEventListener("click", () => selectBeverage(el.dataset.bev, true)));

    const sourceLinked = state.beverages.filter(b => splitIDs(b.Source_IDs).length).length;
    const withDossier = state.beverages.filter(b => dossierPaths[b.Beverage_ID]).length;
    const withPlace = state.beverages.filter(b => byBeverage(state.places, b.Beverage_ID).length).length;
    $("#shape-rows").innerHTML = [
      ["Beverage records", state.beverages.length], ["with a source ID", sourceLinked], ["with a place row", withPlace], ["with a mapped dossier", withDossier], ["with an unresolved name boundary", state.beverages.filter(nameConflict).length],
      ["Place rows", state.places.length], ["Method rows", state.methods.length], ["Practice rows", state.practices.length], ["Registered sources", state.sources.length], ["Latest review date", state.latestReview || "—"]
    ].map(([k, v]) => "<tr><td>" + esc(k) + "</td><td>" + esc(v) + "</td></tr>").join("");
    const tiers = ["solid", "hatched", "dotted", "outlined"].map(k => [k, state.beverages.filter(b => evidenceClass(b) === k).length]);
    const max = Math.max(1, ...tiers.map(t => t[1]));
    $("#evidence-rows").innerHTML = tiers.map(([k, n]) => '<tr><td><i class="hatch ' + k + '"></i>' + esc(evidenceWord[k]) + '<span class="bar" style="width:' + Math.round(n / max * 100) + '%"></span></td><td>' + n + "</td></tr>").join("");
    const none = state.districts.filter(d => Number(d.Place_Row_Count || 0) === 0).map(d => d.District_Current_Name);
    $("#nodistrict-rows").innerHTML = none.length ? none.map(n => '<tr><td><button type="button" class="row-btn" data-district="' + esc(n) + '" style="display:inline;width:auto;text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--z6)">' + esc(n) + '</button></td><td class="blank"></td></tr>').join("") : "<tr><td>Every Assam district has at least one place row.</td><td></td></tr>";
    $("#nodistrict-rows").querySelectorAll("[data-district]").forEach(b => b.addEventListener("click", () => { goState("Assam"); goDistrict(b.dataset.district); $("#gazetteer").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" }); }));
  }

  /* ---------- chrome ---------- */
  function toast(msg) { const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.timer); toast.timer = setTimeout(() => t.hidden = true, 2600); }
  document.addEventListener("keydown", e => {
    const tag = document.activeElement.tagName;
    if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") { e.preventDefault(); $("#search").focus(); $("#beverages").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" }); }
    if (e.key === "Escape" && tag === "INPUT") document.activeElement.blur();
  });
  loadData().catch(err => {
    $("#beverage-rows").innerHTML = '<tr class="empty-row"><td colspan="11">Could not load the archive data. Check the connection and refresh.</td></tr>';
    $("#gz-register").innerHTML = '<div class="error-note">Could not load the archive data from the repository. Check the connection and refresh.</div>';
    $("#rh-counts").innerHTML = "<span>Register unavailable</span>";
    $("#result-count").textContent = "Unavailable";
    console.error(err);
  });
})();
