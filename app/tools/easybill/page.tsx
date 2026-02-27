import type { Metadata } from "next";
import Link from "next/link";
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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import BoundlessImageCard from "@/components/cards/boundless-image-card";
import { InternalLinkLabel } from "@/components/buttons/internal-link";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";

export const metadata: Metadata = {
  title: "Easybill Rechnungssoftware Automatisierung | Bluebatch",
  description:
    "Automatisieren Sie Ihre Easybill-Prozesse mit n8n: Rechnungserstellung, Zahlungsmanagement und E-Commerce-Integration. DSGVO-konform.",
  openGraph: {
    title: "Easybill Rechnungssoftware Automatisierung | Bluebatch",
    description:
      "Easybill-Prozesse automatisieren – Rechnungen, Zahlungen und E-Commerce-Anbindung via n8n.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Easybill Automatisierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easybill Rechnungssoftware Automatisierung | Bluebatch",
    description:
      "Easybill automatisieren: Rechnungen, Zahlungen, E-Commerce-Integration.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/easybill",
  },
};

const features = [
  {
    icon: "📄",
    title: "ZUGFeRD & XRechnung",
    description:
      "Vollständige Unterstützung der deutschen E-Rechnungsstandards. Rechtskonforme elektronische Rechnungen an Behörden und Unternehmen.",
  },
  {
    icon: "🛒",
    title: "E-Commerce-Integration",
    description:
      "Automatische Rechnungserstellung für Amazon, eBay, Shopify und weitere Marktplätze und Online-Shops.",
  },
  {
    icon: "📊",
    title: "DATEV-Export",
    description:
      "Direkter Export an Ihren Steuerberater im DATEV- oder Lexware-Format. Keine manuelle Datenübergabe mehr.",
  },
  {
    icon: "⏰",
    title: "Automatisches Mahnwesen",
    description:
      "Automatisierte Zahlungsüberwachung und Mahnungserstellung bei überfälligen Rechnungen.",
  },
  {
    icon: "🔌",
    title: "REST-API",
    description:
      "Umfassende REST-API für die Integration mit beliebigen Systemen – ideal für n8n-Automatisierungen.",
  },
  {
    icon: "🔒",
    title: "DSGVO-konform",
    description:
      "Server in Deutschland, moderne Verschlüsselung und Zwei-Faktor-Authentifizierung für maximale Datensicherheit.",
  },
];

const integrations = [
  {
    icon: "🛍️",
    title: "Shopify",
    description:
      "Automatische Rechnungserstellung für alle Shopify-Bestellungen.",
  },
  {
    icon: "📦",
    title: "Amazon",
    description:
      "Rechnungen und Gutschriften für Amazon-Verkäufe automatisch generieren.",
  },
  {
    icon: "📊",
    title: "DATEV",
    description:
      "Automatischer Export aller Buchungsdaten im DATEV-Format an Ihren Steuerberater.",
  },
  {
    icon: "🛒",
    title: "WooCommerce",
    description:
      "Nahtlose Integration mit WooCommerce für automatisierte Rechnungsstellung.",
  },
  {
    icon: "🏪",
    title: "eBay",
    description:
      "Automatische Rechnungserstellung und -zustellung für eBay-Transaktionen.",
  },
  {
    icon: "📒",
    title: "Lexware",
    description:
      "Export im Lexware-Format für die Zusammenarbeit mit Ihrem Steuerberater.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Easybill – Rechnungssoftware automatisieren
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Easybill ist die deutsche Cloud-Rechnungssoftware für KMU und
              Freelancer. Mit ZUGFeRD, XRechnung und DATEV-Integration
              automatisieren wir Ihre kompletten Buchhaltungsprozesse über n8n.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Easybill-Automatisierung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              ZUGFeRD • XRechnung • DATEV • E-Commerce
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/invoice-processing.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>Warum Easybill?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Easybill vereinfacht Ihre Rechnungsstellung und bietet die perfekte
            Grundlage für Automatisierung mit n8n.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {features.map((feature, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon>
                <>{feature.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{feature.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {feature.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>
            So automatisieren wir Ihre Easybill-Prozesse
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der API-Anbindung bis zum laufenden Betrieb – in vier Schritten
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mb-2">API-Anbindung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Sichere Anbindung Ihres Easybill-Accounts über die REST-API an
              n8n. Konfiguration der Authentifizierung und Berechtigungen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">Dokumentenautomatisierung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Automatische Erstellung von Rechnungen, Angeboten und
              Gutschriften basierend auf Bestellungen, Lieferscheinen oder
              Zeiterfassungsdaten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Zahlungsmanagement</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Automatisierte Zahlungsüberwachung, Mahnwesen und
              Zahlungszuordnung. Benachrichtigungen bei offenen Posten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">Monitoring & Reporting</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Kontinuierliches Monitoring aller automatisierten Prozesse,
              automatische DATEV-Exports und Fehlerbenachrichtigungen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>Easybill-Integrationen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Diese Systeme verbinden wir über n8n mit Ihrer Easybill-Instanz
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {integrations.map((integration, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon>
                <>{integration.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{integration.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {integration.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Praxisbeispiel</IntroBox.Headline>
          <IntroBox.Paragraph>
            Sehen Sie, wie KI-Automatisierung mit Easybill in der Praxis
            funktioniert
          </IntroBox.Paragraph>
        </IntroBox>

        <Link
          href="/use-cases/grosshandel/ai-automation-with-easybill"
          className="block group"
        >
          <BoundlessImageCard
            imagePosition="right"
            className="cursor-pointer"
          >
            <BoundlessImageCard.Content>
              <Typo.H3 className="mb-3 group-hover:text-primary-600 transition-colors">
                KI-Automation mit Easybill im Großhandel
              </Typo.H3>
              <Typo.Paragraph className="text-gray-600 mb-6">
                Erfahren Sie, wie wir für einen Großhändler die komplette
                Rechnungsverarbeitung mit Easybill und n8n automatisiert
                haben – inklusive KI-gestützter Dokumentenerkennung.
              </Typo.Paragraph>
              <InternalLinkLabel>Use-Case ansehen</InternalLinkLabel>
            </BoundlessImageCard.Content>

            <BoundlessImageCard.Image
              fadeGradient
              src="/images/invoice-verification.jpg"
              alt="KI-Automation mit Easybill"
            />
          </BoundlessImageCard>
        </Link>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
