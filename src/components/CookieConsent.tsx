"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { analytics } from "@/content/site";

const KEY = "ds-cookie-consent";
type Choice = "accepted" | "rejected" | null;

const read = (): Choice => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
};

// Cookie banner and consent-gated analytics. Does nothing while analytics.enabled is false.
// UK PECR: analytics and ad tags load only after Accept, and Reject is just as easy.
export function CookieConsent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!analytics.enabled) return;
    const stored = read();
    setChoice(stored);
    setShow(stored === null);
    const reopen = () => setShow(true);
    window.addEventListener("ds:cookie-settings", reopen);
    return () => window.removeEventListener("ds:cookie-settings", reopen);
  }, []);

  if (!analytics.enabled) return null;

  const decide = (c: Exclude<Choice, null>) => {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setChoice(c);
    setShow(false);
  };

  return (
    <>
      {choice === "accepted" && analytics.ga4Id && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analytics.ga4Id}');`}
          </Script>
        </>
      )}
      {choice === "accepted" && analytics.metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${analytics.metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {show && (
        <div
          role="dialog"
          aria-label="Cookie choices"
          className="toast-in fixed inset-x-3 bottom-[84px] z-[60] mx-auto max-w-md rounded-3xl bg-ink p-6 text-white shadow-[0_30px_70px_-20px_rgb(0_0_0/0.6)] ring-1 ring-white/10 [animation-delay:0.6s] md:right-auto md:bottom-6 md:left-6"
        >
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark">
              <Cookie aria-hidden className="size-5" />
            </span>
            <p className="text-[15px] leading-relaxed text-zinc-300">
              We would like to use analytics cookies to see which pages help people. They only load if you accept.{" "}
              <Link href="/cookie-policy/" className="font-semibold text-white underline underline-offset-2">
                Cookie policy
              </Link>
            </p>
          </div>
          {/* Equal prominence for both choices */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="h-11 rounded-full border border-white/25 text-[15px] font-bold transition-colors hover:border-white"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="h-11 rounded-full border border-brand-dark bg-brand-dark text-[15px] font-bold transition-colors hover:bg-brand-deeper"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsLink({ className = "" }: { className?: string }) {
  if (!analytics.enabled) return null;
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("ds:cookie-settings"))}>
      Cookie settings
    </button>
  );
}
