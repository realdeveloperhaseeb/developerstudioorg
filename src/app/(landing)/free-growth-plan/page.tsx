import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowDown, Gauge, MapPinned, Phone, ScrollText } from "lucide-react";
import { site } from "@/content/site";
import { InView } from "@/components/InView";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Free Website & SEO Review Rotherham | DeveloperStudio",
  description:
    "Get a free review of your website and Google visibility, with a plain-English plan. No obligation. For Rotherham, South Yorkshire and UK businesses.",
  alternates: { canonical: "/free-growth-plan/" },
};

const gets = [
  {
    icon: Gauge,
    title: "Website review",
    body: "Speed, how it works on phones, and what stops visitors getting in touch.",
  },
  {
    icon: MapPinned,
    title: "Google visibility check",
    body: "Where you show up for your services in your area, your Google Business Profile, and the competitors above you.",
  },
  {
    icon: ScrollText,
    title: "A plain-English plan",
    body: "What to fix first, the timeline and a fixed price. Yours to keep, even if you never work with us.",
  },
];

const proof = [
  { value: "818", label: "calls from Google Ads", client: "Roadside Hero" },
  { value: "72", label: "leads at £5.45 each", client: "Excite Property" },
  { value: "184", label: "WhatsApp enquiries in 17 days", client: "Blanche Beauty Bar" },
];

const steps = [
  { title: "Send your details", body: "Four quick fields. It takes under a minute." },
  { title: "We review everything", body: "Your website, your Google presence and your local competitors." },
  { title: "Get your plan", body: "By email or WhatsApp, with a call to talk it through if you would like one." },
];

const faqs = [
  {
    q: "Is the growth plan really free?",
    a: "Yes. There is no cost, no card details and no obligation. The plan is yours to keep and use however you like.",
  },
  {
    q: "Do I need a website already?",
    a: "No. If you do not have a website yet, we look at your competitors and your Google visibility and plan a site that suits your business.",
  },
  {
    q: "What happens after I get the plan?",
    a: "You decide. If you want our help, we give you a fixed written quote. If not, there are no pushy follow-up calls.",
  },
  {
    q: "How will you contact me?",
    a: `However you prefer: WhatsApp, email or phone. ${site.replyPromise}.`,
  },
];

export default function FreeGrowthPlanPage() {
  return (
    <main id="main">
      {/* Hero with the form */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] items-start gap-12 px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-20 lg:pb-24">
          <div>
            <p className="hero-in inline-flex items-center gap-2.5 rounded-sm border border-zinc-200 bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-zinc-600 backdrop-blur">
              <span className="relative flex size-2">
                <span className="ping absolute inline-flex size-full rounded-sm bg-brand opacity-70" />
                <span className="relative inline-flex size-2 rounded-sm bg-brand" />
              </span>
              <span className="sm:hidden">Free · No obligation · Fast reply</span>
              <span className="hidden sm:inline">Free · No obligation · {site.replyPromise}</span>
            </p>
            <h1 className="hero-in mt-6 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
              Get your free website and{" "}
              <span className="relative isolate whitespace-nowrap text-brand-dark">
                <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                growth plan
              </span>
            </h1>
            <p className="hero-in mt-6 max-w-[560px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
              Send us your website. We check how it performs and how visible you are on Google, then send you a plain-English
              plan with a fixed price. For businesses in Rotherham, South Yorkshire and across the UK.
            </p>

            <a
              href="#plan-form"
              className="hero-in mt-6 inline-flex h-12 items-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white [animation-delay:220ms] lg:hidden"
            >
              Get my free plan
              <ArrowDown aria-hidden className="size-4" />
            </a>

            <h2 className="hero-in mt-10 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase [animation-delay:260ms]">
              What you get
            </h2>
            <ul className="mt-4 grid gap-3">
              {gets.map((g, i) => (
                <li
                  key={g.title}
                  className="hero-in group flex items-start gap-4 rounded-2xl bg-white/80 p-4 ring-1 ring-brand backdrop-blur transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857]"
                  style={{ animationDelay: `${0.32 + i * 0.1}s` }}
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                    <g.icon aria-hidden className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold text-ink">{g.title}</span>
                    <span className="mt-0.5 block text-[15px] leading-relaxed text-zinc-600">{g.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Proof from real campaigns */}
            <div className="hero-in mt-8 [animation-delay:650ms]">
              <p className="text-[13px] font-semibold text-zinc-500">Recent results for our clients</p>
              <dl className="mt-3 grid grid-cols-3 gap-3">
                {proof.map((p) => (
                  <div key={p.client} className="rounded-2xl bg-ink p-4 text-white">
                    <dt className="sr-only">{p.client}</dt>
                    <dd className="text-2xl font-extrabold text-brand-light sm:text-3xl">{p.value}</dd>
                    <dd className="mt-1 text-[12px] leading-snug text-zinc-300 sm:text-[13px]">{p.label}</dd>
                    <dd className="mt-2 text-[11px] text-zinc-500 sm:text-[12px]">{p.client}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Form: pinned beside the copy on desktop */}
          <div id="plan-form" className="hero-in scroll-mt-24 [animation-delay:200ms] lg:sticky lg:top-24">
            <div className="rounded-3xl bg-white p-6 shadow-[0_40px_80px_-30px_rgb(10_10_10/0.35)] ring-1 ring-brand sm:p-8">
              <p className="text-2xl font-extrabold tracking-tight text-ink">Get your free plan</p>
              <p className="mt-1 mb-6 text-[15px] text-zinc-500">Add your email, phone or both so we can reply.</p>
              <LeadForm source="free-growth-plan" variant="plan" redirectTo="/thank-you/" submitLabel="Send me my free plan" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              How it works
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-4xl">
              Three steps to your plan
            </h2>
          </InView>
          <InView as="ol" className="mt-10 grid gap-5 md:grid-cols-3" threshold={0.2}>
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="reveal-up relative rounded-3xl bg-white p-7 ring-1 ring-brand"
                style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}
              >
                <span className="text-5xl font-extrabold tracking-tight text-brand/20">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-extrabold text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{s.body}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <InView>
            <h2 className="reveal-up text-3xl font-extrabold tracking-[-0.015em] text-ink sm:text-4xl">Quick questions</h2>
          </InView>
          <InView as="ul" className="mt-8 grid gap-4 sm:grid-cols-2" threshold={0.15}>
            {faqs.map((f, i) => (
              <li key={f.q} className="reveal-up rounded-2xl bg-mist p-6" style={{ "--d": `${0.08 + i * 0.08}s` } as CSSProperties}>
                <h3 className="text-[17px] font-bold text-ink">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{f.a}</p>
              </li>
            ))}
          </InView>
        </div>
      </section>

      {/* Prefer to talk */}
      <section className="relative overflow-clip bg-brand-dark py-14 text-white">
        <div aria-hidden className="cta-grid pointer-events-none absolute inset-0" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">Prefer to talk now?</p>
            <p className="mt-1 text-white/80">Call or message us. {site.hours}.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${site.phones.uk.tel}`}
              className="btn-shine inline-flex h-12 items-center gap-2 rounded-sm bg-black px-6 text-[15px] font-bold text-white"
            >
              <Phone aria-hidden className="size-4" />
              Call {site.phones.uk.display}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center gap-2 rounded-sm border-2 border-white/70 px-6 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-brand-dark"
            >
              <WhatsAppIcon className="size-[18px]" />
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
