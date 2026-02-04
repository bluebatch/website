"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const aboutUsMenu = [
    {
      icon: "🏢",
      title: "next8n",
      description: "Learn about our mission and team",
      href: "/",
    },
    {
      icon: "🔄",
      title: "Our Process",
      description: "How we deliver excellence",
      href: "/product/how-we-do",
    },
    {
      icon: "⭐",
      title: "Portfolio",
      description:
        "Showcase of successful automation projects and case studies",
      href: "/use-cases",
    },
  ];

  const servicesMenu = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern web applications built with latest technologies",
      href: "/blogs",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions",
      href: "/blogs",
    },
    {
      icon: "☁️",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment",
      href: "/blogs",
    },
  ];

  const getStartedMenu = [
    {
      icon: "🚀",
      title: "What We Do",
      description: "Discover our products and services",
      href: "/product/what-we-do",
    },
    {
      icon: "⚙️",
      title: "How We Do It",
      description: "Our methodology and process",
      href: "/product/how-we-do",
    },
    {
      icon: "📞",
      title: "Contact Us",
      description: "Get in touch with our team",
      href: "/contact",
    },
  ];

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-8 pt-4">
      <nav className="mx-auto max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50">
        <div className="px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-700 to-secondary-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  next<span className="text-secondary-500">8n</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* About Us Dropdown */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50">
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
                  About Us
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
                </button>

                {activeDropdown === "about" && (
                  <div
                    className="absolute top-full left-0 mt-0 pt-1 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("about")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        About Us
                      </h3>
                    </div>
                    <div className="p-2">
                      {aboutUsMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary-500">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
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
                transition={{ duration: 0.4, delay: 0.3 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50">
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
                </button>

                {activeDropdown === "services" && (
                  <div
                    className="absolute top-full left-0 mt-0 pt-1 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Services
                      </h3>
                    </div>
                    <div className="p-2">
                      {servicesMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary-500">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Get Started Dropdown */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative"
                onMouseEnter={() => setActiveDropdown("started")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-gray-700 hover:text-primary-500 transition-colors font-medium rounded-lg hover:bg-gray-50">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Get Started
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
                </button>

                {activeDropdown === "started" && (
                  <div
                    className="absolute top-full left-0 mt-0 pt-1 w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                    onMouseEnter={() => setActiveDropdown("started")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Get Started
                      </h3>
                    </div>
                    <div className="p-2">
                      {getStartedMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary-500">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-500 mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
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
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-400 to-primary-700 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-900 transition-colors shadow-sm"
              >
                Get in Touch
              </Link>

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
              <div className="space-y-1">
                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                  About Us
                </p>
                {aboutUsMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="space-y-1 pt-2">
                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                  Services
                </p>
                {servicesMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-start gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.icon}</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="block px-4 py-3 bg-gradient-to-r from-secondary-600 to-primary-600 text-white rounded-lg font-medium text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
