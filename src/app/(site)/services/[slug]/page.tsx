import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Check, Code2, Megaphone, Phone, Search, Target } from "lucide-react";
import { getService, services } from "@/content/services";
import { serviceVisuals } from "@/content/service-visuals";
import { getCaseStudy, type CaseStudy } from "@/content/case-studies";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { Tilt } from "@/components/Tilt";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

const icons = { code: Code2, search: Search, target: Target, share: Megaphone };

// Closing call-to-action heading for each service.
const ctaTitles: Record<string, string> = {
  "web-design-development": "Ready for a website that brings in enquiries?",
  seo: "Ready to get found on Google?",
  "google-ads": "Ready for more calls from Google Ads?",
  "social-media-marketing": "Ready to turn followers into customers?",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}/` },
  };
}

// Case study highlights without rupee figures; full figures live on each case study page.
const ukHighlights = (c: CaseStudy) => c.highlights.filter((h) => !h.value.includes("Rs"));

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] uppercase ${light ? "text-brand-light" : "text-brand-dark"}`}>
      <span className={`h-px w-6 ${light ? "bg-brand-light" : "bg-brand-dark"}`} />
      {children}
    </p>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const Icon = icons[s.icon];
  const visual = serviceVisuals[s.slug];
  const studies = (s.caseStudies ?? []).map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));
  const work = s.work.map(getProject).filter((p): p is NonNullable<ReturnType<typeof getProject>> => Boolean(p));
  const others = services.filter((o) => o.slug !== s.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.outcome,
    url: `${site.url}/services/${s.slug}/`,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url, telephone: site.phones.uk.tel },
    areaServed: [
      { "@type": "City", name: "Rotherham" },
      { "@type": "AdministrativeArea", name: "South Yorkshire" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  };

  return (
    <main id="main">
      <JsonLd data={serviceSchema} />

      {/* 1. Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
          <div className="drift-a absolute top-[-15%] right-[-10%] h-[560px] w-[560px] rounded-full bg-brand/15 blur-[110px]" />
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 pt-8 pb-16 sm:px-6 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24">
          <div>
            <Breadcrumbs
              className="hero-in"
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services/" },
                { name: s.name, href: `/services/${s.slug}/` },
              ]}
            />
            <p className="hero-in mt-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/80 py-1.5 pr-3.5 pl-1.5 text-[13px] font-semibold text-zinc-700 backdrop-blur [animation-delay:60ms]">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand-dark text-white">
                <Icon aria-hidden className="size-3.5" />
              </span>
              {s.name}
            </p>
            <h1 className="hero-in mt-5 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-ink [animation-delay:120ms] sm:text-6xl">
              {s.h1.replace(/ in Rotherham$/, "")} in{" "}
              <span className="relative isolate whitespace-nowrap text-brand-dark">
                <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                Rotherham
              </span>
            </h1>
            <p className="hero-in mt-6 max-w-[560px] text-lg leading-relaxed text-zinc-600 [animation-delay:200ms] sm:text-xl">{s.outcome}</p>
            <div className="hero-in mt-9 flex flex-col gap-3 [animation-delay:280ms] sm:flex-row sm:items-center">
              <Link
                href="/free-growth-plan/"
                className="btn-shine halo group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-dark px-7 text-[16px] font-bold text-white transition-colors hover:bg-brand-deeper"
              >
                Get your free growth plan
                <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${site.phones.uk.tel}`}
                className="btn-shine group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[16px] font-bold text-white"
              >
                <Phone aria-hidden className="size-[18px] transition-transform duration-300 group-hover:-rotate-12" />
                Call {site.phones.uk.display}
              </a>
            </div>
          </div>

          <div className="hero-in [animation-delay:240ms]">
            <Tilt className="mx-auto max-w-[540px] lg:mr-0">
              <figure className="float-slow rounded-3xl bg-white p-4 shadow-[0_30px_70px_-25px_rgb(10_10_10/0.3)] ring-1 ring-brand sm:p-5">
                {visual.frame === "browser" ? (
                  <div className="overflow-hidden rounded-xl ring-1 ring-zinc-200">
                    <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-white px-3 py-2">
                      <span className="size-2 rounded-full bg-[#ff5f57]" />
                      <span className="size-2 rounded-full bg-[#febc2e]" />
                      <span className="size-2 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={visual.src} alt={visual.alt} fill preload loading="eager" sizes="(min-width: 1024px) 520px, 90vw" className="scroll-shot object-cover object-top" />
                    </div>
                  </div>
                ) : (
                  <div className="sheen overflow-hidden rounded-xl ring-1 ring-zinc-200">
                    <Image src={visual.src} alt={visual.alt} width={visual.w} height={visual.h} preload loading="eager" sizes="(min-width: 1024px) 520px, 90vw" className="h-auto w-full" />
                  </div>
                )}
                <figcaption className="mt-3 px-1 text-[13px] text-zinc-500">{visual.caption}</figcaption>
              </figure>
            </Tilt>
          </div>
        </div>
      </section>

      {/* 2. Short answer and who it is for */}
      <section className="bg-mist py-16 sm:py-24">
        <InView className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-up rounded-3xl border-l-4 border-brand-dark bg-white p-7 sm:p-9">
            <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">Short answer</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">{s.quickAnswer.q}</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-zinc-700">{s.quickAnswer.a}</p>
          </div>
          <div className="reveal-up self-center [--d:0.12s]">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">Is this right for your business?</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">{s.forWho}</p>
          </div>
        </InView>
      </section>

      {/* 3. Problems it solves */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <Eyebrow>What we fix</Eyebrow>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-4xl">The problems this solves</h2>
          </InView>
          <InView as="ul" className="mt-10 grid gap-5 md:grid-cols-3" threshold={0.2}>
            {s.problems.map((p, i) => (
              <li key={p.title} className="reveal-up" style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)] hover:ring-2">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-dark text-[15px] font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{p.body}</p>
                </div>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* 4. What's included: heading pinned beside the longer list */}
      <section className="relative overflow-clip bg-black py-16 text-white sm:py-24">
        <div aria-hidden className="drift-b pointer-events-none absolute top-[10%] right-[-10%] h-[480px] w-[480px] rounded-full bg-brand/20 blur-[130px]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <InView className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow light>What&apos;s included</Eyebrow>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-4xl">
              Everything in our {s.name} service
            </h2>
            <p className="reveal-up mt-4 text-lg leading-relaxed text-zinc-400 [--d:0.16s]">
              No surprises. This is what you get, and everything is set up in your name.
            </p>
          </InView>
          <InView threshold={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.included.map((item, i) => (
                <li
                  key={item}
                  className="cmp-row flex items-start gap-3 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-colors hover:bg-white/[0.07]"
                  style={{ "--d": `${0.08 + i * 0.07}s` } as CSSProperties}
                >
                  <span className="cmp-check mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                    <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-zinc-200">{item}</span>
                </li>
              ))}
            </ul>
            {s.extra && (
              <div className="reveal-up mt-6 rounded-2xl border border-brand-light/30 bg-brand-dark/20 p-6">
                <h3 className="text-lg font-bold">{s.extra.heading}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-300">{s.extra.body}</p>
              </div>
            )}
          </InView>
        </div>
      </section>

      {/* 5. Process timeline */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="mx-auto max-w-2xl text-center">
            <Eyebrow>Our process</Eyebrow>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-4xl">How it works, step by step</h2>
          </InView>
          <InView className="relative mt-14" threshold={0.3}>
            <div aria-hidden className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-[3px] rounded-full bg-zinc-200 lg:block">
              <div className="timeline-x h-full rounded-full bg-gradient-to-r from-brand-dark to-brand-light" />
            </div>
            <div aria-hidden className="absolute top-7 bottom-10 left-7 w-[3px] rounded-full bg-zinc-200 lg:hidden">
              <div className="timeline-y w-full rounded-full bg-gradient-to-b from-brand-dark to-brand-light" />
            </div>
            <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
              {s.process.map((p, i) => (
                <li
                  key={p.title}
                  className="group grid grid-cols-[56px_1fr] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                  style={{ "--d": `${0.2 + (i / (s.process.length - 1)) * 1.6}s` } as CSSProperties}
                >
                  <div>
                    <span className="step-dot relative z-10 flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-lg font-extrabold text-white shadow-[0_10px_30px_-10px_rgb(4_120_87/0.8)] transition-transform duration-300 group-hover:-translate-y-1">
                      {i + 1}
                    </span>
                  </div>
                  <div className="reveal-up lg:mt-7">
                    <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-[12px] font-bold text-brand-dark">{p.time}</span>
                    <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 lg:mx-auto lg:max-w-[250px]">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </InView>
        </div>
      </section>

      {/* 6. Proof: case studies, screenshots and websites */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Results</Eyebrow>
              <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-4xl">
                {studies.length ? "Campaigns we have run" : "Work we have done"}
              </h2>
              <p className="reveal-up mt-4 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">
                Real numbers from real accounts, shown with our clients&apos; names.
              </p>
            </div>
            <div className="reveal-up [--d:0.2s]">
              <Link
                href={studies.length ? "/case-studies/" : "/work/"}
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 text-[15px] font-bold text-ink transition-colors hover:border-brand-dark hover:text-brand-dark"
              >
                {studies.length ? "All case studies" : "See all work"}
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </InView>

          {studies.length > 0 && (
            <InView as="ul" className={`mt-10 grid gap-6 ${studies.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`} threshold={0.15}>
              {studies.map((c, i) => {
                const [big, ...rest] = ukHighlights(c);
                return (
                  <li key={c.slug} className="reveal-up" style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}>
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)] hover:ring-2">
                      <div className="bg-white p-4 pb-0">
                        <div className="overflow-hidden rounded-xl ring-1 ring-zinc-200">
                          <Image
                            src={c.images[0].src}
                            alt={c.images[0].alt}
                            width={c.images[0].w}
                            height={c.images[0].h}
                            sizes="(min-width: 768px) 380px, 90vw"
                            className="aspect-[16/7] h-auto w-full object-cover object-[60%_40%] transition-transform duration-700 group-hover:scale-[1.06]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6 sm:p-7">
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-2.5 py-1 text-[12px] font-semibold text-zinc-700">
                            <span className={`size-1.5 rounded-full ${c.platform === "Google Ads" ? "bg-[#fbbc04]" : "bg-[#0866ff]"}`} />
                            {c.platform}
                          </span>
                          <span className="text-[12px] text-zinc-500">{c.sector}</span>
                        </div>
                        <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">{c.client}</h3>
                        <p className="mt-2 text-5xl font-extrabold tracking-tight text-ink">{big.value}</p>
                        <p className="mt-1 text-[15px] text-zinc-600">{big.label}</p>
                        {rest.length > 0 && (
                          <ul className="mt-5 grid gap-2 border-t border-zinc-200 pt-5">
                            {rest.map((h) => (
                              <li key={h.label} className="flex items-start gap-2.5 text-[14px] text-zinc-700">
                                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-dark" strokeWidth={3} />
                                {h.value} {h.label.toLowerCase()}
                              </li>
                            ))}
                          </ul>
                        )}
                        <Link
                          href={`/case-studies/${c.slug}/`}
                          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-bold text-brand-dark after:absolute after:inset-0 after:rounded-3xl"
                        >
                          Read the case study
                          <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  </li>
                );
              })}
            </InView>
          )}

          {s.evidence && s.evidence.length > 0 && (
            <InView as="ul" className="mt-10 grid gap-6 md:grid-cols-2" threshold={0.15}>
              {s.evidence.map((e, i) => (
                <li key={e.src} className="reveal-up" style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}>
                  <figure className="sheen h-full overflow-hidden rounded-3xl bg-white p-4 ring-1 ring-brand">
                    <Image src={e.src} alt={e.alt} width={e.w} height={e.h} sizes="(min-width: 768px) 560px, 90vw" className="h-auto w-full rounded-xl ring-1 ring-zinc-200" />
                    <figcaption className="mt-3 px-1 text-[14px] text-zinc-600">{e.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </InView>
          )}

          {!studies.length && work.length > 0 && (
            <InView as="ul" className="mt-6 grid gap-6 md:grid-cols-2" threshold={0.15}>
              {work.map((p, i) => (
                <li key={p.slug} className="reveal-up" style={{ "--d": `${0.15 + i * 0.12}s` } as CSSProperties}>
                  <article className="group h-full overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                      <Image
                        src={p.desktop}
                        alt={`Website design for ${p.client} built by DeveloperStudio`}
                        fill
                        sizes="(min-width: 768px) 560px, 90vw"
                        className="object-cover object-top transition-[object-position] duration-[5s] ease-in-out group-hover:object-bottom"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-[13px] text-zinc-500">
                        {p.sector} · {p.location}
                      </p>
                      <h3 className="mt-1 text-xl font-extrabold tracking-tight text-ink">{p.client}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{p.summary}</p>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener"
                        className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-bold text-brand-dark"
                      >
                        Visit the live site
                        <ArrowUpRight aria-hidden className="size-4" />
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </InView>
          )}
        </div>
      </section>

      {/* 7. Price */}
      <section className="bg-white py-16 sm:py-24">
        <InView className="mx-auto grid max-w-[1200px] items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-up relative overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-10 lg:sticky lg:top-28">
            <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-brand/30 blur-3xl" />
            <p className="relative text-[12px] font-bold tracking-[0.16em] text-brand-light uppercase">Pricing</p>
            <h2 className="relative mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">A fixed price, agreed before we start</h2>
            <p className="relative mt-4 text-[16px] leading-relaxed text-zinc-300">
              Every project gets a written quote after a free call, so you know the cost up front. {s.price.note}
            </p>
            <Link
              href="/free-growth-plan/"
              className="btn-shine group relative mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
            >
              Get an exact quote
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="reveal-up [--d:0.12s]">
            <Eyebrow>What affects the price</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">What changes the cost</h2>
            <ul className="mt-6 grid gap-3">
              {s.priceFactors.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-2xl p-4 ring-1 ring-brand">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                    <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
                  </span>
                  <span className="text-[16px] text-ink">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </InView>
      </section>

      {/* 8. FAQ */}
      <FaqSection items={s.faqs} title={`${s.short} questions`} intro={`Straight answers about our ${s.name} service.`} />

      {/* 9. Other services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView>
            <h2 className="reveal-up text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">Other services</h2>
          </InView>
          <InView as="ul" className="mt-8 grid gap-4 md:grid-cols-3" threshold={0.2}>
            {others.map((o, i) => {
              const OIcon = icons[o.icon];
              return (
                <li key={o.slug} className="reveal-up" style={{ "--d": `${0.08 + i * 0.1}s` } as CSSProperties}>
                  <Link
                    href={`/services/${o.slug}/`}
                    className="group flex h-full items-start gap-4 rounded-2xl p-5 ring-1 ring-brand transition duration-300 hover:-translate-y-1 hover:bg-brand/[0.04] hover:shadow-[0_16px_40px_-20px_rgb(4_120_87/0.5)]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                      <OIcon aria-hidden className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2 text-[17px] font-bold text-ink">
                        {o.name}
                        <ArrowRight aria-hidden className="size-4 shrink-0 text-brand-dark transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <span className="mt-1 block text-[14px] leading-relaxed text-zinc-600">{o.card}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </InView>
        </div>
      </section>

      <CtaSection title={ctaTitles[s.slug] ?? "Ready to get more enquiries?"} source={`service-${s.slug}`} />
    </main>
  );
}
