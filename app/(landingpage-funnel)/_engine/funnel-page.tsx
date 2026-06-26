import { Suspense } from "react";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
} from "@/components/heroes/hero-2-column";

export interface Fact {
  bold: string;
  rest?: string;
}

export interface FunnelPageProps {
  preHeadline: string;
  headline: string;
  description: string;
  facts: Fact[];
  image: { src: string; alt: string };
  startLabel: string;
  /** Der Game-Funnel (Client-Komponente) der jeweiligen Landingpage. */
  children: React.ReactNode;
}

// Gemeinsames Gerüst aller Funnel-Landingpages: Hero links Text / rechts Bild,
// darunter der Game-Funnel in einer grauen Sektion (Anker #start).
export default function FunnelPage({
  preHeadline,
  headline,
  description,
  facts,
  image,
  startLabel,
  children,
}: FunnelPageProps) {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <Hero2Column>
          <Hero2ColumnMediaColumn>
            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl shadow-lg sm:max-w-xs lg:max-w-none">
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={1350}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1024px) 40vw, 240px"
              />
            </div>
          </Hero2ColumnMediaColumn>

          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>{preHeadline}</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>{headline}</Hero2ColumnHeadline>
            <Hero2ColumnDescription>{description}</Hero2ColumnDescription>

            <ul className="mb-8 space-y-4">
              {facts.map((fact, i) => (
                <li key={fact.bold} className="flex items-start gap-3.5">
                  <span
                    className="check-box mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-500 shadow-sm"
                    style={{ animationDelay: `${0.15 + i * 0.18}s` }}
                  >
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path
                        className="check-mark"
                        style={{ animationDelay: `${0.3 + i * 0.18}s` }}
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-gray-800">
                    <strong className="font-bold text-gray-900">
                      {fact.bold}
                    </strong>{" "}
                    {fact.rest}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#start"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {startLabel}
            </a>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      <div id="start">
        <ContentWrapper colorScheme="gray-light">
          <Suspense fallback={null}>{children}</Suspense>
        </ContentWrapper>
      </div>
    </>
  );
}
