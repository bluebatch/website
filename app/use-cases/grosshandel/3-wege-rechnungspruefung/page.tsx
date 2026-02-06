import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "3-Wege-Rechnungsprüfung",
  description:
    "Automatischer Abgleich von Bestellung, Wareneingang und Rechnung zur Freigabe.",
};

export const metadata: Metadata = {
  title: "3-Wege-Rechnungsprüfung – Großhandel",
  description:
    "Wie bluebatch Großhändlern hilft, Rechnungen automatisch mit Bestellungen und Wareneingängen abzugleichen.",
  openGraph: {
    title: "3-Wege-Rechnungsprüfung – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Rechnungen automatisch abzugleichen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "3-Wege-Rechnungsprüfung – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Rechnungen automatisch abzugleichen.",
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
        <Typo.H1>3-Wege-Rechnungsprüfung</Typo.H1>
        <Typo.Paragraph>
          Bestellung vs. Wareneingang vs. Rechnung
        </Typo.Paragraph>
      </article>
    </ContentWrapper>
  );
}
