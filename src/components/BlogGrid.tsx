"use client";

import { useState, type ReactNode } from "react";

// Category filter for the blog. Every card stays in the HTML; filtered-out cards are hidden.
export function BlogGrid({ items }: { items: { category: string; node: ReactNode }[] }) {
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const [active, setActive] = useState("All");
  return (
    <div>
      <div role="group" aria-label="Filter by topic" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${
              active === c ? "bg-brand-dark text-white shadow-[0_8px_24px_-8px_rgb(4_120_87/0.9)]" : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:text-ink hover:ring-brand"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <li key={i} hidden={active !== "All" && it.category !== active} className="svc-panel">
            {it.node}
          </li>
        ))}
      </ul>
    </div>
  );
}
