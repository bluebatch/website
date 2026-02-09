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

export const metadata: Metadata = {
  title: "Kontakt – BlueBatch | Beratungsgespräch vereinbaren",
  description:
    "Vereinbaren Sie ein kostenloses Beratungsgespräch mit BlueBatch. Erfahren Sie, wie AI-Workflows Ihre Prozesse automatisieren können.",
  openGraph: {
    title: "Kontakt – BlueBatch",
    description:
      "Vereinbaren Sie ein kostenloses Beratungsgespräch. AI-Workflows für Ihr Unternehmen.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/cover-fb.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch Kontakt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – BlueBatch",
    description:
      "Vereinbaren Sie ein kostenloses Beratungsgespräch. AI-Workflows für Ihr Unternehmen.",
    images: ["/images/cover-fb.jpg"],
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
              Powerful AI Workflows mit BlueBatch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Verwandeln Sie Ihr Unternehmen mit intelligenter Automatisierung und
              KI-gestützten Workflows.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/product-school-r1wHNmAPWKA-unsplash.jpg" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/max-oseven/30min"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        {/* <!-- Calendly inline widget end --> */}
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
