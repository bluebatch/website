import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import SimpleGrid from "@/components/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import Customer from "@/components/customer/customer";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import SimpleCard, { SimpleCardFooter } from "@/components/cards/simple-card";
import IntroBox from "@/components/intro-box";

export const metadata: Metadata = {
  title: "n8n Schulungen & Workshops | BlueBatch",
  description:
    "Professionelle n8n Schulungen für Ihr Team. Vor-Ort, Online oder Hybrid. Von Grundlagen bis Enterprise-Features.",
  openGraph: {
    title: "n8n Schulungen & Workshops | BlueBatch",
    description:
      "Praxisorientierte n8n Schulungen für Ihr Team. Vom Einsteiger bis zum Enterprise-Deployment.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch n8n Schulungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Schulungen & Workshops | BlueBatch",
    description:
      "Professionelle n8n Schulungen für Ihr Team. Vor-Ort, Online oder Hybrid.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/services/schulungen",
  },
};

const trainingLevels = [
  {
    level: "Grundlagen",
    duration: "2 Tage",
    audience: "Business-Anwender & Einsteiger",
    topics: [
      "n8n Basics und Benutzeroberfläche",
      "Erste Workflows erstellen",
      "Trigger, Nodes und Datenstrukturen",
      "Integration mit gängigen Tools (Google Sheets, Slack, Email)",
      "Error Handling und Debugging",
    ],
    image: "/images/training-seminar.jpg",
  },
  {
    level: "Fortgeschrittene",
    duration: "2-3 Tage",
    audience: "Entwickler & IT-Administratoren",
    topics: [
      "Komplexe Workflows und Datenflüsse",
      "Sub-Workflows und Error-Workflows",
      "API-Integration und Webhooks",
      "Performance-Optimierung",
      "Deployment und Skalierung",
    ],
    image: "/images/team-collaboration.jpg",
  },
  {
    level: "Enterprise & KI",
    duration: "3-5 Tage",
    audience: "Teams & Organisationen",
    topics: [
      "AI-Agent Entwicklung mit LLMs",
      "Multi-Agent-Systeme",
      "Enterprise Security & Governance",
      "High-Performance Scaling (Redis, Queue Mode)",
      "Custom Node Development",
    ],
    image: "/images/team-meeting.jpg",
  },
];

const formats = [
  {
    name: "Vor-Ort Training",
    iconSrc: "/icons/building.svg",
    description:
      "In-Person Workshops bei Ihnen vor Ort oder in unserem Schulungszentrum",
    features: [
      "Persönliche Betreuung",
      "Hands-On Practice",
      "Direkte Interaktion mit Trainer",
      "Team-Building-Effekt",
    ],
    bestFor: "Teams, die gemeinsam lernen möchten",
  },
  {
    name: "Online Training",
    iconSrc: "/icons/phone.svg",
    description:
      "Remote Live-Training via Video-Konferenz und virtuelle Classroom",
    features: [
      "Flexible Terminplanung",
      "Keine Reisekosten",
      "Remote Desktop für Praxis",
      "Aufzeichnung der Sessions",
    ],
    bestFor: "Remote Teams und flexible Schedules",
  },
  {
    name: "Hybrid Training",
    iconSrc: "/icons/process.svg",
    description: "Kombination aus Online-Sessions und Vor-Ort Workshops",
    features: [
      "Flexibilität zwischen Formaten",
      "Online Theory, Onsite Practice",
      "Modularer Aufbau",
      "Anpassung nach Bedarf",
    ],
    bestFor: "Große Organisationen mit verteilten Teams",
  },
];

const outcomes = [
  {
    icon: "🎓",
    title: "Zertifizierung",
    description:
      "Offizielle n8n Level 1 Zertifizierung und BlueBatch Teilnahmezertifikat",
  },
  {
    icon: "⚡",
    title: "Schneller ROI",
    description:
      "Demonstrierter ROI innerhalb von 90 Tagen nach Implementierung",
  },
  {
    icon: "🚀",
    title: "Selbstständigkeit",
    description:
      "Teams können Workflows eigenständig designen, managen und skalieren",
  },
  {
    icon: "📈",
    title: "Produktivität",
    description:
      "20-25% Steigerung der Workforce-Produktivität durch Automatisierung",
  },
];

