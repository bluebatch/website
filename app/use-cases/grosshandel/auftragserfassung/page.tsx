import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Auftragserfassung",
  description:
    "Bestellungen aus E-Mails, Faxen und Portalen automatisch erfassen und verarbeiten.",
};

export const metadata: Metadata = {
  title: "Auftragserfassung – Großhandel",
  description:
    "Wie bluebatch die Auftragserfassung im Großhandel automatisiert.",
  openGraph: {
    title: "Auftragserfassung – Großhandel",
    description:
      "Wie bluebatch die Auftragserfassung im Großhandel automatisiert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auftragserfassung – Großhandel",
    description:
      "Wie bluebatch die Auftragserfassung im Großhandel automatisiert.",
  },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection>
      <Link
        href="/use-cases/grosshandel"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Großhandel
      </Link>

      <article>
        <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
          Großhandel
        </div>
        <Typo.H1>Auftragserfassung</Typo.H1>
      </article>
    </ContentWrapper>
  );
}
