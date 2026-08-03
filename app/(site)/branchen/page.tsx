import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import { InternalLinkLabel } from "@/components/buttons/internal-link";

export const metadata: Metadata = {
  title: "Branchen - Bluebatch | Branchenlösungen für AI-Automation",
  description:
    "Branchenlösungen für KI-Automatisierung: Großhandel, Steuerberater und Personaldienstleister. Entdecken Sie erprobte AI-Workflows für Ihre Branche.",
  openGraph: {
    title: "Branchen - Bluebatch",
    description:
      "Branchenlösungen für AI-Automation: Großhandel, Steuerberater, Personaldienstleister.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Branchen&eyebrow=Branchen",
        width: 1200,
        height: 630,
        alt: "Bluebatch Branchen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branchen - Bluebatch",
    description:
      "Branchenlösungen für AI-Automation: Großhandel, Steuerberater, Personaldienstleister.",
    images: ["/og?title=Branchen&eyebrow=Branchen"],
  },
  alternates: {
    canonical: "/branchen",
  },
};

const topics = [
  {
    href: "/branchen/grosshandel",
    title: "Großhandel",
    description:
      "Bestellabwicklung und Lagerverwaltung automatisieren - für schnellere Prozesse und weniger Fehler.",
  },
  {
    href: "/branchen/steuerberater",
    title: "Steuerberater",
    description:
      "Dokumentenverarbeitung und Mandantenkommunikation digitalisieren - für mehr Zeit und zufriedene Mandanten.",
  },
  {
    href: "/branchen/anwaelte",
    title: "Anwälte",
    description:
      "Kanzleisoftware wie actaport anbinden und KI § 203-konform nutzen - der Cloud Connector ist der erste Baustein.",
  },
];

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <div className="text-center mb-16">
        <Typo.H1>Branchen</Typo.H1>
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
              <InternalLinkLabel>Lösungen ansehen</InternalLinkLabel>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
