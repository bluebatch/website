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
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import { FaqContainer } from "@/components/ui/faqs";
import StatsLeadHero from "@/components/heroes/stats-lead-hero";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

const meta = {
  title: "KI-Chatbot kostenlos: was der Gratis-Weg wirklich leistet | Bluebatch",
  description:
    "KI-Chatbot kostenlos: Free-Tier, Gratis-Basisplan und Open Source sind drei verschiedene Dinge. Die Gratis-Grenzen auf eine gemeinsame Einheit gerechnet, mit echten Zahlen für Server und Modellkosten.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: "KI-Chatbot kostenlos: was der Gratis-Weg wirklich leistet",
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: ogImages("KI-Chatbot kostenlos", "Services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Chatbot kostenlos: was der Gratis-Weg wirklich leistet",
    description: meta.description,
    images: ogImages("KI-Chatbot kostenlos", "Services").map((i) => i.url),
  },
  alternates: {
    canonical: "/services/ki-chatbot-kostenlos",
  },
};

const faqs = [
  {
    question: "Gibt es wirklich kostenlose KI-Chatbots?",
    answer:
      "Ja, in drei Formen, und sie meinen Unterschiedliches. Erstens der Free-Tier eines kommerziellen Anbieters: ein festes Kontingent pro Monat, oft 50 Chats oder 100 Nachrichten, danach beginnt das Abo. Zweitens ein dauerhaft kostenloser Basisplan, der bleibt, aber ein fremdes Branding im Widget zeigt und die KI-Funktionen ins kostenpflichtige Add-on legt. Drittens Open-Source-Software zum Selbsthosten, die keine Lizenzgebühr kostet, dafür aber Server, Modellzugang und Betreuung verlangt. Nur der dritte Weg ist auch im zweiten Jahr noch kostenlos im Sinne von ohne Lizenzkosten.",
  },
  {
    question: "Wie viele Gespräche sind in einem kostenlosen Chatbot enthalten?",
    answer:
      "Das lässt sich nur vergleichen, wenn man die Herstellereinheiten umrechnet. Die verbreiteten Gratis-Kontingente liegen zwischen 50 Chats und 10.000 Nachrichten pro Monat. Eine echte Support-Konversation umfasst erfahrungsgemäß rund acht Nachrichten. Auf Konversationen pro Monat umgerechnet ergibt das eine Spanne von etwa 12 bis 1.250, also einen Faktor von rund 100 zwischen dem kleinsten und dem größten Gratis-Angebot. Ein Kontingent von 100 Nachrichten reicht damit für ungefähr zwölf Gespräche im Monat, nicht für hundert.",
  },
  {
    question: "Was kostet ein selbst gehosteter KI-Chatbot im Monat?",
    answer:
      "Zwei Posten: Server und Modell. Ein kleiner Server für eine Open-Source-Chatbot-Instanz liegt bei 15 bis 40 Euro im Monat, gehostete Fertigpakete beginnen bei rund 10 US-Dollar. Die Modellkosten fallen pro Gespräch an: Bei einem mittleren Modell zu 3 US-Dollar je Million Eingabe- und 15 US-Dollar je Million Ausgabe-Token kostet eine Antwort mit rund 1.500 Eingabe- und 200 Ausgabe-Token etwa 0,75 US-Cent, ein Gespräch mit vier Antworten also rund 3 US-Cent. Bei 500 Gesprächen im Monat sind das etwa 15 US-Dollar Modellkosten zusätzlich zum Server.",
  },
  {
    question: "Ab wann lohnt sich der kostenpflichtige Plan?",
    answer:
      "Rein rechnerisch beim Volumen: Ein KI-Add-on für rund 99 Euro im Monat ist ab etwa 2.800 Gesprächen günstiger als der Eigenbetrieb mit 15 Euro Server plus 3 Cent je Gespräch. Praktisch entscheidet aber selten die Rechnung, sondern die Betreuung. Wer niemanden hat, der Updates einspielt und Fehler sucht, fährt mit dem Abo besser, auch bei kleinem Volumen. Umgekehrt lohnt der Eigenbetrieb schon früh, wenn die Daten im Haus bleiben müssen.",
  },
  {
    question: "Ist ein kostenloser Chatbot DSGVO-konform?",
    answer:
      "Nicht automatisch. Drei Punkte entscheiden, und alle drei fallen bei Gratis-Plänen regelmäßig durch: der Serverstandort, denn nur ein Teil der verbreiteten Anbieter verarbeitet ohne Zusatzkonfiguration in der EU; der Auftragsverarbeitungsvertrag, den viele Anbieter erst ab einem bezahlten Tarif abschließen; und die Frage, was mit den Gesprächsinhalten passiert, wenn sie zum Training verwendet werden dürfen. Für einen Chatbot auf einer Unternehmenswebsite, der Kundenanfragen entgegennimmt, sind das keine Formalien, sondern Ausschlusskriterien.",
  },
  {
    question: "Kann ich einen kostenlosen Chatbot an mein ERP anbinden?",
    answer:
      "In der Gratis-Stufe fast nie. Kostenlose Pläne decken das Website-Widget mit einer Wissensdatenbank aus öffentlichen Inhalten ab. Sobald der Chatbot Bestellstatus, Verfügbarkeit oder Kundendaten aus dem ERP beantworten soll, brauchen Sie eine Schnittstelle, und die liegt bei kommerziellen Anbietern im oberen Tarif oder im Projektgeschäft. Beim Eigenbetrieb ist die Anbindung möglich, verschiebt den Aufwand aber vom Abo in die Einrichtung.",
  },
];

