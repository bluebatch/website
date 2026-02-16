#!/usr/bin/env python3
"""
GA4 Analysis Agent - Configuration

Setup:
1. Create a Google Cloud Project
2. Enable Google Analytics Data API
3. Create Service Account with "Viewer" role
4. Download JSON credentials
5. Add Service Account email to GA4 Property (Admin > Property Access)
6. Set GA4_PROPERTY_ID below
"""

import os
from pathlib import Path

# Fix for gRPC DNS resolution issues with c-ares
# This bypasses SRV record lookups that fail on some networks
os.environ.setdefault("GRPC_DNS_RESOLVER", "native")

# GA4 Property ID (found in GA4 Admin > Property Settings)
# Format: 123456789 (numbers only, no "properties/" prefix)
GA4_PROPERTY_ID = os.getenv("GA4_PROPERTY_ID", "524484780")

# Path to Service Account credentials JSON
# GA4 requires Service Account credentials (not OAuth2)
# Download from: Google Cloud Console → IAM → Service Accounts → Keys → JSON
CREDENTIALS_PATH = os.getenv(
    "GA4_CREDENTIALS_PATH",
    str(Path(__file__).parent.parent.parent.parent / ".credentials" / "bluebatch-487312-b3153ecdb332.json")
)

# Default date range for reports
DEFAULT_DATE_RANGE_DAYS = 28

# Thresholds for underperforming page detection
HIGH_BOUNCE_THRESHOLD = 0.7  # 70%
LOW_ENGAGEMENT_THRESHOLD = 0.3  # 30%
MIN_SESSIONS_FOR_ANALYSIS = 50
