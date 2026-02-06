import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";

export const pageConfig: PageConfig = {
  title: "Zertifikatsprüfung Lieferanten",
  description:
    "Lieferantenzertifikate automatisch prüfen, ablaufende Zertifikate erkennen und Erinnerungen senden.",
};

export const metadata: Metadata = {
  title: "Zertifikatsprüfung Lieferanten – Großhandel",
  description:
    "Wie bluebatch Großhändlern hilft, Lieferantenzertifikate automatisch zu prüfen.",
  openGraph: {
    title: "Zertifikatsprüfung Lieferanten – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Lieferantenzertifikate automatisch zu prüfen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zertifikatsprüfung Lieferanten – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Lieferantenzertifikate automatisch zu prüfen.",
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
        <Typo.H1>Zertifikatsprüfung Lieferanten</Typo.H1>
      </article>
    </ContentWrapper>
  );
}
