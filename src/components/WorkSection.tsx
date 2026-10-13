"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { moreWork, projects } from "@/content/projects";
import { Carousel } from "./Carousel";
import { InView } from "./InView";

// UK sites first for a UK audience.
const live = [...projects].sort((a, b) => Number(b.uk) - Number(a.uk));

export function WorkSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-28">
      <div aria-hidden className="drift-a pointer-events-none absolute right-[-10%] bottom-[10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
              <span className="h-px w-6 bg-brand-light" />
              Websites we built
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-5xl">
              Live sites for real businesses
            </h2>
            <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-400 [--d:0.16s]">
              Pick a project to see it on desktop and phone. The screen scrolls through the real site.
            </p>
          </div>
          <div className="reveal-up [--d:0.2s]">
            <Link
              href="/work/"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-[15px] font-bold text-white transition-colors hover:border-brand-light hover:text-brand-light"
            >
              See all work
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </InView>

        {/* Project tabs. All panels are in the HTML; inactive ones are hidden. */}
        <InView className="mt-12" threshold={0.15}>
          <div role="tablist" aria-label="Live websites" className="reveal-up no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            {live.map((p, i) => (
              <button
                key={p.slug}
                role="tab"
                type="button"
                id={`work-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`work-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  const next = e.key === "ArrowRight" ? (i + 1) % live.length : e.key === "ArrowLeft" ? (i - 1 + live.length) % live.length : -1;
                  if (next < 0) return;
                  e.preventDefault();
                  setActive(next);
                  document.getElementById(`work-tab-${next}`)?.focus();
                }}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${
                  active === i ? "bg-brand-dark text-white shadow-[0_8px_24px_-8px_rgb(4_120_87/0.9)]" : "bg-white/[0.06] text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {p.client}
              </button>
            ))}
          </div>

          {live.map((p, i) => (
            <div
              key={p.slug}
              role="tabpanel"
              id={`work-panel-${i}`}
              aria-labelledby={`work-tab-${i}`}
              hidden={active !== i}
              className="svc-panel mt-8 grid items-center gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14"
            >
              {/* Device mockup */}
              <div className="reveal-up group relative pr-10 pb-10 sm:pr-16 sm:pb-12">
                <div
                  aria-hidden
                  className="absolute inset-[10%] rounded-full opacity-40 blur-[90px] transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: p.accent }}
                />
                <div className="relative overflow-hidden rounded-xl bg-zinc-900 shadow-[0_40px_90px_-30px_rgb(0_0_0/0.9)] ring-1 ring-white/10">
                  <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#febc2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-zinc-400">
                      {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-white">
                    <Image
                      src={p.desktop}
                      alt={`Website design for ${p.client} built by DeveloperStudio, desktop view`}
                      fill
                      sizes="(min-width: 1024px) 640px, 90vw"
                      className="scroll-shot object-cover object-top group-hover:[animation-play-state:paused]"
                    />
                  </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[24%] min-w-[92px] rounded-[1.6rem] border-[5px] border-zinc-800 bg-zinc-800 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.2rem] bg-white">
                    <Image
                      src={p.mobile}
                      alt={`Website design for ${p.client} built by DeveloperStudio, mobile view`}
                      fill
                      sizes="160px"
                      className="object-cover object-top"
                    />
                    <span aria-hidden className="absolute top-1.5 left-1/2 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black" />
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="reveal-up [--d:0.12s]">
                <p className="text-[14px] text-zinc-400">
                  {p.sector} · {p.location}
                </p>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{p.client}</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-zinc-300">{p.summary}</p>
                <ul className="mt-6 grid gap-2.5">
                  {p.built.slice(0, 4).map((b, j) => (
                    <li key={b} className="svc-item flex items-start gap-3 text-[15px] text-zinc-300" style={{ animationDelay: `${0.1 + j * 0.07}s` }}>
                      <span className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                        <Check aria-hidden className="size-3" strokeWidth={3.5} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-[13px] font-medium text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="btn-shine group/live mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
                >
                  Visit the live site
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </InView>

        {/* Older builds from the portfolio images */}
        <InView className="mt-24 border-t border-white/10 pt-16" threshold={0.1}>
          <div className="reveal-up flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">More websites we have built</h3>
              <p className="mt-2 text-[16px] text-zinc-400">Swipe or use the arrows to browse.</p>
            </div>
          </div>
          <div className="reveal-up mt-10 [--d:0.1s]">
            <Carousel label="More websites we have built" slideClass="w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
              {moreWork.map((w) => (
                <figure key={w.src} className="group">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow duration-500 group-hover:ring-brand-light/60">
                    <Image
                      src={w.src}
                      alt={`${w.title} website, designed and built by DeveloperStudio`}
                      width={w.w}
                      height={w.h}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 85vw"
                      className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-lg font-bold">{w.title}</span>
                    <span className="shrink-0 rounded-full bg-white/[0.06] px-3 py-1 text-[12px] text-zinc-400">{w.tag}</span>
                  </figcaption>
                </figure>
              ))}
            </Carousel>
          </div>
        </InView>
      </div>
    </section>
  );
}
