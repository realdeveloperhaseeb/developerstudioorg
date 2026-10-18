import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowRight, CalendarDays, Megaphone, Target } from "lucide-react";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/content/case-studies";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { StatValue } from "@/components/StatValue";
import { Gallery } from "@/components/Gallery";
import { CtaSection } from "@/components/CtaSection";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

const shortName = (c: CaseStudy) => c.client.split(" &")[0].replace(" Real Estate", "");

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCaseStudy((await params).slug);
  if (!c) return {};
  const desc = `${c.overview}`.slice(0, 152).replace(/\s+\S*$/, "") + "...";
  return {
    title: `${shortName(c)} ${c.platform} Case Study | DeveloperStudio`,
    description: desc,
    alternates: { canonical: `/case-studies/${c.slug}/` },
    openGraph: { images: [c.images[0].src] },
  };
}

// Which service pages relate to each platform.
const related: Record<CaseStudy["platform"], { name: string; href: string }[]> = {
  "Google Ads": [
    { name: "Google Ads management", href: "/services/google-ads/" },
    { name: "Web design and landing pages", href: "/services/web-design-development/" },
  ],
  "Meta Ads": [
    { name: "Social media marketing", href: "/services/social-media-marketing/" },
    { name: "Google Ads management", href: "/services/google-ads/" },
  ],
};

