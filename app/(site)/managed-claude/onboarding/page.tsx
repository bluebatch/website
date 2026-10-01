import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Onboarding: vom Vertrag zum ersten Prompt | Bluebatch",
  description:
    "Onboarding für das Private Claude AI Gateway: Vertrag und Geheimhaltung, Tenant-Einrichtung, Anbindung der Claude-App und Schulung. Startklar maximal eine Woche nach Auftrag, Einrichtung 1.500 € Festpreis.",
  openGraph: {
    title: "Onboarding: vom Vertrag zum ersten Prompt",
    description:
      "Onboarding für das Private Claude AI Gateway: Vertrag und Geheimhaltung, Tenant-Einrichtung, Anbindung der Claude-App und Schulung. Startklar maximal eine Woche nach Auftrag, Einrichtung 1.500 € Festpreis.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Vom%20Vertrag%20zum%20ersten%20Prompt&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Vom Vertrag zum ersten Prompt",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/onboarding",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Onboarding</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Vom Vertrag zum ersten Prompt</Typo.H1>
        <GeoSummary align="center">
          Das Onboarding für das Private Claude AI Gateway führt in vier Schritten von der Unterschrift zum ersten Prompt: Vertrag und Geheimhaltung, Tenant-Einrichtung, Anbindung der Claude-App und Schulung. Gateway und Chat sind maximal eine Woche nach Auftrag startklar, die Einrichtung kostet 1.500 € Festpreis. Danach folgt auf Wunsch ein Coaching-Paket.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Roadmap für den Go-live</IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der Unterschrift bis zum ersten Prompt, in vier Schritten ohne Umwege.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Vertrag und Geheimhaltung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                AVV, Geheimhaltungsvereinbarung und Vertrag werden unterzeichnet. Die rechtliche Basis steht.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Tenant-Einrichtung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Bluebatch richtet Tenant und Zugänge ein. Ihre Umgebung ist bereit.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Anbindung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Die Claude-App wird bei Ihnen mit dem Gateway verbunden, per Self-Service oder durch Ihr IT-Team.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Schulung</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Auf Wunsch schulen wir Ihr Team im Umgang mit Claude, als Coaching-Paket S oder L.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was zur Einrichtung gehört</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Gateway und Chat">
            Startklar übergeben, alle Mitarbeiter haben Zugang.
          </ProseColumns.Item>
          <ProseColumns.Item title="SSO, Rollen und Protokoll">
            Anmeldung mit Ihrem bestehenden Konto, Rechte je Team, Protokollierung aktiv.
          </ProseColumns.Item>
          <ProseColumns.Item title="Limits">
            Verbrauchslimits pro Mitarbeiter hinterlegt, mit Warnschwelle.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Zwei Coaching-Pakete, die Einrichtung wird angerechnet</IntroBox.Headline>
          <IntroBox.Paragraph>
            3 oder 8 Personentage. Je mehr Coaching, desto mehr der Einrichtung (1.500 €) bekommen Sie zurück. Alle Preise zzgl. USt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-s"
            price="3.000 €"
            title="Paket S: 3 Personentage"
            description="KI-Kompetenzschulung, Grundlagen und erste Arbeitsanleitungen. Outlook Connector inklusive. 50 % der Einrichtung werden angerechnet."
            linkLabel="Zu Paket S"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching/paket-l"
            price="8.000 €"
            title="Paket L: 8 Personentage"
            description="Alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills. Outlook Connector inklusive. 100 % der Einrichtung werden angerechnet."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Sie entscheiden zuerst nur über Schritt 1</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der ist klein, hat einen Festpreis und ist umkehrbar. Schulung, Agenten, Systemanbindung und DATEV entscheiden Sie, wenn Sie aus dem Alltag wissen, was sich lohnt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Scoping-Gespräch, 30 Minuten</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Stand der IT, Anmeldung, wer Zugriff bekommt, welche Systeme später relevant sind. Mit Ihnen, Ihrer IT und uns.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Angebot, 3 Tage danach</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Einrichtung zum Festpreis, mit Verbrauchsschätzung und Limit-Vorschlag.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Einrichtung, maximal 1 Woche nach Auftrag</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Gateway und Chat startklar, alle Mitarbeiter haben Zugang. Wir, gemeinsam mit Ihrer IT.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Rückblick nach 4 bis 6 Wochen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Was wird genutzt, wo lohnt sich Schritt 2, welcher Vorgang ist der Kandidat für Schritt 3. Gemeinsam.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Bereit für den Go-live?</IntroBox.Headline>
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
