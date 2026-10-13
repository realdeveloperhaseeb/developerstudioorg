"use client";

import { useEffect, useRef } from "react";

// Fires the conversion event once when the thank-you page loads.
// Google Tag Manager or GA4 can pick up "generate_lead" from the dataLayer once analytics is added.
// The ref stops a double count when React runs effects twice in development.
export function TrackLead() {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "generate_lead", form: "free-growth-plan" });
  }, []);
  return null;
}
