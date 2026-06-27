import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ki-steuerberater",
  author: "Max Hänsel",
  date: "2026-06-15",
  image: "/blog/ki-steuerberater/hero.png",
  tags: ["ki", "steuerberater", "datev", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI für Steuerberater 2026: Sieben Aufgabenfelder, drei Tool-Wege, ein Pilotplan",
  description:
    "Wo KI in der Steuerkanzlei 2026 wirklich Stunden spart: sieben Use-Cases, drei Tool-Wege mit Preisen, DSGVO, Berufsrecht, GoBD, EU AI Act und ein 90-Tage-Pilotplan.",
  openGraph: {
    title:
      "KI für Steuerberater: Der ehrliche Hub für die Kanzlei 2026",
    description:
      "Sieben Aufgabenfelder mit echtem Hebel, drei Tool-Wege ehrlich verglichen, vier Rechtsrahmen geklärt und ein 90-Tage-Pilotplan für die deutsche Steuerkanzlei.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ki-steuerberater/hero.png",
        width: 1200,
        height: 630,
        alt: "Steuerkanzlei-Team bespricht KI-gestützte Workflows für Belegprüfung, E-Rechnung und Mandantenkommunikation an einem Monitor",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ki-steuerberater",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI für Steuerberater: Wo 2026 wirklich Stunden gespart werden
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-15">
            15. Juni 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ki-steuerberater/hero.png"
          alt="Steuerkanzlei-Team bespricht KI-gestützte Workflows für Belegprüfung, E-Rechnung und Mandantenkommunikation an einem Monitor"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              KI in der Steuerkanzlei ist 2026 keine Pilotphase mehr. 78,2
              Prozent der deutschen Kanzleien nutzen bereits KI-gestützte
              Systeme, vor allem in Finanzbuchhaltung und Recherche. Zugleich
              sucht jede dritte Kanzlei händeringend Personal: 72,7 Prozent
              berichten Schwierigkeiten bei der Fachkräftesuche, über 10.000
              Stellen sind unbesetzt, der Berufsstand ist laut ifo Institut
              die am stärksten betroffene Branche überhaupt. Das macht KI für
              eine Kanzlei mit 50 bis 1.000 Mitarbeitenden nicht zur Kür,
              sondern zur Kapazitätsfrage.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Verschoben hat sich die Frage. Sie lautet nicht mehr, ob KI in
              der Buchhaltung funktioniert. Sie lautet, wo eine Kanzlei
              anfängt, ohne sich Berufsrecht, GoBD oder Mandantenvertrauen zu
              brechen. Wer das richtige Aufgabenfeld zuerst angeht, spart in
              90 Tagen 40 bis 80 Stunden Routine pro Monat. Wer den Einstieg
              falsch wählt, baut binnen sechs Monaten einen Audit-Schatten
              auf, der die Einsparungen wieder auffrisst, oder verletzt seit
              Januar 2026 die ausdrücklichen Vorgaben aus dem BStBK-FAQ-Katalog
              zur KI.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Hub schaut auf sieben Aufgabenfelder mit echtem KI-Hebel,
              vergleicht ehrlich die drei Tool-Wege (DATEV-eigene KI, externe
              SaaS, Eigenbau-Workflow), klärt was § 203 StGB, § 62a StBerG,
              DSGVO, GoBD und der EU AI Act ab 02. August 2026 wirklich
              verlangen, rechnet den ROI für eine Kanzlei mit 50 Mitarbeitenden
              durch und liefert einen 90-Tage-Pilotplan. Wer einen einzelnen
              Use-Case vertiefen will, findet die Spokes direkt verlinkt. Wer
              die DSGVO-Tiefe braucht, wechselt in den{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-Leitfaden für KI-Tools
              </Link>
              . Wer zuerst den breiteren Rahmen jenseits von KI sucht, von
              E-Rechnung über DATEV bis zum digitalen Belegfluss, beginnt beim{" "}
              <Link
                href="/blog/digitalisierung-steuerberatung"
                className="text-primary-600 hover:underline"
              >
                Digitalisierungs-Leitfaden für Steuerkanzleien
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="aufgabenfelder">
              Die sieben Aufgabenfelder mit echtem KI-Hebel
            </Typo.H2>
            <Typo.Paragraph>
              Nicht jedes Kanzlei-Problem ist ein KI-Problem. Sieben
              Aufgabenfelder haben aber dieselbe Struktur, in der LLMs und
              klassifizierende Modelle 2026 belastbar liefern: hohes Volumen,
              repetitives Muster, eindeutige Zielstruktur und ein
              menschlicher Letzt-Check vor der Festschreibung.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-steuerberater/aufgabenfelder-uebersicht.png"
              alt="Übersicht der sieben KI-Aufgabenfelder in einer Steuerkanzlei mit Aufwand-Indikatoren vor und mit KI-Einsatz"
              width={1200}
              height={630}
            />

            <Typo.H3>1. Belegerfassung und Belegprüfung</Typo.H3>
            <Typo.Paragraph>
              Größter Hebel und klassischer Volumen-Use-Case. Eine
              durchschnittliche Sachbearbeiterin verarbeitet 4.000 bis 8.000
              Belege pro Monat. KI-OCR plus LLM-Klassifikation extrahiert
              Beleginhalte mit über 95 Prozent Konfidenz und schlägt Konto und
              Steuersatz vor. Die Mitarbeiterin freigibt statt zu tippen.
              Realistische Auto-Quote nach drei Monaten Training: 60 bis 75
              Prozent. Vertiefung im Spoke{" "}
              <Link
                href="/use-cases/steuerberater/belegpruefung"
                className="text-primary-600 hover:underline"
              >
                Belegprüfung automatisieren
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>2. E-Rechnung-Verarbeitung nach 2025-Pflicht</Typo.H3>
            <Typo.Paragraph>
              Seit 1. Januar 2025 müssen Unternehmen E-Rechnungen empfangen
              können, ab 2027 (Umsatz über 800.000 Euro) und 2028 (alle B2B)
              auch versenden. XRechnung und ZUGFeRD sind die zwei Pflicht-
              formate. KI-Parser lesen die strukturierten XML-Anteile robust,
              hybride Pipelines validieren gegen KoSIT-Schema und gleichen
              UStG-konforme Angaben ab. Tiefer im Spoke{" "}
              <Link
                href="/use-cases/steuerberater/e-rechnung-verarbeitung"
                className="text-primary-600 hover:underline"
              >
                E-Rechnung KI für Steuerberater
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>3. Dokumentenverarbeitung jenseits der Belege</Typo.H3>
            <Typo.Paragraph>
              Verträge, Schriftverkehr, Bescheide, Berichte. KI klassifiziert
              den Dokumenttyp, extrahiert die relevanten Felder und legt
              das Dokument im richtigen DATEV-DMS-Ordner ab. Eine Kanzlei mit
              800 Mandanten verarbeitet jährlich 40.000 bis 80.000 solcher
              Dokumente. Vertiefung im Spoke{" "}
              <Link
                href="/use-cases/steuerberater/dokumentenverarbeitung"
                className="text-primary-600 hover:underline"
              >
                Dokumentenverarbeitung in der Kanzlei
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>4. Mandantenkommunikation und Belegnachforderung</Typo.H3>
            <Typo.Paragraph>
              Routine-Mails fressen 3 bis 5 Stunden pro Sachbearbeiter und
              Tag. KI beantwortet FAQ-Anfragen, schickt Fristerinnerungen,
              hakt fehlende Belege automatisch nach und eskaliert nur die
              individuellen Fälle an Menschen. Belegrücklaufzeiten sinken von
              acht auf drei Wochen. Mehr im Spoke{" "}
              <Link
                href="/use-cases/steuerberater/mandantenkommunikation"
                className="text-primary-600 hover:underline"
              >
                Mandantenkommunikation mit KI
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>5. Mandanten-Onboarding mit GwG-KYC-Workflow</Typo.H3>
            <Typo.Paragraph>
              Manuelles Onboarding eines neuen Mandanten dauert 4 bis 8
              Stunden. KI-Workflow für Geldwäschegesetz-KYC, Identitäts-
              prüfung, Vollmachten und DATEV-Stammdatenanlage senkt den
              Aufwand um 70 bis 85 Prozent. Spoke{" "}
              <Link
                href="/use-cases/steuerberater/mandanten-onboarding"
                className="text-primary-600 hover:underline"
              >
                KI-Mandanten-Onboarding
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>6. Jahresabschluss-Vorbereitung</Typo.H3>
            <Typo.Paragraph>
              Vollständigkeitsprüfung, Saldenabstimmung, Auffälligkeiten-
              Analyse, Anhang-Texte vorbereiten. KI sieht Muster über
              Vorjahre und schlägt Prüfschwerpunkte vor. Der Steuerberater
              prüft fokussiert statt durchzulesen. Spoke{" "}
              <Link
                href="/use-cases/steuerberater/jahresabschluss-ki"
                className="text-primary-600 hover:underline"
              >
                KI-Jahresabschluss
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>7. DATEV-Sync und Kanzleisteuerung</Typo.H3>
            <Typo.Paragraph>
              Doppelpflege zwischen DATEV, Jira oder dem Kanzlei-PM-Tool
              kostet 20 bis 30 Stunden pro Woche. Bidirektionaler Sync senkt
              den Aufwand pro Vorgang von 25 auf 2 Minuten. Vertiefung im
              Spoke{" "}
              <Link
                href="/use-cases/steuerberater/datev-jira-task-orchestration"
                className="text-primary-600 hover:underline"
              >
                DATEV-Jira-Orchestration
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="tool-wege">
              Drei Tool-Wege ehrlich verglichen
            </Typo.H2>
            <Typo.Paragraph>
              Für fast jeden der sieben Use-Cases gibt es drei mögliche
              Architektur-Pfade. Sie unterscheiden sich nicht primär in der
              KI-Qualität, sondern in Vendor-Lock-in, Pro-Mandant-Kosten und
              Flexibilität. Wer den Pfad zu früh festlegt, zahlt zwei Jahre
              später für die Migration.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-steuerberater/drei-tool-wege.png"
              alt="Drei Tool-Pfade für KI in Steuerkanzleien im direkten Vergleich (DATEV intern, externe SaaS, Eigenbau-Workflow)"
              width={1200}
              height={630}
            />

            <Typo.H3>Weg A: DATEV-eigene KI-Module</Typo.H3>
            <Typo.Paragraph>
              Seit Februar 2026 ist der DATEV Copilot live: ein textbasierter
              Assistent in MyDATEV Kanzlei mit Dokumenten-Analyse,
              Speech-to-Text und gebündelter Suche über Internet, Expert und
              DATEV-Produkte. Die Grundlizenz ist für DATEV-Mitglieder
              kostenfrei, lediglich Bestellung im Shop und Rechtevergabe
              werden gebraucht. Dazu kommen die DATEV-Belegerkennung in
              Unternehmen Online (DUO), die Lieferantennamen mit Kreditoren-
              stammdaten abgleicht und Buchungssätze vorschlägt, der DATEV-
              Einspruchsgenerator für automatisierte Einspruchsschreiben und
              die DATEV KI-Werkstatt mit über 11.000 Mitgliedern, die
              Prototypen testen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Stärke: tiefe Integration, niedriges Vendor-Risk, AVV mit DATEV
              ist im Standardvertrag geregelt. Schwäche: DATEV Copilot ist
              primär dokumenten- und kanzleiintern. Mandanten-Onboarding,
              E-Mail-Triage, Multi-Quellen-Belegimport (mehrere Postfächer,
              Mandantenportale, Cloud-Drives gleichzeitig) und Workflow-
              Automation jenseits der DATEV-Grenze sind nicht abgedeckt. Für
              eine DATEV-zentrierte Standardkanzlei reicht der Copilot
              als Basis, alles darüber hinaus braucht zusätzliche Bausteine.
            </Typo.Paragraph>

            <Typo.H3>Weg B: Externe SaaS-Plattformen</Typo.H3>
            <Typo.Paragraph>
              Candis ist DATEV-Lizenzpartner mit drei Schnittstellen und kostet
              je nach Volumen rund 369 Euro pro Monat in der Base-Stufe.
              Finmatics arbeitet im Enterprise-Modell mit eigenem Kanzleitarif
              und reduziert manuelle Buchhaltung um bis zu 90 Prozent.
              BuchhaltungsButler kommt mit eigenen Steuerberater-Tarifen ab
              39,90 Euro pro Monat in der Light-Variante. Sage mit dem neuen
              Sage Copilot startet bei rund 12 Euro pro Monat, sevDesk bei
              etwa 10 Euro, FastBill bei 30 Euro Pro und 59 Euro Premium.
              Lexware Office bietet DATEV-Export nativ und kostet 9 bis 25
              Euro pro Mandant und Monat. GetMyInvoices holt Belege aus über
              10.000 Lieferantenportalen und ist eher Ergänzung als
              Vollstack.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Stärke: schnell live, kein eigener Betrieb, gute Mandantenportale,
              breite OCR-Trainingsbasis. Schwäche: Pro-Mandant-Kosten skalieren
              mit jeder Akquise, ein eigener AVV plus § 62a-Verschwiegenheits-
              vereinbarung pro Anbieter ist Pflicht (dazu mehr im Rechts-
              Kapitel). Wann sinnvoll: Kanzleien mit 50 bis 300 Mandanten und
              klassischer Beleg-Heavy-Buchhaltung. Wenig sinnvoll bei sehr
              großen Mandantenstämmen oder bei stark vertikalen Spezial-
              Kanzleien.
            </Typo.Paragraph>

            <Typo.H3>Weg C: Eigenbau-Workflows mit n8n, Make oder Microsoft 365 Copilot</Typo.H3>
            <Typo.Paragraph>
              Eine Orchestrierungs-Plattform plus ein EU-gehostetes LLM (Azure
              OpenAI Sweden Central, AWS Bedrock Frankfurt, Mistral Le Chat
              Enterprise oder Aleph Alpha Pharia) plus die DATEV-API ergibt
              einen vollwertigen Eigenbau-Stack. n8n self-hosted (typisch auf
              einer EU-Maschine in Docker) deckt E-Mail-Triage, Belegrouting,
              Mandanten-Bot mit lokalem RAG und Approvals ab. Microsoft 365
              Copilot plus Copilot Studio läuft direkt in Outlook, Teams und
              SharePoint, eignet sich für Posteingangs-Klassifizierung und
              FAQ-Bots, hat aber 2026 eine kritische DSGVO-Falle (siehe
              Kapitel Recht).
            </Typo.Paragraph>
            <Typo.Paragraph>
              Stärke: maximal flexibel, eigene Pipelines pro Mandantengruppe
              oder Branche, einmaliger Setup-Aufwand statt monatlicher
              Pro-Mandant-Kosten. Schwäche: höherer Initialaufwand (15.000
              bis 40.000 Euro je nach Tiefe), IT-Kompetenz nötig oder
              Partner. Wer den{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Bauplan für KI-Agents
              </Link>
              {" "}gelesen hat, kennt die Bausteine. Wann sinnvoll: Kanzleien
              mit 300 plus Mandanten, eigener IT-Kompetenz oder Beratungspartner,
              mit Bedarf an kanzlei-spezifischen Pipelines.
            </Typo.Paragraph>

            <Typo.H3>Sonderfall: Fachverlags-KI für Steuerrecht-Recherche</Typo.H3>
            <Typo.Paragraph>
              Quer zu den drei Wegen liegt der spezielle Use-Case Steuerrecht-
              Recherche. ChatGPT halluziniert deutsche Paragraphen und Urteile
              und ist für die Beratungspraxis ungeeignet. Die DStV-Marktübersicht
              2026 listet elf produktive KI-Tools für Recherche und Assistenz,
              darunter Haufe CoPilot Tax, NWB KIRA, Otto Schmidt Answers,
              juris SteuerPraxis KI, Deubner Tax KI und ASCADI. Diese
              Fachverlags-KI arbeitet auf kuratiertem Volltext-Material und
              gibt Quellenbelege aus, was für die berufliche Sorgfaltspflicht
              entscheidend ist.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                  <DataTable.HeaderCell>DATEV-eigene KI</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Externe SaaS</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Eigenbau-Workflow</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Initialaufwand</DataTable.Cell>
                  <DataTable.Cell>0 bis 5.000 €</DataTable.Cell>
                  <DataTable.Cell>0 bis 3.000 €</DataTable.Cell>
                  <DataTable.Cell>15.000 bis 40.000 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Pro Mandant und Monat</DataTable.Cell>
                  <DataTable.Cell>in DATEV-Lizenz enthalten</DataTable.Cell>
                  <DataTable.Cell>10 bis 50 €</DataTable.Cell>
                  <DataTable.Cell>2 bis 8 € LLM-API plus Hosting</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>DATEV-Integration</DataTable.Cell>
                  <DataTable.Cell>nativ</DataTable.Cell>
                  <DataTable.Cell>Schnittstelle vorhanden</DataTable.Cell>
                  <DataTable.Cell>via DATEV-API selbst gebaut</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Flexibilität</DataTable.Cell>
                  <DataTable.Cell>gering</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>hoch</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>AVV plus § 62a</DataTable.Cell>
                  <DataTable.Cell>mit DATEV bereits geregelt</DataTable.Cell>
                  <DataTable.Cell>je Anbieter neu zu verhandeln</DataTable.Cell>
                  <DataTable.Cell>mit LLM- und Hosting-Anbieter</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Best-Fit</DataTable.Cell>
                  <DataTable.Cell>DATEV-zentrierte Standardkanzlei</DataTable.Cell>
                  <DataTable.Cell>50 bis 300 Mandanten, Beleg-Heavy</DataTable.Cell>
                  <DataTable.Cell>300 plus Mandanten oder Spezial-Kanzlei</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="recht">
              Was Berufsrecht, DSGVO, GoBD und EU AI Act 2026 wirklich verlangen
            </Typo.H2>
            <Typo.Paragraph>
              Die häufigste Bremse beim KI-Einstieg in der Steuerkanzlei ist
              nicht die Technik, sondern die unklare Rechtslage. Vier Rahmen
              greifen gleichzeitig, jeder mit einem eigenen Pflichtkatalog.
              Wer einen davon übersieht, hat im nächsten Audit ein Problem.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-steuerberater/regulatorik-stack.png"
              alt="Rechtspyramide für KI-Einsatz in deutschen Steuerkanzleien mit GoBD-Fundament, DSGVO, § 203 StGB und EU AI Act"
              width={1200}
              height={630}
            />

            <Typo.H3>§ 203 StGB und § 62a StBerG: AVV reicht nicht</Typo.H3>
            <Typo.Paragraph>
              Steuerberater unterliegen der Verschwiegenheitspflicht nach § 203
              StGB. Seit der Reform 2017 dürfen externe Dienstleister eingebunden
              werden, müssen aber förmlich zur Verschwiegenheit verpflichtet
              werden. § 62a StBerG regelt das berufsrechtliche Pendant. Die
              Straffreiheit bei Einbindung externer Mitwirkender steht unter
              drei Bedingungen: die Einbeziehung muss für die ordnungsgemäße
              Berufsausübung notwendig sein, der Dienstleister muss in Textform
              und mit Hinweis auf die strafrechtlichen Folgen zur Verschwiegen-
              heit verpflichtet sein, und die Auswahl und Überwachung muss
              sorgfältig dokumentiert sein.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Praxis heißt das: ein reiner AVV nach Art. 28 DSGVO reicht
              nicht. Zusätzlich gehört eine eigene § 203-Verschwiegenheits-
              vereinbarung mit jedem KI-Anbieter zum Pflichtprogramm. Dazu
              Daten-Minimierung vor jedem LLM-Call (Klarnamen, Steuernummern
              und IBANs maskieren, wenn sie nicht zwingend gebraucht werden),
              EU-Hosting bevorzugt, kein Training auf den Mandantendaten.
            </Typo.Paragraph>

            <Typo.H3>BStBK-FAQ-Katalog vom 27. Januar 2026</Typo.H3>
            <Typo.Paragraph>
              Die Bundessteuerberaterkammer hat am 27. Januar 2026 ihren ersten
              offiziellen Praxis-FAQ-Katalog zur KI in der Steuerberatung
              veröffentlicht. Vier Kernaussagen sind tragend: Vertrauliche
              Mandantendaten dürfen nur an Dienstleister gegeben werden, die
              sowohl gesetzlich als auch vertraglich an Verschwiegenheit
              gebunden sind. In öffentliche KI-Systeme (ChatGPT Free, Plus oder
              vergleichbar) gehören ausschließlich allgemeine, anonymisierte
              Informationen. EU-residente KI ist aus Datenschutzsicht zu
              bevorzugen. Und Art. 4 EU AI Act verpflichtet die Kanzlei zur
              Sicherstellung der KI-Kompetenz aller Mitarbeitenden, die mit
              den Systemen arbeiten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im April 2026 hat der Deutsche Steuerberaterverband zusätzlich
              eine Muster-KI-Anwendungsrichtlinie als Praxis-Leitfaden
              veröffentlicht. Das Grundprinzip lautet Tool, Use-Case, Daten,
              Risiko: KI darf nur eingesetzt werden, wenn das Tool kanzleiintern
              freigegeben ist, der Use-Case sauber definiert ist und die
              Risikostufen-Anforderungen erfüllt sind.
            </Typo.Paragraph>

            <Typo.H3>DSGVO und die Microsoft-Flex-Routing-Falle 2026</Typo.H3>
            <Typo.Paragraph>
              Jeder KI-Anbieter ist Auftragsverarbeiter nach Art. 28 DSGVO.
              AVV-Vertrag signiert, technische und organisatorische Maßnahmen
              dokumentiert, Sub-Unternehmer-Kette transparent. Bei US-LLMs
              zusätzlich Transfer Impact Assessment und EU-Standardvertrags-
              klauseln. Belastbar sind 2026 Azure OpenAI Sweden Central,
              AWS Bedrock Frankfurt, Mistral Le Chat Enterprise EU und
              Aleph Alpha Pharia. ChatGPT in der kostenlosen Variante bleibt
              für Mandantendaten ausgeschlossen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine eigene Falle 2026 ist Microsoft 365 Copilot. Microsoft hat
              im April 2026 die EU-Datengrenze für Copilot stillschweigend
              aufgeweicht: in Lastspitzen werden LLM-Inferenzen standardmäßig
              in die USA, nach Kanada oder Australien geroutet, das sogenannte
              Flex Routing. Wer DSGVO-konform bleiben will, muss Flex Routing
              aktiv per Admin-Center, Entra ID und Intune deaktivieren und das
              Setup nach jedem Microsoft-Update neu prüfen. Standardmäßig ist
              die Funktion an.
            </Typo.Paragraph>

            <Typo.H3>GoBD: Verfahrensdokumentation und Audit-Trail</Typo.H3>
            <Typo.Paragraph>
              Das BMF-Schreiben zur GoBD wurde am 14. Juli 2025 zum zweiten Mal
              geändert, vor allem mit Blick auf die seit 1. Januar 2025
              verpflichtende E-Rechnung. Ein eigenes BMF-Schreiben speziell zu
              KI gibt es bisher nicht, die Anforderungen ergeben sich aus den
              allgemeinen GoBD-Prinzipien. Für KI-gestützte Buchhaltung
              bedeutet das: Nachvollziehbarkeit jeder einzelnen Entscheidung
              (welche Regel oder welcher Konfidenz-Score hat zu welcher
              Kontierung geführt), Unveränderbarkeit der Logs, lückenloser
              Audit-Trail vom Beleg bis zur Buchung und eine Verfahrens-
              dokumentation, die das eingesetzte Modell, den Trainingsdaten-
              Status, den Prüf-Workflow und die Eskalationspfade beschreibt.
            </Typo.Paragraph>

            <Typo.H3>EU AI Act: Stichtag 02. August 2026 für Anwender</Typo.H3>
            <Typo.Paragraph>
              Der EU AI Act greift schrittweise. Ab 02. August 2026 gelten die
              GPAI-Pflichten für Modell-Anbieter und die meisten Anwender-
              Pflichten. Im Februar 2026 hat das Bundeskabinett das deutsche
              Durchführungsgesetz beschlossen. Steuerkanzleien sind in der
              Regel Deployer, nicht Provider, und in der Regel nicht Hochrisiko
              (keine Personalentscheidungen, keine Kreditbewertung). Trotzdem
              bestehen vier Deployer-Pflichten: Risikoklassifizierung pro
              Use-Case, Datenkategorien-Inventar, dokumentierter Human-in-the-
              Loop und Schulung der Mitarbeitenden in KI-Kompetenz nach Art.
              4. Bußgelder bei Verstößen reichen bis 15 Millionen Euro oder
              3 Prozent Weltjahresumsatz.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="pipeline">
              Wie eine KI-Belegpipeline mit Mensch-im-Loop aussieht
            </Typo.H2>
            <Typo.Paragraph>
              Für den ersten Use-Case (Belegerfassung) lohnt sich ein Blick
              auf die konkrete Pipeline. Sie ist tool-unabhängig und gilt
              für DATEV, SaaS oder Eigenbau in gleichem Aufbau, nur die
              Implementierung unterscheidet sich.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-steuerberater/beleg-pipeline.png"
              alt="Achtstufige KI-Pipeline für Belegerfassung in der Steuerkanzlei mit Confidence-basierter Mensch-im-Loop-Eskalation"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Schritt 1 bis 4 sind Standard: Eingang per Mail oder Mandanten-
              portal, OCR und Layout-Erkennung, LLM-Klassifikation (Rechnung,
              Mahnung, Vertrag, Sonstiges), strukturierte Datenextraktion
              (Betrag, Umsatzsteuer, Datum, Steuersatz). Schritt 5 ist der
              kritische: ein Konfidenz-Check teilt die Belege in drei Pfade.
              Über 95 Prozent Konfidenz gehen direkt zur Buchung, 80 bis 95
              Prozent in die Vier-Augen-Prüfung durch eine Sachbearbeiterin,
              unter 80 Prozent in den Human-Override mit voller manueller
              Bearbeitung. In Schritt 6 schlägt das System ein DATEV-Konto
              vor, Schritt 7 ist die Freigabe (bei nicht-auto-Pfaden), Schritt
              8 der Buchungsexport ins DATEV.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beispielzahlen für eine mittlere Pipeline mit 1.000 Belegen pro
              Monat nach drei Monaten Training: 700 bis 750 Belege im Auto-
              Pfad, 200 bis 250 in der Vier-Augen-Prüfung, 30 bis 50 im
              Human-Override. Die menschliche Zeit pro Beleg sinkt von im
              Schnitt 90 Sekunden auf rund 25 Sekunden. Über dem gesamten
              Flow läuft ein Audit-Trail-Layer, der jeden Schritt mit
              Zeitstempel, Konfidenz und Entscheidungsbasis loggt, damit die
              GoBD-Verfahrensdokumentation belastbar ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="roi">
              ROI-Rechnung für eine Kanzlei mit 50 MA und 800 Mandanten
            </Typo.H2>
            <Typo.Paragraph>
              Eine konkrete Beispielrechnung macht den Hebel greifbar.
              Annahmen: 50 Mitarbeitende, 800 Mandanten, durchschnittlich 30
              Belege pro Mandant und Monat (also 24.000 Belege monatlich),
              klassische Beleg-Heavy-Buchhaltung, Vollkostensatz einer
              Steuerfachangestellten 40 Euro pro Stunde inklusive Arbeit-
              gebernebenkosten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Status quo: zwei Minuten Nachbearbeitung pro Beleg sind in
              Kanzleien der typische Wert (Beleg-Bezeichnung, Konten-Zuordnung,
              Upload, Validierung). Bei 24.000 Belegen sind das 800 Stunden
              pro Monat reine Belegerfassung. Auf das Jahr gerechnet 9.600
              Stunden zu 40 Euro Vollkosten, also rund 384.000 Euro
              Belegerfassungs-Aufwand. Realistisch verbinden 12 bis 14
              Vollzeitäquivalente einen Teil ihrer Arbeitszeit mit diesem
              Task.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mit einer Auto-Quote von 50 Prozent nach sechs Monaten Training
              und 65 Prozent nach zwölf Monaten sinkt die manuelle Last um
              200 bis 300 Stunden pro Monat. Auf das Jahr gerechnet sind das
              96.000 bis 144.000 Euro Brutto-Einsparung. Die Kosten der KI
              liegen bei einer externen SaaS-Lösung typischerweise bei 200
              bis 600 Euro pro Mandant-Bündel und Monat plus DATEV-Schnitt-
              stellenkosten, in der Größenordnung 18.000 bis 36.000 Euro
              jährlich. Bei einem Eigenbau-Stack 25.000 bis 35.000 Euro
              Setup-Investition plus 12.000 bis 18.000 Euro laufende
              Kosten. Netto-Einsparung im ersten Jahr: 60.000 bis 100.000
              Euro. Payback typischerweise ein bis drei Monate, sobald die
              Auto-Quote über 40 Prozent steigt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wave 2 Use-Cases (E-Rechnung-Verarbeitung und
              Mandantenkommunikation) verdoppeln den Effekt im zweiten Jahr.
              Eine Kanzlei dieser Größe spricht dann von 150.000 bis 220.000
              Euro jährlicher Einsparung bei konstanter Mandantenzahl. Oder
              alternativ: 20 bis 30 Prozent zusätzliche Mandantenkapazität
              bei konstantem Personal, was angesichts des Fachkräftemangels
              die strategisch relevantere Rechnung ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="pilotplan">
              90-Tage-Pilotplan
            </Typo.H2>
            <Typo.Paragraph>
              Der häufigste Anfangsfehler ist Breite. Wer KI gleichzeitig auf
              Belegerfassung, Mandantenkommunikation und Jahresabschluss
              loslässt, baut drei halbgar laufende Pipelines mit drei halb
              dokumentierten AVVs. Ein 90-Tage-Plan beginnt schmal und tief.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-steuerberater/roi-pilot-zeitleiste.png"
              alt="90-Tage-Pilotplan KI in der Steuerkanzlei mit drei Phasen Setup, Skalierung und Hardening sowie kumulativer ROI-Kurve"
              width={1200}
              height={630}
            />

            <Typo.H3>Phase 1, Tag 1 bis 30: Setup und ein einziger Use-Case</Typo.H3>
            <Typo.Paragraph>
              Empfehlung: Belegerfassung für fünf freiwillige Pilotmandanten
              aus dem Stammkundenbereich. Tool-Wahl (in der Regel SaaS für
              den schnellsten Start), AVV verhandeln und unterzeichnen,
              Verfahrensdokumentation aus einem Template aufsetzen, Mensch-
              im-Loop-Prozess definieren. Setup-Kosten typisch 4.000 bis
              8.000 Euro inklusive Workshop und Mitarbeiter-Schulung.
            </Typo.Paragraph>

            <Typo.H3>Phase 2, Tag 31 bis 60: Skalierung mit KPI-Monitoring</Typo.H3>
            <Typo.Paragraph>
              Pipeline auf 30 Mandanten ausweiten. Drei KPIs wöchentlich
              tracken: Auto-Quote (Ziel über 50 Prozent), Korrekturrate
              (Ziel unter 5 Prozent), Belegrücklauf-Zeit. Wöchentlicher
              Review mit dem Pilotteam, Eskalationen analysieren, Schwellwerte
              kalibrieren. Erste Einsparungen sichtbar.
            </Typo.Paragraph>

            <Typo.H3>Phase 3, Tag 61 bis 90: Hardening und Audit-Readiness</Typo.H3>
            <Typo.Paragraph>
              Verfahrensdokumentation finalisieren, Mandantenaufklärung im
              Onboarding-Schreiben verankern, Audit-Trail-Test mit einer
              externen Stichprobe, Übergabe an das gesamte Buchhaltungsteam.
              Erst nach Phase 3 startet die Roll-out-Welle auf weitere
              Mandanten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fallen">
              Sieben typische Fallen beim KI-Einstieg
            </Typo.H2>
            <Typo.Paragraph>
              Diese sieben Muster sehen wir in fast jedem ersten Beratungs-
              gespräch. Wer sie kennt, spart sich Monate teurer Korrekturen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erstens: ChatGPT direkt im Browser für Mandantendaten oder für
              Steuerrecht-Recherche. Ohne Enterprise-Vertrag fließen Eingaben
              ins Training, ein AVV existiert nicht, § 203 ist verletzt sobald
              ein einziger Klarname enthalten ist. ChatGPT halluziniert
              außerdem deutsches Steuerrecht (Paragraphen, Urteile,
              BMF-Schreiben), was die Beratung schlicht falsch macht. Recherche
              gehört in Fachverlags-KI mit Quellenbelegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zweitens: Vollautomatisierung ohne Mensch-im-Loop. Beim ersten
              strittigen Vorgang fehlt der dokumentierte menschliche
              Letzt-Entscheid, die GoBD-Prüfbarkeit ist hinüber. Die
              berufsrechtliche Haftung bleibt ohnehin beim Steuerberater,
              eine KI-Ausschlussklausel greift praktisch nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Drittens: Mandantendaten nicht segmentiert. Ein einziges
              gemeinsames Konto bei einem Cloud-Anbieter, alle Mandanten in
              einem Topf. Ein Datenleck oder ein Mitarbeiterfehler trifft
              alle gleichzeitig.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Viertens: Keine Verfahrensdokumentation. KI läuft seit sechs
              Monaten produktiv, niemand kann dem Betriebsprüfer erklären,
              wie die Belege ins System kommen. Einzelne Buchungen werden
              verworfen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Fünftens: Microsoft 365 Copilot ohne deaktiviertes Flex Routing.
              Die EU-Datengrenze ist seit April 2026 standardmäßig durchlässig,
              und die Mandantendaten verlassen den EU-Raum, ohne dass die
              Kanzlei es merkt. Admin-Center, Entra ID und Intune müssen
              aktiv konfiguriert werden, und das Setup nach jedem
              Microsoft-Update neu geprüft.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Sechstens: EU AI Act Art. 4 ignoriert. Mitarbeitende, die KI
              produktiv nutzen, brauchen ab 02. August 2026 nachweisbare
              KI-Kompetenz. Wer diese Schulung nicht dokumentiert hat,
              riskiert bei einer Prüfung Bußgelder bis 15 Millionen Euro.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Siebtens: ROI nach vier Wochen erwartet. Erste Auto-Quoten
              liegen bei 30 Prozent, erst nach drei bis sechs Monaten
              Training sind 60 Prozent realistisch. Wer zu früh evaluiert,
              schaltet den Pilot ab, bevor der Hebel greift.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechste-schritte">
              Nächste Schritte
            </Typo.H2>
            <Typo.Paragraph>
              Wer mit der Belegerfassung starten will, findet im Spoke{" "}
              <Link
                href="/use-cases/steuerberater/belegpruefung"
                className="text-primary-600 hover:underline"
              >
                Belegprüfung automatisieren
              </Link>
              {" "}die operative Tiefe. Wer die E-Rechnung-Pflicht 2025 und
              2027 angehen muss, wechselt direkt in die{" "}
              <Link
                href="/use-cases/steuerberater/e-rechnung-verarbeitung"
                className="text-primary-600 hover:underline"
              >
                E-Rechnung-Verarbeitung
              </Link>
              . Wer die Werkzeuge unter der Haube versteht, liest den{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Bauplan für KI-Agents
              </Link>
              {" "}und den{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-Leitfaden
              </Link>
              . Bluebatch begleitet deutsche Steuerkanzleien bei der Tool-
              Wahl, der AVV-Verhandlung und dem 90-Tage-Pilotplan.{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <Typo.H2>Häufige Fragen zu KI in der Steuerkanzlei</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Darf ich ChatGPT für Mandantendaten nutzen?",
                  answer:
                    "Im Standard-Account und in der Plus-Variante nicht. Ohne ChatGPT Enterprise oder Team mit Datenverarbeitungsvertrag fließen Eingaben ins Training, ein AVV nach Art. 28 DSGVO existiert nicht, und sobald ein Mandantenname oder eine Steuernummer enthalten ist, verletzen Sie § 203 StGB. Tragbar sind 2026 Azure OpenAI Sweden Central, AWS Bedrock Frankfurt, Mistral Frankfurt und Aleph Alpha Pharia, jeweils mit AVV. Auch dort gilt: Daten so weit wie möglich vor dem LLM-Aufruf maskieren.",
                },
                {
                  question:
                    "Was sagt die BStBK zu KI in der Steuerkanzlei?",
                  answer:
                    "Die Bundessteuerberaterkammer hat am 27. Januar 2026 ihren ersten offiziellen FAQ-Katalog zur KI in der Steuerberatung veröffentlicht. Vier Kernaussagen: Vertrauliche Mandantendaten nur an Dienstleister, die sowohl gesetzlich als auch vertraglich an Verschwiegenheit gebunden sind. In öffentliche KI-Systeme wie ChatGPT Free oder Plus gehören nur allgemeine, anonymisierte Informationen. EU-residente KI ist zu bevorzugen. Und Art. 4 EU AI Act verlangt nachweisbare KI-Kompetenz aller Mitarbeitenden. Der DStV hat im April 2026 zusätzlich eine Muster-KI-Anwendungsrichtlinie veröffentlicht mit dem Prinzip Tool, Use-Case, Daten, Risiko.",
                },
                {
                  question:
                    "Welche KI-Tools sind DATEV-kompatibel?",
                  answer:
                    "DATEV-eigene KI-Funktionen sind nativ integriert (DATEV Copilot seit Februar 2026, Belegerkennung in DUO, Einspruchsgenerator). Externe SaaS-Plattformen mit DATEV-Schnittstelle: Candis (Lizenzpartner, drei Schnittstellen), Finmatics, BuchhaltungsButler, sevDesk, Lexware Office, Sage mit Sage Copilot, FastBill, GetMyInvoices. Für Eigenbau-Workflows steht die DATEV-API offen, mit Restriktionen je nach DATEV-Cloud-Variante. Für Steuerrecht-Recherche extra: Haufe CoPilot Tax, NWB KIRA, juris SteuerPraxis KI, Otto Schmidt Answers, ASCADI.",
                },
                {
                  question:
                    "Kann ich Microsoft 365 Copilot DSGVO-konform einsetzen?",
                  answer:
                    "Grundsätzlich ja, aber mit aktiver Konfiguration. Microsoft hat im April 2026 die EU-Datengrenze für Copilot stillschweigend aufgeweicht: in Lastspitzen werden LLM-Inferenzen standardmäßig in USA, Kanada oder Australien geroutet (Flex Routing). Das muss aktiv im Admin-Center, in Entra ID und in Intune deaktiviert werden, und das Setup nach jedem Microsoft-Update neu geprüft werden. Zusätzlich gehört eine eigene § 203-Verschwiegenheitsvereinbarung mit Microsoft zur Pflicht, nicht nur der Standard-AVV.",
                },
                {
                  question:
                    "Was kostet KI in der Steuerkanzlei realistisch?",
                  answer:
                    "Drei Größenordnungen je nach Pfad. DATEV-eigene KI ist in der DATEV-Standardlizenz weitgehend enthalten, kleinere Aufpreise für Smart-Module. Externe SaaS kostet typisch 15 bis 50 Euro pro Mandant und Monat, bei 800 Mandanten also 12.000 bis 40.000 Euro pro Monat. Eigenbau-Workflows haben 15.000 bis 40.000 Euro Setup-Kosten und danach 12.000 bis 18.000 Euro pro Jahr Run-Kosten, unabhängig von der Mandantenzahl. Ab 300 plus Mandanten ist Eigenbau in der Total-Cost-Rechnung in der Regel günstiger als SaaS.",
                },
                {
                  question:
                    "Wer haftet bei einem KI-Fehler im Jahresabschluss?",
                  answer:
                    "Haftungsrechtlich der Steuerberater. KI ist ein Werkzeug, kein Berufsträger. Die berufsrechtliche Verantwortung für jede Erklärung und jeden Abschluss bleibt beim unterzeichnenden Steuerberater, unabhängig davon ob die Vorarbeit menschlich oder KI-gestützt erledigt wurde. Konsequenz: Mensch-im-Loop ist kein Nice-to-Have, sondern haftungsrechtliche Pflicht. Wer KI ohne dokumentierten menschlichen Letzt-Check produktiv stellt, eröffnet zivilrechtliche Haftungsfragen, die in einer kanzlei-eigenen Berufshaftpflicht nicht zwangsläufig gedeckt sind.",
                },
                {
                  question:
                    "Muss ich Mandanten über den KI-Einsatz informieren?",
                  answer:
                    "Ja, aus zwei Gründen. Erstens aus DSGVO-Sicht: Wenn personenbezogene Daten an einen Auftragsverarbeiter (den KI-Anbieter) übermittelt werden, ist das in der Datenschutzerklärung der Kanzlei zu nennen und im Mandatsverhältnis transparent zu machen. Zweitens aus dem EU AI Act: Anwender automatisierter Systeme müssen die Betroffenen aufklären. Praktisch reicht ein Absatz im Mandantenvertrag oder Onboarding-Schreiben mit Liste der eingesetzten Tools, Zweck der Verarbeitung und Widerrufsmöglichkeit.",
                },
                {
                  question:
                    "Brauche ich für die KI-Belegerfassung eine eigene Verfahrensdokumentation?",
                  answer:
                    "Ja. Die GoBD-Verfahrensdokumentation muss jeden produktiven Verarbeitungsschritt abbilden, KI inklusive. Inhalt: eingesetztes Modell und seine Trainingsbasis, Schwellwerte für Auto-Buchung und Eskalation, Mensch-im-Loop-Prozess, Logging-Konzept, Aufbewahrungsfristen für Audit-Trails, Notfall-Prozesse bei KI-Ausfall. Wer eine bestehende GoBD-Doku hat, ergänzt das KI-Kapitel; wer keine hat, sollte die KI-Einführung als Anlass nutzen, die gesamte Verfahrensdokumentation zu aktualisieren.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu KI in der Steuerkanzlei
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="aufgabenfelder">
            Sieben Aufgabenfelder
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="tool-wege">
            Drei Tool-Wege
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="recht">
            Berufsrecht und Compliance
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="pipeline">
            KI-Belegpipeline
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="roi">
            ROI-Rechnung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="pilotplan">
            90-Tage-Pilotplan
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fallen">
            Sieben typische Fallen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naechste-schritte">
            Nächste Schritte
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
