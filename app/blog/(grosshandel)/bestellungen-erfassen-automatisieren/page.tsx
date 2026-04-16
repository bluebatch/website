import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Link from "next/link";
import ContactButton from "@/components/buttons/contact-button";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "bestellungen-erfassen-automatisieren",
  author: "Max Hänsel",
  date: "2026-03-30",
  image: "/blog/bestellungen-erfassen-automatisieren/hero.png",
  tags: ["grosshandel", "automatisierung", "ki"] as BlogTagId[],
  publish: true,
};

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/bestellerfassung-automatisieren",
  rewrites: [
    {
      source: "/bestellerfassung-automatisieren",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Bestellungen erfassen automatisieren: So verarbeitet KI eure Aufträge in Sekunden | Bluebatch",
  description:
    "Manuelle Bestellerfassung kostet Großhändler 30.000+ Euro im Monat. Erfahrt, wie KI-Workflows Aufträge in Sekunden statt Minuten verarbeiten — mit Praxisbeispielen und n8n-Anleitung.",
  openGraph: {
    title:
      "Bestellungen erfassen automatisieren: KI verarbeitet Aufträge in Sekunden",
    description:
      "Manuelle Bestellerfassung kostet Großhändler 30.000+ Euro im Monat. Erfahrt, wie KI-Workflows Aufträge in Sekunden statt Minuten verarbeiten.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/bestellungen-erfassen-automatisieren/hero.png",
        width: 1200,
        height: 630,
        alt: "Bestellungen erfassen automatisieren im Großhandel",
      },
    ],
  },
  alternates: {
    canonical: "/bestellerfassung-automatisieren",
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Bestellungen erfassen automatisieren im Großhandel
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>18 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-03-30">
            30. März 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/bestellungen-erfassen-automatisieren/hero.png"
          alt="Bestellungen erfassen automatisieren im Großhandel"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* 1. Das Problem: Bestellungen erfassen frisst Stunden */}
          <div>
            <Typo.H2 id="das-problem">
              Das Problem: Bestellungen erfassen frisst Stunden
            </Typo.H2>
            <Typo.Paragraph>
              Dienstag, 7:58 Uhr. Sandra öffnet Outlook. 47 neue E-Mails.
              Davon 31 Bestellungen. Dazu kommen sechs Faxe im Drucker und
              zwei Anrufer, die schon auf der Leitung warten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Willkommen im Innendienst eines mittelständischen Großhändlers.
            </Typo.Paragraph>

            <Typo.H3>Der Alltag: E-Mail, Fax, Telefon</Typo.H3>
            <Typo.Paragraph>
              Im Großhandel bestellen Kunden so, wie sie es seit 20 Jahren tun.
              Per E-Mail mit PDF-Anhang. Per Fax. Per Telefon. Manchmal alles am
              selben Tag, vom selben Kunden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Nur ein kleiner Teil der Kunden nutzt EDI oder einen Webshop. Die
              große Masse schickt Bestellungen in jedem Format, das man sich
              vorstellen kann. Handgeschriebene Faxe. Excel-Tabellen als Anhang.
              Freitext-E-Mails mit Sätzen wie: &quot;Bitte nochmal das Gleiche
              wie letzte Woche, aber doppelt so viel.&quot;
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Problem: Jede einzelne Bestellung muss ein Mensch lesen,
              verstehen und ins ERP tippen. Wie sich das mit KI-Workflows ändern
              lässt, zeigt auch unser Artikel zur{" "}
              <Link href="/digitalisierung-grosshandel" className="text-primary-600 hover:underline">Digitalisierung im Großhandel</Link>.
            </Typo.Paragraph>

            <Typo.H3>Schritt für Schritt: So läuft eine Bestellung ab</Typo.H3>
            <Typo.Paragraph>
              <strong>Schritt 1: E-Mail öffnen und lesen.</strong> Was hat der
              Kunde bestellt? Ist ein PDF angehängt oder steht alles im
              Freitext? Welches Format hat die Bestellung diesmal?
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 2: Kunden identifizieren.</strong> Kundennummer
              raussuchen. Stimmt die Lieferadresse? Gibt es Sonderkonditionen
              oder einen Rahmenvertrag?
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 3: Artikelnummern nachschlagen.</strong> Der Kunde
              schreibt &quot;M10x40 verzinkt, 500 Stk.&quot; Im ERP heißt das
              Ding anders. Also suchen. Gibt es den Artikel noch? Wurde der
              umgestellt?
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 4: Positionen ins ERP eintippen.</strong>{" "}
              Artikelnummer, Menge, Einheit. Position für Position. Bei einer
              Bestellung mit 15 Zeilen heißt das: 15 Mal suchen, 15 Mal tippen,
              15 Mal prüfen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 5: Verfügbarkeit checken.</strong> Ist alles auf
              Lager? Wenn nicht: Wann kommt Nachschub? Teillieferung möglich?
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 6: Auftrag prüfen und bestätigen.</strong> Nochmal
              alles durchgehen. Stimmen die Mengen? Die Preise? Die
              Lieferadresse? Dann abspeichern und Auftragsbestätigung
              rausschicken.
            </Typo.Paragraph>
            <Typo.Paragraph>Sechs Schritte. Pro Bestellung.</Typo.Paragraph>

            <BlogImage
              src="/blog/bestellungen-erfassen-automatisieren/manueller-prozess.png"
              alt="Manueller Bestellerfassungsprozess im Großhandel: 6 Schritte von E-Mail öffnen bis Auftrag bestätigen"
              width={1200}
              height={800}
            />

            <Typo.H3>10 bis 15 Minuten. Jedes Mal.</Typo.H3>
            <Typo.Paragraph>
              Im Durchschnitt braucht eine manuelle Bestellerfassung 10 bis 15
              Minuten. Bei einem einfachen Auftrag mit drei Positionen geht es
              schneller. Bei einer Bestellung mit 20 Zeilen und Sonderwünschen
              dauert es deutlich länger.
            </Typo.Paragraph>
            <Typo.Paragraph>
              12 Minuten pro Auftrag ist der Branchendurchschnitt. Das klingt
              erstmal nicht dramatisch. Bis man hochrechnet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei 200 Bestellungen am Tag sind das 2.400 Minuten. 40 Stunden.
              Jeden Tag. Fünf Vollzeitkräfte, die nichts anderes tun als
              Bestellungen abtippen.
            </Typo.Paragraph>

            <Typo.H3>1 bis 4 Prozent Fehlerquote</Typo.H3>
            <Typo.Paragraph>
              Menschen machen Fehler. Das ist normal. Bei manueller
              Dateneingabe liegt die Fehlerquote laut APQC-Benchmark bei 1 bis
              4 Prozent. Bei Telefonbestellungen sogar bei bis zu 10 Prozent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Klingt wenig? Bei 1.000 Bestellungen im Monat sind das 10 bis 40
              fehlerhafte Aufträge. Falsche Artikelnummer eingetippt. Menge
              verwechselt. Position übersehen. Falscher Kunde zugeordnet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Jeder Fehler kostet im Schnitt 75 USD an Korrekturaufwand. Wenn es
              richtig schiefgeht — Fehllieferung, Retoure, verärgerte Kunden —
              können es bis zu 17.800 USD pro Fall werden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Großhändler aus der Praxis hat das mal gemessen: 3,5 Prozent
              Fehlerquote bei manueller Erfassung. Nach der Automatisierung: 0,4
              Prozent. Das ist fast eine Zehnerpotenz weniger.
            </Typo.Paragraph>

            <Typo.H3>Die versteckten Kosten</Typo.H3>
            <Typo.Paragraph>
              Was die meisten unterschätzen: Die sichtbaren Personalkosten sind
              nur die Spitze des Eisbergs. Die tatsächlichen Gesamtkosten
              manueller Prozesse liegen 3 bis 5 Mal höher als das, was ihr auf
              dem Gehaltszettel seht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Da kommen dazu: Einarbeitung neuer Mitarbeiter. Qualitätskontrolle.
              Fehlerkorrektur. Kundenbeschwerden bearbeiten. Retouren abwickeln.
              Die ganzen Folgekosten, die nirgendwo in einer Zeile stehen.
            </Typo.Paragraph>

            <Typo.H3>Warum manuell nicht skaliert</Typo.H3>
            <Typo.Paragraph>
              Das fundamentale Problem: Manuelle Erfassung skaliert linear.
              Doppelt so viele Bestellungen heißt doppelt so viele Leute. Und
              die findet ihr gerade nicht. Im Innendienst herrscht
              Fachkräftemangel. Eure Leute verbringen 20 bis 40 Prozent ihrer
              Arbeitszeit mit stumpfem Abtippen statt mit Kundenbetreuung und
              Beratung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mehr Aufträge sind eigentlich eine gute Nachricht. Aber wenn der
              Engpass die Erfassung ist, bremst euch jedes Wachstum aus.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Problem ist nicht, dass eure Leute zu langsam sind. Die sind
              gut. Das Problem ist der Prozess.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 2. Was kostet euch manuelle Erfassung wirklich? */}
          <div>
            <Typo.H2 id="die-kosten">
              Was kostet euch manuelle Erfassung wirklich?
            </Typo.H2>
            <Typo.Paragraph>
              Viele Großhändler wissen, dass manuelle Bestellerfassung Zeit
              kostet. Aber die wenigsten haben mal durchgerechnet, was das in
              Euro bedeutet. Machen wir das jetzt.
            </Typo.Paragraph>

            <Typo.H3>Das Rechenbeispiel</Typo.H3>
            <Typo.Paragraph>
              Nehmen wir einen mittelständischen Großhändler. Keine Riesenbude,
              kein Kleinstunternehmen. Typischer deutscher Mittelstand.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Eckdaten:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>200 Bestellungen pro Tag (ca. 4.400 im Monat)</li>
              <li>
                12 Minuten Erfassungszeit pro Auftrag (Branchendurchschnitt)
              </li>
              <li>
                35 Euro Personalkosten pro Stunde (inkl. Arbeitgeberanteil,
                Büro, IT)
              </li>
            </ul>
            <Typo.Paragraph>
              <strong>Die Rechnung:</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              200 Aufträge mal 12 Minuten sind 2.400 Minuten am Tag. Das sind
              40 Stunden. Jeden Arbeitstag.
            </Typo.Paragraph>
            <Typo.Paragraph>
              40 Stunden mal 35 Euro macht 1.400 Euro pro Tag. Im Monat sind
              das rund 30.800 Euro. Nur für Bestellungen erfassen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das entspricht fünf Vollzeitkräften, die den ganzen Tag nichts
              anderes tun als E-Mails öffnen, PDFs lesen, Kundennummern suchen
              und Positionen ins ERP tippen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Fünf Leute. Nur für Dateneingabe.
            </Typo.Paragraph>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>
                  30.800 Euro im Monat — nur für das manuelle Erfassen von
                  Bestellungen. Das sind die sichtbaren Kosten. Die
                  tatsächlichen Gesamtkosten liegen 3 bis 5 Mal höher.
                </strong>
              </p>
            </div>

            <Typo.H3>Die Kosten, die keiner auf dem Schirm hat</Typo.H3>
            <Typo.Paragraph>
              30.800 Euro im Monat sind die sichtbaren Personalkosten. Aber
              das ist nur ein Teil der Geschichte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Fehlerkosten:</strong> Bei 4.400 Bestellungen im Monat
              und einer Fehlerquote von 2 Prozent habt ihr 88 fehlerhafte
              Aufträge. Bei durchschnittlich 75 USD (ca. 70 Euro)
              Korrekturaufwand pro Fehler sind das nochmal 6.160 Euro im Monat.
              Nur für die Nacharbeit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Und das sind die harmlosen Fehler. Tippfehler, falsche Mengen,
              verwechselte Artikel. Wenn eine Fehllieferung rausgeht und der
              Kunde reklamiert, wird es richtig teuer. Retoure, Neulieferung,
              Gutschrift, Kundenverlust. In Extremfällen bis zu 17.800 USD pro
              Vorgang.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>TCO — die wahren Gesamtkosten:</strong> Die Gesamtkosten
              manueller Prozesse liegen laut Studien 3 bis 5 Mal höher als die
              reinen Personalkosten. Da steckt alles drin, was ihr nicht auf
              einer einzelnen Rechnung seht:
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Einarbeitung neuer Mitarbeiter (und die gehen schnell, weil
                monotone Tipparbeit niemanden hält)
              </li>
              <li>Qualitätssicherung und Vier-Augen-Prinzip</li>
              <li>Fehlerkorrekturen und Kundenbeschwerden</li>
              <li>
                Opportunitätskosten: Eure Innendienst-Leute könnten Kunden
                beraten und Upselling machen, statt Daten abzutippen
              </li>
              <li>
                Verzögerungen in der Auftragsabwicklung: 4 bis 6 Stunden
                Verzögerung durch manuelle Eingabe
              </li>
            </ul>
            <Typo.Paragraph>
              Konservativ gerechnet: Wenn die sichtbaren Kosten 30.800 Euro
              sind, liegt der tatsächliche TCO eher bei 90.000 bis 150.000 Euro
              im Monat.
            </Typo.Paragraph>

            <Typo.H3>Und jetzt: Das Soll</Typo.H3>
            <Typo.Paragraph>
              Was passiert, wenn ihr 80 Prozent der Bestellungen automatisch
              erfasst? Das ist kein Wunschdenken. Das ist der Wert, den
              Unternehmen nach der Einführung typischerweise erreichen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die neue Rechnung (80 % Automatisierungsrate):</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                160 Aufträge laufen automatisch durch. Die KI liest, erkennt,
                validiert und übergibt ans ERP. Ein Mitarbeiter prüft kurz — ca.
                1 Minute pro Auftrag. Macht 160 Minuten am Tag.
              </li>
              <li>
                40 Aufträge bleiben Sonderfälle. Handschriftliche Faxe, unklare
                Anfragen, Neukunden. Die werden weiter manuell bearbeitet. 40
                mal 12 Minuten sind 480 Minuten.
              </li>
              <li>
                Gesamt: 640 Minuten am Tag. Das sind knapp 11 Stunden statt 40.
              </li>
            </ul>
            <Typo.Paragraph>
              11 Stunden mal 35 Euro macht 385 Euro am Tag. Im Monat rund 8.200
              Euro.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Monatliche Ersparnis: ca. 22.500 Euro.</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommen weniger Fehler, schnellere Auftragsbestätigungen und
              Mitarbeiter, die endlich Zeit für Kundenbetreuung haben.
            </Typo.Paragraph>

            <Typo.H3>Was kostet die Automatisierung?</Typo.H3>
            <Typo.Paragraph>
              Die Gegenfrage, die jetzt kommt. Berechtigte Frage.
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>SaaS-Lösungen</strong> (spezialisierte Anbieter für
                Auftragserfassung): ca. 1.000 bis 5.000 Euro im Monat,
                abhängig vom Volumen.
              </li>
              <li>
                <strong>Self-hosted mit Open-Source-Workflows und LLM-APIs</strong>
                : ca. 500 bis 2.000 Euro im Monat.
              </li>
            </ul>
            <Typo.Paragraph>
              Bei einer Ersparnis von 22.500 Euro im Monat und Softwarekosten
              von maximal 5.000 Euro ist das ein klarer Business Case.
              Break-Even bei SaaS: 1 bis 3 Monate. Bei Eigenentwicklung: 2 bis
              6 Monate inklusive Setup.
            </Typo.Paragraph>

            <Typo.H3>Die ehrliche Zusammenfassung</Typo.H3>
            <Typo.Paragraph>
              Manuelle Bestellerfassung kostet einen mittelständischen
              Großhändler mit 200 Aufträgen am Tag rund 30.800 Euro im Monat
              an reinen Personalkosten. Die tatsächlichen Gesamtkosten sind 3
              bis 5 Mal höher.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mit 80 Prozent Automatisierung spart ihr über 22.000 Euro im
              Monat. Und das ist nur die direkte Ersparnis, ohne
              Fehlerreduktion und bessere Kundenbindung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Frage ist nicht, ob sich Automatisierung lohnt. Die Frage
              ist, wie lange ihr es euch leisten könnt, darauf zu verzichten.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 3. So funktioniert automatische Bestellerfassung */}
          <div>
            <Typo.H2 id="so-funktioniert-es">
              So funktioniert automatische Bestellerfassung
            </Typo.H2>
            <Typo.Paragraph>
              Automatische Bestellerfassung klingt nach einem großen Wort. In
              der Praxis stecken drei Technologie-Bausteine dahinter, die
              zusammen fast jeden Bestellkanal abdecken. Kein einzelnes
              Wundertool. Sondern eine Kombination, die zum Großhandel passt.
            </Typo.Paragraph>

            <Typo.H3>Baustein 1: EDI — für eure Großkunden</Typo.H3>
            <Typo.Paragraph>
              EDI (Electronic Data Interchange) ist der Klassiker. Bestellungen
              werden direkt von System zu System übertragen. Euer Kunde schickt
              eine strukturierte Nachricht, euer ERP liest sie automatisch ein.
              Kein Mensch tippt irgendetwas ab.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im Großhandel sind Standards wie EDIFACT und openTRANS verbreitet.
              Funktioniert zuverlässig und ist seit Jahren erprobt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Haken: EDI lohnt sich nur bei Großkunden mit hohem
              Bestellvolumen. Die Anbindung dauert Wochen bis Monate pro Kunde.
              Für eure Top-20-Kunden ist das sinnvoll. Für die restlichen 500?
              Unrealistisch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Und genau das ist das Problem. Die meisten Bestellungen im
              Großhandel kommen nicht von den Großkunden. Sie kommen von der
              langen Liste mittelgroßer und kleiner Kunden, die per E-Mail, PDF
              oder Fax bestellen. EDI allein löst also nur einen Teil des
              Problems.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/bestellungen-erfassen-automatisieren/ki-workflow.png"
              alt="Drei Bausteine der automatischen Bestellerfassung: EDI, KI und Webshop münden alle ins ERP-System"
              width={1200}
              height={800}
            />

            <Typo.H3>Baustein 2: KI — für E-Mail, Fax und PDF</Typo.H3>
            <Typo.Paragraph>
              Hier wird es spannend. Moderne KI-Systeme kombinieren zwei
              Technologien:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>OCR (Optical Character Recognition)</strong> liest Text
              aus PDFs, Scans und Faxen. Egal ob maschinenlesbares PDF oder
              eingescanntes Papierdokument.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>NLP (Natural Language Processing)</strong> versteht den
              Inhalt. Das System erkennt: Das ist eine Bestellung. Der Kunde ist
              Müller GmbH. Er will 500 Stück Artikel X und 200 Stück Artikel Y.
              Lieferung bis Freitag.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das funktioniert auch bei Freitext-E-Mails, bei denen kein festes
              Format existiert. Die KI lernt, wie eure Kunden bestellen, und
              wird mit der Zeit besser.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Wie schnell geht das?</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein konkretes Beispiel: Der Elektrogroßhändler EVG aus Duisburg
              hat seine Bestellerfassung mit KI automatisiert. Vorher: 4,5
              Minuten pro Auftrag. Nachher: 16 Sekunden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              16 Sekunden. Die KI liest die Bestellung, extrahiert alle
              Positionen, gleicht gegen die Stammdaten ab und übergibt den
              fertigen Auftrag ans ERP. Ein Mitarbeiter prüft kurz und gibt
              frei.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In einem Quartal hat EVG damit 68 Arbeitstage eingespart. Das
              sind fast 95,5 Prozent weniger Zeitaufwand pro Auftrag.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Auch bei Karl Bachl, einem Bauzulieferer aus Bayern mit rund 350
              Bestellungen pro Woche, zeigt sich das Bild: 78,5 Prozent
              Effizienzsteigerung und 20 Stunden pro Woche weniger manuelle
              Arbeit.
            </Typo.Paragraph>

            <Typo.H3>Wie die Validierung funktioniert</Typo.H3>
            <Typo.Paragraph>
              Die KI tippt nicht blind ab. Jede erkannte Position wird gegen
              eure ERP-Stammdaten geprüft:
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Artikelnummern:</strong> Gibt es den Artikel? Stimmt die
                Bezeichnung? Wurde der Artikel umgestellt?
              </li>
              <li>
                <strong>Kundenkonditionen:</strong> Welcher Preis gilt? Gibt es
                Rabatte oder Staffelpreise?
              </li>
              <li>
                <strong>Mengen und Einheiten:</strong> Bestellt der Kunde 500
                Stück oder 500 Karton? Passt die Bestellmenge zur üblichen
                Bestellhistorie?
              </li>
              <li>
                <strong>Lagerbestand:</strong> Ist die Ware verfügbar?
              </li>
            </ul>
            <Typo.Paragraph>
              Wenn alles passt, geht der Auftrag durch. Wenn etwas nicht stimmt
              — unbekannte Artikelnummer, ungewöhnlich hohe Menge, neuer Kunde —
              wird der Auftrag markiert.
            </Typo.Paragraph>

            <Typo.H3>Human-in-the-Loop: Der Mensch bleibt drin</Typo.H3>
            <Typo.Paragraph>
              Kein vernünftiges System läuft komplett ohne Menschen. Das Prinzip
              heißt Human-in-the-Loop.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die KI erledigt 80 bis 90 Prozent der Aufträge vollautomatisch.
              Bei den restlichen 10 bis 20 Prozent — Sonderfälle, unklare
              Bestellungen, Abweichungen — springt ein Sachbearbeiter ein. Das
              System zeigt genau an, was es erkannt hat und wo es unsicher ist.
              Der Mitarbeiter prüft, korrigiert wenn nötig und gibt frei.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das ist kein Rückschritt. Das ist der richtige Ansatz. Ihr wollt
              keine Blackbox, die Aufträge anlegt, die keiner geprüft hat. Ihr
              wollt ein System, das die Routinearbeit übernimmt und bei
              Ausnahmen den Menschen einbindet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Fehlerquote sinkt dabei drastisch. Studien zeigen eine
              Reduktion von über 80 Prozent. Ein Praxisbeispiel aus dem
              Großhandel: Von 3,5 Prozent Fehlerquote runter auf 0,4 Prozent.
            </Typo.Paragraph>

            <Typo.H3>Baustein 3: Webshop — das Langfristziel</Typo.H3>
            <Typo.Paragraph>
              Der dritte Baustein ist der eigene B2B-Webshop oder ein
              Kundenportal. Wenn eure Kunden direkt im System bestellen,
              entfällt die Erfassung komplett. Null manueller Aufwand.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Theorie die beste Lösung. In der Praxis die schwierigste.
              Viele Großhandelskunden bestellen seit Jahren per E-Mail oder
              Telefon und sehen keinen Grund, das zu ändern. Die Akzeptanz von
              B2B-Portalen wächst, aber langsam.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Webshop ist deshalb ein Langfristziel. Nicht das, womit ihr
              morgen anfangt.
            </Typo.Paragraph>

            <Typo.H3>Die Kombination macht&apos;s</Typo.H3>
            <Typo.Paragraph>
              Die beste Strategie für den Großhandel ist keine
              Entweder-oder-Entscheidung:
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>EDI</strong> für die Großkunden mit hohem Volumen.
                Zuverlässig, etabliert, keine KI nötig.
              </li>
              <li>
                <strong>KI-basierte Erfassung</strong> für alle anderen: E-Mail,
                Fax, PDF, Freitext. Hier liegt der größte Hebel, weil hier der
                meiste manuelle Aufwand steckt.
              </li>
              <li>
                <strong>Webshop</strong> als langfristiger Kanal, der
                schrittweise ausgebaut wird.
              </li>
            </ul>
            <Typo.Paragraph>
              So deckt ihr alle Bestellkanäle ab. Die KI-Implementierung geht
              dabei deutlich schneller als eine EDI-Anbindung — wenige Tage bis
              Wochen statt Monate pro Kunde. Und moderne Systeme erreichen
              Erkennungsraten von über 90 Prozent, bei angelernten Formaten
              nahe 100 Prozent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Technologie ist 2026 produktionsreif. 63 Prozent der
              Großhändler und Hersteller bewerten KI bereits als hoch relevant.
              Bis 2030 sollen es 85 Prozent sein. Die Frage ist nicht mehr ob,
              sondern wann. Neben der Bestellerfassung profitiert auch die{" "}
              <Link href="/ki-angebote" className="text-primary-600 hover:underline">automatische Angebotserstellung</Link>{" "}
              von diesen Fortschritten.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 4. Praxisbeispiele aus dem deutschen Großhandel */}
          <div>
            <Typo.H2 id="praxisbeispiele">
              Praxisbeispiele aus dem deutschen Großhandel
            </Typo.H2>
            <Typo.Paragraph>
              Theorie ist das eine. Aber was passiert, wenn Großhändler das
              tatsächlich umsetzen? Hier sind drei Unternehmen aus Deutschland,
              die ihre Bestellerfassung automatisiert haben. Mit echten Zahlen,
              nicht mit Marketing-Versprechen.
            </Typo.Paragraph>

            <Typo.H3>EVG Duisburg: Von 4,5 Minuten auf 16 Sekunden</Typo.H3>
            <Typo.Paragraph>
              EVG handelt und fertigt elektronische und elektromechanische
              Komponenten. Ein klassischer B2B-Großhändler mit hohem
              Bestellvolumen über E-Mail und PDF.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Vorher:</strong> Jede Bestellung wurde manuell erfasst.
              E-Mail öffnen, PDF lesen, Kundennummer suchen, Positionen ins ERP
              tippen, Auftrag prüfen. Zeitaufwand: 4,5 Minuten pro Auftrag.
              Klingt nicht viel, summiert sich aber brutal bei hunderten
              Bestellungen pro Woche.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nachher:</strong> Ein KI-Agent liest die Bestellung,
              validiert gegen die Stammdaten und übergibt den Auftrag ans ERP.
              Der Innendienst leitet die E-Mail weiter, der Rest passiert
              automatisch. Bearbeitungszeit: 16 Sekunden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Zahlen:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>95,5 % Zeitersparnis pro Auftrag</li>
              <li>68 Arbeitstage eingespart allein in Q1 2025</li>
              <li>
                68 Arbeitstage. Das sind über 3 Monate Vollzeitarbeit, die in
                einem einzigen Quartal freigeworden sind.
              </li>
            </ul>
            <Typo.Paragraph>
              Sebastian Rippen, IT-Leiter bei EVG, bringt es auf den Punkt: Der
              Prozess beschränkt sich jetzt darauf, die Bestellung an den
              KI-Agenten weiterzuleiten, der im Grunde die ganze Arbeit
              erledigt.
            </Typo.Paragraph>

            <Typo.H3>Karl Bachl: 20 Stunden pro Woche zurückgewonnen</Typo.H3>
            <Typo.Paragraph>
              Karl Bachl ist ein Bauzulieferer aus Röhrnbach in Bayern.
              Kunststoffverarbeitung, großes Sortiment, viele Bestellungen über
              verschiedene Kanäle.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Vorher:</strong> Ca. 350 Bestellungen pro Woche, jede
              manuell erfasst. Das sind 1.400 Bestellungen im Monat. Ein Team
              von Innendienstmitarbeitern, das den ganzen Tag Daten abtippt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Nachher:</strong> 78,5 % Effizienzsteigerung. Pro Auftrag
              spart das Team 3,5 Minuten. Klingt wenig, aber rechnet das mal
              hoch: 350 Bestellungen mal 3,5 Minuten sind über 20 Stunden pro
              Woche.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Was das konkret bedeutet:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                20 Stunden pro Woche, die der Innendienst jetzt für
                Kundenbetreuung nutzen kann
              </li>
              <li>
                80+ Stunden pro Monat, die nicht mehr in Tipparbeit verschwinden
              </li>
              <li>
                Weniger Fehler, weil das System automatisch gegen Stammdaten
                abgleicht und fehlerhafte Bestellungen erkennt
              </li>
            </ul>
            <Typo.Paragraph>
              Bei Karl Bachl war ein Zusatzeffekt besonders wertvoll: Die
              automatische Erkennung von Fehlern in den Bestellungen selbst.
              Wenn ein Kunde eine falsche Artikelnummer schickt oder eine Menge
              nicht zum üblichen Bestellverhalten passt, schlägt das System
              Alarm. Das fängt Probleme ab, bevor sie im Lager landen.
            </Typo.Paragraph>

            <Typo.H3>
              Meesenburg Gruppe: 1 Stunde pro Tag pro Vertriebler
            </Typo.H3>
            <Typo.Paragraph>
              Die Meesenburg Gruppe ist ein Großhändler für Beschlag- und
              Sicherheitstechnik. Ein anderer Ansatz, aber das gleiche Ergebnis.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Meesenburg setzt auf eine SAP-basierte KI-Plattform. Der Fokus
              liegt hier nicht nur auf der Bestellerfassung, sondern auf der
              gesamten Vertriebsarbeit. Routineaufgaben wie Auftragsanlage,
              Statusabfragen und Datenabgleich werden automatisiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Das Ergebnis:</strong> Jeder Vertriebler gewinnt bis zu 1
              Stunde pro Tag. 60 Minuten, die vorher in repetitive Aufgaben
              geflossen sind, stehen jetzt für Kundengespräche, Beratung und
              Neugeschäft zur Verfügung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei 20 Vertrieblern sind das 20 Stunden am Tag. 100 Stunden pro
              Woche. 400+ Stunden im Monat. Alles reine Vertriebszeit, die
              vorher in Admin versunken ist.
            </Typo.Paragraph>

            <Typo.H3>Was das für euch bedeutet</Typo.H3>
            <Typo.Paragraph>
              Die drei Beispiele zeigen ein klares Muster:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Zeitersparnis ist massiv.</strong> Nicht 10 oder 20
              Prozent, sondern 78 bis 95 Prozent. Das ist kein inkrementelles
              Optimieren, das ist ein Prozess, der sich fundamental verändert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Effekte skalieren.</strong> EVG spart 68 Arbeitstage
              in einem Quartal. Karl Bachl 20 Stunden pro Woche. Meesenburg
              eine Stunde pro Vertriebler pro Tag. Je mehr Bestellungen ihr
              verarbeitet, desto größer der Hebel.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>
                Die Mitarbeiter werden nicht ersetzt, sondern entlastet.
              </strong>{" "}
              In keinem der Beispiele wurden Stellen gestrichen. Stattdessen
              macht der Innendienst jetzt das, wofür er eigentlich da ist:
              Kunden beraten, Probleme lösen, Umsatz generieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn ihr 200+ Bestellungen pro Woche manuell erfasst, liegt bei
              euch dasselbe Potenzial. Die Frage ist nicht ob, sondern wann.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 5. n8n-Workflow: Bestellungen automatisch erfassen */}
          <div>
            <Typo.H2 id="n8n-workflow">
              n8n-Workflow: Bestellungen automatisch erfassen
            </Typo.H2>
            <Typo.Paragraph>
              Die Praxisbeispiele zeigen, was möglich ist. Aber wie sieht das
              technisch aus? In diesem Kapitel bauen wir einen konkreten
              Workflow, der E-Mail-Bestellungen automatisch erfasst. Keine
              Blackbox, sondern ein transparenter Prozess, den ihr selbst
              kontrolliert.
            </Typo.Paragraph>

            <Typo.H3>Der Workflow in 5 Schritten</Typo.H3>
            <Typo.Paragraph>
              <strong>Schritt 1: E-Mail-Postfach überwachen (IMAP)</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Workflow startet mit einem IMAP-Trigger. Er überwacht euer
              Bestellpostfach (bestellungen@firma.de) und springt an, sobald
              eine neue E-Mail reinkommt. Keine Verzögerung, kein manuelles
              Postfach-Checken.
            </Typo.Paragraph>
            <Typo.Paragraph>
              n8n prüft dabei automatisch: Ist ein Anhang dabei? PDF, Excel,
              Bild? Der Anhang wird extrahiert und für den nächsten Schritt
              vorbereitet.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 2: Bestellung parsen (LLM-API)</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Jetzt kommt die KI ins Spiel. Der E-Mail-Text und die Anhänge
              gehen an ein Sprachmodell. Das kann GPT-4, Claude oder ein
              anderes LLM sein, das ihr über eine API ansprecht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Modell bekommt einen klaren Auftrag: Lies diese Bestellung
              und gib mir strukturierte Daten zurück. Kundenname,
              Artikelbezeichnungen, Mengen, gewünschter Liefertermin. Als JSON,
              nicht als Freitext.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei PDF-Anhängen wird vorher OCR eingesetzt, um den Text zu
              extrahieren. Das funktioniert auch bei gescannten
              Faxbestellungen, die als PDF im Postfach landen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Ergebnis: Aus einer unstrukturierten E-Mail wird ein sauberer
              Datensatz.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/bestellungen-erfassen-automatisieren/n8n-dashboard.png"
              alt="n8n-Workflow-Diagramm: IMAP-Trigger, LLM-Parser, ERP-Datenbank-Abgleich, Auftrag anlegen, Bestätigung senden"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              <strong>
                Schritt 3: Stammdatenabgleich (ERP-Datenbank)
              </strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die extrahierten Daten werden gegen eure ERP-Datenbank geprüft.
              n8n verbindet sich per MySQL-, Postgres- oder HTTP-Node direkt
              mit eurem System.
            </Typo.Paragraph>
            <Typo.Paragraph>Was passiert hier konkret:</Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Kundenerkennung:</strong> Absender-E-Mail oder
                Kundenname wird gegen die Kundenstammdaten geprüft.
                Kundennummer, Konditionen und Lieferadresse werden automatisch
                zugeordnet.
              </li>
              <li>
                <strong>Artikel-Matching:</strong> Die Artikelbezeichnungen des
                Kunden werden gegen euren Artikelstamm abgeglichen. Per
                Fuzzy-Matching und Artikelnummer-Suche.
              </li>
              <li>
                <strong>Plausibilitätsprüfung:</strong> Stimmen die Mengen zum
                üblichen Bestellverhalten? Gibt es den Artikel noch? Ist der
                Lagerbestand ausreichend?
              </li>
            </ul>
            <Typo.Paragraph>
              Bei Unstimmigkeiten geht der Auftrag nicht blind durch.
              Stattdessen wird er als Ausnahme markiert und ein Mitarbeiter
              bekommt eine Benachrichtigung zur kurzen Prüfung.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 4: Auftrag im ERP anlegen</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn alle Daten validiert sind, legt n8n den Auftrag direkt im
              ERP an. Per REST-API, SOAP-Schnittstelle oder Dateiexport, je
              nachdem was euer System unterstützt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Auftrag enthält alle relevanten Daten: Kundennummer,
              Positionen, Mengen, Preise nach Kundenkonditionen, Liefertermin.
              Fertig angelegt, als hätte es ein Mitarbeiter manuell gemacht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 5: Bestätigung senden</strong>
            </Typo.Paragraph>
            <Typo.Paragraph>
              Letzter Schritt: Der Kunde bekommt automatisch eine
              Auftragsbestätigung per E-Mail. Intern geht eine Benachrichtigung
              an den zuständigen Sachbearbeiter, per E-Mail, Slack oder
              Telegram.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei Ausnahmen (niedriger Confidence-Score, unbekannter Artikel,
              ungewöhnliche Menge) wird der Sachbearbeiter aktiv einbezogen.
              Alles andere läuft durch, ohne dass jemand einen Finger rühren
              muss.
            </Typo.Paragraph>

            <Typo.H3>Warum Self-hosted?</Typo.H3>
            <Typo.Paragraph>
              Die meisten SaaS-Lösungen für Auftragserfassung laufen in der
              Cloud. Eure Bestelldaten, Kundennamen, Preise und Konditionen
              liegen dann auf fremden Servern.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mit n8n habt ihr drei entscheidende Vorteile:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>DSGVO-Konformität.</strong> n8n läuft auf eurem eigenen
              Server. Kundendaten verlassen euer Netzwerk nicht. Bei LLM-APIs
              könnt ihr auf europäische Anbieter oder Self-hosted-Modelle
              setzen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Kosten.</strong> Keine pro-Auftrag-Gebühren, keine
              Volumen-Staffeln, keine Überraschungen auf der Rechnung. Ihr
              zahlt für den Server und die LLM-API-Aufrufe, fertig.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Flexibilität.</strong> Ihr könnt den Workflow jederzeit
              anpassen. Neuer Bestellkanal? Neues ERP? Spezielle
              Validierungsregel? Alles in n8n konfigurierbar, ohne auf den
              SaaS-Anbieter warten zu müssen.
            </Typo.Paragraph>

            <Typo.H3>SaaS vs. Open Source: Was kostet das?</Typo.H3>
            <table className="w-full text-sm border-collapse my-6">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-3 font-semibold"></th>
                  <th className="text-left p-3 font-semibold">
                    SaaS (Workist, Caya)
                  </th>
                  <th className="text-left p-3 font-semibold">
                    Self-hosted (n8n + LLM)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Monatliche Kosten</td>
                  <td className="p-3">1.000-5.000 €/Monat</td>
                  <td className="p-3">500-2.000 €/Monat</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Preismodell</td>
                  <td className="p-3">Pro Auftrag / Volumen-Staffel</td>
                  <td className="p-3">Server + LLM-API-Verbrauch</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Setup-Aufwand</td>
                  <td className="p-3">
                    Gering (Onboarding durch Anbieter)
                  </td>
                  <td className="p-3">
                    Mittel (eigenes Setup oder Dienstleister)
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">DSGVO</td>
                  <td className="p-3">
                    Auftragsverarbeitung, Daten in der Cloud
                  </td>
                  <td className="p-3">
                    Volle Kontrolle, Daten on-premise
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Anpassbarkeit</td>
                  <td className="p-3">Begrenzt (Feature-Requests)</td>
                  <td className="p-3">Unbegrenzt (eigener Code)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3 font-medium">Skalierungskosten</td>
                  <td className="p-3">Steigen mit Volumen</td>
                  <td className="p-3">Bleiben weitgehend konstant</td>
                </tr>
              </tbody>
            </table>
            <Typo.Paragraph>
              Bei 200+ Bestellungen am Tag lohnt sich Self-hosted fast immer.
              Die LLM-Kosten pro Auftrag liegen bei wenigen Cent, der Server
              kostet einen festen Betrag. Bei SaaS-Lösungen steigt die Rechnung
              mit jedem zusätzlichen Auftrag.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für kleinere Unternehmen mit unter 50 Bestellungen am Tag kann
              eine SaaS-Lösung der schnellere Einstieg sein. Kein Setup, kein
              Server-Management, dafür höhere laufende Kosten auf Dauer.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* 6. So startet ihr — Implementation Guide */}
          <div>
            <Typo.H2 id="implementation-guide">
              So startet ihr — Implementation Guide
            </Typo.H2>
            <Typo.Paragraph>
              Ihr wisst jetzt, was möglich ist und wie es technisch
              funktioniert. Bleibt die Frage: Wie fängt man an? Hier ist ein
              4-Phasen-Plan, der in 4 bis 8 Wochen von der Analyse bis zum
              laufenden System führt.
            </Typo.Paragraph>

            <Typo.H3>
              Phase 1: Ist-Analyse eurer Bestellkanäle (Woche 1)
            </Typo.H3>
            <Typo.Paragraph>
              Bevor ihr irgendetwas automatisiert, müsst ihr wissen, was ihr
              automatisiert. Klingt banal, wird aber oft übersprungen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Was ihr in dieser Phase macht:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Alle Bestellkanäle auflisten: E-Mail, Fax, Telefon, EDI,
                Webshop. Wie viel Prozent kommen über welchen Kanal?
              </li>
              <li>
                Bestellvolumen pro Kanal messen. Eine Woche lang tracken
                reicht.
              </li>
              <li>
                Zeitaufwand pro Bestellung stoppen. Nicht schätzen, messen.
                Stoppuhr an, Bestellung erfassen, Stoppuhr aus.
              </li>
              <li>
                Fehlerquote dokumentieren. Wie viele Aufträge müssen
                nachbearbeitet werden?
              </li>
            </ul>
            <Typo.Paragraph>
              <strong>Das Ergebnis:</strong> Ihr wisst genau, wo der größte
              Hebel liegt. Meistens ist es E-Mail. 60 bis 80 Prozent der
              Bestellungen im Großhandel kommen per E-Mail oder mit
              PDF-Anhang. Genau der Kanal, den KI am besten automatisieren
              kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Typische Erkenntnis:</strong> Unternehmen sind überrascht,
              wie viel Zeit tatsächlich in der manuellen Erfassung steckt. Die
              Schätzung liegt meistens bei 5 bis 8 Minuten pro Auftrag. Die
              Messung ergibt 10 bis 15 Minuten, wenn man ehrlich ist.
            </Typo.Paragraph>

            <Typo.H3>
              Phase 2: Pilotprojekt mit einem Kanal (Woche 2-4)
            </Typo.H3>
            <Typo.Paragraph>
              Nicht alles auf einmal. Fangt mit einem Kanal an.
              E-Mail-Bestellungen sind der beste Startpunkt, weil sie das
              höchste Volumen haben und technisch am einfachsten zu
              automatisieren sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Was ihr in dieser Phase macht:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                n8n-Instanz aufsetzen (eigener Server oder Cloud-VM)
              </li>
              <li>IMAP-Trigger für das Bestellpostfach einrichten</li>
              <li>
                LLM-API anbinden (OpenAI, Anthropic oder ein europäischer
                Anbieter)
              </li>
              <li>
                ERP-Schnittstelle konfigurieren (REST-API oder
                Datenbankzugang)
              </li>
              <li>
                Workflow bauen: E-Mail lesen → parsen → validieren → Auftrag
                anlegen
              </li>
              <li>
                Mit echten Bestellungen testen, aber zunächst im Review-Modus:
                Jeder Auftrag wird einem Mitarbeiter zur Freigabe vorgelegt
              </li>
            </ul>
            <Typo.Paragraph>
              <strong>Wichtig:</strong> In den ersten zwei Wochen läuft das
              System parallel zum manuellen Prozess. Ihr vergleicht: Hat die KI
              richtig erkannt? Stimmen die Artikelzuordnungen? Wo hakt es?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erfahrungsgemäß erreicht ihr nach 50 bis 100 verarbeiteten
              Bestellungen eine Erkennungsrate von über 90 Prozent. Die
              häufigsten Fehler in den ersten Tagen: Artikel-Matching bei
              ungewöhnlichen Bezeichnungen und Kundenzuordnung bei neuen
              Absendern.
            </Typo.Paragraph>

            <Typo.H3>
              Phase 3: Rollout auf alle Kanäle (Woche 5-6)
            </Typo.H3>
            <Typo.Paragraph>
              Wenn der E-Mail-Kanal stabil läuft, erweitert ihr den Workflow.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Fax-Bestellungen:</strong> Kommen ohnehin als PDF per
              E-Mail rein (die meisten Faxlösungen leiten digital weiter).
              Damit sind sie praktisch schon abgedeckt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>PDF-Bestellungen per Upload:</strong> Kunden, die
              Bestellungen als PDF hochladen oder per Messenger schicken, könnt
              ihr über einen zusätzlichen Eingangskanal einbinden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>EDI bleibt EDI.</strong> Für Großkunden, die bereits per
              EDIFACT oder OpenTrans angebunden sind, ändert sich nichts. Die
              laufen weiter wie bisher. Die KI-Automatisierung schließt die
              Lücke für alle anderen Kunden, die nicht über EDI bestellen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Telefonbestellungen:</strong> Der schwierigste Kanal.
              Kurzfristig hilft eine Zwischenlösung: Der Innendienst tippt eine
              kurze Zusammenfassung der Telefonbestellung, die dann vom Workflow
              verarbeitet wird. Langfristig könnt ihr KI-basierte
              Spracherkennung einbauen, aber das ist noch Zukunftsmusik.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In dieser Phase erhöht ihr auch die Automatisierungsrate.
              Aufträge mit hohem Confidence-Score gehen ohne Freigabe direkt
              durch. Nur Ausnahmen landen beim Sachbearbeiter.
            </Typo.Paragraph>

            <Typo.H3>
              Phase 4: Optimierung und Monitoring (Woche 7-8, dann laufend)
            </Typo.H3>
            <Typo.Paragraph>
              Das System läuft. Jetzt geht es um Feinschliff und Überwachung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>KPIs, die ihr tracken solltet:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Automatisierungsrate (Ziel: 80 %+)</li>
              <li>Durchschnittliche Bearbeitungszeit pro Auftrag</li>
              <li>
                Fehlerquote (automatisch erkannte vs. manuell korrigierte
                Aufträge)
              </li>
              <li>
                Ausnahme-Quote (wie viele Aufträge brauchen menschliche
                Prüfung)
              </li>
            </ul>
            <Typo.Paragraph>
              <strong>Typische Optimierungen:</strong>
            </Typo.Paragraph>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Artikel-Matching verbessern durch Synonyme und
                Kundenbezeichnungen in den Stammdaten
              </li>
              <li>
                Confidence-Schwellenwerte anpassen: Zu streng = zu viele
                Ausnahmen, zu locker = Fehler
              </li>
              <li>
                Neue Kunden automatisch anlernen, sobald die erste Bestellung
                manuell bestätigt wurde
              </li>
            </ul>

            <Typo.H3>Was ihr braucht</Typo.H3>
            <Typo.Paragraph>
              Bevor ihr startet, checkt diese drei Voraussetzungen:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>1. ERP-API-Zugang.</strong> Euer ERP muss eine
              Schnittstelle haben, über die Aufträge angelegt werden können.
              REST-API ist ideal, Datenbankzugang geht auch. Die meisten
              modernen ERPs (SAP, Microsoft Dynamics, proALPHA, Sage) bieten
              das. Bei älteren Systemen hilft ein Dateiexport als
              Zwischenlösung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>2. n8n-Instanz.</strong> Ein Linux-Server mit Docker
              reicht. 4 GB RAM, 2 CPU-Kerne. Kostet bei einem Cloud-Anbieter
              ca. 20 bis 50 Euro im Monat. Oder ihr nutzt einen bestehenden
              Server in eurem Netzwerk.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>3. LLM-Budget.</strong> Die API-Kosten für ein
              Sprachmodell liegen bei wenigen Cent pro Bestellung. Bei 200
              Bestellungen am Tag sind das ca. 100 bis 300 Euro im Monat. Kein
              Vergleich zu den Personalkosten, die ihr einspart.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* CTA Section */}
          <div>
            <Typo.H2 id="naechster-schritt">Nächster Schritt</Typo.H2>
            <Typo.Paragraph>
              Ihr verarbeitet hunderte Bestellungen pro Woche manuell und wollt
              wissen, wie viel Automatisierung bei euch konkret bringt?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wir analysieren eure Bestellprozesse und zeigen euch in einer
              kostenlosen Beratung, wo der größte Hebel liegt und wie ein
              n8n-Workflow für euer Setup aussehen würde.
            </Typo.Paragraph>

            <div className="my-6">
              <ContactButton>Kostenlose Beratung buchen</ContactButton>
            </div>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="das-problem">
            Das Problem: Bestellungen erfassen frisst Stunden
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="die-kosten">
            Was kostet euch manuelle Erfassung wirklich?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="so-funktioniert-es">
            So funktioniert automatische Bestellerfassung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="praxisbeispiele">
            Praxisbeispiele aus dem Großhandel
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="n8n-workflow">
            n8n-Workflow: Bestellungen erfassen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="implementation-guide">
            Implementation Guide
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naechster-schritt">
            Nächster Schritt
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
