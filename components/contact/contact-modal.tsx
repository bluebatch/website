"use client";

import {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from "react";
import Script from "next/script";
import { ContactChannel } from "./contact-channel";
import ContactChannelCards from "./contact-channel-cards";
import { tracking, Ga4Event } from "@/lib/tracking";

type ModalType = "form" | "meeting" | "channels" | null;

interface ContactModalContextProps {
  activeModal: ModalType;
  openForm: () => void;
  openMeeting: () => void;
  openChannels: (channels?: ContactChannel[]) => void;
  close: () => void;
}

const ContactModalContext = createContext<ContactModalContextProps>({
  activeModal: null,
  openForm: () => {},
  openMeeting: () => {},
  openChannels: () => {},
  close: () => {},
});

export function useContactModal() {
  return useContext(ContactModalContext);
}

export default function ContactModal({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [visibleChannels, setVisibleChannels] = useState<ContactChannel[]>([
    ContactChannel.Mail,
    ContactChannel.Meeting,
    ContactChannel.Phone,
  ]);
  const [cameFromChannels, setCameFromChannels] = useState(false);

  useEffect(() => {
    if (activeModal) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (top) {
        window.scrollTo(0, parseInt(top, 10) * -1);
      }
    }
    return () => {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (top) {
        window.scrollTo(0, parseInt(top, 10) * -1);
      }
    };
  }, [activeModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeModal) {
        setActiveModal(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      let originHost = "";
      try {
        originHost = new URL(event.origin).hostname;
      } catch {
        // not a URL origin
      }
      const isHsForms =
        originHost.endsWith(".hsforms.net") ||
        originHost.endsWith(".hsforms.com") ||
        originHost.endsWith(".hubspot.com");

      let data: unknown = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          // leave as string
        }
      }

      const dataStr =
        typeof data === "object" && data !== null ? JSON.stringify(data) : "";
      const looksForm =
        dataStr.toLowerCase().includes("form") ||
        dataStr.toLowerCase().includes("submit");

      if (!isHsForms && !looksForm) return;

      console.log("[hs-form:message]", { origin: event.origin, data });

      // Best-effort detection of a form submit across both legacy and new
      // HubSpot Forms embeds.
      if (typeof data !== "object" || data === null) return;
      const d = data as Record<string, unknown>;
      const evtName =
        (typeof d.eventName === "string" && d.eventName) ||
        (typeof d.type === "string" && d.type) ||
        "";
      const isSubmit =
        evtName === "onFormSubmitted" ||
        evtName === "hs-form-submitted" ||
        evtName === "hsFormSubmitted" ||
        evtName === "FORM_SUBMITTED" ||
        (typeof evtName === "string" &&
          evtName.toLowerCase().includes("submit"));
      if (!isSubmit) return;

      const inner = (d.data ?? d.payload ?? {}) as Record<string, unknown>;
      const values = (inner.submissionValues ??
        inner.values ??
        inner.fields ??
        inner) as Record<string, unknown>;
      const pick = (...keys: string[]): string | undefined => {
        for (const k of keys) {
          const v = values[k];
          if (typeof v === "string" && v) return v;
        }
        return undefined;
      };
      const email = pick("email", "Email", "0-1/email");
      const firstName = pick("firstname", "firstName", "0-1/firstname");
      const lastName = pick("lastname", "lastName", "0-1/lastname");

      console.log("[contact-form-submitted]", {
        email,
        firstName,
        lastName,
        values,
      });
      // Meta-Conversion bewusst entfernt — Lead läuft jetzt über den
      // Onboarding-Wizard (Domain/Mail). Bookings/Submissions landen ohnehin
      // in HubSpot. GA4 behalten wir als Funnel-Conversion.
      tracking.ga4(Ga4Event.ContactFormSubmitted, {
        event_category: "engagement",
        event_label: "Contact Form",
      });
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const openForm = () => {
    const fromChooser = activeModal === "channels";
    if (fromChooser) setCameFromChannels(true);
    tracking.ga4(Ga4Event.CtaChannelSelect, {
      channel: ContactChannel.Mail,
      from_chooser: fromChooser,
      cta_location: window.location.pathname,
    });
    setActiveModal("form");
  };

  const openMeeting = () => {
    const fromChooser = activeModal === "channels";
    if (fromChooser) setCameFromChannels(true);
    tracking.ga4(Ga4Event.CtaChannelSelect, {
      channel: ContactChannel.Meeting,
      from_chooser: fromChooser,
      cta_location: window.location.pathname,
    });
    setActiveModal("meeting");
  };

  const openChannels = (channels?: ContactChannel[]) => {
    setCameFromChannels(false);
    setVisibleChannels(
      channels ?? [
        ContactChannel.Mail,
        ContactChannel.Meeting,
        ContactChannel.Phone,
      ],
    );
    setActiveModal("channels");
  };

  const close = () => {
    setActiveModal(null);
    setCameFromChannels(false);
  };

  const goBack = () => {
    setActiveModal("channels");
    setCameFromChannels(false);
  };

  const modalMaxWidth =
    activeModal === "meeting"
      ? "max-w-5xl"
      : activeModal === "channels"
        ? "max-w-4xl"
        : "max-w-2xl";

  return (
    <ContactModalContext.Provider
      value={{
        activeModal,
        openForm,
        openMeeting,
        openChannels,
        close,
      }}
    >
      {children}

      {/* HubSpot form container — always in DOM so script can populate it */}
      <div className="fixed -left-[9999px] aria-hidden">
        <div
          id="hs-contact-form"
          className="hs-form-frame"
          data-region="eu1"
          data-form-id="95d3395a-021c-4fd1-9768-1cdc4950c2bf"
          data-portal-id="146998643"
        />
      </div>
      <Script
        src="https://js-eu1.hsforms.net/forms/embed/146998643.js"
        strategy="afterInteractive"
      />

      {/* HubSpot Meetings container — always in DOM so the embed script picks it up on initial scan */}
      <div className="fixed -left-[9999px] aria-hidden">
        <div
          id="hs-meeting-frame"
          className="meetings-iframe-container"
          data-src="https://meetings-eu1.hubspot.com/haensel?embed=true"
        />
      </div>
      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="afterInteractive"
      />

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex items-end md:items-center justify-center transition-all duration-200 overscroll-none ${
          activeModal
            ? "visible opacity-100 bg-black/60 backdrop-blur-sm"
            : "invisible opacity-0"
        }`}
        onClick={close}
      >
        <div
          className={`bg-white w-full h-full md:h-auto flex flex-col md:rounded-2xl md:shadow-2xl md:mx-4 md:max-h-[90vh] ${modalMaxWidth} transition-all duration-200 ${activeModal ? "scale-100" : "scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed header with back + close */}
          <div className="shrink-0 bg-white flex items-center justify-between px-5 md:px-8 pt-4 pb-2 md:rounded-t-2xl">
            <div>
              {cameFromChannels &&
                (activeModal === "form" || activeModal === "meeting") && (
                  <BackButton onClick={goBack} />
                )}
            </div>
            <button
              onClick={close}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-gray-600"
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
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-5 md:px-8 pb-5 md:pb-8">
            {activeModal === "channels" && (
              <>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Kontakt aufnehmen
                </h2>
                <ContactChannelCards channels={visibleChannels} />
              </>
            )}

            <div className={activeModal === "form" ? "block min-h-[500px]" : "hidden"}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Anfrage senden
              </h2>
              <FormPortal />
            </div>

            <div className={activeModal === "meeting" ? "block min-h-[500px]" : "hidden"}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Meeting buchen
              </h2>
              <MeetingIframe active={activeModal === "meeting"} />
            </div>
          </div>
        </div>
      </div>
    </ContactModalContext.Provider>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Zurück
    </button>
  );
}

function FormPortal() {
  return (
    <div
      ref={(node) => {
        if (!node) return;
        const form = document.getElementById("hs-contact-form");
        if (form && !node.contains(form)) {
          node.appendChild(form);
          form.style.position = "static";
          form.style.left = "auto";
        }
      }}
    />
  );
}

function MeetingIframe({ active }: { active: boolean }) {
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      let originHost = "";
      try {
        originHost = new URL(event.origin).hostname;
      } catch {
        // non-URL origin (e.g. "null") — keep originHost empty
      }

      let data: unknown = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          // leave as string
        }
      }

      const isHubSpot = originHost.endsWith(".hubspot.com");
      const looksRelevant =
        isHubSpot ||
        (typeof data === "object" &&
          data !== null &&
          JSON.stringify(data).toLowerCase().includes("meeting"));

      if (!looksRelevant) return;

      console.log("[meeting-iframe:message]", {
        origin: event.origin,
        data,
      });

      if (
        typeof data === "object" &&
        data !== null &&
        (data as { meetingBookSucceeded?: boolean }).meetingBookSucceeded
      ) {
        const payload =
          (data as { meetingsPayload?: Record<string, unknown> })
            .meetingsPayload ?? {};
        const bookingResponse =
          (payload as { bookingResponse?: Record<string, unknown> })
            .bookingResponse ?? {};
        const postResponse =
          (bookingResponse as { postResponse?: Record<string, unknown> })
            .postResponse ?? {};
        const guest =
          ((postResponse as { contact?: Record<string, unknown> }).contact ??
            (payload as { formGuestInfo?: Record<string, unknown> })
              .formGuestInfo ??
            {}) as Record<string, unknown>;
        const email =
          typeof guest.email === "string" ? guest.email : undefined;

        console.log("[meeting-booked]", { email, guest, payload });
        window.dispatchEvent(
          new CustomEvent("bluebatch:meeting-booked", {
            detail: { email, guest, payload },
          }),
        );

        // Meta-Conversion bewusst entfernt — Bookings stehen ohnehin in
        // HubSpot. GA4 behalten wir als Funnel-Conversion.
        tracking.ga4(Ga4Event.MeetingBooked, {
          event_category: "engagement",
          event_label: "Book Meeting",
        });
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div
      className={`${active ? "block" : "hidden"} relative`}
      style={{ minHeight: 780 }}
      ref={(node) => {
        if (!node) return;
        const frame = document.getElementById("hs-meeting-frame");
        if (frame && !node.contains(frame)) {
          node.appendChild(frame);
        }
      }}
    />
  );
}
