import type { Metadata } from "next";
import HomeContent from "./home-content";

export const metadata: Metadata = {
  title: "BlueBatch – Enterprise AI-Automation | Workflow Engineering",
  description:
    "Wir beenden die Fehlallokation von Humankapital. BlueBatch automatisiert Ihre manuellen Backoffice-Prozesse mit AI-Workflows auf Enterprise-Niveau – live in nur 5 Tagen.",
  keywords: [
    "AI Automation",
    "Workflow Engineering",
    "Enterprise AI",
    "Backoffice Automatisierung",
    "KI Workflows",
    "n8n",
    "Großhandel",
    "Retail",
    "Digitale Mitarbeiter",
  ],
  authors: [{ name: "BlueBatch" }],
  openGraph: {
    title: "BlueBatch – Enterprise AI-Automation",
    description:
      "Skalieren Sie Ihren Umsatz, nicht Ihren Headcount. AI-Workflows live in nur 5 Tagen.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueBatch – Enterprise AI-Automation",
    description:
      "Skalieren Sie Ihren Umsatz, nicht Ihren Headcount. AI-Workflows live in nur 5 Tagen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomeContent />;
}
