"use client";

import { useEffect } from "react";
import Script from "next/script";
import { hasMarketingConsent } from "@/lib/tracking";

// const PIXEL_ID = "1312732710788403";
const PIXEL_ID = "1624299748827172";

declare global {
  interface Window {
    _fbq?: unknown;
    __metaPixelInitialized?: boolean;
  }
}

function initPixel() {
  if (typeof window === "undefined") return;
  if (window.__metaPixelInitialized) return;
  if (typeof window.fbq !== "function") return;
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
  window.__metaPixelInitialized = true;
}

export default function MetaPixel() {
  useEffect(() => {
    function onConsent(e: Event) {
      const detail = (e as CustomEvent<{ marketing?: boolean }>).detail;
      if (detail?.marketing) initPixel();
    }
    window.addEventListener("bluebatch:consent-update", onConsent);
    if (hasMarketingConsent()) initPixel();
    return () => {
      window.removeEventListener("bluebatch:consent-update", onConsent);
    };
  }, []);

  if (!hasMarketingConsent()) return null;

  return (
    <>
      <Script
        id="meta-pixel-loader"
        strategy="afterInteractive"
        onLoad={initPixel}
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
