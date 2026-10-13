import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { caseStudies } from "@/content/case-studies";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlatformFilter } from "@/components/PlatformFilter";
import { CountUpOnView } from "@/components/CountUpOnView";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Case Studies: Google Ads & Meta Results | DeveloperStudio",
  description:
    "Real Google Ads and Meta campaigns we ran in 2026, with calls, leads, cost per lead and screenshots straight from the ad accounts.",
  alternates: { canonical: "/case-studies/" },
};

// Calls, form leads and WhatsApp leads across the four campaigns.
const totalEnquiries = 818 + 72 + 184 + 147;

export default function CaseStudiesPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
          <div className="drift-a absolute top-[-15%] right-[-10%] h-[560px] w-[560px] rounded-full bg-brand/15 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-20">
          <Breadcrumbs
            className="hero-in"
            items={[
              { name: "Home", href: "/" },
              { name: "Case studies", href: "/case-studies/" },
            ]}
          />
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h1 className="hero-in text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-ink [animation-delay:80ms] sm:text-6xl">
                Real campaigns,{" "}
                <span className="relative isolate whitespace-nowrap text-brand-dark">
                  <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                  real numbers
                </span>
              </h1>
              <p className="hero-in mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
                Google Ads and Meta campaigns we ran in 2026. Every figure comes straight from the ad account, with the
                screenshots to prove it.
              </p>
            </div>
            <div className="hero-in rounded-3xl bg-ink p-7 text-white [animation-delay:240ms]">
              <p className="text-5xl font-extrabold tracking-tight text-brand-light">
                <CountUpOnView value={totalEnquiries} />
              </p>
              <p className="mt-2 text-[15px] text-zinc-300">calls, leads and WhatsApp enquiries across these four campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable list */}
      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <PlatformFilter
            items={caseStudies.map((c) => ({
              platform: c.platform,
              node: (
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)] hover:ring-2">
                  <div className="p-4 pb-0">
                    <div className="sheen overflow-hidden rounded-xl ring-1 ring-zinc-200">
                      <Image
                        src={c.images[0].src}
                        alt={c.images[0].alt}
                        width={c.images[0].w}
                        height={c.images[0].h}
                        sizes="(min-width: 768px) 560px, 92vw"
                        className="aspect-[16/7] h-auto w-full object-cover object-[60%_40%] transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[12px] font-semibold text-zinc-700">
                        <span className={`size-1.5 rounded-full ${c.platform === "Google Ads" ? "bg-[#fbbc04]" : "bg-[#0866ff]"}`} />
                        {c.platform}
                      </span>
                      <span className="text-[12px] text-zinc-500">{c.period}</span>
                    </div>
                    <p className="mt-5 text-[14px] text-zinc-500">{c.client}</p>
                    <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink">{c.title}</h2>
                    <div className="mt-5 flex items-end gap-3">
                      <span className="text-5xl font-extrabold tracking-tight text-brand-dark">{c.highlights[0].value}</span>
                      <span className="pb-1.5 text-[15px] text-zinc-600">{c.highlights[0].label}</span>
                    </div>
                    <ul className="mt-5 grid gap-2 border-t border-zinc-200 pt-5">
                      {c.highlights.slice(1).map((h) => (
                        <li key={h.label} className="flex items-start gap-2.5 text-[14px] text-zinc-700">
                          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-dark" strokeWidth={3} />
                          <span>
                            <strong className="text-ink">{h.value}</strong> {h.label.toLowerCase()}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/case-studies/${c.slug}/`}
                      className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-bold text-brand-dark after:absolute after:inset-0 after:rounded-3xl"
                    >
                      Read the case study
                      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ),
            }))}
          />
        </div>
      </section>

      <CtaSection title="Want results like these for your business?" source="case-studies-hub" />
    </main>
  );
}
