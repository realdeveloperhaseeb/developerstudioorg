import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { site } from "@/content/site";
import { getCaseStudy } from "@/content/case-studies";
import { WhatsAppIcon } from "./icons";
import { Tilt } from "./Tilt";
import { Typewriter } from "./Typewriter";

const roadside = getCaseStudy("roadside-hero-google-ads")!;
const excite = getCaseStudy("excite-property-meta-leads")!;
const blanche = getCaseStudy("blanche-beauty-whatsapp-leads")!;

const trust = ["Free, no obligation", "You own your website and ad accounts", "Ad spend paid straight to Google and Meta"];

// Animated number: real value in the HTML, CSS counter for the visible count-up.
function CountUp({ to, delay = 0.5 }: { to: number; delay?: number }) {
  return (
    <>
      <span aria-hidden className="count" style={{ "--to": to, "--count-delay": `${delay}s` } as CSSProperties} />
      <span className="sr-only">{to}</span>
    </>
  );
}

// Each word sits in a mask and rises into place, one after another.
function Words({ text, start, step = 0.07 }: { text: string; start: number; step?: number }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className="word-mask">
            <span style={{ animationDelay: `${start + i * step}s` }}>{w}</span>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Graph-paper grid lines behind the hero. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="hero-in inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] text-brand-dark uppercase sm:text-[13px]">
            <span aria-hidden className="h-0.5 w-8 bg-brand-dark" />
            <span>
              Online agency · Rotherham<span className="hidden sm:inline"> · UK-wide</span>
            </span>
          </p>

          <h1 className="mt-6 text-[2.75rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.4rem]">
            <Words text="Digital Marketing Agency in" start={0.1} />
            <span className="word-mask">
              <span className="relative isolate whitespace-nowrap text-brand-dark" style={{ animationDelay: "0.38s" }}>
                <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                Rotherham
              </span>
            </span>
          </h1>

          <p className="hero-in mt-5 text-xl font-semibold text-ink [animation-delay:420ms] sm:text-2xl">
            Marketing that brings in{" "}
            <Typewriter words={["phone calls", "WhatsApp leads", "booked jobs", "online sales"]} className="text-brand-dark" />
          </p>

          <p className="hero-in mt-4 max-w-[560px] text-lg leading-relaxed text-zinc-600 [animation-delay:450ms]">
            We build fast websites and run SEO, Google Ads and Meta ads that bring in calls, WhatsApp messages and enquiries, not
            just traffic. One accountable team across the UK and Pakistan.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 [animation-delay:550ms] sm:flex-row sm:items-center">
            <Link
              href="/free-growth-plan/"
              className="btn-shine halo group inline-flex h-14 items-center justify-center gap-2 rounded-sm bg-brand-dark px-7 text-[16px] font-bold text-white transition-colors hover:bg-brand-deeper"
            >
              Get your free growth plan
              <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${site.phones.uk.tel}`}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-sm border-2 border-ink bg-white px-7 text-[16px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Phone aria-hidden className="size-[18px] transition-transform duration-300 group-hover:-rotate-12" />
              Call {site.phones.uk.display}
            </a>
          </div>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
            className="hero-in group mt-4 inline-flex items-center gap-2 text-[15px] font-semibold text-zinc-600 [animation-delay:600ms] hover:text-ink"
          >
            <WhatsAppIcon className="size-[18px] text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
              Prefer WhatsApp? Message us
            </span>
          </a>

          <ul className="mt-9 grid gap-2.5 border-t border-zinc-200 pt-7 text-[15px] text-zinc-600 sm:grid-cols-3 sm:gap-4">
            {trust.map((t, i) => (
              <li key={t} className="hero-in flex items-start gap-2" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm bg-brand-dark text-white">
                  <Check aria-hidden className="size-2.5" strokeWidth={4} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Proof: real campaign results. */}
        <div className="relative lg:col-span-5">
          <Tilt className="relative mx-auto max-w-[460px] lg:mr-0">
            <div className="hero-in brackets relative [animation-delay:300ms]">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-dark" />
              <article className="relative rounded-2xl bg-white p-6 shadow-[0_30px_70px_-25px_rgb(10_10_10/0.3)] ring-1 ring-zinc-200 sm:p-7 sm:pb-14">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[14px] font-semibold text-ink">{roadside.client}</p>
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-mist px-2.5 py-1 text-[12px] font-semibold text-zinc-600">
                    <span className="size-1.5 rounded-sm bg-[#fbbc04]" />
                    {roadside.platform}
                  </span>
                </div>
                <p className="mt-5 text-[64px] leading-none font-extrabold tracking-tight text-ink">
                  <CountUp to={818} delay={0.6} />
                </p>
                <p className="mt-2 text-[16px] font-medium text-zinc-600">phone calls from Google Ads, built from scratch</p>
                <dl className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-mist px-4 py-3">
                    <dt className="text-[12px] text-zinc-500">Cost per call</dt>
                    <dd className="text-lg font-bold text-ink">~$12.71</dd>
                  </div>
                  <div className="rounded-xl bg-mist px-4 py-3">
                    <dt className="text-[12px] text-zinc-500">Period</dt>
                    <dd className="text-lg font-bold text-ink">Feb to Aug 2026</dd>
                  </div>
                </dl>
                <div className="sheen mt-5 rounded-lg ring-1 ring-zinc-200">
                  <Image
                    src={roadside.images[0].src}
                    alt={roadside.images[0].alt}
                    width={roadside.images[0].w}
                    height={roadside.images[0].h}
                    preload
                    loading="eager"
                    sizes="(min-width: 1024px) 400px, 90vw"
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="mt-2 text-[11px] text-zinc-400">Screenshot from the Google Ads account</p>
              </article>
            </div>

            <div className="hero-in relative mt-4 w-[78%] [animation-delay:650ms] sm:-mt-6 sm:-ml-8 lg:-ml-14" style={{ transform: "translateZ(40px)" }}>
              <article className="float-slower rounded-2xl border-l-4 border-brand-light bg-black p-5 text-white shadow-[0_24px_50px_-20px_rgb(10_10_10/0.55)]">
                <p className="flex items-center gap-2 text-[13px] text-zinc-400">
                  <span className="size-1.5 rounded-sm bg-[#0866ff]" />
                  {excite.client} · {excite.platform}
                </p>
                <p className="mt-1.5 text-[15px] text-white">
                  <span className="text-3xl font-extrabold">
                    <CountUp to={72} delay={1} />
                  </span>{" "}
                  <span className="font-semibold">leads at £5.45 each</span>
                </p>
              </article>
            </div>

            <div className="toast-in relative mt-4 flex sm:-mt-2 sm:justify-end">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white py-2.5 pr-4 pl-2.5 shadow-[0_16px_40px_-18px_rgb(10_10_10/0.35)] ring-1 ring-zinc-200">
                <span className="relative inline-flex size-9 items-center justify-center rounded-sm bg-[#25D366] text-white">
                  <WhatsAppIcon className="size-5" />
                  <span className="absolute -top-0.5 -right-0.5 flex size-3">
                    <span className="ping absolute inline-flex size-full rounded-sm bg-brand opacity-70" />
                    <span className="relative inline-flex size-3 rounded-sm border-2 border-white bg-brand" />
                  </span>
                </span>
                <span className="text-[14px] leading-tight">
                  <strong className="block text-ink">184 WhatsApp enquiries</strong>
                  <span className="text-zinc-500">{blanche.client.split(" &")[0]} · Meta Ads</span>
                </span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>

      <a
        href="#results"
        aria-label="Scroll to results"
        className="relative mx-auto -mt-8 mb-8 hidden w-fit flex-col items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-zinc-400 uppercase transition-colors hover:text-ink lg:flex"
      >
        <span className="relative h-9 w-[22px] rounded-[11px] border-2 border-current">
          <span className="scroll-dot absolute top-1.5 left-1/2 h-2 w-[3px] -translate-x-1/2 bg-current" />
        </span>
        Scroll
      </a>
    </section>
  );
}
