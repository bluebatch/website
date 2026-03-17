import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "automatische-angebotserstellung-grosshandel",
  author: "Max Hänsel",
  date: "2026-03-13",
  image: "/blog/automatische-angebotserstellung-grosshandel/hero.png",
  tags: ["ki", "grosshandel", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Automatische Angebotserstellung im Großhandel: So erstellt KI eure Angebote in Sekunden | Bluebatch",
  description:
    "78% der Kunden kaufen beim Anbieter, der zuerst antwortet. Erfahren Sie, wie KI-gestützte Workflows Angebote in Sekunden statt Stunden erstellen — mit konkretem n8n-Praxisbeispiel.",
  openGraph: {
    title:
      "Automatische Angebotserstellung im Großhandel: KI erstellt Angebote in Sekunden",
    description:
      "78% der Kunden kaufen beim Anbieter, der zuerst antwortet. KI-Workflows erstellen Angebote in Sekunden statt Stunden.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/automatische-angebotserstellung-grosshandel/hero.png",
        width: 1200,
        height: 630,
        alt: "Automatische Angebotserstellung im Großhandel mit KI",
      },
    ],
  },
  alternates: {
    canonical: "/blog/automatische-angebotserstellung-grosshandel",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Automatische Angebotserstellung im Großhandel: So erstellt KI eure
          Angebote in Sekunden
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>20 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-03-13">13. März 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/automatische-angebotserstellung-grosshandel/hero.png"
          alt="Automatische Angebotserstellung im Großhandel mit KI"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* Introduction */}
          <div className="prose prose-lg">
            <Typo.Paragraph>
              Montag, 8:14 Uhr. Der Innendienst öffnet Outlook. 23 neue E-Mails.
              Davon 11 Angebotsanfragen. Dazu kommen drei Anrufe und ein Fax
              (ja, Fax gibt es noch). Jetzt geht es los — und der Prozess, der
              folgt, kostet euer Team jeden Tag Stunden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Artikel zeigt euch Schritt für Schritt, wie ein KI-Workflow
              aus einer Kundenanfrage automatisch ein Angebot macht. Anfrage
              rein, Angebot raus — in Sekunden statt Stunden.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* Section 1 */}
          <div>
            <Typo.H2 id="das-problem">
              Das Problem: Manuelle Angebote fressen Zeit
            </Typo.H2>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/ueberfuellter-posteingang.png"
              alt="Überfüllter E-Mail-Posteingang mit Angebotsanfragen im Großhandel"
              width={1200}
              height={800}
            />

            <Typo.H3>So sieht der Alltag aus</Typo.H3>

            <Typo.Paragraph>
              Ein Kunde schreibt: &quot;Brauchen wir nochmal, wie letztes Mal.
              Aber diesmal 200 Stück statt 150. Und das andere Teil auch, ihr
              wisst schon.&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der Innendienst-Mitarbeiter weiß natürlich nicht. Also beginnt der
              Prozess:
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 1: Anfrage lesen und verstehen.</strong> E-Mail
              öffnen, durchlesen, interpretieren. Was meint der Kunde mit
              &quot;das andere Teil&quot;? Letzte Bestellung raussuchen. Aha,
              Artikel 4711 und 4712.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 2: Kundenhistorie prüfen.</strong> CRM öffnen
              (oder die Excel-Tabelle, die Sabine pflegt). Welche Konditionen
              hat der Kunde? Gibt es einen Rahmenvertrag? Sonderrabatte?
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 3: Artikel im ERP suchen.</strong> Artikelnummer
              eingeben. Variante prüfen. Stimmt die Bezeichnung noch? Gibt es
              den Artikel überhaupt noch oder wurde der umgestellt?
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 4: Verfügbarkeit checken.</strong> Lagerbestand
              anschauen. 200 Stück gewünscht, 140 auf Lager. Lieferant anrufen.
              Wann kommt die nächste Charge? KW 16? Oder doch KW 17?
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 5: Preis kalkulieren.</strong> Listenpreis
              nachschlagen. Kundenrabatt abziehen. Staffelpreis beachten. Marge
              prüfen. In Excel die Formeln anpassen. Hoffen, dass niemand die
              Zelle mit der Rabattformel überschrieben hat.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 6: Angebot erstellen.</strong> Word-Vorlage
              öffnen. Positionen eintragen. Preise übertragen. Formatieren.
              Nochmal prüfen. PDF exportieren.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 7: Versenden.</strong> E-Mail schreiben. PDF
              anhängen. Absenden.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Schritt 8: Warten.</strong> Drei Tage später ruft der
              Kunde an: &quot;Könnt ihr beim Preis noch was machen?&quot; Zurück
              zu Schritt 5.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/prozesskette-manuelle-angebotserstellung.png"
              alt="Flowchart: 8-Schritte-Prozesskette der manuellen Angebotserstellung mit Zeitangaben"
              width={1200}
              height={800}
            />

            <Typo.H3>Die Zahlen dahinter</Typo.H3>

            <Typo.Paragraph>
              Ein durchschnittliches Angebot im Großhandel braucht{" "}
              <strong>rund 30 Minuten</strong>. Manuell in Excel, mit
              Nachschlagen in verschiedenen Systemen. Bei komplexen Anfragen mit
              vielen Positionen oder Sonderkonditionen deutlich mehr.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Nehmen wir einen typischen Großhändler mit 40 Angebotsanfragen pro
              Woche. Das sind <strong>20 Stunden pro Woche</strong> nur für
              Angebote. Eine halbe Stelle, die nichts anderes tut als Positionen
              in Templates tippen.
            </Typo.Paragraph>

            <Typo.H3>Fehler sind eingebaut</Typo.H3>

            <Typo.Paragraph>
              Excel-Kalkulationen und manuelle Preisübertragung haben eine
              Fehlerquote von rund <strong>8 Prozent</strong>. Bei jedem
              zwölften Angebot stimmt etwas nicht. Falscher Rabatt angewendet.
              Alte Preisliste benutzt. Staffelgrenze übersehen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Preisfehler kosten B2B-Unternehmen{" "}
              <strong>2 bis 5 Prozent des EBIT</strong>. Bei einem Großhändler
              mit 200 Millionen Umsatz sind das 4 bis 10 Millionen Euro, die
              jedes Jahr liegen bleiben.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/fehlerquote-ebit-verlust.png"
              alt="Infografik: 8% Fehlerquote und 2-5% EBIT-Verlust durch Preisfehler bei manueller Angebotserstellung"
              width={1200}
              height={800}
            />

            <Typo.H3>Wer zuerst antwortet, gewinnt</Typo.H3>

            <Typo.Paragraph>
              <strong>78 Prozent der Kunden</strong> kaufen beim Anbieter, der
              zuerst antwortet. Wer innerhalb von 5 Minuten reagiert, hat eine{" "}
              <strong>21-mal höhere Chance</strong> auf den Abschluss als
              jemand, der 30 Minuten braucht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die durchschnittliche Antwortzeit im B2B?{" "}
              <strong>42 Stunden.</strong> Nur 1 Prozent aller B2B-Unternehmen
              schaffen es, innerhalb von 5 Minuten zu antworten.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Im Großhandel heißt das: Der Kunde schickt seine Anfrage an drei
              Lieferanten. Wer als Erster ein vernünftiges Angebot liefert,
              bekommt den Auftrag.
            </Typo.Paragraph>

            <Typo.H3>70 Prozent der Zeit geht für Admin drauf</Typo.H3>

            <Typo.Paragraph>
              Vertriebsmitarbeiter verbringen nur{" "}
              <strong>30 Prozent ihrer Arbeitszeit</strong> mit dem, wofür sie
              eigentlich da sind: verkaufen. Der Rest? Admin, Dateneingabe,
              Meetings, Genehmigungen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ohne Automatisierung brauchen Sales-Reps{" "}
              <strong>73 Prozent mehr Zeit</strong> für ein typisches Angebot.
              Das ist keine Optimierungsfrage mehr. Das ist ein strukturelles
              Problem.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/zeitverteilung-vertrieb.png"
              alt="Zeitverteilung eines Vertriebsmitarbeiters: 30% aktives Verkaufen, 70% Admin und Dateneingabe"
              width={1200}
              height={800}
            />

            <Typo.H3>Dazu kommt: Es gibt nicht genug Leute</Typo.H3>

            <Typo.Paragraph>
              Der deutsche Großhandel beschäftigt 1,7 Millionen Menschen und
              macht 1,8 Billionen Euro Umsatz im Jahr. Gleichzeitig stehen über
              387.000 qualifizierte Stellen offen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              66 Prozent der Unternehmen wollen durch Digitalisierung ihre
              Arbeitsprozesse effizienter machen. Aber der eigene
              Digitalisierungsgrad? Note 2,8. Befriedigend. Seit Jahren auf der
              Stelle.
            </Typo.Paragraph>

            <Typo.H3>Das eigentliche Problem</Typo.H3>

            <Typo.Paragraph>
              Es geht nicht darum, dass der Innendienst zu langsam arbeitet. Die
              Leute sind gut. Das Problem ist der Prozess.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ein Mensch, der acht verschiedene Systeme bedienen muss, um ein
              Angebot zu schreiben, wird nie schneller sein als 30 Minuten. Der
              Engpass ist nicht der Mensch. Der Engpass ist der manuelle
              Prozess.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Und genau hier setzt automatische Angebotserstellung an.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* Section 2 */}
          <div>
            <Typo.H2 id="was-ist-automatische-angebotserstellung">
              Was ist automatische Angebotserstellung?
            </Typo.H2>

            <Typo.Paragraph>
              Kurz gesagt: Ein Workflow, der aus einer Kundenanfrage automatisch
              ein Angebot macht. Anfrage rein, Angebot raus.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Kein neues ERP. Kein halbjähriges IT-Projekt. Sondern ein
              KI-Workflow, der eure bestehenden Systeme verbindet:
              E-Mail-Postfach, ERP, Preislisten, Kundendaten. Die Systeme
              bleiben, nur der manuelle Prozess dazwischen fällt weg.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/ki-workflow-ueberblick.png"
              alt="Diagramm: Kundenanfrage → KI-Workflow → Fertiges Angebot — bestehende Systeme bleiben"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>Konkret passiert Folgendes:</Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Anfrage kommt rein</strong> — per E-Mail, Webformular,
                PDF, egal
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>KI liest und versteht</strong> die Anfrage: Welche
                Artikel, welche Mengen, welcher Kunde
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Preise und Verfügbarkeit</strong> werden automatisch aus
                eurem ERP gezogen — inklusive kundenspezifischer Konditionen,
                Staffelpreise, Rahmenverträge
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Angebot wird erstellt</strong> und entweder direkt
                versendet oder euch zur kurzen Freigabe vorgelegt
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Das war&apos;s. Der Innendienst-Mitarbeiter, der vorher 30 Minuten
              pro Angebot gebraucht hat, gibt jetzt nur noch eine Freigabe —
              oder das System schickt direkt raus.
            </Typo.Paragraph>

            <Typo.H3>Abgrenzung: Das ist kein CPQ-System</Typo.H3>

            <Typo.Paragraph>
              Wenn ihr &quot;automatische Angebotserstellung&quot; googelt,
              landet ihr schnell bei CPQ-Software (Configure, Price, Quote).
              Salesforce CPQ, SAP CPQ, Oracle CPQ. Enterprise-Tools mit
              Enterprise-Preisen und Enterprise-Implementierungszeiten.
            </Typo.Paragraph>

            <Typo.Paragraph>
              CPQ ist gebaut für <strong>konfigurierbare Produkte</strong>:
              Maschinen mit 200 Optionen, Anlagen mit Kompatibilitätsregeln.
              Wenn eine falsche Konfiguration bedeutet, dass eine Anlage nicht
              funktioniert, braucht ihr CPQ.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Im Großhandel sieht die Realität anders aus. Ihr habt einen
              Katalog mit 5.000 bis 500.000 Artikeln. Bekannte Produkte,
              bekannte Preise. Euer Problem ist nicht die Konfigurationstiefe,
              sondern die <strong>Geschwindigkeit</strong>, mit der Angebote
              rausgehen.
            </Typo.Paragraph>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200"></th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      CPQ
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      KI-Workflow
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Gebaut für</td>
                    <td className="px-4 py-3">
                      Konfigurierbare Produkte mit Varianten
                    </td>
                    <td className="px-4 py-3">
                      Standardkataloge mit festen Preisen
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Implementierung</td>
                    <td className="px-4 py-3">Monate, oft 6+</td>
                    <td className="px-4 py-3">Tage bis Wochen</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Kosten</td>
                    <td className="px-4 py-3">
                      Zehntausende bis Hunderttausende Euro
                    </td>
                    <td className="px-4 py-3">Ein Bruchteil davon</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Sinnvoll wenn</td>
                    <td className="px-4 py-3">
                      Falsche Konfiguration = teuer/gefährlich
                    </td>
                    <td className="px-4 py-3">
                      Langsame Antwortzeit = verlorene Aufträge
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>Merke:</strong> &quot;Don&apos;t buy a harbor when you
                need a speedboat.&quot;
              </p>
            </div>
          </div>

          <Separator />

          {/* Section 3 */}
          <div>
            <Typo.H2 id="der-ki-workflow">
              Der KI-Workflow Schritt für Schritt
            </Typo.H2>

            <Typo.Paragraph>
              Das Ganze lässt sich auf sechs Schritte herunterbrechen. Jeder
              einzelne davon ersetzt etwas, das heute ein Mensch manuell macht.
              Zusammen ergibt sich ein Ablauf, der in 30 Sekunden schafft, wofür
              euer Innendienst bisher eine halbe Stunde braucht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/sechs-schritte-pipeline.png"
              alt="6-Schritte-Pipeline: Anfrage empfangen, KI-Extraktion, Artikel-Matching, Preis & Verfügbarkeit, Angebot generieren, Versand"
              width={1200}
              height={800}
            />

            <Typo.H3 id="schritt-1-anfrage-empfangen">
              Schritt 1: Anfrage empfangen
            </Typo.H3>

            <Typo.Paragraph>
              Alles startet damit, dass eine Anfrage reinkommt. In den meisten
              Großhandelsunternehmen ist das eine E-Mail. Manchmal mit Freitext
              im Body, manchmal mit einer PDF im Anhang, manchmal beides.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der Workflow überwacht den Eingangskanal automatisch. Kommt eine
              neue Anfrage rein, startet der Prozess sofort. Kein Mensch muss
              ein Postfach öffnen, keine Anfrage bleibt liegen, weil gerade
              Mittagspause ist.
            </Typo.Paragraph>

            <Typo.H3 id="schritt-2-ki-liest">
              Schritt 2: KI liest und versteht die Anfrage
            </Typo.H3>

            <Typo.Paragraph>
              Hier passiert die eigentliche Magie. Ein Sprachmodell liest den
              Freitext der Anfrage und macht daraus strukturierte Daten: Welche
              Artikel will der Kunde? Welche Mengen? Gibt es einen
              Wunschliefertermin?
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das funktioniert auch dann, wenn der Kunde seine Anfrage so
              formuliert, wie echte Menschen das eben tun. Keine Artikelnummern,
              keine einheitlichen Formate, vielleicht sogar ein paar Tippfehler.
              Die KI versteht den Kontext und gibt ein sauberes JSON-Objekt
              zurück.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Falls ein PDF-Anhang dabei ist, wird der vorher per OCR in Text
              umgewandelt. Egal ob die Anfrage als E-Mail-Text, als PDF oder als
              beides kommt, das Ergebnis ist immer das gleiche: strukturierte
              Daten.
            </Typo.Paragraph>

            <Typo.H3 id="schritt-3-artikel-matching">
              Schritt 3: Artikel-Matching gegen ERP-Stammdaten
            </Typo.H3>

            <Typo.Paragraph>
              Die KI hat jetzt eine Liste von Artikelbezeichnungen, so wie der
              Kunde sie geschrieben hat. Nur stehen die im ERP natürlich anders
              drin. Der Kunde schreibt &quot;Bosch Akkuschrauber 18V&quot;, im
              ERP steht &quot;BOSCH GSR 18V-28 Professional&quot;.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Hier kommt ein mehrstufiges Matching zum Einsatz. Zuerst wird
              geprüft, ob der Kunde eine Artikelnummer genannt hat. Danach sucht
              das System per Fuzzy-Matching und semantischer Suche nach dem
              besten Treffer. Jeder Match bekommt einen Confidence-Score: Wie
              sicher ist sich das System?
            </Typo.Paragraph>

            <Typo.Paragraph>
              Bei hoher Sicherheit geht es automatisch weiter. Bei niedriger
              Sicherheit wird ein Mensch einbezogen, der den Vorschlag kurz
              bestätigt oder korrigiert.
            </Typo.Paragraph>

            <Typo.H3 id="schritt-4-preis-verfuegbarkeit">
              Schritt 4: Preis und Verfügbarkeit aus dem ERP holen
            </Typo.H3>

            <Typo.Paragraph>
              Der Workflow kennt jetzt die konkreten Artikelnummern und fragt
              beim ERP die relevanten Daten ab: Was kostet der Artikel für
              diesen Kunden? Staffelpreise, Rahmenverträge, Sonderkonditionen?
              Wie viel liegt auf Lager? Wann kann geliefert werden?
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das passiert per API-Abfrage an euer bestehendes System. Kein
              ERP-Wechsel nötig, keine neue Datenbank.
            </Typo.Paragraph>

            <Typo.H3 id="schritt-5-angebot-generieren">
              Schritt 5: Angebot generieren
            </Typo.H3>

            <Typo.Paragraph>
              Alle Informationen liegen vor: Kunde, Positionen, Preise,
              Verfügbarkeit, Liefertermin. Der Workflow baut daraus ein
              professionelles Angebot als PDF mit eurem Firmenlogo und euren
              Konditionen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das Template definiert ihr einmal, danach läuft es für jedes
              Angebot automatisch.
            </Typo.Paragraph>

            <Typo.H3 id="schritt-6-versand-freigabe">
              Schritt 6: Versand oder Freigabe
            </Typo.H3>

            <Typo.Paragraph>
              Das fertige Angebot geht raus. Entweder vollautomatisch per E-Mail
              an den Kunden, oder es wird einem Mitarbeiter zur Freigabe
              vorgelegt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Für Standardanfragen von bekannten Kunden kann das komplett ohne
              menschliches Zutun laufen. Bei Neukunden, hohen Beträgen oder
              unsicheren Matches greift ein Mitarbeiter ein, prüft kurz und gibt
              frei. Ein Klick, dann läuft der Rest automatisch.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* Section 4 */}
          <div>
            <Typo.H2 id="praxisbeispiel">
              Praxisbeispiel: Ein echter Workflow in der Tiefe
            </Typo.H2>

            <Typo.Paragraph>
              Die sechs Schritte klingen einfach. Sind sie im Kern auch. Aber
              ein produktives System muss mehr können als den Happy Path. Was
              passiert, wenn der Kunde &quot;das blaue Ding&quot; bestellt? Wenn
              ein Artikel nicht verfügbar ist? Wenn der Kunde &quot;einen
              Pool&quot; will und eigentlich Pool, Pumpe, Filter, Abdeckung und
              Leiter braucht?
            </Typo.Paragraph>

            <Typo.Paragraph>
              Wir haben den gesamten Workflow als n8n-System aufgebaut: ein
              Orchestrator-Workflow, der sechs spezialisierte Sub-Workflows
              steuert. Jeder Sub-Workflow löst eine abgegrenzte Aufgabe.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/workflow-full.png"
              alt="Gesamtarchitektur: Orchestrator-Workflow mit 6 spezialisierten Sub-Workflows für Extraktion, Matching, Produktlogik, Error Handling, Human Review und Follow-up"
              width={1200}
              height={800}
            />

            <Typo.H3 id="happy-path">
              Der Happy Path: Anfrage rein, Angebot raus in 30 Sekunden
            </Typo.H3>

            <Typo.Paragraph>
              Konkretes Szenario: Ein Bestandskunde schickt eine E-Mail mit 15
              Positionen. Das System erkennt den Kunden, extrahiert alle Artikel
              und Mengen, matched sie gegen die ERP-Stammdaten, holt
              kundenspezifische Preise und Verfügbarkeit, generiert ein
              PDF-Angebot und schickt es per E-Mail raus.
            </Typo.Paragraph>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>Dauer: 10 bis 22 Sekunden.</strong> Vorher: 45 Minuten.
              </p>
            </div>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/confidence.png"
              alt="n8n Workflow: IMAP Trigger → LLM Extractor → ERP Lookup → Preiskalkulation → PDF-Generierung → E-Mail-Versand"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              Der Workflow besteht aus sechs Nodes:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>IMAP Trigger</strong> — überwacht das Postfach, neue
                Anfrage startet den Workflow
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Information Extractor</strong> — ein Sprachmodell mit
                strukturiertem Output-Schema, das Artikel, Mengen, Einheiten und
                Kundendaten aus dem Freitext zieht
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>ERP Lookup</strong> — HTTP-Request an die ERP-API für
                Artikelstammdaten, kundenspezifische Preise und Lagerbestand
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Preiskalkulation</strong> — Code-Node berechnet
                Positionspreise, Netto, MwSt, Brutto und generiert eine
                Angebotsnummer
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>PDF-Generierung</strong> — Daten gehen an ein Template
                (CraftMyPDF oder HTML-to-PDF), zurück kommt die Download-URL
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>E-Mail-Versand</strong> — personalisiertes Anschreiben
                mit PDF-Anhang an den Kunden
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3 id="artikel-erkennung">
              Artikel-Erkennung: Wenn der Kunde &quot;das blaue Ding&quot;
              schreibt
            </Typo.H3>

            <Typo.Paragraph>
              Der schwierigste Schritt im ganzen Prozess. Kunden schreiben nicht
              in Artikelnummern. Sie schreiben &quot;Kabelbinder schwarz&quot;,
              meinen aber &quot;Kabelbinder PA6.6 3,6x200 sw&quot;. Oder sie
              schreiben &quot;Tyraps&quot;, was im ERP nirgends vorkommt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die Lösung ist eine vierstufige Pipeline:
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/config-checker.png"
              alt="4-Stage Matching Pipeline: Exact Match → Fuzzy Match → Semantic Search → LLM Reranking mit Confidence-Routing"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              <strong>Stufe 1: Exakter Match.</strong> Hat der Kunde eine
              Artikelnummer genannt? Dann direkt im ERP nachschlagen. Trivial.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Stufe 2: Fuzzy Matching.</strong> Levenshtein-Distanz und
              Trigram-Ähnlichkeit gegen die Artikelbezeichnungen. Findet
              &quot;Bosch GSR 18V&quot; auch wenn der Kunde &quot;Bosch
              Akkuschrauber 18V&quot; geschrieben hat.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Stufe 3: Semantische Suche.</strong> Vector Embeddings
              über eine Datenbank wie Qdrant. Findet Zusammenhänge, die reine
              Textähnlichkeit nicht sieht. &quot;Kabelbinder&quot; findet
              &quot;Tyraps&quot; und &quot;Bündelband&quot;.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Stufe 4: LLM Reranking.</strong> Wenn mehrere Kandidaten
              übrig bleiben, bewertet ein Sprachmodell die Ergebnisse im Kontext
              der Kundenanfrage und wählt den besten Treffer.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Jeder Match bekommt einen Confidence-Score:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Über 90 %</strong> — automatisch übernehmen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>60 bis 90 %</strong> — Vorschlag an Innendienst zur
                Bestätigung
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Unter 60 %</strong> — Rückfrage an den Kunden
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Das System lernt: Jede bestätigte Zuordnung wird gespeichert und
              verbessert zukünftige Matches. Nach 3 bis 6 Monaten liegt die
              Vollautomatisierungsquote typischerweise bei 90 bis 95 Prozent.
            </Typo.Paragraph>

            <Typo.H3 id="produktlogik">
              Produktlogik: Wenn der Kunde &quot;einen Pool&quot; bestellt
            </Typo.H3>

            <Typo.Paragraph>
              Hier wird es richtig spannend. Der einfache Fall — Kunde nennt
              Artikel, System schickt Preis — ist der Normalfall. Aber die
              Anfragen, die den Unterschied machen, sehen anders aus.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Kunde schreibt: &quot;Wir brauchen einen Pool für den
              Außenbereich, ca. 4x8m.&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das ist kein Artikel. Das ist ein Bedürfnis. Ein gutes Angebot
              enthält:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>Pool (Modell passend zur Größe)</Typo.ListItem>
              <Typo.ListItem>
                Pumpe (passend zur Poolgröße, mindestens 12m³/h für 32m³
                Volumen)
              </Typo.ListItem>
              <Typo.ListItem>Filteranlage</Typo.ListItem>
              <Typo.ListItem>
                Abdeckung (Außenbereich = Winterabdeckung vorschlagen)
              </Typo.ListItem>
              <Typo.ListItem>Leiter</Typo.ListItem>
              <Typo.ListItem>Verrohrung</Typo.ListItem>
              <Typo.ListItem>
                Optional: Heizung, Beleuchtung, Gegenstromanlage
              </Typo.ListItem>
            </Typo.List>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/config-builder.png"
              alt="Produktlogik Sub-Workflow: Artikel-Input → Maße berechnen → ERP Stücklisten → Rule Engine → KI Kontextvorschläge"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              Das System löst das über Produktbeziehungen:
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Pflicht-Zubehör:</strong> Pool braucht Pumpe. Ohne geht es
              nicht. System ergänzt automatisch.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Kontextabhängig:</strong> &quot;Außenbereich&quot; →
              Winterabdeckung vorschlagen. &quot;Innenbereich&quot; → nicht
              nötig. Die KI erkennt den Kontext aus dem Anfragetext.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Größenabhängig:</strong> Poolgröße 4x8m = 32m³ → Pumpe
              mindestens 12m³/h, Filter passend dimensioniert. Wird aus
              Regeltabellen berechnet.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Optional (Cross-Sell):</strong> Heizung, Beleuchtung.
              Werden als optionale Positionen angeboten, mit separater Summe.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das Ergebnis ist ein Angebot mit 8 bis 12 Positionen statt einer.
              Pflicht-Positionen als Hauptangebot, optionale als Zusatz. Mit
              Gesamtsumme und Alternativsumme.
            </Typo.Paragraph>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>Warum das den Unterschied macht:</strong> Kunde bekommt
                ein vollständiges Angebot statt nur &quot;Pool: 3.200 €&quot;.
                Weniger Rückfragen, höherer Warenkorbwert, und ein klares
                Kompetenz-Signal: &quot;Die wissen was ich brauche.&quot;
              </p>
            </div>

            <Typo.Paragraph>
              Das funktioniert genauso in anderen Branchen: Elektrogroßhandel
              (Schaltschrank → Sicherungen, Klemmen, Verdrahtung), Sanitär
              (Waschtisch → Armatur, Siphon, Anschlussset), Baustoffe
              (Dachsanierung → Ziegel, Lattung, Dampfsperre).
            </Typo.Paragraph>

            <Typo.H3 id="edge-cases">
              Edge Cases: Was passiert, wenn es nicht glatt läuft?
            </Typo.H3>

            <Typo.Paragraph>
              Genau das unterscheidet ein Demoprojekt von einem produktiven
              System.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Artikel nicht verfügbar:</strong> Lagerbestand = 0. System
              fragt Lieferzeit beim Lieferanten ab, schlägt Alternative vor oder
              bietet Teillieferung an: &quot;150x sofort, 50x in KW 15.&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Unvollständige Anfrage:</strong> Menge fehlt. System
              schickt automatische Rückfrage: &quot;Welche Menge benötigen Sie
              für Artikel X?&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>PDF-Anhang statt E-Mail-Text:</strong> OCR extrahiert den
              Text, KI verarbeitet ihn genauso. Funktioniert auch bei gescannten
              Dokumenten.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Deutsche Zahlenformate:</strong> 1.234,56 vs 1,234.56. Ein
              echter Praxisfehler, der Bestellungen um Faktor 1.000 verfälschen
              kann. Das System erkennt das Format automatisch.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>ERP nicht erreichbar:</strong> Retry mit Exponential
              Backoff (3 Versuche). Wenn es trotzdem nicht geht: Anfrage in die
              Warteschlange, Kunde bekommt Eingangsbestätigung, IT wird
              benachrichtigt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>KI gibt unplausibles Ergebnis:</strong>{" "}
              Plausibilitäts-Checks vor und nach der ERP-Abfrage. Menge &gt;
              10.000? Preis = 0? Liefertermin in der Vergangenheit? Alles wird
              abgefangen.
            </Typo.Paragraph>

            <Typo.H3 id="human-in-the-loop">
              Human-in-the-Loop: Wann greift der Mensch ein?
            </Typo.H3>

            <Typo.Paragraph>
              Automatisierung heißt nicht &quot;Mensch abschaffen&quot;. Es
              heißt: Mensch entscheidet nur noch wo es zählt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/human-in-the-loop.png"
              alt="Human-in-the-Loop Workflow: Eskalations-Check, Slack/Teams Notification mit Approve/Edit/Reject, Timeout-Kaskade"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              <strong>Wann wird eskaliert?</strong>
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                Confidence-Score unter 90 % (Artikel-Matching)
              </Typo.ListItem>
              <Typo.ListItem>Angebotswert über 10.000 €</Typo.ListItem>
              <Typo.ListItem>Neukunde (erster Auftrag)</Typo.ListItem>
              <Typo.ListItem>
                Sonderkonditionen außerhalb der Preismatrix
              </Typo.ListItem>
              <Typo.ListItem>Reklamationskunde (Flag im CRM)</Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              <strong>Wie sieht die Freigabe aus?</strong> Der Mitarbeiter
              bekommt eine Benachrichtigung per Slack, Teams oder E-Mail. Darin:
              Kunde, Positionen, Preise, und warum die KI unsicher war. Drei
              Optionen: Freigeben (ein Klick), Korrigieren (Positionen
              anpassen), Ablehnen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Timeout:</strong> Wenn nach 2 Stunden keine Reaktion
              kommt, geht eine Erinnerung raus. Nach 4 Stunden an den
              Backup-Approver. Nach 8 Stunden an die nächste Ebene. Nichts
              bleibt hängen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Das System wird besser:</strong> Jede menschliche
              Korrektur fließt zurück. Am Anfang liegt die Review-Rate bei etwa
              80 %. Nach 3 Monaten bei 20 bis 30 %. Nach 6 Monaten bei 10 bis 15
              %. Plus 5 % Stichproben zur Qualitätssicherung.
            </Typo.Paragraph>

            <Typo.H3 id="follow-up">
              Automatische Kundenantwort und Follow-up
            </Typo.H3>

            <Typo.Paragraph>
              Der Workflow endet nicht beim Versand des Angebots.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Sofort:</strong> Eingangsbestätigung an den Kunden
              (&quot;Wir haben eure Anfrage erhalten, Angebot folgt in
              Kürze&quot;). Dann das Angebot mit persönlicher Ansprache und PDF.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Tag 3:</strong> &quot;Habt ihr unser Angebot erhalten?
              Fragen dazu?&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Tag 7:</strong> &quot;Sollen wir die Konditionen nochmal
              besprechen?&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Tag 14:</strong> Letzter Touchpoint, dann archivieren.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/feedback.png"
              alt="Follow-up System: 5 vernetzte Workflows für Versand, Follow-up-Sequenz, Antwort-Erkennung, Tracking und Win-back"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              Jeder Follow-up wird sofort gestoppt, sobald der Kunde antwortet.
              Antwortet der Kunde mit einer Zusage, startet automatisch der
              Auftrags-Workflow. Bei Rückfragen wird der Vertrieb
              benachrichtigt. Bei Absage wird der Grund erfasst und fließt ins
              CRM.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* Section 5 */}
          <div>
            <Typo.H2 id="schnittstellen">
              Schnittstellen: Was wird angebunden?
            </Typo.H2>

            <Typo.Paragraph>
              &quot;Klingt ja alles gut, aber wir haben SAP Business One und das
              ist von 2014. Geht das trotzdem?&quot;
            </Typo.Paragraph>

            <Typo.Paragraph>Ja. Geht.</Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/architektur-kanaele.png"
              alt="Architekturdiagramm: Eingangskanäle (E-Mail, Telefon, WhatsApp, Webshop, Fax, EDI) → n8n Core-Systeme (ERP, CRM) → Ausgangskanäle (PDF, WhatsApp, Kundenportal)"
              width={1200}
              height={800}
            />

            <Typo.H3>Eingangskanäle: Wo kommen die Anfragen her?</Typo.H3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Kanal
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Anteil
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">E-Mail</td>
                    <td className="px-4 py-3">30–40 %</td>
                    <td className="px-4 py-3">stabil</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Telefon / Außendienst</td>
                    <td className="px-4 py-3">20–30 %</td>
                    <td className="px-4 py-3">rückläufig</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">EDI</td>
                    <td className="px-4 py-3">15–25 %</td>
                    <td className="px-4 py-3">stabil bei Großkunden</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Webshop / Online-Portal</td>
                    <td className="px-4 py-3">10–20 %</td>
                    <td className="px-4 py-3">stark wachsend</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Fax</td>
                    <td className="px-4 py-3">5–10 %</td>
                    <td className="px-4 py-3">rückläufig, aber hartnäckig</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.Paragraph>
              <strong>E-Mail</strong> ist der größte Hebel. IMAP-Trigger in n8n,
              Outlook, Gmail, jeder IMAP-fähige Server. Die meisten starten
              hier.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Telefon</strong> ist kein Hindernis mehr.
              Speech-to-Text-Services transkribieren Gespräche in Echtzeit, für
              unter 0,50 Cent pro Minute. Die Transkription wird ab da wie eine
              E-Mail verarbeitet.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>WhatsApp</strong> hat noch unter 5 % Marktanteil, aber{" "}
              <strong>98 % Öffnungsrate</strong>. Zum Vergleich: E-Mails liegen
              bei 20 bis 30 %.
            </Typo.Paragraph>

            <Typo.H3>Core-Systeme: Wo liegen die Daten?</Typo.H3>

            <Typo.Paragraph>
              <strong>SAP Business One / S/4HANA:</strong> Service Layer API auf
              OData-Basis. Für n8n gibt es einen dedizierten SAP-Connector.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Microsoft Dynamics 365:</strong> REST API v2.0 auf OData
              v4 Standard. OAuth 2.0, vollständige CRUD-Operationen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Sage (100 / 200 / X3):</strong> Sage 200 und X3 haben
              REST-APIs. Sage 100 braucht eine Middleware-Schicht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Legacy-Systeme ohne API?</strong> Auch das geht:
            </Typo.Paragraph>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Methode
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Wann sinnvoll
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Datenbank-Direktzugriff (JDBC/ODBC)
                    </td>
                    <td className="px-4 py-3">
                      Schnellste Variante, wenn der DBA mitmacht
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Datei-basiert (CSV/XML-Export)
                    </td>
                    <td className="px-4 py-3">
                      Bewährt, kein Eingriff ins System nötig
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">RPA / Screen Scraping</td>
                    <td className="px-4 py-3">
                      Wenn es keinen anderen Weg gibt
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Change Data Capture</td>
                    <td className="px-4 py-3">Für nahezu Echtzeit ohne API</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.H3>Ausgangskanäle</Typo.H3>

            <Typo.Paragraph>
              <strong>E-Mail mit PDF</strong> ist der Standard.
              Template-basierte PDF-Generierung, Versand über SMTP oder
              SendGrid.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>WhatsApp</strong> für maximale Öffnungsrate.{" "}
              <strong>Kundenportal</strong> für Self-Service (30 % weniger
              Support-Tickets, 40 % höhere Nachbestellrate).{" "}
              <strong>Telefon-Rückruf per TTS</strong> für persönlichen Touch
              bei wichtigen Kunden.
            </Typo.Paragraph>

            <Typo.H3>Fazit: Es geht mit dem, was da ist</Typo.H3>

            <Typo.List>
              <Typo.ListItem>E-Mail? IMAP reicht.</Typo.ListItem>
              <Typo.ListItem>SAP? API ist da.</Typo.ListItem>
              <Typo.ListItem>
                Sage 100 ohne API? Datenbank-Zugriff oder CSV-Export.
              </Typo.ListItem>
              <Typo.ListItem>
                Telefon? Speech-to-Text für unter einen Cent pro Minute.
              </Typo.ListItem>
              <Typo.ListItem>Fax? Fax-to-Mail plus OCR.</Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Der Workflow passt sich an die Systemlandschaft an, nicht
              umgekehrt.
            </Typo.Paragraph>
          </div>

          <Separator />

          {/* Section 6 */}
          <div>
            <Typo.H2 id="implementation-guide">
              Implementation Guide: So startet ihr
            </Typo.H2>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/implementation-timeline.png"
              alt="Implementation Timeline: PoC (1-2 Wochen), Produktiv-Setup (2-4 Wochen), Skalierung (laufend)"
              width={1200}
              height={800}
            />

            <Typo.H3>Phase 1: Proof of Concept (1-2 Wochen)</Typo.H3>

            <Typo.Paragraph>
              Ziel: Das System erstellt das erste Angebot automatisch.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Einen Kanal anbinden</strong> — E-Mail reicht
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Top-100 Artikel vorbereiten</strong> — die Produkte, die
                in 80 % eurer Anfragen vorkommen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Einfacher Workflow ohne Edge Cases</strong> — Happy Path
                only
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>10 Testkunden</strong> — echte Anfragen, aber nur intern
                prüfen
              </Typo.ListItem>
            </Typo.List>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>Wichtig:</strong> Plant 30-40 % der Zeit für
                Datenvorbereitung ein. Artikelstammdaten im ERP sind fast nie so
                sauber, wie man denkt.
              </p>
            </div>

            <Typo.H3>Phase 2: Produktiv-Setup (2-4 Wochen)</Typo.H3>

            <Typo.Paragraph>
              Ziel: Der Workflow läuft im Parallelbetrieb.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>Alle Artikelstammdaten anbinden</Typo.ListItem>
              <Typo.ListItem>
                Kundenspezifische Preise integrieren
              </Typo.ListItem>
              <Typo.ListItem>Human-in-the-Loop einbauen</Typo.ListItem>
              <Typo.ListItem>Error Handling und Monitoring</Typo.ListItem>
              <Typo.ListItem>
                Ein Innendienst-Team pilotiert im Parallelbetrieb
              </Typo.ListItem>
            </Typo.List>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-sm font-medium">
                <strong>Tipp:</strong> Holt 1-2 technikaffine Leute aus dem
                Innendienst als Champions ins Boot.
              </p>
            </div>

            <Typo.H3>Phase 3: Skalierung (laufend)</Typo.H3>

            <Typo.List>
              <Typo.ListItem>
                Weitere Kanäle anbinden (Voice, Webshop, API)
              </Typo.ListItem>
              <Typo.ListItem>
                Follow-up Automatisierung aktivieren
              </Typo.ListItem>
              <Typo.ListItem>
                Produktlogik erweitern (Cross-Sell, Bundles)
              </Typo.ListItem>
              <Typo.ListItem>KPIs tracken</Typo.ListItem>
              <Typo.ListItem>
                Lerneffekte nutzen — das Matching wird mit jeder Woche besser
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Die ROI-Rechnung</Typo.H3>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200"></th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Manuell
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Automatisiert
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Zeit pro Angebot</td>
                    <td className="px-4 py-3">45 Minuten</td>
                    <td className="px-4 py-3">unter 2 Minuten</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">
                      Kosten pro Angebot
                    </td>
                    <td className="px-4 py-3">~26 €</td>
                    <td className="px-4 py-3">~1 €</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Fehlerquote</td>
                    <td className="px-4 py-3">5-10 %</td>
                    <td className="px-4 py-3">unter 2 %</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium">Reaktionszeit</td>
                    <td className="px-4 py-3">Stunden bis Tage</td>
                    <td className="px-4 py-3">Minuten</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.Paragraph>
              <strong>Rechenbeispiel (40 Angebote/Woche):</strong>
            </Typo.Paragraph>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full text-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Position
                    </th>
                    <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">
                      Betrag
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Zeitaufwand manuell: 40 x 45 min = 30 h/Woche
                    </td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Kosten bei 35 €/h (fully loaded)
                    </td>
                    <td className="px-4 py-3 font-medium">1.050 €/Woche</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">Kosten pro Jahr</td>
                    <td className="px-4 py-3 font-medium">54.600 €</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3">
                      Einsparung bei 70 % Automatisierung
                    </td>
                    <td className="px-4 py-3 font-medium">~38.200 €/Jahr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Typo.Paragraph>
              Dazu kommt, was sich nicht direkt in Euro messen lässt: Wenn eure
              Angebote in Minuten statt Stunden rausgehen, gewinnt ihr Aufträge,
              die vorher beim Wettbewerb gelandet wären. Unternehmen mit
              schnellen Reaktionszeiten berichten von bis zu{" "}
              <strong>35 % höheren Win Rates</strong>.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/automatische-angebotserstellung-grosshandel/dashboard-kpi-ergebnisse.png"
              alt="Dashboard-Mockup: Quote Cycle Time 45min → 2min, Fehlerrate 10% → 2%, Win Rate +35%, Angebote/Tag 3× mehr"
              width={1200}
              height={800}
            />
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="das-problem">
            Das Problem: Manuelle Angebote
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-ist-automatische-angebotserstellung">
            Was ist automatische Angebotserstellung?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="der-ki-workflow">
            Der KI-Workflow Schritt für Schritt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationSubItem idLink="schritt-1-anfrage-empfangen">
            Anfrage empfangen
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="schritt-2-ki-liest">
            KI liest die Anfrage
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="schritt-3-artikel-matching">
            Artikel-Matching
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="schritt-4-preis-verfuegbarkeit">
            Preis und Verfügbarkeit
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="schritt-5-angebot-generieren">
            Angebot generieren
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="schritt-6-versand-freigabe">
            Versand oder Freigabe
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationItem idLink="praxisbeispiel">
            Praxisbeispiel: Echter Workflow
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationSubItem idLink="happy-path">
            Happy Path
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="artikel-erkennung">
            Artikel-Erkennung
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="produktlogik">
            Produktlogik
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="edge-cases">
            Edge Cases
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="human-in-the-loop">
            Human-in-the-Loop
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationSubItem idLink="follow-up">
            Kundenantwort &amp; Follow-up
          </BlogLayout.NavigationSubItem>
          <BlogLayout.NavigationItem idLink="schnittstellen">
            Schnittstellen: Was wird angebunden?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="implementation-guide">
            Implementation Guide
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
