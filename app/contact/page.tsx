import type { Metadata } from "next";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import ContentWrapper from "@/components/content-wrapper";
import Customer from "@/components/customer/customer";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
import SimpleGrid from "@/components/simple-grid";

export const metadata: Metadata = {
  title: "Kontakt – Bluebatch | Beratungsgespräch vereinbaren",
  description:
    "Vereinbaren Sie ein kostenloses Beratungsgespräch mit Bluebatch. Erfahren Sie, wie AI-Workflows Ihre Prozesse automatisieren können.",
  openGraph: {
    title: "Kontakt – Bluebatch",
    description:
      "Vereinbaren Sie ein kostenloses Beratungsgespräch. AI-Workflows für Ihr Unternehmen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Bluebatch",
    description:
      "Vereinbaren Sie ein kostenloses Beratungsgespräch. AI-Workflows für Ihr Unternehmen.",
    images: ["/images/bluebatch-social-cover.jpg"],
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
        <SimpleGrid cols={2}>
          <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id="95d3395a-021c-4fd1-9768-1cdc4950c2bf"
            data-portal-id="146998643"
          ></div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/max-oseven/30min"
          ></div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
      <script
        src="https://js-eu1.hsforms.net/forms/embed/146998643.js"
        defer
      ></script>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
}
