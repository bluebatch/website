import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Outlook Connector: Posteingang, Kalender und Entwürfe in Claude | Bluebatch",
  description:
    "Der Outlook Connector für das Private Claude AI Gateway bringt Posteingang, Kalender und Entwürfe direkt in Claude und ist die Grundlage für den Mail-Agenten. 500 € einmalig, inklusive bei Coaching-Paket S oder L.",
  openGraph: {
    title: "Outlook Connector: Posteingang, Kalender und Entwürfe in Claude",
    description:
      "Der Outlook Connector für das Private Claude AI Gateway bringt Posteingang, Kalender und Entwürfe direkt in Claude und ist die Grundlage für den Mail-Agenten. 500 € einmalig, inklusive bei Coaching-Paket S oder L.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Outlook%20Connector%20f%C3%BCr%20Claude&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Outlook Connector für Claude",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/microsoft",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Integration · Microsoft 365</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Outlook Connector für Claude</Typo.H1>
        <GeoSummary align="center">
          Der Outlook Connector bringt Posteingang, Kalender und Entwürfe aus Microsoft 365 direkt in Claude, über das Private Claude AI Gateway in Ihrem Konto. Er ist die Grundlage für den Mail-Agenten. Der Connector kostet einmalig 500 € und ist bei Buchung von Coaching-Paket S oder L inklusive.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was damit möglich wird</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Posteingang">
            Claude liest Mails im Zusammenhang und bereitet Antworten im Ton der Kanzlei vor.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kalender">
            Termine als Kontext, etwa für Fristen und Wiedervorlagen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Entwürfe">
            Antworten landen als Entwurf im Postfach, gesendet wird erst nach Freigabe.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Die Grundlage für den Mail-Agenten</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Vorsortieren">
            Der Mail-Agent ordnet neue Mails nach Mandant und Vorgang zu, bevor jemand das Postfach öffnet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nachhaken">
            Er erkennt fehlende Unterlagen und bereitet die Erinnerung vor.
          </ProseColumns.Item>
          <ProseColumns.Item title="Gleiche Regeln">
            Rollen, Protokoll und eigenes Budget wie bei jeder Nutzung über das Gateway.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>So buchen Sie den Connector</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/preise"
            price="500 € einmalig"
            title="Outlook Connector"
            description="Als einzelnes Add-on zum Gateway."
            linkLabel="Zu den Preisen"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching"
            price="inklusive"
            title="Mit Coaching-Paket"
            description="Inklusive bei Paket S oder Paket L."
            linkLabel="Zu den Coaching-Paketen"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            title="Mail-Agent"
            description="Was der Mail-Agent im Alltag übernimmt."
            linkLabel="Zum Mail-Agenten"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Outlook mit Claude verbinden?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
