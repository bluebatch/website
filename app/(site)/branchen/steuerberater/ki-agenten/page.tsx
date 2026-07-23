import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { ProductTileGrid } from "@/components/cards/product-tile";

export const metadata: Metadata = {
  title: "KI-Agenten für Steuerberater | Bluebatch",
  description:
    "KI-Agenten für Steuerkanzleien: Mail Agent, Mandantenkommunikation und KI-Jahresabschluss. Digitale Sachbearbeiter, die vorbereiten - Ihr Team gibt frei.",
  openGraph: {
    title: "KI-Agenten für Steuerberater - Bluebatch",
    description:
      "KI-Agenten für Steuerkanzleien: Mail Agent, Mandantenkommunikation und KI-Jahresabschluss. Digitale Sachbearbeiter, die vorbereiten - Ihr Team gibt frei.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI-Agenten für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KI-Agenten für Steuerberater - Bluebatch",
    description:
      "KI-Agenten für Steuerkanzleien: Mail Agent, Mandantenkommunikation und KI-Jahresabschluss. Digitale Sachbearbeiter, die vorbereiten - Ihr Team gibt frei.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/ki-agenten",
  },
};

const agents = [
  {
    href: "/branchen/steuerberater/ki-agenten/mail-agent",
    title: "Mail Agent",
    badge: "Agent #01",
    role: "Sachbearbeiter Posteingang",
    stat: "-60%",
    description:
      "Liest Mandanten-Mails, erkennt den Mandanten in DATEV und schreibt Antwortentwürfe im Kanzlei-Ton. Ihr Team gibt frei, der E-Mail-Aufwand sinkt um 40-60%.",
    image: "/images/data-flow.jpg",
    features: [
      "Liest und ordnet Mandanten-Mails ein",
      "Erkennt den Mandanten direkt in DATEV",
      "Antwortentwürfe im Kanzlei-Ton",
      "Sortiert nach Frist und Dringlichkeit",
    ],
    linkLabel: "Zum Mail-Agenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/mandantenkommunikation",
    title: "Mandantenkommunikation",
    badge: "Agent #02",
    role: "Sachbearbeiter Mandantenservice",
    stat: "3 Wo.",
    description:
      "Klärt FAQ, Fristen und Belegnachforderungen automatisch und verkürzt den Belegrücklauf von 8 auf 3 Wochen - ohne 3-5 h Routine-Mails pro Tag.",
    image: "/images/mandantenkommunikation/hero-side-visual.png",
    features: [
      "Beantwortet FAQ, Fristen und Status-Anfragen",
      "Fordert fehlende Belege automatisch nach",
      "Soll-Ist-Abgleich gegen DATEV",
      "Eskalation nach 14 und 7 Tagen",
    ],
    linkLabel: "Zum Kommunikationsagenten",
  },
  {
    href: "/branchen/steuerberater/ki-agenten/jahresabschluss-ki",
    title: "KI-Jahresabschluss",
    badge: "Agent #03",
    role: "Assistent Jahresabschluss",
    stat: "-80%",
    description:
      "Mappt SKR auf HGB, erstellt Anhang und Lagebericht als Entwurf und entzerrt den Saison-Peak um 60-80% - statt 40-200 h pro Mandant.",
    image: "/images/jahresabschluss/card-mapping.png",
    features: [
      "SKR-HGB-Mapping und Saldenabstimmung",
      "Anhang nach § 264-289 HGB",
      "Lagebericht als Entwurf",
      "Entzerrt den Saison-Peak um 60-80%",
    ],
    linkLabel: "Zum KI-Jahresabschluss-Agenten",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Typo.H1>KI-Agenten für Steuerberater</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            KI-Agenten sind digitale Sachbearbeiter für Steuerkanzleien: Der Mail
            Agent beantwortet Mandanten-Mails, die Mandantenkommunikation
            klärt Fristen und Belege, der KI-Jahresabschluss entzerrt den
            Saison-Peak um 60-80%. Bluebatch implementiert die Agenten mit
            DATEV-Anbindung - Ihr Team prüft und gibt jede Antwort frei.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>

        <ProductTileGrid items={agents} cols={3} />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
