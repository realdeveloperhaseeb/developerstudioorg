import { Check, Phone } from "lucide-react";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./icons";
import { InView } from "./InView";
import { LeadForm } from "./LeadForm";

const promises = ["Free review of your website and Google visibility", "A plain-English plan with a fixed price", "No obligation, no pushy sales calls"];

// Reusable final call to action. The home page uses the defaults; other pages pass their own heading.
export function CtaSection({
  title = "Ready for a website that brings in enquiries?",
  source = "home-cta",
}: {
  title?: string;
  source?: string;
}) {
  return (
    <section id="get-started" className="relative overflow-clip bg-brand-dark py-20 text-white sm:py-28">
      {/* Signature background: rings ripple out from behind the form, over a faint grid. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="cta-grid absolute inset-0" />
        <div className="absolute top-1/2 right-[18%] size-0">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="cta-ring absolute top-1/2 left-1/2 size-[260px] rounded-full border border-white/25" style={{ animationDelay: `${i * 1.5}s` }} />
          ))}
        </div>
        <div className="drift-a absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-brand-light/25 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
        <InView>
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-white/80 uppercase">
            <span className="h-px w-6 bg-white/60" />
            Free growth plan
          </p>
          <h2 className="reveal-up mt-4 text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] [--d:0.08s] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="reveal-up mt-6 max-w-lg text-lg leading-relaxed text-white/85 [--d:0.16s]">
            Tell us about your business. We will review your website and Google visibility and send you a free plan, in plain
            English.
          </p>

          <ul className="reveal-up mt-8 grid gap-3 [--d:0.24s]">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[16px] text-white">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-dark">
                  <Check aria-hidden className="size-3" strokeWidth={4} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="reveal-up mt-9 flex flex-wrap gap-3 [--d:0.32s]">
            <a
              href={`tel:${site.phones.uk.tel}`}
              className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-black px-6 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <Phone aria-hidden className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
              Call {site.phones.uk.display}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-white/70 px-6 text-[15px] font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-brand-dark"
            >
              <WhatsAppIcon className="size-[18px]" />
              WhatsApp us
            </a>
          </div>
        </InView>

        <InView threshold={0.2}>
          <div className="reveal-up rounded-3xl bg-white p-6 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.55)] [--d:0.15s] sm:p-9">
            <p className="text-xl font-extrabold tracking-tight">Get your free growth plan</p>
            <p className="mt-1 mb-6 text-[15px] text-zinc-500">Four quick fields. Takes under a minute.</p>
            <LeadForm source={source} />
          </div>
        </InView>
      </div>
    </section>
  );
}
