#!/usr/bin/env python3
"""
GA4 Analysis Agent - Main CLI

Analyzes Google Analytics 4 data for SEO insights.

Usage:
    python main.py --status                    # Show GA4 connection status + leads
    python main.py --top-pages                 # Top organic landing pages
    python main.py --top-pages --limit 50      # Top 50 pages
    python main.py --underperforming           # High traffic, low conversion
    python main.py --leads                     # Lead analysis (kontaktformular_gesendet)
    python main.py --date-range 30             # Last 30 days (default: 28)

Requirements:
    - GA4 Property ID in config.py
    - Service Account credentials
    - Google Analytics Data API enabled
"""

import argparse

from config import GA4_PROPERTY_ID, CREDENTIALS_PATH
from ga4_client import GA4Client
from traffic_analyzer import (
    get_top_organic_pages,
    get_underperforming_pages,
    get_device_breakdown,
)


def cmd_status():
    """Check GA4 connection and show basic stats."""
    print("\n" + "=" * 60)
    print("GA4 Analysis Agent - Status")
    print("=" * 60)

    try:
        client = GA4Client()
        stats = client.get_basic_stats()
        lead_stats = client.get_lead_stats()

        print(f"\nProperty ID: {GA4_PROPERTY_ID}")
        print(f"Connection: OK")
        print(f"\nLast 28 Days:")
        print(f"  Total Sessions: {stats.get('sessions', 'N/A'):,}")
        print(f"  Organic Sessions: {stats.get('organic_sessions', 'N/A'):,}")
        print(f"  Organic %: {stats.get('organic_percent', 'N/A')}%")
        print(f"  Conversions (GA4): {stats.get('conversions', 'N/A')}")

        print(f"\nLead-Tracking (Event: {lead_stats.get('event_name')}):")
        print(f"  Kontaktformulare: {lead_stats.get('total_leads', 0)}")
        print(f"  Conversion Rate: {lead_stats.get('conversion_rate', 0)}%")

    except FileNotFoundError:
        print(f"\nCredentials not found: {CREDENTIALS_PATH}")
        print("\nSetup:")
        print("1. Create Service Account in Google Cloud Console")
        print("2. Download JSON credentials")
        print("3. Save as: credentials.json in this directory")
        print("4. Add Service Account email to GA4 Property")

    except Exception as e:
        print(f"\nError: {e}")


def cmd_top_pages(limit: int = 20, date_range: int = 28):
    """Show top organic landing pages."""
    print("\n" + "=" * 60)
    print(f"Top {limit} Organic Landing Pages (Last {date_range} Days)")
    print("=" * 60)

    try:
        pages = get_top_organic_pages(limit=limit, days=date_range)

        print(f"\n{'Page':<50} {'Sessions':>10} {'Bounce':>8} {'Conv':>6}")
        print("-" * 76)

        for page in pages:
            url = page['page'][:48] + '..' if len(page['page']) > 50 else page['page']
            print(f"{url:<50} {page['sessions']:>10,} {page['bounce_rate']:>7.1f}% {page['conversions']:>6}")

        print(f"\nTotal Organic Sessions: {sum(p['sessions'] for p in pages):,}")

    except Exception as e:
        print(f"\nError: {e}")


def cmd_underperforming(limit: int = 20, date_range: int = 28):
    """Find pages with high traffic but low engagement/conversion."""
    print("\n" + "=" * 60)
    print(f"Underperforming Pages (High Traffic, Low Conversion)")
    print("=" * 60)

    try:
        pages = get_underperforming_pages(limit=limit, days=date_range)

        if not pages:
            print("\nNo underperforming pages found!")
            return

        print(f"\n{'Page':<45} {'Sessions':>8} {'Bounce':>8} {'Engage':>8} {'Issue':<15}")
        print("-" * 90)

        for page in pages:
            url = page['page'][:43] + '..' if len(page['page']) > 45 else page['page']
            print(f"{url:<45} {page['sessions']:>8,} {page['bounce_rate']:>7.1f}% {page['engagement']:>7.1f}% {page['issue']:<15}")

        print(f"\nRecommendations:")
        print("  - High Bounce Rate (>70%): Improve content relevance, page speed")
        print("  - Low Engagement (<30%): Add CTAs, internal links, better content")
        print("  - No Conversions: Check CTA placement, value proposition")

    except Exception as e:
        print(f"\nError: {e}")


