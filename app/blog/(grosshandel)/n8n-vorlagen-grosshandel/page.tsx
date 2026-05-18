import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "n8n-vorlagen-grosshandel",
  author: "Max Hänsel",
  date: "2026-05-18",
  image: "/blog/n8n-vorlagen-grosshandel/hero.png",
  tags: ["n8n", "grosshandel", "automatisierung", "vorlagen"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "n8n Vorlagen für den Großhandel: 7 Workflow-Templates zum Sofort-Starten | Bluebatch",
  description:
    "Fertige n8n-Vorlagen für Bestelleingang, Lagerabgleich und Rechnungsprüfung im Großhandel. 7 Workflow-Templates mit Import-Anleitung und Praxis-Tipps.",
  openGraph: {
    title: "n8n Vorlagen für den Großhandel: 7 Workflow-Templates",
    description:
      "Fertige n8n-Vorlagen für Großhändler: Bestelleingang, Lagerbestand, Rechnungsprüfung und mehr. Import-Anleitung und Anpassungs-Guide.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/n8n-vorlagen-grosshandel/hero.png",
        width: 1200,
        height: 630,
        alt: "n8n Vorlagen für den Großhandel",
      },
    ],
  },
  alternates: {
    canonical: "/blog/n8n-vorlagen-grosshandel",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          n8n Vorlagen für den Großhandel: 7 Workflow-Templates zum
          Sofort-Starten
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-18">
            18. Mai 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/n8n-vorlagen-grosshandel/hero.png"
          alt="n8n Vorlagen für den Großhandel: Workflow-Templates für Bestelleingang, Lager und Rechnungsprüfung"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="warum-vorlagen">
              Warum Vorlagen statt selbst bauen?
            </Typo.H2>
            <Typo.Paragraph>
              Jeder Workflow von Grund auf neu zu entwickeln kostet Zeit, die im
              Tagesgeschäft fehlt. n8n-Vorlagen lösen dieses Problem: Sie
              liefern getestete Workflow-Strukturen, die ihr importieren und an
              eure Systeme anpassen könnt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Vorteil gegenüber Eigenentwicklung:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Schnellerer Start:</strong> Import statt tagelangem
                Node-Zusammenbau. Ein typischer Template-Import dauert 5
                Minuten, die Anpassung an euer ERP wenige Stunden.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Bewährte Architektur:</strong> Templates nutzen erprobte
                Patterns für Fehlerbehandlung, Retry-Logik und Logging, die
                man beim ersten Mal gerne übersieht.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Lerneffekt:</strong> Durch das Lesen fertiger Workflows
                versteht ihr die Möglichkeiten von{" "}
                <Link
                  href="/blog/was-ist-n8n"
                  className="text-primary-600 hover:underline"
                >
                  n8n
                </Link>{" "}
                schneller als durch Tutorials.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wo-finden">
              Wo findet man n8n-Vorlagen?
            </Typo.H2>
            <Typo.H3>1. Die offizielle n8n Template Library</Typo.H3>
            <Typo.Paragraph>
              Unter n8n.io/workflows listet n8n über 1.800
              Community-Templates. Filter nach Kategorie (z.B. Sales, Finance,
              Operations) oder nach Nodes (z.B. HTTP Request, Postgres, Gmail).
              Jedes Template zeigt eine Vorschau des Workflow-Graphs, eine
              Beschreibung und einen 1-Click-Import in eure n8n-Instanz.
            </Typo.Paragraph>
            <Typo.H3>2. Community und GitHub</Typo.H3>
            <Typo.Paragraph>
              Die{" "}
              <Link
                href="/blog/n8n-community-guide"
                className="text-primary-600 hover:underline"
              >
                n8n-Community
              </Link>{" "}
              auf GitHub und im Forum teilt regelmäßig spezialisierte Workflows.
              Besonders für Nischen-Use-Cases wie EDI-Integration oder
              branchenspezifische ERP-Anbindungen lohnt sich ein Blick in die
              Community.
            </Typo.Paragraph>
            <Typo.H3>3. n8n-Partner und Agenturen</Typo.H3>
            <Typo.Paragraph>
              Für Großhandels-spezifische Vorlagen, die direkt auf eure
              ERP-Landschaft (SAP, Dynamics NAV, microtech) zugeschnitten sind,
              arbeiten Agenturen wie Bluebatch mit vorgefertigten
              Template-Bibliotheken. Wer sich für{" "}
              <Link
                href="/blog/n8n-zertifizierung-guide"
                className="text-primary-600 hover:underline"
              >
                n8n-Zertifizierungen
              </Link>{" "}
              interessiert, findet dort auch den Nachweis der Partnerschaft.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="7-vorlagen">
              7 n8n-Vorlagen für den Großhandel
            </Typo.H2>
            <Typo.Paragraph>
              Die folgenden sieben Templates decken die häufigsten
              Automatisierungspotenziale im Großhandel ab. Jede Vorlage ist
              unabhängig einsetzbar und lässt sich schrittweise mit den anderen
              verbinden.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="bestelleingang">
              1. Bestelleingang automatisieren
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Bestellungen kommen per E-Mail, PDF,
              Portal und Telefon. Das Abtippen ins ERP dauert Stunden und
              produziert Fehler.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Ein Trigger überwacht das
              E-Mail-Postfach (IMAP oder Gmail Node). Eingehende Bestellungen
              werden per KI-Node (OpenAI oder Claude) extrahiert:
              Artikelnummer, Menge, Kundennummer. Die Daten werden gegen den
              Artikelstamm im ERP validiert und als Auftrag angelegt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> IMAP Trigger → AI Agent → HTTP Request
              (ERP-API) → IF (Validierung) → ERP Create Order
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> 2-3 Stunden pro Tag bei 50+
              Bestellungen. Mehr dazu in unserem Artikel zu{" "}
              <Link
                href="/blog/n8n-workflows-fuer-den-grosshandel"
                className="text-primary-600 hover:underline"
              >
                n8n-Workflows für den Großhandel
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="lagerabgleich">
              2. Lagerbestandsabgleich ERP ↔ Shop
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Lagerbestände im Webshop stimmen nicht
              mit dem ERP überein. Kunden bestellen Artikel, die nicht lieferbar
              sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Ein Schedule Trigger läuft alle 15
              Minuten. Der Workflow liest aktuelle Bestände aus dem ERP,
              vergleicht sie mit dem Shop (Shopify, WooCommerce, Shopware) und
              aktualisiert nur geänderte Positionen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> Schedule Trigger → HTTP Request (ERP) →
              HTTP Request (Shop) → Compare Datasets → HTTP Request (Shop
              Update)
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> Eliminiert manuelle
              Bestandskorrekturen komplett. Keine Überverkäufe mehr.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="lieferantenbestellung">
              3. Automatische Lieferantenbestellung
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Wenn der Lagerbestand unter den
              Meldebestand fällt, muss jemand manuell eine Bestellung beim
              Lieferanten auslösen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Der Workflow prüft täglich alle
              Artikel gegen ihre Meldebestände. Bei Unterschreitung wird
              automatisch eine Purchase Order generiert, per E-Mail oder EDI an
              den Lieferanten gesendet und im ERP als offene Bestellung
              verbucht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> Schedule Trigger → HTTP Request
              (Bestände) → Filter ({'<'} Meldebestand) → Generate PO →
              Email/EDI → HTTP Request (ERP Buchung)
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> 1-2 Stunden pro Tag bei 200+
              Artikeln.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="preislistenimport">
              4. Preislistenimport und -verteilung
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Lieferanten schicken neue Preislisten
              als Excel oder CSV. Jemand muss die Preise manuell ins ERP
              übertragen und Verkaufspreise kalkulieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Ein E-Mail-Trigger erkennt
              Preislisten-Anhänge am Absender oder Betreff. Der Workflow parst
              die Excel-Datei (Spreadsheet Node), gleicht Artikelnummern ab,
              berechnet neue Verkaufspreise nach eurer Margenstaffel und
              importiert alles ins ERP.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> IMAP Trigger → Extract Attachment →
              Spreadsheet Node → Merge (Artikelstamm) → Calculate Margins →
              HTTP Request (ERP Price Update)
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> Von 4 Stunden auf 10 Minuten pro
              Preislisten-Update.
            </Typo.Paragraph>
            <BlogImage
              src="/blog/n8n-vorlagen-grosshandel/preislisten-import.png"
              alt="Preislistenimport-Workflow: Excel-Datei wird automatisch geparst, Margen berechnet und ins ERP importiert"
              width={1200}
              height={800}
            />
          </div>

          <Separator />

          <div>
            <Typo.H3 id="rechnungspruefung">
              5. 3-Wege-Rechnungsprüfung
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Jede Eingangsrechnung muss gegen
              Bestellung und Wareneingang abgeglichen werden. Bei hunderten
              Rechnungen pro Woche ein enormer Zeitfresser.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Der Workflow empfängt Rechnungen per
              E-Mail, extrahiert die Daten per OCR oder KI, holt die zugehörige
              Bestellung und den Wareneingang aus dem ERP und prüft alle drei
              Dokumente gegeneinander. Abweichungen über der Toleranzgrenze
              werden dem Freigeber vorgelegt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> IMAP Trigger → AI Extract → HTTP Request
              (PO + GR) → Compare → IF (Toleranz) → Slack/Email Alert oder
              Auto-Approve
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> Von 12 Minuten auf 30 Sekunden pro
              Beleg. Alle Details auf unserer Seite zur{" "}
              <Link
                href="/automatische-rechnungspruefung"
                className="text-primary-600 hover:underline"
              >
                3-Wege-Rechnungsprüfung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="email-triage">
              6. Kundenanfragen klassifizieren (E-Mail-Triage)
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Im Posteingang mischen sich
              Bestellungen, Reklamationen, Preisanfragen und Spam. Jemand liest
              jede Mail und leitet sie weiter.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Ein{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agent
              </Link>{" "}
              klassifiziert eingehende E-Mails nach Typ (Bestellung,
              Reklamation, Preisanfrage, Allgemein) und Dringlichkeit. Je nach
              Kategorie wird die Mail automatisch an die richtige Abteilung
              geroutet oder direkt einen Workflow triggern.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> IMAP Trigger → AI Agent (Classify) →
              Switch → Route to Department / Trigger Sub-Workflow
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> 30-60 Minuten pro Tag für die Person,
              die bisher manuell sortiert hat.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H3 id="auftragsbestaetigung">
              7. Auftragsbestätigungen versenden
            </Typo.H3>
            <Typo.Paragraph>
              <strong>Problem:</strong> Nach der Auftragserfassung wartet der
              Kunde auf eine Bestätigung. In vielen Großhandelsunternehmen
              passiert das manuell oder mit Verzögerung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Vorlage:</strong> Sobald ein neuer Auftrag im ERP
              angelegt wird, generiert der Workflow ein PDF mit Auftragsdaten,
              Liefertermin und AGB. Die Bestätigung geht per E-Mail an den
              Kunden, eine Kopie ins CRM.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nodes:</strong> Webhook (ERP Trigger) → HTTP Request
              (Auftragsdaten) → Generate PDF → Email → HTTP Request (CRM)
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zeitgewinn:</strong> Bestätigung in Sekunden statt
              Stunden. Bessere Kundenerfahrung.
            </Typo.Paragraph>
            <BlogImage
              src="/blog/n8n-vorlagen-grosshandel/auftragsbestaetigung.png"
              alt="Auftragsbestätigungs-Workflow: Vom Wareneingang über automatische PDF-Generierung bis zur Kunden-E-Mail"
              width={1200}
              height={800}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="importieren">
              Vorlagen importieren und anpassen
            </Typo.H2>
            <Typo.Paragraph>
              Der Import einer n8n-Vorlage ist in drei Schritten erledigt:
            </Typo.Paragraph>
            <Typo.H3>Schritt 1: Template importieren</Typo.H3>
            <Typo.Paragraph>
              In eurer n8n-Instanz auf Workflows → Import from URL oder Import
              from File klicken. Bei Templates aus der offiziellen Library
              reicht ein Klick auf Use this workflow. Wer n8n noch{" "}
              <Link
                href="/blog/n8n-installieren-anleitung"
                className="text-primary-600 hover:underline"
              >
                installieren
              </Link>{" "}
              muss, findet in unserem Installations-Guide die Anleitung.
            </Typo.Paragraph>
            <Typo.H3>Schritt 2: Credentials einrichten</Typo.H3>
            <Typo.Paragraph>
              Jede Vorlage nutzt Placeholder-Credentials. Ersetzt sie mit euren
              echten Zugangsdaten: ERP-API-Keys, E-Mail-Konten,
              Shop-Credentials. n8n speichert Credentials verschlüsselt und
              getrennt vom Workflow. Hinweise zur sicheren Konfiguration findet
              ihr in unserem Artikel zu{" "}
              <Link
                href="/n8n-sicherheit"
                className="text-primary-600 hover:underline"
              >
                n8n-Sicherheit beim Self-Hosting
              </Link>
              .
            </Typo.Paragraph>
            <Typo.H3>Schritt 3: Anpassen und testen</Typo.H3>
            <Typo.Paragraph>
              Die meisten Anpassungen betreffen API-Endpunkte (URLs und Pfade
              eures ERP-Systems), Feldmappings (welches ERP-Feld heißt bei euch
              wie) und Geschäftslogik (Toleranzgrenzen, Margenstaffeln,
              Routing-Regeln). Testet jeden Workflow zuerst mit einem einzelnen
              Datensatz, bevor ihr ihn auf das volle Volumen loslasst.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: Vorlagen sind der schnellste Weg
            </Typo.H2>
            <Typo.Paragraph>
              Großhändler, die mit n8n-Vorlagen starten, sparen sich den
              teuersten Teil der Automatisierung: den Entwurf. Die Templates
              liefern die Architektur, ihr liefert die Geschäftslogik.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der beste Einstieg? Nehmt die Vorlage, die euren größten Engpass
              adressiert. Für die meisten Großhändler ist das der
              Bestelleingang oder die Rechnungsprüfung. Wer den Gesamtüberblick
              über die Automatisierungsmöglichkeiten sucht, findet ihn in
              unserem Artikel zu{" "}
              <Link
                href="/blog/digitalisierung-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Digitalisierung im Großhandel
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr braucht Vorlagen, die auf eure ERP-Landschaft zugeschnitten
              sind?{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprecht uns an
              </Link>
              . Wir bauen{" "}
              <Link
                href="/blog/n8n-workflows-fuer-den-grosshandel"
                className="text-primary-600 hover:underline"
              >
                n8n-Workflows für den Großhandel
              </Link>{" "}
              und haben fertige Template-Bibliotheken für SAP, Dynamics NAV und
              microtech.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="warum-vorlagen">
            Warum Vorlagen?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wo-finden">
            Wo findet man Vorlagen?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="7-vorlagen">
            7 Vorlagen für den Großhandel
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bestelleingang">
            1. Bestelleingang
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="lagerabgleich">
            2. Lagerabgleich
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="lieferantenbestellung">
            3. Lieferantenbestellung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="preislistenimport">
            4. Preislistenimport
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="rechnungspruefung">
            5. Rechnungsprüfung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="email-triage">
            6. E-Mail-Triage
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="auftragsbestaetigung">
            7. Auftragsbestätigung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="importieren">
            Import und Anpassung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
