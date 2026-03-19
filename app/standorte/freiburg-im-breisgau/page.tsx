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
      source: "/ai-workflows-freiburg-im-breisgau",
      preHeadline: "AI Workflows Freiburg im Breisgau",
      headline: "AI Workflows & Automatisierung in Freiburg im Breisgau",
      metaTitle: "AI Workflows Freiburg im Breisgau – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Freiburg im Breisgau. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Freiburg im Breisgau",
        "KI Automatisierung Freiburg im Breisgau",
        "Workflow Automatisierung Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-freiburg-im-breisgau",
      preHeadline: "n8n Automation Freiburg im Breisgau",
      headline: "n8n Automation in Freiburg im Breisgau – Workflows automatisieren",
      metaTitle: "n8n Automation Freiburg im Breisgau | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Freiburg im Breisgau. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Freiburg im Breisgau",
        "n8n Freiburg im Breisgau",
        "Workflow Automation Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-freiburg-im-breisgau",
      preHeadline: "n8n Freiburg im Breisgau",
      headline: "n8n Agentur in Freiburg im Breisgau",
      metaTitle: "n8n Freiburg im Breisgau – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Freiburg im Breisgau. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Freiburg im Breisgau und Umgebung.",
      keywords: [
        "n8n Freiburg im Breisgau",
        "n8n Agentur Freiburg im Breisgau",
        "n8n Beratung Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-freiburg-im-breisgau",
      preHeadline: "Automation Freiburg im Breisgau",
      headline: "Automation & Prozessoptimierung in Freiburg im Breisgau",
      metaTitle: "Automation Freiburg im Breisgau – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Freiburg im Breisgau. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Freiburg im Breisgau",
        "Prozessautomatisierung Freiburg im Breisgau",
        "Workflow Automation Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-freiburg-im-breisgau",
      preHeadline: "IT Dienstleister Freiburg im Breisgau",
      headline: "IT Dienstleister in Freiburg im Breisgau – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Freiburg im Breisgau – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Freiburg im Breisgau. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Freiburg im Breisgau.",
      keywords: [
        "IT Dienstleister Freiburg im Breisgau",
        "IT Service Freiburg im Breisgau",
        "Digitalisierung Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-freiburg-im-breisgau",
      preHeadline: "KI Beratung Freiburg im Breisgau",
      headline: "KI Beratung in Freiburg im Breisgau – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Freiburg im Breisgau – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Freiburg im Breisgau. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Freiburg im Breisgau",
        "KI Lösungen Freiburg im Breisgau",
        "Künstliche Intelligenz Freiburg im Breisgau",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Freiburg im Breisgau",
  slug: "freiburg-im-breisgau",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Emmendingen",
    "Lahr/Schwarzwald",
    "Bad Krozingen",
    "Müllheim",
    "Breisach am Rhein",
    "Lörrach",
  ],
  crossReference: [
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Offenburg", slug: "offenburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/freiburg-im-breisgau",
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