const targetGroups = [
  {
    group: "Business-Anwender",
    description:
      "Keine Programmierkenntnisse erforderlich. Intuitives Drag-and-Drop Interface.",
    roles: ["Process Manager", "Data Analysts", "Operations Manager"],
    icon: "👔",
  },
  {
    group: "Entwickler",
    description:
      "TypeScript und Node.js für Custom Extensions. Volle Kontrolle über Integrationen.",
    roles: ["Software-Entwickler", "DevOps Engineers", "IT Operations"],
    icon: "👨‍💻",
  },
  {
    group: "IT-Administratoren",
    description: "System-Management, Deployment, Security und Governance.",
    roles: ["System-Administratoren", "IT-Manager", "Security-Officers"],
    icon: "🔧",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>n8n Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              n8n Schulungen & Workshops
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Befähigen Sie Ihr Team zur Workflow-Automatisierung.
              Praxisorientierte Schulungen von Grundlagen bis
              Enterprise-Deployment. Vor-Ort, Online oder Hybrid – individuell
              auf Ihre Bedürfnisse zugeschnitten.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Schulung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Vor-Ort • Online • Hybrid • Max. 10 Teilnehmer
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/training-seminar.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Training Levels */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Schulungs-Level</IntroBox.Headline>
          <IntroBox.Paragraph>
            Von Grundlagen bis Enterprise – wir haben das richtige Training für
            Ihr Team
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-12">
          {trainingLevels.map((training, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "" : "bg-gray-50"
              } rounded-lg p-8`}
            >
              <SimpleGrid cols={2} className="items-center gap-12">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary-600 text-white px-4 py-2 rounded-full font-semibold">
                          {training.level}
                        </span>
                        <span className="text-gray-600">
                          {training.duration}
                        </span>
                      </div>
                      <Typo.H3 className="mb-2">
                        Für {training.audience}
                      </Typo.H3>
                      <Typo.Paragraph className="text-gray-600 mb-6">
                        Praxisorientierte Schulung mit Hands-On Übungen
                      </Typo.Paragraph>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">
                          Inhalte:
                        </h4>
                        <ul className="space-y-2">
                          {training.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-primary-600 mt-1">✓</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative aspect-video">
                      <Image
                        src={training.image}
                        alt={training.level}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-video">
                      <Image
                        src={training.image}
                        alt={training.level}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary-600 text-white px-4 py-2 rounded-full font-semibold">
                          {training.level}
                        </span>
                        <span className="text-gray-600">
                          {training.duration}
                        </span>
                      </div>
                      <Typo.H3 className="mb-2">
                        Für {training.audience}
                      </Typo.H3>
                      <Typo.Paragraph className="text-gray-600 mb-6">
                        Praxisorientierte Schulung mit Hands-On Übungen
                      </Typo.Paragraph>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">
                          Inhalte:
                        </h4>
                        <ul className="space-y-2">
                          {training.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="text-primary-600 mt-1">✓</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </SimpleGrid>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* Training Formats */}
      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.Headline>Schulungsformate</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wählen Sie das Format, das am besten zu Ihrem Team passt
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {formats.map((format, index) => (
            <SimpleCard
              key={index}
              icon={
                <Image
                  src={format.iconSrc}
                  alt={format.name}
                  width={64}
                  height={64}
                />
              }
            >
              <Typo.H3 className="mb-3">{format.name}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-6">
                {format.description}
              </Typo.Paragraph>
              <div className="space-y-2 mb-6">
                {format.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="text-primary-600 text-sm">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <SimpleCardFooter>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Ideal für:</span>{" "}
                  {format.bestFor}
                </p>
              </SimpleCardFooter>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Target Groups */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Zielgruppen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Maßgeschneiderte Schulungen für jede Rolle
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {targetGroups.map((target, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8"
            >
              <div className="text-5xl mb-4">{target.icon}</div>
              <Typo.H3 className="mb-3">{target.group}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-6">
                {target.description}
              </Typo.Paragraph>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  Typische Rollen:
                </h4>
                {target.roles.map((role, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-700 pl-4 border-l-2 border-primary-600"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Outcomes */}
      <ContentWrapper background="bg-primary-600">
        <IntroBox dark>
          <IntroBox.Headline>Was Sie erreichen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Messbare Ergebnisse für Ihr Team und Ihre Organisation
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={4} className="gap-8">
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{outcome.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {outcome.title}
              </h3>
              <p className="text-white opacity-90">{outcome.description}</p>
            </div>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Why Professional Training */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-square">
            <Image
              src="/images/training-seminar.jpg"
              alt="Workshop Session"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-6">Warum professionelle Schulung?</Typo.H2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Strukturierter Lernpfad
                </h4>
                <p className="text-gray-600">
                  Systematischer Aufbau von Grundlagen zu Advanced Topics. Keine
                  Information Overload, klare Lernziele.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Experten-Guidance
                </h4>
                <p className="text-gray-600">
                  Lernen von n8n-zertifizierten Spezialisten mit 500+
                  erfolgreichen Implementierungen. Best Practices aus der
                  Praxis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Hands-On Practice
                </h4>
                <p className="text-gray-600">
                  Interaktive Übungen und praktische Sessions. Sofortiges
                  Feedback und Korrektur während der Schulung.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Team-Alignment
                </h4>
                <p className="text-gray-600">
                  Gesamtes Team lernt dieselbe Methodik. Konsistente Standards
                  und Practices, bessere Zusammenarbeit.
                </p>
              </div>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Pricing Info */}
      <ContentWrapper background="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Typo.H2 className="mb-6">Individuelle Angebote</Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-8">
            Unsere Schulungen werden individuell auf Ihre Anforderungen, Ihr
            Team und Ihre Use Cases zugeschnitten. Wir erstellen Ihnen ein
            maßgeschneidertes Angebot basierend auf:
          </Typo.Paragraph>

          <SimpleGrid cols={3} className="gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Teilnehmerzahl
              </h4>
              <p className="text-gray-600 text-sm">
                Gruppenrabatte ab 3+ Teilnehmern
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Schulungsdauer
              </h4>
              <p className="text-gray-600 text-sm">
                2-5 Tage je nach Level und Tiefe
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Format</h4>
              <p className="text-gray-600 text-sm">
                Vor-Ort, Online oder Hybrid
              </p>
            </div>
          </SimpleGrid>

          <ContactButton size="lg">
            Unverbindliches Angebot anfragen
          </ContactButton>

          <p className="text-gray-500 text-sm mt-6">
            Inkl. Schulungsmaterialien, Zertifikaten und 4 Wochen Post-Training
            Support
          </p>
        </div>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
