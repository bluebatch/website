import type { Metadata } from "next";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import ContentWrapper from "@/components/layout/content-wrapper";
import Customer from "@/components/sections/customer/customer";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactChannelCards from "@/components/contact/contact-channel-cards";

export const metadata: Metadata = {
  title: "Kontakt | Bluebatch - KI-Automatisierung & Beratung",
  description:
    "Nehmen Sie Kontakt mit Bluebatch auf. Senden Sie uns eine Anfrage oder buchen Sie direkt ein kostenloses Beratungsgespräch zu KI-Workflows und Automatisierung.",
  openGraph: {
    title: "Kontakt - Bluebatch",
    description:
      "Anfrage senden oder Meeting buchen – wir beraten Sie zu KI-gestützter Workflow-Automatisierung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Kontakt</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Powerful AI Workflows mit Bluebatch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Verwandeln Sie Ihr Unternehmen mit intelligenter Automatisierung
              und KI-gestützten Workflows.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/contact-meeting.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <ContactChannelCards />
      </ContentWrapper>

      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
