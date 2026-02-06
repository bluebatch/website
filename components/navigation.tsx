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
            title: "bluebatch",
            description: "Unsere Mission und Team",
            href: "/",
          },
          {
            icon: "/icons/process.svg",
            title: "Unser Prozess",
            description: "Wie wir arbeiten",
            href: "/product/how-we-do",
          },
        ],
      },
      {
        title: "Los geht's",
        href: "/product",
        items: [
          {
            icon: "/icons/rocket.svg",
            title: "Was wir tun",
            description: "Unsere Produkte und Services",
            href: "/product/what-we-do",
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

  // Use-Cases - Cluster Menu
  const useCasesMenu = {
    topics: [
      {
        title: "Großhandel",
        icon: "/icons/factory.svg",
        href: "/use-cases/grosshandel",
        cases: [
          {
            title: "Angebots-Bot",
            href: "/use-cases/grosshandel/angebots-bot",
          },
          {
            title: "Auftragserfassung",
            href: "/use-cases/grosshandel/auftragserfassung",
          },
          {
            title: "Invoice-Bot",
            href: "/use-cases/grosshandel/invoice-bot",
          },
          {
            title: "Zertifikatsprüfung Lieferanten",
            href: "/use-cases/grosshandel/zertifikatspruefung-lieferanten",
          },
          {
            title: "3-Wege-Rechnungsprüfung",
            href: "/use-cases/grosshandel/3-wege-rechnungspruefung",
          },
          {
            title: "Auftragserfassung unstrukturiert",
            href: "/use-cases/grosshandel/auftragserfassung-unstrukturiert",
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

  // Blog Menu - List of blog posts with categories
  const blogMenu = [
    {
      title: "Blog 1",
      description: "Einführung in AI Agenten",
      href: "/blogs/blog-1",
      category: "AI & Technologie",
      categorySlug: "ai-technologie",
      addToSubmenu: true,
    },
    {
      title: "Blog 2",
      description: "Best Practices für Automation",
      href: "/blogs/blog-2",
      category: "AI & Technologie",
      categorySlug: "ai-technologie",
      addToSubmenu: true,
    },
    {
      title: "Blog 3",
      description: "Erfolgsgeschichten unserer Kunden",
      href: "/blogs/blog-3",
      category: "Success Stories",
      categorySlug: "success-stories",
      addToSubmenu: true,
    },
    {
      title: "Blog 4",
      description: "Prozessoptimierung im Unternehmen",
      href: "/blogs/blog-4",
      category: "Business",
      categorySlug: "business",
      addToSubmenu: true,
    },
    {
      title: "Blog 5",
      description: "Zukunft der Arbeit",
      href: "/blogs/blog-5",
      category: "Business",
      categorySlug: "business",
      addToSubmenu: false,
    },
  ];

  // Group blog posts by category for submenu
  const blogsByCategory = blogMenu
    .filter((blog) => blog.addToSubmenu)
    .reduce(
      (acc, blog) => {
        if (!acc[blog.category]) {
          acc[blog.category] = {
            categoryName: blog.category,
            categorySlug: blog.categorySlug,
            posts: [],
          };
        }
        acc[blog.category].posts.push(blog);
        return acc;
      },
      {} as Record<
        string,
        { categoryName: string; categorySlug: string; posts: typeof blogMenu }
      >,
    );

  const blogCategories = Object.values(blogsByCategory);

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
                  blue<span className="text-secondary-500">batch</span>
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

              {/* Blog Dropdown */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("blog")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href="/blogs"
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Blog
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

                {activeDropdown === "blog" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-1 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("blog")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {blogCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          {categoryIndex > 0 && (
                            <div className="border-t border-gray-200 my-2"></div>
                          )}
                          <Link
                            href={`/blogs?cat=${category.categorySlug}`}
                            className="block px-3 py-2 font-bold text-gray-900 hover:text-primary-500 text-sm uppercase tracking-wide transition-colors"
                          >
                            {category.categoryName}
                          </Link>
                          <div className="space-y-1">
                            {category.posts.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <h4 className="font-semibold text-gray-900 group-hover:text-primary-500">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-0.5">
                                  {item.description}
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

              {/* Blog - Just a link */}
              <div className="pt-2">
                <Link
                  href="/blogs"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  <p className="font-medium">Blog</p>
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
