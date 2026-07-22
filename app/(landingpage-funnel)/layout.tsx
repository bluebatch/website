import Image from "next/image";
import Link from "next/link";
import CookieConsent from "@/components/ui/cookie-consent";

// Minimal-Chrome für Funnel-Landingpages (Sackgassen-Prinzip):
// - Header: nur das Logo, bewusst NICHT klickbar — kein Ausstieg aus dem Funnel.
// - Footer: ausschließlich Impressum und Datenschutz (Pflicht nach § 5 DDG,
//   Voraussetzung für Meta-/Google-Ads-Freigaben). Verlinkt werden die
//   Funnel-Varianten (/impressum-funnel, /datenschutz-funnel), die im selben
//   Minimal-Layout bleiben — sonst wäre die normale Navigation eine Hintertür
//   aus dem Funnel. Sonst keine ausgehenden Links.
// Regeln: .claude/rules/landingpage-funnel.md
export default function FunnelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="nav-outer fixed top-0 left-0 right-0 z-50 px-[6px] pt-[6px] lg:px-8 lg:pt-4">
        <header className="nav-shell relative mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 max-w-6xl">
          <div className="nav-inset flex h-14 items-center px-4 lg:h-20 lg:px-6">
            <Image
              src="/logo/Bluebatch_white-with-text.svg"
              width={160}
              height={46}
              alt="Bluebatch Logo"
            />
          </div>
        </header>
      </div>

      {children}

      <footer className="bg-gray-900 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 text-sm text-gray-400">
          <Link
            href="/impressum-funnel"
            className="hover:text-white transition-colors"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz-funnel"
            className="hover:text-white transition-colors"
          >
            Datenschutz
          </Link>
        </div>
      </footer>

      <CookieConsent legalVariant="funnel" />
    </>
  );
}
