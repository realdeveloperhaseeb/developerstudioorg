import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Code2, FileSignature, KeyRound, MapPin, Megaphone, Receipt, Search, Target, Wallet } from "lucide-react";
import { billingLabel, plans } from "@/content/pricing";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { StatValue } from "@/components/StatValue";
import { PackageBuilder } from "@/components/PackageBuilder";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Web Design & Digital Marketing Prices | DeveloperStudio",
  description:
    "Starting prices: websites from £99, SEO from £299, Google Ads from £349, social media from £149, Google Business Profile from £49. Get a custom offer.",
  alternates: { canonical: "/pricing/" },
};

const icons = { code: Code2, search: Search, target: Target, share: Megaphone, map: MapPin };

const priceSentence = plans.map((p) => `${p.name} from £${p.from}${p.billing === "monthly" ? " a month" : ""}`).join(", ");

const terms = [
  { icon: FileSignature, title: "No long contracts", body: "Monthly services run on rolling monthly agreements. Website projects have a fixed scope and price agreed up front." },
  { icon: Receipt, title: "Clear payments", body: "Websites are paid as a deposit and a final balance, as set out in your offer. Monthly services are invoiced on the same date each month." },
  { icon: KeyRound, title: "You own everything", body: "Your website, domain, Google Ads, Analytics and Meta accounts are in your name from day one." },
  { icon: Wallet, title: "Ad spend goes direct", body: "You pay Google and Meta directly from your own account. We never mark up your ad spend." },
];

const pricingFaqs = [
  {
    q: "How much does a website cost with DeveloperStudio?",
    a: "Websites start from £99 as a one-off price. The final price depends on the number of pages, features such as booking or an online shop, and whether we write the copy. You get a fixed custom offer after a free call.",
  },
  {
    q: "Which prices are monthly?",
    a: "SEO, Google Ads management and social media are monthly services on rolling agreements. Websites and Google Business Profile optimisation are one-off prices.",
  },
  {
    q: "What is a custom offer?",
    a: "A written quote built around your business, your goals and your budget. It lists exactly what we will do and the fixed price, and it is free with no obligation.",
  },
  {
    q: "What is not included in the prices?",
    a: "Ad spend, which you pay directly to Google or Meta, plus third-party costs such as paid plugins, software licences or your domain renewal. We list every third-party cost in your offer.",
  },
  {
    q: "Do you take a percentage of my ad spend?",
    a: "No. Our management fee is separate and fixed, and you pay the ad platforms directly from your own account.",
  },
  {
    q: "How do payments work?",
    a: "Website projects are paid as a deposit before work starts and the balance at launch. Monthly services are invoiced on the same date each month. Full details are in our payment and refund policy.",
  },
];

