import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ContactButton from "@/components/buttons/contact-button";
import Button from "@/components/ui/button";
import NavigationMobile from "@/components/layout/navigation-mobile";

const navIcons: Record<string, string[]> = {
  "/icons/phone.svg": [
    "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
  ],
  "/icons/factory.svg": [
    "M2 20a2 2 0 002 2h16a2 2 0 002-2V8l-7 5V8l-7 5V4a2 2 0 00-2-2H4a2 2 0 00-2 2z",
    "M17 18h1",
    "M12 18h1",
    "M7 18h1",
  ],
};

const uberUnsMenu = {
  sections: [
    {
      items: [
        {
          icon: "/icons/award.svg",
          title: "Warum Bluebatch?",
          description: "Keine Agentur - IT-Experten",
          href: "/warum-bluebatch",
        },
        {
          icon: "/icons/workflow.svg",
          title: "Unser Prozess",
          description: "Wie wir arbeiten",
          href: "/unser-prozess",
        },
        {
          icon: "/icons/badge-check.svg",
          title: "Zertifizierungen",
          description: "Nachweisbare Qualität",
          href: "/ki-agentur-zertifizierung",
        },
      ],
    },
    {
      items: [
        {
          icon: "/icons/people-group.svg",
          title: "Das Team",
          description: "lernen Sie uns kennen",
          href: "/team",
        },
        {
          icon: "/icons/phone.svg",
          title: "Kontakt",
          description: "Nehmen Sie Kontakt auf",
          href: "/contact",
        },
      ],
    },
  ],
};

const servicesMenu = {
  sections: [
    {
      title: "Services",
      href: "/ki-implementierung",
      items: [
        {
          icon: "/icons/server-minimalistic.svg",
          title: "n8n Hosting",
          description: "OnPrem oder Cloud",
          href: "/n8n-hosting-deutschland",
        },
        {
          icon: "/icons/monitor-camera.svg",
          title: "Workflow-Wartung",
          description: "24/7 Monitoring",
          href: "/workflow-wartung",
        },
        {
          icon: "/icons/puzzle.svg",
          title: "Custom Nodes",
          description: "Maßgeschneiderte Integrationen",
          href: "/n8n-node",
        },
        {
          icon: "/icons/academic-cap.svg",
          title: "Schulungen",
          description: "Workshops & Training",
          href: "/n8n-schulung",
        },
        {
          icon: "/icons/speedometer.svg",
          title: "Performance Scaling",
          description: "High-Performance Setup",
          href: "/n8n-performance",
        },
        {
          icon: "/icons/calculator.svg",
          title: "ROI-Rechner",
          description: "Lohnt sich Automatisierung?",
          href: "/roi-rechner",
        },
      ],
    },
    {
      title: "Automation",
      href: "/tools",
      items: [
        {
          title: "n8n",
          description: "Workflow-Automatisierung",
          href: "/was-ist-n8n",
        },
        {
          title: "Make",
          description: "Visueller Szenario-Builder",
          href: "/tools/make",
        },
        {
          title: "Zapier",
          description: "No-Code Automatisierung",
          href: "/tools/zapier",
        },
        {
          title: "Power Automate",
          description: "Microsoft-Automatisierung",
          href: "/tools/power-automate",
        },
        {
          title: "Alle Automation-Tools",
          description: "Workato, UiPath, Tray.io u.m.",
          href: "/tools",
        },
      ],
    },
    {
      title: "Großhandel",
      href: "/tools",
      items: [
        {
          title: "Navision",
          description: "Microsoft Dynamics ERP",
          href: "/tools/navision",
        },
        {
          title: "Easybill",
          description: "Rechnungssoftware",
          href: "/tools/easybill",
        },
      ],
    },
  ],
};

