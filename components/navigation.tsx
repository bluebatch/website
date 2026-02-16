"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactButton from "@/components/buttons/contact-button";
import Image from "next/image";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Über uns - Cluster Menu
  const uberUnsMenu = {
    sections: [
      {
        title: "Über uns",
        href: "/",
        items: [
          {
            icon: "/icons/building.svg",
            title: "Warum BlueBatch?",
            description: "Keine Agentur - IT-Experten",
            href: "/warum-bluebatch",
          },
          {
            icon: "/icons/process.svg",
            title: "Unser Prozess",
            description: "Wie wir arbeiten",
            href: "/unser-prozess",
          },
        ],
      },
      {
        title: "Los geht's",
        href: "/",
        items: [
          {
            icon: "/icons/rocket.svg",
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

  // Services - Cluster Menu
  const servicesMenu = {
    services: [
      {
        title: "n8n Hosting",
        icon: "/icons/building.svg",
        href: "/services/n8n-hosting",
        description: "OnPrem oder Cloud",
      },
      {
        title: "Workflow-Wartung",
        icon: "/icons/process.svg",
        href: "/services/workflow-wartung",
        description: "24/7 Monitoring",
      },
      {
        title: "Custom Nodes",
        icon: "/icons/rocket.svg",
        href: "/services/custom-nodes",
        description: "Maßgeschneiderte Integrationen",
      },
      {
        title: "Schulungen",
        icon: "/icons/chart.svg",
        href: "/services/schulungen",
        description: "Workshops & Training",
      },
      {
        title: "Performance Scaling",
        icon: "/icons/phone.svg",
        href: "/services/performance-scaling",
        description: "High-Performance Setup",
      },
    ],
  };

  // Use-Cases - Cluster Menu
  const useCasesMenu = {
    topics: [
      {
        title: "Großhandel",
        icon: "/icons/factory.svg",
        href: "/use-cases/grosshandel",
        cases: [
          {
            title: "Auftragserfassung",
            href: "/use-cases/grosshandel/auftragserfassung",
          },
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
            href: "/use-cases/grosshandel/3-wege-rechnungspruefung",
          },
          {
            title: "Zertifikatsprüfung Lieferanten",
            href: "/use-cases/grosshandel/zertifikatspruefung-lieferanten",
          },
          {
            title: "Angebots-Bot",
            href: "/use-cases/grosshandel/angebots-bot",
          },
        ],
      },
      {
        title: "Steuerberater",
        icon: "/icons/chart.svg",
        href: "/use-cases/steuerberater",
        cases: [
          {
            title: "Dokumentenverarbeitung",
            href: "/use-cases/steuerberater/dokumentenverarbeitung",
          },
          {
            title: "Mandantenkommunikation",
            href: "/use-cases/steuerberater/mandantenkommunikation",
          },
          {
            title: "DATEV-Jira Orchestration",
            href: "/use-cases/steuerberater/datev-jira-task-orchestration",
          },
        ],
      },
      {
        title: "E-Commerce",
        icon: "/icons/shopping-cart.svg",
        href: "/use-cases/ecommerce",
        cases: [
          {
            title: "Produktdatenmanagement",
            href: "/use-cases/ecommerce/produktdatenmanagement",
          },
          {
            title: "Kundenservice Automation",
            href: "/use-cases/ecommerce/kundenservice",
          },
        ],
      },
    ],
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "px-10 pt-3" : "px-8 pt-4"
      }`}
    >
      <nav
        className={`mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 ${
          isScrolled ? "max-w-5xl" : "max-w-6xl"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled ? "px-5 h-16" : "px-6 h-20"
          }`}
        >
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={"/logo.png"}
                  width={46}
                  height={46}
                  alt="asd"
                ></Image>
                {/* <div className="w-10 h-10 bg-gradient-to-br from-secondary-700 to-secondary-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div> */}
                <span className="text-xl font-bold text-gray-900">
                  blue<span className="text-primary-600">batch</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Über uns Dropdown - Cluster Menu */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/"
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
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
                  <svg
                    className="w-4 h-4"
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
                </Link>

                {activeDropdown === "about" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-1 w-[500px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("about")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4 grid grid-cols-2 gap-6">
                      {uberUnsMenu.sections.map((section, sectionIndex) => (
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
                                <Image
                                  src={item.icon}
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="w-5 h-5 text-primary-500 group-hover:text-primary-600"
                                />
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
                )}
              </motion.div>

              {/* Services Dropdown */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
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
                  Services
                  <svg
                    className="w-4 h-4"
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
                </Link>

                {activeDropdown === "services" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-1 w-[500px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4">
                      <Link
                        href="/services"
                        className="block font-bold text-gray-900 hover:text-primary-500 mb-3 text-sm uppercase tracking-wide transition-colors"
                      >
                        Alle Services
                      </Link>
                      <div className="space-y-2">
                        {servicesMenu.services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <Image
                              src={service.icon}
                              alt=""
                              width={20}
                              height={20}
                              className="w-5 h-5 text-primary-500 group-hover:text-primary-600"
                            />
                            <div>
                              <h5 className="font-semibold text-gray-900 group-hover:text-primary-500 text-sm">
                                {service.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Use-Cases Dropdown - Cluster Menu */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("usecases")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/use-cases"
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
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
                  <svg
                    className="w-4 h-4"
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
                </Link>

                {activeDropdown === "usecases" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-1 w-[700px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("usecases")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-4 grid grid-cols-3 gap-6">
                      {useCasesMenu.topics.map((topic, topicIndex) => (
                        <div key={topicIndex}>
                          <Link
                            href={topic.href}
                            className="flex items-center gap-2 mb-3 hover:text-primary-500 transition-colors group"
                          >
                            <Image
                              src={topic.icon}
                              alt=""
                              width={24}
                              height={24}
                              className="w-6 h-6 text-primary-500 group-hover:text-primary-600"
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
                )}
              </motion.div>

              {/* Blog Link */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <Link
                  href="/blog"
                  className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Search Icon */}
              {/* <button className="p-2.5 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button> */}

              {/* Theme Toggle */}
              {/* <button className="p-2.5 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </button> */}

              {/* Get in Touch Button */}
              <ContactButton size="sm" showIcon={false}></ContactButton>

              {/* Language Selector */}
              {/* <button className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium rounded-lg hover:bg-gray-50">
                <span className="text-xl">🇺🇸</span>
                EN
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {/* Über uns Section */}
              {uberUnsMenu.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-1">
                  <Link
                    href={section.href}
                    className="block px-4 py-2 text-xs font-semibold text-gray-500 uppercase hover:text-primary-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="flex items-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 mt-0.5"
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}

              {/* Services Section */}
              <div className="space-y-1 pt-2">
                <Link
                  href="/services"
                  className="flex items-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 text-primary-500 mt-0.5"
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
                  <div>
                    <p className="font-medium">Services</p>
                    <p className="text-xs text-gray-500">
                      Alle unsere n8n Services
                    </p>
                  </div>
                </Link>
              </div>

              {/* Use-Cases Section - Top level only */}
              <div className="space-y-1 pt-2">
                <Link
                  href="/use-cases"
                  className="block px-4 py-2 text-xs font-semibold text-gray-500 uppercase hover:text-primary-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Use-Cases
                </Link>
                {useCasesMenu.topics.map((topic, topicIndex) => (
                  <Link
                    key={topicIndex}
                    href={topic.href}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image
                      src={topic.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <p className="font-medium">{topic.title}</p>
                  </Link>
                ))}
              </div>

              {/* Blog Section */}
              <div className="space-y-1 pt-2">
                <Link
                  href="/blog"
                  className="flex items-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    className="w-5 h-5 text-primary-500 mt-0.5"
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
                  <div>
                    <p className="font-medium">Blog</p>
                    <p className="text-xs text-gray-500">
                      Workflow-Automatisierung Insights
                    </p>
                  </div>
                </Link>
              </div>

              <div className="mt-4" onClick={() => setMobileMenuOpen(false)}>
                <ContactButton
                  showIcon={false}
                  className="w-full justify-center"
                >
                  Kontakt
                </ContactButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