export default function PricingPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "DeveloperStudio starting prices",
          url: `${site.url}/pricing/`,
          itemListElement: plans.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: p.summary,
            priceCurrency: "GBP",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "GBP",
              minPrice: p.from,
              ...(p.billing === "monthly" ? { unitText: "MONTH", unitCode: "MON" } : {}),
            },
            seller: { "@type": "Organization", name: site.name, url: site.url },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 pb-14 sm:px-6 sm:pt-10 sm:pb-16">
          <Breadcrumbs
            className="hero-in"
            items={[
              { name: "Home", href: "/" },
              { name: "Pricing", href: "/pricing/" },
            ]}
          />
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="hero-in text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
                Clear prices,{" "}
                <span className="relative isolate whitespace-nowrap text-brand-dark">
                  <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                  custom offers
                </span>
              </h1>
              <p className="hero-in mt-6 max-w-[600px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
                Starting prices for every service, what is included and what changes the price. Then a fixed custom offer for
                your business, in writing, before any work starts.
              </p>
            </div>
            <div className="hero-in rounded-3xl border-l-4 border-brand-dark bg-white p-6 shadow-[0_20px_50px_-25px_rgb(10_10_10/0.3)] ring-1 ring-zinc-200 [animation-delay:240ms]">
              <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">Short answer</p>
              <h2 className="mt-2 text-lg font-extrabold text-ink">How much does DeveloperStudio cost?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                {priceSentence}. Every project gets a fixed custom offer after a free call, and ad spend is paid directly to Google or
                Meta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price cards */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6" threshold={0.1}>
            {plans.map((p, i) => {
              const Icon = icons[p.icon];
              return (
                <li
                  key={p.slug}
                  className={`reveal-up ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
                  style={{ "--d": `${0.06 + i * 0.08}s` } as CSSProperties}
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-brand transition duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857] hover:ring-2">
                    <div className="relative flex items-center justify-between gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                        <Icon aria-hidden className="size-6" />
                      </span>
                      <span
                        className={`rounded-sm px-3 py-1 text-[12px] font-bold ${p.billing === "monthly" ? "bg-ink text-white" : "bg-brand/10 text-brand-dark"}`}
                      >
                        {p.billing === "monthly" ? "Monthly" : "One-off"}
                      </span>
                    </div>
                    <h2 className="relative mt-6 text-xl font-extrabold tracking-tight text-ink">{p.name}</h2>
                    <p className="relative mt-4 text-[14px] text-zinc-500">From</p>
                    <p className="relative flex items-baseline gap-2">
                      <span className="text-5xl font-extrabold tracking-tight text-ink">
                        <StatValue value={`£${p.from}`} />
                      </span>
                      <span className="text-[15px] font-medium text-zinc-500">{billingLabel(p)}</span>
                    </p>
                    <p className="relative mt-4 text-[15px] leading-relaxed text-zinc-600">{p.summary}</p>
                    <ul className="relative mt-5 grid gap-2.5 border-t border-zinc-200 pt-5">
                      {p.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14px] text-zinc-700">
                          <span className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-sm bg-brand-dark text-white">
                            <Check aria-hidden className="size-3" strokeWidth={3.5} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="relative mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
                      <Link
                        href="/free-growth-plan/"
                        className="btn-shine group/btn inline-flex h-11 items-center gap-2 rounded-sm bg-brand-dark px-5 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
                      >
                        Get a custom offer
                        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      {p.href && (
                        <Link href={p.href} className="text-[14px] font-bold text-brand-dark underline-offset-4 hover:underline">
                          Service details
                        </Link>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </InView>
        </div>
      </section>

      {/* Package builder */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              Build your package
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-5xl">See your starting price</h2>
            <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">
              Tick what you need. We will send a custom offer for exactly that mix.
            </p>
          </InView>
          <InView className="reveal-up mt-10" threshold={0.1}>
            <PackageBuilder />
          </InView>
        </div>
      </section>

      {/* What changes the price */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView>
            <h2 className="reveal-up text-3xl font-extrabold tracking-[-0.015em] text-ink sm:text-4xl">What changes the price</h2>
            <div className="reveal-up mt-8 overflow-x-auto rounded-3xl ring-1 ring-brand [--d:0.1s]">
              <table className="w-full min-w-[640px] text-left text-[15px]">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th scope="col" className="px-6 py-4 text-[13px] font-bold tracking-wide uppercase">Service</th>
                    <th scope="col" className="px-6 py-4 text-[13px] font-bold tracking-wide uppercase">Starting price</th>
                    <th scope="col" className="px-6 py-4 text-[13px] font-bold tracking-wide uppercase">What changes it</th>
                  </tr>
                </thead>
                <tbody>
                  {plans.map((p) => (
                    <tr key={p.slug} className="border-t border-zinc-200 align-top transition-colors hover:bg-brand/[0.04]">
                      <th scope="row" className="px-6 py-5 font-bold text-ink">{p.name}</th>
                      <td className="px-6 py-5 whitespace-nowrap text-ink">
                        <strong>£{p.from}</strong> <span className="text-zinc-500">{billingLabel(p)}</span>
                      </td>
                      <td className="px-6 py-5 text-zinc-600">{p.factors.join(" · ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </InView>
        </div>
      </section>

      {/* Terms in plain words */}
      <section className="relative overflow-clip bg-black py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
              <span className="h-px w-6 bg-brand-light" />
              In plain words
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.015em] [--d:0.08s] sm:text-5xl">Contracts, payment and ownership</h2>
          </InView>
          <InView as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" threshold={0.2}>
            {terms.map((t, i) => (
              <li key={t.title} className="reveal-up" style={{ "--d": `${0.1 + i * 0.1}s` } as CSSProperties}>
                <div className="h-full rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-colors duration-300 hover:ring-brand-light/50">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-dark text-white">
                    <t.icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{t.body}</p>
                </div>
              </li>
            ))}
          </InView>
          <p className="mt-8 text-[15px] text-zinc-400">
            Full details are in our{" "}
            <Link href="/payment-policy/" className="font-semibold text-white underline underline-offset-4">
              payment and refund policy
            </Link>{" "}
            and{" "}
            <Link href="/terms/" className="font-semibold text-white underline underline-offset-4">
              terms and conditions
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqSection items={pricingFaqs} title="Pricing questions" intro="Straight answers about cost, payments and what is included." />
      <CtaSection title="Get your custom offer" source="pricing" />
    </main>
  );
}
