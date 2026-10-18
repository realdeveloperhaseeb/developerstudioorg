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
    <section id="results" aria-label="Results and clients" className="relative scroll-mt-16 overflow-hidden text-white">
      {/* Signature band 1: client names scroll past in a bold dark strip; hover pauses them. */}
      <div className="bg-ink py-6">
        <p className="sr-only">Businesses we have worked with</p>
        <div className="marquee-mask overflow-hidden">
          <ul className="marquee flex w-max items-center hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((c, i) => (
              <li key={i} aria-hidden={i >= clients.length} className="flex items-center">
                <span className="px-8 text-xl font-bold whitespace-nowrap text-white sm:text-2xl">{c.name}</span>
                <span aria-hidden className="text-lg text-brand-light">✦</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Signature band 2: solid green results band with big numbers. */}
      <div className="relative bg-gradient-to-r from-brand-deeper via-brand-dark to-brand-deeper">
        <div aria-hidden className="cta-grid absolute inset-0 opacity-60" />
        <dl className="relative mx-auto grid max-w-[1200px] grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`group relative px-4 py-10 text-center sm:py-14 ${i % 2 === 1 ? "border-l border-white/15" : ""} ${
                i === 2 ? "lg:border-l lg:border-white/15" : ""
              } ${i < 2 ? "border-b border-white/15 lg:border-b-0" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1 sm:text-6xl">
                  {s.value}
                </span>
                <span className="mx-auto mt-3 block max-w-[230px] text-[14px] leading-snug font-medium text-white sm:text-[15px]">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
