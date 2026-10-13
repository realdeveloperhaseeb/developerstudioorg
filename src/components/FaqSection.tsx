"use client";

import { useState, type CSSProperties } from "react";
import { Phone, Plus } from "lucide-react";
import { homeFaqs } from "@/content/faqs";
import type { Faq } from "@/content/services";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./icons";
import { InView } from "./InView";

// Reusable FAQ: the home page uses the defaults; service pages pass their own questions.
// FAQPage markup helps search engines and AI assistants read the questions and answers.
export function FaqSection({
  items = homeFaqs,
  title = "Questions we get asked",
  intro = "Straight answers on cost, timescales, contracts and who owns what.",
}: {
  items?: Faq[];
  title?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState(0);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section className="relative overflow-clip bg-black py-20 text-white sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div aria-hidden className="drift-a pointer-events-none absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <InView className="lg:sticky lg:top-28 lg:self-start">
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
            <span className="h-px w-6 bg-brand-light" />
            FAQ
          </p>
          <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-5xl">{title}</h2>
          <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-400 [--d:0.16s]">
            {intro}
          </p>

          <div className="reveal-up mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 [--d:0.24s]">
            <p className="text-lg font-bold">Still have a question?</p>
            <p className="mt-1.5 text-[15px] text-zinc-400">Talk to a real person. Phone and WhatsApp are answered 24/7.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phones.uk.tel}`}
                className="btn-shine inline-flex h-11 items-center gap-2 rounded-full bg-brand-dark px-5 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
              >
                <Phone aria-hidden className="size-4" />
                Call {site.phones.uk.display}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-[15px] font-bold text-white transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <WhatsAppIcon className="size-[18px]" />
                WhatsApp
              </a>
            </div>
          </div>
        </InView>

        <InView threshold={0.1}>
          <ul className="grid gap-3">
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className={`reveal-up relative overflow-hidden rounded-2xl transition-colors duration-300 ${
                    isOpen ? "bg-white/[0.07] ring-1 ring-brand" : "bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05]"
                  }`}
                  style={{ "--d": `${0.08 + i * 0.06}s` } as CSSProperties}
                >
                  {/* Green bar marks the open question. */}
                  <span
                    aria-hidden
                    className={`absolute top-0 bottom-0 left-0 w-[3px] origin-top bg-brand-light transition-transform duration-500 ${isOpen ? "scale-y-100" : "scale-y-0"}`}
                  />
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className={`mt-0.5 text-[13px] font-bold tabular-nums transition-colors ${isOpen ? "text-brand-light" : "text-zinc-600"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[17px] leading-snug font-bold sm:text-lg">{f.q}</span>
                      <span
                        aria-hidden
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-brand-dark text-white" : "bg-white/[0.08] text-zinc-300"
                        }`}
                      >
                        <Plus className="size-4" strokeWidth={2.5} />
                      </span>
                    </button>
                  </h3>
                  {/* Smooth height: the grid row animates between 0fr and 1fr. The answer is always in the HTML. */}
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <p className="px-5 pb-6 pl-[3.25rem] text-[16px] leading-relaxed text-zinc-300 sm:px-6 sm:pl-[3.6rem]">{f.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </InView>
      </div>
    </section>
  );
}