const useCasesMenu = {
  topics: [
    {
      title: "Großhandel",
      icon: "/icons/factory.svg",
      href: "/wholesale-ai",
      cases: [
        { title: "Auftragserfassung", href: "/bestellung-erfassen" },
        {
          title: "Bestellabwicklung",
          href: "/use-cases/grosshandel/bestellabwicklung",
        },
        {
          title: "Lagerverwaltung",
          href: "/use-cases/grosshandel/lagerverwaltung",
        },
        {
          title: "Invoice-Bot",
          href: "/use-cases/grosshandel/invoice-bot",
        },
        {
          title: "3-Wege-Rechnungsprüfung",
          href: "/automatische-rechnungspruefung",
        },
        {
          title: "Zertifikatsprüfung Lieferanten",
          href: "/use-cases/grosshandel/zertifikatspruefung-lieferanten",
        },
        {
          title: "Angebots-Bot",
          href: "/use-cases/grosshandel/angebots-bot",
        },
        {
          title: "KI-Automation mit easybill",
          href: "/use-cases/grosshandel/ai-automation-with-easybill",
        },
      ],
    },
    {
      title: "Steuerberater",
      icon: "/icons/calculator.svg",
      href: "/use-cases/steuerberater",
      cases: [
        { title: "Dokumentenverarbeitung", href: "/ki-dokumentenmanagement" },
        {
          title: "Mandantenkommunikation",
          href: "/use-cases/steuerberater/mandantenkommunikation",
        },
        { title: "DATEV-Jira Orchestration", href: "/n8n-datev" },
      ],
    },
    {
      title: "Personaldienstleister",
      icon: "/icons/personal-connections.svg",
      href: "/use-cases/personaldienstleister",
      cases: [
        {
          title: "Bewerber-Screening",
          href: "/use-cases/personaldienstleister/bewerber-screening",
        },
        {
          title: "Bewerberkommunikation",
          href: "/use-cases/personaldienstleister/bewerberkommunikation",
        },
        {
          title: "Digitales Onboarding",
          href: "/use-cases/personaldienstleister/digitales-onboarding",
        },
        {
          title: "Compliance-Überwachung",
          href: "/use-cases/personaldienstleister/compliance-ueberwachung",
        },
        {
          title: "Zeiterfassung & Abrechnung",
          href: "/use-cases/personaldienstleister/zeiterfassung-abrechnung",
        },
      ],
    },
  ],
};

const triggerClass =
  "group flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50";
const triggerIconClass =
  "w-4 h-4 text-gray-700 group-hover:text-primary-500 transition-colors";
const panelBase =
  "hidden absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-1 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden";

