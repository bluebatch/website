#!/usr/bin/env python3
"""
Traffic Analyzer

Analyzes GA4 data for SEO insights.
"""

from typing import Dict, List
from ga4_client import GA4Client


def get_top_organic_pages(limit: int = 20, days: int = 28) -> List[Dict]:
    """Get top organic landing pages with metrics."""

    client = GA4Client()
    pages = client.get_organic_landing_pages(limit=limit, days=days)

    return [
        {
            "page": p["landingPage"],
            "sessions": p["sessions"],
            "bounce_rate": round(p["bounceRate"] * 100, 1),
            "engagement_rate": round(p["engagementRate"] * 100, 1),
            "avg_duration": round(p["averageSessionDuration"], 1),
            "conversions": p["conversions"]
        }
        for p in pages
    ]


def get_underperforming_pages(
    limit: int = 20,
    days: int = 28,
    min_sessions: int = 50,
    high_bounce_threshold: float = 0.7,
    low_engagement_threshold: float = 0.3
) -> List[Dict]:
    """
    Find pages with high traffic but poor engagement/conversion.

    Criteria:
    - High bounce rate (>70%)
    - Low engagement rate (<30%)
    - No conversions despite traffic
    """

    client = GA4Client()
    pages = client.get_organic_landing_pages(limit=200, days=days)

    underperforming = []

    for p in pages:
        if p["sessions"] < min_sessions:
            continue

        issues = []

        if p["bounceRate"] > high_bounce_threshold:
            issues.append("High Bounce")

        if p["engagementRate"] < low_engagement_threshold:
            issues.append("Low Engage")

        if p["sessions"] > 100 and p["conversions"] == 0:
            issues.append("No Conv")

        if issues:
            underperforming.append({
                "page": p["landingPage"],
                "sessions": p["sessions"],
                "bounce_rate": round(p["bounceRate"] * 100, 1),
                "engagement": round(p["engagementRate"] * 100, 1),
                "conversions": p["conversions"],
                "issue": ", ".join(issues)
            })

    underperforming.sort(key=lambda x: x["sessions"], reverse=True)

    return underperforming[:limit]


def get_device_breakdown(days: int = 28) -> Dict:
    """Get organic sessions by device."""

    client = GA4Client()
    devices = client.get_device_breakdown(days=days)

    total = sum(d["sessions"] for d in devices)

    return {
        d["deviceCategory"]: {
            "sessions": d["sessions"],
            "percent": round(d["sessions"] / total * 100, 1) if total else 0,
            "bounce_rate": round(d["bounceRate"] * 100, 1),
            "conversions": d["conversions"]
        }
        for d in devices
    }
