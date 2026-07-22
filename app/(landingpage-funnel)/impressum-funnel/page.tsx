import type { Metadata } from "next";
import ImpressumContent from "@/components/legal/impressum-content";

// Funnel-Variante des Impressums: gleicher Inhalt wie /impressum, aber im
// Minimal-Layout der Funnel-Landingpages — Besucher bekommen hier keine
// Navigation und damit keinen Ausstieg aus dem Funnel.
export const metadata: Metadata = {
  title: "Impressum - Bluebatch",
  description: "Impressum und rechtliche Informationen zu Bluebatch.",
  robots: { index: false },
  alternates: {
    canonical: "/impressum",
  },
};

export default function Page() {
  return <ImpressumContent />;
}
