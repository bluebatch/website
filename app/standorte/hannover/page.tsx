import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnPreHeadline,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";

import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-hannover",
      preHeadline: "AI Workflows Hannover",
      headline: "AI Workflows & Automatisierung in Hannover",
      metaTitle: "AI Workflows Hannover - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hannover. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hannover",
        "KI Automatisierung Hannover",
        "Workflow Automatisierung Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hannover",
      preHeadline: "n8n Automation Hannover",
      headline: "n8n Automation in Hannover - Workflows automatisieren",
      metaTitle: "n8n Automation Hannover | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hannover. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hannover",
        "n8n Hannover",
        "Workflow Automation Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hannover",
      preHeadline: "n8n Hannover",
      headline: "n8n Agentur in Hannover",
      metaTitle: "n8n Hannover - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hannover. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hannover und Umgebung.",
      keywords: [
        "n8n Hannover",
        "n8n Agentur Hannover",
        "n8n Beratung Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hannover",
      preHeadline: "Automation Hannover",
      headline: "Automation & Prozessoptimierung in Hannover",
      metaTitle: "Automation Hannover - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hannover. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hannover",
        "Prozessautomatisierung Hannover",
        "Workflow Automation Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hannover",
      preHeadline: "IT Dienstleister Hannover",
      headline: "IT Dienstleister in Hannover - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hannover - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hannover. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hannover.",
      keywords: [
        "IT Dienstleister Hannover",
        "IT Service Hannover",
        "Digitalisierung Hannover",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hannover",
      preHeadline: "KI Beratung Hannover",
      headline: "KI Beratung in Hannover - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hannover - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hannover. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hannover",
        "KI Lösungen Hannover",
        "Künstliche Intelligenz Hannover",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hannover",
  slug: "hannover",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Garbsen",
    "Langenhagen",
    "Laatzen",
    "Lehrte",
    "Burgdorf",
    "Neustadt am Rübenberge",
    "Wunstorf",
    "Seelze",
    "Celle",
    "Hameln",
  ],
  crossReference: [
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Hildesheim", slug: "hildesheim" },
    { name: "Göttingen", slug: "goettingen" },
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Bremen", slug: "bremen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/hannover",
  },
};

export default function Page() {
  if (!metaCustom.publish) notFound();
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Standort {metaCustom.name}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Workflow-Automatisierung in {metaCustom.name}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Ihr Partner für intelligente Automatisierung und KI-gestützte
              Workflows in {metaCustom.name} und {metaCustom.bundesland}.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Typo.H2>Unsere Services in {metaCustom.name}</Typo.H2>
            <Typo.Paragraph>
              Als Experten für Workflow-Automatisierung unterstützen wir
              Unternehmen in {metaCustom.name} und Umgebung bei der
              Digitalisierung und Optimierung ihrer Geschäftsprozesse.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H2>Auch in Ihrer Nähe</Typo.H2>
            <Typo.Paragraph>
              Wir betreuen Kunden in der gesamten Region — auch in den
              umliegenden Städten.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
