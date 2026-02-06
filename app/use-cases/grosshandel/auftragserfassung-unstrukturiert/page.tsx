import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Auftragserfassung aus unstrukturierten Daten",
  description:
    "Bestellungen aus Freitext-E-Mails, Sprachnachrichten und handschriftlichen Notizen erfassen.",
};

export const metadata: Metadata = {
  title: "Auftragserfassung aus unstrukturierten Daten – Großhandel",
  description:
    "Wie bluebatch Großhändlern hilft, Aufträge aus unstrukturierten Quellen zu erfassen.",
  openGraph: {
    title: "Auftragserfassung aus unstrukturierten Daten – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Aufträge aus unstrukturierten Quellen zu erfassen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auftragserfassung aus unstrukturierten Daten – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Aufträge aus unstrukturierten Quellen zu erfassen.",
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
        <Typo.H1>Auftragserfassung aus unstrukturierten Daten</Typo.H1>
      </article>
    </ContentWrapper>
  );
}
