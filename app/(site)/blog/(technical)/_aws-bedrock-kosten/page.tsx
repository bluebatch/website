import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "aws-bedrock-kosten",
  author: "Max Hänsel",
  date: "2026-07-29",
  image: "/blog/aws-bedrock-kosten/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "AWS Bedrock Kosten 2026: Preise, Frankfurt-Faktor und Sparhebel",
  description:
    "AWS Bedrock Kosten 2026 im Detail: Modellpreise, On-Demand vs Batch, warum Frankfurt teurer ist, Prompt-Caching als Sparhebel und wie Sie Budgets wirklich kontrollieren.",
  openGraph: {
    title: "AWS Bedrock Kosten 2026: Preise, Frankfurt-Faktor und Sparhebel",
    description:
      "Was Bedrock wirklich kostet: Modellpreise Stand 2026, der EU-Aufschlag beim Routing über Frankfurt, Batch- und Caching-Rabatte und die Werkzeuge zur Kostenkontrolle.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/aws-bedrock-kosten/hero.png",
        width: 1200,
        height: 630,
        alt: "AWS Bedrock Kosten 2026 für den deutschen Mittelstand",
      },
    ],
  },
  alternates: {
    canonical: "/blog/aws-bedrock-kosten",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          AWS Bedrock Kosten 2026: Was die Modelle wirklich kosten und wo die
          Sparhebel liegen
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>13 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-29">29. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/aws-bedrock-kosten/hero.png"
          alt="Auswertung der AWS Bedrock Kosten in einem deutschen Mittelstandsunternehmen"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Die AWS Bedrock Kosten haben eine Eigenheit, die viele erst auf
              der ersten Monatsrechnung bemerken: Der Listenpreis des Modells
              ist nur die halbe Wahrheit. Dazu kommen die Frage, über welchen
              Endpunkt die Anfragen laufen, ob Batch-Rabatte und Prompt-Caching
              genutzt werden, und welche Nebenkosten sich um die eigentlichen
              Modellaufrufe herum ansammeln. Wer in Frankfurt startet und mit
              US-Preislisten kalkuliert hat, wundert sich schnell über
              Abweichungen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Artikel schlüsselt die Kosten auf: die drei
              Abrechnungsmodelle, die konkreten Modellpreise mit Stand Juli
              2026, der oft übersehene Preisunterschied zwischen europäischem
              und globalem Routing, die wirksamsten Sparhebel und die
              Werkzeuge, mit denen Sie die Ausgaben unter Kontrolle halten. Was
              Bedrock als Plattform ist und wie der Einstieg aussieht, haben
              wir im{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Überblick zu Amazon Bedrock
              </Link>{" "}
              beschrieben. Alle Preise hier sind US-Dollar je einer Million
              Token und sollten vor einer Kalkulation gegen die offizielle
              AWS-Preisseite geprüft werden, denn sie ändern sich häufig.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="abrechnungsmodelle">
            <Typo.H2>
              Drei Abrechnungsmodelle: On-Demand, Batch, Provisioned Throughput
            </Typo.H2>

            <BlogImage
              src="/blog/aws-bedrock-kosten/abrechnungsmodelle.png"
              alt="Vergleich der drei Bedrock-Abrechnungsmodelle On-Demand, Batch mit 50 Prozent Rabatt und Provisioned Throughput"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der Standard ist <strong>On-Demand</strong>: Sie zahlen pro
              verarbeiteter Million Token, getrennt nach Input und Output, ohne
              Grundgebühr und ohne Commitment. Output ist dabei deutlich
              teurer als Input, bei den aktuellen Claude-Modellen um den Faktor
              fünf. Wer einen Monat nichts aufruft, zahlt nichts. Für den
              Einstieg und für die meisten Anwendungen mit variabler Last ist
              das die richtige Wahl.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der zweite Modus ist die <strong>Batch-Inferenz</strong>: Sie
              legen Ihre Anfragen als Datei in einen S3-Bucket, Bedrock
              arbeitet sie asynchron ab, typischerweise innerhalb von 24
              Stunden, und berechnet dafür nur den{" "}
              <strong>halben On-Demand-Preis</strong>. Für alles, was nicht in
              Echtzeit passieren muss, also nächtliche Dokumentenauswertungen,
              Stammdaten-Anreicherung oder Massenklassifikation, ist Batch der
              einfachste Rabatt, den es gibt. Zu beachten: Nicht jedes Modell
              ist für Batch freigeschaltet, die jeweils neuesten
              Claude-Generationen tauchen in der Batch-Liste oft erst
              verzögert auf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der dritte Modus, <strong>Provisioned Throughput</strong>, ist
              reservierte Kapazität: Sie buchen sogenannte Model Units zum
              Stundenpreis, wahlweise ohne Bindung oder mit ein- bis
              sechsmonatigem Commitment, und bekommen dafür garantierten
              Durchsatz. Die Größenordnung liegt schnell bei mehreren
              zehntausend Dollar im Monat. In der Praxis spielt das Modell für
              aktuelle Claude-Generationen kaum noch eine Rolle, weil AWS hohe
              Last inzwischen über On-Demand mit regionsübergreifendem Routing
              abfängt. Relevant bleibt es vor allem für ältere Modelle und
              importierte eigene Modelle. Für die Kalkulation eines typischen
              Mittelstandsprojekts können Sie es meist ignorieren.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="frankfurt-faktor">
            <Typo.H2>
              Der Frankfurt-Faktor: warum EU-Routing mehr kostet
            </Typo.H2>

            <BlogImage
              src="/blog/aws-bedrock-kosten/frankfurt-faktor.png"
              alt="Routing einer Bedrock-Anfrage aus Frankfurt über EU-Inference-Profil mit Aufschlag oder globales Profil zum Basispreis"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Hier liegt die größte Überraschung für deutsche Unternehmen. Die
              großen Claude-Modelle sind nicht direkt in der Frankfurter
              Region gehostet. Anfragen aus eu-central-1 laufen über
              sogenannte Inference-Profile, die die Last auf mehrere Regionen
              verteilen. Dabei gibt es zwei Varianten: Ein{" "}
              <strong>EU-Profil</strong> hält die Verarbeitung innerhalb
              Europas, ein <strong>globales Profil</strong> darf weltweit
              routen. Der Unterschied ist nicht nur eine Datenschutzfrage,
              sondern eine Preisfrage: Für das regionale EU-Routing verlangt
              Anthropic bei den aktuellen Claude-Modellen rund{" "}
              <strong>zehn Prozent Aufschlag</strong> auf den globalen
              Basispreis. Abgerechnet wird dabei immer zum Tarif der
              Ausgangsregion, ein separater Routing-Aufschlag existiert nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Auch bei den Amazon-eigenen Modellen ist Frankfurt kein
              US-Preisschild: Die Nova-Familie kostet in eu-central-1 rund
              ein Drittel mehr als in den US-Regionen, und das
              Embedding-Modell Titan Text Embeddings V2 liegt in Frankfurt
              beim Zehnfachen des US-Preises. Die Konsequenz für die Planung:
              Rechnen Sie nie mit Preisbeispielen aus US-Blogs. Und treffen
              Sie die Routing-Entscheidung bewusst. Wer die EU-Verarbeitung
              aus Datenschutzgründen braucht, zahlt den Aufschlag zu Recht als
              Preis der Datenresidenz. Wer sie nicht braucht, spart mit dem
              globalen Profil dauerhaft rund zehn Prozent.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="modellpreise">
            <Typo.H2>Die Modellpreise im Überblick</Typo.H2>
            <Typo.Paragraph>
              Die folgende Tabelle zeigt die On-Demand-Preise der für den
              Mittelstand relevantesten Modelle mit Stand Juli 2026, als
              globaler Basispreis in US-Dollar je einer Million Token. Für
              EU-Routing kommt bei den Claude-Modellen der beschriebene
              Aufschlag von rund zehn Prozent hinzu, die Nova-Preise sind
              bereits die Frankfurter Werte.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Modell</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Input / 1M</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Output / 1M</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Typischer Einsatz</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude Opus (aktuelle 4er)</DataTable.Cell>
                  <DataTable.Cell>$5,00</DataTable.Cell>
                  <DataTable.Cell>$25,00</DataTable.Cell>
                  <DataTable.Cell>
                    schwere Reasoning-Fälle, Agenten mit langen Aufgaben
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude Sonnet 4.6</DataTable.Cell>
                  <DataTable.Cell>$3,00</DataTable.Cell>
                  <DataTable.Cell>$15,00</DataTable.Cell>
                  <DataTable.Cell>
                    Standard-Arbeitstier für anspruchsvolle Aufgaben
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude Haiku 4.5</DataTable.Cell>
                  <DataTable.Cell>$1,00</DataTable.Cell>
                  <DataTable.Cell>$5,00</DataTable.Cell>
                  <DataTable.Cell>
                    Klassifikation, Extraktion, hohes Volumen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Amazon Nova Pro (FRA)</DataTable.Cell>
                  <DataTable.Cell>$1,05</DataTable.Cell>
                  <DataTable.Cell>$4,20</DataTable.Cell>
                  <DataTable.Cell>
                    solide Mittelklasse aus dem AWS-Haus
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Amazon Nova Micro (FRA)</DataTable.Cell>
                  <DataTable.Cell>$0,046</DataTable.Cell>
                  <DataTable.Cell>$0,184</DataTable.Cell>
                  <DataTable.Cell>
                    einfachste Routineaufgaben zum Kleinstpreis
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Mistral Large 3 (FRA)</DataTable.Cell>
                  <DataTable.Cell>$0,60</DataTable.Cell>
                  <DataTable.Cell>$1,80</DataTable.Cell>
                  <DataTable.Cell>
                    europäischer Anbieter, gutes Preis-Leistungs-Verhältnis
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Zwei Fußnoten, die bares Geld wert sind. Erstens die{" "}
              <strong>Legacy-Falle</strong>: Ältere Claude-3.5-Modelle laufen
              auf Bedrock inzwischen in einem verlängerten Zugangsmodus zum
              doppelten Preis von sechs Dollar Input und dreißig Dollar
              Output. Wer noch alte Modellkennungen im Code hat, zahlt damit
              mehr für weniger Leistung als beim aktuellen Spitzenmodell. Ein
              Modell-Update ist hier eine reine Kostensenkung. Zweitens die{" "}
              <strong>Token-Zählung</strong>: Die neuesten Claude-Generationen
              zerlegen denselben Text in mehr Token als ihre Vorgänger, und
              deutscher Text ist ohnehin token-intensiver als englischer.
              Beides zusammen kann eine Kalkulation um dreißig Prozent und mehr
              verschieben. Wie sich die Tokenisierung generell auf die
              Kostenrechnung auswirkt, zeigt unsere Analyse der{" "}
              <Link
                href="/blog/openai-api-kosten"
                className="text-primary-600 hover:underline"
              >
                OpenAI API Kosten
              </Link>{" "}
              am Beispiel des Deutsch-Aufschlags.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="caching">
            <Typo.H2>Prompt-Caching: der unterschätzte Sparhebel</Typo.H2>

            <BlogImage
              src="/blog/aws-bedrock-kosten/caching-hebel.png"
              alt="Ablauf des Prompt-Cachings bei Bedrock vom Cache-Write beim ersten Aufruf zum günstigen Cache-Read bei Folgeaufrufen"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Fast jede produktive KI-Anwendung schickt bei jedem Aufruf
              denselben Vorspann mit: den System-Prompt, die Anleitung, die
              Wissensblöcke. Ohne Caching zahlen Sie diesen Vorspann jedes Mal
              voll. Mit Prompt-Caching legt Bedrock den gleichbleibenden
              Anfang zwischen die Aufrufe: Der erste Aufruf schreibt den Cache
              und kostet dafür einen Aufschlag von einem Viertel auf den
              Input-Preis des gecachten Teils, jeder Folgeaufruf liest ihn für
              rund <strong>ein Zehntel des normalen Input-Preises</strong>.
              Bei den Amazon-Nova-Modellen entfällt der Schreibaufschlag
              sogar ganz, dort kostet der Cache-Read ein Viertel des
              Input-Preises.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für Chatbots, Agenten und alle Anwendungen mit langem,
              stabilem System-Prompt ist das der größte einzelne Sparhebel:
              Auf den gecachten Anteil sind Einsparungen von bis zu neunzig
              Prozent möglich. Voraussetzung ist ein sauber strukturierter
              Prompt, bei dem der stabile Teil vorne steht und der variable
              Teil hinten, und eine Mindestlänge des gecachten Blocks von
              einigen tausend Token. Wie sich das beim Direktbezug der Modelle
              über die Anthropic-Schnittstelle verhält, beschreiben wir im
              Detail im Artikel zur{" "}
              <Link
                href="/blog/claude-api"
                className="text-primary-600 hover:underline"
              >
                Claude API
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="rechenbeispiele">
            <Typo.H2>Zwei Rechenbeispiele für den Mittelstand</Typo.H2>
            <Typo.Paragraph>
              Die Grundformel: Input-Tokens mal Input-Preis plus Output-Tokens
              mal Output-Preis, geteilt durch eine Million, mal Anfragen pro
              Monat. Die Beispiele rechnen mit deutschsprachigen, also eher
              token-intensiven Prompts und globalem Basispreis; für EU-Routing
              legen Sie gedanklich zehn Prozent drauf.
            </Typo.Paragraph>

            <Typo.H3>
              Beispiel A: Interner Assistent mit Claude Haiku 4.5
            </Typo.H3>
            <Typo.Paragraph>
              Ein interner Assistent beantwortet Fragen zu Produkten und
              Prozessen: pro Anfrage rund 1.500 Input-Tokens und 400
              Output-Tokens. Mit Haiku 4.5 zu einem Dollar Input und fünf
              Dollar Output kostet die einzelne Anfrage etwa $0,0035. Bei
              10.000 Anfragen im Monat sind das rund{" "}
              <strong>35 US-Dollar</strong>. Wird der gleichbleibende
              System-Prompt gecacht, sinkt der Input-Anteil auf einen
              Bruchteil und die Rechnung landet deutlich unter 20 Dollar. Mit
              Sonnet 4.6 statt Haiku läge dieselbe Last bei gut 100 Dollar,
              mit Opus beim Fünffachen davon. Die Modellwahl ist und bleibt
              der größte Kostenfaktor.
            </Typo.Paragraph>

            <Typo.H3>
              Beispiel B: Nächtliche Dokumentenverarbeitung als Batch
            </Typo.H3>
            <Typo.Paragraph>
              5.000 Lieferantendokumente im Monat, je rund 3.000 Input-Tokens
              und 300 Output-Tokens für eine strukturierte Zusammenfassung.
              Mit Haiku 4.5 über die Batch-Inferenz zum halben Preis kostet
              das Dokument rund $0,0023, alle 5.000 zusammen also etwa{" "}
              <strong>12 US-Dollar im Monat</strong>. Massenverarbeitung ist
              auf Bedrock erstaunlich günstig, solange der teure Output kurz
              bleibt und der Job nicht in Echtzeit laufen muss. Teuer wird es
              erst, wenn für solche Routineaufgaben reflexhaft das größte
              Modell gewählt wird.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="nebenkosten">
            <Typo.H2>Nebenkosten: was um die Modellaufrufe herum anfällt</Typo.H2>
            <Typo.Paragraph>
              Die Modellaufrufe sind nicht immer der größte Posten auf der
              Rechnung. Wer eine{" "}
              <Link
                href="/blog/aws-bedrock-knowledge-base"
                className="text-primary-600 hover:underline"
              >
                Bedrock Knowledge Base
              </Link>{" "}
              betreibt, zahlt zusätzlich für Embeddings und vor allem für den
              Vektor-Speicher: Die bequeme Standardvariante mit einem
              dauerhaft laufenden Suchcluster erzeugt in Frankfurt schnell
              mehrere hundert Dollar Grundkosten im Monat, unabhängig davon,
              ob jemand fragt. Auch Guardrails, also die Inhalts- und
              PII-Filter, werden separat pro geprüfter Texteinheit
              abgerechnet, und das Protokollieren der Modellaufrufe kostet
              zwar keinen Bedrock-Aufpreis, aber die üblichen Speicher- und
              Log-Gebühren. Für eine ehrliche Kalkulation gehören diese
              Posten von Anfang an mit auf den Zettel.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="kostenkontrolle">
            <Typo.H2>
              Kostenkontrolle: Budgets, Metriken, Quotas
            </Typo.H2>

            <BlogImage
              src="/blog/aws-bedrock-kosten/kostenkontrolle.png"
              alt="Vier Werkzeuge der Bedrock-Kostenkontrolle: AWS Budgets, CloudWatch-Metriken, Inference-Profile mit Kosten-Tags und Service Quotas"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die unbequeme Wahrheit zuerst: Bedrock hat{" "}
              <strong>kein natives Ausgabenlimit</strong>. Es gibt keinen
              Schalter, der bei einem Monatsbudget von 500 Euro hart
              abschaltet. Die Kontrolle muss man sich aus vier Bausteinen
              zusammensetzen. <strong>AWS Budgets</strong> liefert Alarme bei
              Schwellenüberschreitung und kann automatisch eine Sperr-Regel
              anhängen, aktualisiert seine Daten aber nur etwa einmal täglich,
              als Notbremse gegen einen außer Kontrolle geratenen Prozess ist
              das zu träge.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Schneller sind die <strong>CloudWatch-Metriken</strong>: Bedrock
              zählt Aufrufe sowie Input- und Output-Token je Modell nahezu in
              Echtzeit mit. Multipliziert man die Tokenzahlen mit den
              Modellpreisen, entsteht eine laufende Kostenschätzung, auf die
              sich Alarme setzen lassen, die in Minuten statt Tagen reagieren.
              Für die Zuordnung der Kosten auf Teams und Anwendungen gibt es{" "}
              <strong>Application Inference Profiles</strong>: eigene
              Modell-Endpunkte mit Kosten-Tags, die die Bedrock-Ausgaben im
              Kostenbericht sauber nach Abteilung oder Use-Case aufschlüsseln.
              Und die <strong>Service Quotas</strong>, also die Obergrenzen
              für Token pro Minute und Tag, wirken als eingebaute
              Kostenbremse: Mehr als Quota mal Tokenpreis kann ein Account gar
              nicht ausgeben. Wer diese vier Bausteine am ersten Tag
              einrichtet, statt auf die erste Rechnung zu warten, hat das
              Thema im Griff.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="direkt-api">
            <Typo.H2>Bedrock oder Anthropic-Direkt-API: der Kostenblick</Typo.H2>

            <BlogImage
              src="/blog/aws-bedrock-kosten/direkt-vs-bedrock.png"
              alt="Zwei Wege zum selben KI-Modell: über den Cloud-Marktplatz Bedrock oder direkt zur Anbieter-API"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Rein beim Listenpreis nehmen sich die beiden Wege wenig: Die
              Claude-Modelle kosten auf Bedrock am globalen Endpunkt dasselbe
              wie bei Anthropic direkt, und Batch-Rabatt wie Prompt-Caching
              existieren auf beiden Seiten mit derselben Logik. Der reale
              Unterschied entsteht am Rand: Auf Bedrock kommt für
              EU-gebundenes Routing der Regionalaufschlag hinzu, dafür landet
              alles auf der bestehenden AWS-Rechnung, läuft unter dem
              bestehenden AWS-Vertrag und lässt sich mit den eben
              beschriebenen AWS-Werkzeugen überwachen. Der Direktbezug ist
              bei den allerneuesten Modellversionen und Funktionen meist
              schneller dran. Wer bereits ernsthaft auf AWS arbeitet, fährt
              in der Regel mit Bedrock einfacher; wer keinerlei AWS-Bezug
              hat, spart sich mit der Direkt-API eine zusätzliche Schicht.
              Den breiteren Vergleich inklusive Azure und Selbst-Hosting
              finden Sie im{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Bedrock-Überblick
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              Bedrock ist für typische Mittelstands-Anwendungen kein
              Kostenrisiko, sondern gut kalkulierbar, wenn man vier Dinge
              beherzigt: das kleinste passende Modell wählen, Batch und
              Prompt-Caching konsequent nutzen, die Routing-Entscheidung
              zwischen EU-Aufschlag und globalem Basispreis bewusst treffen
              und die Kostenkontrolle am ersten Tag einrichten, nicht nach der
              ersten Rechnung. Ein interner Assistent oder eine
              Dokumenten-Pipeline landet dann bei zweistelligen
              Dollar-Beträgen im Monat, während die Grundkosten einer
              unbedacht angelegten Wissensdatenbank das Zehnfache verschlingen
              können.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die schwierigere Frage ist selten der Tokenpreis, sondern
              welcher Prozess die Investition wert ist und wie die Anwendung
              wartbar und datenschutzkonform gebaut wird. Genau dabei
              begleitet Bluebatch deutsche Mittelständler und Großhändler,
              von der Prozessauswahl bis zum Betrieb.{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Was kostet AWS Bedrock pro Monat?",
                  answer:
                    "Es gibt keine Grundgebühr, abgerechnet wird pro verarbeiteter Million Token. Ein interner Assistent mit Claude Haiku 4.5 und 10.000 Anfragen im Monat liegt grob bei 35 US-Dollar, eine nächtliche Batch-Dokumentenverarbeitung von 5.000 Dokumenten bei rund 12 US-Dollar. Teurer wird es durch große Modelle für Routineaufgaben und durch Nebenkosten wie dauerhaft laufende Vektor-Speicher.",
                },
                {
                  question:
                    "Kostet Bedrock in Frankfurt mehr als in den USA?",
                  answer:
                    "Ja, in mehrfacher Hinsicht. Die Claude-Modelle kosten bei EU-gebundenem Routing rund zehn Prozent mehr als am globalen Endpunkt, die Amazon-Nova-Modelle liegen in Frankfurt rund ein Drittel über den US-Preisen und das Embedding-Modell Titan V2 sogar beim Zehnfachen. Wer mit US-Preisbeispielen kalkuliert, unterschätzt die eigenen Kosten systematisch.",
                },
                {
                  question: "Wie funktioniert der Batch-Rabatt bei Bedrock?",
                  answer:
                    "Anfragen werden als Datei in einen S3-Bucket gelegt und asynchron abgearbeitet, typischerweise innerhalb von 24 Stunden. Dafür halbiert sich der Tokenpreis gegenüber On-Demand. Der Rabatt eignet sich für alles ohne Echtzeitanspruch, etwa Dokumentenauswertung oder Massenklassifikation. Nicht jedes Modell ist für Batch freigeschaltet, die neuesten Generationen folgen oft verzögert.",
                },
                {
                  question: "Was bringt Prompt-Caching bei Bedrock?",
                  answer:
                    "Der gleichbleibende Anfang eines Prompts, etwa der System-Prompt eines Agenten, wird zwischengespeichert. Der erste Aufruf kostet einen kleinen Aufschlag, jeder Folgeaufruf liest den gecachten Teil für rund ein Zehntel des Input-Preises. Auf den gecachten Anteil sind bis zu neunzig Prozent Ersparnis möglich, was Caching für Chatbots und Agenten zum größten einzelnen Sparhebel macht.",
                },
                {
                  question: "Kann ich bei Bedrock ein hartes Kostenlimit setzen?",
                  answer:
                    "Nein, ein natives Ausgabenlimit gibt es nicht. Die Kontrolle entsteht aus der Kombination von AWS Budgets für Alarme, CloudWatch-Token-Metriken für schnelle Reaktion, Application Inference Profiles für die Kostenzuordnung pro Team und den Service Quotas, die als Obergrenze für Token pro Minute faktisch den maximal möglichen Monatsverbrauch deckeln.",
                },
                {
                  question:
                    "Ist Bedrock teurer als die Anthropic-API direkt?",
                  answer:
                    "Am globalen Endpunkt nicht, die Listenpreise der Claude-Modelle sind identisch und Batch wie Caching existieren auf beiden Seiten. Ein Aufschlag von rund zehn Prozent entsteht auf Bedrock nur, wenn das Routing bewusst auf Europa begrenzt wird. Dafür bietet Bedrock die Abrechnung über den bestehenden AWS-Vertrag und die AWS-eigenen Kontrollwerkzeuge.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu den AWS Bedrock Kosten
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="abrechnungsmodelle">
            Abrechnungsmodelle
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="frankfurt-faktor">
            Der Frankfurt-Faktor
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modellpreise">
            Modellpreise
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="caching">
            Prompt-Caching
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="rechenbeispiele">
            Rechenbeispiele
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="nebenkosten">
            Nebenkosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kostenkontrolle">
            Kostenkontrolle
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="direkt-api">
            Bedrock oder Direkt-API
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
