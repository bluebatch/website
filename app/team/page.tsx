import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import Customer from "@/components/customer/customer";
import IntroBox from "@/components/intro-box";
import SimpleGrid from "@/components/simple-grid";
import Team, {
  TeamMember,
  TeamImage,
  TeamName,
  TeamRole,
  TeamDescription,
  TeamTags,
  TeamTag,
} from "@/components/team/team";

export const metadata: Metadata = {
  title: "Team – BlueBatch | Die Menschen hinter der Automatisierung",
  description:
    "Lernen Sie das BlueBatch Team kennen. Workflow-Experten und Automatisierungs-Profis, die Ihre Prozesse auf das nächste Level bringen.",
  keywords: [
    "BlueBatch Team",
    "Workflow Experten",
    "Automatisierung",
    "KI Spezialisten",
    "Enterprise AI",
  ],
  openGraph: {
    title: "Team – BlueBatch",
    description:
      "Lernen Sie das BlueBatch Team kennen. Workflow-Experten und Automatisierungs-Profis.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/cover-fb.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team – BlueBatch",
    description:
      "Lernen Sie das BlueBatch Team kennen. Workflow-Experten und Automatisierungs-Profis.",
    images: ["/images/cover-fb.jpg"],
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Unser Team</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Die Köpfe hinter BlueBatch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Wir sind Workflow-Architekten, Code-Enthusiasten und
              Automatisierungs-Nerds. Gemeinsam revolutionieren wir die Art, wie
              Unternehmen arbeiten.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/startae-team-8RX3W79_UTE-unsplash.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Team Section */}
      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.PreHeadline>Das Team</IntroBox.PreHeadline>
          <IntroBox.Headline>Expertise trifft Leidenschaft</IntroBox.Headline>
          <IntroBox.Subline>
            Wir kombinieren technische Exzellenz mit echtem Verständnis für
            Geschäftsprozesse. Unser Ziel: Ihre Workflows auf Autopilot.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <Team>
            <TeamMember>
              <TeamImage src="/mh-small.png" alt="Max - Gründer" />
              <TeamName>Max</TeamName>
              <TeamRole>Gründer & CEO</TeamRole>
              <TeamDescription>
                Mit einem unerschütterlichen Glauben an die Macht der
                Automatisierung hat Max BlueBatch gegründet. Er verwandelt
                komplexe Prozesse in elegante Workflows – und Kaffee in Code.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Entwickler</TeamTag>
                <TeamTag variant="secondary">Workflow Architekt</TeamTag>
                <TeamTag variant="accent">n8n Wizard</TeamTag>
                <TeamTag variant="primary">Process Optimizer</TeamTag>
              </TeamTags>
            </TeamMember>

            <TeamMember>
              <TeamImage src="/ah-small.webp" alt="Alexandra - Key Account" />
              <TeamName>Alexandra</TeamName>
              <TeamRole>Key Account & Performance</TeamRole>
              <TeamDescription>
                Alexandra sorgt dafür, dass jeder Kunde den maximalen ROI aus
                seinen Workflows herausholt. Sie ist die Brücke zwischen
                technischer Excellence und Business Impact.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Key Account</TeamTag>
                <TeamTag variant="secondary">Workflow Nurturing</TeamTag>
                <TeamTag variant="accent">Performance Queen</TeamTag>
                <TeamTag variant="primary">ROI Hunter</TeamTag>
              </TeamTags>
            </TeamMember>
          </Team>
        </div>
      </ContentWrapper>

      {/* Team Photos */}
      <ContentWrapper background="bg-primary-800">
        <SimpleGrid cols={3}>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/team-1.jpg"
              alt="Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/team-2.png"
              alt="Team"
              fill
              className="object-cover scale-110"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/team-3.png"
              alt="Team"
              fill
              className="object-cover scale-110"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Values Section */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Unsere Werte</IntroBox.PreHeadline>
          <IntroBox.Headline>Was uns antreibt</IntroBox.Headline>
          <IntroBox.Subline>
            Wir glauben daran, dass Technologie Menschen befähigen sollte,
            Großartiges zu leisten – nicht sie mit Routinearbeit zu belasten.
            Jeder automatisierte Prozess ist ein Stück zurückgewonnene Zeit für
            das, was wirklich zählt.
          </IntroBox.Subline>
          <IntroBox.Paragraph>
            Bei BlueBatch dreht sich alles um Ergebnisse. Wir messen unseren
            Erfolg nicht an Projektlaufzeiten, sondern an der Zeit, die wir
            unseren Kunden zurückgeben.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Consultation CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
