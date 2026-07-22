import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import ContactButton from "@/components/buttons/contact-button";

export const metadata: Metadata = {
  title: "Private AI für Steuerberater | Bluebatch",
  description:
    "Private AI für Steuerkanzleien: Sprachmodelle in geschützter Umgebung nutzen - EU-Hosting, AVV, dedizierter Tenant, konform mit DSGVO und § 203 StGB.",
  openGraph: {
    title: "Private AI für Steuerberater - Bluebatch",
    description:
      "Private AI für Steuerkanzleien: Sprachmodelle in geschützter Umgebung nutzen - EU-Hosting, AVV, dedizierter Tenant, konform mit DSGVO und § 203 StGB.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Private AI für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private AI für Steuerberater - Bluebatch",
    description:
      "Private AI für Steuerkanzleien: Sprachmodelle in geschützter Umgebung nutzen - EU-Hosting, AVV, dedizierter Tenant, konform mit DSGVO und § 203 StGB.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/private-ai",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <div className="text-center max-w-3xl mx-auto">
        <Typo.H1>Private AI</Typo.H1>
        <Typo.Paragraph className="text-gray-600 mt-4 mb-8">
          Mandantendaten gehören nicht in öffentliche KI-Tools. Mit Private AI
          nutzt Ihre Kanzlei moderne Sprachmodelle in einer geschützten
          Umgebung: EU-Hosting, AVV, dedizierter Tenant und kein Training mit
          Ihren Daten - konform mit DSGVO und § 203 StGB.
        </Typo.Paragraph>
        <ContactButton icon="chat">Beratung anfragen</ContactButton>
      </div>
    </ContentWrapper>
  );
}
