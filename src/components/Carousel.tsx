"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Manual carousel on CSS scroll-snap: arrows, swipe, trackpad or keyboard.
// It never auto-rotates, and every slide stays in the HTML.
export function Carousel({ label, children, slideClass }: { label: string; children: ReactNode[]; slideClass: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft > max - 8);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const move = (dir: 1 | -1) => {
    const el = track.current;
    const slide = el?.firstElementChild as HTMLElement | null;
    if (!el || !slide) return;
    el.scrollBy({ left: dir * (slide.offsetWidth + 20), behavior: "smooth" });
  };

  const btn =
    "inline-flex size-12 items-center justify-center rounded-sm border border-white/20 text-white transition-all duration-300 hover:border-brand-dark hover:bg-brand-dark disabled:pointer-events-none disabled:opacity-30";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={track}
        tabIndex={0}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-2 focus-visible:outline-none sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {children.map((child, i) => (
          <li key={i} aria-roledescription="slide" aria-label={`${i + 1} of ${children.length}`} className={`shrink-0 snap-start ${slideClass}`}>
            {child}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex items-center gap-4">
        <div className="h-[3px] flex-1 overflow-hidden rounded-sm bg-white/10">
          <div className="h-full rounded-sm bg-brand-light transition-[width] duration-300" style={{ width: `${Math.max(10, progress * 100)}%` }} />
        </div>
        <button type="button" className={btn} onClick={() => move(-1)} disabled={atStart} aria-label="Previous websites">
          <ArrowLeft className="size-5" />
        </button>
        <button type="button" className={btn} onClick={() => move(1)} disabled={atEnd} aria-label="Next websites">
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
