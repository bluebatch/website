import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import DatenschutzContent from "@/components/legal/datenschutz-content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Bluebatch",
  description:
    "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten bei Bluebatch.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title: "Datenschutzerklärung - Bluebatch",
    description:
      "Datenschutzerklärung und Informationen zum Umgang mit personenbezogenen Daten bei Bluebatch.",
    images: ogImages("Datenschutzerklärung", "Bluebatch"),
  },
};

export default function Page() {
  return <DatenschutzContent />;
}
