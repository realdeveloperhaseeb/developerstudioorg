import { caseStudies } from "@/content/case-studies";
import { projects, moreWork } from "@/content/projects";
import { CountUpOnView } from "./CountUpOnView";

// Every figure here is backed by a case study screenshot or the portfolio itself.
const totalEnquiries = 818 + 72 + 184 + 147; // Roadside Hero calls, Excite leads, Blanche and Aswora WhatsApp leads
const websites = projects.length + moreWork.length;

const stats = [
  {
    value: <CountUpOnView value={totalEnquiries} />,
    label: "calls, leads and WhatsApp enquiries from four 2026 ad campaigns",
  },
  {
    value: <CountUpOnView value={websites} />,
    label: "websites designed and built in our portfolio",
  },
  {
    value: <CountUpOnView value={9.3} decimals={1} suffix="%" />,
    label: "lower cost per lead than similar Meta ad sets, for Excite Property",
  },
  {
    value: <span>24/7</span>,
    label: "phone and WhatsApp cover from our UK and PK teams",
  },
];

const clients = [
  ...caseStudies.map((c) => ({ name: c.client.replace(" Real Estate", ""), tag: c.sector })),
  { name: "StayRight", tag: "Property management" },
  { name: "Formula Unu Driving School", tag: "Driving school" },
  { name: "Nat Berman", tag: "Business coaching" },
  { name: "Adorned by Ifra", tag: "Gifts and ecommerce" },
  { name: "Petroff", tag: "Law firm" },
  { name: "London Motor Sports", tag: "Automotive ecommerce" },
  { name: "Village Dogs", tag: "Charity" },
  { name: "Posting Workers to France", tag: "Business services" },
];

export function ResultsStrip() {
  return (
    <section aria-label="Results and clients" className="relative overflow-hidden bg-black text-white">
      {/* Signature: a green light travels along the top edge. */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10">
        <div className="travel-line h-px w-1/3 bg-gradient-to-r from-transparent via-brand-light to-transparent" />
      </div>
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group relative py-10 pr-4 sm:py-14 lg:px-8 lg:first:pl-0 ${i % 2 === 1 ? "pl-4 lg:pl-8" : ""} ${
                i > 0 ? "lg:border-l lg:border-white/10" : ""
              } ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""} ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-light sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-3 block max-w-[240px] text-[14px] leading-snug text-zinc-400 sm:text-[15px]">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Client names scroll past continuously; hover pauses them. */}
      <div className="relative border-t border-white/10 py-7">
        <p className="mb-5 text-center text-[12px] font-semibold tracking-[0.2em] text-zinc-500 uppercase">
          Businesses we have worked with
        </p>
        <div className="marquee-mask overflow-hidden">
          <ul className="marquee flex w-max items-center hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
              <li key={i} aria-hidden={i >= clients.length} className="flex items-center gap-3 px-7">
                <span className="text-lg font-bold whitespace-nowrap text-zinc-200 sm:text-xl">{c.name}</span>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[12px] whitespace-nowrap text-zinc-500">{c.tag}</span>
                <span aria-hidden className="ml-4 size-1.5 rounded-full bg-brand" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
