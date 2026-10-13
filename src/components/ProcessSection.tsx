import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, CalendarCheck, ClipboardList, Rocket, TrendingUp } from "lucide-react";
import { site } from "@/content/site";
import { InView } from "./InView";

const steps = [
  {
    icon: CalendarCheck,
    time: "Day 1",
    title: "Free discovery call",
    body: "A 30-minute call about your business, customers and goals. We look at your website and Google presence before we speak.",
    get: "An honest view of what is working and what is not",
  },
  {
    icon: ClipboardList,
    time: "Within a week",
    title: "Your growth plan",
    body: "A written plan covering what we will do, in what order, the timeline and a fixed price.",
    get: "A fixed quote with no surprises",
  },
  {
    icon: Rocket,
    time: "Weeks 2 to 6",
    title: "Build and launch",
    body: "We design and build your site or set up tracking and campaigns, test everything, then go live.",
    get: "Website and accounts set up in your name",
  },
  {
    icon: TrendingUp,
    time: "Every month",
    title: "Grow and report",
    body: "We keep improving what works and send a plain-English report on calls, leads and cost.",
    get: "A monthly report and review call",
  },
];

// Each marker lights up as the timeline line reaches it.
const LINE_SECONDS = 1.6;

export function ProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="mx-auto max-w-2xl text-center">
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
            <span className="h-px w-6 bg-brand-dark" />
            How it works
            <span className="h-px w-6 bg-brand-dark" />
          </p>
          <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-5xl">
            From first call to more enquiries
          </h2>
          <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">
            Four clear steps with real timescales, so you always know what happens next.
          </p>
        </InView>

        <InView as="div" className="relative mt-16" threshold={0.3}>
          {/* Timeline: horizontal on desktop, vertical on phones. */}
          <div aria-hidden className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-[3px] rounded-full bg-zinc-200 lg:block">
            <div className="timeline-x h-full rounded-full bg-gradient-to-r from-brand-dark to-brand-light" style={{ "--t": `${LINE_SECONDS}s` } as CSSProperties} />
          </div>
          <div aria-hidden className="absolute top-7 bottom-16 left-7 w-[3px] rounded-full bg-zinc-200 lg:hidden">
            <div className="timeline-y w-full rounded-full bg-gradient-to-b from-brand-dark to-brand-light" style={{ "--t": `${LINE_SECONDS}s` } as CSSProperties} />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => {
              const reach = 0.2 + (i / (steps.length - 1)) * LINE_SECONDS;
              return (
                <li
                  key={s.title}
                  className="group relative grid grid-cols-[56px_1fr] gap-5 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                  style={{ "--d": `${reach}s` } as CSSProperties}
                >
                  <div className="lg:flex lg:justify-center">
                    <span className="step-dot relative z-10 flex size-14 items-center justify-center rounded-2xl bg-brand-dark text-white shadow-[0_10px_30px_-10px_rgb(4_120_87/0.8)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
                      <s.icon aria-hidden className="size-6" />
                      <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white ring-4 ring-white">
                        {i + 1}
                      </span>
                    </span>
                  </div>

                  <div className="reveal-up lg:mt-8 lg:flex lg:flex-1 lg:flex-col lg:items-center">
                    <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-[12px] font-bold tracking-wide text-brand-dark">
                      {s.time}
                    </span>
                    <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 lg:mx-auto lg:mb-4 lg:max-w-[260px]">{s.body}</p>
                    <p className="mt-4 inline-flex items-start gap-2 rounded-xl bg-mist lg:mt-auto lg:translate-y-0 px-3.5 py-2.5 text-left text-[14px] font-medium text-ink ring-1 ring-brand/20">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand-dark" />
                      {s.get}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </InView>

        <InView className="mt-16 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
          <p className="reveal-up text-lg text-zinc-600">
            <strong className="text-ink">Step one is free.</strong> Book your discovery call today.
          </p>
          <div className="reveal-up flex flex-wrap justify-center gap-3 [--d:0.1s]">
            <Link
              href="/free-growth-plan/"
              className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
            >
              Get your free growth plan
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${site.phones.uk.tel}`}
              className="inline-flex h-12 items-center rounded-full border border-zinc-300 px-6 text-[15px] font-bold text-ink transition-colors hover:border-ink"
            >
              Call {site.phones.uk.display}
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
}
