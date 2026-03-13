"use client";
import { Children, PropsWithChildren, ReactNode, isValidElement } from "react";
import Typo from "./typo";

// Sub-component for custom headline
function FaqContainerHeadline({ children }: PropsWithChildren) {
  return <>{children}</>;
}

// Individual FAQ item component using <details> and <summary> for a native HTML/CSS accordion
interface FAQItemProps {
  title: ReactNode;
}

function FAQItem({ title, children }: PropsWithChildren<FAQItemProps>) {
  return (
    <details className="group border-b border-gray-200 pb-4">
      <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-semibold">
        {title}
        <div className="transition-transform duration-200 group-open:rotate-180">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </summary>
      <div className="mt-2">{children}</div>
    </details>
  );
}

export interface FaqContainerProps {
  faqs: { question: string; answer: string }[];
}

export function FaqContainer({
  faqs,
  children,
}: PropsWithChildren<FaqContainerProps>) {
  let headline: ReactNode = "Häufig gestellte Fragen";

  Children.forEach(children, (child) => {
    if (isValidElement<PropsWithChildren>(child) && child.type === FaqContainerHeadline) {
      headline = child.props.children;
    }
  });

  return (
    <div className="space-y-4 text-center">
      <Typo.H3>{headline}</Typo.H3>
      <Typo.Paragraph>
        Hier finden Sie die Antworten auf häufig gestellte Fragen.
      </Typo.Paragraph>
      {faqs.map((faq, i) => (
        <FAQItem key={`${faq.question}-${i}`} title={faq.question}>
          <Typo.Paragraph>{faq.answer}</Typo.Paragraph>
        </FAQItem>
      ))}
    </div>
  );
}

FaqContainer.Headline = FaqContainerHeadline;
