import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { moreWork, projects } from "@/content/projects";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { CountUpOnView } from "@/components/CountUpOnView";
import { ScrollMockup } from "@/components/ScrollMockup";
import { Gallery } from "@/components/Gallery";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Our Work: Websites & Campaigns | DeveloperStudio",
  description: "See websites and campaigns we built for UK businesses, with what we did for each one and links to the live sites.",
  alternates: { canonical: "/work/" },
};

// UK sites first for a UK audience.
const live = [...projects].sort((a, b) => Number(b.uk) - Number(a.uk));
const enquiries = 818 + 72 + 184 + 147;

export default function WorkPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "DeveloperStudio work",
          url: `${site.url}/work/`,
          hasPart: live.map((p) => ({ "@type": "WebSite", name: p.client, url: p.url, creator: { "@type": "Organization", name: site.name } })),
        }}
      />

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
              { name: "Work", href: "/work/" },
            ]}
          />
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="hero-in text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-ink [animation-delay:80ms] sm:text-6xl">
                Websites and campaigns{" "}
                <span className="relative isolate whitespace-nowrap text-brand-dark">
                  <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                  we built
                </span>
              </h1>
              <p className="hero-in mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
                Live sites for real businesses in the UK and beyond. Scroll down and each site scrolls inside its window, so you
                can see the whole page.
              </p>
            </div>
            <dl className="hero-in grid grid-cols-3 gap-px overflow-hidden rounded-3xl bg-white/10 [animation-delay:240ms]">
              {[
                { v: <>{projects.length + moreWork.length}</>, l: "websites" },
                { v: <>{caseStudies.length}</>, l: "ad campaigns" },
                { v: <CountUpOnView value={enquiries} />, l: "enquiries" },
              ].map((s, i) => (
                <div key={s.l} className={`p-5 text-white ${i === 0 ? "bg-brand-dark" : "bg-ink"}`}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight">{s.v}</dd>
                  <dd className={`mt-1 text-[13px] ${i === 0 ? "text-white/80" : "text-zinc-400"}`}>{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Live sites, alternating rows with scroll-linked mockups */}
      <section className="relative overflow-clip bg-black py-20 text-white sm:py-28">
        <div aria-hidden className="drift-b pointer-events-none absolute top-[20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
              <span className="h-px w-6 bg-brand-light" />
              Live websites
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-5xl">Built, launched and working</h2>
          </InView>

          <div className="mt-16 grid gap-24 lg:gap-32">
            {live.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <InView key={p.slug} threshold={0.2}>
                  <article className={`grid items-center gap-10 lg:gap-16 ${flip ? "lg:grid-cols-[1fr_1.25fr]" : "lg:grid-cols-[1.25fr_1fr]"}`}>
                    {/* Mockup */}
                    <div className={`reveal-up group relative pr-10 pb-10 sm:pr-16 sm:pb-12 ${flip ? "lg:order-2" : ""}`}>
                      <div aria-hidden className="absolute inset-[12%] rounded-full opacity-40 blur-[90px]" style={{ background: p.accent }} />
                      <div className="relative overflow-hidden rounded-xl bg-zinc-900 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.9)] ring-1 ring-white/10">
                        <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
                          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="size-2.5 rounded-full bg-[#febc2e]" />
                          <span className="size-2.5 rounded-full bg-[#28c840]" />
                          <span className="ml-3 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-zinc-400">
                            {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </span>
                        </div>
                        <ScrollMockup
                          src={p.desktop}
                          alt={`Website design for ${p.client} built by DeveloperStudio, desktop view`}
                          sizes="(min-width: 1024px) 640px, 90vw"
                        />
                      </div>
                      <div className="absolute right-0 bottom-0 w-[24%] min-w-[90px] rounded-[1.6rem] border-[5px] border-zinc-800 bg-zinc-800 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] transition-transform duration-700 group-hover:-translate-y-2">
                        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.2rem] bg-white">
                          <Image
                            src={p.mobile}
                            alt={`Website design for ${p.client} built by DeveloperStudio, mobile view`}
                            fill
                            sizes="160px"
                            className="object-cover object-top"
                          />
                          <span aria-hidden className="absolute top-1.5 left-1/2 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black" />
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className={`reveal-up [--d:0.12s] ${flip ? "lg:order-1" : ""}`}>
                      <span className="text-[13px] font-bold tracking-[0.16em] text-zinc-500 tabular-nums">{String(i + 1).padStart(2, "0")} / {String(live.length).padStart(2, "0")}</span>
                      <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{p.client}</h3>
                      <p className="mt-2 text-[14px] text-zinc-400">
                        {p.sector} · {p.location}
                      </p>
                      <p className="mt-5 text-[17px] leading-relaxed text-zinc-300">{p.summary}</p>
                      <ul className="mt-6 grid gap-2.5">
                        {p.built.slice(0, 4).map((b) => (
                          <li key={b} className="flex items-start gap-3 text-[15px] text-zinc-300">
                            <span className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                              <Check aria-hidden className="size-3" strokeWidth={3.5} />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.services.map((s) => (
                          <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-[13px] font-medium text-zinc-300">
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener"
                        className="btn-shine group/live mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
                      >
                        Visit the live site
                        <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                      </a>
                    </div>
                  </article>
                </InView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Earlier builds */}
      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              More projects
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-5xl">Earlier websites we built</h2>
            <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">Click any project to see it full size.</p>
          </InView>
          <InView className="reveal-up mt-10" threshold={0.05}>
            <Gallery
              cols={3}
              images={moreWork.map((w) => ({ src: w.src, alt: `${w.title} website, designed and built by DeveloperStudio`, w: w.w, h: w.h, title: w.title, tag: w.tag }))}
            />
          </InView>
        </div>
      </section>

      {/* Campaign results */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
                <span className="h-px w-6 bg-brand-dark" />
                Ad campaigns
              </p>
              <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-5xl">Campaign results</h2>
            </div>
            <div className="reveal-up [--d:0.16s]">
              <Link
                href="/case-studies/"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-zinc-300 px-6 text-[15px] font-bold text-ink transition-colors hover:border-brand-dark hover:text-brand-dark"
              >
                All case studies
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </InView>
          <InView as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" threshold={0.2}>
            {caseStudies.map((c, i) => (
              <li key={c.slug} className="reveal-up" style={{ "--d": `${0.08 + i * 0.08}s` } as CSSProperties}>
                <Link
                  href={`/case-studies/${c.slug}/`}
                  className="group flex h-full flex-col rounded-3xl p-6 ring-1 ring-brand transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-25px_rgb(4_120_87/0.5)]"
                >
                  <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-mist px-2.5 py-1 text-[12px] font-semibold text-zinc-700">
                    <span className={`size-1.5 rounded-full ${c.platform === "Google Ads" ? "bg-[#fbbc04]" : "bg-[#0866ff]"}`} />
                    {c.platform}
                  </span>
                  <span className="mt-4 text-[14px] text-zinc-500">{c.client}</span>
                  <span className="mt-1 text-4xl font-extrabold tracking-tight text-ink">{c.highlights[0].value}</span>
                  <span className="mt-1 text-[15px] text-zinc-600">{c.highlights[0].label}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-bold text-brand-dark">
                    Read the case study
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </InView>
        </div>
      </section>

      <CtaSection title="Want a website like these?" source="work" />
    </main>
  );
}
