import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "aws-bedrock-knowledge-base",
  author: "Max Hänsel",
  date: "2026-07-27",
  image: "/blog/aws-bedrock-knowledge-base/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "AWS Bedrock Knowledge Base: Managed RAG praxisnah erklärt",
  description:
    "AWS Bedrock Knowledge Base verständlich erklärt: Wie der gemanagte RAG-Baustein eigene Dokumente anbindet, welche Vektor-Stores und Chunking-Strategien es gibt und wann ein eigener Stack die bessere Wahl ist.",
  openGraph: {
    title: "AWS Bedrock Knowledge Base: Managed RAG praxisnah erklärt",
    description:
      "Retrieval-Augmented Generation ohne eigenen Stack: Wie Bedrock Knowledge Bases Dokumente aufnehmen, zerlegen und durchsuchbar machen, welche Entscheidungen man trotzdem selbst trifft und wo die Grenzen liegen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/aws-bedrock-knowledge-base/hero.png",
        width: 1200,
        height: 630,
        alt: "Ein IT-Team im Mittelstand plant einen internen Wissens-Assistenten auf eigenen Dokumenten",
      },
    ],
  },
  alternates: {
    canonical: "/blog/aws-bedrock-knowledge-base",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          AWS Bedrock Knowledge Base: RAG auf eigenen Dokumenten, ohne eigenen
          Stack
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-27">27. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/aws-bedrock-knowledge-base/hero.png"
          alt="Ein IT-Team im Mittelstand plant einen internen Wissens-Assistenten auf den eigenen Handbüchern und Verträgen"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Eine AWS Bedrock Knowledge Base löst das Problem, an dem die
              meisten internen KI-Assistenten scheitern: Das Sprachmodell kennt
              die eigenen Handbücher, Verträge und Artikeldaten nicht. Es kann
              eloquent antworten, aber eben nicht auf Basis der Dokumente, die
              im Unternehmen tatsächlich gelten. Der etablierte Lösungsansatz
              dafür heißt Retrieval-Augmented Generation, kurz RAG: Vor der
              Antwort sucht das System die passenden Textstellen aus den
              eigenen Unterlagen heraus und gibt sie dem Modell als Grundlage
              mit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              So eine RAG-Pipeline selbst zu bauen, ist ein eigenes Projekt.
              Genau hier setzen die Knowledge Bases von Amazon Bedrock an: ein
              gemanagter Baustein, der die komplette Strecke von der
              Dokumentenaufnahme bis zur Antwort mit Quellenangabe übernimmt.
              Dieser Beitrag erklärt, wie das funktioniert und welche
              Entscheidungen man trotzdem selbst treffen muss. Was Bedrock als
              Dienst insgesamt ist und wie es um AVV, Datenresidenz und die
              US-Anbieter-Frage steht, behandelt unser Überblick zu{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Amazon Bedrock
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-knowledge-base">
              Was ist eine Bedrock Knowledge Base?
            </Typo.H2>
            <Typo.Paragraph>
              Eine Knowledge Base ist der gemanagte RAG-Dienst innerhalb von
              Amazon Bedrock. Man verbindet eine Datenquelle, und der Dienst
              erledigt den Rest: Er holt die Dokumente ab, zerlegt sie in
              handliche Abschnitte, sogenannte Chunks, wandelt jeden Abschnitt
              mit einem Embedding-Modell in einen Zahlenvektor um und legt
              diese Vektoren in einer Vektordatenbank ab. Stellt später jemand
              eine Frage, wird die Frage genauso in einen Vektor übersetzt, die
              Datenbank liefert die inhaltlich ähnlichsten Abschnitte zurück,
              und das Sprachmodell formuliert daraus eine Antwort mit
              Quellenangabe.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/aws-bedrock-knowledge-base/rag-pipeline.png"
              alt="Die RAG-Pipeline einer Bedrock Knowledge Base: Dokumente anbinden, Chunking, Embeddings erzeugen, Vektor-Store, Retrieval, Antwort mit Quellen"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der praktische Unterschied zu einem frei antwortenden Chatbot ist
              groß. Die Antworten sind in den eigenen Dokumenten verankert und
              lassen sich über die zitierten Quellen nachprüfen. Neue oder
              geänderte Unterlagen fließen über eine Synchronisierung ein, ohne
              dass ein Modell neu trainiert werden müsste. Und weil die
              Pipeline als Dienst läuft, entfällt der Eigenbau aus Parser,
              Embedding-Jobs und Datenbankpflege, an dem viele
              RAG-Projekte im Mittelstand hängen bleiben.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenquellen">
              Datenquellen: von S3 bis Confluence
            </Typo.H2>
            <Typo.Paragraph>
              Die Standard-Datenquelle ist ein S3-Bucket, also der
              Objektspeicher von AWS. Dort liegen die Dokumente in gängigen
              Formaten wie PDF, Word, HTML, Markdown oder als reiner Text.
              Daneben gibt es Konnektoren, die Inhalte direkt aus verbreiteten
              Systemen ziehen, darunter Confluence, SharePoint und Salesforce,
              sowie einen Web Crawler für eigene öffentliche Seiten. Welche
              Konnektoren in welcher Region und in welchem Reifegrad verfügbar
              sind, ändert sich laufend und gehört vor dem Start geprüft.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/aws-bedrock-knowledge-base/datenquellen.png"
              alt="Anbindbare Datenquellen einer Bedrock Knowledge Base: Objektspeicher, Wiki, Dokumentablage, CRM und Web Crawler fließen in eine zentrale Wissensbasis"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Wichtig für den Betrieb ist die Synchronisierung. Eine Knowledge
              Base spiegelt die Quelle nicht live, sondern über Sync-Läufe, die
              neue, geänderte und gelöschte Dokumente erkennen und den
              Vektorbestand entsprechend nachziehen. Wie oft man synchronisiert,
              bestimmt die Aktualität der Antworten und zugleich die Kosten der
              Aufbereitung. Dokumente lassen sich außerdem mit Metadaten
              versehen, etwa Abteilung, Produktlinie oder Gültigkeit, nach denen
              das Retrieval später filtern kann. Das ist unscheinbar, aber in
              der Praxis einer der wirksamsten Hebel für treffsichere Antworten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vektor-store">Welcher Vektor-Store darf es sein?</Typo.H2>
            <Typo.Paragraph>
              Die Vektoren müssen irgendwo liegen, und hier trifft man die
              erste echte Architekturentscheidung. Der Schnellstart-Weg
              überlässt AWS die Wahl und legt eine OpenSearch-Serverless-Sammlung
              an. Das ist der bequemste Einstieg, hat aber eine Eigenschaft, die
              man kennen sollte: Der Store läuft dauerhaft und erzeugt damit
              laufende Grundkosten, auch wenn niemand fragt. Alternativ lässt
              sich eine Aurora-PostgreSQL-Datenbank mit der Erweiterung pgvector
              anbinden, was Teams entgegenkommt, die ohnehin in der SQL-Welt zu
              Hause sind. Auch externe Dienste wie Pinecone sind als Ziel
              möglich, dann mit eigenem Vertrag und eigener Abrechnung.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/aws-bedrock-knowledge-base/vektor-store-vergleich.png"
              alt="Vergleich der Vektor-Store-Optionen einer Bedrock Knowledge Base nach Aufwand, laufenden Kosten und Kontrolle"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Option</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Aufwand</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Laufende Kosten</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wann sinnvoll</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>OpenSearch Serverless</DataTable.Cell>
                  <DataTable.Cell>minimal, Default</DataTable.Cell>
                  <DataTable.Cell>Grundlast läuft durch</DataTable.Cell>
                  <DataTable.Cell>schneller Start, Produktion</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Aurora mit pgvector</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>je nach Dimensionierung</DataTable.Cell>
                  <DataTable.Cell>SQL-Know-how im Haus</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Externer Dienst</DataTable.Cell>
                  <DataTable.Cell>mittel, eigener Vertrag</DataTable.Cell>
                  <DataTable.Cell>anbieterabhängig</DataTable.Cell>
                  <DataTable.Cell>bestehende Tool-Landschaft</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>S3-basierte Vektoren</DataTable.Cell>
                  <DataTable.Cell>gering</DataTable.Cell>
                  <DataTable.Cell>deutlich günstiger</DataTable.Cell>
                  <DataTable.Cell>Einstieg, unkritische Latenz</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Seit einiger Zeit gibt es zusätzlich eine S3-basierte
              Vektor-Option, die deutlich günstiger ist als ein dauerhaft
              laufender Suchcluster und sich für Einstiegs- und interne
              Szenarien anbietet, bei denen es auf die letzte Millisekunde
              Antwortzeit nicht ankommt. Für die Wahl gilt die einfache Regel:
              Mit dem Default kommt man am schnellsten zum Ergebnis, mit
              pgvector bleibt man in vertrauter Technik, und die günstige
              S3-Variante lohnt einen Blick, bevor man für ein Pilotprojekt
              einen durchlaufenden Cluster bezahlt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="chunking">
              Chunking-Strategien: hier entsteht die Antwortqualität
            </Typo.H2>
            <Typo.Paragraph>
              Das Zerlegen der Dokumente klingt nach einem Implementierungsdetail,
              entscheidet aber maßgeblich darüber, wie gut die Antworten werden.
              Sind die Abschnitte zu groß, verwässert die Suche, weil jeder
              Treffer viel Irrelevantes mitbringt. Sind sie zu klein, reißt der
              Zusammenhang ab und das Modell bekommt Satzfetzen statt
              Argumenten. Bedrock bietet deshalb mehrere Strategien an.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/aws-bedrock-knowledge-base/chunking-strategien.png"
              alt="Vier Chunking-Strategien einer Bedrock Knowledge Base: Fixed-Size, hierarchisch, semantisch und eigene Logik"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der Default zerlegt Texte in Abschnitte fester Länge mit etwas
              Überlappung, damit an den Schnittkanten kein Sinn verloren geht.
              Das hierarchische Chunking hält zusätzlich größere Eltern-Abschnitte
              vor: Gesucht wird in den kleinen, präzisen Stücken, ans Modell geht
              aber der größere Zusammenhang. Das semantische Chunking schneidet
              an inhaltlichen Grenzen statt nach Zeichenzahl. Und wer besondere
              Formate hat, etwa stark strukturierte Produktdatenblätter, kann die
              Aufbereitung über eine eigene Lambda-Funktion komplett selbst
              übernehmen oder bereits vorzerlegte Dokumente ohne weiteres
              Chunking übergeben. Für den Start ist der Default fast immer
              richtig. Entscheidend ist, früh mit echten Fragen aus dem Alltag zu
              testen und die Strategie erst dann zu wechseln, wenn die Treffer
              systematisch danebenliegen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="apis">
              Retrieve oder RetrieveAndGenerate: zwei Wege zur Antwort
            </Typo.H2>
            <Typo.Paragraph>
              Für den Zugriff auf eine Knowledge Base gibt es zwei
              Schnittstellen, und die Wahl zwischen ihnen ist eine
              Architekturentscheidung. RetrieveAndGenerate ist der Komplettweg:
              Ein Aufruf übergibt die Frage, der Dienst sucht die passenden
              Abschnitte, lässt das gewählte Modell antworten und liefert das
              Ergebnis samt Zitaten zurück. Das ist der schnellste Weg zu einem
              funktionierenden Assistenten und für viele interne Anwendungen
              völlig ausreichend.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/aws-bedrock-knowledge-base/retrieve-vs-rag.png"
              alt="Zwei Zugriffswege auf eine Bedrock Knowledge Base: Retrieve liefert Textstellen an die eigene Anwendung, RetrieveAndGenerate liefert die fertige Antwort mit Quellen"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Retrieve dagegen liefert nur die gefundenen Textstellen mit
              Relevanzwerten und Quellenverweisen zurück und überlässt den Rest
              der eigenen Anwendung. Das braucht mehr Eigenbau, gibt aber die
              volle Kontrolle: eigenes Prompt-Design, ein frei gewähltes Modell,
              eigene Nachfilterung der Treffer oder die Einbettung in einen
              größeren Workflow, der nach der Antwort noch etwas tut, etwa ein
              Ticket anlegen. Wer solche mehrstufigen Abläufe plant, findet die
              konzeptionelle Grundlage in unserem Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              . Als Faustregel: RetrieveAndGenerate für den Assistenten, Retrieve
              sobald die Knowledge Base ein Baustein in einem größeren Prozess
              ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenschutz">
              EU-Region und Datenschutz: kurz eingeordnet
            </Typo.H2>
            <Typo.Paragraph>
              Knowledge Bases sind in EU-Regionen verfügbar, darunter Frankfurt.
              Chunks, Embeddings und Index liegen im eigenen AWS-Konto in der
              gewählten Region, und für Bedrock gilt auch hier: kein Training
              der Basismodelle auf Kundendaten, keine Weitergabe an die
              Modellanbieter. Man sollte sich allerdings bewusst machen, dass
              der Vektorbestand eine vollwertige Kopie der Dokumenteninhalte
              ist. Er gehört in dieselbe Berechtigungs- und Löschlogik wie die
              Quelldokumente, sonst leben ausgemusterte Verträge im Index
              weiter. Die vertragliche Seite mit AVV, Inferenz-Profilen und der
              US-Anbieter-Frage behandelt der{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Bedrock-Überblick
              </Link>{" "}
              im Detail, die grundsätzliche Einordnung liefert unser Beitrag zum{" "}
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
            <Typo.H2 id="managed-oder-eigenbau">
              Managed RAG oder eigener Stack?
            </Typo.H2>
            <Typo.Paragraph>
              Die ehrliche Gegenfrage zu jedem Managed-Dienst lautet: Wäre der
              Eigenbau besser? Ein eigener RAG-Stack, zum Beispiel aus einem
              selbst gehosteten n8n, einer PostgreSQL-Datenbank mit pgvector und
              frei gewählten Embedding-Modellen, gibt die Kontrolle über jede
              einzelne Stufe: eigene Parser für Spezialformate, eigene
              Ranking-Logik, volle Datenhoheit bis hin zum Betrieb im eigenen
              Rechenzentrum. Wie so ein Setup aufgesetzt wird, zeigt unsere{" "}
              <Link
                href="/blog/n8n-selbst-hosten-anleitung"
                className="text-primary-600 hover:underline"
              >
                Anleitung zum n8n-Self-Hosting
              </Link>
              . Der Preis dafür ist Betriebsverantwortung: Updates, Monitoring,
              Skalierung und die Pflege der Pipeline liegen dann im eigenen
              Haus.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Knowledge Base ist die richtige Wahl, wenn die Daten ohnehin
              in oder nahe der AWS-Welt liegen, wenig Betriebskapazität
              vorhanden ist und die Standard-Pipeline die Anforderungen
              abdeckt. Der eigene Stack gewinnt, wenn harte
              On-Premises-Vorgaben gelten, exotische Dokumentformate dominieren
              oder das Retrieval so speziell werden soll, dass die
              Konfigurationsmöglichkeiten des Dienstes nicht mehr reichen. In
              der Praxis sehen wir oft einen Mittelweg: mit der Knowledge Base
              schnell zum funktionierenden Piloten kommen und erst dann in
              Eigenbau investieren, wenn ein konkreter Engpass es rechtfertigt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">Womit man bei den Kosten rechnen muss</Typo.H2>
            <Typo.Paragraph>
              Konkrete Preise ändern sich zu häufig, um sie hier festzuschreiben,
              aber die Struktur ist stabil und für die Planung wichtiger. Drei
              Posten treiben die Rechnung: das Embedding-Modell, das bei jeder
              Synchronisierung die neuen Dokumente und bei jeder Frage die
              Anfrage in Vektoren übersetzt, der Vektor-Store, der bei einem
              dauerhaft laufenden Suchcluster den größten Fixkostenblock stellt,
              und die Modellaufrufe für die Antworterzeugung. Daraus folgen die
              Hebel: Sync-Frequenz am tatsächlichen Änderungstempo der Dokumente
              ausrichten statt stündlich alles neu einzulesen, die
              Vektor-Store-Wahl an der realen Last ausrichten und für Piloten
              die günstige S3-Variante prüfen. Ein Kostenalarm im AWS-Konto
              gehört von Tag eins dazu.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Eine AWS Bedrock Knowledge Base nimmt einem den mühsamsten Teil
              eines RAG-Projekts ab: die Pipeline aus Dokumentenaufnahme,
              Chunking, Embeddings und Vektorsuche als gemanagten Baustein, mit
              Antworten, die in den eigenen Unterlagen verankert und über
              Quellen belegbar sind. Selbst entscheiden muss man die Dinge, die
              den Unterschied machen: welche Datenquellen angebunden werden,
              welcher Vektor-Store zum Budget und zur Last passt, welche
              Chunking-Strategie die Dokumente sinnvoll zerlegt und ob
              RetrieveAndGenerate reicht oder Retrieve in den eigenen Workflow
              eingebettet wird. Für den typischen Anwendungsfall im
              Mittelstand, den internen Assistenten auf Handbüchern, Verträgen
              und Produktdaten, ist das ein sehr direkter Weg zum Piloten. Wie
              solche Assistenten in konkrete Abläufe übersetzt werden, zeigen
              unsere Beispiele aus dem{" "}
              <Link
                href="/branchen/grosshandel"
                className="text-primary-600 hover:underline"
              >
                Großhandel
              </Link>
              . Und wenn ihr überlegt, ob eine Knowledge Base oder ein eigener
              Stack besser zu eurer Landschaft passt, sprecht uns gern an, wir{" "}
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
                  question: "Was ist eine AWS Bedrock Knowledge Base?",
                  answer:
                    "Eine Bedrock Knowledge Base ist der gemanagte RAG-Baustein von Amazon Bedrock. Sie nimmt eigene Dokumente aus Quellen wie S3 auf, zerlegt sie in Abschnitte, erzeugt Embeddings und legt sie in einem Vektor-Store ab. Bei einer Frage sucht der Dienst die passenden Textstellen und lässt ein Sprachmodell eine Antwort mit Quellenangabe formulieren.",
                },
                {
                  question:
                    "Welche Datenquellen kann ich an eine Knowledge Base anbinden?",
                  answer:
                    "Die Standardquelle ist ein S3-Bucket mit Dokumenten in Formaten wie PDF, Word, HTML oder Markdown. Daneben gibt es Konnektoren für Systeme wie Confluence, SharePoint und Salesforce sowie einen Web Crawler für öffentliche Seiten. Der Bestand wird über Sync-Läufe aktuell gehalten, die neue, geänderte und gelöschte Dokumente erkennen.",
                },
                {
                  question: "Welchen Vektor-Store sollte ich wählen?",
                  answer:
                    "Der Schnellstart legt eine OpenSearch-Serverless-Sammlung an, die bequem ist, aber dauerhafte Grundkosten erzeugt. Aurora PostgreSQL mit pgvector passt zu Teams mit SQL-Erfahrung, externe Dienste wie Pinecone zu bestehenden Tool-Landschaften. Für Piloten und unkritische Latenz lohnt der Blick auf die deutlich günstigere S3-basierte Vektor-Option.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen Retrieve und RetrieveAndGenerate?",
                  answer:
                    "RetrieveAndGenerate erledigt Suche und Antwort in einem Aufruf und liefert das Ergebnis mit Zitaten, der schnellste Weg zu einem Assistenten. Retrieve gibt nur die gefundenen Textstellen mit Relevanzwerten zurück, sodass die eigene Anwendung Prompt, Modellwahl und Weiterverarbeitung selbst steuert. Das ist der richtige Weg, wenn die Knowledge Base Teil eines größeren Workflows ist.",
                },
                {
                  question:
                    "Bleiben meine Dokumente bei einer Knowledge Base in der EU?",
                  answer:
                    "Knowledge Bases sind in EU-Regionen wie Frankfurt verfügbar. Chunks, Embeddings und Index liegen im eigenen AWS-Konto in der gewählten Region, und Bedrock trainiert keine Basismodelle auf Kundendaten. Zu beachten bleibt, dass der Vektorbestand eine Kopie der Dokumenteninhalte ist und in dieselbe Berechtigungs- und Löschlogik gehört wie die Quelldokumente.",
                },
                {
                  question: "Was kostet eine Bedrock Knowledge Base?",
                  answer:
                    "Die Abrechnung setzt sich aus drei Posten zusammen: Embedding-Aufrufe bei Synchronisierung und Anfragen, der Vektor-Store als größter Fixkostenblock bei dauerhaft laufenden Clustern sowie die Modellaufrufe für die Antworterzeugung. Konkrete Preise ändern sich häufig und hängen vom Modell und Store ab. Wichtigste Hebel sind eine passende Sync-Frequenz, die Wahl des Vektor-Stores und ein Kostenalarm von Beginn an.",
                },
              ]}
            >
              <FaqContainer.Headline>Häufige Fragen</FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-knowledge-base">
            Was ist eine Knowledge Base
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenquellen">
            Datenquellen anbinden
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="vektor-store">
            Vektor-Store wählen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="chunking">
            Chunking-Strategien
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="apis">
            Retrieve vs. RetrieveAndGenerate
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            EU-Region und Datenschutz
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="managed-oder-eigenbau">
            Managed RAG oder eigener Stack
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Kostenstruktur
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
