import type { Metadata } from "next";
import DatenschutzContent from "@/components/legal/datenschutz-content";

// Funnel-Variante der Datenschutzerklärung: gleicher Inhalt wie /datenschutz,
// aber im Minimal-Layout der Funnel-Landingpages — kein Ausstieg aus dem Funnel.
export const metadata: Metadata = {
  title: "Datenschutzerklärung - Bluebatch",
  description:
    "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten bei Bluebatch.",
  robots: { index: false },
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function Page() {
  return <DatenschutzContent />;
}
