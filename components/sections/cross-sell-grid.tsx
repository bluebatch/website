import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
} from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * CrossSellGrid
 *
 * "Auch interessant" 3-card grid used at the bottom of Use-Case-Pages to
 * cross-link related use cases. Mobile: 1 column, Desktop: 3 columns.
 *
 * Sub-Components:
 *  - .Eyebrow: optional small label above the headline
 *  - .Headline: optional H3-style headline
 *  - .Card: clickable card with optional iconSrc; contains .Title + .Description
 *  - .Title / .Description: nested inside Card.
 */

interface CrossSellGridProps {
  children: ReactNode;
  className?: string;
}

interface EyebrowProps {
  children: ReactNode;
}
function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-primary-700">
      {children}
    </p>
  );
}

interface HeadlineProps {
  children: ReactNode;
}
function Headline({ children }: HeadlineProps) {
  return (
    <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
      {children}
    </h2>
  );
}

// Card sub-components

interface CardTitleProps {
  children: ReactNode;
}
function CardTitle({ children }: CardTitleProps) {
  return (
    <h3 className="text-lg font-bold text-gray-900 md:text-xl break-words hyphens-auto">
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
}
function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p className="mt-2 text-sm leading-relaxed text-gray-600">{children}</p>
  );
}

interface CardProps {
  href: string;
  iconSrc?: string;
  children: ReactNode;
}
function Card({ href, iconSrc, children }: CardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md"
    >
      {iconSrc && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
          <Image
            src={iconSrc}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
        </div>
      )}
      <div className="flex-1">{children}</div>
    </Link>
  );
}

Card.Title = CardTitle;
Card.Description = CardDescription;

// Main

function CrossSellGrid({ children, className = "" }: CrossSellGridProps) {
  const childArr = Children.toArray(children);

  const eyebrow = childArr.find(
    (c): c is ReactElement => isValidElement(c) && c.type === Eyebrow,
  );
  const headline = childArr.find(
    (c): c is ReactElement => isValidElement(c) && c.type === Headline,
  );
  const cards = childArr.filter(
    (c): c is ReactElement => isValidElement(c) && c.type === Card,
  );

  const hasHeader = Boolean(eyebrow || headline);

  return (
    <div className={className}>
      {hasHeader && (
        <div className="mb-8 text-center">
          {eyebrow}
          {headline}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards}
      </div>
    </div>
  );
}

CrossSellGrid.Eyebrow = Eyebrow;
CrossSellGrid.Headline = Headline;
CrossSellGrid.Card = Card;
CrossSellGrid.Title = CardTitle;
CrossSellGrid.Description = CardDescription;

export default CrossSellGrid;
