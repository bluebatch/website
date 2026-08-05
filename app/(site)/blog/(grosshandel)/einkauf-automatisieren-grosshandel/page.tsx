import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "einkauf-automatisieren-grosshandel",
  author: "Max Hänsel",
  date: "2026-07-27",
  image: "/blog/einkauf-automatisieren-grosshandel/hero.png",
  tags: ["grosshandel", "automatisierung", "ki"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Einkauf automatisieren im Großhandel: Beschaffung ohne Zettel | Bluebatch",
  description:
    "Einkauf automatisieren im Großhandel: wie Meldebestände, Lieferantenanfragen, Angebotsverarbeitung und Preisvergleich automatisch laufen, welche Kennzahlen zählen und wie der Einstieg gelingt.",
  openGraph: {
    title: "Einkauf automatisieren im Großhandel: von der Bedarfsmeldung bis zur Bestellung",
    description:
      "Wie Großhändler ihren Einkauf automatisieren: Meldebestände überwachen, Lieferantenanfragen und Angebote automatisch verarbeiten, Preise vergleichen und sauber ins ERP übergeben.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/einkauf-automatisieren-grosshandel/hero.png",
        width: 1200,
        height: 630,
        alt: "Einkaufsteam eines Großhändlers prüft Lieferantenunterlagen an einem Doppelmonitor im Beschaffungsbüro",
      },
    ],
  },
  alternates: {
    canonical: "/blog/einkauf-automatisieren-grosshandel",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Einkauf automatisieren im Großhandel: von der Bedarfsmeldung bis zur
          Bestellung
        </BlogHero.Headline>

        <GeoSummary>
          Einkauf automatisieren heißt im Großhandel: Beschaffung zum
          Lieferanten hin, also Meldebestand und automatische
          Bestellvorschläge, KI-gestützter Angebotsvergleich und gepflegte
          Lieferantenstammdaten im ERP. Nicht gemeint ist das Erfassen
          eingehender Kundenbestellungen. Der Beitrag zeigt die Hebel, die
          passenden Kennzahlen und einen Einstieg in 90 Tagen.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-27">27. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/einkauf-automatisieren-grosshandel/hero.png"
          alt="Einkaufsteam eines mittelständischen Großhändlers prüft Lieferantenunterlagen an einem Doppelmonitor im Beschaffungsbüro"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Im Großhandel steckt das Geld nicht nur im Verkauf, sondern
              genauso im Einkauf. Wer zu spät nachbestellt, steht mit leeren
              Regalen da und verliert Aufträge. Wer zu früh oder zu viel
              ordert, bindet Kapital im Lager. Und wer Lieferantenangebote von
              Hand vergleicht, verbringt halbe Tage in Excel, statt bessere
              Konditionen auszuhandeln. Genau an dieser Stelle setzt
              Einkaufsautomatisierung an: bei der Beschaffung, also der Seite
              zum Lieferanten hin, auf der aus einem Bedarf eine Bestellung
              wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag grenzt sich bewusst von den Nachbarthemen ab. Es
              geht nicht um die Abwicklung von Kundenaufträgen, die der Beitrag
              zur{" "}
              <Link href="/blog/auftragsabwicklung-grosshandel">
                Auftragsabwicklung im Großhandel
              </Link>{" "}
              behandelt, und auch nicht um das{" "}
              <Link href="/blog/bestellungen-erfassen-automatisieren">
                Erfassen eingehender Kundenbestellungen
              </Link>
              . Hier geht es um die andere Richtung: um den eigenen Einkauf, um
              die Bestellungen, die der Großhändler bei seinen Lieferanten
              auslöst, und um alles, was davor an Bedarfsermittlung, Anfrage und
              Angebotsvergleich passiert.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-heisst-einkaufsautomatisierung">
              Was Einkaufsautomatisierung im Großhandel bedeutet
            </Typo.H2>
            <Typo.Paragraph>
              Einkauf automatisieren heißt nicht, den Einkäufer durch einen Bot
              zu ersetzen. Das Verhandeln, das Einschätzen eines Lieferanten,
              die Entscheidung über einen Rahmenvertrag bleibt Sache des
              Menschen. Automatisiert wird die Fleißarbeit drumherum: das
              Überwachen von Beständen, das Einholen und Vergleichen von
              Angeboten, das Abtippen von Preislisten, das Anlegen von
              Bestellungen im System. Das sind die Aufgaben, die im
              Tagesgeschäft als Erstes liegen bleiben, wenn es hektisch wird,
              und die trotzdem über Lieferfähigkeit und Marge entscheiden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im Großhandel kommt eine Besonderheit hinzu: Das Sortiment ist
              groß, viele Artikel werden regelmäßig nachbestellt, und ein großer
              Teil der Beschaffung folgt einem festen Muster. Genau diese
              Wiederholung ist die Steilvorlage für Automatisierung. Wo jeder
              Einkauf ein Einzelfall wäre, ließe sich wenig standardisieren.
              Weil aber die meisten Bestellungen Routine sind, lohnt es sich,
              die immer gleichen Handgriffe zu automatisieren und die Einkäufer
              auf das zu konzentrieren, was wirklich Verhandlung braucht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="beschaffungsprozess">
              Der Beschaffungsprozess von Bedarf bis Wareneingang
            </Typo.H2>
            <Typo.Paragraph>
              Bevor man automatisiert, hilft ein klarer Blick auf den Prozess.
              Der Einkauf im Großhandel lässt sich in fünf Stufen zerlegen, die
              jeder Beschaffungsvorgang durchläuft, bis die Ware im Regal liegt.
              Erst wenn diese Stufen sichtbar sind, erkennt man, an welcher
              Stelle Zeit und Geld verloren gehen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/einkauf-automatisieren-grosshandel/beschaffungsprozess.png"
              alt="Beschaffungszyklus im Großhandel mit fünf Stufen: Bedarfsermittlung aus Meldebeständen, Lieferantenanfrage, Angebotsvergleich und Auswahl, Bestellung und Wareneingang mit Rechnungsabgleich, als wiederkehrender Kreislauf"
              width={1200}
              height={650}
            />

            <Typo.Paragraph>
              Am Anfang steht die Bedarfsermittlung: Ein Artikel unterschreitet
              seinen Meldebestand, oder eine Absatzplanung meldet kommenden
              Bedarf. Es folgt die Anfrage an einen oder mehrere Lieferanten,
              sofern nicht ohnehin ein Rahmenvertrag greift. Auf die Anfrage
              kommen Angebote zurück, die verglichen und bewertet werden, nach
              Preis, Lieferzeit und Zuverlässigkeit. Dann wird die Bestellung
              ausgelöst und an den Lieferanten übermittelt. Am Ende steht der
              Wareneingang mit dem Abgleich von Bestellung, Lieferschein und
              Rechnung. Die Automatisierung setzt an jeder dieser Stufen an, am
              stärksten aber an den Übergängen, wo heute manuell abgetippt und
              per Mail hin und her geschrieben wird.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="hebel">Wo sich der Einkauf automatisieren lässt</Typo.H2>
            <Typo.Paragraph>
              Fünf Hebel decken den Großteil dessen ab, was sich im
              Großhandelseinkauf sinnvoll automatisieren lässt. Sie greifen
              ineinander, lassen sich aber einzeln einführen, sodass man klein
              anfangen und Schritt für Schritt ausbauen kann.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/einkauf-automatisieren-grosshandel/hebel-uebersicht.png"
              alt="Fünf Hebel der Einkaufsautomatisierung im Großhandel: Meldebestände und Reorder-Points, Lieferantenanfrage, Angebotsverarbeitung, Preisvergleich und Einkaufs-Kennzahlen"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              Der erste Hebel ist die Bedarfsermittlung über Meldebestände und
              Reorder-Points: Das System erkennt selbst, wann nachbestellt
              werden muss, statt dass jemand Bestandslisten durchgeht. Der
              zweite ist die Lieferantenanfrage, bei der Anfragen automatisch
              erzeugt und verschickt werden. Der dritte Hebel ist die
              Angebotsverarbeitung, also das automatische Auslesen
              eingehender Lieferantenangebote. Der vierte ist der Preisvergleich,
              der Angebote strukturiert gegenüberstellt. Der fünfte sind die
              Einkaufs-Kennzahlen, die Lieferzeiten, Zuverlässigkeit und
              Bestandsreichweite sichtbar machen. Die folgenden Abschnitte
              greifen die drei Hebel heraus, die im Großhandel den größten
              Unterschied machen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="meldebestand">
              Meldebestände und Reorder-Points automatisch überwachen
            </Typo.H2>
            <Typo.Paragraph>
              Der erste und wichtigste Hebel ist die Bedarfsermittlung. In
              vielen Großhandelsbetrieben läuft sie noch über Erfahrung und
              Bauchgefühl: Ein Disponent weiß, dass ein Artikel knapp wird, und
              bestellt nach. Das funktioniert bei den Rennern, versagt aber bei
              den tausenden Artikeln im langen Ende des Sortiments, die niemand
              im Kopf hat. Genau dort entstehen Fehlmengen und
              Notfallbestellungen zu schlechten Konditionen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Meldebestand ist die Menge, bei deren Unterschreiten
              automatisch nachbestellt wird. Automatisierte Disposition
              berechnet diese Schwelle nicht einmal statisch, sondern laufend
              aus Verbrauch, Wiederbeschaffungszeit und Sicherheitsbestand. Wird
              der Punkt erreicht, erzeugt das System einen Bestellvorschlag,
              den der Einkäufer nur noch prüft und freigibt, statt ihn von Hand
              zusammenzustellen. Bei saisonalen oder unregelmäßig laufenden
              Artikeln kann ein KI-gestütztes Forecasting den erwarteten Bedarf
              zusätzlich einschätzen, sodass die Schwelle mitwandert. So wandert
              der Einkauf von der Reaktion auf leere Regale hin zu einer
              vorausschauenden Beschaffung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="angebotsverarbeitung">
              Lieferantenangebote automatisch verarbeiten und vergleichen
            </Typo.H2>
            <Typo.Paragraph>
              Kein Teil des Einkaufs frisst so viel stille Zeit wie das
              Verarbeiten von Lieferantenangeboten. Sie kommen als PDF im
              Mail-Anhang, als Preisliste in Excel oder über ein Portal, jedes
              in einem anderen Format. Wer sie vergleichen will, tippt Artikel,
              Preise, Mengen und Lieferzeiten von Hand in eine Tabelle. Das
              kostet Stunden und ist fehleranfällig, gerade wenn mehrere Angebote
              für dieselbe Ausschreibung eintreffen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/einkauf-automatisieren-grosshandel/angebotsverarbeitung.png"
              alt="Prozessfluss der Angebotsverarbeitung: Lieferantenangebote aus E-Mail, Preisliste und Portal laufen in eine KI-gestützte Extraktion, die Artikel, Preis, Menge und Lieferzeit ausliest und in einen Preisvergleich sowie ins ERP überführt"
              width={1200}
              height={650}
            />

            <Typo.Paragraph>
              Automatisiert läuft das anders. Eine KI-gestützte Extraktion liest
              das eingehende Angebot, egal ob PDF oder Tabelle, und zieht die
              relevanten Felder heraus: Artikel, Preis, Menge, Lieferzeit,
              Konditionen. Diese Daten landen strukturiert in einem
              Preisvergleich, der mehrere Angebote nebeneinanderstellt, und
              fließen ins ERP oder Warenwirtschaftssystem. Der Einkäufer sieht
              auf einen Blick, welcher Lieferant bei welcher Position vorne
              liegt, und entscheidet auf einer sauberen Grundlage statt aus einer
              halb abgetippten Excel-Liste. Diese automatische Verarbeitung
              eingehender Belege ist technisch eng verwandt mit der{" "}
              <Link href="/blog/bestellungen-erfassen-automatisieren">
                automatisierten Erfassung von Bestellungen
              </Link>
              , zeigt aber in die andere Richtung: nicht auf den Kundenauftrag,
              sondern auf das Lieferantenangebot.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="lieferantendaten">
              Lieferantendaten und ERP als gemeinsames Rückgrat
            </Typo.H2>
            <Typo.Paragraph>
              Einkaufsautomatisierung fällt in sich zusammen, wenn die
              Stammdaten nicht stimmen. Wenn Artikelnummern des Lieferanten und
              die eigenen nicht sauber zugeordnet sind, wenn Konditionen an
              mehreren Stellen gepflegt werden und auseinanderlaufen, dann kostet
              die Automatisierung mehr Zeit, als sie spart. Deshalb ist die
              saubere Anbindung an das ERP kein Nebenschauplatz, sondern das
              Rückgrat des Ganzen. Lieferanten, Artikel und Konditionen gehören
              einmal gepflegt und überall konsistent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Praxis läuft der Abgleich über die Warenwirtschaft, die
              Bestellungen, Wareneingänge und Bestände zusammenführt. Welche
              Systeme im Großhandel dafür in Frage kommen und wie sie sich
              anbinden lassen, ordnet der{" "}
              <Link href="/blog/warenwirtschaftssystem-grosshandel">
                Überblick zu Warenwirtschaftssystemen für den Großhandel
              </Link>{" "}
              ein. Wie die Übergaben zwischen den Systemen sauber aufgesetzt
              werden, vertieft der Beitrag zu{" "}
              <Link href="/blog/erp-workflows-automatisieren">
                ERP-Workflows automatisieren
              </Link>
              . Wo Lieferanten Nachweise und Zertifikate liefern müssen, hilft
              zudem die{" "}
              <Link href="/branchen/grosshandel/workflows/zertifikatspruefung-lieferanten">
                automatische Prüfung von Lieferantenzertifikaten
              </Link>
              . Erst wenn dieses Rückgrat steht, tragen die anderen Hebel
              wirklich.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kennzahlen">
              Die Kennzahlen, an denen sich Einkaufsautomatisierung messen lässt
            </Typo.H2>
            <Typo.Paragraph>
              Automatisierung ist kein Selbstzweck, sie muss sich in Zahlen
              zeigen. Drei Kennzahlen reichen im Einkauf aus, um zu erkennen, ob
              die Automatisierung wirkt, und sie sind bewusst schlicht gehalten,
              damit sie im Alltag wirklich erhoben werden.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/einkauf-automatisieren-grosshandel/einkaufs-kpis.png"
              alt="Drei Einkaufs-KPIs als Stat-Boxen: Liefertreue, Wiederbeschaffungszeit und Bestandsverfügbarkeit mit jeweils kurzer Erklärung"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              Die Liefertreue misst, welcher Anteil der Lieferungen vollständig
              und pünktlich eintrifft, und deckt auf, welche Lieferanten
              zuverlässig sind. Die Wiederbeschaffungszeit zeigt, wie lange es
              von der Bestellung bis zum Wareneingang dauert, und ist die
              Grundlage für richtig gesetzte Meldebestände. Die
              Bestandsverfügbarkeit beschreibt, wie oft ein Artikel lieferbar
              ist, wenn ein Kunde ihn braucht, und verbindet den Einkauf direkt
              mit dem Verkaufserfolg. Zusammen ergeben die drei ein ehrliches
              Bild.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kennzahl</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Misst</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Verbessert durch</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Liefertreue</DataTable.Cell>
                  <DataTable.Cell>Anteil pünktlicher Lieferungen</DataTable.Cell>
                  <DataTable.Cell>Angebotsvergleich, KPIs</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Wiederbeschaffungszeit</DataTable.Cell>
                  <DataTable.Cell>Bestellung bis Wareneingang</DataTable.Cell>
                  <DataTable.Cell>Meldebestände, Anfrage</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Bestandsverfügbarkeit</DataTable.Cell>
                  <DataTable.Cell>Artikel lieferbar bei Bedarf</DataTable.Cell>
                  <DataTable.Cell>Disposition, Forecasting</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einstieg">In 90 Tagen zum automatisierten Einkauf</Typo.H2>
            <Typo.Paragraph>
              Niemand muss den ganzen Einkauf auf einmal automatisieren. Ein
              gestufter Einstieg über drei Monate liefert früh sichtbare
              Ergebnisse und baut das Vertrauen für die größeren Schritte auf,
              ohne den laufenden Betrieb zu stören.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/einkauf-automatisieren-grosshandel/einstieg.png"
              alt="Gestufter Einstieg in die Einkaufsautomatisierung in drei Karten: 30 Tage Lieferantendaten sammeln und Bestände messen, 60 Tage Angebotsverarbeitung und Meldebestände automatisieren, 90 Tage ERP anbinden und Einkaufs-Reporting aufsetzen"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              In den ersten 30 Tagen geht es ums Aufräumen und Messen: die
              Lieferanten- und Artikelstammdaten sauber ziehen und die
              Bestandsreichweite als Ausgangswert erheben. In den nächsten 30
              Tagen folgen die Angebotsverarbeitung und die ersten
              automatischen Meldebestände, sodass Angebote nicht mehr abgetippt
              und Bestellvorschläge selbst erzeugt werden. In den letzten 30
              Tagen kommen die saubere ERP-Anbindung und ein einfaches
              Einkaufs-Reporting dazu. Nach 90 Tagen läuft ein Einkauf, der
              rechtzeitig nachbestellt, Angebote in Minuten statt Stunden
              vergleicht und seine eigenen Zahlen kennt. Für den größeren Rahmen,
              in den sich das einfügt, lohnt der Blick auf die{" "}
              <Link href="/blog/b2b-grosshandel-digitalisierung">
                Digitalisierung im B2B-Großhandel
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">
              Häufige Fragen zur Einkaufsautomatisierung im Großhandel
            </Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Was unterscheidet Einkaufsautomatisierung von der Auftragsabwicklung?",
                  answer:
                    "Die Einkaufsautomatisierung betrifft die Beschaffungsseite zum Lieferanten hin: Bedarf ermitteln, anfragen, Angebote vergleichen, bestellen, Ware annehmen. Die Auftragsabwicklung betrifft die Kundenseite, also die Bearbeitung eingehender Kundenaufträge bis zur Rechnung. Beide sind Automatisierung im Großhandel, setzen aber an entgegengesetzten Enden der Wertschöpfung an.",
                },
                {
                  question:
                    "Ersetzt Einkaufsautomatisierung die Einkäufer?",
                  answer:
                    "Nein. Verhandeln, Lieferanten einschätzen und über Rahmenverträge entscheiden bleibt Sache des Menschen. Automatisiert wird die Fleißarbeit drumherum: Bestände überwachen, Angebote auslesen und vergleichen, Bestellungen anlegen. Der Einkäufer gewinnt dadurch Zeit für das, was wirklich Verhandlung braucht.",
                },
                {
                  question: "Was ist ein Meldebestand und wie hilft die Automatisierung?",
                  answer:
                    "Ein Meldebestand ist die Menge, bei deren Unterschreiten nachbestellt wird. Automatisiert wird diese Schwelle laufend aus Verbrauch, Wiederbeschaffungszeit und Sicherheitsbestand berechnet, und bei Erreichen erzeugt das System einen Bestellvorschlag. Der Einkäufer prüft und gibt frei, statt Bestandslisten von Hand durchzugehen.",
                },
                {
                  question: "Wie werden Lieferantenangebote automatisch verarbeitet?",
                  answer:
                    "Eine KI-gestützte Extraktion liest das eingehende Angebot, egal ob PDF, Excel-Preisliste oder Portal, und zieht Artikel, Preis, Menge und Lieferzeit heraus. Diese Daten landen strukturiert in einem Preisvergleich und im ERP. So entfällt das manuelle Abtippen, und mehrere Angebote lassen sich in Minuten statt Stunden vergleichen.",
                },
                {
                  question: "Braucht man dafür ein neues ERP?",
                  answer:
                    "Meist nicht. Wichtiger als ein neues System ist, dass Lieferanten-, Artikel- und Konditionsdaten sauber gepflegt und konsistent sind. Die Automatisierung setzt in der Regel auf der vorhandenen Warenwirtschaft auf und ergänzt sie um Disposition, Angebotsverarbeitung und Reporting, ohne das ERP zu ersetzen.",
                },
                {
                  question: "Womit fängt man am besten an?",
                  answer:
                    "Mit den Stammdaten und dem Messen. Zuerst Lieferanten- und Artikeldaten sauber ziehen und die Bestandsreichweite als Ausgangswert erheben. Danach lohnt sich die Angebotsverarbeitung, weil sie sofort spürbar Zeit spart, gefolgt von automatischen Meldebeständen und einem einfachen Einkaufs-Reporting.",
                },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Der Großhandel verdient im Einkauf mit, nicht nur im Verkauf. Wer
              rechtzeitig nachbestellt, bleibt lieferfähig, ohne Kapital im Lager
              zu binden, und wer Angebote sauber vergleicht, sichert sich bessere
              Konditionen. Einkaufsautomatisierung setzt genau dort an: Sie
              überwacht Meldebestände, holt Angebote ein und liest sie aus,
              vergleicht Preise und übergibt alles sauber ans ERP. Die Einkäufer
              verlieren dabei nichts von ihrer Rolle, sie gewinnen Zeit für das,
              was Menschen besser können als jede Software.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Einstieg gelingt gestuft: erst Stammdaten und messen, dann
              Angebote verarbeiten und Meldebestände setzen, dann anbinden und
              berichten. Gemessen an Liefertreue, Wiederbeschaffungszeit und
              Bestandsverfügbarkeit wird sichtbar, ob es wirkt. Wenn ihr wissen
              wollt, wo bei euch im Einkauf der größte Hebel liegt und welcher
              Schritt sich zuerst lohnt,{" "}
              <Link href="/contact">sprecht uns gern an</Link>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Liegt euer Engpass nicht im Einkauf, sondern auf der Kundenseite,
              also bei den Aufträgen, die täglich per Mail und PDF hereinkommen,
              führt der Weg über die{" "}
              <Link href="/branchen/grosshandel/workflows/auftragserfassung">
                automatische Auftragserfassung im Großhandel
              </Link>
              .
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
