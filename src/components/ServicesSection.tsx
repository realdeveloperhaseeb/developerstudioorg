"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowRight, Check, Code2, Megaphone, Search, Target } from "lucide-react";
import { services } from "@/content/services";
import { serviceVisuals } from "@/content/service-visuals";
import { InView } from "./InView";

const icons = { code: Code2, search: Search, target: Target, share: Megaphone };

const visuals = serviceVisuals;

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-clip bg-black py-20 text-white sm:py-28">
      <div aria-hidden className="drift-a pointer-events-none absolute top-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
              <span className="h-px w-6 bg-brand-light" />
              What we do
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-5xl">
              Web design, SEO and ads for Rotherham businesses
            </h2>
            <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-400 [--d:0.16s]">
              Four services, one accountable team. Pick one or combine them. Every service is measured on enquiries and sales.
            </p>
          </div>
          <div className="reveal-up [--d:0.2s]">
            <Link
              href="/services/"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-[15px] font-bold text-white transition-colors hover:border-brand-light hover:text-brand-light"
            >
              All services
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </InView>

        {/* Desktop: the list and prompt stay pinned on the left while the taller panel scrolls.
            Phones: an accordion, each panel opening under its title. Every panel is in the HTML;
            inactive ones use the hidden attribute. */}
        <InView className="mt-14 grid gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-12" threshold={0.15}>
          <div className="hidden lg:sticky lg:top-24 lg:col-start-1 lg:row-start-1 lg:block lg:self-start">
            <div className="grid gap-2">
              {services.map((s, i) => (
                <ServiceButton key={s.slug} index={i} on={active === i} onSelect={setActive} hoverSelects />
              ))}
            </div>
            <NotSure className="mt-6" />
          </div>

          {services.map((s, i) => (
            <div key={s.slug} className="contents">
              <ServiceButton index={i} on={active === i} onSelect={setActive} idPrefix="svc-btn" className="lg:hidden" />
              <div
                role="region"
                id={`svc-panel-${i}`}
                aria-labelledby={`svc-btn-${i}`}
                hidden={active !== i}
                className="svc-panel lg:col-start-2 lg:row-start-1"
              >
                <ServicePanel index={i} />
              </div>
            </div>
          ))}

          <NotSure className="mt-4 lg:hidden" />
        </InView>
      </div>
    </section>
  );
}

function ServiceButton({
  index,
  on,
  onSelect,
  hoverSelects,
  idPrefix,
  className = "",
}: {
  index: number;
  on: boolean;
  onSelect: (i: number) => void;
  hoverSelects?: boolean;
  idPrefix?: string;
  className?: string;
}) {
  const s = services[index];
  const Icon = icons[s.icon];
  return (
    <button
      type="button"
      id={idPrefix ? `${idPrefix}-${index}` : undefined}
      aria-expanded={on}
      aria-controls={`svc-panel-${index}`}
      onClick={() => onSelect(index)}
      onMouseEnter={hoverSelects ? () => onSelect(index) : undefined}
      data-on={on}
      style={{ "--d": `${0.1 + index * 0.08}s` } as CSSProperties}
      className={`reveal-up group relative flex w-full items-center gap-5 overflow-hidden rounded-2xl px-5 py-5 text-left transition-colors duration-300 data-[on=true]:bg-white/[0.06] ${className}`}
    >
      {/* Green bar grows on the active item. */}
      <span
        aria-hidden
        className={`absolute top-3 bottom-3 left-0 w-[3px] origin-center rounded-full bg-brand-light transition-transform duration-500 ${on ? "scale-y-100" : "scale-y-0"}`}
      />
      <span className="text-[13px] font-semibold text-zinc-500 tabular-nums">0{index + 1}</span>
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
          on ? "bg-brand-dark text-white" : "bg-white/[0.06] text-zinc-400 group-hover:text-white"
        }`}
      >
        <Icon aria-hidden className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-xl font-bold tracking-tight transition-colors duration-300 sm:text-2xl ${on ? "text-white" : "text-zinc-400 group-hover:text-white"}`}>
          {s.name}
        </span>
        <span className="mt-0.5 block text-[14px] text-zinc-500">{s.card}</span>
      </span>
      <ArrowRight
        aria-hidden
        className={`size-5 shrink-0 transition-all duration-300 ${on ? "translate-x-0 text-brand-light opacity-100" : "-translate-x-2 opacity-0"}`}
      />
    </button>
  );
}

function NotSure({ className = "" }: { className?: string }) {
  return (
    <div className={`reveal-up rounded-2xl border border-white/10 p-6 [--d:0.45s] ${className}`}>
      <p className="text-lg font-bold">Not sure which service you need?</p>
      <p className="mt-1.5 text-[15px] text-zinc-400">Send us your website. We will tell you where the quickest wins are, free and in plain English.</p>
      <Link href="/free-growth-plan/" className="group mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-brand-light">
        Get your free growth plan
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}

function ServicePanel({ index }: { index: number }) {
  const s = services[index];
  const v = visuals[s.slug];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white text-ink ring-1 ring-brand">
      <div className="relative overflow-hidden bg-mist p-5 sm:p-7">
        <div aria-hidden className="dot-grid-soft absolute inset-0" />
        {v.frame === "browser" ? (
          <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_-20px_rgb(10_10_10/0.35)] ring-1 ring-zinc-200">
            <div className="flex items-center gap-1.5 border-b border-zinc-200 px-3 py-2">
              <span className="size-2 rounded-full bg-zinc-300" />
              <span className="size-2 rounded-full bg-zinc-300" />
              <span className="size-2 rounded-full bg-zinc-300" />
            </div>
            {/* The full-page screenshot slowly scrolls inside the window. */}
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image src={v.src} alt={v.alt} fill sizes="(min-width: 1024px) 620px, 92vw" className="scroll-shot object-cover object-top" />
            </div>
          </div>
        ) : (
          <div className="sheen relative overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_-20px_rgb(10_10_10/0.35)] ring-1 ring-zinc-200">
            <Image src={v.src} alt={v.alt} width={v.w} height={v.h} sizes="(min-width: 1024px) 620px, 92vw" className="h-auto w-full" />
          </div>
        )}
        <p className="relative mt-3 text-[13px] text-zinc-500">{v.caption}</p>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-extrabold tracking-tight">{s.name}</h3>
        <p className="mt-2 text-[16px] leading-relaxed text-zinc-600">{s.outcome}</p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {s.included.slice(0, 4).map((item, j) => (
            <li key={item} className="svc-item flex items-start gap-2.5 text-[15px] text-zinc-700" style={{ animationDelay: `${0.1 + j * 0.07}s` }}>
              <span className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                <Check aria-hidden className="size-3" strokeWidth={3.5} />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <Link
            href={`/services/${s.slug}/`}
            className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
          >
            Explore {s.short}
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
