import type { Metadata } from "next";
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
  },
};

export default function Page() {
  return <DatenschutzContent />;
}
