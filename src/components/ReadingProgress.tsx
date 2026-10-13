"use client";

import { useEffect, useState } from "react";

// Thin green bar under the header that fills as the reader moves through the article.
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = document.getElementById(targetId);
    const onScroll = () => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setP(Math.min(1, Math.max(0, -r.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [targetId]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-16 z-40 h-[3px] lg:top-[64px]">
      <div className="h-full origin-left bg-gradient-to-r from-brand-dark to-brand-light" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
