"use client";

import { useState, useEffect, ReactNode } from "react";

type ModalType = "form" | "meeting" | null;

interface ContactModalContextProps {
  activeModal: ModalType;
  openForm: () => void;
  openMeeting: () => void;
  close: () => void;
}

import { createContext, useContext } from "react";

const ContactModalContext = createContext<ContactModalContextProps>({
  activeModal: null,
  openForm: () => {},
  openMeeting: () => {},
  close: () => {},
});

export function useContactModal() {
  return useContext(ContactModalContext);
}

export default function ContactModal({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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

  return (
    <ContactModalContext.Provider
      value={{
        activeModal,
        openForm: () => setActiveModal("form"),
        openMeeting: () => setActiveModal("meeting"),
        close: () => setActiveModal(null),
      }}
    >
      {children}

      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-200 ${
          activeModal
            ? "visible opacity-100 bg-black/60 backdrop-blur-sm"
            : "invisible opacity-0"
        }`}
        onClick={() => setActiveModal(null)}
      >
        <div
          className={`relative bg-white rounded-2xl shadow-2xl w-full mx-4 transition-transform duration-200 ${
            activeModal === "meeting"
              ? "max-w-5xl"
              : "max-w-2xl max-h-[90vh] overflow-y-auto"
          } ${activeModal ? "scale-100" : "scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveModal(null)}
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

          <div className="p-8 min-h-[500px]">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {activeModal === "form" ? "Anfrage senden" : "Meeting buchen"}
            </h2>

            <div className={activeModal === "form" ? "block" : "hidden"}>
              <FormPortal />
            </div>

            <MeetingIframe active={activeModal === "meeting"} />
          </div>
        </div>
      </div>
    </ContactModalContext.Provider>
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
