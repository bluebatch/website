#!/usr/bin/env python3
"""
Google Search Console API Client

Queries search performance data (queries, pages, clicks, impressions, CTR, position).
Uses the same service account credentials as GA4.
"""

from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional

try:
    from googleapiclient.discovery import build
    from google.oauth2 import service_account
    GSC_AVAILABLE = True
except ImportError:
    GSC_AVAILABLE = False

from config import CREDENTIALS_PATH

# Search Console site URL — must match the property in GSC
# Formats: "https://bluebatch.io" or "sc-domain:bluebatch.io"
GSC_SITE_URL = "sc-domain:bluebatch.io"


class GSCClient:
    """Client for Google Search Console API."""

    def __init__(self):
        if not GSC_AVAILABLE:
            raise ImportError(
                "google-api-python-client not installed. "
                "Run: pip install google-api-python-client"
            )

        creds_path = Path(CREDENTIALS_PATH)
        if not creds_path.exists():
            raise FileNotFoundError(f"Credentials not found: {CREDENTIALS_PATH}")

        credentials = service_account.Credentials.from_service_account_file(
            str(creds_path),
            scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
        )

        self.service = build("searchconsole", "v1", credentials=credentials)
        self.site_url = GSC_SITE_URL

    def _query(
        self,
        dimensions: List[str],
        days: int = 28,
        row_limit: int = 100,
        dimension_filter_groups: Optional[List] = None,
    ) -> List[Dict]:
        """Run a Search Console query."""

        end_date = datetime.now() - timedelta(days=3)  # GSC data has ~3 day delay
        start_date = end_date - timedelta(days=days)

        body = {
            "startDate": start_date.strftime("%Y-%m-%d"),
            "endDate": end_date.strftime("%Y-%m-%d"),
            "dimensions": dimensions,
            "rowLimit": row_limit,
        }

        if dimension_filter_groups:
            body["dimensionFilterGroups"] = dimension_filter_groups

        response = self.service.searchanalytics().query(
            siteUrl=self.site_url, body=body
        ).execute()

        results = []
        for row in response.get("rows", []):
            entry = {
                "clicks": row["clicks"],
                "impressions": row["impressions"],
                "ctr": round(row["ctr"] * 100, 2),
                "position": round(row["position"], 1),
            }
            for i, dim in enumerate(dimensions):
                entry[dim] = row["keys"][i]
            results.append(entry)

        return results

    def get_top_queries(self, days: int = 28, limit: int = 50) -> List[Dict]:
        """Get top search queries by clicks."""
        return self._query(
            dimensions=["query"],
            days=days,
            row_limit=limit,
        )

    def get_top_pages(self, days: int = 28, limit: int = 50) -> List[Dict]:
        """Get top pages by clicks."""
        return self._query(
            dimensions=["page"],
            days=days,
            row_limit=limit,
        )

    def get_queries_for_page(self, page_url: str, days: int = 28, limit: int = 50) -> List[Dict]:
        """Get search queries for a specific page."""
        return self._query(
            dimensions=["query"],
            days=days,
            row_limit=limit,
            dimension_filter_groups=[{
                "filters": [{
                    "dimension": "page",
                    "operator": "contains",
                    "expression": page_url,
                }]
            }],
        )

    def get_search_stats(self, days: int = 28) -> Dict:
        """Get overall search performance stats."""
        end_date = datetime.now() - timedelta(days=3)
        start_date = end_date - timedelta(days=days)

        body = {
            "startDate": start_date.strftime("%Y-%m-%d"),
            "endDate": end_date.strftime("%Y-%m-%d"),
        }

        response = self.service.searchanalytics().query(
            siteUrl=self.site_url, body=body
        ).execute()

        rows = response.get("rows", [{}])
        if rows:
            row = rows[0]
            return {
                "clicks": row.get("clicks", 0),
                "impressions": row.get("impressions", 0),
                "ctr": round(row.get("ctr", 0) * 100, 2),
                "position": round(row.get("position", 0), 1),
            }
        return {"clicks": 0, "impressions": 0, "ctr": 0, "position": 0}
