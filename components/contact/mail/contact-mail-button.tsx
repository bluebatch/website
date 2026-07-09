"use client";

import Image from "next/image";
import { useContactModal } from "../contact-modal";

export default function ContactMailButton() {
  const { openForm } = useContactModal();

  return (
    <button
      onClick={openForm}
      className="group flex flex-col items-center gap-4 p-10 rounded-2xl border-2 border-gray-200 bg-white hover:border-primary-500 hover:shadow-lg transition-all cursor-pointer"
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
        <Image
          src="/images/icons/contact-mail.svg"
          alt=""
          width={32}
          height={32}
        />
      </div>
      <span className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
        Anfrage senden
      </span>
      <span className="text-gray-500 text-center">
        Schreiben Sie uns Ihr Anliegen – wir melden uns innerhalb von 24h.
      </span>
    </button>
  );
}
