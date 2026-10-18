"use client";

import { useEffect, useState } from "react";

// Table of contents that highlights the section in view, with a reading progress bar.
export function LegalToc({ items, articleId = "legal-article" }: { items: { id: string; heading: string }[]; articleId?: string }) {
  const [active, setActive] = useState(items[0]?.id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => Boolean(e));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const article = document.getElementById(articleId);
    const onScroll = () => {
      if (!article) return;
      const r = article.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.5;
      setProgress(Math.min(1, Math.max(0, -r.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [items, articleId]);

  return (
    <nav aria-label="On this page" className="rounded-3xl bg-mist p-6">
      <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">On this page</p>
      <div className="mt-3 h-1 overflow-hidden rounded-sm bg-zinc-200">
        <div className="h-full rounded-sm bg-brand-dark transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>
      <ol className="mt-4 grid gap-1">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={`relative block rounded-lg py-1.5 pr-2 pl-4 text-[14px] leading-snug transition-colors ${
                active === i.id ? "font-semibold text-ink" : "text-zinc-500 hover:text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-sm bg-brand-dark transition-transform duration-300 ${active === i.id ? "scale-y-100" : "scale-y-0"}`}
              />
              {i.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
