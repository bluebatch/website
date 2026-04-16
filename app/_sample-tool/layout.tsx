import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branchenfit-Check - Passt KI-Automatisierung zu euch? | Bluebatch",
  description:
    "Finde in 30 Sekunden heraus, ob KI-Workflow-Automatisierung zu deinem Unternehmen passt. Interaktiver Branchenfit-Check von Bluebatch.",
  openGraph: {
    title: "Branchenfit-Check - Passt KI-Automatisierung zu euch? | Bluebatch",
    description:
      "Finde in 30 Sekunden heraus, ob KI-Workflow-Automatisierung zu deinem Unternehmen passt. Interaktiver Branchenfit-Check von Bluebatch.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
  },
  alternates: {
    canonical: "/sample-tool",
  },
};

export default function SampleToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