function PlatformBadge({ platform, dark }: { platform: CaseStudy["platform"]; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1 text-[13px] font-semibold ${dark ? "bg-white/10 text-zinc-200" : "bg-white text-zinc-700 ring-1 ring-zinc-200"}`}
    >
      <span className={`size-2 rounded-sm ${platform === "Google Ads" ? "bg-[#fbbc04]" : "bg-[#0866ff]"}`} />
      {platform}
    </span>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug);
  if (!c) notFound();

  const others = caseStudies.filter((o) => o.slug !== c.slug);
  const PlatformIcon = c.platform === "Google Ads" ? Target : Megaphone;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.overview,
    image: `${site.url}${c.images[0].src}`,
    url: `${site.url}/case-studies/${c.slug}/`,
    about: { "@type": "Organization", name: c.client },
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <main id="main">
      <JsonLd data={schema} />

      {/* 1. Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 pt-8 pb-16 sm:px-6 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-24">
          <div>
            <Breadcrumbs
              className="hero-in"
              items={[
                { name: "Home", href: "/" },
                { name: "Case studies", href: "/case-studies/" },
                { name: shortName(c), href: `/case-studies/${c.slug}/` },
              ]}
            />
            <div className="hero-in mt-8 flex flex-wrap items-center gap-2 [animation-delay:60ms]">
              <PlatformBadge platform={c.platform} />
              <span className="rounded-sm bg-white px-3 py-1 text-[13px] font-medium text-zinc-600 ring-1 ring-zinc-200">{c.sector}</span>
            </div>
            <p className="hero-in mt-5 text-[15px] font-semibold text-brand-dark [animation-delay:100ms]">{c.client}</p>
            <h1 className="hero-in mt-2 text-[2.4rem] leading-[1.06] font-extrabold tracking-[-0.02em] text-ink [animation-delay:140ms] sm:text-5xl lg:text-[3.4rem]">
              {c.title}
            </h1>
            <p className="hero-in mt-6 max-w-[600px] text-lg leading-relaxed text-zinc-600 [animation-delay:220ms]">{c.overview}</p>
            <div className="hero-in mt-8 flex flex-wrap gap-3 [animation-delay:300ms]">
              <Link
                href="/free-growth-plan/"
                className="btn-shine group inline-flex h-12 items-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
              >
                Get results like this
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#results"
                className="inline-flex h-12 items-center rounded-sm border-2 border-ink bg-white px-6 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                See the results
              </a>
            </div>
          </div>

          {/* Headline result card */}
          <div className="hero-in [animation-delay:240ms]">
            <div className="brackets relative">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-dark" />
            <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white shadow-[0_40px_80px_-30px_rgb(10_10_10/0.5)] sm:p-8">
              <div className="relative flex items-center justify-between gap-3">
                <PlatformBadge platform={c.platform} dark />
                <span className="inline-flex items-center gap-1.5 text-[13px] text-zinc-400">
                  <CalendarDays aria-hidden className="size-4" />
                  {c.period}
                </span>
              </div>
              <p className="relative mt-6 text-6xl font-extrabold tracking-tight text-brand-light sm:text-7xl">{c.highlights[0].value}</p>
              <p className="relative mt-2 text-lg text-zinc-300">{c.highlights[0].label}</p>
              <dl className="relative mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
                {c.highlights.slice(1).map((h) => (
                  <div key={h.label}>
                    <dt className="sr-only">{h.label}</dt>
                    <dd className="text-2xl font-extrabold">{h.value}</dd>
                    <dd className="mt-1 text-[13px] leading-snug text-zinc-400">{h.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="sheen relative mt-6 overflow-hidden rounded-xl bg-white ring-1 ring-white/10">
                <Image
                  src={c.images[0].src}
                  alt={c.images[0].alt}
                  width={c.images[0].w}
                  height={c.images[0].h}
                  preload
                  loading="eager"
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Results */}
      <section id="results" className="relative scroll-mt-20 overflow-clip bg-black py-16 text-white sm:py-24">
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
              <span className="h-px w-6 bg-brand-light" />
              The results
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.015em] [--d:0.08s] sm:text-4xl">What the campaign delivered</h2>
            <p className="reveal-up mt-4 text-lg text-zinc-400 [--d:0.16s]">Taken straight from the {c.platform} account, {c.period}.</p>
          </InView>
          <InView
            as="ul"
            className={`mt-10 grid gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 ${
              c.results.length >= 5 ? "lg:grid-cols-5" : c.results.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
            threshold={0.2}
          >
            {c.results.map((r, i) => (
              <li
                key={r.metric}
                className={`reveal-up bg-black p-6 sm:p-8 ${i === c.results.length - 1 && c.results.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                style={{ "--d": `${0.08 + i * 0.08}s` } as CSSProperties}
              >
                <p className={`font-extrabold tracking-tight ${r.value.length > 20 ? "text-lg leading-snug text-zinc-200" : "text-3xl text-white sm:text-4xl"}`}>
                  {r.value.length > 20 ? r.value : <StatValue value={r.value} />}
                </p>
                <p className="mt-2 text-[14px] text-zinc-400">{r.metric}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 3. What we did, with a pinned snapshot */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <InView>
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              What we did
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-4xl">Strategy and execution</h2>
            <ol className="mt-8 grid gap-4">
              {c.strategy.map((s, i) => (
                <li
                  key={s}
                  className="reveal-up group flex items-start gap-5 rounded-2xl p-5 ring-1 ring-brand transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857] sm:p-6"
                  style={{ "--d": `${0.12 + i * 0.1}s` } as CSSProperties}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-[15px] font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
                    0{i + 1}
                  </span>
                  <p className="pt-2 text-[16px] leading-relaxed text-ink">{s}</p>
                </li>
              ))}
            </ol>
          </InView>

          <InView className="lg:sticky lg:top-28">
            <aside className="reveal-up rounded-3xl bg-mist p-7 ring-1 ring-zinc-200 [--d:0.15s]">
              <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">Snapshot</p>
              <dl className="mt-5 grid gap-4 text-[15px]">
                {[
                  ["Client", c.client],
                  ["Sector", c.sector],
                  ["Platform", c.platform],
                  ["Period", c.period],
                  ["Objective", c.objective],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-zinc-200 pb-4 last:border-0 last:pb-0">
                    <dt className="text-[13px] text-zinc-500">{k}</dt>
                    <dd className="mt-0.5 font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-brand">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white">
                  <PlatformIcon aria-hidden className="size-5" />
                </span>
                <p className="text-[14px] leading-snug text-zinc-600">
                  Every figure on this page comes from the {c.platform} account screenshots below.
                </p>
              </div>
            </aside>
          </InView>
        </div>
      </section>

      {/* 4. Breakdown table */}
      {c.breakdown && (
        <section className="bg-mist py-16 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <InView>
              <h2 className="reveal-up text-3xl font-extrabold tracking-[-0.015em] text-ink sm:text-4xl">Performance breakdown</h2>
              <div className="reveal-up mt-8 overflow-x-auto rounded-3xl bg-white ring-1 ring-brand [--d:0.1s]">
                <table className="w-full min-w-[560px] text-left text-[15px]">
                  <thead>
                    <tr className="bg-brand-dark text-white">
                      {c.breakdown.head.map((h) => (
                        <th key={h} scope="col" className="px-6 py-4 text-[13px] font-bold tracking-wide uppercase">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.breakdown.rows.map((row, i) => {
                      const total = /total/i.test(row[0]);
                      return (
                        <tr key={i} className={`border-t border-zinc-200 transition-colors hover:bg-brand/[0.04] ${total ? "bg-mist font-bold" : ""}`}>
                          {row.map((cell, j) =>
                            j === 0 ? (
                              <th key={j} scope="row" className="px-6 py-4 font-semibold text-ink">
                                {cell}
                              </th>
                            ) : (
                              <td key={j} className="px-6 py-4 text-zinc-700">
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </InView>
          </div>
        </section>
      )}

      {/* 5. Screenshots */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              Proof
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-4xl">Straight from the ad account</h2>
            <p className="reveal-up mt-4 text-lg text-zinc-600 [--d:0.16s]">Click any screenshot to see it full size.</p>
          </InView>
          <InView className="reveal-up mt-10" threshold={0.1}>
            <Gallery images={c.images} />
          </InView>

          {c.relatedSite && (
            <InView className="mt-14" threshold={0.2}>
              <div className="reveal-up grid items-center gap-8 overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-10 lg:grid-cols-2">
                <div>
                  <p className="text-[12px] font-bold tracking-[0.16em] text-brand-light uppercase">Website too</p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">We built the website the ads send people to</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-zinc-300">
                    Ads work best when the page they land on makes calling easy. We designed and built the {c.client} website alongside
                    the campaigns.
                  </p>
                  <Link href="/services/web-design-development/" className="group mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-brand-light">
                    About our web design
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src={c.relatedSite}
                    alt={`${c.client} website designed and built by DeveloperStudio`}
                    width={1280}
                    height={720}
                    sizes="(min-width: 1024px) 520px, 90vw"
                    className="h-auto w-full transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              </div>
            </InView>
          )}
        </div>
      </section>

      {/* 6. Related services and other case studies */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="grid gap-4 sm:grid-cols-2">
            {related[c.platform].map((r, i) => (
              <Link
                key={r.href}
                href={r.href}
                className="reveal-up group flex items-center justify-between gap-4 rounded-2xl bg-white p-6 ring-1 ring-brand transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857]"
                style={{ "--d": `${0.08 + i * 0.1}s` } as CSSProperties}
              >
                <span>
                  <span className="block text-[13px] text-zinc-500">Related service</span>
                  <span className="mt-0.5 block text-lg font-bold text-ink">{r.name}</span>
                </span>
                <ArrowRight aria-hidden className="size-5 shrink-0 text-brand-dark transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </InView>

          <InView className="mt-16 flex flex-wrap items-end justify-between gap-4">
            <h2 className="reveal-up text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">More case studies</h2>
            <Link href="/case-studies/" className="reveal-up group inline-flex items-center gap-2 text-[15px] font-bold text-brand-dark">
              All case studies
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </InView>
          <InView as="ul" className="mt-8 grid gap-5 md:grid-cols-3" threshold={0.2}>
            {others.map((o, i) => (
              <li key={o.slug} className="reveal-up" style={{ "--d": `${0.08 + i * 0.1}s` } as CSSProperties}>
                <Link
                  href={`/case-studies/${o.slug}/`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-brand transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857]"
                >
                  <span className="self-start">
                    <PlatformBadge platform={o.platform} />
                  </span>
                  <span className="mt-4 text-[14px] text-zinc-500">{o.client}</span>
                  <span className="mt-1 text-4xl font-extrabold tracking-tight text-ink">{o.highlights[0].value}</span>
                  <span className="mt-1 text-[15px] text-zinc-600">{o.highlights[0].label}</span>
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

      <CtaSection title="Want results like these for your business?" source={`case-${c.slug}`} />
    </main>
  );
}
