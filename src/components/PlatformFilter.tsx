"use client";

import { useState, type ReactNode } from "react";

// Filters case study cards by ad platform. Every card stays in the HTML; filtered-out ones are hidden.
export function PlatformFilter({ items }: { items: { platform: string; node: ReactNode }[] }) {
  const platforms = ["All", ...Array.from(new Set(items.map((i) => i.platform)))];
  const [active, setActive] = useState("All");
  const count = (p: string) => (p === "All" ? items.length : items.filter((i) => i.platform === p).length);

  return (
    <div>
      <div role="group" aria-label="Filter by platform" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {platforms.map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={active === p}
            onClick={() => setActive(p)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${
              active === p ? "bg-brand-dark text-white shadow-[0_8px_24px_-8px_rgb(4_120_87/0.9)]" : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:text-ink hover:ring-brand"
            }`}
          >
            {p}
            <span className={`rounded-full px-2 py-0.5 text-[12px] ${active === p ? "bg-white/20" : "bg-mist"}`}>{count(p)}</span>
          </button>
        ))}
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <li key={i} hidden={active !== "All" && it.platform !== active} className="svc-panel">
            {it.node}
          </li>
        ))}
      </ul>
    </div>
  );
}
