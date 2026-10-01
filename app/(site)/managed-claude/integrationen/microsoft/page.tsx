import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude mit Microsoft 365 verbinden | Bluebatch",
  description:
    "Claude und Microsoft 365: Bluebatch verbindet Claude mit Outlook, Teams, SharePoint und OneDrive, damit euer Team mit Claude auf vorhandenes Wissen zugreift.",
  openGraph: {
    title: "Claude mit Microsoft 365 verbinden",
    description:
      "Claude und Microsoft 365: Bluebatch verbindet Claude mit Outlook, Teams, SharePoint und OneDrive, damit euer Team mit Claude auf vorhandenes Wissen zugreift.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20mit%20Microsoft%20365%20verbinden&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude mit Microsoft 365 verbinden",
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
        <Typo.H1 className="text-center">Claude mit Microsoft 365 verbinden</Typo.H1>
        <GeoSummary align="center">
          Die Microsoft-365-Integration verbindet Claude mit Outlook, Teams, SharePoint und OneDrive. Euer Team fragt Claude nach Inhalten aus Dokumenten, Mails und Chats, ohne sie hineinzukopieren. Bluebatch richtet die Verbindung ein, setzt die Berechtigungen und betreut sie im laufenden Betrieb.
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
          <ProseColumns.Item title="SharePoint und OneDrive">
            Claude findet und fasst Dokumente aus euren Ablagen zusammen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Outlook">
            Mails und Termine als Kontext für Antworten und Entwürfe.
          </ProseColumns.Item>
          <ProseColumns.Item title="Teams">
            Besprechungen und Chats nachvollziehen und Aufgaben ableiten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Wie wir anbinden</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Entra ID">
            Anmeldung und Rechte laufen über euer bestehendes Microsoft-Konto.
          </ProseColumns.Item>
          <ProseColumns.Item title="Berechtigungen">
            Claude sieht nur, worauf die Person ohnehin Zugriff hat.
          </ProseColumns.Item>
          <ProseColumns.Item title="Betrieb">
            Monitoring, Anpassungen und Support aus einer Hand.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Microsoft 365 und Claude verbinden?</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 30 Minuten klären wir, wo Claude bei euch den größten Hebel hat, welche Systeme angebunden werden und wie der Start aussieht.
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
