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

export interface FunnelOffer {
  /** z. B. "5.000 €" */
  price: string;
  /** Was im Preis steckt, ein Satz. */
  label: string;
}

export interface FunnelPageProps {
  preHeadline: string;
  headline: string;
  description: string;
  facts: Fact[];
  image?: { src: string; alt: string };
  /** Statt Bild: eigenes Medium, z. B. ein Portal-Screenshot. */
  media?: React.ReactNode;
  /** Preis-Kasten über dem Start-Button (nur Variante mobile-first). */
  offer?: FunnelOffer;
  startLabel: string;
  /**
   * classic: Bild zuerst (auf dem Handy oben), Text daneben.
   * mobile-first: Text, Preis und Start-Button zuerst, Medium danach; kompaktere
   * Fakten und ein Button über die volle Breite. Für Ads-Traffic vom Handy.
   */
  variant?: "classic" | "mobile-first";
  /** Der Game-Funnel (Client-Komponente) der jeweiligen Landingpage. */
  children: React.ReactNode;
}

// Gemeinsames Gerüst aller Funnel-Landingpages: Hero mit Text und Bild,
// darunter der Game-Funnel in einer grauen Sektion (Anker #start).
export default function FunnelPage({
  variant = "classic",
  ...props
}: FunnelPageProps) {
  if (variant === "mobile-first") return <MobileFirstFunnelPage {...props} />;
  return <ClassicFunnelPage {...props} />;
}

type VariantProps = Omit<FunnelPageProps, "variant">;

function FunnelSection({ children }: { children: React.ReactNode }) {
  return (
    <div id="start" className="scroll-mt-20">
      <ContentWrapper colorScheme="gray-light">
        <Suspense fallback={null}>{children}</Suspense>
      </ContentWrapper>
    </div>
  );
}

function ClassicFunnelPage({
  preHeadline,
  headline,
  description,
  facts,
  image,
  media,
  startLabel,
  children,
}: VariantProps) {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <Hero2Column>
          <Hero2ColumnMediaColumn>
            {media ??
              (image && (
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
              ))}
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

function StartIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
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
  );
}

function MobileFirstFunnelPage({
  preHeadline,
  headline,
  description,
  facts,
  image,
  media,
  offer,
  startLabel,
  children,
}: VariantProps) {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="white">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>{preHeadline}</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>{headline}</Hero2ColumnHeadline>
            <Hero2ColumnDescription>{description}</Hero2ColumnDescription>

            <ul className="mb-8 space-y-3">
              {facts.map((fact, i) => (
                <li key={fact.bold} className="flex items-start gap-3">
                  <span
                    className="check-box mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-green-500 shadow-sm sm:h-7 sm:w-7"
                    style={{ animationDelay: `${0.15 + i * 0.18}s` }}
                  >
                    <svg
                      className="h-4 w-4 text-white"
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
                  <span className="text-base text-gray-800 sm:text-lg">
                    <strong className="font-bold text-gray-900">
                      {fact.bold}
                    </strong>{" "}
                    {fact.rest}
                  </span>
                </li>
              ))}
            </ul>

            {offer && (
              <div className="mb-6 flex items-center gap-4 rounded-2xl border border-primary-100 bg-primary-50 p-4">
                <span className="shrink-0 text-2xl font-bold tabular-nums text-primary-800 sm:text-3xl">
                  {offer.price}
                </span>
                <span className="text-sm leading-snug text-gray-700">
                  {offer.label}
                </span>
              </div>
            )}

            <a
              href="#start"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-700 sm:inline-flex sm:w-auto sm:py-3.5 sm:text-sm"
            >
              <StartIcon className="h-5 w-5" />
              {startLabel}
            </a>
          </Hero2ColumnTextColumn>

          {/* Auf dem Handy folgt nach dem Button direkt der Funnel, das Medium
              erst ab lg (sonst schiebt es die erste Frage einen Bildschirm weiter). */}
          <Hero2ColumnMediaColumn>
            <div className="hidden lg:block">
              {media ??
                (image && (
                  <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl shadow-lg lg:max-w-none">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1080}
                      height={1350}
                      priority
                      className="h-auto w-full"
                      sizes="40vw"
                    />
                  </div>
                ))}
            </div>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <FunnelSection>{children}</FunnelSection>
    </>
  );
}
