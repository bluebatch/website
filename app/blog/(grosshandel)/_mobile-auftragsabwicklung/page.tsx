import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "mobile-auftragsabwicklung",
  author: "Max Hänsel",
  date: "2026-07-17",
  image: "/blog/mobile-auftragsabwicklung/hero.png",
  tags: ["grosshandel", "automatisierung", "ki"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Mobile Auftragsabwicklung im Großhandel: Außendienst, Theke, Lager | Bluebatch",
  description:
    "Wie Großhändler Aufträge dort erfassen, wo sie entstehen: per App im Außendienst, an der Theke und im Lager. Offline-Sync, ERP-Anbindung und drei Wege zur Einführung im Vergleich.",
  openGraph: {
    title:
      "Mobile Auftragsabwicklung im Großhandel: Außendienst, Theke, Lager",
    description:
      "Aufträge per App direkt am Ort des Geschehens erfassen statt im Innendienst abtippen: Offline-Sync, Echtzeit-Anbindung ans ERP und drei Wege zur mobilen Auftragserfassung.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/mobile-auftragsabwicklung/hero.png",
        width: 1200,
        height: 630,
        alt: "Außendienstmitarbeiter eines Großhändlers erfasst beim Kunden an der Theke eine Bestellung auf dem Tablet",
      },
    ],
  },
  alternates: {
    canonical: "/blog/mobile-auftragsabwicklung",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Mobile Auftragsabwicklung im Großhandel: Aufträge erfassen, wo sie
          entstehen
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-17">17. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/mobile-auftragsabwicklung/hero.png"
          alt="Außendienstmitarbeiter eines deutschen Großhändlers steht an der Theke eines Kunden und erfasst eine Bestellung auf dem Tablet"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Die meisten Texte zur Auftragsabwicklung im Großhandel spielen am
              Schreibtisch: Eine Bestellung kommt per Mail oder PDF herein und
              wird im Innendienst ins ERP übertragen. Das ist die halbe
              Wahrheit. Ein großer Teil der Aufträge entsteht gar nicht im Büro,
              sondern unterwegs. Der Außendienst nimmt sie beim Kunden auf, an
              der Abholtheke werden sie spontan ergänzt, im Lager entstehen sie
              bei der Kommissionierung und am Wareneingang. Überall dort wird
              heute noch oft auf Papier oder in den Notizen eines Smartphones
              festgehalten, was später jemand am Schreibtisch noch einmal
              eintippt. Genau diese Doppelarbeit ist der teure Bruch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Mobile Auftragsabwicklung schließt diesen Bruch. Sie verlagert die
              Erfassung an den Ort, an dem der Auftrag wirklich entsteht, auf
              ein Tablet, ein Smartphone oder einen Handscanner, und schreibt
              ihn direkt und geprüft in die Warenwirtschaft. Dieser Beitrag
              zeigt, an welchen Orten das im Großhandel passiert, warum
              Offline-Fähigkeit und die saubere ERP-Anbindung über Erfolg oder
              Frust entscheiden, und welche drei Wege zur Einführung sich in der
              Praxis bewährt haben. Wie die Auftragsabwicklung im Innendienst
              davor funktioniert, beschreibt der Beitrag zur{" "}
              <Link href="/blog/auftragsabwicklung-grosshandel">
                Auftragsabwicklung im Großhandel
              </Link>
              , dieser Text setzt eine Ebene davor an: in der Fläche.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-bedeutet">
              Was mobile Auftragsabwicklung im Großhandel bedeutet
            </Typo.H2>
            <Typo.Paragraph>
              Mobile Auftragsabwicklung heißt nicht, dass jemand die ERP-Maske
              auf dem Handy aufruft. Es bedeutet, dass die Person, die den
              Auftrag entgegennimmt oder auslöst, ihn direkt am Gerät erfasst,
              mit Zugriff auf Bestand, Kundenpreise und Verfügbarkeit, und ohne
              Zettel-Zwischenschritt. Der Unterschied zur klassischen Abwicklung
              im Innendienst ist nicht das Werkzeug, sondern der Ort und der
              Zeitpunkt. Statt einer Bestellung, die irgendwo aufgeschrieben und
              Stunden später abgetippt wird, entsteht ein strukturierter,
              validierter Auftrag in dem Moment, in dem das Gespräch oder der
              Vorgang stattfindet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Daraus ergeben sich drei Vorteile, die im Großhandel unmittelbar
              auf die Marge wirken. Erstens entfällt die doppelte Erfassung und
              damit eine ganze Fehlerquelle: Tippfehler, vertauschte
              Artikelnummern, falsche Mengen. Zweitens sieht die erfassende
              Person sofort den echten Bestand und den richtigen Kundenpreis,
              verspricht also nichts, was nicht lieferbar ist, und gibt keine
              veralteten Konditionen weiter. Drittens steht der Auftrag früher
              im System, was die Kommissionierung und die Tourenplanung nach
              vorne zieht. Der Hebel ist nicht die schicke App, sondern die
              eingesparte Schleife zwischen Erfassung und ERP.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="drei-orte">
              Drei Orte, an denen im Großhandel mobil erfasst wird
            </Typo.H2>
            <Typo.Paragraph>
              Mobile Auftragsabwicklung ist kein einzelner Anwendungsfall,
              sondern ein Bündel. Im Alltag eines Großhändlers gibt es drei
              typische Orte, an denen sich die Erfassung am Gerät lohnt, und
              jeder hat seine eigenen Anforderungen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/mobile-auftragsabwicklung/erfassungsorte.png"
              alt="Drei Konzept-Cards mit den Orten der mobilen Auftragserfassung im Großhandel: Außendienst beim Kunden, Theke und Abholung, Lager und Wareneingang"
              width={1200}
              height={700}
            />

            <Typo.H3>1. Außendienst beim Kunden</Typo.H3>
            <Typo.Paragraph>
              Der Vertreter sitzt beim Kunden, bespricht den Bedarf und legt die
              Bestellung direkt auf dem Tablet an. Wichtig ist hier der Zugriff
              auf die individuelle Preisliste des Kunden, die letzten
              Bestellungen als Vorlage und der aktuelle Bestand. So wird aus dem
              Besuch ein fertiger Auftrag, nicht eine handschriftliche Liste,
              die abends ins Hotel mitkommt. Da beim Kunden selten verlässliches
              WLAN oder Mobilfunk anliegt, muss die Erfassung auch ohne
              Verbindung funktionieren.
            </Typo.Paragraph>

            <Typo.H3>2. Theke und Abholung</Typo.H3>
            <Typo.Paragraph>
              An der Abholtheke, im Cash-and-Carry-Bereich oder am Tresen des
              technischen Großhandels entstehen viele kleine, schnelle Aufträge.
              Hier zählt Tempo: Artikel scannen, Menge erfassen, Kunde
              zuordnen, fertig. Eine mobile Erfassung am Handscanner oder
              Tablet ersetzt den Laufweg zum festen Terminal und hält die
              Schlange kurz. Spontane Ergänzungen, der berühmte Griff ins Regal
              noch dazu, landen sofort auf demselben Auftrag.
            </Typo.Paragraph>

            <Typo.H3>3. Lager, Kommissionierung und Wareneingang</Typo.H3>
            <Typo.Paragraph>
              Im Lager wird mobil weniger neu bestellt als bestätigt und
              korrigiert: Kommissionierung per Pick-Liste auf dem Handscanner,
              Mengenkorrekturen bei Fehlbeständen, Erfassung am Wareneingang.
              Auch das gehört zur Auftragsabwicklung, weil hier entschieden
              wird, was tatsächlich rausgeht und was nachbestellt werden muss.
              Wie eng das mit der Bestandsführung verzahnt ist, zeigt der
              Beitrag zum{" "}
              <Link href="/blog/warenwirtschaftssystem-grosshandel">
                Warenwirtschaftssystem für den Großhandel
              </Link>
              .
            </Typo.Paragraph>

            <BlogImage
              src="/blog/mobile-auftragsabwicklung/kommissionierung-mobil.png"
              alt="Lagermitarbeiter mit Warnweste bestätigt eine Kommissionierung mit dem Handscanner in der Gasse eines Großhandelslagers"
              width={1200}
              height={700}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="offline-sync">
              Echtzeit und Offline-Sync: der technische Kern
            </Typo.H2>
            <Typo.Paragraph>
              Die wichtigste technische Frage bei der mobilen Auftragsabwicklung
              ist nicht das Aussehen der App, sondern was passiert, wenn keine
              Verbindung da ist. In der Lagergasse zwischen hohen Regalen, im
              Keller eines Kunden oder in der ländlichen Fläche gibt es immer
              wieder Funklöcher. Eine App, die offline nicht erfasst, ist im
              Großhandel unbrauchbar. Der Standard ist deshalb offline-first:
              Die Erfassung läuft lokal auf dem Gerät weiter, der Auftrag wird
              zwischengespeichert, und sobald die Verbindung zurück ist,
              synchronisiert er sich automatisch mit dem ERP.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/mobile-auftragsabwicklung/offline-sync.png"
              alt="Fünf-Schritt-Pipeline der Offline-Erfassung: Erfassung am Gerät, lokaler Zwischenspeicher, Verbindung wieder da, Abgleich und Konfliktprüfung, Auftrag im ERP"
              width={1200}
              height={600}
            />

            <Typo.Paragraph>
              Der heikle Punkt ist der Abgleich. Wenn ein Auftrag offline
              entstanden ist, kann sich in der Zwischenzeit der Bestand geändert
              haben, weil ein Kollege denselben Artikel verkauft hat. Eine gute
              Lösung erkennt solche Konflikte beim Sync und meldet sie zurück,
              statt stillschweigend zu überschreiben. Genauso muss sie mit
              doppelten Übertragungen umgehen, etwa wenn das Gerät mitten im
              Hochladen die Verbindung verliert: Ein Auftrag darf nur einmal im
              ERP landen, nicht zweimal. Diese beiden Mechanismen, saubere
              Konflikterkennung und Schutz vor Doubletten, trennen ein
              belastbares System von einer netten Demo.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="erp-anbindung">
              Die Anbindung an Warenwirtschaft und ERP
            </Typo.H2>
            <Typo.Paragraph>
              Eine mobile Erfassung ist nur so gut wie ihre Verbindung zum
              führenden System. Die App selbst hält keine Wahrheit vor, sie
              spiegelt das ERP und schreibt dorthin zurück. Drei Datenflüsse
              müssen dabei in Echtzeit oder nahezu in Echtzeit laufen: der
              aktuelle Bestand, damit niemand Nichtlieferbares verspricht, die
              kundenindividuellen Preise und Konditionen, damit keine veralteten
              Rabatte herausgehen, und das Anlegen des fertigen Auftrags im ERP,
              damit Kommissionierung und Fakturierung anschließen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/mobile-auftragsabwicklung/mobile-architektur.png"
              alt="Architektur der mobilen Auftragserfassung: Tablet, Handheld und Smartphone laufen über eine Middleware in die Warenwirtschaft mit Echtzeit-Bestand, Kundenpreisen und Auftragsanlage"
              width={1200}
              height={800}
            />

            <Typo.Paragraph>
              In der Praxis sitzt zwischen den Geräten und dem ERP fast immer
              eine Schnittstellen- oder Middleware-Schicht. Sie übersetzt
              zwischen der App und der ERP-Logik, puffert Lastspitzen ab und
              kapselt die Eigenheiten des jeweiligen Warenwirtschaftssystems.
              Wer die mobile Erfassung nicht als isolierte Insel-App, sondern
              als Teil der bestehenden Systemlandschaft plant, vermeidet das
              klassische Datensilo. Wie sich solche Übergaben zwischen Systemen
              sauber automatisieren lassen, vertieft der Beitrag zu{" "}
              <Link href="/blog/erp-workflows-automatisieren">
                ERP-Workflows automatisieren
              </Link>
              . Der Maßstab ist immer: Die mobile Erfassung darf keine zweite
              Wahrheit erzeugen, sie muss in die eine Wahrheit des ERP
              einzahlen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="drei-wege">
              Drei Wege zur mobilen Auftragserfassung
            </Typo.H2>
            <Typo.Paragraph>
              Für den Weg dorthin gibt es im Großhandel drei gängige Optionen,
              die sich in Aufwand, Flexibilität und Integrationstiefe
              unterscheiden. Welche passt, hängt vom ERP, von der Vielfalt der
              Sonderfälle und davon ab, wie viel Standard das Haus verträgt.
            </Typo.Paragraph>

            <Typo.H3>1. Die Außendienst-App des ERP-Herstellers</Typo.H3>
            <Typo.Paragraph>
              Viele Warenwirtschaftssysteme bringen eine eigene mobile App oder
              ein Außendienst-Modul mit. Der Vorteil liegt in der nahtlosen
              Integration, weil Bestand und Preise aus demselben Haus kommen.
              Der Nachteil: Man ist an den Funktionsumfang und das Tempo des
              Herstellers gebunden, und für Sonderfälle abseits des Standards
              ist oft wenig Spielraum.
            </Typo.Paragraph>

            <Typo.H3>2. Die App eines B2B-Shops</Typo.H3>
            <Typo.Paragraph>
              Wer ohnehin einen B2B-Shop betreibt, kann dessen mobile
              Bestellfunktion auch für den Außendienst nutzen. Das ist
              charmant, weil Kunde und Vertreter dieselbe Oberfläche sehen, und
              günstig, wenn der Shop schon steht. Grenzen zeigen sich bei der
              Offline-Fähigkeit und bei sehr spezifischen
              Auftragslogiken, die ein Shop nicht abbildet.
            </Typo.Paragraph>

            <Typo.H3>3. Der eigene Workflow mit App und KI-Layer</Typo.H3>
            <Typo.Paragraph>
              Die flexibelste Variante ist eine schlanke App, die über einen
              Automatisierungs-Layer an das ERP angebunden wird. Hier lassen
              sich Sonderfälle abbilden, die kein Standardprodukt kennt, etwa
              eine besondere Freigabelogik oder die Verknüpfung mit anderen
              Kanälen. Mit einer Plattform wie n8n als Orchestrierung und einem
              optionalen KI-Schritt, der unstrukturierte Eingaben strukturiert,
              entsteht eine Lösung, die genau auf das Haus zugeschnitten ist.
              Wie ein automatischer Bestelleingang grundsätzlich funktioniert,
              zeigt der Beitrag zum{" "}
              <Link href="/blog/bestellungen-erfassen-automatisieren">
                automatisierten Erfassen von Bestellungen
              </Link>
              .
            </Typo.Paragraph>

            <BlogImage
              src="/blog/mobile-auftragsabwicklung/wege-vergleich.png"
              alt="Vergleichsmatrix der drei Wege zur mobilen Auftragserfassung im Großhandel nach Einführungsaufwand, Offline-Fähigkeit, Flexibilität und ERP-Anbindung"
              width={1200}
              height={800}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                  <DataTable.HeaderCell>ERP-Außendienst-App</DataTable.HeaderCell>
                  <DataTable.HeaderCell>B2B-Shop-App</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Eigener Workflow mit App
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Aufwand der Einführung</DataTable.Cell>
                  <DataTable.Cell>gering bis mittel</DataTable.Cell>
                  <DataTable.Cell>gering, wenn Shop schon steht</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Offline-Fähigkeit</DataTable.Cell>
                  <DataTable.Cell>meist vorhanden</DataTable.Cell>
                  <DataTable.Cell>oft eingeschränkt</DataTable.Cell>
                  <DataTable.Cell>frei gestaltbar</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>
                    Flexibilität bei Sonderfällen
                  </DataTable.Cell>
                  <DataTable.Cell>begrenzt</DataTable.Cell>
                  <DataTable.Cell>begrenzt</DataTable.Cell>
                  <DataTable.Cell>hoch</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Anbindung ans ERP</DataTable.Cell>
                  <DataTable.Cell>nativ, eng</DataTable.Cell>
                  <DataTable.Cell>über Shop-Schnittstelle</DataTable.Cell>
                  <DataTable.Cell>über Middleware, offen</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einfuehrung">
              Worauf es bei der Einführung ankommt
            </Typo.H2>
            <Typo.Paragraph>
              Unabhängig vom gewählten Weg entscheiden ein paar Punkte darüber,
              ob die mobile Auftragsabwicklung im Alltag ankommt. Erstens
              offline-first: Wer die Offline-Fähigkeit als Nebensache behandelt,
              verliert die Akzeptanz im Außendienst und im Lager beim ersten
              Funkloch. Zweitens Scan statt Tippen: Barcode- und
              QR-Erkennung am Artikel ist im Großhandel mit tausenden SKUs
              schneller und fehlerfreier als jede manuelle Eingabe. Drittens
              der Echtzeit-Abgleich mit dem ERP für Bestand und Preise, sonst
              entstehen genau die falschen Versprechen, die man eigentlich
              abstellen wollte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommen zwei oft unterschätzte Themen. Datenschutz und
              Geräteverwaltung: Mobile Geräte verlassen das Gebäude, deshalb
              gehören Zugriffsschutz, eine saubere Rechtevergabe und die
              Möglichkeit, ein verlorenes Gerät zu sperren, von Anfang an
              dazu. Und die Mitnahme der Menschen: Der Außendienst muss die App
              als Erleichterung erleben, nicht als Kontrolle. Eine kurze, an
              echten Besuchsabläufen orientierte Einführung bringt mehr als ein
              dickes Handbuch. Wer mobil erfasst, sollte am Ende weniger Arbeit
              haben als vorher, nicht mehr.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">
              Häufige Fragen zur mobilen Auftragsabwicklung
            </Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Was ist der Unterschied zur normalen Auftragsabwicklung?",
                  answer:
                    "Bei der mobilen Auftragsabwicklung wird der Auftrag direkt am Ort des Geschehens auf einem Gerät erfasst, also beim Kunden, an der Theke oder im Lager, statt später im Innendienst aus Mail oder Zettel abgetippt zu werden. Das spart die doppelte Erfassung und eine ganze Fehlerquelle.",
                },
                {
                  question: "Funktioniert die Erfassung auch ohne Internet?",
                  answer:
                    "Eine brauchbare Lösung ist offline-first: Die Erfassung läuft lokal weiter, der Auftrag wird zwischengespeichert und synchronisiert sich automatisch, sobald die Verbindung zurück ist. Funklöcher in der Lagergasse oder beim Kunden sind im Großhandel die Regel, deshalb ist das ein Pflichtkriterium.",
                },
                {
                  question:
                    "Wie wird die App an unser ERP angebunden?",
                  answer:
                    "Über eine Schnittstellen- oder Middleware-Schicht, die zwischen App und ERP übersetzt. Drei Datenflüsse sind entscheidend: Bestand in Echtzeit, kundenindividuelle Preise und das Anlegen des fertigen Auftrags im ERP. Die App hält keine eigene Wahrheit vor, sie zahlt in das führende System ein.",
                },
                {
                  question:
                    "Brauchen wir dafür ein neues ERP oder Spezialgeräte?",
                  answer:
                    "In der Regel nicht. Mobile Auftragsabwicklung setzt auf dem vorhandenen ERP auf, und als Geräte reichen meist Standard-Tablets, Smartphones oder gängige Handscanner. Entscheidend ist die saubere Anbindung, nicht teure Hardware.",
                },
                {
                  question:
                    "Welcher Weg passt für unseren Außendienst?",
                  answer:
                    "Die App des ERP-Herstellers ist am schnellsten startklar und eng integriert, aber wenig flexibel. Eine B2B-Shop-App ist günstig, wenn der Shop schon steht, oft aber schwach bei Offline-Betrieb. Ein eigener Workflow mit App und Automatisierungs-Layer ist am flexibelsten bei Sonderfällen. Die Wahl hängt vom ERP und von der Vielfalt der Sonderfälle ab.",
                },
                {
                  question:
                    "Wie geht die Lösung mit Bestandskonflikten um?",
                  answer:
                    "Ein offline erfasster Auftrag kann beim Hochladen auf einen veränderten Bestand treffen. Eine belastbare Lösung erkennt diese Konflikte beim Abgleich und meldet sie zurück, statt stillschweigend zu überschreiben, und stellt sicher, dass ein Auftrag bei Übertragungsabbrüchen nur einmal im ERP landet.",
                },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Ein großer Teil der Aufträge im Großhandel entsteht nicht am
              Schreibtisch, sondern in der Fläche: beim Kunden, an der Theke und
              im Lager. Mobile Auftragsabwicklung erfasst sie genau dort,
              strukturiert und mit Blick auf Bestand und Preise, und spart die
              teure Schleife des nachträglichen Abtippens. Der Erfolg hängt
              weniger an der App als an zwei Dingen: einer ehrlichen
              Offline-Fähigkeit und einer sauberen, echtzeitnahen Anbindung an
              das ERP.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer einsteigen will, beginnt am besten mit dem Ort, an dem der
              Bruch am teuersten ist, oft der Außendienst, und wählt den Weg,
              der zum ERP und zur Zahl der Sonderfälle passt. Ob fertige
              Hersteller-App, B2B-Shop oder eigener Workflow mit
              Automatisierungs-Layer: Das Ziel bleibt dasselbe, ein Auftrag, der
              dort entsteht, wo er gebraucht wird, und nur einmal erfasst werden
              muss. Wenn ihr überlegt, wo bei euch der größte Hebel liegt,{" "}
              <Link href="/contact">sprecht uns gern an</Link>.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
