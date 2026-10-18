import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { getCaseStudy, type CaseStudy } from "@/content/case-studies";
import { CountUpOnView } from "./CountUpOnView";
import { InView } from "./InView";

const roadside = getCaseStudy("roadside-hero-google-ads")!;

// Home page cards show results without rupee costs; the full figures are on each case study page.
// Percentages are worked out from the ad account screenshots:
//   Blanche: Advantage+ Rs 84.64 vs original audience Rs 110.06 per conversation = 23% lower.
//   Aswora: engagement campaign Rs 23.11 vs Shogran campaign Rs 32.74 per lead = 29% lower.
const cards: { study: CaseStudy; big: ReactNode; bigLabel: string; points: string[]; image: number; focus: string }[] = [
  {
    study: getCaseStudy("excite-property-meta-leads")!,
    big: <CountUpOnView value={72} />,
    bigLabel: "buyer and investor leads from Instant Forms",
    points: ["£5.45 cost per lead", "9.3% lower cost per lead than similar Meta ad sets"],
    image: 0,
    focus: "0% 0%",
  },
  {
    study: getCaseStudy("blanche-beauty-whatsapp-leads")!,
    big: <CountUpOnView value={184} />,
    bigLabel: "WhatsApp booking conversations in 17 days",
    points: ["Two audiences tested side by side", "Advantage+ audience cut the cost per chat by 23%"],
    image: 0,
    focus: "62% 40%",
  },
  {
    study: getCaseStudy("aswora-travels-whatsapp-leads")!,
    big: <CountUpOnView value={147} />,
    bigLabel: "WhatsApp enquiries for seasonal tour packages",
    points: ["Agency offer tested against a destination offer", "Agency campaign brought leads 29% cheaper"],
    image: 0,
    focus: "62% 40%",
  },
];

function PlatformBadge({ platform, dark }: { platform: CaseStudy["platform"]; dark?: boolean }) {
  const dot = platform === "Google Ads" ? "bg-[#fbbc04]" : "bg-[#0866ff]";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-[12px] font-semibold ${
        dark ? "bg-white/10 text-zinc-200" : "bg-mist text-zinc-700"
      }`}
    >
      <span className={`size-1.5 rounded-sm ${dot}`} />
      {platform}
    </span>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              Case studies
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-5xl">
              Real campaigns, real numbers
            </h2>
            <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">
              Google Ads and Meta campaigns we ran in 2026. Every figure comes straight from the ad account.
            </p>
          </div>
          <div className="reveal-up [--d:0.2s]">
            <Link
              href="/case-studies/"
              className="group inline-flex h-12 items-center gap-2 rounded-sm border-2 border-ink px-6 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              All case studies
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </InView>

        {/* Featured: Roadside Hero */}
        <InView className="mt-14" threshold={0.2}>
          <article className="reveal-up group relative grid overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-[1fr_1.1fr]">

            <div className="relative p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <PlatformBadge platform={roadside.platform} dark />
                <span className="rounded-sm bg-brand-dark px-2.5 py-1 text-[12px] font-semibold text-white">Featured</span>
              </div>
              <p className="mt-6 text-[14px] text-zinc-400">
                {roadside.client} · {roadside.sector}
              </p>
              <h3 className="mt-1.5 text-3xl font-extrabold tracking-tight sm:text-4xl">Phone leads built from scratch</h3>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-white/10 py-6">
                <div>
                  <dt className="sr-only">Phone calls</dt>
                  <dd className="text-2xl font-extrabold text-brand-light sm:text-[2rem]">
                    <CountUpOnView value={818} />
                  </dd>
                  <dd className="mt-1 text-[13px] text-zinc-400">phone calls</dd>
                </div>
                <div>
                  <dt className="sr-only">Cost per call</dt>
                  <dd className="text-2xl font-extrabold sm:text-[2rem]">~$12.71</dd>
                  <dd className="mt-1 text-[13px] text-zinc-400">cost per call</dd>
                </div>
                <div>
                  <dt className="sr-only">Impressions</dt>
                  <dd className="text-2xl font-extrabold sm:text-[2rem]">
                    <CountUpOnView value={36.7} decimals={1} suffix="k" />
                  </dd>
                  <dd className="mt-1 text-[13px] text-zinc-400">impressions</dd>
                </div>
              </dl>

              <ul className="mt-7 grid gap-3">
                {roadside.strategy.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[15px] leading-relaxed text-zinc-300">
                    <span className="mt-1 inline-flex size-[18px] shrink-0 items-center justify-center rounded-sm bg-brand-dark text-white">
                      <Check aria-hidden className="size-3" strokeWidth={3.5} />
                    </span>
                    {s}
                  </li>
                ))}
              </ul>

              <Link
                href={`/case-studies/${roadside.slug}/`}
                className="btn-shine group/link mt-9 inline-flex h-12 items-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
              >
                Read the case study
                <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>

            {/* Screenshots: the overall view, with the peak season view stacked on top. */}
            <div className="relative flex items-center p-6 pt-0 sm:p-10 lg:pt-10 lg:pl-0">
              <div className="relative w-full">
                <div className="sheen overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-white/10 transition-transform duration-700 group-hover:-translate-y-1 group-hover:-rotate-1">
                  <Image
                    src={roadside.images[0].src}
                    alt={roadside.images[0].alt}
                    width={roadside.images[0].w}
                    height={roadside.images[0].h}
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="relative mt-4 ml-auto w-[82%] overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-white/10 transition-transform duration-700 group-hover:translate-y-1 group-hover:rotate-1 sm:-mt-6">
                  <Image
                    src={roadside.images[1].src}
                    alt={roadside.images[1].alt}
                    width={roadside.images[1].w}
                    height={roadside.images[1].h}
                    sizes="(min-width: 1024px) 460px, 75vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-right text-[12px] text-zinc-500">Google Ads, 16 Feb to 17 Aug 2026, with the June to August peak below</p>
              </div>
            </div>
          </article>
        </InView>

        {/* Three Meta campaigns */}
        <InView as="ul" className="mt-6 grid gap-6 md:grid-cols-3" threshold={0.15}>
          {cards.map(({ study, big, bigLabel, points, image, focus }, i) => (
            <li key={study.slug} className="reveal-up" style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857] hover:ring-2">
                <div className="relative overflow-hidden bg-mist p-4">
                  <div className="overflow-hidden rounded-lg ring-1 ring-zinc-200">
                    <Image
                      src={study.images[image].src}
                      alt={study.images[image].alt}
                      width={study.images[image].w}
                      height={study.images[image].h}
                      sizes="(min-width: 768px) 360px, 90vw"
                      style={{ objectPosition: focus }}
                      className="aspect-[16/7] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <PlatformBadge platform={study.platform} />
                    <span className="text-[12px] text-zinc-500">{study.sector}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{study.client}</h3>
                  <p className="mt-3 text-5xl font-extrabold tracking-tight text-ink">{big}</p>
                  <p className="mt-1 text-[15px] text-zinc-600">{bigLabel}</p>
                  <ul className="mt-5 grid gap-2 border-t border-zinc-200 pt-5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[14px] text-zinc-700">
                        <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-dark" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/case-studies/${study.slug}/`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-bold text-brand-dark after:absolute after:inset-0 after:rounded-3xl"
                  >
                    Read the case study
                    <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}
