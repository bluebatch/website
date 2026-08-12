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
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import OfferCard from "@/components/cards/offer-card";
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
  title: "KI-Agent kaufen: drei Wege, echte Preise, klare Entscheidung | Bluebatch",
  description:
    "KI-Agent kaufen oder bauen lassen? Die drei Bezugswege mit Preis und Dauer nebeneinander. Pilot auf eigener Infrastruktur für 1.000 € Setup in 5 Arbeitstagen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "KI-Agent kaufen: drei Wege, echte Preise, klare Entscheidung",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("KI-Agent kaufen", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Agent kaufen: drei Wege, echte Preise, klare Entscheidung",
    description: meta.description,
    images: ogImages("KI-Agent kaufen", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/ki-agent-kaufen",
  },
};

const faqs = [
  {
    question: "Kann man einen KI-Agenten überhaupt fertig kaufen?",
    answer:
      "Ein Produkt von der Stange kaufen Sie sofort, ab etwa 2.499 € einmalig oder als Abo pro Nutzer. Was Sie damit bekommen, ist ein Agent, der die Aufgaben kann, die der Anbieter vorgesehen hat. Sobald der Agent auf Ihre Preise, Ihre Kundennummern oder Ihr ERP zugreifen soll, kaufen Sie kein Produkt mehr, sondern eine Anbindung. Genau an dieser Stelle trennen sich die drei Wege, und deshalb ist die erste Frage nicht der Preis, sondern woher der Agent seine Daten nimmt.",
  },
  {
    question: "Was kostet ein KI-Agent realistisch?",
    answer:
      "Am Markt liegen fertige Produkte bei 2.499 € aufwärts oder bei einer Lizenz pro Nutzer und Monat. Individuell gebaute Agenten liegen bei Agenturen typischerweise zwischen 5.000 und 20.000 € Setup, im Mittelstand nennen Anbieter für größere Programme auch 25.000 bis 80.000 €. Bei uns kostet ein Agent für einen Anwendungsfall 1.000 € Setup und 50 € Betrieb pro Monat, weil er auf Ihrer Infrastruktur läuft und keine Lizenz pro Kopf kennt. Dazu kommen in jedem Fall die Modellkosten, die sich nach Nutzung richten.",
  },
  {
    question: "Kaufen oder selbst bauen, was ist günstiger?",
    answer:
      "Über drei Jahre gerechnet fast immer die Variante ohne Lizenz pro Kopf, weil die mit dem Team mitwächst und die eigene Infrastruktur nicht. Der Eigenbau ist bei der Software am günstigsten und bei der Zeit am teuersten: Sie zahlen ihn in Personenmonaten, und zwar auch dann, wenn der Anwendungsfall am Ende nicht trägt. Wer intern niemanden hat, der n8n, Schnittstellen und Berechtigungen betreut, kauft mit dem Eigenbau vor allem ein Risiko.",
  },
  {
    question: "Wem gehört der Agent nach dem Kauf?",
    answer:
      "Das ist die Frage, die auf den meisten Angebotsseiten fehlt. Bei einem Produkt von der Stange mieten Sie die Nutzung, der Agent bleibt beim Anbieter. Bei uns liegen die Workflows in n8n auf Ihrer Infrastruktur und gehören Ihnen, inklusive der Anbindungen. Sie können uns wechseln, ohne den Agenten neu zu bauen. Prüfen Sie das vor jedem Kauf, denn ein Agent, der tief in Ihren Systemen sitzt, ist genau so lange ein Vorteil, wie Sie ihn mitnehmen können.",
  },
  {
    question: "Wie lange dauert es, bis der Agent arbeitet?",
    answer:
      "Ein Produkt von der Stange ist in Tagen eingerichtet, solange es ohne Systemanbindung auskommt. Unser Pilot für einen Anwendungsfall mit Anbindung an ein System steht in fünf Arbeitstagen. Programme, die von Anfang an mehrere Abteilungen, Systeme und Freigaben abdecken sollen, laufen realistisch über Monate. Deshalb fangen wir mit einer Aufgabe an und bauen erst aus, wenn diese eine Aufgabe im Betrieb trägt.",
  },
  {
    question: "Was ist der Unterschied zu einem Chatbot?",
    answer:
      "Ein Chatbot antwortet, ein Agent handelt. Der Unterschied ist nicht die Sprache, sondern die Schreibberechtigung: Ein Agent legt einen Auftrag an, bucht eine Rechnung vor oder schreibt einen Datensatz zurück. Damit steigt der Nutzen und gleichzeitig die Anforderung an Rechte, Protokollierung und Freigaben. Wenn Sie eigentlich nur Antworten auf vorhandenes Wissen brauchen, ist ein Chatbot der günstigere und schnellere Weg.",
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
              KI-Agent kaufen: erst der Bezugsweg, dann der Preis
            </Hero2ColumnHeadline>
            <GeoSummary>
              Einen KI-Agenten kaufen Sie auf drei Wegen: als fertiges Produkt
              ab etwa 2.499 €, individuell gebaut ab rund 5.000 € am Markt,
              oder im Eigenbau ohne Lizenzkosten, dafür in Personenmonaten.
              Bluebatch baut den mittleren Weg als Piloten für einen
              Anwendungsfall, für 1.000 € Setup und 50 € Betrieb pro Monat, in
              fünf Arbeitstagen und auf Ihrer eigenen Infrastruktur.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Bezugsweg klären, 30 Minuten
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Eigene Infrastruktur • Keine Lizenz pro Kopf • Pilot in 5
              Arbeitstagen
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/ki-agent-kaufen/hero.png"
              type="image"
              alt="Ungeöffneter Karton auf einem leeren Schreibtisch, Sinnbild für den noch offenen Kauf eines KI-Agenten"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Unsere Zahlen früh, weil sie den Vergleich unten kalibrieren */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <StatsList
          cols={3}
          textColor="text-white"
          stats={[
            { value: 1000, suffix: " €", label: "Setup, einmalig pauschal" },
            { value: 50, suffix: " €", label: "Betrieb pro Monat" },
            { value: 5, label: "Arbeitstage bis zum Piloten" },
          ]}
        />
      </ContentWrapper>

      {/* Kernsektion: die drei Bezugswege */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Die Auswahlfrage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            „KI-Agent kaufen" bedeutet drei völlig verschiedene Dinge
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer nach einem KI-Agenten sucht, bekommt Angebote zwischen 2.499 €
            und 80.000 € auf denselben Suchbegriff. Das ist kein Preisstreit,
            sondern ein Missverständnis: Die Angebote meinen nicht dasselbe
            Produkt. Diese drei Wege stehen tatsächlich zur Wahl.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProseColumns cols={3}>
          <ProseColumnsItem title="Von der Stange">
            Sie kaufen ein fertiges Produkt und richten es ein. Der Agent kann
            das, was der Anbieter vorgesehen hat, meist Vertriebsdialoge,
            Terminvereinbarung oder Erstsupport. Das ist der schnellste Weg und
            der einzige, bei dem Sie vorher genau wissen, was Sie bekommen.
            Seine Grenze ist Ihre eigene Datenlage: Ihre Konditionen, Ihre
            Artikelnummern und Ihr ERP kennt er nicht.
          </ProseColumnsItem>
          <ProseColumnsItem title="Bauen lassen">
            Sie beschreiben eine Aufgabe aus Ihrem Betrieb, jemand baut den
            Agenten dafür und bindet ihn an Ihre Systeme an. Das ist der Weg,
            den Unternehmen fast immer wählen, sobald der Agent etwas auslösen
            und nicht nur reden soll. Entscheidend ist hier weniger der Preis
            als die Frage, wem der Agent nach der Übergabe gehört.
          </ProseColumnsItem>
          <ProseColumnsItem title="Eigenbau">
            Sie bauen selbst, auf n8n oder einem Agenten-Framework. Bei der
            Software ist das der günstigste Weg, bei der Zeit der teuerste. Er
            lohnt sich, wenn Sie jemanden haben, der Schnittstellen und
            Berechtigungen dauerhaft betreut. Wenn nicht, kaufen Sie mit dem
            Eigenbau vor allem ein Risiko, das erst nach Monaten sichtbar wird.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Der eigentliche Mehrwert gegenüber dem Wettbewerb: Preis UND Dauer */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Die drei Wege mit Preis und Dauer nebeneinander</Typo.H2>
        <Typo.Paragraph>
          Ratgeber zum Thema vergleichen die Wege meist ohne Zahlen,
          Anbieterseiten nennen Zahlen ohne Vergleich. Deshalb beides an einer
          Stelle. Die Marktangaben sind Spannen aus öffentlichen Angeboten, die
          mittlere Zeile ist unser eigenes, festes Angebot.
        </Typo.Paragraph>

        <Image
          src="/images/ki-agent-kaufen/drei-wege.png"
          alt="Vergleich der drei Bezugswege für einen KI-Agenten mit Preis und Dauer"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
              <DataTable.HeaderCell>Einmalig</DataTable.HeaderCell>
              <DataTable.HeaderCell>Laufend</DataTable.HeaderCell>
              <DataTable.HeaderCell>Bis es arbeitet</DataTable.HeaderCell>
              <DataTable.HeaderCell>Passt, wenn</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Von der Stange</DataTable.Cell>
              <DataTable.Cell>ab 2.499 €</DataTable.Cell>
              <DataTable.Cell>Lizenz pro Nutzer</DataTable.Cell>
              <DataTable.Cell>wenige Tage</DataTable.Cell>
              <DataTable.Cell>
                die Aufgabe ohne Ihre eigenen Daten auskommt
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Bauen lassen (Bluebatch)</DataTable.Cell>
              <DataTable.Cell>1.000 €</DataTable.Cell>
              <DataTable.Cell>50 € pro Monat</DataTable.Cell>
              <DataTable.Cell>5 Arbeitstage</DataTable.Cell>
              <DataTable.Cell>
                der Agent an ein System soll und Ihnen gehören muss
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Bauen lassen (Markt)</DataTable.Cell>
              <DataTable.Cell>5.000 bis 20.000 €</DataTable.Cell>
              <DataTable.Cell>150 bis 600 € pro Monat</DataTable.Cell>
              <DataTable.Cell>Wochen bis Monate</DataTable.Cell>
              <DataTable.Cell>
                mehrere Systeme von Anfang an dazugehören
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Eigenbau</DataTable.Cell>
              <DataTable.Cell>keine Lizenz</DataTable.Cell>
              <DataTable.Cell>Server ab 15 € pro Monat</DataTable.Cell>
              <DataTable.Cell>3 bis 6 Monate</DataTable.Cell>
              <DataTable.Cell>
                Sie jemanden haben, der es dauerhaft betreut
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die Modellkosten stehen in keiner Zeile, weil sie in allen Wegen
          anfallen und sich nach Nutzung richten. Für einen Agenten, der einige
          hundert Vorgänge im Monat bearbeitet, liegen sie im zweistelligen
          Bereich. Sie sind selten der Posten, an dem eine Entscheidung
          scheitert, aber sie gehören in die Rechnung.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Entscheidungshilfe */}
      <ContentWrapper>
        <Typo.H2>Die eine Frage, die den Weg entscheidet</Typo.H2>
        <Typo.Paragraph>
          Nicht das Budget entscheidet, sondern die Datenlage. Prüfen Sie an
          der konkreten Aufgabe, die der Agent übernehmen soll, woher er seine
          Informationen nimmt und was er damit tun darf.
        </Typo.Paragraph>

        <ProseColumns cols={2}>
          <ProseColumnsItem title="Kommt der Agent ohne Ihre Systeme aus?">
            Wenn die Aufgabe mit öffentlich verfügbarem Wissen und einem
            Standardablauf lösbar ist, etwa Terminvereinbarung oder eine erste
            Antwort auf wiederkehrende Anfragen, dann kaufen Sie von der
            Stange. Alles andere wäre teurer als nötig. Nehmen Sie ein Produkt,
            richten Sie es ein, und geben Sie kein Projektbudget für etwas aus,
            das es fertig gibt.
          </ProseColumnsItem>
          <ProseColumnsItem title="Muss er in Ihre Systeme schreiben?">
            Sobald der Agent einen Auftrag anlegt, eine Rechnung vorbucht oder
            einen Datensatz zurückschreibt, brauchen Sie eine Anbindung,
            Berechtigungen und eine Protokollierung. Das gibt es nicht von der
            Stange, weil kein Anbieter Ihre Rechtestruktur kennt. Ab hier
            entscheidet nur noch, ob Sie bauen lassen oder selbst bauen.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Drei-Jahres-Sicht, der Punkt den Setup-Preise verschweigen */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Rechnen Sie über drei Jahre, nicht über das Setup</Typo.H2>
        <Typo.Paragraph>
          Fast alle Preisangaben zu KI-Agenten nennen das Setup. Das ist der
          Posten, der am wenigsten über die Gesamtkosten aussagt. Entscheidend
          ist, was mit der Rechnung passiert, wenn der Agent bleibt und Ihr
          Team wächst.
        </Typo.Paragraph>

        <Image
          src="/images/ki-agent-kaufen/kostenverlauf.png"
          alt="Kostenverlauf über drei Jahre: Lizenz pro Kopf steigt, eigene Infrastruktur bleibt flach"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <Typo.Paragraph>
          Eine Lizenz pro Kopf skaliert mit der Zahl der Nutzer. Das ist im
          ersten Jahr angenehm, weil der Einstieg günstig aussieht, und im
          dritten Jahr der größte Posten, wenn aus fünf Nutzern dreißig
          geworden sind. Ein Agent auf eigener Infrastruktur kostet dagegen im
          dritten Jahr fast dasselbe wie im ersten, weil der Server nicht
          zählt, wie viele Leute ihn benutzen.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Deshalb steht die Frage nach dem Lizenzmodell vor der Frage nach dem
          Setup-Preis. Ein Angebot mit 1.000 € Setup und ohne Lizenz pro Kopf
          ist über drei Jahre günstiger als eines mit 0 € Setup und 39 € pro
          Nutzer und Monat, sobald mehr als zwei Personen damit arbeiten.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Kaufkriterien, die auf Anbieterseiten fehlen */}
      <ContentWrapper>
        <Typo.H2>Worauf Sie beim Kauf achten sollten</Typo.H2>
        <Typo.Paragraph>
          Drei Punkte entscheiden darüber, ob ein gekaufter Agent nach zwei
          Jahren noch ein Vorteil ist. Sie stehen selten im Angebot, also
          fragen Sie danach.
        </Typo.Paragraph>

        <ProseColumns cols={3}>
          <ProseColumnsItem title="Wem gehört der Workflow?">
            Ein Agent, der tief in Ihren Systemen sitzt, ist genau so lange ein
            Vorteil, wie Sie ihn mitnehmen können. Lassen Sie sich zeigen, wo
            die Logik liegt und ob Sie sie ohne den Anbieter weiterbetreiben
            könnten. Bei uns liegen die Workflows in n8n auf Ihrer
            Infrastruktur und gehören Ihnen, inklusive der Anbindungen.
          </ProseColumnsItem>
          <ProseColumnsItem title="Was darf der Agent auslösen?">
            Ein Agent mit Schreibrechten ist ein Mitarbeiter ohne
            Arbeitsvertrag. Klären Sie vor dem Kauf, welche Vorgänge er
            selbstständig abschließt und welche in eine Freigabe laufen. Ein
            guter Anbieter fragt das von sich aus, weil er die Haftungsfrage
            kennt. Wer es nicht anspricht, hat es nicht gebaut.
          </ProseColumnsItem>
          <ProseColumnsItem title="Wer betreibt ihn im Alltag?">
            Ein Agent ist keine Anschaffung, sondern ein Betrieb. Schnittstellen
            ändern sich, Modelle werden abgelöst, Sonderfälle tauchen auf.
            Klären Sie, wer reagiert, wenn ein Lieferant sein Format umstellt.
            Ohne diese Antwort kaufen Sie einen Prototyp, der zwölf Monate
            später niemandem mehr gehört.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* Unser Ablauf */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Wie ein Kauf bei uns abläuft</Typo.H2>
        <Typo.Paragraph>
          Wir verkaufen keinen Agenten-Katalog, sondern fangen mit einer
          Aufgabe an. Nach fünf Arbeitstagen wissen Sie mit echten Vorgängen
          aus Ihrem Betrieb, ob der Anwendungsfall trägt.
        </Typo.Paragraph>

        <Image
          src="/images/ki-agent-kaufen/ablauf.png"
          alt="Ablauf vom Erstgespräch über den Piloten und die Übergabe bis zum Ausbau"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Erstgespräch, 30 Minuten</Typo.H3>
            <Typo.Paragraph>
              Wir klären die Aufgabe, die beteiligten Systeme und ob der
              Bezugsweg überhaupt „bauen lassen" heißt. Wenn ein Produkt von
              der Stange reicht, sagen wir das, und Sie sparen sich das
              Projekt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Pilot in fünf Arbeitstagen</Typo.H3>
            <Typo.Paragraph>
              Ein Anwendungsfall, ein angebundenes System, auf Ihrer
              Infrastruktur. 1.000 € pauschal, keine Mindestlaufzeit. Sie
              testen mit echten Vorgängen statt mit einer Demo.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Übergabe</Typo.H3>
            <Typo.Paragraph>
              Die Workflows gehören Ihnen und laufen bei Ihnen. Sie bekommen
              die Dokumentation dazu und könnten ab hier ohne uns
              weitermachen. Genau das ist der Punkt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Ausbau, Aufgabe für Aufgabe</Typo.H3>
            <Typo.Paragraph>
              Weitere Vorgänge kommen einzeln dazu, jeder mit derselben
              Rechteprüfung. Kein Programm, das ein Jahresbudget bindet, bevor
              der erste Agent etwas geleistet hat.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Konkrete Einstiege */}
      <ContentWrapper>
        <Typo.H2>Wenn Sie schon wissen, welche Aufgabe es sein soll</Typo.H2>
        <Typo.Paragraph>
          Zwei Aufgaben fragen Unternehmen am häufigsten nach. Für beide gibt
          es bei uns einen fertigen Zuschnitt, den wir auf Ihre Systeme
          anpassen, statt ihn neu zu erfinden.
        </Typo.Paragraph>
        <SimpleGrid cols={2}>
          <OfferCard
            href="/branchen/grosshandel/ki-agenten/angebots-bot"
            title="Angebots-Agent"
            price="ab 1.000 €"
            description="Nimmt Anfragen entgegen, zieht Preise und Konditionen aus Ihren Systemen und legt das Angebot zur Freigabe an."
            linkLabel="Angebots-Agent ansehen"
          />
          <OfferCard
            href="/branchen/grosshandel/ki-agenten/invoice-bot"
            title="Rechnungs-Agent"
            price="ab 1.000 €"
            description="Liest eingehende Rechnungen, gleicht sie gegen Bestellung und Lieferschein ab und bucht sie vor."
            linkLabel="Rechnungs-Agent ansehen"
          />
        </SimpleGrid>
        <Typo.Paragraph>
          Beide Beispiele stammen aus dem Großhandel, wo wir die meisten
          Agenten gebaut haben. Der Zuschnitt ist übertragbar, sobald es ein
          System gibt, aus dem der Agent liest und in das er zurückschreibt.
          Wenn Sie zuerst wissen wollen, was ein KI-Agent technisch überhaupt
          ist und wie er sich von Automatisierung und Chatbot unterscheidet,
          steht das in{" "}
          <InternalLink
            href="/branchen/grosshandel/ki-agenten/was-ist-ein-ki-agent"
            variant="underline"
          >
            unserer Einordnung von KI-Agenten
          </InternalLink>
          . Und wenn der Agent am Ende doch nur antworten und nicht handeln
          soll, ist{" "}
          <InternalLink
            href="/services/ki-chatbot-fuer-unternehmen"
            variant="underline"
          >
            ein KI-Chatbot für Unternehmen
          </InternalLink>{" "}
          der günstigere Weg.
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
