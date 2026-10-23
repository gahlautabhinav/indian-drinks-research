#!/usr/bin/env python3
"""Validate the Indian Traditional Beverages Research Archive CSV relationships.

Uses only Python's standard library. Run from the repository root:
    python scripts/validate_archive.py
"""
from __future__ import annotations

import csv
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_FILE = "sources/source_register.csv"
BEVERAGE_FILE = "data/beverages.csv"

TABLES = {
    "data/beverages.csv": {
        "primary": "Beverage_ID",
        "source_refs": "Source_IDs",
        "beverage_refs": None,
    },
    "data/places_coverage.csv": {
        "primary": "Place_ID",
        "source_refs": "Source_IDs",
        "beverage_refs": "Beverage_IDs",
    },
    "data/communities.csv": {
        "primary": "Community_ID",
        "source_refs": "Source_IDs",
        "beverage_refs": "Associated_Beverage_IDs",
    },
    "data/production_methods.csv": {
        "primary": "Method_ID",
        "source_refs": "Source_IDs",
        "beverage_refs": "Beverage_ID",
    },
    "data/cultural_practices.csv": {
        "primary": "Practice_ID",
        "source_refs": "Source_IDs",
        "beverage_refs": "Beverage_ID",
    },
    "data/research_gaps.csv": {
        "primary": "Gap_ID",
        "source_refs": "Related_Source_IDs",
        "beverage_refs": "Beverage_ID",
    },
    SOURCE_FILE: {
        "primary": "Source_ID",
        "source_refs": None,
        "beverage_refs": None,
    },
}


def load_table(relative_path: str, errors: list[str]) -> tuple[list[str], list[dict[str, str]]]:
    path = ROOT / relative_path
    if not path.is_file():
        errors.append(f"{relative_path}: file not found")
        return [], []

    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        reader = csv.reader(handle)
        try:
            header = next(reader)
        except StopIteration:
            errors.append(f"{relative_path}: empty file")
            return [], []

        rows: list[dict[str, str]] = []
        for line_number, values in enumerate(reader, start=2):
            if not values or all(not value.strip() for value in values):
                continue
            if len(values) != len(header):
                errors.append(
                    f"{relative_path}:{line_number}: expected {len(header)} columns, "
                    f"found {len(values)}"
                )
                continue
            rows.append(dict(zip(header, values)))
    return header, rows


def split_refs(value: str) -> list[str]:
    return [item.strip() for item in value.split(";") if item.strip()]


def main() -> int:
    errors: list[str] = []
    tables: dict[str, tuple[list[str], list[dict[str, str]]]] = {}
    for relative_path, config in TABLES.items():
        header, rows = load_table(relative_path, errors)
        tables[relative_path] = (header, rows)
        if not header:
            continue

        primary = config["primary"]
        if primary not in header:
            errors.append(f"{relative_path}: missing primary-key column {primary!r}")
            continue

        seen: set[str] = set()
        for line_number, row in enumerate(rows, start=2):
            identifier = row.get(primary, "").strip()
            if not identifier:
                errors.append(f"{relative_path}:{line_number}: blank {primary}")
            elif identifier in seen:
                errors.append(f"{relative_path}:{line_number}: duplicate {primary} {identifier!r}")
            seen.add(identifier)

        for field in (config["source_refs"], config["beverage_refs"]):
            if field and field not in header:
                errors.append(f"{relative_path}: missing reference column {field!r}")

    source_ids = {
        row.get("Source_ID", "").strip()
        for row in tables.get(SOURCE_FILE, ([], []))[1]
        if row.get("Source_ID", "").strip()
    }
    beverage_ids = {
        row.get("Beverage_ID", "").strip()
        for row in tables.get(BEVERAGE_FILE, ([], []))[1]
        if row.get("Beverage_ID", "").strip()
    }

    for relative_path, config in TABLES.items():
        if relative_path == SOURCE_FILE:
            continue
        header, rows = tables.get(relative_path, ([], []))
        if not header:
            continue
        source_field = config["source_refs"]
        beverage_field = config["beverage_refs"]
        for line_number, row in enumerate(rows, start=2):
            if source_field and source_field in row:
                for ref in split_refs(row.get(source_field, "")):
                    if ref not in source_ids:
                        errors.append(
                            f"{relative_path}:{line_number}: unknown source reference {ref!r}"
                        )
            if beverage_field and beverage_field in row:
                for ref in split_refs(row.get(beverage_field, "")):
                    if ref not in beverage_ids:
                        errors.append(
                            f"{relative_path}:{line_number}: unknown beverage reference {ref!r}"
                        )

    # Catch source-ID fragments accidentally pasted into prose instead of reference columns.
    _, beverage_rows = tables.get(BEVERAGE_FILE, ([], []))
    for line_number, row in enumerate(beverage_rows, start=2):
        open_questions = row.get("Open_Questions", "")
        if re.search(r";\s*SRC-\d+\b", open_questions):
            errors.append(
                f"{BEVERAGE_FILE}:{line_number}: source ID token appears in Open_Questions; "
                "put citations in Source_IDs and keep question text clean"
            )

    # A substantive open question should normally be traceable to at least one gap.
    # This is a warning, not a failure: some notes are editorial or intentionally lower priority.
    warnings: list[str] = []
    gap_rows = tables.get("data/research_gaps.csv", ([], []))[1]
    for row in beverage_rows:
        if row.get("State", "").strip() != "Assam" or not row.get("Open_Questions", "").strip():
            continue
        beverage_id = row.get("Beverage_ID", "").strip()
        linked_gap = any(
            row_gap.get("State", "").strip() == "Assam"
            and beverage_id in split_refs(row_gap.get("Beverage_ID", ""))
            for row_gap in gap_rows
        )
        if not linked_gap:
            warnings.append(
                f"{beverage_id}: Open_Questions has no Assam research-gap row containing this beverage ID"
            )

    if errors:
        print("Archive validation FAILED:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Archive validation PASSED.")
    for warning in warnings:
        print(f"WARNING: {warning}")
    for relative_path, (_, rows) in tables.items():
        print(f"- {relative_path}: {len(rows)} records")
    print("Primary IDs are nonblank and unique; CSV row widths and source/beverage references are valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
