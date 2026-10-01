import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude App für Unternehmen: Einführung und Betrieb | Bluebatch",
  description:
    "Claude App für Teams und Enterprise: Bluebatch richtet Claude für euer Unternehmen ein, mit SSO, Rechten, Projekten, Connectoren zu Microsoft 365 und DATEV sowie Schulungen.",
  openGraph: {
    title: "Claude App für Unternehmen: Einführung und Betrieb",
    description:
      "Claude App für Teams und Enterprise: Bluebatch richtet Claude für euer Unternehmen ein, mit SSO, Rechten, Projekten, Connectoren zu Microsoft 365 und DATEV sowie Schulungen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20App%20f%C3%BCr%20euer%20ganzes%20Team&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude App für euer ganzes Team",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-app",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude App · Priorität 1</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude App für euer ganzes Team</Typo.H1>
        <GeoSummary align="center">
          Die Claude App ist der Arbeitsplatz für Claude von Anthropic, im Browser, auf dem Desktop und mobil. Bluebatch führt die Claude App in Unternehmen mit 50 bis 1.000 Mitarbeitenden ein: Lizenzen, Single Sign-on, Projekte, Connectoren zu Microsoft 365 und DATEV sowie Schulungen pro Team.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was die Claude App im Alltag leistet</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Texte und Dokumente">
            Mails, Angebote, Zusammenfassungen und Auswertungen in einem Bruchteil der Zeit.
          </ProseColumns.Item>
          <ProseColumns.Item title="Projekte mit Wissen">
            Pro Team ein Projekt mit eigenen Dokumenten und Anweisungen, damit Claude euren Kontext kennt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Connectoren">
            Claude greift auf Microsoft 365, DATEV und weitere Systeme zu, statt dass ihr Inhalte hineinkopiert.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was wir übernehmen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Einrichtung">
            Organisation, SSO, Rollen und Projekte nach euren Abteilungen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Integrationen">
            Connectoren zu euren Systemen, inklusive Rechteschnitt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Betrieb und Schulung">
            Nutzerverwaltung, Support, neue Funktionen einspielen und Teams befähigen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Nächste Schritte</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="So läuft die Einführung der Claude App ab."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Integrationen"
            description="Welche Systeme wir an Claude anbinden."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="Lizenzen und Service im Überblick."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Claude App bei euch einführen?</IntroBox.Headline>
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
