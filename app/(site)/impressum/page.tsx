import type { Metadata } from "next";
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
  },
};

export default function Page() {
  return <ImpressumContent />;
}