function NavIcon({ src, className }: { src: string; className?: string }) {
  const paths = navIcons[src];
  if (!paths) {
    return (
      <span
        className={className}
        role="img"
        aria-hidden
        style={{
          display: "inline-block",
          backgroundColor: "currentColor",
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

interface NavigationProps {
  latestBlogPosts?: { title: string; slug: string; href: string }[];
}

export default function Navigation({ latestBlogPosts = [] }: NavigationProps) {
  return (
    <div className="nav-outer fixed top-0 left-0 right-0 z-50 px-8 pt-4">
      <nav className="nav-shell relative mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 max-w-6xl">
        <div className="nav-inset px-6 h-20">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <div
              className="nav-fade-in flex items-center"
              style={{ animationDelay: "100ms" }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/Bluebatch_white-with-text.svg"
                  width={160}
                  height={46}
                  alt="Bluebatch Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Über uns */}
              <div
                className="nav-fade-in relative group/about"
                style={{ animationDelay: "200ms" }}
              >
                <Link href="/" className={triggerClass}>
                  <svg
                    className={triggerIconClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Über uns
                  <ChevronDown className={triggerIconClass} />
                </Link>

                <div
                  className={`${panelBase} group-hover/about:block group-focus-within/about:block w-[500px]`}
                >
                  <div className="p-4 grid grid-cols-2 gap-6">
                    {uberUnsMenu.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.href}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              {"icon" in item && item.icon && (
                                <NavIcon
                                  src={item.icon}
                                  className="w-5 h-5 text-gray-700 group-hover:text-primary-500 transition-colors shrink-0 mt-0.5"
                                />
                              )}
                              <div>
                                <h5 className="font-semibold text-gray-900 group-hover:text-primary-500 text-sm">
                                  {item.title}
                                </h5>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div
                className="nav-fade-in relative group/services"
                style={{ animationDelay: "250ms" }}
              >
                <Link href="/tools" className={triggerClass}>
                  <svg
                    className={triggerIconClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Tools
                  <ChevronDown className={triggerIconClass} />
                </Link>

                <div
                  className={`${panelBase} group-hover/services:block group-focus-within/services:block w-[750px]`}
                >
                  <div className="p-4 grid grid-cols-3 gap-6">
                    {servicesMenu.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <Link
                          href={section.href}
                          className="block font-bold text-gray-900 hover:text-primary-500 mb-3 text-sm uppercase tracking-wide transition-colors"
                        >
                          {section.title}
                        </Link>
                        <div className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.href}
                              className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              {"icon" in item && item.icon && (
                                <NavIcon
                                  src={item.icon}
                                  className="w-5 h-5 text-gray-700 group-hover:text-primary-500 transition-colors shrink-0 mt-0.5"
                                />
                              )}
                              <div>
                                <h5 className="font-semibold text-gray-900 group-hover:text-primary-500 text-sm">
                                  {item.title}
                                </h5>
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Use-Cases */}
              <div
                className="nav-fade-in relative group/usecases"
                style={{ animationDelay: "300ms" }}
              >
                <Link href="/use-cases" className={triggerClass}>
                  <svg
                    className={triggerIconClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Use-Cases
                  <ChevronDown className={triggerIconClass} />
                </Link>

                <div
                  className={`${panelBase} group-hover/usecases:block group-focus-within/usecases:block w-[800px]`}
                >
                  <div className="p-4 grid grid-cols-3 gap-6">
                    {useCasesMenu.topics.map((topic, topicIndex) => (
                      <div key={topicIndex}>
                        <Link
                          href={topic.href}
                          className="flex items-center gap-2 mb-3 hover:text-primary-500 transition-colors group"
                        >
                          <NavIcon
                            src={topic.icon}
                            className="w-6 h-6 text-gray-700 group-hover:text-primary-500 transition-colors"
                          />
                          <h4 className="font-bold text-gray-900 group-hover:text-primary-500 text-sm uppercase tracking-wide">
                            {topic.title}
                          </h4>
                        </Link>
                        <div className="space-y-2">
                          {topic.cases.map((caseItem, caseIndex) => (
                            <Link
                              key={caseIndex}
                              href={caseItem.href}
                              className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <p className="text-sm font-medium text-gray-900 group-hover:text-primary-500">
                                {caseItem.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blog */}
              <div
                className="nav-fade-in relative group/blog"
                style={{ animationDelay: "350ms" }}
              >
                <Link href="/blog-workflow" className={triggerClass}>
                  <svg
                    className={triggerIconClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Blog
                  {latestBlogPosts.length > 0 && (
                    <ChevronDown className={triggerIconClass} />
                  )}
                </Link>

                {latestBlogPosts.length > 0 && (
                  <div
                    className={`${panelBase} group-hover/blog:block group-focus-within/blog:block w-[400px]`}
                  >
                    <div className="p-3">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-2 mb-2">
                        Neueste Artikel
                      </p>
                      <div className="space-y-1">
                        {latestBlogPosts.map((post) => (
                          <Link
                            key={post.slug}
                            href={post.href}
                            className="block p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <p className="text-sm font-medium text-gray-900 group-hover:text-primary-500 line-clamp-1">
                              {post.title}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                        <Button
                          href="/blog-workflow"
                          className="w-full text-xs py-1.5 px-3"
                        >
                          Alle Artikel ansehen
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <ContactButton size="sm" showIcon={false}></ContactButton>
            </div>

            {/* Mobile Menu — client island */}
            <NavigationMobile
              useCasesTopics={useCasesMenu.topics.map((t) => ({
                title: t.title,
                icon: t.icon,
                href: t.href,
              }))}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