def cmd_leads(date_range: int = 28):
    """Show lead/conversion details from kontaktformular_gesendet event."""
    print("\n" + "=" * 60)
    print(f"Lead Analysis - Kontaktformular (Last {date_range} Days)")
    print("=" * 60)

    try:
        client = GA4Client()

        lead_stats = client.get_lead_stats(days=date_range)
        print(f"\nUebersicht:")
        print(f"  Total Leads: {lead_stats.get('total_leads', 0)}")
        print(f"  Total Sessions: {lead_stats.get('total_sessions', 0):,}")
        print(f"  Conversion Rate: {lead_stats.get('conversion_rate', 0)}%")

        leads_by_page = client.get_leads_by_page(days=date_range)

        if leads_by_page:
            print(f"\nLeads nach Landing Page:")
            print(f"\n{'Page':<55} {'Leads':>8}")
            print("-" * 65)

            for row in leads_by_page[:20]:
                page = row['landingPage'][:53] + '..' if len(row['landingPage']) > 55 else row['landingPage']
                print(f"{page:<55} {row['eventCount']:>8}")
        else:
            print("\nKeine Leads in diesem Zeitraum gefunden.")

        leads_by_source = client.get_leads_by_source(days=date_range)

        if leads_by_source:
            print(f"\nLeads nach Traffic-Quelle:")
            print(f"\n{'Channel':<25} {'Source/Medium':<30} {'Leads':>8}")
            print("-" * 65)

            for row in leads_by_source[:15]:
                channel = row['sessionDefaultChannelGroup'][:23] if len(row['sessionDefaultChannelGroup']) > 25 else row['sessionDefaultChannelGroup']
                source = row['sessionSourceMedium'][:28] if len(row['sessionSourceMedium']) > 30 else row['sessionSourceMedium']
                print(f"{channel:<25} {source:<30} {row['eventCount']:>8}")

        leads_timeline = client.get_leads(days=date_range)

        if leads_timeline:
            date_counts = {}
            for row in leads_timeline:
                date = row['date']
                date_counts[date] = date_counts.get(date, 0) + row['eventCount']

            if date_counts:
                print(f"\nLeads Timeline (letzte 14 Tage):")
                sorted_dates = sorted(date_counts.items(), reverse=True)[:14]

                for date, count in sorted_dates:
                    formatted_date = f"{date[0:4]}-{date[4:6]}-{date[6:8]}"
                    bar = "#" * count
                    print(f"  {formatted_date}: {bar} {count}")

        print(f"\nTipps zur Lead-Optimierung:")
        print("  - CTAs auf Top-Traffic-Seiten platzieren")
        print("  - Kontaktformular UX pruefen")
        print("  - Organic Traffic -> Lead Conversion tracken")

    except Exception as e:
        print(f"\nError: {e}")


def main():
    parser = argparse.ArgumentParser(
        description="GA4 Analysis Agent - SEO Traffic Insights",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
    python main.py --status
    python main.py --top-pages --limit 50
    python main.py --underperforming
    python main.py --leads
        """
    )

    parser.add_argument('--status', action='store_true',
                        help='Show GA4 connection status')
    parser.add_argument('--top-pages', action='store_true',
                        help='Show top organic landing pages')
    parser.add_argument('--underperforming', action='store_true',
                        help='Find underperforming pages')
    parser.add_argument('--leads', action='store_true',
                        help='Show lead/conversion analysis (kontaktformular_gesendet)')
    parser.add_argument('--limit', type=int, default=20,
                        help='Number of results (default: 20)')
    parser.add_argument('--date-range', type=int, default=28,
                        help='Days to analyze (default: 28)')

    args = parser.parse_args()

    if args.status:
        cmd_status()
    elif args.top_pages:
        cmd_top_pages(limit=args.limit, date_range=args.date_range)
    elif args.underperforming:
        cmd_underperforming(limit=args.limit, date_range=args.date_range)
    elif args.leads:
        cmd_leads(date_range=args.date_range)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
