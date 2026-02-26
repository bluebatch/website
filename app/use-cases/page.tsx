import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import { InternalLinkLabel } from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title: "Use Cases – Bluebatch | Branchenlösungen für AI-Automation",
  description:
    "Branchenlösungen für KI-Automatisierung: Großhandel, Steuerberater und Personaldienstleister. Entdecken Sie erprobte AI-Workflows für Ihre Branche.",
  openGraph: {
    title: "Use Cases – Bluebatch",
    description:
      "Branchenlösungen für AI-Automation: Großhandel, Steuerberater, Personaldienstleister.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Use Cases",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases – Bluebatch",
    description:
      "Branchenlösungen für AI-Automation: Großhandel, Steuerberater, Personaldienstleister.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases",
  },
};

const topics = [
  {
    href: "/use-cases/grosshandel",
    title: "Großhandel",
    description:
      "Bestellabwicklung und Lagerverwaltung automatisieren – für schnellere Prozesse und weniger Fehler.",
  },
  {
    href: "/use-cases/steuerberater",
    title: "Steuerberater",
    description:
      "Dokumentenverarbeitung und Mandantenkommunikation digitalisieren – für mehr Zeit und zufriedene Mandanten.",
  },
  {
    href: "/use-cases/personaldienstleister",
    title: "Personaldienstleister",
    description:
      "Bewerber-Screening, Onboarding und Compliance automatisieren – für schnellere Vermittlungen und null Bußgeldrisiko.",
  },
];

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <div className="text-center mb-16">
        <Typo.H1>Use Cases</Typo.H1>
        <Typo.Paragraph>
          Entdecken Sie, wie Unternehmen mit Bluebatch ihre Prozesse
          automatisieren.
        </Typo.Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="group block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 mb-3">
                {topic.title}
              </h2>
              <p className="text-gray-600 mb-4">{topic.description}</p>
              <InternalLinkLabel>Use Cases ansehen</InternalLinkLabel>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