export default function Page() {
  return (
    <>
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>KI-Chatbot</StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>
          KI-Chatbot kostenlos: wie weit Sie ohne Budget kommen
        </StatsLeadHero.Headline>
        <GeoSummary>
          Ein KI-Chatbot lässt sich auf drei Wegen kostenlos starten, und die
          drei meinen Verschiedenes: befristetes Free-Tier, dauerhaft
          kostenloser Basisplan mit fremdem Branding, oder Open Source zum
          Selbsthosten. Diese Seite rechnet die Gratis-Kontingente der
          verbreiteten Anbieter auf eine gemeinsame Einheit um, rund 12 bis
          1.250 Konversationen im Monat, und beziffert, was der Eigenbetrieb
          danach kostet: 15 bis 40 Euro Server plus rund 3 US-Cent je Gespräch.
          Der Kipppunkt zum bezahlten Plan liegt bei etwa 2.800 Gesprächen im
          Monat.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Chatbot-Vorhaben besprechen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard valueText="3 Wege" subtitle="die alle kostenlos heißen" />
          <KpiCard
            valueText="12 bis 1.250"
            subtitle="Konversationen im Monat, Gratis-Grenzen umgerechnet"
          />
          <KpiCard
            valueText="3 Cent"
            subtitle="Modellkosten je Gespräch im Eigenbetrieb"
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/ki-chatbot-kostenlos/hero.png"
          alt="Leerer Empfangstresen mit einem einzelnen Bildschirm im Morgenlicht, Sinnbild für den Start ohne Budget"
        />
      </StatsLeadHero>

      {/* 1. Die Trennung, die im Markt niemand macht */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Der Kern der Sache</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Angebote, ein Wort: „kostenlos"
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer nach einem kostenlosen KI-Chatbot sucht, findet Vergleichslisten,
            in denen Free-Tiers, Gratis-Basispläne und Open-Source-Projekte
            nebeneinander stehen, als wären sie dasselbe Angebot. Sie sind es
            nicht. Der Unterschied entscheidet, ob Sie in drei Monaten noch
            kostenlos arbeiten oder eine Rechnung bekommen.
          </IntroBox.Paragraph>
        </IntroBox>

        <Image
          src="/images/ki-chatbot-kostenlos/gratis-wege.png"
          alt="Die drei Bedeutungen von kostenlos beim KI-Chatbot: Free-Tier mit Kontingent, Basisplan mit Branding und Open Source zum Selbsthosten"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <ProseColumns cols={3}>
          <ProseColumnsItem title="Free-Tier: läuft aus">
            Ein festes Kontingent pro Monat, meist 50 Chats oder 100
            Nachrichten, manchmal auf zwei Wochen befristet. Es ist so bemessen,
            dass es genau dann endet, wenn der Chatbot anfängt, nützlich zu
            sein. Danach beginnt ein Abo, gestaffelt nach Gesprächen oder
            Sitzplätzen. Das ist kein Geschenk, sondern der Anfang einer
            Preisliste.
          </ProseColumnsItem>
          <ProseColumnsItem title="Basisplan: bleibt, aber mit Fremdlogo">
            Einige Anbieter lassen den einfachen Chatbot dauerhaft kostenlos
            laufen. Der Preis steht an zwei anderen Stellen: Im Widget sitzt das
            Logo des Anbieters, und die eigentlichen KI-Funktionen liegen im
            kostenpflichtigen Add-on. Das Entfernen des Brandings beginnt bei
            rund 29 US-Dollar im Monat, KI-Assistenten liegen je nach Anbieter
            zwischen 39 US-Dollar und 99 Euro monatlich, bei einem großen
            CRM-Anbieter bei 90 US-Dollar je Sitzplatz plus 1.500 US-Dollar
            einmaliges Onboarding.
          </ProseColumnsItem>
          <ProseColumnsItem title="Open Source: kostenlos, nicht umsonst">
            Selbst gehostete Projekte kosten keine Lizenzgebühr, dauerhaft
            nicht, unabhängig vom Gesprächsvolumen. Dafür brauchen Sie einen
            Server, einen Modellzugang und jemanden, der beides aktuell hält.
            Diese Posten wachsen nicht mit der Zahl der Nutzer, und genau das
            macht den Weg auf Dauer interessant.
          </ProseColumnsItem>
        </ProseColumns>
      </ContentWrapper>

      {/* 2. Die Umrechnung auf eine gemeinsame Einheit */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>
          Die Gratis-Grenzen, auf eine gemeinsame Einheit gerechnet
        </Typo.H2>
        <Typo.Paragraph>
          Der Vergleich der Gratis-Angebote scheitert an den Einheiten: Der eine
          Anbieter zählt Chats, der nächste Nachrichten, der dritte
          Konversationen. Das ist nicht dasselbe. Eine echte Support-Konversation
          besteht aus mehreren Nachrichten, in der Praxis rund acht, wenn man
          Rückfragen mitzählt. Mit diesem Faktor lassen sich die Kontingente auf
          Konversationen pro Monat umrechnen, und erst dann sieht man, wie weit
          sie auseinanderliegen.
        </Typo.Paragraph>

        <Image
          src="/images/ki-chatbot-kostenlos/umrechnung.png"
          alt="Umrechnung der Gratis-Kontingente von Chats und Nachrichten auf Konversationen pro Monat"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Angabe des Anbieters</DataTable.HeaderCell>
              <DataTable.HeaderCell>
                Umgerechnet auf Konversationen im Monat
              </DataTable.HeaderCell>
              <DataTable.HeaderCell>Entspricht am Tag</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>100 Nachrichten</DataTable.Cell>
              <DataTable.Cell>rund 12</DataTable.Cell>
              <DataTable.Cell>weniger als ein Gespräch</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>50 Chats</DataTable.Cell>
              <DataTable.Cell>50</DataTable.Cell>
              <DataTable.Cell>knapp zwei Gespräche</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>200 Chats</DataTable.Cell>
              <DataTable.Cell>200</DataTable.Cell>
              <DataTable.Cell>rund sieben Gespräche</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>2.000 Nachrichten</DataTable.Cell>
              <DataTable.Cell>rund 250</DataTable.Cell>
              <DataTable.Cell>rund acht Gespräche</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>10.000 Nachrichten</DataTable.Cell>
              <DataTable.Cell>rund 1.250</DataTable.Cell>
              <DataTable.Cell>rund 40 Gespräche</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Zwischen dem kleinsten und dem größten Gratis-Angebot liegt damit
          ungefähr der Faktor 100, obwohl beide mit demselben Wort beworben
          werden. Für die Auswahl heißt das: Schätzen Sie zuerst Ihr eigenes
          Volumen, und zwar in Gesprächen, nicht in Klicks. Ein
          B2B-Kontaktformular, das heute zehn Anfragen pro Woche bringt, liegt
          bei rund 40 Gesprächen im Monat und passt in fast jedes der Angebote.
          Ein Shop mit 40 Anfragen am Tag sprengt alle bis auf das größte.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 3. Die Rechnung nach dem Gratis-Start */}
      <ContentWrapper>
        <Typo.H2>Was der Eigenbetrieb tatsächlich kostet</Typo.H2>
        <Typo.Paragraph>
          Fast jeder Ratgeber empfiehlt an dieser Stelle Open Source und warnt
          im selben Absatz vor „Hosting" und „API-Kosten", ohne eine einzige
          Zahl zu nennen. Deshalb hier die beiden Posten mit Beträgen. Sie sind
          niedriger, als viele erwarten, und trotzdem nicht null.
        </Typo.Paragraph>

        <SimpleGrid cols={2}>
          <SimpleCard align="left">
            <Typo.H3>Server: 15 bis 40 Euro im Monat</Typo.H3>
            <Typo.Paragraph>
              Ein selbst gehosteter Chatbot braucht eine Maschine, die
              durchläuft. Für einen einzelnen Anwendungsfall reicht ein kleiner
              Server für 15 Euro im Monat, bei mehreren Instanzen und einer
              eigenen Wissensdatenbank liegt es eher bei 40. Wer den Server
              nicht selbst aufsetzen will, findet fertig betriebene Pakete ab
              rund 10 US-Dollar im Monat, teilweise mit deutschem
              Rechenzentrum. Die Größenordnung ist dieselbe wie bei anderen
              Open-Source-Werkzeugen, nachgerechnet in{" "}
              <InternalLink href="/blog/ist-n8n-kostenlos" variant="underline">
                unserem Preisüberblick zu n8n
              </InternalLink>
              .
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Modell: rund 3 Cent je Gespräch</Typo.H3>
            <Typo.Paragraph>
              Der zweite Posten fällt pro Antwort an. Eine Antwort mit
              Wissensdatenbank braucht ungefähr 1.500 Eingabe-Token für
              System-Anweisung, gefundenen Kontext und Gesprächsverlauf sowie
              rund 200 Ausgabe-Token. Bei einem mittleren Modell zu 3 US-Dollar
              je Million Eingabe- und 15 US-Dollar je Million Ausgabe-Token sind
              das etwa 0,75 US-Cent je Antwort, bei vier Antworten also rund 3
              US-Cent je Gespräch. 500 Gespräche im Monat kosten damit rund 15
              US-Dollar an Modellkosten.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <Typo.Paragraph>
          Der dritte Posten steht in keiner Preisliste und ist der teuerste:
          Betreuung. Updates, ein Modellwechsel, eine kaputte Schnittstelle, ein
          Fehler in der Wissensdatenbank. Das sind keine vierzig Stunden im
          Monat, aber es ist auch nicht null, und es braucht eine benannte
          Person. Wer die nicht hat, zahlt das Abo eines Anbieters nicht für die
          Software, sondern für die Zuständigkeit.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 4. Der Kipppunkt */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Der Kipppunkt: ab wann „kostenlos" teurer wird</Typo.H2>
        <Typo.Paragraph>
          Mit den Zahlen aus dem vorigen Abschnitt lässt sich die Frage
          beantworten, die im Netz niemand beantwortet: Ab welchem Volumen ist
          der bezahlte Plan günstiger als der Eigenbetrieb? Der Eigenbetrieb
          kostet 15 Euro im Monat plus 3 Cent je Gespräch, ein KI-Add-on eines
          Anbieters rund 99 Euro pauschal. Beide Linien schneiden sich bei etwa
          2.800 Gesprächen im Monat.
        </Typo.Paragraph>

        <Image
          src="/images/ki-chatbot-kostenlos/kipppunkt.png"
          alt="Kostenverlauf von Eigenbetrieb und Pauschaltarif mit Schnittpunkt bei rund 2.800 Gesprächen im Monat"
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl my-8"
        />

        <DataTable>
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Gespräche im Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>
                Eigenbetrieb, Server plus Modell
              </DataTable.HeaderCell>
              <DataTable.HeaderCell>
                Pauschaltarif mit KI-Funktion
              </DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>100</DataTable.Cell>
              <DataTable.Cell>rund 18 Euro</DataTable.Cell>
              <DataTable.Cell>rund 99 Euro</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>500</DataTable.Cell>
              <DataTable.Cell>rund 30 Euro</DataTable.Cell>
              <DataTable.Cell>rund 99 Euro</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>2.800</DataTable.Cell>
              <DataTable.Cell>rund 99 Euro</DataTable.Cell>
              <DataTable.Cell>rund 99 Euro</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>10.000</DataTable.Cell>
              <DataTable.Cell>rund 315 Euro</DataTable.Cell>
              <DataTable.Cell>Staffelpreis, meist deutlich höher</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <Typo.Paragraph>
          Die Tabelle sagt zwei Dinge, und das zweite ist wichtiger als das
          erste. Erstens: Bei den Volumina, die ein mittelständischer
          B2B-Auftritt tatsächlich erzeugt, meist deutlich unter 1.000
          Gesprächen im Monat, ist der Eigenbetrieb rechnerisch klar im Vorteil.
          Zweitens: Der Unterschied beträgt dabei 60 bis 80 Euro im Monat, also
          weniger als eine Arbeitsstunde. Wer die Entscheidung allein an diesen
          Zahlen festmacht, optimiert die falsche Größe. Ausschlaggebend sind
          die drei Punkte im nächsten Abschnitt.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 5. DSGVO: drei harte Kriterien */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Ausschlusskriterien</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Punkte, an denen ein Gratis-Plan im Unternehmen scheitert
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Chatbot auf der Unternehmenswebsite nimmt Kundenanfragen
            entgegen, oft mit Namen, Firma und Anliegen. Damit ist er
            Datenverarbeitung, nicht Dekoration. Diese drei Punkte klären Sie
            vor der Toolwahl, nicht danach.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3}>
          <SimpleCard align="left">
            <Typo.H3>Serverstandort</Typo.H3>
            <Typo.Paragraph>
              Nur ein Teil der verbreiteten Anbieter verarbeitet ohne
              Zusatzkonfiguration in der EU, bei den übrigen liegt die
              Verarbeitung in den USA. Das ist kein Ausschluss an sich, aber es
              verlangt eine Grundlage und eine Dokumentation. Beim Eigenbetrieb
              wählen Sie den Standort selbst und beantworten die Frage in einem
              Satz.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Auftragsverarbeitungsvertrag</Typo.H3>
            <Typo.Paragraph>
              Viele Anbieter schließen einen AVV erst ab einem bezahlten Tarif.
              Ohne ihn ist der Einsatz für personenbezogene Anfragen nicht
              tragfähig. Genau hier endet der Gratis-Plan für den betrieblichen
              Einsatz, unabhängig vom Kontingent, und das steht selten in der
              Vergleichstabelle.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3>Branding und Verwendung der Inhalte</Typo.H3>
            <Typo.Paragraph>
              Das Fremdlogo im Widget ist eine Frage des Auftritts. Wichtiger
              ist, was mit den Gesprächsinhalten passiert: Ob sie zur
              Verbesserung der Modelle verwendet werden dürfen, steht in den
              Bedingungen, nicht auf der Preisseite. Bei Kundengesprächen ist
              das eine Entscheidung, die Sie bewusst treffen sollten.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Einordnung und Weiterführung */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2>Was daraus für die Auswahl folgt</Typo.H2>
        <Typo.Paragraph>
          Der Gratis-Weg ist kein Spielzeug. Für einen ersten Chatbot, der
          häufige Fragen aus den eigenen Website-Inhalten beantwortet, ist er in
          vielen Fällen die richtige Antwort, und er beantwortet die Frage, ob
          Ihre Besucher das Angebot überhaupt nutzen. Diese Antwort ist mehr
          wert als jede Anbieter-Präsentation. Planen Sie ihn aber als Test mit
          Ablaufdatum, nicht als Dauerlösung, und legen Sie vorher fest, woran
          Sie den Erfolg messen.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Sobald der Chatbot Bestellstatus, Verfügbarkeit oder Kundendaten
          beantworten soll, endet die Gratis-Stufe unabhängig vom Volumen: Dafür
          braucht es eine Anbindung an das führende System. Welche Anbieter für
          welchen Zuschnitt in Frage kommen, steht in unserem Überblick zum{" "}
          <InternalLink
            href="/services/ki-chatbot-fuer-unternehmen"
            variant="underline"
          >
            KI-Chatbot für Unternehmen
          </InternalLink>
          . Wer dieselbe Frage für autonome Agenten statt für das Chat-Widget
          stellt, findet die Rechnung in{" "}
          <InternalLink href="/services/ki-agent-kostenlos" variant="underline">
            KI-Agent kostenlos
          </InternalLink>
          .
        </Typo.Paragraph>
        <Typo.Paragraph>
          Wir bauen Chatbots als eigenständige Lösung auf Ihrer Infrastruktur,
          mit Anbindung an das System, in dem die Antworten wirklich stehen. Der
          Einstieg liegt bei 1.000 Euro einmalig und rund 50 Euro Betrieb im
          Monat, ein erster Pilot steht in fünf Arbeitstagen.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zum kostenlosen KI-Chatbot
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
