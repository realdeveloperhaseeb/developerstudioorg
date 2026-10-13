import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { InView } from "./InView";

// Built from what buyers worry about in the SERP research (Reddit and Quora threads):
// hidden outsourcing, agencies owning accounts, marked-up ad spend, lock-ins and vague reports.
// Rows marked [confirm] in the plan must match how DeveloperStudio really works.
const rows = [
  {
    topic: "Your accounts",
    watch: "The agency owns your ad account, domain or website",
    us: "Everything set up in your name from day one",
  },
  {
    topic: "Ad spend",
    watch: "Billed through the agency, sometimes with a markup",
    us: "Paid straight to Google and Meta, with our fee kept separate",
  },
  {
    topic: "Contracts",
    watch: "Six to twelve month lock-ins",
    us: "Rolling monthly agreements on ongoing work",
  },
  {
    topic: "Who does the work",
    watch: "Freelancers or outsourcing you never hear about",
    us: "A named UK team and PK team, stated openly",
  },
  {
    topic: "Reporting",
    watch: "Clicks, impressions and jargon",
    us: "Calls, leads and cost per enquiry in plain English",
  },
  {
    topic: "Proof",
    watch: "Unnamed testimonials and big claims",
    us: "Named case studies with ad account screenshots",
  },
  {
    topic: "Getting hold of us",
    watch: "Office hours and a ticket queue",
    us: "Phone and WhatsApp 24/7 across two teams",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative overflow-clip bg-black py-20 text-white sm:py-28">
      <div aria-hidden className="drift-b pointer-events-none absolute top-[10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Intro, sticky beside the comparison on desktop */}
        <InView className="lg:sticky lg:top-28 lg:self-start">
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
            <span className="h-px w-6 bg-brand-light" />
            Why DeveloperStudio
          </p>
          <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-5xl">
            An agency you can actually check
          </h2>
          <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-400 [--d:0.16s]">
            Business owners in Rotherham and across the UK tell us the same worries about agencies. Here is how we handle each
            one.
          </p>
          <div className="reveal-up mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 [--d:0.24s]">
            <p className="text-lg font-bold">Online, so you pay for the work, not an office</p>
            <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
              We work with you by phone, WhatsApp and video call. No high-street rent means more of your budget goes into
              results.
            </p>
          </div>
          <div className="reveal-up mt-8 [--d:0.3s]">
            <Link
              href="/free-growth-plan/"
              className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
            >
              Get your free growth plan
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </InView>

        {/* Comparison */}
        <InView threshold={0.1}>
          <div className="reveal-up relative overflow-hidden rounded-3xl ring-1 ring-white/10">
            {/* Column headings (desktop) */}
            <div className="hidden grid-cols-[1fr_1fr] md:grid">
              <p className="px-6 py-5 text-[13px] font-bold tracking-[0.14em] text-zinc-500 uppercase">What to watch out for</p>
              <p className="relative px-6 py-5 text-[13px] font-bold tracking-[0.14em] text-brand-light uppercase">
                How we work
              </p>
            </div>

            {/* Green column glow sweeps down when the table comes into view. */}
            <div aria-hidden className="col-sweep pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-b from-brand-dark/25 via-brand-dark/10 to-transparent md:block" />

            <ul className="relative">
              {rows.map((r, i) => (
                <li
                  key={r.topic}
                  className="cmp-row group grid border-t border-white/10 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[1fr_1fr]"
                  style={{ "--d": `${0.15 + i * 0.09}s` } as CSSProperties}
                >
                  <p className="px-6 pt-5 text-[12px] font-bold tracking-[0.14em] text-zinc-500 uppercase md:col-span-2 md:pt-4 md:pb-0">
                    {r.topic}
                  </p>
                  <div className="flex items-start gap-3 px-6 pt-3 pb-2 md:pb-5">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-zinc-500">
                      <X aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-relaxed text-zinc-500 line-through decoration-zinc-600/70">
                      <span className="sr-only">Watch out for: </span>
                      {r.watch}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 px-6 pt-2 pb-5 md:pt-3">
                    <span className="cmp-check mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white shadow-[0_0_0_4px_rgb(4_120_87/0.2)]">
                      <Check aria-hidden className="size-3.5" strokeWidth={3.5} />
                    </span>
                    <span className="text-[15px] leading-relaxed font-semibold text-white">
                      <span className="sr-only">How we work: </span>
                      {r.us}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </InView>
      </div>
    </section>
  );
}
