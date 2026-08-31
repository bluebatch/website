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
  /**
   * Überschrift. Als Prop, weil die Sub-Komponente FaqContainer.Headline über
   * die Server-/Client-Grenze nicht erkannt wird (Server-Pages sehen nur eine
   * Client-Referenz, der Typvergleich unten greift dort nicht).
   */
  headline?: ReactNode;
  /** Einleitungssatz über den Fragen — überschreibbar für Seiten, die duzen. */
  intro?: ReactNode;
}

export function FaqContainer({
  faqs,
  headline: headlineProp,
  intro = "Hier finden Sie die Antworten auf häufig gestellte Fragen.",
  children,
}: PropsWithChildren<FaqContainerProps>) {
  let headline: ReactNode = headlineProp ?? "Häufig gestellte Fragen";

  Children.forEach(children, (child) => {
    if (isValidElement<PropsWithChildren>(child) && child.type === FaqContainerHeadline) {
      headline = child.props.children;
    }
  });

  // FAQPage-Schema (schema.org) für AI Overviews, ChatGPT und Perplexity.
  // Der Inhalt steht ohnehin schon im DOM, das JSON-LD macht ihn nur
  // maschinenlesbar. Pro Seite existiert genau ein FaqContainer, daher
  // entsteht hier auch nur ein FAQPage-Block.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-4 text-center">
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Typo.H3>{headline}</Typo.H3>
      <Typo.Paragraph>{intro}</Typo.Paragraph>
      {faqs.map((faq, i) => (
        <FAQItem key={`${faq.question}-${i}`} title={faq.question}>
          <Typo.Paragraph>{faq.answer}</Typo.Paragraph>
        </FAQItem>
      ))}
    </div>
  );
}

FaqContainer.Headline = FaqContainerHeadline;
