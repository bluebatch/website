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
import Hiring, {
  HiringPosition,
  HiringTitle,
  HiringType,
  HiringLocation,
  HiringDescription,
  HiringRequirements,
  HiringRequirement,
  HiringTags,
  HiringTag,
  HiringApply,
} from "@/components/hiring/hiring";
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
  TeamLinkedIn,
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
        url: "/images/bluebatch-social-cover.jpg",
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
    images: ["/images/bluebatch-social-cover.jpg"],
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
              Die Köpfe hinter BlueBatch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Wir sind Workflow-Architekten, Code-Enthusiasten und
              Automatisierungs-Nerds. Gemeinsam revolutionieren wir die Art, wie
              Unternehmen arbeiten.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/team-collaboration.jpg" type="image" />
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
              <TeamImage src="/mh-small.webp" alt="Max - Gründer" />
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
              <TeamLinkedIn href="https://www.linkedin.com/in/maximilianhaensel/" />
            </TeamMember>

            <TeamMember>
              <TeamImage src="/ah-small.webp" alt="Alexandra - Backoffice Manager" />
              <TeamName>Alexandra</TeamName>
              <TeamRole>Backoffice Manager</TeamRole>
              <TeamDescription>
                Alexandra hält den Laden am Laufen – von Rechnungsstellung über
                Vertragsmanagement bis hin zur Organisation interner Prozesse. Sie
                sorgt für Struktur, Effizienz und den reibungslosen Betrieb aller
                administrativen Abläufe.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Organisation</TeamTag>
                <TeamTag variant="secondary">Verwaltung</TeamTag>
                <TeamTag variant="accent">Rechnungswesen</TeamTag>
                <TeamTag variant="primary">Vertragsmanagement</TeamTag>
              </TeamTags>
            </TeamMember>

            <TeamMember>
              <TeamImage initials="PH" />
              <TeamName>Phillip Pham</TeamName>
              <TeamRole>Investor & Advisor</TeamRole>
              <TeamDescription>
                Phillip bringt strategische Weitsicht und unternehmerische
                Erfahrung ein. Als Investor und Berater unterstützt er BlueBatch
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
              <TeamImage initials="JK" />
              <TeamName>Jonas Krüger</TeamName>
              <TeamRole>Senior Workflow Developer</TeamRole>
              <TeamDescription>
                Jonas entwickelt skalierbare Automatisierungslösungen mit n8n
                und bringt jahrelange Erfahrung als Full-Stack-Entwickler mit.
              </TeamDescription>
              <TeamTags>
                <TeamTag variant="primary">Entwickler</TeamTag>
                <TeamTag variant="secondary">TypeScript</TeamTag>
                <TeamTag variant="accent">n8n Expert</TeamTag>
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
                Tim studiert Wirtschaftsinformatik und unterstützt das Team
                bei der Umsetzung und Dokumentation von
                Automatisierungs-Workflows.
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
      <ContentWrapper background="bg-primary-800">
        <SimpleGrid cols={3}>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/bluebatch-team-workspace.jpg"
              alt="BlueBatch Team Workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/bluebatch-team-collaboration.jpg"
              alt="BlueBatch Team Collaboration"
              fill
              className="object-cover scale-110"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border-4 border-white">
            <Image
              src="/team/bluebatch-team-office.jpg"
              alt="BlueBatch Team Office"
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

      {/* Open Positions */}
      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.PreHeadline>Karriere</IntroBox.PreHeadline>
          <IntroBox.Headline>Werde Teil von BlueBatch</IntroBox.Headline>
          <IntroBox.Subline>
            Wir wachsen und suchen talentierte Menschen, die mit uns die Zukunft
            der Automatisierung gestalten wollen.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <Hiring>
            <HiringPosition>
              <HiringTitle>n8n Workflow Developer</HiringTitle>
              <HiringType>Vollzeit / Teilzeit</HiringType>
              <HiringLocation>Remote / Hybrid</HiringLocation>
              <HiringDescription>
                Du baust komplexe Automatisierungs-Workflows mit n8n und
                integrierst APIs, Datenbanken und KI-Services zu leistungsstarken
                Lösungen für unsere Kunden.
              </HiringDescription>
              <HiringRequirements>
                <HiringRequirement>Erfahrung mit n8n oder vergleichbaren Automation-Tools</HiringRequirement>
                <HiringRequirement>Kenntnisse in REST APIs und Webhooks</HiringRequirement>
                <HiringRequirement>Grundlagen in JavaScript/TypeScript</HiringRequirement>
                <HiringRequirement>Verständnis für Geschäftsprozesse</HiringRequirement>
              </HiringRequirements>
              <HiringTags>
                <HiringTag variant="primary">n8n</HiringTag>
                <HiringTag variant="secondary">Automation</HiringTag>
                <HiringTag variant="accent">API Integration</HiringTag>
              </HiringTags>
              <HiringApply />
            </HiringPosition>

            <HiringPosition>
              <HiringTitle>Key Account Manager</HiringTitle>
              <HiringType>Vollzeit</HiringType>
              <HiringLocation>Remote / Hybrid</HiringLocation>
              <HiringDescription>
                Du betreust unsere wichtigsten Kunden, identifizierst
                Automatisierungs-Potenziale und baust langfristige
                Partnerschaften auf.
              </HiringDescription>
              <HiringRequirements>
                <HiringRequirement>Erfahrung im B2B Account Management</HiringRequirement>
                <HiringRequirement>Technisches Verständnis für SaaS & Automation</HiringRequirement>
                <HiringRequirement>Starke Kommunikationsfähigkeiten</HiringRequirement>
                <HiringRequirement>Erfahrung mit CRM-Systemen</HiringRequirement>
              </HiringRequirements>
              <HiringTags>
                <HiringTag variant="primary">B2B</HiringTag>
                <HiringTag variant="secondary">Account Management</HiringTag>
                <HiringTag variant="accent">SaaS</HiringTag>
              </HiringTags>
              <HiringApply />
            </HiringPosition>

            <HiringPosition>
              <HiringTitle>Backoffice Manager</HiringTitle>
              <HiringType>Vollzeit / Teilzeit</HiringType>
              <HiringLocation>Remote / Hybrid</HiringLocation>
              <HiringDescription>
                Du hältst den Laden am Laufen – von Rechnungsstellung über
                Vertragsmanagement bis hin zur Organisation interner Prozesse.
              </HiringDescription>
              <HiringRequirements>
                <HiringRequirement>Erfahrung in Büroorganisation oder Verwaltung</HiringRequirement>
                <HiringRequirement>Sicherer Umgang mit digitalen Tools</HiringRequirement>
                <HiringRequirement>Strukturierte und eigenständige Arbeitsweise</HiringRequirement>
                <HiringRequirement>Grundkenntnisse in Buchhaltung von Vorteil</HiringRequirement>
              </HiringRequirements>
              <HiringTags>
                <HiringTag variant="primary">Organisation</HiringTag>
                <HiringTag variant="secondary">Verwaltung</HiringTag>
                <HiringTag variant="accent">Digitale Tools</HiringTag>
              </HiringTags>
              <HiringApply />
            </HiringPosition>

            <HiringPosition>
              <HiringTitle>AI Solutions Engineer</HiringTitle>
              <HiringType>Vollzeit</HiringType>
              <HiringLocation>Remote</HiringLocation>
              <HiringDescription>
                Du entwickelst KI-gestützte Lösungen und integrierst LLMs,
                Computer Vision und NLP-Modelle in die Workflows unserer Kunden.
              </HiringDescription>
              <HiringRequirements>
                <HiringRequirement>Erfahrung mit LLMs und AI APIs (OpenAI, Claude, etc.)</HiringRequirement>
                <HiringRequirement>Python oder TypeScript Kenntnisse</HiringRequirement>
                <HiringRequirement>Verständnis für Prompt Engineering</HiringRequirement>
                <HiringRequirement>Interesse an neuen KI-Technologien</HiringRequirement>
              </HiringRequirements>
              <HiringTags>
                <HiringTag variant="primary">KI</HiringTag>
                <HiringTag variant="secondary">LLM</HiringTag>
                <HiringTag variant="accent">Python</HiringTag>
              </HiringTags>
              <HiringApply />
            </HiringPosition>

            <HiringPosition>
              <HiringTitle>Sales Development Representative</HiringTitle>
              <HiringType>Vollzeit</HiringType>
              <HiringLocation>Remote / Hybrid</HiringLocation>
              <HiringDescription>
                Du generierst neue Leads, qualifizierst potenzielle Kunden und
                legst den Grundstein für erfolgreiche Geschäftsbeziehungen.
              </HiringDescription>
              <HiringRequirements>
                <HiringRequirement>Erste Erfahrung im B2B-Vertrieb oder SDR-Rolle</HiringRequirement>
                <HiringRequirement>Kommunikationsstärke und Überzeugungskraft</HiringRequirement>
                <HiringRequirement>Eigeninitiative und Zielorientierung</HiringRequirement>
                <HiringRequirement>Affinität zu Tech & Automation</HiringRequirement>
              </HiringRequirements>
              <HiringTags>
                <HiringTag variant="primary">Sales</HiringTag>
                <HiringTag variant="secondary">B2B</HiringTag>
                <HiringTag variant="accent">Lead Gen</HiringTag>
              </HiringTags>
              <HiringApply />
            </HiringPosition>

            <HiringPosition>
              <HiringTitle>Werkstudent:in Workflow Automation</HiringTitle>
              <HiringType>Teilzeit (15-20h/Woche)</HiringType>
              <HiringLocation>Remote</HiringLocation>
              <HiringDescription>
                Du unterstützt unser Team bei der Entwicklung und Optimierung von
                Automatisierungs-Workflows und sammelst Praxiserfahrung mit
                modernsten Tools.
              </HiringDescription>
              <HiringRequirements>
                <HiringRequirement>Laufendes Studium (Informatik, BWL, o.ä.)</HiringRequirement>
                <HiringRequirement>Interesse an Automatisierung und No-Code/Low-Code</HiringRequirement>
                <HiringRequirement>Schnelle Auffassungsgabe und Lernbereitschaft</HiringRequirement>
                <HiringRequirement>Erste Erfahrung mit Tools wie n8n, Make oder Zapier von Vorteil</HiringRequirement>
              </HiringRequirements>
              <HiringTags>
                <HiringTag variant="primary">Werkstudent</HiringTag>
                <HiringTag variant="secondary">No-Code</HiringTag>
                <HiringTag variant="accent">Einstieg</HiringTag>
              </HiringTags>
              <HiringApply />
            </HiringPosition>
          </Hiring>
        </div>
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
