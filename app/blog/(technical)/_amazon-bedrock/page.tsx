import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "amazon-bedrock",
  author: "Max Hänsel",
  date: "2026-07-13",
  image: "/blog/amazon-bedrock/hero.png",
  tags: ["ki", "datenschutz"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Amazon Bedrock: KI managed und DSGVO-nah in der EU nutzen",
  description:
    "Amazon Bedrock verständlich erklärt: Wie der Managed-Service Claude und andere Modelle über eine API bereitstellt, wie Datenresidenz in EU-Regionen funktioniert, was AVV, Verschlüsselung und die US-Anbieter-Frage für den Mittelstand bedeuten.",
  openGraph: {
    title: "Amazon Bedrock: KI managed und DSGVO-nah in der EU nutzen",
    description:
      "Managed-Private statt Server selbst betreiben: Wie Amazon Bedrock Foundation Models über eine API bereitstellt, wie Daten in EU-Regionen bleiben, was AVV und Verschlüsselung leisten und wo die ehrlichen Vorbehalte für den Mittelstand liegen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/amazon-bedrock/hero.png",
        width: 1200,
        height: 630,
        alt: "Ein Mittelstands-Team plant eine KI-Anwendung mit Amazon Bedrock",
      },
    ],
  },
  alternates: {
    canonical: "/blog/amazon-bedrock",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Amazon Bedrock: KI managed und nah an der DSGVO betreiben
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-13">13. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/amazon-bedrock/hero.png"
          alt="Ein Mittelstands-Team plant eine KI-Anwendung in der eigenen Cloud-Umgebung mit Amazon Bedrock"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Wer im Mittelstand eine KI-Anwendung produktiv stellen will, steht
              schnell vor derselben Zwickmühle: Die starken Sprachmodelle kommen
              fast alle von US-Anbietern, aber die Daten sollen weder unkontrolliert
              ins Ausland fließen noch in fremden Trainingsdaten landen. Eigene
              Modelle auf eigener Hardware zu betreiben, ist für die meisten Firmen
              zu aufwändig. Amazon Bedrock ist der Versuch, genau diesen Mittelweg
              zu liefern: ein gemanagter Dienst, der Modelle wie Claude über eine
              API bereitstellt, ohne dass man selbst Server betreiben muss, und der
              dabei die Werkzeuge mitbringt, um die Verarbeitung in einer EU-Region
              zu halten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag erklärt, was Bedrock ist, wie die Datenresidenz in
              EU-Regionen wirklich funktioniert, an welcher Stelle sie kippen kann,
              und was AVV, Verschlüsselung und die Tatsache, dass AWS ein
              US-Anbieter ist, für den Mittelstand bedeuten. Es geht weniger um die
              technische Bedienung als um die Frage, ob und wie sich Bedrock
              datenschutzbewusst einsetzen lässt. Den breiteren Rahmen dazu liefert
              unser Überblick zum{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI-Datenschutz
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-bedrock">Was ist Amazon Bedrock?</Typo.H2>
            <Typo.Paragraph>
              Amazon Bedrock ist ein vollständig gemanagter, serverloser Dienst von
              AWS, der über eine einzige API Zugriff auf Foundation Models, also
              große KI- und Sprachmodelle, verschiedener Anbieter gibt. Man muss
              keine GPU-Cluster aufsetzen, keine Modelle selbst hosten und keine
              Infrastruktur betreiben. Das Modell ist eine API-Adresse, kein Server
              im eigenen Keller. Und weil alle Modelle über dieselbe Schnittstelle
              laufen, lässt sich das eine gegen das andere austauschen, ohne die
              ganze Anwendung neu zu schreiben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Reiz für den Mittelstand liegt in der Auswahl. Über Bedrock sind
              Modelle zahlreicher Anbieter erreichbar, darunter die Claude-Familie
              von Anthropic, Amazons eigene Nova-Modelle, Llama von Meta sowie
              Modelle von Mistral, Cohere und weiteren. Gerade für Claude ist AWS
              eine der naheliegenden Cloud-Optionen. Statt für jedes Modell einen
              eigenen Vertrag mit einem eigenen US-Dienstleister zu schließen, hat
              man einen Vertragspartner, eine Abrechnung und eine
              Sicherheitsarchitektur.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/amazon-bedrock/bedrock-ueberblick.png"
              alt="Eine API in der Mitte, angebunden an mehrere Modellanbieter wie Claude, Llama, Mistral und Nova, als gemanagter Dienst ohne eigenen Betrieb"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Welche Modelle und welche Versionen jeweils verfügbar sind, ändert
              sich laufend. Neue Generationen kommen hinzu, ältere verschwinden,
              und manche Modelle sind zuerst nur in einzelnen Regionen erreichbar.
              Für die Praxis heißt das: Auf den genauen Versionsstand sollte man
              eine Anwendung nicht festnageln, wohl aber auf die Modellfamilie und
              die Schnittstelle, die stabil bleibt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenresidenz">
              EU-Regionen und Datenresidenz: der entscheidende Punkt
            </Typo.H2>
            <Typo.Paragraph>
              Für deutsche Unternehmen ist die wichtigste Frage nicht, was Bedrock
              kann, sondern wo die Daten verarbeitet werden. Bedrock ist in
              mehreren europäischen Regionen verfügbar, unter anderem Frankfurt und
              Irland. Wählt man eine EU-Region und betreibt reine In-Region-Inference,
              bleiben die Daten standardmäßig in dieser Region. Auch die Protokolle,
              etwa die Aufzeichnungen der Modellaufrufe, werden nur dort geschrieben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Komplizierter wird es bei der sogenannten Cross-Region Inference. Um
              Lastspitzen abzufangen und Kapazität zu sichern, kann AWS Anfragen
              über mehrere Regionen verteilen. Hier ist es entscheidend, den
              richtigen Modus zu wählen, denn davon hängt ab, ob die EU-Datenresidenz
              hält oder nicht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/amazon-bedrock/datenresidenz-eu.png"
              alt="Vergleich der drei Inference-Modi: In-Region bleibt in einer EU-Region, EU-Geographic bleibt innerhalb der EU, Global kann die EU verlassen"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Es gibt im Kern drei Stufen. Bei der In-Region-Verarbeitung bleibt
              alles in der einen gewählten Region. Beim EU-Geographic-Profil verteilt
              AWS Anfragen aus EU-Quellregionen ausschließlich auf andere
              AWS-Regionen innerhalb der EU, die Daten verlassen die EU also nicht,
              und die Übertragung läuft verschlüsselt über das interne AWS-Netz statt
              über das offene Internet. Beim globalen Profil dagegen kann eine
              Anfrage in beliebige kommerzielle AWS-Regionen weltweit geroutet
              werden. AWS warnt selbst ausdrücklich davor, das globale Profil nur
              dann zu verwenden, wenn die eigene Data-Governance eine Verarbeitung
              in beliebigen Regionen erlaubt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Daraus folgt die wichtigste Stellschraube für den datenschutzbewussten
              Einsatz: bewusst In-Region oder das EU-Geographic-Profil wählen und das
              globale Profil meiden. Wer hier nicht aufpasst, hat die EU-Region zwar
              ausgewählt, schickt seine Prompts über das globale Profil aber trotzdem
              um die Welt. Das ist die häufigste Stolperfalle und einer der Punkte,
              die man bei der Einrichtung sauber dokumentieren sollte.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenschutz">
              Bleiben die Daten privat? Training, Verschlüsselung, Zugriff
            </Typo.H2>
            <Typo.Paragraph>
              Die zweite große Sorge nach dem Speicherort ist die Frage, was mit den
              Inhalten passiert. Hier ist die Position von AWS klar und ungewöhnlich
              eindeutig: Bedrock teilt die Daten weder mit den Modellanbietern noch
              nutzt es sie, um die Basismodelle zu trainieren. Eingaben und Ausgaben
              werden also nicht an Anthropic, Meta oder andere weitergereicht und
              fließen nicht in deren Training. Die Modellanbieter haben keinen Zugriff
              auf die AWS-Konten, in denen die Verarbeitung läuft.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Technisch flankiert wird das durch Verschlüsselung in der Übertragung
              und im Speicher. Über den AWS-Schlüsseldienst lassen sich eigene
              kundenverwaltete Schlüssel einsetzen, sodass die Kontrolle über die
              Verschlüsselung im eigenen Haus bleibt. Die Anbindung kann über private
              Netzwerkverbindungen erfolgen, sodass der Datenverkehr das öffentliche
              Internet gar nicht erst berührt. In Summe ist das genau die Idee von
              Managed-Private: Man bekommt einen großen Teil der Kontrolle einer
              eigenen Installation, ohne den Betriebsaufwand zu tragen. Eine
              ähnliche Logik beschreiben wir am Produktbeispiel im Beitrag zu{" "}
              <Link
                href="/blog/claude-cowork-managed-private"
                className="text-primary-600 hover:underline"
              >
                Claude Cowork als Managed-Private-Lösung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="avv-dsgvo">AVV, DSGVO und die US-Anbieter-Frage</Typo.H2>
            <Typo.Paragraph>
              Datenschutz ist nicht nur Technik, sondern auch Vertrag. AWS bietet
              einen DSGVO-konformen Auftragsverarbeitungs-Zusatz, der Teil der
              Service-Bedingungen ist und für alle Kunden mit DSGVO-Pflicht
              automatisch gilt. AWS agiert dabei als Auftragsverarbeiter, die neuen
              EU-Standardvertragsklauseln sind eingebunden. Auf der Zertifizierungsseite
              kann AWS unter anderem ISO 27001 und für die Region Frankfurt das
              C5-Testat des BSI vorweisen. Wichtig für die Einordnung: C5 ist ein
              Testat, keine Zertifizierung im engeren Sinn, und es ist immer regional
              zu sehen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/amazon-bedrock/compliance-bausteine.png"
              alt="DSGVO-Bausteine bei Amazon Bedrock: EU-Region, kein Training auf Kundendaten, Verschlüsselung mit eigenen Schlüsseln, AVV mit Standardvertragsklauseln und C5-Testat"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Bei aller Technik und allen Verträgen bleibt ein ehrlicher Vorbehalt:
              AWS ist ein US-Unternehmen. Auch wenn die Verarbeitung in Frankfurt
              läuft, steht im Raum, ob US-Behörden über Regelungen wie den CLOUD Act
              Zugriff verlangen könnten. Seit dem Schrems-II-Urteil stützt AWS
              Datentransfers auf die Standardvertragsklauseln samt ergänzender
              Maßnahmen und verpflichtet sich, überbreite oder europarechtswidrige
              Behördenanfragen anzufechten. Ein Restrisiko lässt sich damit
              verkleinern, aber nicht vollständig vertraglich wegdefinieren.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Genau an diesem Punkt setzt die AWS European Sovereign Cloud an, eine
              eigene, von den globalen AWS-Regionen getrennte Infrastruktur mit
              erster Region in Deutschland, betrieben von in der EU ansässigem
              Personal. Sie ist seit Anfang 2026 verfügbar und adressiert das
              Souveränitäts-Thema direkter. Ein wichtiger Vorbehalt gehört aber
              dazu: Das Modellangebot dort ist anfangs eingeschränkt, nach aktuellem
              Stand stehen vor allem Amazons eigene Modelle bereit, während etwa
              Claude zunächst über die regulären EU-Regionen mit EU-Cross-Region-Inference
              läuft. Dieser Bereich ist in Bewegung, und wer auf maximale
              Souveränität angewiesen ist, sollte den jeweils aktuellen Stand prüfen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Und schließlich die wichtigste Trennung: AWS liefert die Werkzeuge, den
              AVV und die EU-Regionen, aber die DSGVO-Konformität der konkreten
              Anwendung verantwortet immer der Kunde als Verantwortlicher. Die
              Aussagen hier sind eine allgemeine Einordnung und kein Rechtsrat. Im
              Zweifel klärt eine Datenschutzberatung den Einzelfall. Welche Tools
              sich nach diesen Kriterien grundsätzlich eignen, ordnet unser Überblick
              zu{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-konformen KI-Tools
              </Link>{" "}
              ein.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bausteine">
              Die Bausteine: Knowledge Bases, Agents und Guardrails
            </Typo.H2>
            <Typo.Paragraph>
              Bedrock ist mehr als ein Tor zu einem Sprachmodell. Drumherum gibt es
              gemanagte Bausteine, die genau die Aufgaben abnehmen, an denen eigene
              KI-Projekte sonst hängen bleiben. Knowledge Bases sind ein gemanagter
              Dienst für Retrieval-Augmented Generation, also dafür, Antworten in
              den eigenen Unternehmensdokumenten zu verankern, statt das Modell frei
              raten zu lassen. Damit beantwortet die KI Fragen auf Basis der eigenen
              Handbücher, Verträge oder Produktdaten.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/amazon-bedrock/bedrock-bausteine.png"
              alt="Vier Bausteine von Amazon Bedrock: Knowledge Bases für Retrieval, Agents für mehrstufige Aufgaben, Guardrails für Sicherheit und Model Customization für Fine-tuning"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Agents übernehmen mehrstufige Aufgaben und können dabei Datenquellen
              anbinden und Systeme über Schnittstellen aufrufen. Guardrails sind
              konfigurierbare Schutzmechanismen, die unerwünschte Inhalte filtern,
              bestimmte Themen sperren und personenbezogene Daten schützen,
              unabhängig vom eingesetzten Modell. Über die Modellanpassung lassen
              sich Modelle mit eigenen Daten fein-tunen. Wer das Grundprinzip
              solcher agentischen Bausteine tool-unabhängig verstehen will, findet
              die Einordnung in unserem Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">Was kostet Bedrock?</Typo.H2>
            <Typo.Paragraph>
              Bedrock rechnet nutzungsbasiert ab, und es gibt mehrere Modelle, die
              sich nach Lastprofil unterscheiden. Im On-Demand-Modus zahlt man pro
              verarbeiteter Texteinheit, getrennt nach Eingabe und Ausgabe, ohne
              etwas im Voraus zu reservieren. Das ist der flexibelste Einstieg und
              passt zu variabler Last. Für große, nicht zeitkritische Mengen ist die
              asynchrone Stapelverarbeitung deutlich günstiger. Wer hohes,
              planbares Volumen hat, kann reservierte Kapazität buchen und bekommt
              dafür garantierten Durchsatz.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die konkreten Beträge je Modell und Texteinheit ändern sich häufig und
              hängen vom gewählten Modell ab, deshalb nennen wir hier bewusst keine
              Zahlen. Wichtiger als der Tarif eines einzelnen Modells ist für die
              Planung die Struktur: Die laufenden Kosten skalieren mit der Nutzung,
              und Mechanismen wie das Zwischenspeichern wiederkehrender Prompt-Teile
              oder die Stapelverarbeitung sind die wirksamsten Hebel, um sie zu
              senken. Von Anfang an Limits und ein Kostenmonitoring zu setzen, gehört
              zur seriösen Einführung dazu.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vergleich">
              Bedrock, Direkt-API, Azure oder selbst hosten?
            </Typo.H2>
            <Typo.Paragraph>
              Bedrock ist nicht der einzige Weg zu einem starken Sprachmodell. Es
              lohnt sich, die Alternativen ehrlich gegeneinander zu stellen, denn die
              richtige Wahl hängt vom Reifegrad und von der bestehenden
              IT-Landschaft ab.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/amazon-bedrock/vergleich-optionen.png"
              alt="Vergleich von Amazon Bedrock, Direkt-API, Azure OpenAI und Selbst-Hosting entlang Datenkontrolle, Betriebsaufwand und Modellauswahl"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Gegenüber der direkten Anbieter-API, etwa von Anthropic oder OpenAI,
              ist der Vorteil von Bedrock vor allem vertraglicher und organisatorischer
              Natur: ein Vertragspartner, ein AVV, eine EU-Region, eigene
              Schlüssel und die native Einbettung in die AWS-Welt mit
              Rechteverwaltung und Monitoring. Der Preis dafür ist eine etwas höhere
              Latenz durch die zusätzliche Schicht, und die allerneuesten
              Modellversionen erscheinen manchmal zeitversetzt gegenüber dem
              Direktzugang beim Anbieter.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Option</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Datenkontrolle</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Aufwand</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Modellauswahl</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Amazon Bedrock</DataTable.Cell>
                  <DataTable.Cell>hoch, EU-Region möglich</DataTable.Cell>
                  <DataTable.Cell>gering, managed</DataTable.Cell>
                  <DataTable.Cell>viele Anbieter</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Direkt-API</DataTable.Cell>
                  <DataTable.Cell>vom Anbieter abhängig</DataTable.Cell>
                  <DataTable.Cell>gering</DataTable.Cell>
                  <DataTable.Cell>nur ein Anbieter</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Azure OpenAI</DataTable.Cell>
                  <DataTable.Cell>hoch, EU-Region möglich</DataTable.Cell>
                  <DataTable.Cell>gering, managed</DataTable.Cell>
                  <DataTable.Cell>OpenAI-zentriert</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Selbst hosten</DataTable.Cell>
                  <DataTable.Cell>maximal</DataTable.Cell>
                  <DataTable.Cell>sehr hoch</DataTable.Cell>
                  <DataTable.Cell>nur Open Source</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Azure OpenAI ist die naheliegende Wahl für Häuser, die ohnehin
              Microsoft-nativ arbeiten, allerdings auf die OpenAI-Modellfamilie
              fokussiert. Wer Claude in der Cloud will, kommt an AWS und Bedrock
              kaum vorbei. Das andere Extrem ist das Selbst-Hosten eines
              Open-Source-Modells auf eigener Hardware: maximale Datenkontrolle, weil
              die Daten das eigene Haus nie verlassen, aber mit dem vollen Gewicht
              aus Hardwarekosten, Betrieb, Modellpflege und Sicherheit. Für die
              meisten Mittelständler ist das unrealistisch. Bedrock liefert einen
              großen Teil der Datenschutzvorteile, ohne diesen Aufwand, und ist
              damit der pragmatische Mittelweg zwischen alles selbst betreiben und
              Daten ungefiltert an einen US-Dienst schicken.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="mittelstand">
              Was das für den Mittelstand bedeutet
            </Typo.H2>
            <Typo.Paragraph>
              Für ein typisches Mittelstands- oder Großhandelsunternehmen ist Bedrock
              vor allem dann interessant, wenn eine KI-Anwendung mit echten
              Unternehmensdaten arbeiten soll, etwa ein Assistent auf den eigenen
              Produkt- und Vertragsdokumenten, eine Klassifikation eingehender
              Anfragen oder die Anreicherung von Stammdaten. In solchen Fällen zählt
              die Kombination aus EU-Region, ausbleibendem Training auf den eigenen
              Daten und vertraglicher Absicherung mehr als die letzte Nuance an
              Modellqualität. Wie sich solche Anwendungen in konkrete Abläufe
              übersetzen, zeigen die Beispiele aus dem{" "}
              <Link
                href="/use-cases/grosshandel"
                className="text-primary-600 hover:underline"
              >
                Großhandel
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die ehrlichen Hausaufgaben bleiben: das richtige Inferenz-Profil wählen,
              damit die Daten in der EU bleiben, das Restrisiko des US-Anbieters
              bewerten und gegebenenfalls die Sovereign Cloud im Auge behalten, die
              laufenden Kosten von Beginn an deckeln und die DSGVO-Konformität der
              eigenen Anwendung selbst verantworten. Wer den Bogen vom einzelnen
              Modellaufruf zum durchdachten Prozess schlagen will, findet die
              breitere Perspektive in unserem{" "}
              <Link
                href="/blog/prozessautomatisierung-guide"
                className="text-primary-600 hover:underline"
              >
                Leitfaden zur Prozessautomatisierung
              </Link>
              . Und wer abwägt, ob ein Enterprise-Tarif beim Anbieter selbst die
              einfachere Antwort ist, findet die Gegenüberstellung im Beitrag zu{" "}
              <Link
                href="/blog/chatgpt-enterprise-deutschland"
                className="text-primary-600 hover:underline"
              >
                ChatGPT Enterprise in Deutschland
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Amazon Bedrock ist für den Mittelstand vor allem deshalb spannend, weil
              es den aufwändigen Eigenbetrieb erspart und trotzdem die wichtigsten
              Datenschutz-Hebel in die Hand gibt: Modelle wie Claude über eine API,
              Verarbeitung in einer EU-Region, kein Training auf den eigenen Daten,
              keine Weitergabe an die Modellanbieter, Verschlüsselung mit eigenen
              Schlüsseln und ein AVV mit Standardvertragsklauseln. Zwei Vorbehalte
              gehören ehrlicherweise dazu: AWS bleibt ein US-Anbieter mit dem
              bekannten Drittland-Restrisiko, das die neue European Sovereign Cloud
              adressieren soll, und wer das globale Inferenz-Profil aktiviert,
              verlässt die EU-Datenresidenz. Wer diese Punkte bewusst steuert,
              bekommt einen pragmatischen Weg, KI datenschutznah produktiv zu
              stellen. Wenn ihr überlegt, das in eurem Haus aufzusetzen, sprecht uns
              gern an, wir{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                helfen bei der Einordnung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Was ist Amazon Bedrock einfach erklärt?",
                  answer:
                    "Amazon Bedrock ist ein gemanagter AWS-Dienst, der über eine einzige API Zugriff auf große KI-Sprachmodelle verschiedener Anbieter gibt, darunter Claude, Llama, Mistral und Amazons Nova. Man muss keine eigene Hardware betreiben und kein Modell selbst hosten. Modelle lassen sich austauschen, ohne die Anwendung neu zu schreiben.",
                },
                {
                  question:
                    "Ist Amazon Bedrock DSGVO-konform nutzbar?",
                  answer:
                    "Bedrock bringt die wichtigsten Bausteine mit: Verarbeitung in EU-Regionen, kein Training auf Kundendaten, keine Weitergabe an Modellanbieter, Verschlüsselung mit eigenen Schlüsseln sowie einen AVV mit Standardvertragsklauseln. Da AWS ein US-Anbieter ist, bleibt ein Drittland-Restrisiko. Die DSGVO-Konformität der konkreten Anwendung verantwortet immer der Kunde. Das ist eine Einordnung und kein Rechtsrat.",
                },
                {
                  question:
                    "Bleiben meine Daten bei Amazon Bedrock in der EU?",
                  answer:
                    "Bei In-Region-Verarbeitung in einer EU-Region bleiben die Daten dort. Beim EU-Geographic-Profil der Cross-Region Inference werden Anfragen nur auf andere EU-Regionen verteilt, verlassen die EU also nicht. Das globale Profil dagegen kann Anfragen weltweit routen und ist für strikte EU-Datenresidenz ungeeignet. Die Wahl des richtigen Profils ist die entscheidende Stellschraube.",
                },
                {
                  question:
                    "Trainiert AWS seine Modelle mit meinen Bedrock-Daten?",
                  answer:
                    "Nein. Nach Aussage von AWS werden die Eingaben und Ausgaben weder mit den Modellanbietern geteilt noch zum Training der Basismodelle verwendet. Die Modellanbieter haben keinen Zugriff auf die AWS-Konten, in denen die Verarbeitung läuft.",
                },
                {
                  question:
                    "Kann ich Claude über Amazon Bedrock in einer EU-Region nutzen?",
                  answer:
                    "Ja, die Claude-Modelle sind über mehrere EU-Regionen erreichbar, teils direkt in der Region, teils über das EU-Cross-Region-Inference-Profil, das innerhalb der EU bleibt. Welches Modell in welcher Region in-region oder nur über das EU-Profil verfügbar ist, ändert sich laufend und sollte vor dem Produktivstart geprüft werden.",
                },
                {
                  question:
                    "Was unterscheidet Bedrock von Azure OpenAI?",
                  answer:
                    "Azure OpenAI ist auf die OpenAI-Modellfamilie fokussiert und passt gut in eine Microsoft-native Landschaft. Bedrock ist multi-provider und bietet unter anderem Claude, Llama und Mistral über eine API. Wer Claude in der Cloud nutzen will, kommt an AWS und Bedrock kaum vorbei. Beide bieten EU-Regionen, einen AVV und Enterprise-Compliance.",
                },
              ]}
            >
              <FaqContainer.Headline>Häufige Fragen</FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-bedrock">
            Was ist Amazon Bedrock
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenresidenz">
            EU-Regionen und Datenresidenz
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            Training, Verschlüsselung, Zugriff
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="avv-dsgvo">
            AVV, DSGVO und US-Anbieter
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bausteine">
            Knowledge Bases, Agents, Guardrails
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Was kostet Bedrock
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="vergleich">
            Bedrock, API, Azure oder selbst hosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="mittelstand">
            Für den Mittelstand
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
