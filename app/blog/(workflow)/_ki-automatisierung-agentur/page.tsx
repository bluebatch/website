import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ki-automatisierung-agentur",
  author: "Max Hänsel",
  date: "2026-07-05",
  image: "/blog/ki-automatisierung-agentur/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI-Automatisierungsagentur: Leistungen, Auswahl und Projektablauf 2026",
  description:
    "Was eine KI-Automatisierungsagentur leistet, wie sie sich von Beratung und Systemhaus unterscheidet, worauf Sie bei der Auswahl achten und wie ein Projekt abläuft. Mit DSGVO-Einordnung für den Mittelstand.",
  openGraph: {
    title: "KI-Automatisierungsagentur: Leistungen, Auswahl und Ablauf",
    description:
      "Neutraler Leitfaden für den Mittelstand: Was eine KI-Automatisierungsagentur macht, wie Sie die richtige finden und wie ein Projekt vom Discovery bis zum Betrieb abläuft.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ki-automatisierung-agentur/hero.png",
        width: 1200,
        height: 630,
        alt: "KI-Automatisierungsagentur im Arbeitsgespräch mit einem mittelständischen Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ki-automatisierung-agentur",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI-Automatisierungsagentur: Was sie leistet und wie Sie die richtige
          finden
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-05">5. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ki-automatisierung-agentur/hero.png"
          alt="KI-Automatisierungsagentur im Arbeitsgespräch mit einem mittelständischen Unternehmen"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              „KI-Automatisierungsagentur" ist ein junger Begriff für eine alte
              Aufgabe: Geschäftsprozesse spürbar schneller und fehlerärmer
              machen, nur diesmal mit KI statt mit reinen Regeln. Seit etwa 2024
              hat sich dafür der Typus der AI Automation Agency
              herausgebildet, ein Dienstleister, der nicht nur berät und nicht
              nur Software ausliefert, sondern konkrete Abläufe von der Analyse
              über den Bau bis zum laufenden Betrieb automatisiert. Für
              mittelständische Unternehmen, die KI nicht aus reiner Neugier,
              sondern wegen eines konkreten Engpasses einsetzen wollen, ist das
              oft der pragmatischste Weg.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Artikel ordnet das Thema neutral ein. Wir erklären, was so
              eine Agentur tatsächlich macht, wie sie sich von klassischer
              Beratung, Systemhaus und einzelnen Freelancern unterscheidet,
              welche Leistungen Standard sind, worauf Sie bei der Auswahl achten
              sollten, wie ein typisches Projekt abläuft und welche
              DSGVO-Fragen Sie im Vorfeld klären müssen. Ziel ist nicht, Ihnen
              einen Anbieter zu verkaufen, sondern Ihnen eine Grundlage zu geben,
              mit der Sie selbst eine gute Entscheidung treffen können.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="abgrenzung">
            <Typo.H2>
              Beratung, Systemhaus, Freelancer: die Abgrenzung
            </Typo.H2>

            <BlogImage
              src="/blog/ki-automatisierung-agentur/agentur-vs-alternativen.png"
              alt="Vergleich von KI-Automatisierungsagentur, klassischer Beratung, Systemhaus und Freelancer"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der wichtigste Unterschied ist die Ergebnisverantwortung. Eine{" "}
              <strong>klassische Unternehmensberatung</strong> analysiert Ihre
              Prozesse und empfiehlt, was zu tun wäre, baut die Lösung aber in
              der Regel nicht selbst. Ein <strong>Systemhaus</strong> liefert
              Hardware, Standardsoftware und Lizenzen und betreibt Ihre IT,
              entwickelt aber keine maßgeschneiderten KI-Abläufe. Ein{" "}
              <strong>RPA-Dienstleister</strong> baut regelbasierte Roboter, die
              an strukturierten Oberflächen klicken, aber an unstrukturierten
              Daten wie freien E-Mail-Texten, Scans oder Sprache schnell an ihre
              Grenzen kommen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine <strong>KI-Automatisierungsagentur</strong> verbindet beides:
              Sie nimmt den Prozess auf, baut die Automatisierung mit
              Sprachmodellen und Workflow-Tools und übernimmt anschließend den
              Betrieb. Der Unterschied zu einem einzelnen{" "}
              <strong>n8n- oder Make-Freelancer</strong> liegt weniger im
              einzelnen Workflow als in der Breite: Use-Case-Auswahl,
              Datenschutz-Konzept, Integration in bestehende Systeme,
              Dokumentenverstehen, Schulung und vor allem die Wartung über die
              erste Auslieferung hinaus. Wer schon weiß, wie ein einzelner Agent
              technisch entsteht, findet die Grundlagen in unserer Anleitung zum{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                Erstellen von KI-Agenten
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="leistungen">
            <Typo.H2>Was eine KI-Automatisierungsagentur leistet</Typo.H2>

            <BlogImage
              src="/blog/ki-automatisierung-agentur/leistungen-spektrum.png"
              alt="Typische Leistungen einer KI-Automatisierungsagentur als Übersichtsraster"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Das Leistungsspektrum ist breiter, als der Name „Automatisierung"
              vermuten lässt. Es beginnt nicht mit Technik, sondern mit der
              nüchternen Frage, welcher Prozess überhaupt automatisiert werden
              sollte. Die folgende Übersicht zeigt die Bausteine, die bei den
              meisten seriösen Anbietern zum Standard gehören.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Leistung</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was dahintersteckt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Prozessanalyse</DataTable.Cell>
                  <DataTable.Cell>
                    Aufnahme der Abläufe, Identifikation und Priorisierung der
                    Use-Cases nach Nutzen und Aufwand
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Workflow-Automatisierung</DataTable.Cell>
                  <DataTable.Cell>
                    Ablaufketten in n8n, Make oder Zapier, die Systeme,
                    Postfächer und Datenquellen verbinden
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>KI-Agenten und LLM-Integration</DataTable.Cell>
                  <DataTable.Cell>
                    Sprachmodelle von OpenAI, Anthropic oder Azure, eingebunden
                    für Entscheidungen, Texte und Klassifikation
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Dokumentenverarbeitung</DataTable.Cell>
                  <DataTable.Cell>
                    Eingangsrechnungen, Bestellungen und Angebote automatisch
                    lesen, prüfen und in die Systeme übergeben
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Wissensdatenbank und RAG</DataTable.Cell>
                  <DataTable.Cell>
                    Firmenwissen durchsuchbar machen, damit Agenten und Chatbots
                    auf belastbare Quellen statt auf Halluzinationen antworten
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Schulung, Betrieb und Wartung</DataTable.Cell>
                  <DataTable.Cell>
                    Enablement des Teams plus Monitoring, Anpassung und Pflege im
                    laufenden Betrieb
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Der letzte Punkt wird leicht übersehen und ist doch der
              entscheidende: Ein Workflow ist schnell gebaut, aber Prozesse,
              Postfächer und Datenformate ändern sich. Wer nur baut und dann
              weiterzieht, hinterlässt eine Automatisierung, die nach einem
              halben Jahr stillschweigend bricht. Den größten Hebel haben für
              viele Großhändler die dokumentenlastigen Abläufe, etwa das{" "}
              <Link
                href="/use-cases/grosshandel/invoice-bot"
                className="text-primary-600 hover:underline"
              >
                automatisierte Lesen von Eingangsrechnungen
              </Link>{" "}
              oder die{" "}
              <Link
                href="/use-cases/grosshandel/auftragserfassung"
                className="text-primary-600 hover:underline"
              >
                Auftragserfassung aus E-Mail und Fax
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="auswahl">
            <Typo.H2>Sieben Kriterien für die Auswahl</Typo.H2>

            <BlogImage
              src="/blog/ki-automatisierung-agentur/auswahlkriterien.png"
              alt="Sieben Kriterien für die Auswahl einer KI-Automatisierungsagentur"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Auswahl entscheidet mehr über den Projekterfolg als das
              eingesetzte Tool. Diese sieben Kriterien helfen, einen seriösen
              Partner von einem reinen Workflow-Bastler zu unterscheiden.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Branchenerfahrung.</strong> Prozessverständnis schlägt
                Tool-Kenntnis. Eine Agentur, die Ihren Bestelleingang oder Ihre
                Rechnungsprüfung schon kennt, spart Ihnen die teure Lernkurve.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>DSGVO- und Datenschutz-Kompetenz.</strong> Kann der
                Anbieter erklären, wo die Daten verarbeitet werden, ob auf ihnen
                trainiert wird und wie der Auftragsverarbeitungsvertrag
                aussieht? Vage Antworten sind ein Warnsignal.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Tool-Unabhängigkeit.</strong> Eine gute Agentur wählt
                das passende Werkzeug, statt Sie in das eine Produkt zu drängen,
                an dem sie selbst verdient. Achten Sie auf Lock-in.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Referenzen und Fallbeispiele.</strong> Konkrete,
                nachvollziehbare Projekte sagen mehr als eine Liste von
                Logos auf der Website.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Betrieb und Wartung.</strong> Fragen Sie explizit, was
                nach dem Go-live passiert. Wer nur baut, lässt Sie mit dem
                Problem allein, sobald sich etwas ändert.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>EU-Datenresidenz.</strong> Lassen sich die eingesetzten
                Modelle in Europa betreiben? Für sensible Daten ist das oft die
                Voraussetzung, überhaupt zu starten.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Enablement statt Dauerabhängigkeit.</strong> Ein guter
                Partner befähigt Ihr Team, einfache Anpassungen selbst zu machen,
                statt Sie für jede Kleinigkeit zurückkommen zu lassen.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div id="ablauf">
            <Typo.H2>Wie ein Projekt abläuft</Typo.H2>

            <BlogImage
              src="/blog/ki-automatisierung-agentur/projektablauf.png"
              alt="Fünf Phasen eines KI-Automatisierungsprojekts vom Discovery bis zum Betrieb"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Seriöse Projekte folgen fast immer demselben Muster, und der rote
              Faden ist: erst messbarer Nutzen an einem einzigen Use-Case, dann
              Ausbau. Wer mit zehn Baustellen gleichzeitig startet, verbrennt
              Budget, bevor irgendetwas produktiv läuft.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der <strong>Discovery</strong> nimmt die Agentur Ihre Abläufe
              auf, in der Größenordnung von ein bis drei Wochen. Danach folgt die{" "}
              <strong>Use-Case-Priorisierung</strong>, in der Nutzen gegen
              Aufwand abgewogen wird, damit der erste Use-Case viel bringt und
              wenig kostet. Im <strong>Pilot</strong> wird genau dieser eine
              Anwendungsfall produktiv gebaut und an echten Daten getestet. Erst
              wenn er trägt, geht es in die <strong>Produktivsetzung</strong> mit
              voller Integration und Rollout, und schließlich in den{" "}
              <strong>Betrieb</strong> mit Wartung, Monitoring und der schrittweisen
              Erweiterung um weitere Use-Cases. Eine ausführlichere Sicht auf das
              methodische Vorgehen bietet unser{" "}
              <Link
                href="/blog/prozessautomatisierung-guide"
                className="text-primary-600 hover:underline"
              >
                Leitfaden zur Prozessautomatisierung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="modelle">
            <Typo.H2>Preis- und Zusammenarbeitsmodelle</Typo.H2>
            <Typo.Paragraph>
              Belastbare Pauschalpreise gibt es nicht, weil sich Use-Cases zu
              stark unterscheiden. In der Praxis haben sich drei Modelle
              herausgebildet. Beim <strong>Festpreis-Projekt</strong> wird ein
              klar abgegrenzter Use-Case oder Pilot zu einem fixen Preis gebaut.
              Das ist für ein Erstprojekt oft die beste Wahl, weil das Risiko
              kalkulierbar bleibt und beide Seiten ein klares Ergebnis vor Augen
              haben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beim <strong>Sprint- oder Retainer-Modell</strong> arbeitet die
              Agentur kontinuierlich an Weiterentwicklung und Betrieb, was sich
              eignet, sobald die erste Automatisierung läuft und stetig
              ausgebaut wird. Das offene <strong>Zeit-und-Material-Modell</strong>{" "}
              passt zu unklar umrissenen Vorhaben, verlangt aber Vertrauen und
              enge Steuerung. Die pragmatische Empfehlung: mit einem
              Festpreis-Piloten an einem konkreten Engpass starten, den Nutzen
              messen und erst dann über ein laufendes Modell für den Ausbau
              entscheiden.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="dsgvo">
            <Typo.H2>DSGVO: was Sie vorab klären sollten</Typo.H2>

            <BlogImage
              src="/blog/ki-automatisierung-agentur/dsgvo-betrieb.png"
              alt="DSGVO bei der Zusammenarbeit mit einer Agentur: Auftragsverarbeitung, EU-Datenresidenz und EU AI Act"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Sobald eine Agentur Ihre Daten anfasst und sie an Sprachmodelle
              weitergibt, sind Sie als Verantwortlicher in der Pflicht. Drei
              Punkte sollten Sie vor Projektstart klären. Erstens die{" "}
              <strong>Auftragsverarbeitung</strong>: Sie brauchen einen
              Auftragsverarbeitungsvertrag mit der Agentur und müssen
              sicherstellen, dass auch die eingesetzten KI-Anbieter über
              entsprechende Verträge eingebunden sind. Über die geschäftlichen
              API- und Enterprise-Schienen der großen Anbieter werden Eingaben
              standardmäßig nicht zum Training der Modelle verwendet, anders als
              bei den einfachen Consumer-Chat-Versionen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zweitens die <strong>EU-Datenresidenz</strong>: Für sensible Daten
              sollten die Modelle in Europa verarbeitet werden. Das ist bei den
              großen Anbietern möglich, oft aber als Enterprise- oder
              Advanced-Feature, das aktiv konfiguriert werden muss. Drittens die{" "}
              <strong>Transparenzpflicht</strong>: Ab dem{" "}
              <strong>2. August 2026</strong> verlangt Artikel 50 des EU AI Act,
              dass ein KI-Chatbot kenntlich macht, dass das Gegenüber mit einer
              KI spricht. Berufsgeheimnisträger wie Kanzleien oder Praxen müssen
              zusätzlich § 203 StGB beachten. Welche Werkzeuge sich für einen
              datenschutzkonformen Aufbau eignen, zeigt unser Überblick über{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-konforme KI-Tools
              </Link>
              . Dieser Abschnitt ist eine Orientierung, kein Rechtsrat, sprechen
              Sie die konkrete Ausgestaltung mit Ihrem Datenschutzbeauftragten
              ab.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="nutzen">
            <Typo.H2>Wo der Nutzen im Mittelstand entsteht</Typo.H2>
            <Typo.Paragraph>
              Der größte Hebel liegt selten im spektakulären KI-Projekt, sondern
              in den unscheinbaren, hochfrequenten Abläufen. Im Großhandel sind
              das typischerweise die dokumentenlastigen Prozesse: Bestellungen,
              die aus E-Mail, Fax und Portalen einlaufen und manuell ins System
              getippt werden, Eingangsrechnungen, die gegen Bestellung und
              Lieferschein geprüft werden müssen, und Angebote, die unter
              Zeitdruck zusammengestellt werden. Hier verschiebt eine
              Automatisierung die Bearbeitung von Stunden auf Minuten und
              entlastet das Team von Routine, ohne Stellen abzubauen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Belastbare Zahlen lassen sich nur am konkreten Prozess ermitteln,
              nicht pauschal versprechen. Genau deshalb steht am Anfang die
              nüchterne Discovery und nicht das große Versprechen. Wie sich KI im
              Tagesgeschäft eines Großhändlers konkret auswirkt, zeigt unser
              Beitrag dazu, wie sich{" "}
              <Link
                href="/blog/wie-wirkt-sich-ki-auf-den-grosshandel-aus"
                className="text-primary-600 hover:underline"
              >
                KI auf den Großhandel auswirkt
              </Link>
              , und einen Überblick über die machbaren Anwendungsfälle gibt
              unsere Sammlung von{" "}
              <Link
                href="/use-cases/grosshandel"
                className="text-primary-600 hover:underline"
              >
                Use-Cases im Großhandel
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              Eine KI-Automatisierungsagentur ist dann der richtige Partner,
              wenn Sie einen konkreten Prozess schneller und fehlerärmer machen
              wollen, aber weder die Kapazität noch die Spezialisten haben, um
              das selbst zu bauen und dauerhaft zu betreiben. Die Auswahl
              entscheiden weniger die eingesetzten Tools als die handwerklichen
              Fragen: Versteht der Anbieter Ihre Branche, kann er den
              Datenschutz sauber erklären, baut er nicht nur, sondern betreibt
              auch, und befähigt er Ihr Team statt Sie abhängig zu machen?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau mit diesem Anspruch begleitet Bluebatch deutsche
              Mittelständler und Großhändler: erst der eine Use-Case mit
              messbarem Nutzen, datenschutzkonform und wartbar gebaut, dann der
              Ausbau.{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprechen Sie uns an
              </Link>{" "}
              oder werfen Sie einen Blick auf unsere{" "}
              <Link
                href="/services"
                className="text-primary-600 hover:underline"
              >
                Leistungen
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Was macht eine KI-Automatisierungsagentur?",
                  answer:
                    "Sie automatisiert Geschäftsprozesse mit Sprachmodellen und Workflow-Tools, von der Prozessanalyse über den Bau bis zum laufenden Betrieb. Typische Leistungen sind Use-Case-Auswahl, Workflow-Automatisierung in n8n, Make oder Zapier, KI-Agenten, Dokumentenverarbeitung, Wissensdatenbanken sowie Schulung und Wartung. Anders als eine Beratung empfiehlt sie nicht nur, sondern setzt auch um.",
                },
                {
                  question:
                    "Was unterscheidet eine Agentur von einem Systemhaus oder Freelancer?",
                  answer:
                    "Ein Systemhaus liefert Hardware, Standardsoftware und IT-Betrieb, baut aber keine maßgeschneiderten KI-Abläufe. Ein einzelner Freelancer baut oft einzelne Workflows, übernimmt aber selten Datenschutz-Konzept, Integration und Wartung. Eine KI-Automatisierungsagentur deckt die ganze Breite ab und betreibt die Lösung auch über die erste Auslieferung hinaus.",
                },
                {
                  question:
                    "Worauf sollte ich bei der Auswahl einer Agentur achten?",
                  answer:
                    "Auf Branchenerfahrung, nachweisbare DSGVO-Kompetenz, Tool-Unabhängigkeit ohne Vendor-Lock-in, konkrete Referenzen, Betrieb und Wartung statt nur Bau, die Möglichkeit der EU-Datenresidenz und darauf, dass die Agentur Ihr Team befähigt statt Sie dauerhaft abhängig zu machen.",
                },
                {
                  question: "Wie läuft ein KI-Automatisierungsprojekt ab?",
                  answer:
                    "In fünf Phasen: Discovery (Prozesse aufnehmen), Use-Case-Priorisierung (Nutzen gegen Aufwand), Pilot oder PoC (ein Use-Case produktiv), Produktivsetzung (Integration und Rollout) und Betrieb (Wartung, weitere Use-Cases). Leitsatz ist: erst messbarer Nutzen an einem Use-Case, dann Ausbau.",
                },
                {
                  question: "Was kostet die Zusammenarbeit mit einer Agentur?",
                  answer:
                    "Pauschalpreise gibt es nicht, weil sich Use-Cases stark unterscheiden. Üblich sind drei Modelle: Festpreis für einen klar abgegrenzten Piloten, Sprint oder Retainer für laufende Weiterentwicklung und Betrieb sowie offenes Zeit-und-Material-Modell für unklare Scopes. Für den Einstieg ist ein Festpreis-Pilot an einem konkreten Engpass meist die risikoärmste Wahl.",
                },
                {
                  question:
                    "Ist die Zusammenarbeit mit einer Agentur DSGVO-konform?",
                  answer:
                    "Mit der richtigen Konfiguration ja. Voraussetzung sind Auftragsverarbeitungsverträge mit der Agentur und den eingesetzten KI-Anbietern, sinnvollerweise EU-Datenresidenz für sensible Daten. Über die geschäftlichen Schienen wird standardmäßig nicht auf Ihren Daten trainiert. Ab dem 2. August 2026 müssen KI-Chatbots laut Artikel 50 EU AI Act kenntlich machen, dass der Nutzer mit einer KI spricht. Das ist eine Orientierung und kein Rechtsrat.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zur KI-Automatisierungsagentur
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="abgrenzung">
            Abgrenzung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="leistungen">
            Leistungen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="auswahl">
            Auswahlkriterien
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="ablauf">
            Projektablauf
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modelle">
            Preismodelle
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="dsgvo">
            DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="nutzen">
            Nutzen im Mittelstand
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
