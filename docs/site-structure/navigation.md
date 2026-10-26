# Navigation und Footer

So sind Hauptnavigation, Handy-Menü und Footer aufgebaut. Code:
`components/layout/navigation.tsx`, `navigation-mobile.tsx`, `footer.tsx`.
Stand 2026-10-26, entspricht dem Code.

## Prinzip: Hub zuerst

Die Navigation führt zu Hubs, nicht zu einzelnen Money- oder Content-Seiten
darunter. Ausnahme sind die Basisseiten des Claude-Angebots unter „Managed
Claude“, die direkt im Menü stehen. Das Mega-Menü geht höchstens bis Ebene 3
(Branchen, Großhandel, Private AI). Ab dort navigiert man über die Hub-Seiten
selbst, die Hubs sind die vierte Navigationsebene. So bleibt jede Seite in
höchstens zwei Klicks erreichbar: Navigation, Hub, Seite.

Nicht in der Navigation, sondern einen Klick unter ihrem Hub: alle Money-,
Content- und Katalogseiten der Unter-Hubs, die n8n-Unterseiten (Hosting,
Wartung, Schulungen und so weiter), die übrigen Tool-Porträts, einzelne
Rechner, Standorte (nur im Footer) und Blogartikel außer den fünf neuesten.

## Desktop: Mega-Menüs

```
[Logo]   Managed Claude ▾   Branchen ▾   Blog ▾   Über uns ▾   [Kontakt]

Managed Claude ▾  (Auslöser ohne Link, die Übersicht ist die Startseite)
│  SO ARBEITEN WIR          ANGEBOT                       INTEGRATIONEN (→ Hub)   WEITERE TOOLS (→ Hub)
│  ├─ Wie es funktioniert   ├─ Claude App                 ├─ DATEV                ├─ n8n (→ Hub)
│  ├─ Datenschutz           ├─ Managed Claude Interface   ├─ Microsoft 365        ├─ Make
│  ├─ Onboarding            ├─ Claude API                 └─ Websuche             └─ Alle Tools
│  ├─ Coaching              ├─ Use Cases
│  └─ Preise                └─ Governance & Compliance

Branchen ▾  (Link auf branchen/)
│  GROSSHANDEL (→ Hub)    STEUERBERATER (→ Hub)      ANWÄLTE (→ Hub)
│  ├─ Private AI          ├─ Private AI              ├─ Private AI
│  ├─ KI-Assistenten      ├─ Claude Cowork           ├─ Claude Cowork
│  ├─ KI-Agenten          ├─ KI-Agenten              ├─ KI-Agenten
│  ├─ Chatbots            ├─ Workflows               └─ Workflows
│  ├─ Workflows           └─ Kanzlei-Organisation
│  └─ ROI-Rechner

Blog ▾:      die fünf neuesten Artikel, Alle Artikel (→ Hub)
Über uns ▾:  Mit euch wachsen, Das Team, Karriere, Kontakt
```

## Handy: Drawer mit einer Akkordeon-Ebene

Keine tiefen Verschachtelungen. Der Drawer hat genau eine Akkordeon-Ebene,
darunter flache Listen mit tippbaren Gruppen-Überschriften (Überschrift =
Link auf den Hub).

```
☰ Drawer
├─ Managed Claude ▾   (Akkordeon)
│    Wie es funktioniert · Datenschutz · Onboarding · Coaching · Preise
│    Claude App · Managed Claude Interface · Claude API · Use Cases
│    Governance & Compliance
│    Integrationen → Hub
│    Weitere Tools → Hub   (n8n und einzelne Tools nicht im Drawer)
├─ Branchen ▾         (Akkordeon)
│    Großhandel → Hub      Private AI · KI-Assistenten · KI-Agenten ·
│                          Chatbots · Workflows · ROI-Rechner
│    Steuerberater → Hub   Private AI · Claude Cowork · KI-Agenten ·
│                          Workflows · Kanzlei-Organisation
│    Anwälte → Hub         Private AI · Claude Cowork · KI-Agenten · Workflows
├─ Blog               (direkter Link)
├─ Über uns ▾         (Akkordeon)
│    Startseite · Mit euch wachsen · Das Team · Karriere · Kontakt
└─ [Kontakt]          (fest am unteren Rand des Drawers)
```

Mobil übernehmen die Hub-Seiten die Rolle des Mega-Menüs. Deshalb müssen
Hubs auf dem Handy sehr gut navigierbar sein, aber als gestaltete,
thematische Einstiege (siehe [Grundsätze](grundsaetze.md)), nicht als
Listen-Übersicht.

## Footer

Desktop vier Spalten, mobil dieselben Inhalte untereinander. Der Footer
spiegelt die Säulen, keine Einzelseiten: Angebotsseiten trägt das
Managed-Claude-Menü.

```
BRANCHEN         ANGEBOT & WISSEN    UNTERNEHMEN         RECHTLICHES
Großhandel       Claude Preise       Mit euch wachsen    Impressum
Steuerberater    Weitere Tools       Das Team            Datenschutz
Anwälte          Blog                Karriere
                                     Standorte
                                     Kontakt
```

- **Standorte** sind nur über den Footer verlinkt (und über die Suche).
- Der **ROI-Rechner** steht bewusst nicht im Footer, er gehört zum
  Großhandel und ist über dessen Menüspalte und Hub verlinkt.
- **Funnel-Landingpages** tauchen weder in der Navigation noch im Footer
  auf (Sackgassen-Prinzip).

## Neue Seite in die Navigation?

Nur Hubs und Basisseiten des Claude-Angebots. Ein neuer Hub braucht
Einträge in `navigation.tsx` und `navigation-mobile.tsx` und ein Label in
`components/layout/breadcrumbs.tsx`. Danach diese Datei anpassen.
