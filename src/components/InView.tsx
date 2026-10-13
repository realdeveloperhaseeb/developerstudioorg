"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Marks its wrapper with data-inview="true" once scrolled into view, so CSS can start
// reveal transitions and illustrations. Content is always in the HTML.
export function InView({
  children,
  className,
  as: Tag = "div",
  threshold = 0.25,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    // @ts-expect-error -- ref type differs per tag, all are HTMLElements
    <Tag ref={ref} data-inview={inView} className={className}>
      {children}
    </Tag>
  );
}
