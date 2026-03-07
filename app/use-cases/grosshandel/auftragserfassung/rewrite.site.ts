import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-lastenheft",
      preHeadline: "AI Lastenheft",
      headline: "AI-gestützte Lastenheft-Erstellung für den Großhandel",
      metaTitle: "AI Lastenheft – Anforderungen automatisch erfassen | Bluebatch",
      metaDescription:
        "AI-gestützte Lastenheft-Erstellung für den Großhandel. Bestellungen und Anforderungen aus E-Mails, PDFs und Portalen automatisch erfassen.",
    },
    {
      source: "/ai-lastenheft-erstellen",
      preHeadline: "AI Lastenheft erstellen",
      headline: "Lastenheft automatisch erstellen mit KI",
      metaTitle:
        "AI Lastenheft erstellen – Großhandel | Bluebatch",
      metaDescription:
        "Lastenheft automatisch erstellen mit KI. Anforderungen aus allen Kanälen erfassen, strukturieren und validieren – in Minuten statt Stunden.",
    },
  ],
};
