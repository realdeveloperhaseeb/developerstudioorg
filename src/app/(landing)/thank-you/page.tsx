import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { site } from "@/content/site";
import { WhatsAppIcon } from "@/components/icons";
import { TrackLead } from "@/components/TrackLead";

// Not for search results: this page only makes sense after sending the form.
export const metadata: Metadata = {
  title: "Thank you | DeveloperStudio",
  robots: { index: false, follow: false },
};

const next = [
  { title: "Press send in WhatsApp", body: "WhatsApp opened with your details ready. Pressing send is what gets them to us." },
  { title: "We review your business", body: "We look at your website, your Google visibility and your local competitors." },
  { title: "You get your plan", body: `By email or WhatsApp, with a fixed price. ${site.replyPromise}.` },
];

export default function ThankYouPage() {
  return (
    <main id="main" className="relative overflow-clip bg-white">
      <TrackLead />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-[760px] px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-24 sm:pb-28">
        <span className="success-pop mx-auto flex size-20 items-center justify-center rounded-sm bg-brand-dark text-white shadow-[0_20px_50px_-15px_rgb(4_120_87/0.8)]">
          <Check aria-hidden className="size-10" strokeWidth={3} />
        </span>
        <h1 className="hero-in mt-8 text-4xl font-extrabold tracking-[-0.015em] text-ink [animation-delay:200ms] sm:text-5xl">
          Thanks, you are nearly done
        </h1>
        <p className="hero-in mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-600 [animation-delay:300ms]">
          WhatsApp should have opened with your details. Press send there and we will get started on your free growth plan.
        </p>

        <div className="hero-in mt-8 flex flex-wrap justify-center gap-3 [animation-delay:400ms]">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="btn-shine inline-flex h-12 items-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
          >
            <WhatsAppIcon className="size-[18px]" />
            WhatsApp didn&apos;t open? Message us
          </a>
          <a
            href={`tel:${site.phones.uk.tel}`}
            className="inline-flex h-12 items-center gap-2 rounded-sm border-2 border-ink px-6 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Phone aria-hidden className="size-4" />
            Call {site.phones.uk.display}
          </a>
        </div>

        <ol className="mt-14 grid gap-4 text-left sm:grid-cols-3">
          {next.map((n, i) => (
            <li key={n.title} className="hero-in rounded-2xl bg-white p-6 ring-1 ring-brand" style={{ animationDelay: `${0.5 + i * 0.12}s` }}>
              <span className="flex size-8 items-center justify-center rounded-sm bg-brand-dark text-[14px] font-bold text-white">{i + 1}</span>
              <h2 className="mt-4 text-[17px] font-bold text-ink">{n.title}</h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-600">{n.body}</p>
            </li>
          ))}
        </ol>

        <Link href="/" className="group mt-12 inline-flex items-center gap-2 text-[15px] font-bold text-brand-dark">
          <ArrowLeft aria-hidden className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
