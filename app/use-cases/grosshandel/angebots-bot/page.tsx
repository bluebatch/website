import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Angebots-Bot",
  description:
    "Automatische Angebotserstellung und -versand basierend auf Kundenanfragen.",
};

export const metadata: Metadata = {
  title: "Angebots-Bot – Großhandel",
  description:
    "Wie bluebatch Großhändlern hilft, Angebote automatisch zu erstellen und zu versenden.",
  openGraph: {
    title: "Angebots-Bot – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Angebote automatisch zu erstellen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angebots-Bot – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Angebote automatisch zu erstellen.",
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
        <Typo.H1>Angebots-Bot</Typo.H1>
      </article>
    </ContentWrapper>
  );
}
