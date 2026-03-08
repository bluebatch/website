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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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

  const openForm = () => {
    if (activeModal === "channels") setCameFromChannels(true);
    setActiveModal("form");
  };

  const openMeeting = () => {
    if (activeModal === "channels") setCameFromChannels(true);
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

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-200 ${
          activeModal
            ? "visible opacity-100 bg-black/60 backdrop-blur-sm"
            : "invisible opacity-0"
        }`}
        onClick={close}
      >
        <div
          className={`relative bg-white rounded-2xl shadow-2xl w-full mx-4 transition-all duration-200 ${modalMaxWidth} ${
            activeModal === "channels" ? "" : "max-h-[90vh] overflow-y-auto"
          } ${activeModal ? "scale-100" : "scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
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

          <div className="p-8">
            {activeModal === "channels" && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kontakt aufnehmen
                </h2>
                <ContactChannelCards channels={visibleChannels} />
              </>
            )}

            <div className={activeModal === "form" ? "block min-h-[500px]" : "hidden"}>
              {cameFromChannels && activeModal === "form" && (
                <BackButton onClick={goBack} />
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Anfrage senden
              </h2>
              <FormPortal />
            </div>

            <div className={activeModal === "meeting" ? "block min-h-[500px]" : "hidden"}>
              {cameFromChannels && activeModal === "meeting" && (
                <BackButton onClick={goBack} />
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-4 cursor-pointer"
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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (active) setLoaded(false);
  }, [active]);

  return (
    <div className={`${active ? "block" : "hidden"} relative`}>
      {active && !loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
          <span className="text-sm text-gray-500">
            Kalender wird geladen...
          </span>
        </div>
      )}
      {active && (
        <iframe
          src="https://meetings-eu1.hubspot.com/haensel?embed=true"
          className={`w-full border-0 transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ minHeight: 780 }}
          title="Meeting buchen"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
