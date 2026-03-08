"use client";

import Image from "next/image";
import { useContactModal } from "./contact-modal";
import { ContactChannel } from "./contact-channel";

const gridCols: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

const cardClass =
  "group flex flex-col items-center gap-4 p-10 rounded-2xl border-2 border-gray-200 bg-white hover:border-primary-500 hover:shadow-lg transition-all cursor-pointer";
const iconWrapperClass =
  "w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow";
const titleClass =
  "text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors";
const descClass = "text-gray-500 text-center";

interface ContactChannelCardsProps {
  channels?: ContactChannel[];
}

export default function ContactChannelCards({
  channels,
}: ContactChannelCardsProps) {
  const visibleChannels = channels ?? [
    ContactChannel.Mail,
    ContactChannel.Meeting,
    ContactChannel.Phone,
  ];
  const { openForm, openMeeting, close } = useContactModal();

  return (
    <div
      className={`grid grid-cols-1 ${gridCols[visibleChannels.length] || "md:grid-cols-3"} gap-6 md:gap-8`}
    >
      {visibleChannels.includes(ContactChannel.Mail) && (
        <button onClick={openForm} className={cardClass}>
          <div className={iconWrapperClass}>
            <Image
              src="/images/icons/contact-mail.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <span className={titleClass}>Anfrage senden</span>
          <span className={descClass}>
            Schreiben Sie uns Ihr Anliegen – wir melden uns innerhalb von 24h.
          </span>
        </button>
      )}
      {visibleChannels.includes(ContactChannel.Meeting) && (
        <button onClick={openMeeting} className={cardClass}>
          <div className={iconWrapperClass}>
            <Image
              src="/images/icons/contact-calendar.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <span className={titleClass}>Meeting buchen</span>
          <span className={descClass}>
            Buchen Sie direkt einen Termin für ein kostenloses
            Beratungsgespräch.
          </span>
        </button>
      )}
      {visibleChannels.includes(ContactChannel.Phone) && (
        <a
          href="tel:+491634412159"
          onClick={() => close()}
          className={cardClass}
        >
          <div className={iconWrapperClass}>
            <Image
              src="/images/icons/contact-phone.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <span className={titleClass}>Anrufen</span>
          <span className={descClass}>
            Rufen Sie uns direkt an – wir sind persönlich für Sie da.
          </span>
          <span className="text-lg font-semibold text-primary-600">
            +49 163 44 12159
          </span>
        </a>
      )}
    </div>
  );
}
