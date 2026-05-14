import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import Image from "next/image";

/**
 * StepJourneyRow
 *
 * Horizontal row of step cards for onboarding-style journeys (e.g. mandanten
 * onboarding). 5 cards across on desktop, 2 columns on tablet, 1 column on
 * mobile. Each card carries a step-number badge, optional image, duration
 * chip, title and description.
 *
 * Sub-Components: .Step (with `n`, `duration`, `imageSrc` props) containing
 * .Title and .Description.
 */

interface StepJourneyRowProps {
  children: ReactNode;
  className?: string;
}

interface TitleProps {
  children: ReactNode;
}
function Title({ children }: TitleProps) {
  return <h3 className="mt-3 text-lg font-bold text-gray-900">{children}</h3>;
}

interface DescriptionProps {
  children: ReactNode;
}
function Description({ children }: DescriptionProps) {
  return (
    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
      {children}
    </p>
  );
}

interface StepProps {
  n: number;
  duration?: string;
  imageSrc?: string;
  imageAlt?: string;
  children: ReactNode;
}
function StepCard({
  n,
  duration,
  imageSrc,
  imageAlt = "",
  children,
}: StepProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      {imageSrc && (
        <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 200px"
          />
        </div>
      )}
      <div className="mt-4 inline-flex items-center self-start gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-700">
        Schritt {String(n).padStart(2, "0")}
      </div>
      {children}
      {duration && (
        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            />
          </svg>
          {duration}
        </div>
      )}
    </div>
  );
}

function StepJourneyRow({ children, className = "" }: StepJourneyRowProps) {
  const steps = Children.toArray(children).filter(
    (c): c is ReactElement => isValidElement(c) && c.type === StepCard,
  );
  const count = steps.length;

  // Pick a sensible grid for the count. 5 is the canonical case
  // (mandanten-onboarding); fall back to smaller grids for fewer steps.
  const colsClass =
    count === 5
      ? "lg:grid-cols-5"
      : count === 4
        ? "lg:grid-cols-4"
        : count === 3
          ? "lg:grid-cols-3"
          : count === 2
            ? "lg:grid-cols-2"
            : "lg:grid-cols-5";

  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${colsClass} ${className}`}
    >
      {steps.map((s, idx) => cloneElement(s, { key: idx }))}
    </div>
  );
}

StepJourneyRow.Step = StepCard;
StepJourneyRow.Title = Title;
StepJourneyRow.Description = Description;

export default StepJourneyRow;
