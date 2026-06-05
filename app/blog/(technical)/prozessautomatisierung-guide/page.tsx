import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "prozessautomatisierung-guide",
  author: "Max Hänsel",
  date: "2026-06-01",
  image: "/blog/prozessautomatisierung-guide/hero.png",
  tags: ["automatisierung", "grosshandel"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Prozessautomatisierung 2026: Der komplette Guide für den Mittelstand | Bluebatch",
  description:
    "Prozessautomatisierung im Mittelstand: Welche Prozesse sich lohnen, konkrete Großhandel-Workflows, Tool-Vergleich (n8n, Make, Zapier) und realistische ROI-Rechnung.",
  openGraph: {
    title: "Prozessautomatisierung 2026: Der komplette Guide für den Mittelstand",
    description:
      "Welche Prozesse sich automatisieren lohnen, drei Großhandel-Workflows im Detail und eine ehrliche ROI-Rechnung für den Mittelstand.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/prozessautomatisierung-guide/hero.png",
        width: 1200,
        height: 630,
        alt: "Prozessautomatisierung im Mittelstand",
      },
    ],
  },
  alternates: {
    canonical: "/blog/prozessautomatisierung-guide",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Prozessautomatisierung 2026: Der komplette Guide für den Mittelstand
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-01">1. Juni 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/prozessautomatisierung-guide/hero.png"
          alt="Prozessautomatisierung im Mittelstand: Workflows auf einem Dashboard"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="was-ist-prozessautomatisierung">
              Was ist Prozessautomatisierung und warum jetzt
            </Typo.H2>
            <Typo.Paragraph>
              Prozessautomatisierung bedeutet, wiederkehrende Geschäftsabläufe
              ganz oder teilweise von Software ausführen zu lassen. Das reicht
              von einfachen Wenn-Dann-Regeln (eine Bestellung landet im
              Postfach, das ERP legt automatisch einen Auftrag an) bis zu
              KI-gestützten Workflows, die Dokumente lesen, Entscheidungen
              treffen und Daten zwischen Systemen synchronisieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Entwicklungen machen 2026 zum besten Zeitpunkt für den
              Einstieg. Erstens: No-Code-Plattformen wie n8n, Make und Zapier
              sind so ausgereift, dass Fachkräfte ohne Programmierkenntnisse
              produktive Workflows bauen können. Zweitens: KI-Modelle lassen
              sich direkt in Workflows einbinden, sodass auch unstrukturierte
              Daten wie E-Mails, PDFs und Freitext automatisch verarbeitet
              werden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer die Grundlagen der digitalen Prozessautomatisierung noch
              einmal kompakt nachlesen will, findet in unserem{" "}
              <Link
                href="/blog/digitale-prozessautomatisierung-einstieg"
                className="text-primary-600 hover:underline"
              >
                Einstiegsguide zur digitalen Prozessautomatisierung
              </Link>{" "}
              eine gute Basis. Dieser Beitrag geht tiefer: konkrete
              Entscheidungskriterien, durchgespielte Workflows und eine
              realistische ROI-Rechnung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="automatisierungstypen">
              Drei Automatisierungstypen im Überblick
            </Typo.H2>
            <Typo.Paragraph>
              Nicht jede Automatisierung funktioniert gleich. Drei Typen
              decken den Großteil der Anwendungsfälle im Mittelstand ab.
            </Typo.Paragraph>

            <Typo.H3>Regelbasierte Automatisierung</Typo.H3>
            <Typo.Paragraph>
              Klassische Wenn-Dann-Logik. Beispiel: Wenn eine Bestellung
              über 5.000 Euro eingeht, wird automatisch eine
              Genehmigungsanfrage an den Vertriebsleiter geschickt. Einfach
              einzurichten, stabil, funktioniert für den Großteil der
              Alltagsprozesse. Tools wie n8n oder Make setzen hier an.
            </Typo.Paragraph>

            <Typo.H3>Robotic Process Automation (RPA)</Typo.H3>
            <Typo.Paragraph>
              RPA-Bots simulieren menschliche Klicks in bestehenden
              Anwendungen. Sinnvoll, wenn ein System keine API hat und ihr
              trotzdem Daten zwischen Oberflächen bewegen müsst. In der
              Praxis: teurer und wartungsintensiver als API-basierte
              Automatisierung, aber manchmal der einzige Weg.
            </Typo.Paragraph>

            <Typo.H3>KI-gestützte Automatisierung</Typo.H3>
            <Typo.Paragraph>
              Sprachmodelle und Bilderkennungs-KI erweitern regelbasierte
              Workflows um Verständnis. Ein Workflow liest eine eingehende
              E-Mail, versteht ob es eine Bestellung, Reklamation oder
              Anfrage ist, extrahiert die relevanten Daten und routet den
              Vorgang automatisch weiter. Wer tiefer einsteigen will: In
              unserem{" "}
              <Link
                href="/blog/agentic-ai-im-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Beitrag zu Agentic AI im Großhandel
              </Link>{" "}
              zeigen wir, wie autonome KI-Agenten in Workflows funktionieren.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="welche-prozesse-lohnen-sich">
              Welche Prozesse sich wirklich lohnen: Die Entscheidungsmatrix
            </Typo.H2>

            <BlogImage
              src="/blog/prozessautomatisierung-guide/prozess-entscheidungsmatrix.png"
              alt="Entscheidungsmatrix: Welche Prozesse automatisieren"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die meisten Guides listen Abteilungen auf: Buchhaltung, HR,
              Einkauf, Vertrieb. Das ist zu ungenau. Ob sich ein Prozess
              lohnt, hängt von vier Faktoren ab.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Wiederholungsfrequenz.</strong> Wie oft läuft der
                Prozess pro Woche? Ein Vorgang, der dreimal täglich anfällt,
                hat ein anderes Potenzial als einer, der einmal im Monat
                vorkommt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Fehlerquote.</strong> Wie häufig passieren manuelle
                Fehler? Abtippen von Bestelldaten, falsche Artikelnummern,
                vergessene Freigaben. Jeder Fehler kostet nicht nur
                Nacharbeit, sondern auch Kundenvertrauen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zeitaufwand pro Durchlauf.</strong> Ein Prozess, der
                pro Durchlauf 20 Minuten manuell dauert und dreimal täglich
                anfällt, bindet eine Stunde pro Tag. Auf ein Jahr gerechnet
                sind das 250 Arbeitsstunden.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>System-Touchpoints.</strong> Wie viele verschiedene
                Systeme sind beteiligt? Wenn Daten zwischen E-Mail, ERP,
                Warenwirtschaft und Excel hin- und herkopiert werden, ist
                das ein starkes Signal für Automatisierung.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Treffen mindestens drei der vier Faktoren zu, habt ihr einen
              Prozess mit hohem Automatisierungspotenzial. Treffen nur ein
              oder zwei zu, lohnt es sich selten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="grosshandel-workflows">
              Drei Großhandel-Workflows im Detail
            </Typo.H2>
            <Typo.Paragraph>
              Theorie ist gut, Praxis ist besser. Diese drei Workflows
              automatisieren wir am häufigsten bei Großhändlern mit 50 bis
              500 Mitarbeitern.
            </Typo.Paragraph>

            <Typo.H3>Workflow 1: Bestelleingang automatisieren</Typo.H3>

            <BlogImage
              src="/blog/prozessautomatisierung-guide/bestelleingang-workflow.png"
              alt="Automatisierter Bestelleingang-Workflow im Großhandel"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Bestellungen kommen per E-Mail, EDI, Fax-Scan oder
              Kundenportal. Ein automatisierter Workflow erkennt das Format,
              extrahiert Artikelnummern, Mengen und Lieferadresse per OCR
              oder KI, gleicht die Daten gegen das ERP ab, prüft die
              Verfügbarkeit und legt den Auftrag an. Erst bei
              Unstimmigkeiten (unbekannter Artikel, Bestandslücke,
              Kreditlimit überschritten) landet der Vorgang bei einem
              Menschen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ergebnis bei einem unserer Kunden: Durchlaufzeit von
              Bestelleingang bis Auftragsbestätigung sank von 45 Minuten
              auf unter 3 Minuten für Standardbestellungen. Fehlerquote
              bei der Datenübernahme fiel von 4 Prozent auf unter 0,5
              Prozent.
            </Typo.Paragraph>

            <Typo.H3>Workflow 2: Angebotserstellung beschleunigen</Typo.H3>
            <Typo.Paragraph>
              Ein Kunde fragt per E-Mail zehn Artikel an. Der Workflow
              extrahiert die Anfrage, schlägt aktuelle Preise nach (inklusive
              kundenspezifischer Rabatte und Staffelpreisen), erstellt ein
              Angebot als PDF und schickt es zurück. Wenn die Preise
              innerhalb der hinterlegten Grenzen liegen, passiert das ohne
              menschliches Zutun. Bei Sonderkonditionen wird der
              Vertriebsmitarbeiter einbezogen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Großhändler mit vielen kleinen Anfragen bedeutet das: Der
              Vertrieb konzentriert sich auf die strategisch wichtigen
              Gespräche, statt Routineangebote zu tippen. Mehr dazu in
              unserem{" "}
              <Link
                href="/blog/erp-workflows-automatisieren"
                className="text-primary-600 hover:underline"
              >
                Guide zu ERP-Workflow-Automatisierung
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Workflow 3: Lieferantenabgleich und Bestandswarnung</Typo.H3>
            <Typo.Paragraph>
              Ein Workflow prüft täglich den Lagerbestand gegen
              Mindestmengen, vergleicht Preise bei hinterlegten
              Lieferanten, erstellt eine Bestellempfehlung und schickt
              sie an den Einkauf. Bei unkritischen Nachbestellungen
              (Standardartikel, bewährter Lieferant, Preis im Rahmen)
              kann der Workflow die Bestellung direkt auslösen. Der
              Einkäufer wird per Zusammenfassung informiert, nicht per
              Einzelvorgang.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="tool-vergleich">
              Tool-Vergleich: n8n, Make, Zapier und Power Automate
            </Typo.H2>

            <BlogImage
              src="/blog/prozessautomatisierung-guide/tool-vergleich.png"
              alt="Vergleich von n8n, Make, Zapier und Power Automate"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Vier Plattformen dominieren den Markt für
              Prozessautomatisierung im Mittelstand. Jede hat einen
              anderen Sweet Spot. Welches Tool zu welchem Unternehmensprofil
              passt, und drei durchgerechnete Praxis-Workflows dazu, zeigt
              unser Leitfaden zur{" "}
              <Link
                href="/blog/kmu-workflow-automatisierung"
                className="text-primary-600 hover:underline"
              >
                Workflow-Automatisierung für KMU
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>n8n</strong> ist Open Source und lässt sich selbst
              hosten. Für Unternehmen, die Daten nicht in US-Clouds
              schicken wollen, ist das ein entscheidender Vorteil. Die
              Lernkurve ist steiler als bei Zapier, aber die Flexibilität
              bei komplexen Workflows ist deutlich höher. Kosten:
              Self-Hosting ab 15 Euro pro Monat, Cloud ab 24 Euro. Wer
              n8n selbst betreiben will, findet in unserer{" "}
              <Link
                href="/blog/n8n-selbst-hosten-anleitung"
                className="text-primary-600 hover:underline"
              >
                Self-Hosting-Anleitung
              </Link>{" "}
              einen schnellen Einstieg.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Make</strong> (ehemals Integromat) punktet mit einer
              visuellen Oberfläche, die auch Nicht-Techniker sofort
              verstehen. Gut für Marketing-Automatisierung und einfache
              Daten-Synchronisation. Limitiert bei komplexen
              Verzweigungen und Fehlerbehandlung. Einen detaillierten
              Vergleich gibt es in unserem{" "}
              <Link
                href="/blog/make-vs-n8n-vergleich"
                className="text-primary-600 hover:underline"
              >
                Make vs n8n Vergleich
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Zapier</strong> ist der Marktführer mit dem größten
              App-Katalog (7.000+ Integrationen). Der Einstieg ist
              einfach, aber die Kosten steigen schnell: Bei einem
              mittleren Automatisierungsvolumen (5.000 Tasks pro Monat)
              zahlt ihr schnell 200 Euro aufwärts. Unseren
              Preisvergleich findet ihr im{" "}
              <Link
                href="/blog/n8n-vs-zapier-vergleich"
                className="text-primary-600 hover:underline"
              >
                n8n vs Zapier Vergleich
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Power Automate</strong> ist die natürliche Wahl für
              Unternehmen, die tief im Microsoft-Ökosystem stecken
              (Microsoft 365, Dynamics, SharePoint). Für reine
              Microsoft-Workflows stark, für Cross-Platform-Integration
              schwächer. Kosten: Ab 15 Euro pro User pro Monat, wobei
              viele Funktionen bereits in Microsoft-365-Lizenzen enthalten
              sind.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Unsere Faustregel: Wer DSGVO-Konformität und maximale
              Flexibilität braucht, fährt mit n8n am besten. Wer einen
              schnellen Einstieg ohne technische Hürden sucht, startet mit
              Make oder Zapier. Wer ausschließlich Microsoft-Tools nutzt,
              spart mit Power Automate Lizenzkosten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="implementierung">
              Implementierung in fünf Schritten
            </Typo.H2>
            <Typo.Paragraph>
              Die meisten Automatisierungsprojekte scheitern nicht an der
              Technik, sondern an der Vorbereitung. Diese fünf Schritte
              haben sich in der Praxis bewährt.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Schritt 1: Prozess verstehen, bevor ihr
                  automatisiert.</strong>{" "}
                Ein chaotischer Prozess wird durch Automatisierung nicht
                besser, nur schneller chaotisch. Zeichnet den Ist-Prozess
                auf, identifiziert Brüche und klärt Verantwortlichkeiten.
                Erst wenn der Prozess stabil läuft, lohnt sich die
                Automatisierung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schritt 2: Quick Win auswählen.</strong>{" "}
                Startet mit einem Prozess, der häufig vorkommt, wenig
                Ausnahmen hat und dessen Ergebnis messbar ist. Ein
                typischer Quick Win im Großhandel: automatische
                Auftragsbestätigungen per E-Mail nach Bestelleingang.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schritt 3: Prototyp bauen und testen.</strong>{" "}
                Baut den Workflow mit echten Testdaten, aber parallel zum
                bestehenden Prozess. Lasst beide Wege eine Woche parallel
                laufen und vergleicht die Ergebnisse.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schritt 4: Fehlerbehandlung einbauen.</strong>{" "}
                Was passiert, wenn eine E-Mail kein gültiges Format hat?
                Wenn das ERP nicht erreichbar ist? Wenn ein Artikel
                ausverkauft ist? Jeder Workflow braucht einen
                Fallback-Pfad, der einen Menschen benachrichtigt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schritt 5: Monitoring aufsetzen.</strong>{" "}
                Ein laufender Workflow ist kein Fire-and-Forget. Richtet
                Alerts ein, die euch benachrichtigen, wenn ein Workflow
                fehlschlägt oder ungewöhnlich langsam wird. Prüft wöchentlich
                die Logs und optimiert nach.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="typische-fehler">
              Typische Fehler und wann sich Automatisierung nicht lohnt
            </Typo.H2>
            <Typo.Paragraph>
              Nicht jeder Prozess ist ein guter Kandidat. Drei Situationen,
              in denen Automatisierung mehr schadet als nutzt.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Instabile Prozesse.</strong> Wenn sich ein Prozess
                jede Woche ändert (neue Ausnahmen, andere Zuständigkeiten,
                wechselnde Systeme), verbringt ihr mehr Zeit mit der
                Pflege des Workflows als ihr einspart.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zu geringes Volumen.</strong> Ein Prozess, der
                zweimal pro Monat anfällt und fünf Minuten dauert, spart
                euch zehn Minuten im Monat. Der Aufwand für Aufbau und
                Wartung des Workflows übersteigt die Ersparnis.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Fehlende Datenqualität.</strong> Automatisierung
                ist so gut wie die Daten, die reinfließen. Wenn
                Stammdaten im ERP veraltet sind, Artikelnummern nicht
                gepflegt werden oder Kundendaten inkonsistent sind, wird
                jeder Workflow unzuverlässig.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Noch ein häufiger Fehler: Alles auf einmal automatisieren
              wollen. Startet mit einem Prozess, messt das Ergebnis,
              lernt daraus und skaliert dann. Wer zehn Workflows
              gleichzeitig aufsetzt, hat zehn halb funktionierende
              Automationen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="roi-rechnung">
              ROI: Was Prozessautomatisierung realistisch bringt
            </Typo.H2>

            <BlogImage
              src="/blog/prozessautomatisierung-guide/roi-rechnung.png"
              alt="ROI-Rechnung für Prozessautomatisierung im Mittelstand"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Hier eine konservative Beispielrechnung für einen
              Großhändler mit 120 Mitarbeitern, der den Bestelleingang
              automatisiert.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Vorher:</strong> Drei Mitarbeiter bearbeiten täglich
              80 Bestellungen manuell. Pro Bestellung: 15 Minuten
              (E-Mail lesen, Daten ins ERP tippen, Verfügbarkeit prüfen,
              Bestätigung senden). Das sind 20 Stunden pro Tag, rund 5.200
              Stunden pro Jahr. Bei einem Stundensatz von 35 Euro:
              182.000 Euro Personalkosten für diesen einen Prozess.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Nachher:</strong> 70 Prozent der Bestellungen
              (Standardfälle) laufen vollautomatisch. Die drei
              Mitarbeiter bearbeiten nur noch die 30 Prozent mit
              Ausnahmen und haben Zeit für wertschöpfende Aufgaben.
              Eingesparte Zeit: 3.640 Stunden pro Jahr. Das entspricht
              rund 127.000 Euro.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Investition:</strong> Aufbau des Workflows mit
              externer Unterstützung: 8.000 bis 15.000 Euro einmalig.
              Laufende Kosten (Tool-Lizenzen, Wartung): 200 bis 500 Euro
              pro Monat. Break-even: Zwischen dem zweiten und vierten
              Monat.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Diese Zahlen sind konservativ. Nicht eingerechnet: weniger
              Fehler (die jeweils Nacharbeit und manchmal Retouren
              kosten), schnellere Reaktionszeiten (die Kundenzufriedenheit
              steigern) und die Möglichkeit, mit dem gleichen Team mehr
              Aufträge abzuwickeln.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenschutz">
              DSGVO und Datenschutz: Cloud oder Self-Hosting
            </Typo.H2>
            <Typo.Paragraph>
              Eine Frage, die im Mittelstand zu Recht auftaucht: Darf ich
              Kunden- und Bestelldaten durch externe Automatisierungs-Tools
              schicken? Die Antwort hängt vom Setup ab.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei Cloud-Tools wie Zapier und Make laufen Daten über Server
              in den USA (Zapier) oder der EU (Make). Ein
              Auftragsverarbeitungsvertrag ist Pflicht, aber die
              Datenhaltung außerhalb eurer Kontrolle bleibt ein Risiko,
              das ihr bewerten müsst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              n8n bietet als einzige der vier Plattformen echtes
              Self-Hosting: Daten verlassen nie euren Server. Für
              Großhändler, die sensible Einkaufsdaten, Kundenkonditionen
              oder Lieferantenverträge verarbeiten, ist das oft das
              entscheidende Argument. Mehr zum Thema in unserem{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                Guide zu DSGVO-konformen KI-Tools
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: Anfangen, messen, skalieren
            </Typo.H2>
            <Typo.Paragraph>
              Prozessautomatisierung ist kein Mammutprojekt. Der wichtigste
              Schritt ist der erste: Einen Prozess auswählen, der häufig
              vorkommt und fehleranfällig ist. Einen Prototyp bauen,
              parallel zum bestehenden Ablauf testen, Ergebnisse messen.
              Wenn der erste Workflow läuft und sich rechnet, wächst das
              Vertrauen im Team von selbst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Großhändler und B2B-Unternehmen im Mittelstand sind
              Bestelleingang, Angebotserstellung und Lieferantenabgleich
              die drei Workflows mit dem höchsten Hebel. Die
              Tool-Entscheidung (n8n für Datenschutz und Flexibilität,
              Make für schnellen Einstieg, Zapier für breite Integration,
              Power Automate im Microsoft-Ökosystem) folgt erst danach.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr wisst, welchen Prozess ihr automatisieren wollt, aber
              nicht, wie ihr anfangen sollt?{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprecht uns an
              </Link>
              , in einem 30-minütigen Erstgespräch analysieren wir
              gemeinsam, welcher Workflow bei euch den größten Hebel hat
              und wie der erste Schritt aussieht.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-prozessautomatisierung">
            Was ist Prozessautomatisierung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="automatisierungstypen">
            Drei Automatisierungstypen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="welche-prozesse-lohnen-sich">
            Entscheidungsmatrix
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="grosshandel-workflows">
            Großhandel-Workflows
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="tool-vergleich">
            Tool-Vergleich
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="implementierung">
            Implementierung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="typische-fehler">
            Typische Fehler
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="roi-rechnung">
            ROI-Rechnung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            DSGVO und Datenschutz
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
