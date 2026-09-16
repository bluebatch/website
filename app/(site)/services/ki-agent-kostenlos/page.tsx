import type { Metadata } from "next";
import Image from "next/image";
import { ogImages } from "@/lib/og";
import ContentWrapper from "@/components/layout/content-wrapper";
import SimpleGrid from "@/components/layout/simple-grid";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProseColumns, { ProseColumnsItem } from "@/components/ui/prose-columns";
import StatsList from "@/components/ui/stats-list";
import SimpleCard from "@/components/cards/simple-card";
import { FaqContainer } from "@/components/ui/faqs";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "KI-Agent kostenlos: wie weit Sie ohne Budget kommen | Bluebatch",
  description:
    "KI-Agent kostenlos nutzen: Gratis-Kontingent und Open Source sind zwei verschiedene Dinge. Was danach anfällt, mit echten Zahlen zu Server-, Modell- und Betriebskosten.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "KI-Agent kostenlos: wie weit Sie ohne Budget wirklich kommen",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("KI-Agent kostenlos", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Agent kostenlos: wie weit Sie ohne Budget wirklich kommen",
    description: meta.description,
    images: ogImages("KI-Agent kostenlos", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/ki-agent-kostenlos",
  },
};

const faqs = [
  {
    question: "Gibt es wirklich kostenlose KI-Agenten?",
    answer:
      "Ja, aber in zwei sehr verschiedenen Formen. Open-Source-Software wie n8n, Flowise oder LangChain kostet dauerhaft keine Lizenzgebühr, Sie zahlen stattdessen Server und Betreuung. Gratis-Kontingente kommerzieller Baukästen kosten am Anfang nichts, laufen aber nach einer festen Zahl von Ausführungen oder Credits aus und werden dann zum Abo. Beides wird unter demselben Wort beworben, und der Unterschied entscheidet darüber, ob Sie in drei Monaten noch kostenlos arbeiten.",
  },
  {
    question: "Was kostet ein selbst gehosteter KI-Agent im Monat?",
    answer:
      "Der Server liegt bei 15 bis 40 Euro im Monat, je nachdem wie viel gleichzeitig läuft. Dazu kommen die Modellkosten, die sich nach Nutzung richten: Ein Agentenlauf mit rund 8.000 Eingabe- und 1.500 Ausgabe-Token kostet auf einem mittleren Sprachmodell etwa 4,7 US-Cent. Bei 100 Läufen am Tag und 22 Arbeitstagen sind das rund 100 US-Dollar im Monat. Der dritte Posten ist Arbeitszeit, und der ist in der Praxis der größte.",
  },
  {
    question: "Was kosten die Sprachmodelle hinter dem Agenten?",
    answer:
      "Abgerechnet wird pro Million Token, getrennt nach Ein- und Ausgabe. Stand August 2026 liegt ein mittleres Modell bei 3 US-Dollar je Million Eingabe- und 15 US-Dollar je Million Ausgabe-Token, ein besonders starkes bei 5 beziehungsweise 25 US-Dollar. Der Unterschied zwischen beiden fällt erst ins Gewicht, wenn ein Agent im Alltag viele tausend Vorgänge bearbeitet. Für den Anfang ist der Posten meist zweistellig und selten das, woran eine Entscheidung scheitert.",
  },
  {
    question: "Lohnt sich ein kostenloses Gratis-Kontingent zum Testen?",
    answer:
      "Zum Ausprobieren ja, zur Entscheidung nein. Ein Gratis-Kontingent zeigt, ob Sie mit dem Werkzeug zurechtkommen, aber nicht, ob Ihr Anwendungsfall trägt. Das zeigt sich erst, wenn der Agent an ein echtes System angebunden ist und mit echten Vorgängen läuft. Genau dieser Schritt liegt bei allen Baukästen hinter der Bezahlgrenze, weil er der eigentliche Wert ist.",
  },
  {
    question: "Kann ein kostenloser KI-Agent auf unser ERP zugreifen?",
    answer:
      "Technisch ja, praktisch selten sinnvoll. Open-Source-Werkzeuge bringen Konnektoren für gängige Systeme mit, und wer das Schnittstellenwissen im Haus hat, bekommt eine Verbindung zum Laufen. Der Aufwand steckt nicht in der Verbindung, sondern in allem danach: Berechtigungen, Protokollierung, Freigaben, Verhalten bei Sonderfällen. Ab dem Moment, in dem der Agent in ein Produktivsystem schreibt, ist die Lizenzfrage nicht mehr die teure Frage.",
  },
  {
    question: "Wann sollten wir vom kostenlosen Weg abrücken?",
    answer:
      "Wenn drei Dinge zusammenkommen: Der Agent soll etwas auslösen statt nur antworten, mehrere Menschen verlassen sich im Tagesgeschäft darauf, und niemand im Haus hat die Zeit, ihn dauerhaft zu betreuen. Dann zahlen Sie den Gratis-Weg in Ausfällen und Wartezeit statt in Euro. Solange nur eine Person damit arbeitet und ein Ausfall niemanden aufhält, bleibt kostenlos die richtige Antwort.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>KI-Agenten</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Agent kostenlos: wie weit Sie ohne Budget wirklich kommen
            </Hero2ColumnHeadline>
            <GeoSummary>
              „KI-Agent kostenlos" meint zwei verschiedene Dinge: ein
              Gratis-Kontingent bei einem Anbieter, das nach einigen hundert
              Ausführungen endet, und Open-Source-Software wie n8n, die
              dauerhaft ohne Lizenzgebühr bleibt, dafür aber Server und Betrieb
              kostet. Diese Seite trennt beides und beziffert, was nach dem
              Gratis-Start anfällt: 15 bis 40 Euro Server im Monat und rund 4,7
              US-Cent Modellkosten je Agentenlauf, also etwa 100 US-Dollar
              monatlich bei 100 Läufen am Tag. Für Unternehmen, die vor der
              Frage stehen, ob sie dafür ein Budget brauchen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Anwendungsfall prüfen, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Open Source • Eigene Infrastruktur • Keine Lizenz pro Kopf
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/ki-agent-kostenlos/hero.png"
              type="image"
              alt="Einzelner aufgeklappter Laptop auf einem schlichten Holzschreibtisch im Morgenlicht, Sinnbild für den Start ohne Budget"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Die drei Zahlen, um die es auf der ganzen Seite geht */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList
          cols={3}
          textColor="text-white"
          stats={[
            { value: 0, suffix: " €", label: "Lizenz bei Open Source" },
            {
              value: 15,
              suffix: " bis 40 €",
              label: "Server pro Monat beim Self-Hosting",
            },
            {
              value: 100,
              suffix: " $",
              label: "Modellkosten bei 100 Läufen am Tag",
            },
          ]}
        />
      </ContentWrapper>

      {/* Kernsektion: die Trennung, die im Netz nirgends gemacht wird */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Kern der Sache</IntroBox.PreHeadline>
          <IntroBox.Headline>
            „Kostenlos" bedeutet zweimal etwas völlig anderes
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer nach einem kostenlosen KI-Agenten sucht, landet bei Listen, in
            denen Gratis-Kontingente und Open-Source-Projekte in derselben
            Aufzählung stehen. Das eine ist ein Vertriebskanal mit Ablaufdatum,
            das andere eine Software ohne Lizenzgebühr. Sie sehen am Anfang
            gleich aus und trennen sich nach wenigen Wochen.
          </IntroBox.Paragraph>
        </IntroBox>

        <Image
          src="/images/ki-agent-kostenlos/zwei-bedeutungen.png"
          alt="Gegenüberstellung von Gratis-Kontingent mit Ablaufdatum und Open Source ohne Lizenzgebühr"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <Typo.H3>Gratis-Kontingent: endet</Typo.H3>
            <Typo.Paragraph>
              Baukästen und Cloud-Plattformen geben Ihnen ein festes Budget an
              Ausführungen oder Credits pro Monat, oft im niedrigen dreistelligen
              Bereich, manchmal befristet auf zwei Wochen. Das reicht, um ein
              Werkzeug kennenzulernen, und ist genau so bemessen, dass es endet,
              sobald der Agent etwas Nützliches tut. Danach beginnt ein Abo,
              meist pro Nutzer oder pro Ausführung. Der Gratis-Teil ist kein
              Geschenk, sondern der Anfang einer Preisliste.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Open Source: bleibt</Typo.H3>
            <Typo.Paragraph>
              n8n in der Community Edition, Flowise, LangChain oder CrewAI
              kosten keine Lizenzgebühr, dauerhaft nicht, egal wie viel Sie
              damit ausführen. Der Preis steht an einer anderen Stelle: Sie
              brauchen einen Server, jemanden, der ihn aktuell hält, und Zeit
              für den Aufbau. Diese Posten wachsen nicht mit der Zahl der
              Nutzer, und genau das macht den Weg auf Dauer interessant.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Der ehrliche, positive Teil: was tatsächlich gratis geht */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was ohne einen Euro Budget tatsächlich funktioniert</Typo.H2>
        <Typo.Paragraph>
          Der Gratis-Weg ist kein Spielzeug. Wer die Grenze kennt, kommt damit
          erstaunlich weit, und für viele erste Anwendungsfälle ist er die
          richtige Antwort. Diese Übersicht zeigt, was die verbreiteten
          Werkzeuge kostenlos leisten und an welcher Stelle jeweils Schluss
          ist.
        </Typo.Paragraph>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
              <DataTable.HeaderCell>Kostenlos ist</DataTable.HeaderCell>
              <DataTable.HeaderCell>Schluss ist bei</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>n8n Community, selbst gehostet</DataTable.Cell>
              <DataTable.Cell>
                unbegrenzte Ausführungen, alle Konnektoren, eigene Daten
              </DataTable.Cell>
              <DataTable.Cell>
                Server, Updates und Betreuung liegen bei Ihnen
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Agenten-Frameworks</DataTable.Cell>
              <DataTable.Cell>
                der komplette Code, ohne Nutzergrenze und ohne Abo
              </DataTable.Cell>
              <DataTable.Cell>
                setzt Entwicklungszeit im Haus voraus
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Cloud-Baukästen, Gratis-Tarif</DataTable.Cell>
              <DataTable.Cell>
                ein fertiger Agent in wenigen Stunden, ohne Server
              </DataTable.Cell>
              <DataTable.Cell>
                festes Monatskontingent, danach Abo pro Nutzer
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Sprachmodell</DataTable.Cell>
              <DataTable.Cell>
                Testzugänge und kleine Startguthaben
              </DataTable.Cell>
              <DataTable.Cell>
                ab dem ersten Produktivlauf pro Token abgerechnet
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die erste Zeile ist der Weg, den wir selbst gehen, und der einzige,
          bei dem „kostenlos" auch im zweiten Jahr noch stimmt. Wenn Sie den
          Unterschied zwischen der Community Edition und der Cloud-Variante im
          Detail nachrechnen wollen, steht das in{" "}
          <InternalLink href="/blog/ist-n8n-kostenlos" variant="underline">
            unserem Preisüberblick zu n8n
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Die Lücke im Markt: echte Zahlen statt qualitativer Warnungen */}
      <ContentWrapper>
        <Typo.H2>Die Rechnung, die nach dem Gratis-Start beginnt</Typo.H2>
        <Typo.Paragraph>
          Fast jeder Ratgeber zum Thema warnt an dieser Stelle vor
          „API-Kosten", „Hosting" und „Zeitaufwand", und fast keiner nennt eine
          Zahl. Deshalb hier die drei Posten mit Beträgen. Sie sind niedriger,
          als viele erwarten, aber sie sind nicht null, und der dritte ist der
          eigentliche.
        </Typo.Paragraph>

        <Image
          src="/images/ki-agent-kostenlos/kostenbloecke.png"
          alt="Die drei Kostenblöcke nach dem kostenlosen Start: Server, Modellkosten und Betreuung"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <ProseColumns cols={3}>
          <ProseColumnsItem title="Server: 15 bis 40 € im Monat">
            Ein selbst gehosteter Agent braucht eine Maschine, die durchläuft.
            Für einen einzelnen Anwendungsfall reicht ein kleiner Server für 15
            Euro im Monat, bei mehreren parallelen Abläufen liegt es eher bei
            40. Zum Vergleich: Die Cloud-Variante von n8n beginnt bei 24 Euro
            monatlich im Jahresabo, der nächste Tarif liegt bei 60 Euro mit
            10.000 Ausführungen. Beim Self-Hosting zahlen Sie also ähnlich viel
            und behalten die Daten im Haus.
          </ProseColumnsItem>
          <ProseColumnsItem title="Modell: nach Verbrauch">
            Sprachmodelle werden pro Million Token abgerechnet, getrennt nach
            Ein- und Ausgabe. Stand August 2026 liegt ein mittleres Modell bei 3
            US-Dollar je Million Eingabe- und 15 US-Dollar je Million
            Ausgabe-Token, ein besonders starkes bei 5 beziehungsweise 25
            US-Dollar. Anders als bei einer Lizenz zahlen Sie hier nur, was
            tatsächlich läuft, und können mit dem Modell auch wieder nach unten
            gehen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Betreuung: der teure Posten">
            Schnittstellen ändern sich, Modelle werden abgelöst, Sonderfälle
            tauchen auf. Wer das nebenher macht, zahlt den Gratis-Weg in
            Arbeitszeit, und diese Rechnung steht in keiner Preisliste. Das ist
            der einzige Posten, der auf dem kostenlosen Weg regelmäßig größer
            ist als auf dem bezahlten, und der Grund, warum Open Source im
            Betrieb scheitert und nicht im Aufbau.
          </ProseColumnsItem>
        </ProseColumns>

        <Typo.H3>Ein Rechenbeispiel mit echten Zahlen</Typo.H3>
        <Typo.Paragraph>
          Angenommen, ein Agent liest eine eingehende Anfrage, holt sich Kontext
          aus zwei Systemen und schreibt eine Antwort. Das sind grob 8.000 Token
          Eingabe und 1.500 Token Ausgabe pro Vorgang. Auf einem mittleren
          Modell kostet ein solcher Lauf etwa 4,7 US-Cent.
        </Typo.Paragraph>

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Vorgänge pro Tag</DataTable.HeaderCell>
              <DataTable.HeaderCell>Läufe im Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>Modellkosten</DataTable.HeaderCell>
              <DataTable.HeaderCell>Mit Server</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>20</DataTable.Cell>
              <DataTable.Cell>440</DataTable.Cell>
              <DataTable.Cell>rund 20 $</DataTable.Cell>
              <DataTable.Cell>rund 40 $</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>100</DataTable.Cell>
              <DataTable.Cell>2.200</DataTable.Cell>
              <DataTable.Cell>rund 100 $</DataTable.Cell>
              <DataTable.Cell>rund 120 $</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>500</DataTable.Cell>
              <DataTable.Cell>11.000</DataTable.Cell>
              <DataTable.Cell>rund 500 $</DataTable.Cell>
              <DataTable.Cell>rund 540 $</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Gerechnet mit 22 Arbeitstagen. Die Arbeitszeit für Betreuung steht in
          keiner Zeile, weil sie sich nicht nach der Zahl der Läufe richtet,
          sondern danach, wie oft sich etwas an Ihren Systemen ändert. Wer die
          erste Zeile liest, sieht den eigentlichen Punkt: Ein kleiner Agent
          kostet im Betrieb weniger als eine Softwarelizenz für einen einzigen
          Arbeitsplatz.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Die vier Grenzen, die im SERP niemand behandelt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Wo der kostenlose Weg tatsächlich endet</Typo.H2>
        <Typo.Paragraph>
          Die Grenze liegt nicht beim Bauen. Ein Agent, der in ein paar Stunden
          steht, ist keine Ausnahme mehr. Die Grenze liegt an der Stelle, an
          der er aufhört, ein Versuch zu sein, und Teil des Tagesgeschäfts
          wird. Vier Punkte entscheiden darüber, und alle vier haben nichts mit
          Lizenzkosten zu tun.
        </Typo.Paragraph>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Der Zugriff auf Ihre Systeme">
            Solange der Agent mit öffentlich verfügbarem Wissen auskommt, ist
            der Gratis-Weg vollständig ausreichend. Sobald er Ihre Preise, Ihre
            Artikelnummern oder Ihren Auftragsbestand kennen soll, brauchen Sie
            eine Anbindung. Die Software dafür ist weiterhin kostenlos, das
            Wissen über Ihr ERP ist es nicht. Genau hier hört jede Anleitung im
            Netz auf.
          </ProseColumnsItem>
          <ProseColumnsItem title="Berechtigungen">
            Ein Agent, der lesen darf, ist unkritisch. Einer, der schreiben
            darf, ist ein Mitarbeiter ohne Arbeitsvertrag. Wer welche Preise
            sehen darf, welcher Vorgang eine Freigabe braucht und was
            protokolliert wird, ist eine Frage Ihrer Rechtestruktur und nicht
            des Werkzeugs. Kein Baukasten liefert sie mit, weil keiner Ihr Haus
            kennt.
          </ProseColumnsItem>
          <ProseColumnsItem title="Verfügbarkeit">
            Ein Versuch darf ausfallen, ein Arbeitsschritt nicht. Sobald sich
            Kolleginnen und Kollegen im Tagesgeschäft darauf verlassen, brauchen
            Sie Überwachung, Wiederanlauf und jemanden, der morgens merkt, dass
            nachts nichts gelaufen ist. Das ist der Punkt, an dem aus einem
            Werkzeug ein Betrieb wird.
          </ProseColumnsItem>
          <ProseColumnsItem title="Wartung">
            Ein Lieferant stellt sein Rechnungsformat um, eine Schnittstelle
            ändert ein Feld, ein Modell wird abgelöst. Nichts davon ist selten,
            und jedes Einzelne legt einen Agenten still, bis jemand reagiert.
            Wenn diese Rolle bei niemandem liegt, ist der kostenlose Agent nach
            zwölf Monaten ein Prototyp, den keiner mehr anfasst.
          </ProseColumnsItem>
        </ProseColumns>

        <Image
          src="/images/ki-agent-kostenlos/grenzen.png"
          alt="Ablauf vom kostenlosen Versuch über die Systemanbindung bis zum betreuten Betrieb"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />
      </ContentWrapper>

      {/* Entscheidungshilfe */}
      <ContentWrapper>
        <Typo.H2>Wann kostenlos die richtige Antwort ist</Typo.H2>
        <Typo.Paragraph>
          Nicht jede Aufgabe rechtfertigt ein Projekt. Wir raten regelmäßig vom
          bezahlten Weg ab, wenn der kostenlose reicht, weil ein Agent, der
          niemandem etwas abnimmt, auch für 1.000 Euro keinen Nutzen bringt.
          Diese Einordnung hilft bei der Entscheidung.
        </Typo.Paragraph>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Bleiben Sie kostenlos, wenn">
            eine Person damit arbeitet, der Agent nur liest und zusammenfasst,
            ein Ausfall niemanden aufhält und Sie jemanden im Haus haben, der
            Freude an der Sache hat. In dieser Lage ist Open Source auf einem
            kleinen Server das beste Preis-Leistungs-Verhältnis, das der Markt
            hergibt, und jedes Projektbudget wäre verschwendet.
          </ProseColumnsItem>
          <ProseColumnsItem title="Holen Sie sich Hilfe, wenn">
            der Agent in ein Produktivsystem schreiben soll, mehrere Menschen
            sich darauf verlassen, Berechtigungen eine Rolle spielen oder
            niemand die Zeit hat, ihn zu betreuen. Dann zahlen Sie den
            kostenlosen Weg trotzdem, nur in Ausfällen und Wartezeit statt in
            Euro, und meist mehr, als der bezahlte gekostet hätte.
          </ProseColumnsItem>
        </ProseColumns>

        <Typo.Paragraph>
          Wenn Sie an diesem Punkt sind, ist der nächste Schritt kein größeres
          Werkzeug, sondern eine klare Rechnung über die drei Bezugswege. Die
          steht mit Preisen und Zeiträumen in{" "}
          <InternalLink href="/services/ki-agent-kaufen" variant="underline">
            unserer Übersicht zum Kauf eines KI-Agenten
          </InternalLink>
          . Und falls noch offen ist, was ein KI-Agent technisch überhaupt ist
          und wie er sich von einer Automatisierung unterscheidet, klärt das{" "}
          <InternalLink
            href="/branchen/grosshandel/ki-agenten/was-ist-ein-ki-agent"
            variant="underline"
          >
            unsere Einordnung von KI-Agenten
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <FaqContainer faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
