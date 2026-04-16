"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ContactButton from "@/components/buttons/contact-button";

interface UseCaseTopic {
  title: string;
  icon: string;
  href: string;
}

interface Props {
  useCasesTopics: UseCaseTopic[];
}

export default function NavigationMobile({ useCasesTopics }: Props) {
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
        <div className="px-4 py-4 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Über uns
          </Link>
          <Link
            href="/ki-implementierung"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Services
          </Link>
          <Link
            href="/tools"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Tools
          </Link>
          <div className="pl-8 space-y-1">
            <Link
              href="/tools"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Automation-Tools
            </Link>
            <Link
              href="/tools"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Großhandel-Tools
            </Link>
          </div>
          <Link
            href="/use-cases"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Use-Cases
          </Link>
          <div className="pl-8 space-y-1">
            {useCasesTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                {topic.title}
              </Link>
            ))}
          </div>
          <Link
            href="/blog-workflow"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
          >
            Blog
          </Link>

          <div className="pt-2">
            <ContactButton showIcon={false} className="w-full justify-center">
              Kontakt
            </ContactButton>
          </div>
        </div>
      </div>
    </details>
  );
}
