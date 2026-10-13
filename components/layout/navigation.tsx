import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ContactButton from "@/components/buttons/contact-button";
import Button from "@/components/ui/button";
import NavigationMobile from "@/components/layout/navigation-mobile";
import NavIcon, { type NavIconName } from "@/components/layout/nav-icon";
import { ClaudeLogo } from "@/components/icons/brand-logos";
import { BookOpen, Building2, Users } from "lucide-react";

const uberUnsMenu = {
  sections: [
    {
      items: [
        {
          icon: "grow" as NavIconName,
          title: "Mit euch wachsen",
          description: "Vom ersten Workflow zur AI-Plattform",
          href: "/mit-euch-wachsen",
        },
      ],
    },
    {
      items: [
        {
          icon: "team" as NavIconName,
          title: "Das Team",
          description: "lernen Sie uns kennen",
          href: "/team",
        },
        {
          icon: "career" as NavIconName,
          title: "Karriere",
          description: "Offene Stellen & Bewerbung",
          href: "/karriere",
        },
        {
          icon: "phone" as NavIconName,
          title: "Kontakt",
          description: "Nehmen Sie Kontakt auf",
          href: "/contact",
        },
      ],
    },
  ],
};

const managedClaudeMenu = {
  sections: [
    {
      title: "So arbeiten wir",
      href: "/managed-claude",
      items: [
        {
          icon: "route" as NavIconName,
          title: "Wie es funktioniert",
          description: "Ablauf & Verantwortung",
          href: "/managed-claude/wie-es-funktioniert",
        },
        {
          icon: "rocket" as NavIconName,
          title: "Onboarding",
          description: "Startklar in einer Woche",
          href: "/managed-claude/onboarding",
        },
        {
          icon: "coaching" as NavIconName,
          title: "Coaching",
          description: "Paket M und Paket L",
          href: "/managed-claude/coaching",
        },
        {
          icon: "euro" as NavIconName,
          title: "Preise",
          description: "Kostenrechner & Pakete",
          href: "/managed-claude/preise",
        },
      ],
    },
    {
      title: "Angebot",
      href: "/managed-claude",
      items: [
        {
          icon: "claude" as NavIconName,
          title: "Claude App",
          description: "Claude fürs ganze Team",
          href: "/managed-claude/claude-app",
        },
        {
          icon: "dashboard" as NavIconName,
          title: "Managed Claude Interface",
          description: "Compliance zentral steuern",
          href: "/managed-claude/zentrale-steuerung",
        },
        {
          icon: "key" as NavIconName,
          title: "Claude API",
          description: "Eigene Apps, Kosten je Use Case",
          href: "/managed-claude/claude-api",
        },
        {
          icon: "bot" as NavIconName,
          title: "Use Cases",
          description: "Wir bauen Anwendungen",
          href: "/managed-claude/use-cases",
        },
      ],
    },
    {
      title: "Integrationen",
      href: "/managed-claude/integrationen",
      items: [
        {
          icon: "datev" as NavIconName,
          title: "DATEV",
          description: "Claude mit DATEV-Daten",
          href: "/managed-claude/integrationen/datev",
        },
        {
          icon: "microsoft" as NavIconName,
          title: "Microsoft 365",
          description: "Outlook, Teams, SharePoint",
          href: "/managed-claude/integrationen/microsoft",
        },
        {
          icon: "brave" as NavIconName,
          title: "Websuche",
          description: "Aktuelle Quellen aus dem Web",
          href: "/managed-claude/integrationen/websearch",
        },
      ],
    },
    {
      title: "Weitere Tools",
      href: "/managed-claude/weitere-tools",
      items: [
        {
          icon: "n8n" as NavIconName,
          title: "n8n",
          description: "Hosting, Wartung, Schulungen",
          href: "/managed-claude/weitere-tools/n8n",
        },
        {
          icon: "make" as NavIconName,
          title: "Make",
          description: "Visueller Szenario-Builder",
          href: "/managed-claude/weitere-tools/make",
        },
        {
          icon: "grid" as NavIconName,
          title: "Alle Tools",
          description: "Zapier, Navision, easybill u.m.",
          href: "/managed-claude/weitere-tools",
        },
      ],
    },
  ],
};

