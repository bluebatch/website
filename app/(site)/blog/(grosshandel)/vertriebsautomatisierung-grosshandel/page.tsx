import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "vertriebsautomatisierung-grosshandel",
  author: "Max Hänsel",
  date: "2026-07-21",
  image: "/blog/vertriebsautomatisierung-grosshandel/hero.png",
  tags: ["grosshandel", "automatisierung", "ki"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Vertriebsautomatisierung im Großhandel: Anfrage bis Abschluss | Bluebatch",
  description:
    "Vertriebsautomatisierung im Großhandel: wie Anfrage-Erfassung, Lead-Routing, Nachfassen und CRM-Sync automatisch laufen, welche Kennzahlen zählen und wie der Einstieg in 90 Tagen gelingt.",
  openGraph: {
    title: "Vertriebsautomatisierung im Großhandel: von der Anfrage bis zum Abschluss",
    description:
      "Wie Großhändler ihren Vertrieb automatisieren: Anfragen erfassen, Leads priorisieren, Angebote nachfassen und CRM sauber anbinden, gemessen an Reaktionszeit, Conversion und Pipeline-Velocity.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/vertriebsautomatisierung-grosshandel/hero.png",
        width: 1200,
        height: 630,
        alt: "Vertriebsteam eines Großhändlers bespricht die Sales-Pipeline an einem Wandmonitor im Innendienst-Büro",
      },
    ],
  },
  alternates: {
    canonical: "/blog/vertriebsautomatisierung-grosshandel",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Vertriebsautomatisierung im Großhandel: von der Anfrage bis zum Abschluss
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-21">21. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/vertriebsautomatisierung-grosshandel/hero.png"
          alt="Vertriebsteam eines mittelständischen Großhändlers bespricht die Sales-Pipeline an einem Wandmonitor im Innendienst-Büro"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Im Großhandel entscheidet sich viel, bevor überhaupt ein Auftrag
              entsteht. Eine Anfrage kommt per Mail, über das Kontaktformular
              oder aus dem Shop herein, und ab da läuft ein Rennen: Wer schnell
              und passend antwortet, gewinnt das Geschäft. Wer die Anfrage erst
              nach zwei Tagen im vollen Postfach findet, hat oft schon gegen den
              Wettbewerber verloren. Genau hier setzt Vertriebsautomatisierung
              an, an der Phase vor dem Auftrag, in der aus einer Anfrage ein
              Angebot und aus einem Angebot ein Abschluss wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag grenzt sich bewusst von zwei Nachbarthemen ab. Es
              geht nicht um die Abwicklung nach dem Auftrag, die der Beitrag zur{" "}
              <Link href="/blog/auftragsabwicklung-grosshandel">
                Auftragsabwicklung im Großhandel
              </Link>{" "}
              behandelt, und auch nicht allein um das Erzeugen des Angebots, das
              die{" "}
              <Link href="/blog/automatische-angebotserstellung-grosshandel">
                automatische Angebotserstellung
              </Link>{" "}
              beschreibt. Hier steht der Vertriebsprozess als Ganzes im
              Mittelpunkt: die Erfassung der Anfrage, die Priorisierung, das
              Nachfassen und die saubere Anbindung an CRM und ERP. Also der
              Funnel, der zum Auftrag führt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-heisst-vertriebsautomatisierung">
              Was Vertriebsautomatisierung im Großhandel bedeutet
            </Typo.H2>
            <Typo.Paragraph>
              Vertriebsautomatisierung heißt nicht, den Vertriebler durch einen
              Bot zu ersetzen. Der persönliche Kontakt, das Verhandeln, das
              Einschätzen eines Kunden bleibt Sache des Menschen. Automatisiert
              wird die Fleißarbeit drumherum: das Aufnehmen und Sortieren von
              Anfragen, das Erinnern an offene Angebote, das Pflegen der
              Kundendaten in mehreren Systemen. Das sind genau die Aufgaben, die
              im Tagesgeschäft als Erstes liegen bleiben, wenn es hektisch wird,
              und die trotzdem über Reaktionszeit und Abschlussquote entscheiden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Im Großhandel kommt eine Besonderheit hinzu: Das Sortiment ist
              groß, die Kunden bestellen wiederkehrend, und viele Anfragen sind
              Varianten von etwas, das man schon hundertmal beantwortet hat.
              Diese Wiederholung ist die Steilvorlage für Automatisierung. Wo
              jede Anfrage ein Unikat wäre, ließe sich wenig standardisieren. Weil
              aber ein großer Teil der Anfragen einem Muster folgt, lohnt es sich,
              die immer gleichen Handgriffe zu automatisieren und die Vertriebler
              auf das zu konzentrieren, was wirklich Verhandlung braucht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vertriebsprozess">
              Der Vertriebsprozess von der Anfrage bis zum Abschluss
            </Typo.H2>
            <Typo.Paragraph>
              Bevor man automatisiert, hilft ein klarer Blick auf den Prozess.
              Der B2B-Vertrieb im Großhandel lässt sich in fünf Stufen zerlegen,
              die jede Anfrage durchläuft, bis sie zum Auftrag wird oder verloren
              geht. Erst wenn diese Stufen sichtbar sind, erkennt man, an welcher
              Stelle Anfragen versickern.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/vertriebsautomatisierung-grosshandel/vertriebsprozess.png"
              alt="Sales-Funnel des B2B-Großhandels mit fünf Stufen: Anfrage eingegangen, Qualifizierung, Angebot erstellt, Nachfassen und Abschluss, mit Übergabe an die Auftragsabwicklung"
              width={1200}
              height={650}
            />

            <Typo.Paragraph>
              Am Anfang steht die eingegangene Anfrage, die aus verschiedenen
              Kanälen kommt und zunächst erfasst und einem Zuständigen zugeordnet
              werden muss. Es folgt die Qualifizierung, in der geklärt wird, ob
              der Bedarf zum Sortiment passt und wie ernst die Anfrage ist. Dann
              wird das Angebot erstellt, mit Preisen, Positionen und
              Konditionen. Der vierte, oft vernachlässigte Schritt ist das
              Nachfassen: Ein Angebot, das unbeantwortet liegen bleibt, ist kein
              verlorenes Geschäft, sondern nur ein vergessenes. Am Ende steht der
              Abschluss, und ab dort übernimmt die Auftragsabwicklung. Die
              Automatisierung setzt an jeder dieser Stufen an, am stärksten aber
              an den Übergängen, wo heute Zeit und Information verloren gehen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="hebel">Wo sich der Vertrieb automatisieren lässt</Typo.H2>
            <Typo.Paragraph>
              Fünf Hebel decken den Großteil dessen ab, was sich im
              Großhandelsvertrieb sinnvoll automatisieren lässt. Sie greifen
              ineinander, lassen sich aber einzeln einführen, sodass man klein
              anfangen und Schritt für Schritt ausbauen kann.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/vertriebsautomatisierung-grosshandel/hebel-uebersicht.png"
              alt="Fünf Hebel der Vertriebsautomatisierung im Großhandel: Anfrage-Erfassung, Lead-Priorisierung, Nachfassen, CRM- und ERP-Sync sowie Vertriebs-Reporting"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              Der erste Hebel ist die Anfrage-Erfassung: Anfragen aus allen
              Kanälen automatisch aufnehmen, statt sie einzeln aus Postfächern zu
              fischen. Der zweite ist die Lead-Priorisierung, bei der ein
              KI-gestütztes Scoring die wichtigen Anfragen nach vorne holt, damit
              der Vertrieb zuerst dort antwortet, wo am meisten zu holen ist. Der
              dritte Hebel ist das Nachfassen, also die automatische Erinnerung an
              offene Angebote. Der vierte ist der Sync zwischen CRM und ERP, damit
              Kundendaten nur einmal gepflegt werden und überall stimmen. Der
              fünfte ist das Vertriebs-Reporting, das Pipeline und Conversion
              sichtbar macht, statt sie im Bauchgefühl zu belassen. Die folgenden
              Abschnitte greifen die drei Hebel heraus, die im Großhandel den
              größten Unterschied machen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="anfrage-routing">
              Anfragen erfassen und richtig routen
            </Typo.H2>
            <Typo.Paragraph>
              Der erste und wichtigste Hebel ist die Erfassung. Anfragen kommen
              im Großhandel über viele Wege herein, und jeder Kanal hat sein
              eigenes Postfach oder Formular. Genau in dieser Zersplitterung geht
              Zeit verloren: Eine Anfrage landet in einem persönlichen Postfach,
              der Kollege ist im Urlaub, und niemand merkt, dass sie liegt. Eine
              automatische Erfassung sammelt alle Kanäle an einer Stelle und
              sorgt dafür, dass keine Anfrage unbemerkt bleibt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/vertriebsautomatisierung-grosshandel/lead-routing.png"
              alt="Prozessfluss der Anfrage-Erfassung: E-Mail, Shop-Anfrage und Kontaktformular laufen in eine KI-Klassifikation mit Lead-Scoring und werden an den passenden Vertriebler und ins CRM geroutet"
              width={1200}
              height={650}
            />

            <Typo.Paragraph>
              Auf die Erfassung folgt das Routing. Eine KI-Klassifikation liest
              die Anfrage, erkennt Produktbereich, Dringlichkeit und ob es sich um
              einen Bestands- oder Neukunden handelt, und leitet sie an den
              passenden Vertriebler weiter. Gleichzeitig entsteht automatisch ein
              CRM-Eintrag, sodass die Anfrage von der ersten Sekunde an
              dokumentiert ist. Diese automatische Erfassung ist eng verwandt mit
              dem{" "}
              <Link href="/blog/bestellungen-erfassen-automatisieren">
                automatisierten Erfassen von Bestellungen
              </Link>
              , setzt aber eine Stufe früher an: nicht beim fertigen Auftrag,
              sondern bei der noch offenen Anfrage, die erst noch zum Angebot
              werden muss.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="nachfassen">Nachfassen, der unterschätzte Hebel</Typo.H2>
            <Typo.Paragraph>
              Kein Teil des Vertriebs wird so oft vergessen wie das Nachfassen.
              Ein Angebot geht raus, der Kunde meldet sich nicht sofort, und im
              Tagesgeschäft gerät es in Vergessenheit. Dabei zeigen Erfahrung und
              Zahlen dasselbe: Ein erheblicher Teil der Abschlüsse entsteht erst
              nach der zweiten oder dritten Kontaktaufnahme. Wer nicht nachfasst,
              verschenkt Geschäft, das eigentlich schon in der Pipeline liegt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Automatisiertes Nachfassen bedeutet nicht, den Kunden mit
              Serienmails zu bombardieren. Es bedeutet, dass das System den
              Vertriebler erinnert, wenn ein Angebot eine bestimmte Zeit offen
              ist, und ihm den Kontext gleich mitliefert: welches Angebot, welche
              Positionen, wann zuletzt gesprochen wurde. Ob am Ende eine
              persönliche Mail, ein Anruf oder eine kurze automatische Erinnerung
              an den Kunden geht, bleibt eine Entscheidung des Vertriebs. Der
              Automatismus sorgt nur dafür, dass die Erinnerung überhaupt kommt,
              und dass sie nicht von der Disziplin eines überlasteten Menschen
              abhängt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="crm-erp-sync">CRM und ERP als gemeinsames Rückgrat</Typo.H2>
            <Typo.Paragraph>
              Vertriebsautomatisierung fällt in sich zusammen, wenn die Daten
              nicht stimmen. Wenn der Vertrieb im CRM eine andere Lieferadresse
              sieht als das ERP, wenn Konditionen an zwei Stellen gepflegt werden
              und auseinanderlaufen, dann kostet die Automatisierung mehr Zeit,
              als sie spart. Deshalb ist der Sync zwischen CRM und ERP kein
              Nebenschauplatz, sondern das Rückgrat des Ganzen. Kundendaten,
              Preise und Konditionen gehören einmal gepflegt und überall
              konsistent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Praxis läuft dieser Abgleich über eine Middleware, die CRM
              und Warenwirtschaft verbindet und Änderungen in beide Richtungen
              spiegelt. Wie solche Übergaben zwischen Systemen sauber aufgesetzt
              werden, vertieft der Beitrag zu{" "}
              <Link href="/blog/erp-workflows-automatisieren">
                ERP-Workflows automatisieren
              </Link>
              . Welche Warenwirtschaft im Großhandel dafür in Frage kommt und wie
              sie sich anbinden lässt, ordnet der{" "}
              <Link href="/blog/warenwirtschaftssystem-grosshandel">
                Überblick zu Warenwirtschaftssystemen für den Großhandel
              </Link>{" "}
              ein. Erst wenn dieses Rückgrat steht, tragen die anderen Hebel
              wirklich.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kennzahlen">
              Die Kennzahlen, an denen sich Vertriebsautomatisierung messen lässt
            </Typo.H2>
            <Typo.Paragraph>
              Automatisierung ist kein Selbstzweck, sie muss sich in Zahlen
              zeigen. Drei Kennzahlen reichen im Vertrieb aus, um zu erkennen, ob
              die Automatisierung wirkt, und sie sind bewusst schlicht gehalten,
              damit sie im Alltag wirklich erhoben werden.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/vertriebsautomatisierung-grosshandel/vertriebs-kpis.png"
              alt="Drei Vertriebs-KPIs als Stat-Boxen: Reaktionszeit, Angebots-Conversion und Pipeline-Velocity mit jeweils kurzer Erklärung"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              Die Reaktionszeit misst, wie lange es von der Anfrage bis zur ersten
              Rückmeldung dauert. Sie ist die Kennzahl, die der Kunde direkt
              spürt, und der stärkste Frühindikator für die Abschlussquote. Die
              Angebots-Conversion zeigt, welcher Anteil der Angebote zum Auftrag
              wird, und macht sichtbar, ob Nachfassen und Qualifizierung
              funktionieren. Die Pipeline-Velocity beschreibt, wie schnell
              Anfragen insgesamt durch die Pipeline laufen, und deckt auf, wo sie
              stecken bleiben. Zusammen ergeben die drei ein ehrliches Bild.
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
                  <DataTable.Cell bold>Reaktionszeit</DataTable.Cell>
                  <DataTable.Cell>Anfrage bis erste Rückmeldung</DataTable.Cell>
                  <DataTable.Cell>Erfassung, Routing</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Angebots-Conversion</DataTable.Cell>
                  <DataTable.Cell>Anteil Angebote zum Auftrag</DataTable.Cell>
                  <DataTable.Cell>Nachfassen, Priorisierung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Pipeline-Velocity</DataTable.Cell>
                  <DataTable.Cell>Tempo durch die Pipeline</DataTable.Cell>
                  <DataTable.Cell>CRM-Sync, Reporting</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einstieg">In 90 Tagen zum automatisierten Vertrieb</Typo.H2>
            <Typo.Paragraph>
              Niemand muss den ganzen Vertrieb auf einmal automatisieren. Ein
              gestufter Einstieg über drei Monate liefert früh sichtbare
              Ergebnisse und baut das Vertrauen für die größeren Schritte auf,
              ohne den laufenden Betrieb zu stören.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/vertriebsautomatisierung-grosshandel/einstieg.png"
              alt="Gestufter Einstieg in die Vertriebsautomatisierung in drei Karten: 30 Tage Kanäle bündeln und Reaktionszeit messen, 60 Tage Erfassung und Routing automatisieren, 90 Tage Nachfassen und Reporting aufsetzen"
              width={1200}
              height={700}
            />

            <Typo.Paragraph>
              In den ersten 30 Tagen geht es ums Aufräumen und Messen: die
              Anfrage-Kanäle an einer Stelle bündeln und die Reaktionszeit als
              Ausgangswert erheben. In den nächsten 30 Tagen folgen Erfassung und
              Routing, sodass Anfragen automatisch aufgenommen und zugeordnet
              werden, und das CRM wird sauber angebunden. In den letzten 30 Tagen
              kommen das automatische Nachfassen und ein einfaches
              Pipeline-Reporting dazu. Nach 90 Tagen läuft ein Vertrieb, der keine
              Anfrage mehr verliert, schneller reagiert und seine eigenen Zahlen
              kennt. Für den größeren Rahmen, in den sich das einfügt, lohnt der
              Blick auf die{" "}
              <Link href="/blog/b2b-grosshandel-digitalisierung">
                Digitalisierung im B2B-Großhandel
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">
              Häufige Fragen zur Vertriebsautomatisierung im Großhandel
            </Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Was unterscheidet Vertriebsautomatisierung von der Auftragsabwicklung?",
                  answer:
                    "Die Vertriebsautomatisierung betrifft die Phase vor dem Auftrag: Anfrage erfassen, qualifizieren, Angebot nachfassen, abschließen. Die Auftragsabwicklung beginnt danach, wenn aus dem Abschluss ein Auftrag geworden ist und dieser bis zur Rechnung durchläuft. Beide greifen an der Übergabe ineinander, setzen aber an unterschiedlichen Stellen an.",
                },
                {
                  question:
                    "Ersetzt Vertriebsautomatisierung die Vertriebsmitarbeiter?",
                  answer:
                    "Nein. Verhandeln, Beziehungen pflegen und einen Kunden einschätzen bleibt Sache des Menschen. Automatisiert wird die Fleißarbeit drumherum: Anfragen erfassen und sortieren, an offene Angebote erinnern, Kundendaten pflegen. Der Vertrieb gewinnt dadurch Zeit für das, was wirklich Verhandlung braucht.",
                },
                {
                  question: "Womit fängt man am besten an?",
                  answer:
                    "Mit der Erfassung und dem Messen. Zuerst alle Anfrage-Kanäle an einer Stelle bündeln, damit keine Anfrage mehr liegen bleibt, und die Reaktionszeit als Ausgangswert erheben. Das kostet wenig, wirkt sofort und schafft die Datengrundlage für Routing, Nachfassen und Reporting.",
                },
                {
                  question: "Welche Kennzahlen zeigen, ob es funktioniert?",
                  answer:
                    "Drei reichen aus: die Reaktionszeit von der Anfrage bis zur ersten Rückmeldung, die Angebots-Conversion als Anteil der Angebote, die zum Auftrag werden, und die Pipeline-Velocity als Tempo, mit dem Anfragen durch die Pipeline laufen. Sinkt die Reaktionszeit, während die Conversion steigt, wirkt die Automatisierung.",
                },
                {
                  question:
                    "Braucht man dafür ein neues CRM oder ein neues ERP?",
                  answer:
                    "Meist nicht. Wichtiger als ein neues System ist, dass die vorhandenen Systeme sauber miteinander synchronisiert sind, damit Kundendaten und Konditionen überall stimmen. Der Abgleich läuft in der Regel über eine Middleware, die CRM und Warenwirtschaft verbindet, ohne dass eines der Systeme ersetzt werden muss.",
                },
                {
                  question:
                    "Wie grenzt sich das von der automatischen Angebotserstellung ab?",
                  answer:
                    "Die automatische Angebotserstellung ist ein einzelner Schritt im Vertriebsprozess, das Erzeugen des Angebots selbst. Die Vertriebsautomatisierung umfasst den ganzen Funnel davor und danach: Erfassung, Priorisierung, Nachfassen und CRM-Sync. Die Angebotserstellung ist damit ein Baustein innerhalb der breiteren Vertriebsautomatisierung.",
                },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Der Großhandelsvertrieb gewinnt oder verliert Geschäfte in der Phase
              vor dem Auftrag, bei der Reaktion auf die Anfrage und beim
              Dranbleiben am Angebot. Vertriebsautomatisierung setzt genau dort
              an: Sie erfasst Anfragen aus allen Kanälen an einer Stelle,
              priorisiert sie, erinnert ans Nachfassen und hält CRM und ERP im
              Gleichklang. Die Vertriebler verlieren dabei nichts von ihrer
              Rolle, sie gewinnen Zeit für das, was Menschen besser können als
              jede Software.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Einstieg gelingt gestuft: erst bündeln und messen, dann
              erfassen und routen, dann nachfassen und berichten. Gemessen an
              Reaktionszeit, Angebots-Conversion und Pipeline-Velocity wird
              sichtbar, ob es wirkt. Wenn ihr wissen wollt, wo bei euch im
              Vertrieb der größte Hebel liegt und welcher Schritt sich zuerst
              lohnt, <Link href="/contact">sprecht uns gern an</Link>.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
