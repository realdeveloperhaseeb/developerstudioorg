"use client";

import { useState } from "react";
import { Plus, Search, X } from "lucide-react";
import type { Faq } from "@/content/services";
import { site } from "@/content/site";

// Searchable, grouped FAQ. Every answer stays in the HTML; search only hides non-matching items.
export function FaqExplorer({ groups }: { groups: { group: string; items: Faq[] }[] }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string | null>(groups[0]?.items[0]?.q ?? null);

  const q = query.trim().toLowerCase();
  const matches = (f: Faq) => !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
  const total = groups.reduce((n, g) => n + g.items.filter(matches).length, 0);

  return (
    <div>
      {/* Search and group filters */}
      <div className="sticky top-16 z-20 -mx-4 bg-white/90 px-4 py-4 backdrop-blur-lg sm:mx-0 sm:rounded-2xl sm:px-0">
        <label className="relative block">
          <span className="sr-only">Search the questions</span>
          <Search aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, for example cost, contract or SEO"
            className="h-14 w-full rounded-2xl border border-zinc-300 bg-white pr-12 pl-12 text-[16px] text-ink outline-none transition-[border-color,box-shadow] focus:border-brand-dark focus:ring-4 focus:ring-brand/15"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-mist text-zinc-600 hover:text-ink"
            >
              <X className="size-4" />
            </button>
          )}
        </label>
        <div role="group" aria-label="Filter by topic" className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
          {["All", ...groups.map((g) => g.group)].map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={group === g}
              onClick={() => setGroup(g)}
              className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-bold whitespace-nowrap transition-all duration-300 ${
                group === g ? "bg-brand-dark text-white" : "bg-mist text-zinc-600 hover:text-ink"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <p aria-live="polite" className="mt-3 text-[13px] text-zinc-500">
          {q ? `${total} ${total === 1 ? "answer" : "answers"} for "${query.trim()}"` : `${total} questions`}
        </p>
      </div>

      <div className="mt-4 grid gap-12">
        {groups.map((g) => {
          const items = g.items.filter(matches);
          const hidden = (group !== "All" && group !== g.group) || items.length === 0;
          return (
            <section key={g.group} hidden={hidden} aria-labelledby={`faq-group-${g.group}`} className="svc-panel">
              <h2 id={`faq-group-${g.group}`} className="text-2xl font-extrabold tracking-tight text-ink">
                {g.group}
              </h2>
              <ul className="mt-5 grid gap-3">
                {g.items.map((f) => {
                  const isOpen = open === f.q || (!!q && matches(f));
                  const id = f.q.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
                  return (
                    <li
                      key={f.q}
                      hidden={!matches(f)}
                      className={`relative overflow-hidden rounded-2xl transition-colors duration-300 ${isOpen ? "bg-white ring-2 ring-brand" : "bg-white ring-1 ring-zinc-200 hover:ring-brand"}`}
                    >
                      <span aria-hidden className={`absolute top-0 bottom-0 left-0 w-[3px] origin-top bg-brand-dark transition-transform duration-500 ${isOpen ? "scale-y-100" : "scale-y-0"}`} />
                      <h3>
                        <button
                          type="button"
                          id={`q-${id}`}
                          aria-expanded={isOpen}
                          aria-controls={`a-${id}`}
                          onClick={() => setOpen(open === f.q ? null : f.q)}
                          className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                        >
                          <span className="flex-1 text-[17px] leading-snug font-bold text-ink">{f.q}</span>
                          <span
                            aria-hidden
                            className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-brand-dark text-white" : "bg-mist text-zinc-600"}`}
                          >
                            <Plus className="size-4" strokeWidth={2.5} />
                          </span>
                        </button>
                      </h3>
                      <div
                        id={`a-${id}`}
                        role="region"
                        aria-labelledby={`q-${id}`}
                        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                      >
                        <div className="overflow-hidden" inert={!isOpen}>
                          <p className="px-5 pb-6 text-[16px] leading-relaxed text-zinc-600 sm:px-6">{f.a}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        {total === 0 && (
          <div className="rounded-3xl bg-mist p-8 text-center">
            <p className="text-xl font-extrabold text-ink">No answers for that yet</p>
            <p className="mt-2 text-[16px] text-zinc-600">
              Ask us directly on{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener" className="font-bold text-brand-dark underline underline-offset-2">
                WhatsApp
              </a>{" "}
              or call{" "}
              <a href={`tel:${site.phones.uk.tel}`} className="font-bold text-brand-dark underline underline-offset-2">
                {site.phones.uk.display}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
