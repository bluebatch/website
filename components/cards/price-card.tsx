import { ReactNode } from "react";
import { Check, ReceiptText } from "lucide-react";

// Preis-Karte für den Hero einer Money Page: Kopf mit Label und einem oder
// mehreren Preisen, darunter die Leistungen und ein Hinweis zur Abrechnung.
//
// <PriceCard>
//   <PriceCard.Head>
//     <PriceCard.Label>Schulung</PriceCard.Label>
//     <PriceCard.Price>
//       <PriceCard.Amount>850 €</PriceCard.Amount>
//       <PriceCard.Unit>pro Teilnehmer, zzgl. USt.</PriceCard.Unit>
//     </PriceCard.Price>
//     <PriceCard.Or />
//     <PriceCard.Price size="sm">…</PriceCard.Price>
//   </PriceCard.Head>
//   <PriceCard.Items>
//     <PriceCard.Item>…</PriceCard.Item>
//   </PriceCard.Items>
//   <PriceCard.Note>Bezahlung per Rechnung nach der Bestellung</PriceCard.Note>
// </PriceCard>

interface ChildrenProps {
  children: ReactNode;
  className?: string;
}

function PriceCard({ children, className = "" }: ChildrenProps) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[2.5rem] sm:-inset-6 bg-gradient-to-br from-primary-200/60 via-white to-secondary-200/60 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(0,33,74,0.4)] ring-1 ring-gray-900/5">
        {children}
      </div>
    </div>
  );
}

function PriceCardHead({ children, className = "" }: ChildrenProps) {
  return (
    <div
      className={`space-y-4 bg-gradient-to-br from-primary-700 to-primary-900 px-6 py-6 text-white sm:px-7 ${className}`}
    >
      {children}
    </div>
  );
}

function PriceCardLabel({ children }: ChildrenProps) {
  return (
    <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
      {children}
    </span>
  );
}

function PriceCardPrice({ children, size = "lg" }: ChildrenProps & { size?: "lg" | "sm" }) {
  return (
    <p
      data-size={size}
      className="group/price flex flex-wrap items-baseline gap-x-2 gap-y-1"
    >
      {children}
    </p>
  );
}

function PriceCardAmount({ children }: ChildrenProps) {
  return (
    <span className="font-bold tracking-tight text-5xl group-data-[size=sm]/price:text-3xl">
      {children}
    </span>
  );
}

function PriceCardUnit({ children }: ChildrenProps) {
  return <span className="text-sm text-white/75">{children}</span>;
}

function PriceCardOr() {
  return (
    <div aria-hidden className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white/60">
      <span className="h-px flex-1 bg-white/20" />
      oder
      <span className="h-px flex-1 bg-white/20" />
    </div>
  );
}

function PriceCardItems({ children }: ChildrenProps) {
  return <ul className="space-y-3 px-6 py-6 text-sm text-gray-700 sm:px-7">{children}</ul>;
}

function PriceCardItem({ children }: ChildrenProps) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
      </span>
      <span>{children}</span>
    </li>
  );
}

function PriceCardNote({ children }: ChildrenProps) {
  return (
    <p className="mx-6 mb-6 flex items-start gap-2 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 ring-1 ring-gray-200 sm:mx-7 sm:mb-7">
      <ReceiptText className="mt-px h-5 w-5 shrink-0 text-primary-700" aria-hidden />
      <span>{children}</span>
    </p>
  );
}

PriceCard.Head = PriceCardHead;
PriceCard.Label = PriceCardLabel;
PriceCard.Price = PriceCardPrice;
PriceCard.Amount = PriceCardAmount;
PriceCard.Unit = PriceCardUnit;
PriceCard.Or = PriceCardOr;
PriceCard.Items = PriceCardItems;
PriceCard.Item = PriceCardItem;
PriceCard.Note = PriceCardNote;

export default PriceCard;
