"""Snapshot simplified admin boundaries from Esri India Living Atlas into assets/geo/.

The live service returns ~41 MB of full-resolution state polygons and fails
intermittently, so the dashboard reads these static, simplified copies instead.
Re-run only when boundaries need refreshing:  py -3.10 scripts/fetch_boundaries.py
"""
import json, re, time, urllib.parse, urllib.request
from pathlib import Path

SERVICE = "https://livingatlas.esri.in/server/rest/services/LivingAtlas/IND_AdminBoundary/MapServer"
OUT = Path(__file__).resolve().parent.parent / "assets" / "geo"


def slug(name):  # must match geoSlug() in assets/app.js
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def query(layer, where, fields, offset):
    params = urllib.parse.urlencode({"where": where, "outFields": fields, "returnGeometry": "true", "outSR": "4326",
                                     "f": "geojson", "maxAllowableOffset": offset, "geometryPrecision": 4})
    for attempt in range(8):  # service errors on roughly half of requests
        try:
            req = urllib.request.Request(f"{SERVICE}/{layer}/query?{params}", headers={"User-Agent": "Mozilla/5.0"})
            data = json.loads(urllib.request.urlopen(req, timeout=60).read())
            if data.get("features"):
                for f in data["features"]:
                    f.pop("id", None)
                return data
        except (ValueError, OSError):
            pass
        time.sleep(2 + attempt * 2)
    raise RuntimeError(f"layer {layer} where {where!r} failed after retries")


def save(path, data):
    path.write_text(json.dumps(data, separators=(",", ":")), encoding="utf-8")
    print(f"{path.relative_to(OUT.parent.parent)}: {len(data['features'])} features, {path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    (OUT / "districts").mkdir(parents=True, exist_ok=True)
    states = query(1, "1=1", "state", 0.01)
    save(OUT / "states.json", states)
    for name in sorted({f["properties"]["state"] for f in states["features"]}):
        where = "state='" + name.replace("'", "''") + "'"
        save(OUT / "districts" / (slug(name) + ".json"), query(2, where, "state,district", 0.002))
        time.sleep(1)
