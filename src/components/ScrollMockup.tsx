"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Full-page screenshot inside a frame that scrolls in step with the page:
// as the frame moves up the screen, the site inside it scrolls from top to bottom.
export function ScrollMockup({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = frame.current;
    const pic = img.current;
    if (!el || !pic || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      pic.style.objectPosition = `50% ${(p * 100).toFixed(1)}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={frame} className="relative aspect-[16/10] overflow-hidden bg-white">
      <Image ref={img} src={src} alt={alt} fill sizes={sizes} className="object-cover object-top" />
    </div>
  );
}
