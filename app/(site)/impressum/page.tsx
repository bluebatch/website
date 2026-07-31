import type { Metadata } from "next";
import { ogImages } from "@/lib/og";
import ImpressumContent from "@/components/legal/impressum-content";

export const metadata: Metadata = {
  title: "Impressum - Bluebatch",
  description: "Impressum und rechtliche Informationen zu Bluebatch.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title: "Impressum - Bluebatch",
    description: "Impressum und rechtliche Informationen zu Bluebatch.",
    images: ogImages("Impressum", "Bluebatch"),
  },
};

export default function Page() {
  return <ImpressumContent />;
}
