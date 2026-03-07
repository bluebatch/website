import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-bestellaufnahme",
      preHeadline: "AI Bestellaufnahme",
      headline: "AI-gestützte Bestellaufnahme für den Großhandel",
      metaTitle: "AI Bestellaufnahme – Bestellungen automatisch erfassen | Bluebatch",
      metaDescription:
        "AI-gestützte Bestellaufnahme für den Großhandel. Bestellungen automatisch erfassen, validieren und weiterleiten – vollautomatisch.",
    },
    {
      source: "/automatische-bestellaufnahme",
      preHeadline: "Automatische Bestellaufnahme",
      headline: "Automatische Bestellaufnahme für den Großhandel",
      metaTitle:
        "Automatische Bestellaufnahme – Großhandel | Bluebatch",
      metaDescription:
        "Automatische Bestellaufnahme für Großhändler. Von der Bestellung zur Auslieferung – 80-90% schnellere Bearbeitung.",
    },
  ],
};
