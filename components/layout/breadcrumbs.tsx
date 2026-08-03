"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Breadcrumbs ab Ebene 2 (site-structure.md): Orientierung bei 4 URL-Ebenen
// plus BreadcrumbList-Schema für die SERP-Sitelinks. Wird in
// app/(site)/layout.tsx gerendert und liegt in der Hero-Padding-Zone
// unterhalb der fixen Navigation.

const BASE_URL = "https://bluebatch.io";

/** Slug → Anzeige-Label; alles andere wird automatisch formatiert */
const LABELS: Record<string, string> = {
  branchen: "Branchen",
  grosshandel: "Großhandel",
  steuerberater: "Steuerberater",
  "private-ai": "Private AI",
  "ki-assistenten": "KI-Assistenten",
  "ki-agenten": "KI-Agenten",
  chatbots: "Chatbots",
  workflows: "Workflows",
  "claude-cowork": "Claude Cowork",
  "roi-rechner": "ROI-Rechner",
  services: "Services",
  tools: "Tools",
  blog: "Blog",
  standorte: "Standorte",
  "n8n-hosting": "n8n Hosting",
  "workflow-wartung": "Workflow-Wartung",
  "custom-nodes": "Custom Nodes",
  schulungen: "Schulungen",
  "performance-scaling": "Performance Scaling",
  zertifizierung: "Zertifizierung",
  "3-wege-rechnungspruefung": "3-Wege-Rechnungsprüfung",
  "ai-automation-with-easybill": "easybill-Automation",
  "ki-chatbot-grosshandel": "KI-Chatbot",
  "jahresabschluss-ki": "KI-Jahresabschluss",
  "mail-agent": "Mail Agent",
  mandantenkommunikation: "Mandantenkommunikation",
  belegpruefung: "Belegprüfung",
  dokumentenverarbeitung: "Dokumentenverarbeitung",
  "datev-jira-task-orchestration": "DATEV-Jira Orchestration",
  "e-rechnung-verarbeitung": "E-Rechnung",
  "mandanten-onboarding": "Mandanten-Onboarding",
  auftragserfassung: "Auftragserfassung",
  bestellabwicklung: "Bestellabwicklung",
  lagerverwaltung: "Lagerverwaltung",
  "zertifikatspruefung-lieferanten": "Zertifikatsprüfung",
  "angebots-bot": "Angebots-Bot",
  "invoice-bot": "Invoice-Bot",
  document: "Dokumente",
  "service-requests": "Service-Anfragen",
  "social-media-ads": "Social-Media-Ads",
  "kanzlei-organisation": "Kanzlei-Organisation",
  "kanzlei-skills-entwicklung": "Kanzlei-Skills-Entwicklung",
  "was-sind-ki-skills": "Was sind KI-Skills?",
  "pruef-skills": "Prüf-Skills",
  "gutachten-mit-ki": "Gutachten mit KI",
  "begleitschreiben-veranlagung": "Begleitschreiben Veranlagung",
  "diktat-zu-text": "Diktat zu Text",
  "kanzlei-wissensdatenbank": "Kanzlei-Wissensdatenbank",
  "einspruch-agent": "Einspruch-Agent",
  "bwa-analyse-agent": "BWA-Analyse-Agent",
  "beratungsanlaesse-agent": "Beratungsanlässe-Agent",
  "mandanten-chatbot": "Mandanten-Chatbot",
  "fibu-monatsreview": "FiBu-Monatsreview",
  "fibu-monatsreview-implementierung": "FiBu-Monatsreview implementieren",
  "anlage-v-mit-ki": "Anlage V mit KI",
  "buchungsstapel-per-ki": "Buchungsstapel per KI",
  "bankabgleich-automatisieren": "Bankabgleich",
  "bewirtungsbelege-per-ki": "Bewirtungsbelege per KI",
  "beleg-upload-automatisieren": "Beleg-Upload",
  "honorarprozess-automatisieren": "Honorarprozess",
  kassenmeldepflicht: "Kassenmeldepflicht",
  "lohnprozess-automatisieren": "Lohnprozess",
  "kanzlei-digitalisierungs-workshop": "Digitalisierungs-Workshop",
  "kanzleihandbuch-aufbauen": "Kanzleihandbuch",
  "prozessdoku-mit-ki": "Prozessdoku mit KI",
  "mitarbeiter-onboarding-digital": "Mitarbeiter-Onboarding",
  "rollenbasierte-kanzlei": "Rollenbasierte Kanzlei",
  "ticketsystem-kanzlei": "Ticketsystem",
  ebootis: "e.bootis ERP",
  "ki-assessment": "KI-Assessment",
  "n8n-integration": "n8n-Integration",
  "chatbot-integration": "Chatbot-Integration",
  "mcp-server": "MCP-Server",
  "openengine-schnittstellen": "OpenEngine & Schnittstellen",
  "ki-anwendungsfaelle": "KI-Anwendungsfälle",
  "edi-automatisierung": "EDI-Automatisierung",
  anwaelte: "Anwälte",
  "actaport-cloud-connector": "Cloud Connector zu actaport",
  "actaport-cloud-connector-implementierung": "Connector implementieren",
};

const WORD_FIXES: Record<string, string> = {
  ki: "KI",
  ai: "AI",
  n8n: "n8n",
  dsgvo: "DSGVO",
  erp: "ERP",
  datev: "DATEV",
};

function labelFor(slug: string): string {
  if (LABELS[slug]) return LABELS[slug];
  return slug
    .split("-")
    .map((w) => WORD_FIXES[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname() ?? "/";
  const segments = pathname.split("/").filter(Boolean);

  // Erst ab Ebene 2 sinnvoll — Ebene 1 erreicht man direkt aus der Nav
  if (segments.length < 2) return null;

  const crumbs = segments.map((segment, i) => ({
    label: labelFor(segment),
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: BASE_URL,
      },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        item: `${BASE_URL}${c.href}`,
      })),
    ],
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 top-[68px] z-30 lg:top-[104px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <ol className="pointer-events-auto inline-flex flex-wrap items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs text-gray-500 backdrop-blur-sm">
          <li>
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Start
            </Link>
          </li>
          {crumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-1">
              <span aria-hidden className="text-gray-300">
                /
              </span>
              {crumb.isLast ? (
                <span aria-current="page" className="font-medium text-gray-700">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-primary-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
