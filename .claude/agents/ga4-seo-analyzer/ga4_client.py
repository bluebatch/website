#!/usr/bin/env python3
"""
GA4 API Client

Handles authentication and API calls to Google Analytics Data API.
"""

from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Optional

try:
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        RunReportRequest,
        DateRange,
        Dimension,
        Metric,
        FilterExpression,
        Filter,
        OrderBy,
    )
    from google.oauth2 import service_account
    GA4_AVAILABLE = True
except ImportError:
    GA4_AVAILABLE = False

from config import GA4_PROPERTY_ID, CREDENTIALS_PATH


class GA4Client:
    """Client for Google Analytics 4 Data API."""

    def __init__(self):
        if not GA4_AVAILABLE:
            raise ImportError(
                "google-analytics-data not installed. "
                "Run: pip install google-analytics-data"
            )

        creds_path = Path(CREDENTIALS_PATH)
        if not creds_path.exists():
            raise FileNotFoundError(f"Credentials not found: {CREDENTIALS_PATH}")

        credentials = service_account.Credentials.from_service_account_file(
            str(creds_path),
            scopes=["https://www.googleapis.com/auth/analytics.readonly"]
        )

        self.client = BetaAnalyticsDataClient(credentials=credentials)
        self.property_id = GA4_PROPERTY_ID

    def _run_report(
        self,
        dimensions: List[str],
        metrics: List[str],
        date_range_days: int = 28,
        dimension_filter: Optional[FilterExpression] = None,
        order_by: Optional[List[OrderBy]] = None,
        limit: int = 1000
    ) -> List[Dict]:
        """Run a GA4 report and return results as list of dicts."""

        end_date = datetime.now()
        start_date = end_date - timedelta(days=date_range_days)

        request = RunReportRequest(
            property=f"properties/{self.property_id}",
            dimensions=[Dimension(name=d) for d in dimensions],
            metrics=[Metric(name=m) for m in metrics],
            date_ranges=[DateRange(
                start_date=start_date.strftime("%Y-%m-%d"),
                end_date=end_date.strftime("%Y-%m-%d")
            )],
            dimension_filter=dimension_filter,
            order_bys=order_by,
            limit=limit
        )

        response = self.client.run_report(request)

        results = []
        for row in response.rows:
            row_dict = {}
            for i, dim in enumerate(dimensions):
                row_dict[dim] = row.dimension_values[i].value
            for i, met in enumerate(metrics):
                value = row.metric_values[i].value
                # Convert to appropriate type
                try:
                    if '.' in value:
                        row_dict[met] = float(value)
                    else:
                        row_dict[met] = int(value)
                except ValueError:
                    row_dict[met] = value
            results.append(row_dict)

        return results

    def get_basic_stats(self, days: int = 28) -> Dict:
        """Get basic traffic statistics."""

        # Total sessions
        total = self._run_report(
            dimensions=[],
            metrics=["sessions", "conversions"],
            date_range_days=days
        )

        # Organic sessions
        organic_filter = FilterExpression(
            filter=Filter(
                field_name="sessionDefaultChannelGroup",
                string_filter=Filter.StringFilter(value="Organic Search")
            )
        )
        organic = self._run_report(
            dimensions=[],
            metrics=["sessions"],
            date_range_days=days,
            dimension_filter=organic_filter
        )

        total_sessions = total[0]["sessions"] if total else 0
        organic_sessions = organic[0]["sessions"] if organic else 0
        conversions = total[0]["conversions"] if total else 0

        return {
            "sessions": total_sessions,
            "organic_sessions": organic_sessions,
            "organic_percent": round(organic_sessions / total_sessions * 100, 1) if total_sessions else 0,
            "conversions": conversions
        }

    def get_organic_landing_pages(
        self,
        limit: int = 100,
        days: int = 28
    ) -> List[Dict]:
        """Get organic traffic by landing page."""

        organic_filter = FilterExpression(
            filter=Filter(
                field_name="sessionDefaultChannelGroup",
                string_filter=Filter.StringFilter(value="Organic Search")
            )
        )

        order = [OrderBy(
            metric=OrderBy.MetricOrderBy(metric_name="sessions"),
            desc=True
        )]

        return self._run_report(
            dimensions=["landingPage"],
            metrics=[
                "sessions",
                "bounceRate",
                "engagementRate",
                "averageSessionDuration",
                "conversions"
            ],
            date_range_days=days,
            dimension_filter=organic_filter,
            order_by=order,
            limit=limit
        )

    def get_all_landing_pages(self, limit: int = 500, days: int = 28) -> List[Dict]:
        """Get all landing page metrics."""

        order = [OrderBy(
            metric=OrderBy.MetricOrderBy(metric_name="sessions"),
            desc=True
        )]

        return self._run_report(
            dimensions=["landingPage"],
            metrics=[
                "sessions",
                "bounceRate",
                "engagementRate",
                "averageSessionDuration",
                "conversions"
            ],
            date_range_days=days,
            order_by=order,
            limit=limit
        )

    def get_device_breakdown(self, days: int = 28) -> List[Dict]:
        """Get sessions by device category."""

        organic_filter = FilterExpression(
            filter=Filter(
                field_name="sessionDefaultChannelGroup",
                string_filter=Filter.StringFilter(value="Organic Search")
            )
        )

        return self._run_report(
            dimensions=["deviceCategory"],
            metrics=["sessions", "bounceRate", "conversions"],
            date_range_days=days,
            dimension_filter=organic_filter
        )

    def get_leads(self, days: int = 28, event_name: str = "kontaktformular_gesendet") -> List[Dict]:
        """Get lead conversions by landing page.

        Args:
            days: Number of days to analyze
            event_name: The conversion event name (default: kontaktformular_gesendet)
        """

        # Filter for the specific event
        event_filter = FilterExpression(
            filter=Filter(
                field_name="eventName",
                string_filter=Filter.StringFilter(value=event_name)
            )
        )

        order = [OrderBy(
            metric=OrderBy.MetricOrderBy(metric_name="eventCount"),
            desc=True
        )]

        return self._run_report(
            dimensions=["landingPage", "date"],
            metrics=["eventCount"],
            date_range_days=days,
            dimension_filter=event_filter,
            order_by=order,
            limit=500
        )

    def get_leads_by_page(self, days: int = 28, event_name: str = "kontaktformular_gesendet") -> List[Dict]:
        """Get lead conversions aggregated by landing page.

        Args:
            days: Number of days to analyze
            event_name: The conversion event name
        """

        event_filter = FilterExpression(
            filter=Filter(
                field_name="eventName",
                string_filter=Filter.StringFilter(value=event_name)
            )
        )

        order = [OrderBy(
            metric=OrderBy.MetricOrderBy(metric_name="eventCount"),
            desc=True
        )]

        return self._run_report(
            dimensions=["landingPage"],
            metrics=["eventCount"],
            date_range_days=days,
            dimension_filter=event_filter,
            order_by=order,
            limit=100
        )

    def get_leads_by_source(self, days: int = 28, event_name: str = "kontaktformular_gesendet") -> List[Dict]:
        """Get lead conversions by traffic source/medium.

        Args:
            days: Number of days to analyze
            event_name: The conversion event name
        """

        event_filter = FilterExpression(
            filter=Filter(
                field_name="eventName",
                string_filter=Filter.StringFilter(value=event_name)
            )
        )

        order = [OrderBy(
            metric=OrderBy.MetricOrderBy(metric_name="eventCount"),
            desc=True
        )]

        return self._run_report(
            dimensions=["sessionDefaultChannelGroup", "sessionSourceMedium"],
            metrics=["eventCount"],
            date_range_days=days,
            dimension_filter=event_filter,
            order_by=order,
            limit=50
        )

    def get_lead_stats(self, days: int = 28, event_name: str = "kontaktformular_gesendet") -> Dict:
        """Get overall lead statistics.

        Args:
            days: Number of days to analyze
            event_name: The conversion event name
        """

        event_filter = FilterExpression(
            filter=Filter(
                field_name="eventName",
                string_filter=Filter.StringFilter(value=event_name)
            )
        )

        result = self._run_report(
            dimensions=[],
            metrics=["eventCount"],
            date_range_days=days,
            dimension_filter=event_filter
        )

        total_leads = result[0]["eventCount"] if result else 0

        # Get basic stats for conversion rate calculation
        basic = self.get_basic_stats(days=days)
        sessions = basic.get("sessions", 0)

        return {
            "total_leads": total_leads,
            "total_sessions": sessions,
            "conversion_rate": round(total_leads / sessions * 100, 2) if sessions > 0 else 0,
            "event_name": event_name
        }
