"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const servicesMenu = [
    { label: "KI-Implementierung", href: "/ki-implementierung" },
    { label: "n8n Hosting", href: "/n8n-hosting-deutschland" },
    { label: "Workflow-Wartung", href: "/workflow-wartung" },
    { label: "Custom Nodes", href: "/n8n-node" },
    { label: "Zertifizierungen", href: "/ki-agentur-zertifizierung" },
    { label: "ROI-Rechner", href: "/roi-rechner" },
  ];

  const productMenu = [
    { label: "Grosshandel", href: "/wholesale-ai" },
    { label: "Steuerberater", href: "/use-cases/steuerberater" },
    { label: "PDL", href: "/use-cases/personaldienstleister" },
  ];

  const toolsMenu = [
    { label: "n8n", href: "/was-ist-n8n" },
    { label: "Navision", href: "/tools/navision" },
    { label: "Easybill", href: "/tools/easybill" },
    { label: "Alle Tools", href: "/tools" },
  ];

  const legalMenu = [
    { label: "Kontakt", href: "/contact" },
    { label: "Das Team", href: "/team" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  const socialLinks = [
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/company/bluebatch-io",
      label: "LinkedIn",
    },
    {
      icon: "instagram",
      href: "https://www.instagram.com/bluebatch.io",
      label: "Instagram",
    },
    { icon: "twitter", href: "/", label: "Twitter" },
    {
      icon: "github",
      href: "https://github.com/orgs/bluebatch",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Left Column - Logo & Info */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/Bluebatch_dark-with-text.svg"
                alt="Bluebatch Logo"
                width={160}
                height={46}
              />
            </Link>

            {/* Description */}
            <p className="text-gray-400 max-w-md">
              Build powerful AI agents that work predictably in production.
              Transform your business with intelligent automation and AI-powered
              workflows.
            </p>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-400">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:info@bluebatch.io"
                className="hover:text-secondary-500 transition-colors"
              >
                info@bluebatch.io
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 text-gray-400">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <a
                href="tel:+491634412519"
                className="hover:text-secondary-500 transition-colors"
              >
                +49 163 44 12519
              </a>
            </div>
          </div>

          {/* Right Column - Menus */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Services Menu */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {servicesMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-secondary-500 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Menu */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Tools
              </h3>
              <ul className="space-y-3">
                {toolsMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-secondary-500 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use-Cases Menu */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Use-Cases
              </h3>
              <ul className="space-y-3">
                {productMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-secondary-500 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ressourcen Menu */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Ressourcen
              </h3>
              <ul className="space-y-3">
                {legalMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:text-secondary-500 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Row - Copyright & Social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright & Cookie Settings */}
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} bluebatch. All rights reserved.
            </p>
            <button
              onClick={() => window.openConsentSettings?.()}
              className="flex cursor-pointer items-center gap-1.5 text-gray-500 text-sm transition-colors hover:text-secondary-500"
              aria-label="Cookie-Einstellungen öffnen"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm-1-9C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.34-.02-.675-.055-1.005a2.5 2.5 0 01-2.445-1.495 2.5 2.5 0 01-3-3A2.5 2.5 0 0115.05 4.55 9.96 9.96 0 0011 2zm5 10a1 1 0 110-2 1 1 0 010 2zm-3 4a1 1 0 110-2 1 1 0 010 2zm-5 1a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
              Cookie-Einstellungen
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-secondary-500 transition-colors"
              >
                {social.icon === "linkedin" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {social.icon === "instagram" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.56.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.074 4.849c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.148.262-2.913.558-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.073 7.052.012 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.059 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.059-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                )}
                {social.icon === "twitter" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {social.icon === "github" && (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
