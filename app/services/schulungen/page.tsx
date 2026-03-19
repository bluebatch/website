import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import Customer from "@/components/sections/customer/customer";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import SimpleCard, { SimpleCardIcon } from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/n8n-schulung",
  rewrites: [
    {
      source: "/n8n-schulung",
    },
  ],
};

export const metadata: Metadata = {
  title: "n8n Schulung & Workshops | Bluebatch",
  description:
    "Professionelle Schulungen für n8n – für Ihr Team. Vor-Ort, Online oder Hybrid. Von Grundlagen bis Enterprise-Features.",
  openGraph: {
    title: "Schulungen für n8n & Workshops | Bluebatch",
    description:
      "Praxisorientierte Schulungen für n8n. Vom Einsteiger bis zum Enterprise-Deployment.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Schulungen für n8n",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schulungen für n8n & Workshops | Bluebatch",
    description:
      "Professionelle Schulungen für n8n – für Ihr Team. Vor-Ort, Online oder Hybrid.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/n8n-schulung",
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
      "Multi-Agent-Systeme & KI Accelerator Programme",
      "Enterprise Security & Governance inkl. KI DSGVO Schulung",
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
      "Offizielle n8n Level 1 Zertifizierung und Bluebatch Teilnahmezertifikat",
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
    iconSrc: "/icons/business-card-membership-card.svg",
  },
  {
    group: "Entwickler",
    description:
      "TypeScript und Node.js für Custom Extensions. Volle Kontrolle über Integrationen.",
    roles: ["Software-Entwickler", "DevOps Engineers", "IT Operations"],
    iconSrc:
      "/icons/computer-programmer-software-engineer-coder-software-developer.svg",
  },
  {
    group: "IT-Administratoren",
    description: "System-Management, Deployment, Security und Governance.",
    roles: ["System-Administratoren", "IT-Manager", "Security-Officers"],
    iconSrc: "/icons/admin-with-cogwheels.svg",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>n8n Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              n8n Schulung & Workshops
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Unsere n8n Schulung befähigt Ihr Team zur
              Workflow-Automatisierung. Praxisorientierte Trainings von
              Grundlagen bis Enterprise-Deployment, inklusive KI DSGVO Schulung.
              Sie können jede Schulung für n8n oder einen KI Workshop buchen – Vor-Ort,
              Online oder Hybrid, individuell auf Ihre Bedürfnisse zugeschnitten.
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
          <IntroBox.Headline>Schulung nach Level – n8n lernen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Von Grundlagen bis Enterprise – jede Schulung für n8n wird individuell
            auf den Wissensstand Ihres Teams abgestimmt
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
                        <Typo.H4 disableMargin>
                          Inhalte:
                        </Typo.H4>
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
                        <Typo.H4 disableMargin>
                          Inhalte:
                        </Typo.H4>
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
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>Formate für Ihre Schulung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wählen Sie das Format, das am besten zu Ihrem Team passt
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {formats.map((format, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon
                src={format.iconSrc}
                alt={format.name}
                color="white"
                background="primary-gradient"
                size="lg"
              />
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
              <SimpleCard.Footer>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Ideal für:</span>{" "}
                  {format.bestFor}
                </p>
              </SimpleCard.Footer>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Target Groups */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Zielgruppen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Jede Schulung ist maßgeschneidert auf die jeweilige Rolle
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {targetGroups.map((target, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8"
            >
              <SimpleCardIcon
                src={target.iconSrc}
                alt={target.group}
                color="white"
                background="primary-gradient"
                size="md"
                className="mb-4"
              />
              <Typo.H3 className="mb-3">{target.group}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-6">
                {target.description}
              </Typo.Paragraph>
              <div className="space-y-2">
                <Typo.H4 disableMargin className="text-sm mb-2">
                  Typische Rollen:
                </Typo.H4>
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
      <ContentWrapper colorScheme="primary">
        <IntroBox dark>
          <IntroBox.Headline>KI Accelerator: Was Sie erreichen</IntroBox.Headline>
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
            <Typo.H2 className="mb-6">Warum eine professionelle Schulung für n8n oder KI Workshop buchen?</Typo.H2>
            <div className="space-y-6">
              <div>
                <Typo.H4 disableMargin className="mb-2">
                  Strukturierter Lernpfad
                </Typo.H4>
                <p className="text-gray-600">
                  Systematischer Aufbau von Grundlagen zu Advanced Topics. Keine
                  Information Overload, klare Lernziele.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin className="mb-2">
                  Experten-Guidance
                </Typo.H4>
                <p className="text-gray-600">
                  Lernen von n8n-zertifizierten Spezialisten mit 500+
                  erfolgreichen Implementierungen. Best Practices aus der
                  Praxis.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin className="mb-2">
                  Hands-On Practice
                </Typo.H4>
                <p className="text-gray-600">
                  Interaktive Übungen und praktische Sessions. Sofortiges
                  Feedback und Korrektur während der Schulung.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin className="mb-2">
                  Team-Alignment
                </Typo.H4>
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
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="text-center">
          <Typo.H2 className="mb-6">Individuelle Angebote für Ihre Schulung</Typo.H2>
          <Typo.Paragraph className="text-gray-600 mb-8">
            Jede Schulung für n8n wird individuell auf Ihre Anforderungen, Ihr
            Team und Ihre Use Cases zugeschnitten. Wir erstellen Ihnen ein
            maßgeschneidertes Angebot basierend auf:
          </Typo.Paragraph>

          <SimpleGrid cols={3} className="gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg">
              <Typo.H4 disableMargin className="mb-2">
                Teilnehmerzahl
              </Typo.H4>
              <p className="text-gray-600 text-sm">
                Gruppenrabatte ab 3+ Teilnehmern
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Typo.H4 disableMargin className="mb-2">
                Schulungsdauer
              </Typo.H4>
              <p className="text-gray-600 text-sm">
                2-5 Tage je nach Level und Tiefe
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Typo.H4 disableMargin className="mb-2">Format</Typo.H4>
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
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
