import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Mail, Phone, Search } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { InView } from "./InView";

/* Illustrations. They show how each fix works; they are not client data. */

function SpeedVisual() {
  return (
    <div className="relative flex h-full flex-col items-center justify-end pb-6">
      <svg viewBox="0 0 200 110" className="w-[210px]" aria-hidden>
        <defs>
          <linearGradient id="gauge" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path d="M 15 100 A 85 85 0 0 1 185 100" fill="none" stroke="#e4e4e7" strokeWidth="14" strokeLinecap="round" />
        <path
          className="anim gauge-fill"
          d="M 15 100 A 85 85 0 0 1 185 100"
          fill="none"
          stroke="url(#gauge)"
          strokeWidth="14"
          strokeLinecap="round"
          pathLength={100}
        />
        <g className="anim gauge-needle" style={{ transformOrigin: "100px 100px" }}>
          <line x1="100" y1="100" x2="100" y2="34" stroke="#0a0a0a" strokeWidth="4" strokeLinecap="round" />
        </g>
        <circle cx="100" cy="100" r="8" fill="#0a0a0a" />
      </svg>
      <div className="mt-2 flex w-[210px] justify-between text-[12px] font-semibold">
        <span className="text-red-500">Slow</span>
        <span className="text-brand-dark">Fast</span>
      </div>
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="flex h-full flex-col justify-center px-6">
      <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm ring-1 ring-zinc-200">
        <Search aria-hidden className="size-4 shrink-0 text-zinc-400" />
        <span className="anim typing overflow-hidden text-[13px] font-medium whitespace-nowrap text-ink">web design rotherham</span>
        <span className="anim caret h-4 w-px bg-ink" />
      </div>
      <div className="relative mt-3 h-[142px]">
        {/* Two competitor results and "your business", which climbs from third to first. */}
        <div className="anim serp-down-1 absolute inset-x-0 top-0 rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">
          <span className="block h-2 w-24 rounded bg-zinc-300" />
          <span className="mt-1.5 block h-1.5 w-40 rounded bg-zinc-200" />
        </div>
        <div className="anim serp-down-2 absolute inset-x-0 top-[50px] rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">
          <span className="block h-2 w-20 rounded bg-zinc-300" />
          <span className="mt-1.5 block h-1.5 w-36 rounded bg-zinc-200" />
        </div>
        <div className="anim serp-up absolute inset-x-0 top-[100px] z-10 rounded-lg bg-brand-dark px-3 py-2 text-white shadow-lg">
          <span className="block text-[12px] font-bold">Your business</span>
          <span className="mt-1 block h-1.5 w-32 rounded bg-white/40" />
        </div>
      </div>
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2.5 px-6">
      <div className="flex flex-wrap justify-center gap-2">
        <span className="anim pop [--d:0.1s] inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-[13px] font-bold text-white">
          <Phone aria-hidden className="size-3.5" /> Call
        </span>
        <span className="anim pop [--d:0.3s] inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-2 text-[13px] font-bold text-white">
          <WhatsAppIcon className="size-3.5" /> WhatsApp
        </span>
        <span className="anim pop [--d:0.5s] inline-flex items-center rounded-full bg-brand-dark px-3.5 py-2 text-[13px] font-bold text-white">
          Get a quote
        </span>
      </div>
      <div className="anim notify mt-3 flex w-full max-w-[240px] items-center gap-3 rounded-xl bg-white p-3 shadow-md ring-1 ring-zinc-200">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-dark">
          <Mail aria-hidden className="size-4" />
        </span>
        <span className="text-[12px] leading-tight">
          <strong className="block text-ink">New enquiry</strong>
          <span className="text-zinc-500">From your website</span>
        </span>
      </div>
    </div>
  );
}

const problems = [
  {
    pain: "Your site is slow on phones",
    detail: "Most visitors arrive on a phone. A slow page loses them before it even loads.",
    fix: "We build mobile-first and test speed against Google's Core Web Vitals before launch.",
    Visual: SpeedVisual,
  },
  {
    pain: "You can't be found on Google",
    detail: "If you are not on page one for your service and town, customers find a competitor instead.",
    fix: "Local and technical SEO, a strong Google Business Profile and pages that answer what people search.",
    Visual: SearchVisual,
  },
  {
    pain: "Visitors don't get in touch",
    detail: "People look around, can't see what to do next, and leave without calling.",
    fix: "Clear offers, tap-to-call, WhatsApp and short forms on every key page, with every enquiry tracked.",
    Visual: ContactVisual,
  },
];

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="max-w-2xl">
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
            <span className="h-px w-6 bg-brand-dark" />
            Sound familiar?
          </p>
          <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-5xl">
            Is your website bringing in enquiries?
          </h2>
          <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">
            Most small business websites look fine but quietly lose customers. These are the three problems we fix most often.
          </p>
        </InView>

        <InView as="ul" className="mt-14 grid gap-6 md:grid-cols-3" threshold={0.2}>
          {problems.map((p, i) => (
            <li key={p.pain} className="reveal-up" style={{ "--d": `${0.1 + i * 0.15}s` } as CSSProperties}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)] hover:ring-2">
              <div
                className="relative h-[210px] overflow-hidden bg-mist"
                style={{ "--base": `${0.4 + i * 0.15}s` } as CSSProperties}
              >
                <div aria-hidden className="dot-grid-soft absolute inset-0" />
                <div className="relative h-full">
                  <p.Visual />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[13px] font-semibold text-zinc-400">Problem 0{i + 1}</p>
                <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-ink">{p.pain}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{p.detail}</p>
                <div className="mt-auto pt-6">
                  <div className="rounded-2xl bg-brand/[0.07] p-4 ring-1 ring-brand/15">
                    <p className="text-[12px] font-bold tracking-[0.14em] text-brand-dark uppercase">How we fix it</p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink">{p.fix}</p>
                  </div>
                </div>
              </div>
              </div>
            </li>
          ))}
        </InView>

        <InView className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="reveal-up text-lg text-zinc-600">
            Not sure which one is holding you back? <strong className="text-ink">We will tell you for free.</strong>
          </p>
          <div className="reveal-up [--d:0.1s]">
            <Link
              href="/free-growth-plan/"
              className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
            >
              Get your free growth plan
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </InView>
      </div>
    </section>
  );
}
