"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Code2, MapPin, Megaphone, Search, Target } from "lucide-react";
import { billingLabel, plans } from "@/content/pricing";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./icons";

const icons = { code: Code2, search: Search, target: Target, share: Megaphone, map: MapPin };

// Tick the services you need to see a starting total, then ask for a custom offer on WhatsApp.
export function PackageBuilder() {
  const [picked, setPicked] = useState<string[]>(["web-design-development", "seo"]);
  const toggle = (slug: string) => setPicked((p) => (p.includes(slug) ? p.filter((s) => s !== slug) : [...p, slug]));

  const chosen = plans.filter((p) => picked.includes(p.slug));
  const oneOff = chosen.filter((p) => p.billing === "one-off").reduce((n, p) => n + p.from, 0);
  const monthly = chosen.filter((p) => p.billing === "monthly").reduce((n, p) => n + p.from, 0);

  const message = `Hi DeveloperStudio, I'd like a custom offer for: ${chosen.map((p) => p.name).join(", ")}.`;
  const whatsapp = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
      <fieldset>
        <legend className="sr-only">Choose the services you need</legend>
        <ul className="grid gap-3 sm:grid-cols-2">
          {plans.map((p) => {
            const on = picked.includes(p.slug);
            const Icon = icons[p.icon];
            return (
              <li key={p.slug}>
                <label
                  className={`group flex h-full cursor-pointer items-start gap-4 rounded-2xl p-5 transition duration-300 ${
                    on ? "bg-brand-dark/[0.06] ring-2 ring-brand-dark" : "bg-white ring-1 ring-zinc-200 hover:ring-brand"
                  }`}
                >
                  <input type="checkbox" checked={on} onChange={() => toggle(p.slug)} className="peer sr-only" />
                  <span
                    className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-brand/30 ${
                      on ? "bg-brand-dark text-white" : "bg-white ring-1 ring-zinc-300"
                    }`}
                  >
                    {on && <Check aria-hidden className="size-4" strokeWidth={3} />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 font-bold text-ink">
                        <Icon aria-hidden className="size-4 text-brand-dark" />
                        {p.name}
                      </span>
                    </span>
                    <span className="mt-1 block text-[14px] text-zinc-500">
                      From <strong className="text-ink">£{p.from}</strong> {billingLabel(p)}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      {/* Running total */}
      <aside aria-live="polite" className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white lg:sticky lg:top-24 lg:self-start">
        <p className="relative text-[12px] font-bold tracking-[0.16em] text-brand-light uppercase">Your starting price</p>
        {chosen.length === 0 ? (
          <p className="relative mt-4 text-lg text-zinc-300">Tick the services you need to see a starting price.</p>
        ) : (
          <>
            <dl className="relative mt-4 grid gap-4">
              {oneOff > 0 && (
                <div>
                  <dt className="text-[13px] text-zinc-400">One-off, from</dt>
                  <dd key={`o${oneOff}`} className="price-pop text-5xl font-extrabold tracking-tight">
                    £{oneOff.toLocaleString("en-GB")}
                  </dd>
                </div>
              )}
              {monthly > 0 && (
                <div>
                  <dt className="text-[13px] text-zinc-400">Per month, from</dt>
                  <dd key={`m${monthly}`} className="price-pop text-5xl font-extrabold tracking-tight text-brand-light">
                    £{monthly.toLocaleString("en-GB")}
                  </dd>
                </div>
              )}
            </dl>
            <ul className="relative mt-5 grid gap-1.5 border-t border-white/10 pt-5 text-[14px] text-zinc-300">
              {chosen.map((p) => (
                <li key={p.slug} className="flex justify-between gap-3">
                  <span>{p.name}</span>
                  <span className="shrink-0 text-zinc-400">
                    £{p.from} {p.billing === "monthly" ? "/mo" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
        <p className="relative mt-5 text-[13px] leading-relaxed text-zinc-400">
          Starting prices. Your custom offer depends on your business and is fixed in writing before any work starts. Ad spend is
          extra and paid directly to Google or Meta.
        </p>
        <div className="relative mt-6 grid gap-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener"
            aria-disabled={chosen.length === 0}
            className={`btn-shine inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper ${
              chosen.length === 0 ? "pointer-events-none opacity-40" : ""
            }`}
          >
            <WhatsAppIcon className="size-[18px]" />
            Get a custom offer
          </a>
          <Link
            href="/free-growth-plan/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-white/80 px-6 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Or get a free growth plan
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </aside>
    </div>
  );
}
