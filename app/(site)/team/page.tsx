import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Customer from "@/components/sections/customer/customer";
import InternalLink from "@/components/buttons/internal-link";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import Team, {
  TeamMember,
  TeamImage,
  TeamName,
  TeamRole,
  TeamDescription,
  TeamTags,
  TeamTag,
  TeamLinkedIn,
} from "@/components/team/team";

export const metadata: Metadata = {
  title: "Team - Bluebatch | Die Menschen hinter der Automatisierung",
  description:
    "Lernen Sie das Bluebatch Team kennen. Workflow-Experten und Automatisierungs-Profis, die Ihre Prozesse auf das nächste Level bringen.",
  keywords: [
    "Bluebatch Team",
    "Workflow Experten",
    "Automatisierung",
    "KI Spezialisten",
    "Enterprise AI",
  ],
  openGraph: {
    title: "Team - Bluebatch",
    description:
      "Lernen Sie das Bluebatch Team kennen. Workflow-Experten und Automatisierungs-Profis.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Team&eyebrow=Bluebatch",
        width: 1200,
        height: 630,
        alt: "Bluebatch Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team - Bluebatch",
    description:
      "Lernen Sie das Bluebatch Team kennen. Workflow-Experten und Automatisierungs-Profis.",
    images: ["/og?title=Team&eyebrow=Bluebatch"],
  },
  alternates: {
    canonical: "/team",
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
              Die Köpfe hinter Bluebatch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Bluebatch ist eine KI- und Automatisierungsagentur aus
              Deutschland. Das Team aus Workflow-Architekten und Entwicklern
              automatisiert Backoffice-Prozesse im Mittelstand mit
              n8n-Workflows und KI-Agenten: von der Rechnungsprüfung bis zur
              Auftragserfassung, die ersten Workflows in 5 Tagen live und
              DSGVO-konform.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/team-collaboration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Team Section */}
      <ContentWrapper colorScheme="gray-light">
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
              <TeamImage src="/mh-small.webp" alt="Max - Gründer" />
              <TeamName>Max</TeamName>
              <TeamRole>Gründer & CEO</TeamRole>
              <TeamDescription>
                Mit einem unerschütterlichen Glauben an die Macht der
                Automatisierung hat Max Bluebatch gegründet. Er verwandelt
                komplexe Prozesse in elegante Workflows - und Kaffee in Code.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Entwickler</TeamTag>
                <TeamTag variant="secondary">Workflow Architekt</TeamTag>
                <TeamTag variant="accent">n8n Wizard</TeamTag>
                <TeamTag variant="primary">Process Optimizer</TeamTag>
              </TeamTags>
              <TeamLinkedIn href="https://www.linkedin.com/in/maximilianhaensel/" />
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

            <TeamMember>
              <TeamImage src="/mm-small.png" alt="Markus Mosch - Head of Sales" />
              <TeamName>Markus Mosch</TeamName>
              <TeamRole>Head of Sales</TeamRole>
              <TeamDescription>
                Markus verantwortet den Vertrieb bei Bluebatch und bringt
                jahrelange Erfahrung in der Personaldienstleistungsbranche mit.
                Er verbindet Marktverständnis mit Automatisierungsexpertise.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Sales</TeamTag>
                <TeamTag variant="secondary">Personaldienstleistung</TeamTag>
                <TeamTag variant="accent">Strategie</TeamTag>
              </TeamTags>
              <TeamLinkedIn href="https://www.linkedin.com/in/markus-mosch-32a4111a2/" />
            </TeamMember>

            <TeamMember>
              <TeamImage initials="PH" />
              <TeamName>Phillip Pham</TeamName>
              <TeamRole>Investor & Advisor</TeamRole>
              <TeamDescription>
                Phillip bringt strategische Weitsicht und unternehmerische
                Erfahrung ein. Als Investor und Berater unterstützt er Bluebatch
                bei Wachstum und Skalierung.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Investor</TeamTag>
                <TeamTag variant="secondary">Strategie</TeamTag>
                <TeamTag variant="accent">Advisor</TeamTag>
              </TeamTags>
              <TeamLinkedIn href="https://www.linkedin.com/in/ddppham/" />
            </TeamMember>

            <TeamMember>
              <TeamImage initials="NB" />
              <TeamName>Niklas Belser</TeamName>
              <TeamRole>AI Solutions Engineer</TeamRole>
              <TeamDescription>
                Niklas bringt KI dahin, wo sie Arbeit abnimmt: KI-Agenten mit
                Zugriff auf ERP- und Dokumentendaten, MCP-Server und
                LLM-gestützte Auswertungen in produktiven Workflows.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">KI-Agenten</TeamTag>
                <TeamTag variant="secondary">MCP</TeamTag>
                <TeamTag variant="accent">LLM Integration</TeamTag>
              </TeamTags>
            </TeamMember>

            <TeamMember>
              <TeamImage initials="LW" />
              <TeamName>Laura Weber</TeamName>
              <TeamRole>Workflow Developer</TeamRole>
              <TeamDescription>
                Laura verbindet ihr Backend-Know-how mit
                Automatisierungs-Expertise und baut robuste API-Integrationen
                für komplexe Kundenanforderungen.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Python</TeamTag>
                <TeamTag variant="secondary">API Integration</TeamTag>
                <TeamTag variant="accent">Automation</TeamTag>
              </TeamTags>
            </TeamMember>

            <TeamMember>
              <TeamImage initials="TN" />
              <TeamName>Tim Nguyen</TeamName>
              <TeamRole>Praktikant Workflow Automation</TeamRole>
              <TeamDescription>
                Tim studiert Wirtschaftsinformatik und unterstützt das Team bei
                der Umsetzung und Dokumentation von Automatisierungs-Workflows.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Praktikant</TeamTag>
                <TeamTag variant="secondary">No-Code</TeamTag>
                <TeamTag variant="accent">Lernbereit</TeamTag>
              </TeamTags>
            </TeamMember>
          </Team>
        </div>
      </ContentWrapper>

      {/* Team Photos */}
      <ContentWrapper colorScheme="primary-dark">
        <SimpleGrid cols={3}>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/bluebatch-team-workspace.jpg"
              alt="Bluebatch Team Workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/bluebatch-team-collaboration.jpg"
              alt="Bluebatch Team Collaboration"
              fill
              className="object-cover scale-110"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/bluebatch-team-office.jpg"
              alt="Bluebatch Team Office"
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
            Großartiges zu leisten - nicht sie mit Routinearbeit zu belasten.
            Jeder automatisierte Prozess ist ein Stück zurückgewonnene Zeit für
            das, was wirklich zählt.
          </IntroBox.Subline>
          <IntroBox.Paragraph>
            Bei Bluebatch dreht sich alles um Ergebnisse. Wir messen unseren
            Erfolg nicht an Projektlaufzeiten, sondern an der Zeit, die wir
            unseren Kunden zurückgeben. Wie aus dem ersten Workflow über die
            Jahre eine eigene AI-Plattform wird, zeigt{" "}
            <InternalLink href="/mit-euch-wachsen" variant="underline">
              unser Wachstumsmodell
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* Karriere */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Karriere</IntroBox.PreHeadline>
          <IntroBox.Headline>Werde Teil von Bluebatch</IntroBox.Headline>
          <IntroBox.Subline>
            Wir wachsen und suchen talentierte Menschen, die mit uns die Zukunft
            der Automatisierung gestalten wollen. Alle offenen Stellen, unser
            Tech-Stack und das Bewerbungsformular stehen auf der Karriereseite.
          </IntroBox.Subline>
        </IntroBox>
        <div className="mt-8 flex justify-center">
          <InternalLink href="/karriere">
            Offene Stellen bei Bluebatch ansehen
          </InternalLink>
        </div>
      </ContentWrapper>

      {/* Partner */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Partner</IntroBox.PreHeadline>
          <IntroBox.Headline>Gemeinsam mit Pexon Consulting</IntroBox.Headline>
          <IntroBox.Paragraph>
            Für größere Cloud- und Plattform-Themen arbeiten wir mit unserem
            Partner Pexon Consulting zusammen. So verbinden wir unsere
            Automatisierungs- und KI-Expertise mit tiefem Cloud- und
            Engineering-Know-how.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://pexon-consulting.de"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:border-primary-400 hover:text-primary-600"
          >
            pexon-consulting.de
          </a>
          <a
            href="https://pexon.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:border-primary-400 hover:text-primary-600"
          >
            pexon.com
          </a>
        </div>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Consultation CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
