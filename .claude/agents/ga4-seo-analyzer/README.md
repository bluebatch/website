# GA4 Analysis Agent

Analysiert Google Analytics 4 Daten für SEO Insights.

## Features

- **Top Organic Pages**: Beste Landing Pages nach organischem Traffic
- **Underperforming Detection**: Seiten mit hohem Traffic aber schlechter Conversion
- **GSC Korrelation**: Vergleich GA4 Sessions vs. GSC Clicks
- **Device Breakdown**: Desktop vs. Mobile Traffic

## Setup

### 1. Google Cloud Setup

```bash
# Google Cloud Console öffnen
https://console.cloud.google.com

# API aktivieren
APIs & Services → Enable APIs → "Google Analytics Data API"

# Service Account erstellen
IAM & Admin → Service Accounts → Create Service Account
- Name: ga4-seo-agent
- Role: Viewer
- Create Key → JSON → Download
```

### 2. Credentials speichern

```bash
# JSON als credentials.json speichern
mv ~/Downloads/your-project-*.json credentials.json
```

### 3. GA4 Zugriff gewähren

1. GA4 öffnen → Admin → Property Access Management
2. Add Users → Service Account Email einfügen
3. Role: Viewer

### 4. Config anpassen

```python
# config.py
GA4_PROPERTY_ID = "123456789"  # Deine Property ID
```

### 5. Dependencies installieren

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Usage

```bash
# Status prüfen
python main.py --status

# Top organic pages
python main.py --top-pages --limit 50

# Underperforming pages finden
python main.py --underperforming

# GA4 vs GSC vergleichen
python main.py --compare-gsc

# Report exportieren
python main.py --export ga4_report.csv
```

## Output Beispiel

```
============================================================
Top 20 Organic Landing Pages (Last 28 Days)
============================================================

Page                                              Sessions    Bounce    Conv
----------------------------------------------------------------------------
/blog/private-ki-mit-ubuntu-ollama/                    489     42.3%      2
/ki-beratung/                                          234     38.1%      5
/cloud-consulting/                                     189     45.2%      3
...

Total Organic Sessions: 2,847
```

## Metriken

| Metrik          | Beschreibung                                |
| --------------- | ------------------------------------------- |
| Sessions        | Anzahl Besuche                              |
| Bounce Rate     | % der Single-Page-Sessions                  |
| Engagement Rate | % der engaged Sessions (>10s oder 2+ Pages) |
| Conversions     | Goal Completions                            |
