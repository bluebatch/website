import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "werden-steuerberater-durch-ki-ersetzt",
  author: "Max Hänsel",
  date: "2026-08-14",
  image: "/blog/werden-steuerberater-durch-ki-ersetzt/hero.png",
  tags: ["ki", "steuerberater", "datev", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Werden Steuerberater durch KI ersetzt? Die Kostenrechnung",
  description:
    "2.500 Euro KI-Rechnung in der Kanzlei: was sie treibt, wie sie sich gegen 1,5 Senior-Berufsträger rechnet und welche vier Schritte die Kosten steuerbar machen.",
  openGraph: {
    title: "Werden Steuerberater durch KI ersetzt? Eine 2.500-Euro-Rechnung",
    description:
      "Die Verdrängungsfrage als Rechenaufgabe: Kostentreiber einer KI-Rechnung, Vollkosten von 1,5 Senior-Berufsträgern, Berufsrecht nach § 62a StBerG und das KI-Verzeichnis der BStBK.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/werden-steuerberater-durch-ki-ersetzt/hero.png",
        width: 1200,
        height: 630,
        alt: "Hände halten eine gedruckte Rechnung über einem Kanzleischreibtisch mit Aktenordnern",
      },
    ],
  },
  alternates: {
    canonical: "/blog/werden-steuerberater-durch-ki-ersetzt",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Werden Steuerberater durch KI ersetzt? Eine 2.500-Euro-Rechnung als
          Antwort
        </BlogHero.Headline>

        <GeoSummary>
          Werden Steuerberater durch KI ersetzt? Betriebswirtschaftlich lautet
          die Antwort nein, aber die Begründung ist eine Rechnung: 2.500 Euro
          KI-Kosten im Monat entsprechen rund 15 Prozent der Vollkosten von 1,5
          Senior-Berufsträgern, und in einem Markt, in dem Einzelkanzleien nur
          40 Prozent ihrer offenen Stellen besetzen, existiert die personelle
          Alternative oft gar nicht. Dieser Beitrag rechnet Kostentreiber,
          Gegenrechnung und Steuerung für Kanzleien mit 50 bis 1.000
          Mitarbeitenden durch.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-14">14. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/werden-steuerberater-durch-ki-ersetzt/hero.png"
          alt="Hände halten eine gedruckte Rechnung über einem Kanzleischreibtisch mit Aktenordnern"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Ein Senior-Berufsträger in einer Kanzlei mit rund 40
              Mitarbeitenden hatte im letzten Monat eine KI-Rechnung von 2.500
              Euro. Nicht die Kanzlei, er persönlich, über ein privates Konto,
              weil das Ausprobieren schneller ging als ein
              Beschaffungsprozess. Als die Rechnung im Partnerkreis auf dem
              Tisch lag, war die erste Reaktion nicht Neugier, sondern
              Schreck: Es gibt Kanzleien, die für ihre komplette Fachsoftware
              weniger ausgeben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau an dieser Stelle wird die Frage interessant, die sonst nur
              in Podiumsdiskussionen vorkommt. Werden Steuerberater durch KI
              ersetzt? Die beruhigende Antwort lautet seit drei Jahren „nein,
              sie ergänzt ihn". Die ehrliche Antwort setzt eine Zahl daneben:
              2.500 Euro im Monat sind bei einem Stundensatz von 180 Euro
              knapp 14 fakturierbare Stunden, also ungefähr ein halber
              Beratertag pro Woche. Wenn die KI mehr als einen halben
              Beratertag pro Woche einspart, war die Rechnung günstig. Wenn
              nicht, war sie teuer. Der Rest ist Buchhaltung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Artikel rechnet das durch: was auf so einer Rechnung
              tatsächlich steht, wie sie sich gegen Personalkosten verhält,
              warum Kanzleiinhaber sich systematisch verschätzen und an
              welcher Stelle das Thema aufhört, ein Kostenthema zu sein.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="rechnung">
            <Typo.H2>Was auf einer 2.500-Euro-Rechnung wirklich steht</Typo.H2>
            <Typo.Paragraph>
              Der Betrag entsteht nicht durch das Abo. Er entsteht durch vier
              Mechaniken, die sich gegenseitig verstärken.
            </Typo.Paragraph>

            <Typo.H3>Erstens: Lizenz und Verbrauch sind zwei Dinge</Typo.H3>
            <Typo.Paragraph>
              Die sichtbaren Preise sind harmlos. Ein Team-Platz bei den großen
              Anbietern kostet 20 US-Dollar im Monat bei Jahreszahlung, 25
              Dollar bei monatlicher Abrechnung. Zusätzliche
              DATEV-Nutzerlizenzen liegen bei etwa 20 bis 30 Euro pro
              Arbeitsplatz, die DATEV KI-Werkstatt gibt es als kostenfreie
              Lizenz im Shop, Kosten fallen dort nur für einzeln lizenzierte
              Erweiterungen an.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Darunter liegt aber eine zweite Ebene: die verbrauchsabhängige
              Abrechnung über Programmierschnittstellen, mit der jede
              Automatisierung läuft, die nicht ein Mensch per Hand anstößt.
              Diese Ebene hat keine Obergrenze, solange niemand eine setzt. Wer
              wissen will, wie diese Logik im Detail funktioniert, findet sie
              in unserem Beitrag zu den{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Abrechnungswegen von KI-Werkzeugen
              </Link>{" "}
              ausführlich aufgeschlüsselt. Für die Kanzlei reicht der Merksatz:
              Der Preis auf der Website ist der Preis für Menschen. Alles, was
              ohne Menschen läuft, wird anders abgerechnet.
            </Typo.Paragraph>

            <Typo.H3>Zweitens: Dokumentlänge multipliziert</Typo.H3>
            <Typo.Paragraph>
              Im IT-Umfeld treibt Parallelität die Kosten, also mehrere
              gleichzeitig laufende Sitzungen. In der Kanzlei ist es die
              Dokumentlänge. Ein Betriebsprüfungsbericht, ein Konzernabschluss,
              ein 80-seitiger Gesellschaftsvertrag, drei BMF-Schreiben zum
              Abgleich: Jede dieser Anfragen liest deutlich mehr Text als eine
              normale Frage, und sie liest ihn bei jeder Rückfrage erneut. Ein
              Prüfungsdurchlauf über einen Jahresabschluss ist damit kein
              Prompt, sondern ein Kostenposten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das ist der Grund, warum ausgerechnet die anspruchsvollen Fälle,
              also die, für die man KI überhaupt einsetzen will, die teuren
              sind. Belegerfassung ist billig und spart viel. Die
              Vertragsanalyse ist teuer und spart auch viel. Beide auf
              demselben Konto ohne Trennung, und die Rechnung wird unlesbar.
            </Typo.Paragraph>

            <Typo.H3>
              Drittens: Automatisierung, die nachts läuft und niemandem gehört
            </Typo.H3>
            <Typo.Paragraph>
              Der dritte Treiber ist der unauffälligste. Ein Fristenmonitoring,
              das jede Nacht alle offenen Mandate durchgeht. Eine Vorerfassung,
              die eingehende Belege sofort verarbeitet. Ein Postkorb-Router,
              der Mandantenmails vorsortiert und Entwürfe schreibt. Jeder
              dieser Läufe ist einzeln günstig. Dreißig Nächte in Folge auf
              allen Mandaten sind es nicht mehr, und es fällt niemandem auf,
              weil kein Mensch davorsitzt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Automatisierung ohne Budgetdeckel ist die eigentliche
              Kostenfalle. Rechenzeit ist nie gratis, sie ist nur unsichtbar.
            </Typo.Paragraph>

            <Typo.H3>Viertens: Niemand sieht die ganze Rechnung</Typo.H3>
            <Typo.Paragraph>
              In der Praxis verteilt sich der Verbrauch auf drei Stellen: das
              KI-Modul der Fachsoftware, ein Zusatz-Abo, das die IT bestellt
              hat, und die Kreditkarte eines Partners, der schneller sein
              wollte. Keiner der drei Posten ist auffällig, die Summe schon.
              Wer wissen will, was KI die Kanzlei kostet, muss diese drei
              Zahlen einmal nebeneinanderlegen. Das ist Arbeit für einen
              Nachmittag und der einzige Weg zu einer belastbaren Aussage.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/werden-steuerberater-durch-ki-ersetzt/01-kostentreiber.png"
              alt="Vier Kostentreiber einer KI-Rechnung in der Kanzlei: Lizenz gegen Verbrauch, lange Dokumente, nächtliche Automatisierung und verstreute Abrechnung"
              width={1200}
              height={675}
            />
          </div>

          <Separator />

          <div id="gegenrechnung">
            <Typo.H2>
              Die Gegenrechnung: was 1,5 Senior-Berufsträger kosten
            </Typo.H2>
            <Typo.Paragraph>
              Jetzt die andere Seite. Ein Senior-Steuerberater verdient laut
              aktuellen Gehaltserhebungen rund 8.750 Euro brutto im Monat. Mit
              mehr als zehn Jahren Berufserfahrung liegt das Jahresgehalt bei
              etwa 89.000 Euro, mit Personalverantwortung bei rund 98.000 Euro.
              Auf Manager-Ebene sind 80.000 bis 110.000 Euro üblich, als Senior
              Manager oder Prokurist sind bis zu 140.000 Euro erreichbar.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Auf diese Bruttowerte kommen Arbeitgeberanteile und Umlagen.
              Kaufmännisch rechnet man üblicherweise mit dem Faktor 1,25 bis
              1,3, was rund 11.000 Euro Vollkosten pro Kopf und Monat ergibt.
              Anderthalb Senior-Berufsträger kosten die Kanzlei damit etwa
              16.500 Euro im Monat, ohne Recruiting, ohne Einarbeitung, ohne
              das Risiko, dass die Person nach 18 Monaten wechselt.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Position</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Pro Monat</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Anmerkung</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    Senior-Berufsträger, brutto
                  </DataTable.Cell>
                  <DataTable.Cell>8.750 €</DataTable.Cell>
                  <DataTable.Cell>
                    Durchschnitt aktueller Gehaltserhebungen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Vollkosten pro Kopf (Faktor 1,25 bis 1,3)
                  </DataTable.Cell>
                  <DataTable.Cell>rund 11.000 €</DataTable.Cell>
                  <DataTable.Cell>
                    Arbeitgeberanteile und Umlagen, kaufmännische Näherung
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>1,5 Senior-Berufsträger</DataTable.Cell>
                  <DataTable.Cell>rund 16.500 €</DataTable.Cell>
                  <DataTable.Cell>
                    ohne Recruiting, Einarbeitung, Fluktuationsrisiko
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>KI-Rechnung aus dem Beispiel</DataTable.Cell>
                  <DataTable.Cell>2.500 €</DataTable.Cell>
                  <DataTable.Cell>
                    rund 15 Prozent dieser Position
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Und jetzt kommt der Teil, der die Rechnung im Steuersegment noch
              deutlicher macht als in der IT: Die Alternative existiert oft gar
              nicht.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Laut ifo-Fachkräftebarometer vom August 2025 sind{" "}
                <strong>72,7 Prozent</strong> der Rechts- und
                Steuerberatungskanzleien aktiv vom Fachkräftemangel betroffen.
                Das ist der höchste Wert aller Branchen in Deutschland, der
                Branchendurchschnitt liegt bei 28,1 Prozent.
              </Typo.ListItem>
              <Typo.ListItem>
                Die Berufsstatistik STAX 2024 der Bundessteuerberaterkammer
                zeigt: Einzelkanzleien konnten in zwei Jahren nur rund{" "}
                <strong>40 Prozent</strong> ihrer offenen Stellen besetzen,
                Berufsausübungsgesellschaften rund 70 Prozent. Häufigster Grund
                sind fehlende oder ungeeignete Bewerbungen.
              </Typo.ListItem>
              <Typo.ListItem>
                Der awicontax Zukunftskompass 2026 spricht von über{" "}
                <strong>10.000 unbesetzten Stellen</strong> in der deutschen
                Steuerberatung.
              </Typo.ListItem>
              <Typo.ListItem>
                Zum 1. Januar 2026 zählte die BStBK{" "}
                <strong>17.081 Ausbildungsverhältnisse</strong> zum
                Steuerfachangestellten, 220 weniger als im Vorjahr. 75 Prozent
                der Kanzleien kämpfen mit dem Fachkräftemangel, aber nur 17
                Prozent bilden aus.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              In einem Markt mit dieser Besetzungsquote lautet die Entscheidung
              selten „KI oder eine zusätzliche Person". Sie lautet „KI oder die
              Stelle bleibt offen". Das verschiebt den Maßstab: Eine
              KI-Rechnung muss sich nicht gegen eine Neueinstellung rechnen,
              sondern gegen entgangene Mandate und gegen Überstunden von
              Leuten, die man nicht ersetzen kann.
            </Typo.Paragraph>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>Kernaussage:</strong> Nicht die Höhe der Rechnung
                entscheidet, sondern ihr Verhältnis zu den Vollkosten der Zeit,
                die sie freiräumt. 2.500 Euro sind teuer für ein Werkzeug und
                billig für anderthalb Berufsträger.
              </p>
            </div>
          </div>

          <Separator />

          <div id="unterschaetzt">
            <Typo.H2>
              Warum Kanzleiinhaber die Kosten trotzdem falsch einschätzen
            </Typo.H2>

            <Typo.H3>Das 30-Euro-Trugbild</Typo.H3>
            <Typo.Paragraph>
              Die Preise, die man kennt, sind Lizenzpreise: 20 bis 30 Euro pro
              Arbeitsplatz und Monat, dazu eine kostenfreie KI-Werkstatt.
              Daraus entsteht die Erwartung, dass KI eine Position in der
              Größenordnung der Bürosoftware ist. Zum Vergleich die andere
              Seite der Skala: Für unternehmensweite Verträge nennen
              Beschaffungsberichte aus 2026 Preise von 45 bis 75 US-Dollar pro
              Platz und Monat, und für normale, aktive Nutzung berichten
              Anbieter von 150 bis 250 Dollar pro Person und Monat, wenn
              verbrauchsabhängig abgerechnet wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwischen 30 Euro und 250 Dollar liegt der Faktor acht. Die
              Diskussion in der Partnerrunde verschiebt sich damit von
              „schaffen wir Lizenzen an" zu „wer darf wie viel verbrauchen",
              und das ist eine ganz andere Sitzung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Bundessteuerberaterkammer formuliert es in ihrem FAQ-Katalog
              vom Januar 2026 so nüchtern wie möglich: „Wieviel kostet der
              Einsatz von KI? Das lässt sich pauschal nicht beantworten." Das
              ist keine Ausflucht, sondern die korrekte Antwort auf eine falsch
              gestellte Frage. Der Preis hängt nicht am Werkzeug, sondern am
              Nutzungsprofil.
            </Typo.Paragraph>

            <Typo.H3>Das Qualitätsparadox</Typo.H3>
            <Typo.Paragraph>
              Die Zeitersparnisse sind real, aber sie sind ungleich verteilt:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Belegverarbeitung: bis zu <strong>70 Prozent</strong> Ersparnis
              </Typo.ListItem>
              <Typo.ListItem>
                repetitive Aufgaben wie Belegerfassung,
                Buchungskategorisierung und Standard-Steuererklärungen:{" "}
                <strong>50 bis 60 Prozent</strong>
              </Typo.ListItem>
              <Typo.ListItem>
                komplexere Recherche: nur <strong>20 bis 30 Prozent</strong>
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Das Muster ist eindeutig: Je näher die Aufgabe an der
              eigentlichen Beratung liegt, desto kleiner der Hebel. Und je
              näher sie an der Beratung liegt, desto höher die Prüfpflicht.
              Jede KI-Ausgabe, die ins Mandat geht, muss ein Berufsträger
              verantworten, und diese Prüfzeit ist die neue Engstelle. Wer den
              Durchsatz vorne verdreifacht, ohne die Prüfung mitzuskalieren,
              hat keine Kapazität gewonnen, sondern eine Warteschlange
              verschoben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Aus dem IT-Umfeld gibt es dazu einen unangenehmen Befund: Eine
              randomisierte Studie von METR aus 2025 fand bei erfahrenen
              Entwicklern 19 Prozent <strong>längere</strong>{" "}
              Bearbeitungszeiten mit KI-Unterstützung, obwohl die Teilnehmer
              sich schneller fühlten. Gefühlte Geschwindigkeit ist kein ROI.
              Ein weiterer Datenpunkt aus der Branche passt dazu: 71 Prozent
              der Kanzleien halten KI für eine Zukunftstechnologie, aber nur 18
              Prozent nutzen sie aktiv. Die Lücke zwischen Überzeugung und
              Praxis wird nicht durch bessere Werkzeuge geschlossen, sondern
              durch Prozesse. Welche{" "}
              <Link
                href="/blog/digitalisierung-steuerberatung"
                className="text-primary-600 hover:underline"
              >
                Prozessvoraussetzungen
              </Link>{" "}
              dafür stehen müssen, ist ein eigenes Thema.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/werden-steuerberater-durch-ki-ersetzt/02-zeitersparnis.png"
              alt="Balkendiagramm der Zeitersparnis nach Aufgabentyp: Belegverarbeitung 70 Prozent, Routineaufgaben 50 bis 60 Prozent, Recherche 20 bis 30 Prozent"
              width={1200}
              height={675}
            />
          </div>

          <Separator />

          <div id="berufsrecht">
            <Typo.H2>
              Der Punkt, an dem es aufhört, ein Kostenthema zu sein
            </Typo.H2>
            <Typo.Paragraph>
              Das private Konto aus dem Einstiegsbeispiel ist in der IT ein
              Governance-Problem. Im Steuersegment ist es ein
              Berufsrechtsproblem, und das ist eine andere Kategorie.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Verschwiegenheitspflicht nach § 57 Abs. 1 StBerG und § 5
              BOStB gilt technologieneutral, also auch beim Einsatz von KI, und
              sie ist über § 203 StGB strafbewehrt. Der FAQ-Katalog der
              Bundessteuerberaterkammer, veröffentlicht im Februar 2026,
              buchstabiert die Konsequenzen aus:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Ohne Einwilligung des Mandanten</strong> dürfen
                grundsätzlich keine Daten eingegeben und keine Dokumente
                hochgeladen werden, die Rückschlüsse auf Mandanten oder
                mandantenbezogene Daten zulassen.
              </Typo.ListItem>
              <Typo.ListItem>
                Der KI-Anbieter ist <strong>sorgfältig auszuwählen</strong> (§
                62a Abs. 2 Satz 1 StBerG) und muss, bevor er Kenntnis von
                solchen Daten erlangt,{" "}
                <strong>vertraglich zur Geheimhaltung verpflichtet</strong>{" "}
                werden (§ 62a Abs. 3 StBerG).
              </Typo.ListItem>
              <Typo.ListItem>
                Erbringt der Anbieter seine Leistung im Ausland, ist ein dem
                deutschen beziehungsweise europäischen Niveau{" "}
                <strong>vergleichbares Schutzniveau</strong> sicherzustellen (§
                62a Abs. 4 StBerG).
              </Typo.ListItem>
              <Typo.ListItem>
                Dient die KI unmittelbar einem konkreten Einzelmandat und ist
                nicht allgemeines Arbeitsmittel der Kanzlei, ist zusätzlich
                eine <strong>ausdrückliche Einwilligung</strong> nötig (§ 62a
                Abs. 5 StBerG). Ob diese Ausnahmeregelung auf die Nutzung
                allgemeiner Chat-Dienste passt, ist laut BStBK „nicht
                zweifelsfrei zu beantworten".
              </Typo.ListItem>
              <Typo.ListItem>
                Liegt keine Einwilligung vor, sind Daten zu anonymisieren oder
                zu pseudonymisieren, und zwar so gründlich, dass auf keiner
                Seite mehr Name, Adresse oder Steuernummer erkennbar ist.
              </Typo.ListItem>
              <Typo.ListItem>
                Datenschutzrechtlich kommt ein{" "}
                <strong>Auftragsverarbeitungsvertrag</strong> dazu.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Dazu der EU AI Act, in Kraft seit dem 1. August 2024: Wer KI in
              der Kanzlei eigenverantwortlich einsetzt, ist in der Regel{" "}
              <strong>Betreiber</strong> im Sinne von Art. 3 Nr. 4 KI-VO und
              schuldet die <strong>KI-Kompetenz</strong> seiner Mitarbeitenden
              nach Art. 4 KI-VO. Die Fortbildungspflicht nach § 57 Abs. 2a
              StBerG umfasst ausdrücklich den kompetenten Umgang mit KI.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Praktisch heißt das: Ein privates Konto mit Mandantendaten ist
              kein Kostenausrutscher, den man im nächsten Quartal korrigiert.
              Es ist ein Berufsrechtsverstoß, und der Schaden hat mit der
              Rechnung nichts zu tun. Wenn Mandantendaten ins Spiel kommen,
              führt der Weg über eine Verarbeitung, die § 203 StGB standhält.
              Wie das konkret aussieht, haben wir am Beispiel einer{" "}
              <Link
                href="/blog/claude-cowork-managed-private"
                className="text-primary-600 hover:underline"
              >
                abgeschirmten Verarbeitung für Kanzleien
              </Link>{" "}
              beschrieben, und die Varianten mit eigener Infrastruktur stehen
              unter{" "}
              <Link
                href="/branchen/steuerberater/private-ai"
                className="text-primary-600 hover:underline"
              >
                Private AI für Steuerkanzleien
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zur Beruhigung gehört auch: Eine Pflicht zur KI-Nutzung gibt es
              nicht. Die BStBK schreibt selbst, die Auseinandersetzung mit dem
              Thema sei „weniger aus juristischer Pflicht, sondern vielmehr aus
              betriebswirtschaftlicher und strategischer Perspektive geboten".
              Das ist genau die Perspektive dieses Artikels.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="steuerung">
            <Typo.H2>
              Vier Schritte, die aus einer Rechnung ein Budget machen
            </Typo.H2>

            <Typo.H3>
              Schritt 1: Zwei Wochen Baseline, bevor irgendetwas ausgerollt
              wird
            </Typo.H3>
            <Typo.Paragraph>
              Fünf bis fünfzehn Personen, klar abgegrenzte Fälle, zwei Wochen.
              Erfasst werden vier Größen: aktive Tage pro Person, Art und
              Umfang der bearbeiteten Dokumente, Prüfzeit pro KI-Ergebnis und
              die tatsächlichen Kosten aus allen drei Abrechnungsstellen. Das
              Ergebnis ist eine kanzleieigene Zahl statt eines
              Branchenrichtwerts.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein guter Einstieg sind Fälle ohne Mandantendaten, etwa interne
              Textentwürfe, Arbeitsanweisungen oder Rechercheaufbereitungen.
              Die BStBK empfiehlt genau diesen niedrigschwelligen Start,
              inklusive benannter Ansprechpartner im Team, die Erfahrungen
              sammeln und Rückfragen bündeln.
            </Typo.Paragraph>

            <Typo.H3>Schritt 2: Ein KI-Verzeichnis statt Wildwuchs</Typo.H3>
            <Typo.Paragraph>
              Was im IT-Umfeld „Platform-Regeln" heißt, gibt es im
              Steuersegment bereits als Kammer-Vorlage. Das KI-Verzeichnis ist
              eine interne Übersicht aller KI-Einsätze der Kanzlei. Kein
              gesetzlich definierter Begriff, sondern ein praktisches Werkzeug,
              und laut BStBK reicht dafür „ganz pragmatisch, oft eine schlanke
              Tabelle" mit fünf Spalten:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Spalte</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Inhalt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>KI-Tool / Anbieter</DataTable.Cell>
                  <DataTable.Cell>welches System, von wem</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Wofür wird es genutzt</DataTable.Cell>
                  <DataTable.Cell>Zweck und Use Case</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Datenart</DataTable.Cell>
                  <DataTable.Cell>
                    keine / intern / personenbezogen / Mandantendaten
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Doku-Stufe</DataTable.Cell>
                  <DataTable.Cell>leicht / mittel / hoch</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Zuständig</DataTable.Cell>
                  <DataTable.Cell>
                    eine namentlich benannte Person
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Die Doku-Stufe richtet sich nach dem Risiko:{" "}
              <strong>leicht</strong> bei allgemeiner Nutzung ohne Fach- und
              Mandatsdaten, <strong>mittel</strong> bei fachlicher Nutzung ohne
              Mandatsdaten, <strong>hoch</strong> bei Prozessintegration oder
              Mandatsdaten. Der eigentliche Gewinn steht als Nebensatz im
              Katalog: Neue Werkzeuge werden damit „nicht wild eingeführt,
              sondern gehen durch einen festen Check".
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu gehört die zweite Regel aus demselben Kapitel, die das
              Kostenchaos an der Wurzel packt: „Für Mitarbeitende sollten keine
              zusätzlichen Kosten entstehen. Die Nutzung erfolgt im Rahmen
              einer zentralen Bereitstellung und Lizenzierung durch die
              Kanzlei." Übersetzt: Kein privates Konto, keine
              Partner-Kreditkarte, keine Schatten-Abos.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/werden-steuerberater-durch-ki-ersetzt/03-ki-verzeichnis.png"
              alt="Ablaufdiagramm: neues KI-Tool, Prüfung auf Mandantendaten, Vertrag nach Paragraph 62a StBerG, Doku-Stufe und Eintrag im KI-Verzeichnis"
              width={1200}
              height={675}
            />

            <Typo.H3>
              Schritt 3: Bewusster Werkzeug-Mix statt einer
              Grundsatzentscheidung
            </Typo.H3>
            <Typo.Paragraph>
              Es gibt nicht die eine beste KI für Steuerberater, es gibt drei
              Wege mit unterschiedlichen Profilen:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Fachsoftware-nah:</strong> KI-Funktionen innerhalb der
                bestehenden DATEV-Welt. Geringste Reibung, kürzester Weg zur
                Freigabe, engster Funktionsrahmen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Allgemeine Cloud-Dienste mit Kanzleivertrag:</strong>{" "}
                größte Bandbreite, gut für Texte, Recherche und Analysen.
                Erfordern die volle § 62a-Kette und eine klare Regel, was
                hineindarf.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Abgeschirmte oder eigene Verarbeitung:</strong>{" "}
                höchster Einrichtungsaufwand, aber der einzige Weg, auf dem
                Mandatsdaten ohne Einzelfall-Einwilligung sauber verarbeitet
                werden können.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Die meisten Kanzleien brauchen zwei davon gleichzeitig. Wichtig
              ist nur, dass die Zuordnung „welcher Fall auf welchem Weg"
              schriftlich existiert und nicht im Kopf des Kollegen, der es
              zuerst ausprobiert hat. Welche Aufgabenfelder sich überhaupt
              lohnen, haben wir im Überblick zu{" "}
              <Link
                href="/blog/ki-steuerberater"
                className="text-primary-600 hover:underline"
              >
                KI für Steuerberater
              </Link>{" "}
              durchdekliniert.
            </Typo.Paragraph>

            <Typo.H3>
              Schritt 4: ROI an Ergebnissen messen, nicht an Nutzung
            </Typo.H3>
            <Typo.Paragraph>
              Die falschen Kennzahlen sind Prompts pro Woche, aktive Nutzer und
              Lizenzquote. Die richtigen sind die drei, die auch die BStBK
              nennt, ergänzt um eine vierte aus der Praxis:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>Zeit pro Vorgang und pro Woche im Team</Typo.ListItem>
              <Typo.ListItem>
                Fehlerquote, etwa bei Datenerfassung und Fristenkontrolle
              </Typo.ListItem>
              <Typo.ListItem>
                Mandantenzufriedenheit, gemessen an Reaktionszeiten
              </Typo.ListItem>
              <Typo.ListItem>
                Nacharbeit in der Prüfung, also wie oft ein KI-Ergebnis
                zurückgeht
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Punkt vier ist der ehrlichste. Steigt die Nacharbeit schneller
              als der Durchsatz, ist der Prozess falsch geschnitten, nicht das
              Werkzeug zu schwach.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="muster">
            <Typo.H2>Was sich in der Praxis lohnt und was nicht</Typo.H2>

            <Typo.H3>Lohnt sich</Typo.H3>
            <Typo.Paragraph>
              Der Hebel entsteht dort, wo Volumen auf klare Prüfkriterien
              trifft: Belegvorerfassung, Kontierungsvorschläge,
              Standardschreiben, Mandanteninformationen zu Gesetzesänderungen,
              Zusammenfassungen von Verwaltungsschreiben. Alles Fälle, in denen
              ein Berufsträger in Sekunden erkennt, ob das Ergebnis stimmt. Die
              freigewordene Senior-Zeit wandert in Gestaltungsberatung, und das
              ist der einzige Ort, an dem sie sich wirklich rechnet.
            </Typo.Paragraph>

            <Typo.H3>Geldverschwendung</Typo.H3>
            <Typo.Paragraph>
              Drei Werkzeuge parallel für dieselbe Aufgabe, weil jede Abteilung
              ihr eigenes gefunden hat. Nächtliche Automatisierungen, deren
              Ergebnisse niemand liest. Rechercheläufe über Fälle, die im
              Kommentar in zwei Minuten geklärt wären. Parallelität ohne
              Zuständigkeit ist kein Fortschritt, sondern teureres Chaos.
            </Typo.Paragraph>

            <Typo.H3>Gefährlich</Typo.H3>
            <Typo.Paragraph>
              Automatisierungen, die Mandantendaten in Werkzeuge ziehen, für
              die keine Verschwiegenheitsvereinbarung existiert. Uploads von
              Dokumenten, die auf Seite 14 doch noch eine Steuernummer
              enthalten. Ergebnisse, die ungeprüft ins Mandat gehen. Das sind
              keine Budgetfragen. Das sind Haftungs- und Berufsrechtsfragen,
              und sie kosten nicht 2.500 Euro.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit: Die Antwort auf die Titelfrage</Typo.H2>
            <Typo.Paragraph>
              Werden Steuerberater durch KI ersetzt? Nach dieser Rechnung:
              nein, aber die Begründung ist eine andere als die übliche. Nicht
              weil KI zu schwach wäre, sondern weil das, was sie ersetzt, gar
              nicht der Steuerberater ist. Sie ersetzt Vorarbeit,
              Textproduktion und Sortieren, also genau die Tätigkeiten, für die
              Kanzleien seit Jahren keine Leute mehr finden. Was sie nicht
              ersetzt, ist die Prüfung und die Verantwortung, und die sind
              berufsrechtlich beim Menschen verankert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine 2.500-Euro-Rechnung ist deshalb kein Skandal und kein
              Erfolg. Sie ist eine Information. Ob sie gut oder schlecht war,
              entscheidet sich an drei Zahlen: wie viele Berufsträgerstunden
              sie freigeräumt hat, wie viel Nacharbeit sie erzeugt hat und ob
              die Daten, die sie verarbeitet hat, dort sein durften.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Konkret für die nächsten zwei Wochen:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Alle KI-Ausgaben der Kanzlei einmal zusammenrechnen, über alle
                drei Abrechnungsstellen hinweg. Das ist die Zahl, über die man
                reden kann.
              </Typo.ListItem>
              <Typo.ListItem>
                Ein KI-Verzeichnis anlegen, auch wenn es zunächst drei Zeilen
                hat. Fünf Spalten, eine verantwortliche Person pro Zeile.
              </Typo.ListItem>
              <Typo.ListItem>
                Einen Pilotfall ohne Mandantendaten definieren, mit einem
                Budgetdeckel und einem Termin, an dem die vier Kennzahlen
                ausgewertet werden.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Nicht das Werkzeug ist teuer. Ungesteuerte Nutzung ist teuer, und
              Steuerung ist die Investition, die sich rechnet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn Sie diese Rechnung für Ihre Kanzlei aufmachen wollen, ohne
              vorher ein Jahr zu experimentieren: Wir bauen KI-Prozesse für
              Steuerkanzleien so, dass Berufsrecht, Kostenkontrolle und
              Prüfpflicht von Anfang an zusammenpassen.{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprechen Sie uns an
              </Link>
              , oder sehen Sie sich vorher an, wie wir{" "}
              <Link
                href="/branchen/steuerberater"
                className="text-primary-600 hover:underline"
              >
                Steuerkanzleien begleiten
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Wird KI den Steuerberater ersetzen?",
                  answer:
                    "Nein, aber sie verschiebt den Tätigkeitsschwerpunkt. Ersetzt werden Vorarbeiten mit hohem Volumen und klaren Prüfkriterien. Prüfung, Gestaltungsberatung und Verantwortung bleiben beim Berufsträger, auch rechtlich: Die Bundessteuerberaterkammer ordnet KI ausdrücklich als Werkzeug und Sparringspartner ein, die Entscheidung und die Verantwortung für das Ergebnis bleiben beim Menschen.",
                },
                {
                  question:
                    "Was kostet KI in einer Steuerkanzlei realistisch?",
                  answer:
                    "Die ehrliche Antwort der Bundessteuerberaterkammer lautet, dass sich das pauschal nicht beantworten lässt. Die Spanne ist groß: Lizenzen für Menschen liegen bei 20 bis 30 Euro pro Platz und Monat, unternehmensweite Verträge bei 45 bis 75 US-Dollar pro Platz, und verbrauchsabhängige Nutzung kann bei intensiver Automatisierung dreistellig pro Person werden. Die einzige belastbare Zahl ist eine eigene Baseline über zwei Wochen.",
                },
                {
                  question: "Was ist die beste KI für Steuerberater?",
                  answer:
                    "Es gibt keine, es gibt drei Wege: Funktionen innerhalb der Fachsoftware, allgemeine Cloud-Dienste mit Kanzleivertrag und abgeschirmte oder eigene Verarbeitung. Die Auswahl folgt nicht dem Funktionsumfang, sondern der Datenart. Sobald Mandantendaten im Spiel sind, entscheidet § 62a StBerG mit, nicht der Funktionsvergleich.",
                },
                {
                  question:
                    "Darf ich ChatGPT oder ein anderes Chat-Werkzeug für Mandantenarbeit nutzen?",
                  answer:
                    "Nur unter Bedingungen. Ohne Einwilligung des Mandanten dürfen keine Daten eingegeben werden, die Rückschlüsse auf ihn zulassen. Ist der Anbieter nicht vertraglich zur Verschwiegenheit verpflichtet, bleibt nur konsequente Anonymisierung, und zwar auf jeder Seite jedes Dokuments. Private Konten für Mandantenarbeit sind in keinem Fall der richtige Weg.",
                },
                {
                  question:
                    "Wann lohnt sich der Einstieg, und wie klein darf er sein?",
                  answer:
                    "Sofort und klein. Die BStBK empfiehlt abgegrenzte Pilotfälle ohne Mandantendaten, benannte Ansprechpartner im Team und einfache erste Leitlinien: was in die KI darf, was nicht, wer prüft und wo dokumentiert wird. Eine gesetzliche Pflicht zur KI-Nutzung besteht nicht. Der Druck kommt aus der Wirtschaftlichkeit, nicht aus dem Berufsrecht.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu KI und dem Beruf des Steuerberaters
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="rechnung">
            Was auf der Rechnung steht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="gegenrechnung">
            Gegenrechnung Personalkosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="unterschaetzt">
            Warum unterschätzt wird
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="berufsrecht">
            Berufsrecht statt Budget
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="steuerung">
            Vier Schritte zur Steuerung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="muster">
            Muster aus der Praxis
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
