import type { Metadata } from "next";
import { Suspense } from "react";
import ContentWrapper from "@/components/layout/content-wrapper";
import ChatClient from "./chat-client";

export const metadata: Metadata = {
  title: "Bluebatch Assistent — KI für Großhandel & Industrie | Bluebatch",
  description:
    "Stell uns deine Fragen zu KI und Automatisierung im Großhandel. Direkt im Chat, sofort eine Antwort.",
  alternates: { canonical: "/chat" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <ContentWrapper isFirstSection colorScheme="white">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold text-primary-700">Bluebatch Assistent</p>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Frag uns, was KI für euch tun kann.
        </h1>
      </div>
      <Suspense fallback={null}>
        <ChatClient />
      </Suspense>
    </ContentWrapper>
  );
}
