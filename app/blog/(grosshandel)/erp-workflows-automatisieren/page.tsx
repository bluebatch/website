import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { Separator, BlogLayout, BlogHero } from "@/components/blog";
import { resolveHref } from "@/lib/get-canonical-path";

export const metaCustom: BlogMeta = {
  slug: "erp-workflows-automatisieren",
  author: "Max Hänsel",
  date: "2026-04-18",
  image: "/images/data-flow.jpg",
  tags: ["erp", "automatisierung", "n8n", "grosshandel"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "ERP-Workflows automatisieren mit n8n: SAP, Dynamics NAV, microtech | Bluebatch",
  description:
    "ERP-Workflows automatisieren mit n8n: 5 konkrete Beispiele für SAP, Dynamics NAV und microtech. Auftragsimport, Rechnungsprüfung, Lagerwarnung, Kundenstammdaten-Sync und Lieferantenmanagement.",
  openGraph: {
    title: "ERP-Workflows automatisieren mit n8n",
    description:
      "5 konkrete Workflows für SAP, Dynamics NAV und microtech. Von Auftragsimport bis Lieferantenmanagement, alles mit n8n automatisiert.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/data-flow.jpg",
        width: 1200,
        height: 630,
        alt: "ERP-Workflows automatisieren mit n8n",
      },
    ],
  },
  alternates: {
    canonical: "/blog/erp-workflows-automatisieren",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          ERP-Workflows automatisieren: So verbindet n8n SAP, Dynamics NAV und
          microtech
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-04-18">
            18. April 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/images/data-flow.jpg"
          alt="ERP-Workflows automatisieren mit n8n"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="warum-erp-workflow-automatisierung">
              Warum ERP-Workflow-Automatisierung jetzt wichtig ist
            </Typo.H2>
            <Typo.Paragraph>
              Großhändler stehen 2026 unter doppeltem Druck. Auf der einen
              Seite steigen die Anforderungen an Geschwindigkeit und
              Datenqualität. Auf der anderen Seite fehlt es an Fachkräften,
              die manuelle Prozesse am Laufen halten. ERP-Workflow-Automatisierung
              ist kein Nice-to-have mehr, sondern eine operative Notwendigkeit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Problem ist selten das ERP-System selbst. SAP, Dynamics NAV
              und microtech können alle mehr, als die meisten Unternehmen
              nutzen. Das Problem sind die Prozesse drumherum: Daten, die
              manuell von einem System ins andere übertragen werden. E-Mails,
              die als Trigger für Folgeprozesse dienen. Excel-Listen, die als
              Brücke zwischen zwei Systemen fungieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau hier setzt n8n an. Die Open-Source-Plattform verbindet
              ERP-Systeme mit dem Rest der IT-Landschaft und automatisiert die
              Prozesse dazwischen. Ohne monatelanges Customizing, ohne
              Middleware-Lizenzen, ohne Vendor-Lock-in.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="typische-erp-engpaesse">
              Die typischen ERP-Engpässe im Großhandel
            </Typo.H2>
            <Typo.Paragraph>
              Bevor wir über Lösungen sprechen, lohnt sich ein ehrlicher
              Blick auf die häufigsten Probleme. In unseren Projekten sehen
              wir immer wieder dieselben drei Engpässe.
            </Typo.Paragraph>

            <Typo.H3>Manuelle Dateneingabe</Typo.H3>
            <Typo.Paragraph>
              Bestellungen kommen per E-Mail, PDF oder Fax. Jemand tippt die
              Daten ins ERP. Das dauert, produziert Fehler und bindet
              qualifizierte Mitarbeiter an Routineaufgaben. Bei einem
              typischen Großhändler mit 200 Bestellungen pro Tag summiert
              sich das auf 30 bis 40 Stunden pro Woche, nur für die
              Dateneingabe.
            </Typo.Paragraph>

            <Typo.H3>Medienbrüche zwischen Systemen</Typo.H3>
            <Typo.Paragraph>
              Das ERP kennt die Bestellung. Das Lager kennt den Bestand. Die
              Buchhaltung kennt die Rechnung. Aber diese Systeme reden nicht
              automatisch miteinander. Stattdessen werden Daten exportiert,
              in Excel umformatiert und im nächsten System wieder importiert.
              Jeder Medienbruch ist eine potenzielle Fehlerquelle.
            </Typo.Paragraph>

            <Typo.H3>Fehlende Schnittstellen</Typo.H3>
            <Typo.Paragraph>
              Viele ERP-Systeme bieten APIs, aber die sind oft schlecht
              dokumentiert, langsam oder auf bestimmte Module beschränkt.
              Eigenentwicklungen über BAPI (SAP), OData (Dynamics) oder ODBC
              (microtech) sind teuer und schwer zu warten. Das führt dazu,
              dass Integrationen gar nicht erst gebaut werden.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="n8n-als-erp-integrationsplattform">
              n8n als ERP-Integrationsplattform
            </Typo.H2>
            <Typo.Paragraph>
              n8n ist eine Workflow-Automatisierungsplattform, die sich
              besonders gut für ERP-Integrationen eignet. Der Grund ist
              einfach: n8n spricht alle Protokolle, die im ERP-Umfeld
              relevant sind.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>REST-APIs</strong> für moderne Systeme wie SAP S/4HANA,
                Dynamics 365 Business Central und Cloud-Dienste.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>SOAP/XML</strong> für ältere SAP-Systeme (RFC/BAPI) und
                Legacy-Schnittstellen, die in vielen Großhandelsunternehmen
                noch im Einsatz sind.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>ODBC/Datenbankzugriff</strong> für Systeme wie microtech
                büro+, die primär über ihre SQL-Datenbank angebunden werden.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Custom Nodes</strong> für proprietäre Schnittstellen.
                n8n ist Open Source, das heißt, jede Integration lässt sich
                als eigener Node entwickeln und warten.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Dazu kommt Self-Hosting: Sensible ERP-Daten wie Einkaufspreise,
              Kundenkonditionen und Lieferantenverträge bleiben auf euren
              eigenen Servern. Für Großhändler mit strengen
              Compliance-Anforderungen ist das oft ein K.-o.-Kriterium.
              Mehr dazu in unserem Artikel zu{" "}
              <Link
                href="/blog/n8n-workflows-fuer-den-grosshandel"
                className="text-primary-600 hover:underline"
              >
                n8n-Workflows für den Großhandel
              </Link>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fuenf-konkrete-workflows">
              5 konkrete ERP-Workflows mit n8n
            </Typo.H2>
            <Typo.Paragraph>
              Die folgenden fünf Workflows lösen die häufigsten
              Automatisierungsprobleme im ERP-Umfeld. Jeder Workflow ist
              unabhängig umsetzbar und liefert sofort messbare Ergebnisse.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="auftragsimport-webshop">
              Workflow 1: Auftragsimport aus Webshop ins ERP
            </Typo.H3>
            <Typo.Paragraph>
              Der Klassiker: Kunden bestellen im Webshop, aber die
              Aufträge müssen manuell ins ERP übertragen werden. Das liegt
              daran, dass Webshop und ERP unterschiedliche Datenformate
              nutzen. Artikelnummern stimmen nicht überein,
              Preiskategorien weichen ab, Lieferadressen müssen
              validiert werden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der n8n-Workflow überwacht neue Bestellungen im Webshop per
              Webhook oder Polling. Sobald eine Bestellung eingeht, wird
              sie transformiert: Artikelnummern werden gegen den
              ERP-Stamm gemappt, Preise validiert, Lieferadressen
              normalisiert. Das Ergebnis ist ein sauberer Auftrag, der
              direkt im ERP angelegt wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Technisch:</strong> Webhook-Trigger, HTTP-Request
              an die Webshop-API, Mapping-Node für Artikelnummern,
              IF-Node für Sonderfälle (z. B. Neukunden), abschließend
              ein POST an die ERP-API. Bei Fehlern geht eine
              Benachrichtigung an den Vertrieb. Details zur automatischen
              Erfassung von Bestellungen findet ihr auf unserer{" "}
              <Link
                href="/bestellung-erfassen"
                className="text-primary-600 hover:underline"
              >
                Use-Case-Seite zur Bestellerfassung
              </Link>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="rechnungspruefung-drei-wege">
              Workflow 2: Rechnungsprüfung mit 3-Wege-Match
            </Typo.H3>
            <Typo.Paragraph>
              Jede Eingangsrechnung muss gegen die ursprüngliche
              Bestellung und den tatsächlichen Wareneingang abgeglichen
              werden. Im Großhandel mit hunderten Rechnungen pro Woche
              ist das eine der zeitintensivsten Aufgaben in der
              Buchhaltung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der n8n-Workflow automatisiert den kompletten
              3-Wege-Abgleich. Eingangsrechnungen werden per OCR oder
              KI-Extraktion ausgelesen. Die extrahierten Daten werden
              mit der Bestellung im ERP und dem Wareneingang
              abgeglichen. Toleranzregeln filtern Cent-Abweichungen
              heraus. Echte Diskrepanzen werden automatisch an den
              zuständigen Freigeber eskaliert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Ergebnis:</strong> Die Bearbeitungszeit pro Beleg
              sinkt von durchschnittlich 12 Minuten auf unter 30
              Sekunden. Die Fehlerquote geht gegen null. Alle Details
              zur Umsetzung findet ihr auf unserer Seite zur{" "}
              <Link
                href="/automatische-rechnungspruefung"
                className="text-primary-600 hover:underline"
              >
                automatischen Rechnungsprüfung
              </Link>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="lagerbestandswarnung">
              Workflow 3: Lagerbestandswarnung in Echtzeit
            </Typo.H3>
            <Typo.Paragraph>
              Meldebestände im ERP sind statisch. Sie berücksichtigen
              weder saisonale Schwankungen noch aktuelle Auftragseingänge.
              Das Ergebnis: Entweder fehlt Ware, wenn sie gebraucht wird,
              oder das Lager ist mit Ladenhütern vollgestellt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein n8n-Workflow prüft Lagerbestände in definierten
              Intervallen (z. B. stündlich) und vergleicht sie mit
              offenen Aufträgen, historischen Abverkaufsdaten und
              aktuellen Lieferzeiten. Wenn ein Artikel unter den
              dynamisch berechneten Mindestbestand fällt, wird
              automatisch eine Warnung generiert, inklusive
              Nachbestellvorschlag mit empfohlener Menge und
              bevorzugtem Lieferanten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Technisch:</strong> Cron-Trigger, SQL-Query gegen
              die ERP-Datenbank, Berechnungslogik im Function-Node,
              Benachrichtigung per E-Mail, Teams oder Slack. Optional
              wird direkt eine Purchase Order im ERP angelegt. Wer den
              Workflow mit KI kombiniert, kann Bedarfsprognosen
              einbauen, die über einfache Meldebestände hinausgehen.{" "}
              Wie ein solcher Agent in n8n konkret gebaut wird (mit
              Tools, Memory und Guardrails), zeigt die Anleitung{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                n8n KI-Agenten erstellen
              </Link>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="kundenstammdaten-sync">
              Workflow 4: Kundenstammdaten-Sync zwischen CRM und ERP
            </Typo.H3>
            <Typo.Paragraph>
              Der Vertrieb pflegt Kundendaten im CRM. Die Buchhaltung
              arbeitet mit den Stammdaten im ERP. In der Praxis weichen
              beide Datensätze voneinander ab: Neue Adressen werden nur
              im CRM aktualisiert, Kreditlimits nur im ERP, und
              Ansprechpartner existieren in beiden Systemen mit
              unterschiedlichen Schreibweisen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der n8n-Workflow synchronisiert Kundenstammdaten
              bidirektional. Änderungen im CRM werden in Echtzeit ans
              ERP weitergegeben und umgekehrt. Konfliktregeln definieren,
              welches System bei Widersprüchen gewinnt (z. B. CRM für
              Kontaktdaten, ERP für Finanzdaten). Dubletten werden
              automatisch erkannt und markiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das klingt trivial, ist es aber nicht. Ohne diesen Sync
              arbeiten Vertrieb und Buchhaltung mit unterschiedlichen
              Wahrheiten. Das führt zu falschen Lieferadressen,
              überschrittenen Kreditlimits und frustrierten Kunden. Mehr
              zum Thema KI im Großhandel und wie sie Datenqualität
              verbessert, findet ihr auf unserer Seite zur{" "}
              <Link
                href={resolveHref("/ki-implementierung")}
                className="text-primary-600 hover:underline"
              >
                KI-Implementierung
              </Link>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="lieferantenmanagement">
              Workflow 5: Lieferantenmanagement automatisieren
            </Typo.H3>
            <Typo.Paragraph>
              Im Großhandel entscheiden Lieferantenbeziehungen über Marge
              und Lieferfähigkeit. Trotzdem läuft das
              Lieferantenmanagement in vielen Unternehmen weitgehend
              manuell: Zertifikate werden per E-Mail angefragt,
              Liefertreue wird in Excel getrackt, Preisvergleiche
              basieren auf veralteten Listen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein n8n-Workflow zentralisiert das Lieferantenmanagement.
              Er überwacht Zertifikats-Ablaufdaten und schickt
              automatisch Erinnerungen an Lieferanten. Er aggregiert
              Liefertreue-Daten aus dem ERP (pünktliche vs. verspätete
              Lieferungen, Mengenabweichungen, Qualitätsreklamationen)
              und erstellt ein monatliches Lieferanten-Scoring.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Ergebnis:</strong> Einkäufer sehen auf einen Blick,
              welche Lieferanten zuverlässig sind und welche nicht. Das
              spart nicht nur Zeit bei der Lieferantenbewertung, sondern
              schafft eine datenbasierte Grundlage für
              Preisverhandlungen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="sap-dynamics-microtech">
              SAP vs. Dynamics NAV vs. microtech: Integrationswege im
              Vergleich
            </Typo.H2>
            <Typo.Paragraph>
              Nicht jedes ERP-System lässt sich gleich anbinden. Die drei
              im Großhandel am weitesten verbreiteten Systeme
              unterscheiden sich erheblich in ihren
              Integrationsmöglichkeiten.
            </Typo.Paragraph>

            <Typo.H3>SAP (Business One / S/4HANA)</Typo.H3>
            <Typo.Paragraph>
              SAP Business One bietet eine Service Layer REST-API, die
              die meisten Geschäftsobjekte abdeckt. n8n greift über
              HTTP-Request-Nodes direkt auf diese API zu. Für ältere
              SAP-Installationen steht RFC/BAPI über einen Custom Node
              zur Verfügung. Die Authentifizierung läuft über Session-
              oder OAuth-Tokens. Hauptvorteil: Die API ist gut
              dokumentiert und stabil.
            </Typo.Paragraph>

            <Typo.H3>Dynamics NAV / Business Central</Typo.H3>
            <Typo.Paragraph>
              Microsoft Dynamics nutzt OData-Endpunkte, die sich mit
              Standard-HTTP-Nodes ansprechen lassen. Business Central
              (die Cloud-Version) bietet zusätzlich eine REST-API mit
              OAuth-2.0-Authentifizierung. Ältere NAV-Installationen
              laufen über SOAP-Webservices. Hauptvorteil: Enge
              Integration mit dem Microsoft-Ökosystem (Azure, Power
              Platform, Teams).
            </Typo.Paragraph>

            <Typo.H3>microtech büro+</Typo.H3>
            <Typo.Paragraph>
              microtech ist im deutschen Mittelstand weit verbreitet,
              bietet aber keine native REST-API. Die Anbindung erfolgt
              über ODBC-Zugriff auf die SQL-Datenbank oder über die
              microtech-eigene COM-Schnittstelle. In n8n wird das über
              den MySQL/MSSQL-Node oder einen Custom Node gelöst.
              Hauptvorteil: Direkter Datenbankzugriff ermöglicht sehr
              flexible Abfragen. Nachteil: Es gibt keine offizielle
              API-Dokumentation, daher ist Reverse Engineering der
              Datenbankstruktur nötig.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Unabhängig vom ERP-System gilt: Die Integrationsarbeit ist
              beim ersten Workflow am größten. Sobald die Verbindung
              steht, lassen sich weitere Workflows mit deutlich weniger
              Aufwand aufbauen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="roi-und-implementierung">
              ROI und Implementierungsdauer
            </Typo.H2>
            <Typo.Paragraph>
              Die häufigste Frage in Erstgesprächen: Was kostet das und
              wie schnell rechnet es sich? Hier sind realistische Zahlen
              aus unseren Projekten.
            </Typo.Paragraph>

            <Typo.H3>Implementierungsdauer</Typo.H3>
            <Typo.Paragraph>
              Ein einzelner Workflow (z. B. Auftragsimport oder
              Lagerbestandswarnung) ist in zwei bis vier Wochen
              produktionsreif. Das umfasst Analyse, Entwicklung, Test
              und Go-live. Komplexere Workflows wie der
              3-Wege-Rechnungsabgleich oder der bidirektionale
              Stammdaten-Sync brauchen vier bis acht Wochen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der erste Workflow dauert immer am längsten, weil die
              ERP-Anbindung aufgebaut werden muss. Jeder weitere
              Workflow nutzt dieselbe Infrastruktur und geht
              entsprechend schneller.
            </Typo.Paragraph>

            <Typo.H3>Return on Investment</Typo.H3>
            <Typo.Paragraph>
              Die Einsparungen hängen vom Workflow ab, aber einige
              Richtwerte aus der Praxis:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Auftragsimport:</strong> 20 bis 30 Stunden pro
                Woche bei 200 Bestellungen pro Tag. Bei einem
                Sachbearbeiter-Stundensatz von 35 Euro sind das 700 bis
                1.050 Euro pro Woche.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Rechnungsprüfung:</strong> 15 bis 25 Stunden pro
                Woche. Dazu kommen vermiedene Fehler (doppelte
                Zahlungen, Skontoverlust), die schwerer zu beziffern
                sind, aber oft in den vierstelligen Bereich pro Monat
                gehen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Stammdaten-Sync:</strong> Weniger direkte
                Zeiteinsparung, dafür Vermeidung von Folgefehlern
                (falsche Lieferadressen, überschrittene Kreditlimits).
                Der ROI zeigt sich in weniger Reklamationen und
                schnelleren Abläufen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Lagerbestandswarnung:</strong> Reduziert
                Fehlbestände um 40 bis 60 Prozent und senkt
                Überbestände um 15 bis 25 Prozent. Der
                Kapitalfreisetzungseffekt ist bei Großhändlern mit
                großen Lägern enorm.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              In den meisten Fällen amortisiert sich der erste Workflow
              innerhalb von drei bis sechs Monaten. Danach läuft die
              Einsparung dauerhaft weiter.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: ERP-Automatisierung ist kein Großprojekt
            </Typo.H2>
            <Typo.Paragraph>
              ERP-Workflows zu automatisieren klingt nach einem großen
              IT-Projekt. In der Praxis ist es das Gegenteil. Mit n8n
              baut ihr einzelne, modulare Workflows, die unabhängig
              voneinander funktionieren. Kein Rip-and-Replace, keine
              18-monatige Implementierung, kein sechsstelliges Budget.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der beste Einstieg ist der Prozess, der euch heute am
              meisten Zeit kostet. Ob das die Auftragserfassung ist, die
              Rechnungsprüfung oder der Stammdaten-Sync: Der erste
              Workflow zeigt innerhalb weniger Wochen, was möglich ist.
              Und jeder weitere Workflow wird einfacher, weil die
              ERP-Anbindung bereits steht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr wollt wissen, welcher Workflow bei euch den größten
              Hebel hat?{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprecht uns an
              </Link>{" "}
              und wir schauen uns eure Prozesse gemeinsam an. In einem
              kostenlosen Erstgespräch identifizieren wir die drei bis
              fünf Workflows mit dem höchsten Einsparpotenzial und
              rechnen den ROI für euren konkreten Fall durch.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="warum-erp-workflow-automatisierung">
            Warum ERP-Workflow-Automatisierung?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="typische-erp-engpaesse">
            Typische ERP-Engpässe
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="n8n-als-erp-integrationsplattform">
            n8n als Integrationsplattform
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fuenf-konkrete-workflows">
            5 konkrete Workflows
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="sap-dynamics-microtech">
            SAP vs. Dynamics vs. microtech
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="roi-und-implementierung">
            ROI und Implementierung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
