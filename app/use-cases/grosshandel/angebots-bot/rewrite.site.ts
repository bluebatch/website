import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-angebotserstellung",
      preHeadline: "AI Angebotserstellung",
      headline: "AI-gestützte Angebotserstellung für den Großhandel",
      metaTitle: "AI Angebotserstellung – Automatisch & Intelligent | Bluebatch",
      metaDescription:
        "AI-gestützte Angebotserstellung für den Großhandel. Automatische Preisberechnung, PDF-Generierung und Versand – in Minuten statt Stunden.",
    },
    {
      source: "/automatische-angebotserstellung",
      preHeadline: "Automatische Angebotserstellung",
      headline: "Automatische Angebotserstellung für den Großhandel",
      metaTitle:
        "Automatische Angebotserstellung – Großhandel | Bluebatch",
      metaDescription:
        "Automatische Angebotserstellung für Großhändler. Von der Kundenanfrage zum fertigen Angebot – vollautomatisch mit ERP-Integration.",
    },
    {
      source: "/automatisierte-angebotserstellung",
      preHeadline: "Automatisierte Angebotserstellung",
      headline: "Automatisierte Angebotserstellung für den Großhandel",
      metaTitle:
        "Automatisierte Angebotserstellung – Großhandel | Bluebatch",
      metaDescription:
        "Automatisierte Angebotserstellung für Großhändler. 70-90% schnellere Angebote, 21x höhere Qualifizierungsrate.",
    },
  ],
};
