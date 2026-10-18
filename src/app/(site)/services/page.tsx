import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Code2, Megaphone, Search, Target } from "lucide-react";
import { services } from "@/content/services";
import { serviceVisuals } from "@/content/service-visuals";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Web & Marketing Services Rotherham | DeveloperStudio",
  description:
    "Web design, SEO, Google Ads and social media for UK businesses. One team, clear pricing, monthly reporting. See what we can do for you.",
  alternates: { canonical: "/services/" },
};

const icons = { code: Code2, search: Search, target: Target, share: Megaphone };

const order = [
  { title: "Website first", body: "A fast site that turns visitors into enquiries is the base everything else builds on." },
  { title: "Google Ads for enquiries now", body: "Ads bring calls within days while your organic rankings are still building." },
  { title: "SEO for the long term", body: "Rankings you do not pay for per click bring your cost per enquiry down over time." },
  { title: "Social to stay front of mind", body: "Content and retargeting keep past visitors coming back until they are ready to buy." },
];

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-20">
          <Breadcrumbs
            className="hero-in"
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services/" },
            ]}
          />
          <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="hero-in text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
                Web design, SEO and ads for{" "}
                <span className="relative isolate whitespace-nowrap text-brand-dark">
                  <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                  Rotherham
                </span>{" "}
                businesses
              </h1>
              <p className="hero-in mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
                Four services, one accountable team. Every service is priced up front, reported monthly and measured on
                enquiries and sales.
              </p>
            </div>
            {/* Answer-first block for search engines and AI assistants */}
            <div className="hero-in rounded-3xl border-l-4 border-brand-dark bg-white p-6 shadow-[0_20px_50px_-25px_rgb(10_10_10/0.3)] ring-1 ring-zinc-200 [animation-delay:240ms]">
              <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">Short answer</p>
              <h2 className="mt-2 text-lg font-extrabold text-ink">What does a digital marketing agency do?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                It helps a business win customers online: a website that converts, SEO to get found on Google, paid ads on Google
                and social media, and reporting on what each pound brings back. DeveloperStudio does all four with one team.
              </p>
            </div>
          </div>
          <nav aria-label="Jump to a service" className="hero-in mt-10 flex flex-wrap gap-2 [animation-delay:320ms]">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group inline-flex items-center gap-2 rounded-sm bg-white px-4 py-2 text-[14px] font-semibold text-ink ring-1 ring-brand transition-colors hover:bg-brand-dark hover:text-white"
                >
                  <Icon aria-hidden className="size-4 text-brand-dark transition-colors group-hover:text-white" />
                  {s.name}
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* One row per service, alternating sides */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            const v = serviceVisuals[s.slug];
            const flip = i % 2 === 1;
            return (
              <InView key={s.slug} threshold={0.2}>
                <article
                  id={s.slug}
                  className="reveal-up group grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-brand transition-shadow duration-500 hover:shadow-[5px_5px_0_0_#047857] sm:p-10 lg:grid-cols-2 lg:gap-12"
                >
                  <div className={flip ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                        <Icon aria-hidden className="size-6" />
                      </span>
                      <span className="text-[13px] font-bold tracking-[0.16em] text-zinc-400">0{i + 1}</span>
                    </div>
                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{s.name}</h2>
                    <p className="mt-3 text-lg leading-relaxed text-zinc-600">{s.outcome}</p>
                    <ul className="mt-6 grid gap-2.5">
                      {s.included.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[15px] text-zinc-700">
                          <span className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-sm bg-brand-dark text-white">
                            <Check aria-hidden className="size-3" strokeWidth={3.5} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="btn-shine group/btn mt-8 inline-flex h-12 items-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
                    >
                      Explore {s.name}
                      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                  <figure className={`relative rounded-2xl bg-mist p-4 sm:p-6 ${flip ? "lg:order-1" : ""}`}>
                    <div aria-hidden className="dot-grid-soft absolute inset-0 rounded-2xl" />
                    {v.frame === "browser" ? (
                      <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_-20px_rgb(10_10_10/0.35)] ring-1 ring-zinc-200">
                        <div className="flex items-center gap-1.5 border-b border-zinc-200 px-3 py-2">
                          <span className="size-2 rounded-sm bg-zinc-300" />
                          <span className="size-2 rounded-sm bg-zinc-300" />
                          <span className="size-2 rounded-sm bg-zinc-300" />
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image src={v.src} alt={v.alt} fill sizes="(min-width: 1024px) 520px, 90vw" className="scroll-shot object-cover object-top" />
                        </div>
                      </div>
                    ) : (
                      <div className="sheen relative overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_-20px_rgb(10_10_10/0.35)] ring-1 ring-zinc-200 transition-transform duration-700 group-hover:-rotate-1 group-hover:scale-[1.02]">
                        <Image src={v.src} alt={v.alt} width={v.w} height={v.h} sizes="(min-width: 1024px) 520px, 90vw" className="h-auto w-full" />
                      </div>
                    )}
                    <figcaption className="relative mt-3 text-[13px] text-zinc-500">{v.caption}</figcaption>
                  </figure>
                </article>
              </InView>
            );
          })}
        </div>
      </section>

      {/* Where to start */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              Where to start
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-4xl">
              Start where you get the fastest return
            </h2>
            <p className="reveal-up mt-4 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">
              Not every business needs all four. This is the order we usually recommend, and your free growth plan tells you
              exactly where to begin.
            </p>
          </InView>
          <InView as="ol" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" threshold={0.2}>
            {order.map((o, i) => (
              <li key={o.title} className="reveal-up" style={{ "--d": `${0.1 + i * 0.1}s` } as CSSProperties}>
                <div className="h-full rounded-3xl p-7 ring-1 ring-brand transition duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857]">
                  <span className="text-5xl font-extrabold tracking-tight text-brand/25">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight text-ink">{o.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{o.body}</p>
                </div>
              </li>
            ))}
          </InView>
        </div>
      </section>

      <CtaSection title="Not sure which service you need?" source="services-hub" />
    </main>
  );
}
