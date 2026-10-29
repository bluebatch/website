import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import {
  BlogImage,
  CodeBlock,
  Separator,
  BlogLayout,
  BlogHero,
} from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ki-kontierung-steuerkanzlei",
  author: "Max Hänsel",
  date: "2026-10-29",
  image: "/blog/ki-kontierung-steuerkanzlei/hero.png",
  tags: ["steuerberater", "ki", "datev", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI-Kontierung in der Steuerkanzlei: Wenn die KI bucht, wer prüft? | Bluebatch",
  description:
    "KI-Kontierung ist 2026 Kanzleialltag: allein DATEV erzeugt 12 Millionen Buchungsvorschläge im Monat. Was sich damit verschiebt, welche Kontrollpunkte bleiben und wie Private Claude zur Prüfschicht über der Buchhaltung wird.",
  openGraph: {
    title: "KI-Kontierung in der Steuerkanzlei: Wenn die KI bucht, wer prüft?",
    description:
      "Erkennen ist nicht Verstehen: Was KI-Kontierung anders macht, welche fünf Kontrollpunkte bleiben, was GoBD und Berufsrecht verlangen und wie Private Claude den Buchungsstapel gegen das Mandantenwissen prüft.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ki-kontierung-steuerkanzlei/hero.png",
        width: 1200,
        height: 630,
        alt: "Belegstapel auf einem Kanzleischreibtisch, ein Blatt mit Prüfmarkierung herausgezogen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ki-kontierung-steuerkanzlei",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI-Kontierung in der Steuerkanzlei: Wenn die KI bucht, wer prüft?
        </BlogHero.Headline>

        <GeoSummary>
          KI-Kontierung ist 2026 Kanzleialltag: Der DATEV-Automatisierungsservice
          Rechnungen erzeugt 12 Millionen Buchungsvorschläge im Monat, die Hälfte
          der Kanzleien nutzt KI regelmäßig. Der Beitrag erklärt, was
          KI-Kontierung von Belegerkennung unterscheidet, welche fünf
          Kontrollpunkte bleiben, was GoBD und Berufsrecht verlangen und wie
          Private Claude als Prüfschicht den Buchungsstapel gegen das
          Mandantenwissen prüft.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-29">29. Oktober 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ki-kontierung-steuerkanzlei/hero.png"
          alt="Belegstapel auf einem Kanzleischreibtisch, ein Blatt mit Prüfmarkierung herausgezogen"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Zwölf Millionen Buchungsvorschläge im Monat. So viele erzeugt
              allein der Automatisierungsservice Rechnungen von DATEV laut
              Pressemitteilung vom Juni 2026, eingesetzt in über 9.000 Kanzleien
              für rund 150.000 Buchführungen. Der Schwesterdienst für
              Bankumsätze kommt auf weitere zehn Millionen. Dazu kommen
              spezialisierte Kontierungstools, Belegportale mit eigener KI und
              die Vorkontierung in den Buchhaltungsprogrammen der Mandanten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die DATEV-Digitalisierungsumfrage vom Frühjahr 2026 zeigt
              denselben Sprung von der anderen Seite: Die Hälfte der befragten
              Kanzleien nutzt KI inzwischen regelmäßig, ein Jahr zuvor war es
              ein knappes Drittel. Die Frage ist also nicht mehr, ob die KI
              kontiert. Sie lautet, wer die Buchungen eigentlich noch sieht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag ordnet, was KI-Kontierung von der klassischen
              Belegerkennung unterscheidet, welche Kontrollpunkte eine Kanzlei
              neu aufsetzen muss, was GoBD und Berufsrecht dazu sagen und wie
              eine Prüfschicht mit Private Claude aussieht, die Mandantenwissen
              und Buchungsstapel zusammenbringt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="erkennen-vs-verstehen">
              Erkennen ist nicht Verstehen: was KI-Kontierung anders macht
            </Typo.H2>
            <Typo.Paragraph>
              Belegerkennung gibt es seit über zehn Jahren. OCR liest
              Rechnungsnummer, Datum und Betrag an festen Positionen, ein
              Regelwerk ordnet den Lieferanten einem Konto zu, weil er beim
              letzten Mal auf demselben Konto lag. Das funktioniert, solange
              sich weder Layout noch Lieferant ändern. Ein neuer Lieferant, ein
              umgestelltes Rechnungsformular oder eine Sammelrechnung mit
              gemischten Positionen, und der Vorschlag ist falsch oder bleibt
              aus.
            </Typo.Paragraph>
            <Typo.Paragraph>
              KI-Kontierung auf Basis von Sprachmodellen arbeitet anders. Sie
              liest den Inhalt der Rechnung, nicht ihre Position, und ordnet
              die einzelnen Posten dem Geschäftsvorfall zu. Dafür braucht sie
              Kontext: das Geschäftsmodell des Mandanten, seinen Kontenrahmen,
              seine Besonderheiten.
            </Typo.Paragraph>

            <Typo.H3>Ein Beispiel aus dem Kanzleialltag</Typo.H3>
            <Typo.Paragraph>
              Ein Schreinereibetrieb mit kleinem Onlineshop bekommt eine
              Rechnung über Verpackungsmaterial. Ist das Wareneinsatz für den
              Versandhandel oder Betriebsbedarf für die Werkstatt? Aus dem
              Beleg allein lässt sich das nicht ableiten. Erst das Wissen, dass
              dieser Mandant seit 2025 Möbelzubehör versendet, macht die
              Kontierung eindeutig. Genau dieses Wissen steckt heute im Kopf
              der Sachbearbeiterin, nicht im System.
            </Typo.Paragraph>

            <Typo.H3>Wo die Trefferquote einbricht</Typo.H3>
            <Typo.Paragraph>
              Bei Standardbelegen wie Tankquittungen, Bürobedarf oder
              Bewirtung liegen die Vorschläge nach Branchenschätzungen in über
              90 Prozent der Fälle richtig. Bei Sonderfällen sinkt die Quote
              auf 50 bis 70 Prozent. Typische Stolpersteine:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Reverse-Charge-Rechnungen aus dem EU-Ausland ohne klaren
                Hinweis auf § 13b UStG
              </Typo.ListItem>
              <Typo.ListItem>
                Skontoabzüge, die nur im Verwendungszweck der Überweisung
                stehen
              </Typo.ListItem>
              <Typo.ListItem>
                Mietzahlungen mit Nebenkostenanteil, die auf zwei Konten
                gehören
              </Typo.ListItem>
              <Typo.ListItem>
                Anschaffungen an der Grenze zwischen Aufwand und
                Anlagevermögen
              </Typo.ListItem>
              <Typo.ListItem>
                Belege mit mehreren Steuersätzen auf einer Rechnung
              </Typo.ListItem>
            </Typo.List>

            <BlogImage
              src="/blog/ki-kontierung-steuerkanzlei/01-erkennen-vs-verstehen.png"
              alt="Gegenüberstellung: Belegerkennung liest feste Feldpositionen, KI-Kontierung versteht den Inhalt und ordnet Konto, Steuer und Kostenstelle mit Mandantenkontext zu"
              width={1200}
              height={675}
            />

            <Typo.H3>Nicht jeder Beleg braucht KI</Typo.H3>
            <Typo.Paragraph>
              Der Nutzen hängt stark von der Belegart ab. Wer alles durch die
              KI schickt, bezahlt Rechenleistung für Vorgänge, die ein
              Vorsystem längst entschieden hat.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Belegart</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Datenlage</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was sinnvoll ist</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Bankumsätze</DataTable.Cell>
                  <DataTable.Cell>strukturiert über Schnittstelle</DataTable.Cell>
                  <DataTable.Cell>
                    Regeln und Lernbuchungen reichen meist aus
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Ausgangsrechnungen</DataTable.Cell>
                  <DataTable.Cell>
                    im Fakturasystem des Mandanten erzeugt
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Kontierung dort festlegen, nicht erneut auslesen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Eingangsrechnungen</DataTable.Cell>
                  <DataTable.Cell>
                    heterogen, viele Lieferanten, Layouts, Positionen
                  </DataTable.Cell>
                  <DataTable.Cell>größter Hebel für KI-Kontierung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Kasse, Reisekosten</DataTable.Cell>
                  <DataTable.Cell>eigene Systeme mit Export</DataTable.Cell>
                  <DataTable.Cell>Schnittstelle vor KI</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="buchungen-die-niemand-sieht">
              Die neue Gefahr: Buchungen, die niemand mehr sieht
            </Typo.H2>
            <Typo.Paragraph>
              Als DATEV den Automatisierungsservice 2021 startete, musste jede
              KI-Buchung von einem Kanzleimitarbeiter bestätigt werden. Ein
              Jahr später liefen laut IWW bereits acht Prozent der Buchungen
              komplett ohne Bestätigung durch, heute kennzeichnen Symbole nur
              noch die Vorschläge mit Kontrollbedarf. Die Richtung ist klar:
              Der Anteil der Belege, die ein Mensch nie zu Gesicht bekommt,
              wächst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Damit verschwindet etwas, das in keiner Prozessbeschreibung
              stand. Die Sachbearbeiterin, die früher jede Rechnung angefasst
              hat, bemerkte nebenbei den neuen Lieferanten, die ungewöhnlich
              hohe Anschaffung, den Beleg, der eher privat als betrieblich
              aussah. Dieser Beifang entfällt, wenn 80 Prozent der Belege ohne
              Sichtkontakt gebucht werden. In der DATEV-Umfrage 2025 teilten
              27 Prozent der Kanzleien die Sorge, dass Automatisierung
              Arbeitsergebnisse schwerer nachvollziehbar macht. Die Sorge ist
              berechtigt, aber lösbar.
            </Typo.Paragraph>

            <Typo.H3>Vom Beleg zur Abweichung</Typo.H3>
            <Typo.Paragraph>
              Das Vier-Augen-Prinzip verschwindet nicht, es wechselt den
              Gegenstand. Geprüft wird nicht mehr jeder Beleg, sondern jede
              Abweichung vom Erwartbaren. Dafür braucht die Kanzlei einen
              Kontrollkatalog je Mandant, der festlegt, was ein Mensch sehen
              muss, bevor der Monat abgeschlossen wird.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kontrollpunkt</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Warum er wichtig ist</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Rhythmus</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Neue Geschäftspartner</DataTable.Cell>
                  <DataTable.Cell>
                    Erste Buchung setzt das Muster für alle folgenden
                  </DataTable.Cell>
                  <DataTable.Cell>laufend</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Umsatzsteuer-Sonderfälle</DataTable.Cell>
                  <DataTable.Cell>
                    Reverse Charge, innergemeinschaftliche Erwerbe,
                    Kleinunternehmer-Wechsel
                  </DataTable.Cell>
                  <DataTable.Cell>laufend</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>
                    Durchlauf- und Verrechnungskonten
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Hier parken Buchungen, die niemand zuordnen konnte
                  </DataTable.Cell>
                  <DataTable.Cell>monatlich</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>
                    Konten außerhalb des Mandantenprofils
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Ein Bauunternehmer bucht selten Wertpapiere
                  </DataTable.Cell>
                  <DataTable.Cell>monatlich</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>
                    Beträge außerhalb der Bandbreite
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Ausreißer nach oben deuten auf Anlagevermögen oder Fehler
                  </DataTable.Cell>
                  <DataTable.Cell>monatlich</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <BlogImage
              src="/blog/ki-kontierung-steuerkanzlei/02-kontrollpunkte.png"
              alt="Fünf Kontrollpunkte für automatisierte Buchhaltung: neue Partner, Umsatzsteuer, Durchlaufkonten, fremde Konten, Ausreißer"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der Katalog ist kein Misstrauensvotum gegen die KI. Er ist die
              Übersetzung dessen, was erfahrene Buchhalter ohnehin im Kopf
              hatten, in eine Form, die sich delegieren, dokumentieren und
              später auch automatisiert prüfen lässt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="gobd-haftung">
              GoBD, Haftung und Berufsrecht: was bleibt, wenn die KI bucht
            </Typo.H2>
            <Typo.Paragraph>
              Die rechtliche Lage ist eindeutiger, als die Diskussion oft
              klingt. Drei Ebenen sind zu unterscheiden.
            </Typo.Paragraph>

            <Typo.H3>
              GoBD: automatisierte Buchungen gehören in die
              Verfahrensdokumentation
            </Typo.H3>
            <Typo.Paragraph>
              Die GoBD verlangen, dass automatische Buchungsvorgänge
              nachvollziehbar beschrieben sind. Die Verfahrensdokumentation
              besteht nach dem BMF-Schreiben aus allgemeiner Beschreibung,
              Anwenderdokumentation, technischer Systemdokumentation und
              Betriebsdokumentation. Für die KI-Kontierung heißt das konkret:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Welches Tool kontiert, mit welcher Version und welchen
                Datenquellen
              </Typo.ListItem>
              <Typo.ListItem>
                Ab welcher Konfidenz eine Buchung ohne Bestätigung durchläuft
              </Typo.ListItem>
              <Typo.ListItem>
                Wer welche Kontrollpunkte wann prüft und wie das protokolliert
                wird
              </Typo.ListItem>
              <Typo.ListItem>
                Wie Korrekturen zurückfließen und wie das Lernen des Systems
                nachvollziehbar bleibt
              </Typo.ListItem>
              <Typo.ListItem>
                Was passiert, wenn das Tool ausfällt oder der Anbieter wechselt
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Fehlt diese Beschreibung, liegt ein formaler Mangel vor. Der kann
              im schlechtesten Fall dazu führen, dass die Finanzverwaltung
              Besteuerungsgrundlagen schätzt. Wer die KI-Einführung als Anlass
              nimmt, die Verfahrensdokumentation ohnehin zu aktualisieren,
              erledigt zwei Dinge auf einmal.
            </Typo.Paragraph>

            <Typo.H3>Haftung: das Werkzeug trägt keine Verantwortung</Typo.H3>
            <Typo.Paragraph>
              Die fachliche Verantwortung für jede Buchung und jeden Abschluss
              bleibt beim Berufsträger. Die Bundessteuerberaterkammer hat das
              in ihren Hinweisen zur KI-Nutzung 2025 festgehalten:
              KI-Empfehlungen sind zu prüfen, und Mandanten sind über eine
              wesentliche Nutzung zu informieren. Ein Kontierungstool, das die
              Umsatzsteuer eines innergemeinschaftlichen Erwerbs falsch
              behandelt, erzeugt einen Fehler der Kanzlei, nicht des Anbieters.
            </Typo.Paragraph>

            <Typo.H3>Verschwiegenheit: nur in freigegebenen Umgebungen</Typo.H3>
            <Typo.Paragraph>
              Belege und Buchungsstapel sind Mandantendaten, geschützt durch §
              57 StBerG und § 203 StGB. Jedes KI-System, das sie verarbeitet,
              braucht eine saubere Vertragskette nach § 62a StBerG, ein
              Verzeichnis in der Kanzlei und eine Freigabe durch den
              Berufsträger. Wie diese Kette aussieht, beschreibt unser Beitrag
              zu{" "}
              <Link
                href="/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg"
                className="text-primary-600 hover:underline"
              >
                KI in der Steuerkanzlei nach § 62a StBerG
              </Link>
              . Dazu kommt seit Februar 2025 die Pflicht aus Artikel 4 des EU
              AI Act, dass Mitarbeitende, die KI einsetzen, dafür geschult
              sind.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vorsystem-vor-ki">
              Vorsystem vor KI: Datenqualität entscheidet
            </Typo.H2>
            <Typo.Paragraph>
              Die meisten enttäuschenden KI-Projekte in der Buchhaltung
              scheitern nicht am Modell. Sie scheitern daran, dass die KI über
              einen Prozess gelegt wird, der vorher schon unsauber war. Bevor
              ein Mandat auf KI-Kontierung umgestellt wird, gehören fünf Fragen
              ins Onboarding:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Welche Vorsysteme erzeugen die Daten: Faktura, Kasse, Shop,
                Zahlungsdienstleister?
              </Typo.ListItem>
              <Typo.ListItem>
                Welche Schnittstellen bestehen bereits und welche Daten kommen
                nur als PDF?
              </Typo.ListItem>
              <Typo.ListItem>
                Wie sind die Vorsysteme steuerlich konfiguriert, etwa bei
                Steuersätzen und Erlöskonten?
              </Typo.ListItem>
              <Typo.ListItem>Wer archiviert welche Belege und wo?</Typo.ListItem>
              <Typo.ListItem>
                Welche Belege kommen überhaupt noch unstrukturiert an?
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Die E-Rechnung spielt der KI in die Hände</Typo.H3>
            <Typo.Paragraph>
              Seit dem 1. Januar 2025 müssen Unternehmen E-Rechnungen empfangen
              können. Ab dem 1. Januar 2027 müssen Unternehmen mit mehr als
              800.000 Euro Vorjahresumsatz sie auch ausstellen, ab 2028 alle
              B2B-Unternehmen. Der Handwerksverband ZDH fordert zwar eine
              Verschiebung der ersten Stufe, beschlossen ist sie nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für die Kontierung bedeutet das: Ein wachsender Teil der
              Eingangsrechnungen kommt als strukturierte XRechnung oder
              ZUGFeRD-Datei. Positionen, Steuersätze und Partnerdaten liegen
              dann maschinenlesbar vor, das Auslesen entfällt. Die KI muss nur
              noch die inhaltliche Zuordnung treffen. Die Prüfung verschiebt
              sich damit endgültig vom Lesen zum Verstehen. Wie Kanzleien die
              E-Rechnung in ihre Abläufe einbauen, zeigt der Beitrag{" "}
              <Link
                href="/blog/e-rechnung-automatisieren"
                className="text-primary-600 hover:underline"
              >
                E-Rechnung automatisieren
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Mit welchem Mandat anfangen</Typo.H3>
            <Typo.Paragraph>
              Nicht mit dem schwierigsten. Der richtige Pilot ist ein Mandat
              mit klaren Abläufen, einem Fakturasystem, Bankschnittstelle und
              einem Ansprechpartner, der Rückfragen beantwortet. An ihm lässt
              sich messen, was die KI wirklich spart, und wo Regeln oder
              Kontext fehlen. Erst danach lohnt sich die Gruppe der ähnlichen
              Mandate, bei denen sich dieselben Regeln wiederverwenden lassen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="private-claude-pruefschicht">
              Private Claude als Prüfschicht über der Kontierung
            </Typo.H2>
            <Typo.Paragraph>
              Das Kontierungstool bucht. Was in den meisten Kanzleien fehlt,
              ist die Instanz, die den fertigen Buchungsstapel mit dem Wissen
              über den Mandanten liest und sagt, wo ein Mensch hinschauen muss.
              Genau diese Rolle übernimmt bei uns{" "}
              <Link
                href="/branchen/steuerberater/private-ai"
                className="text-primary-600 hover:underline"
              >
                Private Claude
              </Link>
              : Claude als Sprachmodell in einer eigenen, geschützten Umgebung
              mit EU-Hosting, Auftragsverarbeitungsvertrag und ohne Nutzung
              der Daten für das Training.
            </Typo.Paragraph>

            <Typo.H3>Wie der Prüflauf aussieht</Typo.H3>
            <Typo.Paragraph>
              Am Monatsende exportiert die Kanzlei den Buchungsstapel des
              Mandanten aus DATEV, wahlweise automatisch über eine
              Schnittstelle. Private Claude liest ihn zusammen mit zwei
              Dokumenten, die die Kanzlei einmal angelegt hat: dem Prüf-Skill
              mit dem Kontrollkatalog und dem Mandanten-Markdown mit den
              Besonderheiten dieses Mandats. Das Ergebnis ist ein Prüfbericht
              in Ampelform. Grün bedeutet, dass alle Kontrollpunkte unauffällig
              sind. Gelb listet Buchungen, die ein Sachbearbeiter ansehen
              sollte. Rot markiert Fälle, die vor dem Abschluss ein
              Berufsträger entscheiden muss, jeweils mit Begründung und
              Belegnummer.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Ausschnitt aus einem solchen Prüf-Skill sieht so aus:
            </Typo.Paragraph>

            <CodeBlock language="markdown">
              {`# Prüf-Skill: Monatsabschluss Finanzbuchhaltung

## Eingabe
- Buchungsstapel des Monats (DATEV-Export, CSV)
- Mandanten-Markdown mit Geschäftsmodell, Kontenrahmen, Besonderheiten

## Kontrollpunkte
1. Neue Geschäftspartner: Erstbuchung gegen Mandantenprofil prüfen
2. Umsatzsteuer: § 13b, innergemeinschaftliche Erwerbe, 0 %-Buchungen
3. Konten 1360 bis 1390: jede Buchung einzeln begründen lassen
4. Konten außerhalb der Liste "übliche Konten" im Mandanten-Markdown
5. Beträge über dem dreifachen Median des Kontos im Vorjahr

## Ausgabe
- Ampel je Kontrollpunkt, Fundstelle als Belegnummer
- Rot nur bei fehlender oder widersprüchlicher Begründung
- Keine eigenen Berechnungen, nur Abgleich und Begründung`}
            </CodeBlock>

            <Typo.Paragraph>
              Die Skills sind einfache Markdown-Dateien, kein Code. Was sie
              sind und wie sie entstehen, beschreibt die Seite{" "}
              <Link
                href="/branchen/steuerberater/claude-cowork/was-sind-ki-skills"
                className="text-primary-600 hover:underline"
              >
                Was sind KI-Skills
              </Link>
              . Beispiele für bereits gebaute{" "}
              <Link
                href="/branchen/steuerberater/claude-cowork/pruef-skills"
                className="text-primary-600 hover:underline"
              >
                Prüf-Skills
              </Link>{" "}
              zeigen, wie derselbe Mechanismus Verträge und Zeugnisse prüft.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-kontierung-steuerkanzlei/03-pruefschicht.png"
              alt="Ablauf der Prüfschicht: Belege, Kontierungstool, DATEV, Private Claude mit Prüf-Skill und Mandanten-Markdown, Ampel-Bericht an den Berufsträger"
              width={1200}
              height={675}
            />

            <Typo.H3>Was Claude dabei nicht tut</Typo.H3>
            <Typo.Paragraph>
              Claude kontiert nicht und rechnet nicht. Beides bleibt beim
              Kontierungstool und bei DATEV, die das deterministisch und
              nachvollziehbar erledigen. Claude liest, vergleicht mit dem
              hinterlegten Wissen und begründet. Das macht den Prüfbericht zu
              einem Dokument, das in die Verfahrensdokumentation passt: Wer hat
              wann was geprüft, mit welchem Katalog, mit welchem Ergebnis.
            </Typo.Paragraph>
            <Typo.Paragraph>Drei Dinge sind uns dabei wichtig:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Der Berufsträger entscheidet.</strong> Ein roter Punkt
                ist eine Vorlage, keine Buchung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Mandantenwissen wird explizit.</strong> Was bisher im
                Kopf der Sachbearbeiterin steckte, steht im Mandanten-Markdown
                und überlebt Urlaub, Krankheit und Kündigung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Die Daten bleiben in der Kanzlei-Umgebung.</strong>{" "}
                Kein Beleg geht in ein Consumer-Tool, die Vertragskette nach §
                62a StBerG ist geschlossen.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Abgerechnet wird nach verbrauchten Token, nicht pro Mandant oder
              Arbeitsplatz. Was ein Prüflauf kostet, lässt sich mit den{" "}
              <Link
                href="/managed-claude/preise"
                className="text-primary-600 hover:underline"
              >
                Tokenpreisen für Private Claude
              </Link>{" "}
              vorab durchrechnen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einstieg-90-tage">
              Einstieg: in 90 Tagen von der Erfassung zur Prüfung
            </Typo.H2>
            <Typo.Paragraph>
              Die Umstellung ist kein IT-Projekt, sondern eine Neuverteilung
              von Arbeit. Ein realistischer Fahrplan:
            </Typo.Paragraph>

            <Typo.H3>Tage 1 bis 30: ein Mandat, intern, mit Messung</Typo.H3>
            <Typo.Paragraph>
              Ein gut organisiertes Mandat auf KI-Kontierung umstellen, aber
              alle Vorschläge weiter von Hand bestätigen. Parallel die
              Ausgangslage messen: Minuten pro 100 Belege, Anteil korrigierter
              Vorschläge, Rückfragen an den Mandanten. Den Kontrollkatalog für
              dieses Mandat schreiben.
            </Typo.Paragraph>

            <Typo.H3>Tage 31 bis 60: Kontext nachschärfen, Doku ergänzen</Typo.H3>
            <Typo.Paragraph>
              Die Korrekturen der ersten Wochen auswerten. Meist fehlen keine
              Regeln, sondern Kontext: ein Hinweis zum Geschäftsmodell, eine
              Kontenliste, ein Sonderfall. Diesen Kontext ins
              Mandanten-Markdown schreiben, die Verfahrensdokumentation um das
              KI-Kapitel ergänzen und den Prüf-Skill für den Monatsabschluss
              aufsetzen.
            </Typo.Paragraph>

            <Typo.H3>Tage 61 bis 90: Gruppe bilden, Rollen klären</Typo.H3>
            <Typo.Paragraph>
              Die nächsten fünf bis zehn ähnlichen Mandate umstellen und die
              Regeln wiederverwenden. Festlegen, welche Buchungen ohne
              Bestätigung durchlaufen dürfen und welche Kontrollpunkte wer
              prüft. Im Team die Rollen anpassen: weniger Erfassung, mehr
              Prüfung, mehr Rückfragen an den Mandanten, die aus der Prüfung
              Beratung machen.
            </Typo.Paragraph>

            <Typo.H3>Warum das Personalthema den Takt vorgibt</Typo.H3>
            <Typo.Paragraph>
              Laut STAX-Erhebung der Bundessteuerberaterkammer konnten
              Einzelkanzleien zuletzt nur rund 40 Prozent ihrer offenen Stellen
              besetzen, Berufsausübungsgesellschaften knapp 70 Prozent. In der
              DATEV-Umfrage 2026 nennen 46 Prozent der Kanzleien den Ausgleich
              des Fachkräftemangels als Treiber der Digitalisierung. Die
              Buchhaltung wird dadurch nicht weniger wichtig. Ihr Wert liegt
              künftig in Datenqualität, Kontrolle und Einordnung, und das sind
              genau die Tätigkeiten, aus denen Beratung entsteht. Den größeren
              Rahmen dazu liefert unser Hub{" "}
              <Link
                href="/blog/ki-steuerberater"
                className="text-primary-600 hover:underline"
              >
                KI für Steuerberater
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <Typo.H2>Häufige Fragen zur KI-Kontierung</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Ersetzt KI-Kontierung die Buchhaltungsfachkraft?",
                  answer:
                    "Nein, sie verschiebt ihre Arbeit. Erfassung und Standardkontierung übernimmt das System, Prüfung, Datenqualität und die Einordnung ungewöhnlicher Vorfälle bleiben beim Menschen. Kanzleien mit Personalmangel gewinnen Kapazität, nicht Überflüssigkeit.",
                },
                {
                  question:
                    "Dürfen Buchungen ohne menschliche Bestätigung durchlaufen?",
                  answer:
                    "Ja, wenn die Verfahrensdokumentation beschreibt, welche Buchungen unter welchen Bedingungen automatisch gebucht werden, und wenn Kontrollpunkte sicherstellen, dass Abweichungen ein Mensch sieht. Die Verantwortung für jede Buchung bleibt beim Berufsträger.",
                },
                {
                  question:
                    "Reicht die KI im DATEV-Rechenzentrum, wozu noch Private Claude?",
                  answer:
                    "Die DATEV-Services kontieren. Sie prüfen nicht gegen das individuelle Mandantenwissen der Kanzlei und erzeugen keinen begründeten Prüfbericht. Private Claude ergänzt die Kontierung um genau diese Prüfschicht und bleibt dabei in einer Umgebung, die die Kanzlei kontrolliert.",
                },
                {
                  question:
                    "Was gehört zur Verfahrensdokumentation, wenn KI kontiert?",
                  answer:
                    "Das eingesetzte Tool mit Version und Datenquellen, die Schwellen für automatische Buchungen, der Kontrollkatalog mit Zuständigkeiten, die Protokollierung der Prüfungen und der Umgang mit Korrekturen und Ausfällen.",
                },
                {
                  question:
                    "Wie fange ich an, wenn die Belege noch als PDF per Mail kommen?",
                  answer:
                    "Mit dem Vorsystem. Bankschnittstelle und Belegportal zuerst, dann die Mandanten mit Fakturasystem anbinden, dann KI-Kontierung für den Rechnungseingang. Die E-Rechnungspflicht ab 2027 nimmt der Kanzlei einen Teil dieser Arbeit ab, wenn die Mandanten rechtzeitig umstellen.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zur KI-Kontierung
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="erkennen-vs-verstehen">
            Erkennen vs. Verstehen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="buchungen-die-niemand-sieht">
            Buchungen, die niemand sieht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="gobd-haftung">
            GoBD und Haftung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="vorsystem-vor-ki">
            Vorsystem vor KI
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="private-claude-pruefschicht">
            Private Claude als Prüfschicht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="einstieg-90-tage">
            Einstieg in 90 Tagen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">FAQ</BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
