"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ContactButton from "@/components/buttons/contact-button";

// Mobile-Navigation nach Hub-first-Prinzip (site-structure.md):
// genau EINE Akkordeon-Ebene, darunter flache Listen mit tappbaren
// Gruppen-Überschriften. Erreichbar sind nur Hubs — einzelne Seiten
// übernehmen die Hub-Seiten selbst.

const uberUns = [
  { label: "Startseite", href: "/" },
  { label: "Mit euch wachsen", href: "/mit-euch-wachsen" },
  { label: "Das Team", href: "/team" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/contact" },
];

const services = [
  { label: "n8n Hosting", href: "/services/n8n-hosting" },
  { label: "Workflow-Wartung", href: "/services/workflow-wartung" },
  { label: "Custom Nodes", href: "/services/custom-nodes" },
  { label: "Schulungen", href: "/services/schulungen" },
  { label: "Performance Scaling", href: "/services/performance-scaling" },
  { label: "Zertifizierung", href: "/services/zertifizierung" },
];

const branchenGroups = [
  {
    label: "Großhandel",
    href: "/branchen/grosshandel",
    hubs: [
      { label: "Private AI", href: "/branchen/grosshandel/private-ai" },
      { label: "KI-Assistenten", href: "/branchen/grosshandel/ki-assistenten" },
      { label: "KI-Agenten", href: "/branchen/grosshandel/ki-agenten" },
      { label: "Chatbots", href: "/branchen/grosshandel/chatbots" },
      { label: "Workflows", href: "/branchen/grosshandel/workflows" },
      { label: "ROI-Rechner", href: "/branchen/grosshandel/roi-rechner" },
    ],
  },
  {
    label: "Steuerberater",
    href: "/branchen/steuerberater",
    hubs: [
      { label: "Private AI", href: "/branchen/steuerberater/private-ai" },
      { label: "Claude Cowork", href: "/branchen/steuerberater/claude-cowork" },
      { label: "KI-Agenten", href: "/branchen/steuerberater/ki-agenten" },
      { label: "Workflows", href: "/branchen/steuerberater/workflows" },
      {
        label: "Kanzlei-Organisation",
        href: "/branchen/steuerberater/kanzlei-organisation",
      },
    ],
  },
];

function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group/acc">
      <summary className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        {title}
        <svg
          className="w-4 h-4 transition-transform group-open/acc:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="pb-2">{children}</div>
    </details>
  );
}

export default function NavigationMobile() {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details ref={ref} className="lg:hidden group/mobile">
      <summary
        aria-label="Menü"
        className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
      >
        <svg
          className="w-6 h-6 group-open/mobile:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className="w-6 h-6 hidden group-open/mobile:block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </summary>

      <div className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <Accordion title="Über uns">
            {uberUns.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
          </Accordion>

          <Accordion title="Services">
            <Link
              href="/services"
              className="block px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Alle Services
            </Link>
            {services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/services/tools"
              className="block px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Tools
            </Link>
          </Accordion>

          <Accordion title="Branchen">
            {branchenGroups.map((group) => (
              <div key={group.href} className="mb-1">
                <Link
                  href={group.href}
                  className="block px-6 py-2 text-sm font-semibold text-gray-800 uppercase tracking-wide hover:bg-gray-50 rounded-lg"
                >
                  {group.label} →
                </Link>
                {group.hubs.map((hub) => (
                  <Link
                    key={hub.href}
                    href={hub.href}
                    className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                  >
                    {hub.label}
                  </Link>
                ))}
              </div>
            ))}
          </Accordion>

          <Link
            href="/blog"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Blog
          </Link>

          <div className="pt-2 sticky bottom-0 bg-white">
            <ContactButton showIcon={false} className="w-full justify-center">
              Kontakt
            </ContactButton>
          </div>
        </div>
      </div>
    </details>
  );
}
