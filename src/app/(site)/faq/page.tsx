import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { faqGroups } from "@/content/faqs";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { FaqExplorer } from "@/components/FaqExplorer";
import { CtaSection } from "@/components/CtaSection";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "FAQs | DeveloperStudio Rotherham",
  description: "Answers on pricing, timelines, contracts, website ownership and how SEO and ads work, from DeveloperStudio.",
  alternates: { canonical: "/faq/" },
};

const count = faqGroups.reduce((n, g) => n + g.items.length, 0);

export default function FaqPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups.flatMap((g) => g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))),
        }}
      />

      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 pt-8 pb-20 sm:px-6 sm:pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:pb-28">
          {/* Intro: pinned beside the longer list of questions */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Breadcrumbs
              className="hero-in"
              items={[
                { name: "Home", href: "/" },
                { name: "FAQ", href: "/faq/" },
              ]}
            />
            <h1 className="hero-in mt-8 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
              Frequently asked{" "}
              <span className="relative isolate whitespace-nowrap text-brand-dark">
                <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                questions
              </span>
            </h1>
            <p className="hero-in mt-6 text-lg leading-relaxed text-zinc-600 [animation-delay:160ms]">
              {count} straight answers on pricing, timelines, contracts, ownership and how SEO and ads work. Search or pick a topic.
            </p>
            <div className="hero-in mt-8 rounded-3xl bg-ink p-6 text-white [animation-delay:240ms]">
              <p className="text-lg font-bold">Can&apos;t find your answer?</p>
              <p className="mt-1.5 text-[15px] text-zinc-400">Talk to a real person. {site.hours}.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`tel:${site.phones.uk.tel}`}
                  className="btn-shine inline-flex h-11 items-center gap-2 rounded-sm bg-brand-dark px-5 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
                >
                  <Phone aria-hidden className="size-4" />
                  Call {site.phones.uk.display}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-11 items-center gap-2 rounded-sm border-2 border-white/80 px-5 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-ink"
                >
                  <WhatsAppIcon className="size-[18px]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="hero-in [animation-delay:200ms]">
            <FaqExplorer groups={faqGroups} />
          </div>
        </div>
      </section>

      <CtaSection title="Ready to get started?" source="faq" />
    </main>
  );
}