const branchenMenu = {
  topics: [
    {
      title: "Großhandel",
      icon: "factory" as NavIconName,
      href: "/branchen/grosshandel",
      cases: [
        {
          icon: "shield" as NavIconName,
          title: "Private AI",
          href: "/branchen/grosshandel/private-ai",
        },
        {
          icon: "assistant" as NavIconName,
          title: "KI-Assistenten",
          href: "/branchen/grosshandel/ki-assistenten",
        },
        {
          icon: "bot" as NavIconName,
          title: "KI-Agenten",
          href: "/branchen/grosshandel/ki-agenten",
        },
        {
          icon: "chat" as NavIconName,
          title: "Chatbots",
          href: "/branchen/grosshandel/chatbots",
        },
        {
          icon: "workflow" as NavIconName,
          title: "Workflows",
          href: "/branchen/grosshandel/workflows",
        },
        {
          icon: "roi" as NavIconName,
          title: "ROI-Rechner",
          href: "/branchen/grosshandel/roi-rechner",
        },
      ],
    },
    {
      title: "Steuerberater",
      icon: "calculator" as NavIconName,
      href: "/branchen/steuerberater",
      cases: [
        {
          icon: "shield" as NavIconName,
          title: "Private AI",
          href: "/branchen/steuerberater/private-ai",
        },
        {
          icon: "claude" as NavIconName,
          title: "Claude Cowork",
          href: "/branchen/steuerberater/claude-cowork",
        },
        {
          icon: "bot" as NavIconName,
          title: "KI-Agenten",
          href: "/branchen/steuerberater/ki-agenten",
        },
        {
          icon: "workflow" as NavIconName,
          title: "Workflows",
          href: "/branchen/steuerberater/workflows",
        },
        {
          icon: "organisation" as NavIconName,
          title: "Kanzlei-Organisation",
          href: "/branchen/steuerberater/kanzlei-organisation",
        },
      ],
    },
    {
      title: "Anwälte",
      icon: "scale" as NavIconName,
      href: "/branchen/anwaelte",
      cases: [
        {
          icon: "shield" as NavIconName,
          title: "Private AI",
          href: "/branchen/anwaelte/private-ai",
        },
        {
          icon: "claude" as NavIconName,
          title: "Claude Cowork",
          href: "/branchen/anwaelte/claude-cowork",
        },
        {
          icon: "bot" as NavIconName,
          title: "KI-Agenten",
          href: "/branchen/anwaelte/ki-agenten",
        },
        {
          icon: "workflow" as NavIconName,
          title: "Workflows",
          href: "/branchen/anwaelte/workflows",
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

// Erstes Mega-Menü links ausrichten, sonst ragt das breite Panel links aus dem Viewport
const panelLeft =
  "hidden absolute top-full left-0 mt-0 pt-1 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden";

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
  latestBlogPosts?: {
    title: string;
    slug: string;
    href: string;
    image?: string;
    date?: string;
  }[];
}

export default function Navigation({ latestBlogPosts = [] }: NavigationProps) {
  return (
    <div className="nav-outer fixed top-0 left-0 right-0 z-50 px-[6px] pt-[6px] lg:px-8 lg:pt-4">
      <nav className="nav-shell relative mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 max-w-6xl">
        <div className="nav-inset px-4 h-14 lg:px-6 lg:h-20">
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
              {/* Managed Claude */}
              <div
                className="nav-fade-in relative group/claude"
                style={{ animationDelay: "200ms" }}
              >
                <Link href="/managed-claude" className={triggerClass}>
                  <ClaudeLogo className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-45" />
                  Managed Claude
                  <ChevronDown className={triggerIconClass} />
                </Link>

                <div
                  className={`${panelLeft} group-hover/claude:block group-focus-within/claude:block w-[960px]`}
                >
                  <div className="p-4 grid grid-cols-4 gap-6">
                    {managedClaudeMenu.sections.map((section, sectionIndex) => (
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
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              {"icon" in item && item.icon && (
                                <NavIcon name={item.icon} />
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

              {/* Branchen */}
              <div
                className="nav-fade-in relative group/branchen"
                style={{ animationDelay: "250ms" }}
              >
                <Link href="/branchen" className={triggerClass}>
                  <Building2 className={triggerIconClass} />
                  Branchen
                  <ChevronDown className={triggerIconClass} />
                </Link>

                <div
                  className={`${panelBase} group-hover/branchen:block group-focus-within/branchen:block w-[800px]`}
                >
                  <div className="p-4 grid grid-cols-3 gap-6">
                    {branchenMenu.topics.map((topic, topicIndex) => (
                      <div key={topicIndex}>
                        <Link
                          href={topic.href}
                          className="flex items-center gap-2 mb-3 hover:text-primary-500 transition-colors group"
                        >
                          <NavIcon name={topic.icon} />
                          <h4 className="font-bold text-gray-900 group-hover:text-primary-500 text-sm uppercase tracking-wide">
                            {topic.title}
                          </h4>
                        </Link>
                        <div className="space-y-2">
                          {topic.cases.map((caseItem, caseIndex) => (
                            <Link
                              key={caseIndex}
                              href={caseItem.href}
                              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              {"icon" in caseItem && caseItem.icon && (
                                <NavIcon name={caseItem.icon} size="sm" />
                              )}
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
                style={{ animationDelay: "300ms" }}
              >
                <Link href="/blog" className={triggerClass}>
                  <BookOpen className={triggerIconClass} />
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
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            {post.image && (
                              <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
                                <Image
                                  src={post.image}
                                  alt=""
                                  fill
                                  sizes="64px"
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-primary-500 line-clamp-2">
                                {post.title}
                              </p>
                              {post.date && (
                                <p className="mt-0.5 text-xs text-gray-400">
                                  {new Date(post.date).toLocaleDateString(
                                    "de-DE",
                                    {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    },
                                  )}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-2 pt-2 px-2">
                        <Button
                          href="/blog"
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
              {/* Über uns */}
              <div
                className="nav-fade-in relative group/about"
                style={{ animationDelay: "350ms" }}
              >
                <Link href="/" className={triggerClass}>
                  <Users className={triggerIconClass} />
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
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              {"icon" in item && item.icon && (
                                <NavIcon name={item.icon} />
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

            </div>

            {/* Right Side - Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <ContactButton size="sm" showIcon={false}></ContactButton>
            </div>

            {/* Mobile Menu — client island */}
            <NavigationMobile />
          </div>
        </div>
      </nav>
    </div>
  );
}
