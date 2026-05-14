import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
} from "react";

/**
 * ComplianceNoticeBox
 *
 * Eye-catching notice card for compliance/regulatory deadlines and warnings.
 * Replaces the locally inlined `ComplianceNoticeBox` on the e-rechnung page.
 *
 * Two variants:
 *  - `warning` (default): cta-* (orange) border + shield/warning icon
 *  - `info`: secondary-* (türkis) border + info icon
 *
 * Sub-Components: .Label, .Headline, .Body, .Footnote.
 */

type Variant = "warning" | "info";

interface ComplianceNoticeBoxProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LabelProps {
  children: ReactNode;
  variant?: Variant;
}
function Label({ children, variant = "warning" }: LabelProps) {
  const color =
    variant === "info" ? "text-secondary-700" : "text-cta-700";
  return (
    <div
      className={`text-xs font-bold uppercase tracking-widest ${color}`}
    >
      {children}
    </div>
  );
}

interface HeadlineProps {
  children: ReactNode;
}
function Headline({ children }: HeadlineProps) {
  return (
    <div className="text-2xl font-bold text-gray-900 md:text-3xl">
      {children}
    </div>
  );
}

interface BodyProps {
  children: ReactNode;
}
function Body({ children }: BodyProps) {
  return (
    <div className="mt-5 text-sm leading-relaxed text-gray-700">
      {children}
    </div>
  );
}

interface FootnoteProps {
  children: ReactNode;
}
function Footnote({ children }: FootnoteProps) {
  return (
    <div className="mt-5 border-t border-gray-200 pt-4 text-xs text-gray-500">
      {children}
    </div>
  );
}

// Icons
function WarningIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  );
}

function ComplianceNoticeBox({
  children,
  variant = "warning",
  className = "",
}: ComplianceNoticeBoxProps) {
  const childArr = Children.toArray(children);

  // Inject variant into Label children for color consistency
  const find = (type: unknown) =>
    childArr.find(
      (c): c is ReactElement => isValidElement(c) && c.type === type,
    );

  const label = find(Label);
  const headline = find(Headline);
  const body = find(Body);
  const footnote = find(Footnote);

  const labelWithVariant =
    label && isValidElement(label)
      ? (label.props as LabelProps).variant
        ? label
        : cloneElement(label as ReactElement<LabelProps>, { variant })
      : null;

  const containerTone =
    variant === "info"
      ? "border-secondary-500 bg-gradient-to-br from-secondary-50 via-white to-secondary-50"
      : "border-cta-500 bg-gradient-to-br from-cta-50 via-white to-cta-50";

  const blurTone =
    variant === "info" ? "bg-secondary-200/40" : "bg-cta-200/40";

  const iconBg =
    variant === "info"
      ? "bg-secondary-500 text-primary-900"
      : "bg-cta-500 text-white";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-4 p-8 shadow-xl ${containerTone} ${className}`}
    >
      <div
        className={`absolute -right-4 -top-4 h-32 w-32 rounded-full blur-2xl ${blurTone}`}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg ${iconBg}`}
          >
            {variant === "info" ? <InfoIcon /> : <WarningIcon />}
          </div>
          <div>
            {labelWithVariant}
            {headline}
          </div>
        </div>

        {body}
        {footnote}
      </div>
    </div>
  );
}

ComplianceNoticeBox.Label = Label;
ComplianceNoticeBox.Headline = Headline;
ComplianceNoticeBox.Body = Body;
ComplianceNoticeBox.Footnote = Footnote;

export default ComplianceNoticeBox;
