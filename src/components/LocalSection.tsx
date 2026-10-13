import type { CSSProperties } from "react";
import { Mail, Phone, Video } from "lucide-react";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./icons";
import { InView } from "./InView";

// Abstract service-area network. Rough relative positions of the towns, not a map,
// and no office pin: DeveloperStudio works online.
const hub = { x: 230, y: 190, name: "Rotherham" };
const towns = [
  { x: 120, y: 250, name: "Sheffield", anchor: "end" as const, dx: -16, dy: 5 },
  { x: 175, y: 70, name: "Barnsley", anchor: "middle" as const, dx: 0, dy: -18 },
  { x: 370, y: 105, name: "Doncaster", anchor: "start" as const, dx: 16, dy: 5 },
];

function AreaNetwork() {
  return (
    <svg viewBox="0 0 480 360" className="h-auto w-full" role="img" aria-label="Rotherham connected to Sheffield, Barnsley and Doncaster, with clients across the UK">
      {/* Links from Rotherham to each town draw out one after another. */}
      {towns.map((t, i) => (
        <line
          key={t.name}
          className="net-line"
          x1={hub.x}
          y1={hub.y}
          x2={t.x}
          y2={t.y}
          stroke="#047857"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={100}
          style={{ "--d": `${0.3 + i * 0.25}s` } as CSSProperties}
        />
      ))}
      {/* Dashed link heading off to the rest of the UK. */}
      <path
        className="net-line"
        d={`M ${hub.x} ${hub.y} C 280 270, 340 300, 430 318`}
        fill="none"
        stroke="#047857"
        strokeWidth="2"
        strokeDasharray="2 7"
        strokeLinecap="round"
        style={{ "--d": "1.1s" } as CSSProperties}
      />

      {/* Pulse rings around Rotherham. */}
      <circle className="net-pulse" cx={hub.x} cy={hub.y} r="18" fill="none" stroke="#059669" strokeWidth="2" />
      <circle className="net-pulse [animation-delay:1.2s]" cx={hub.x} cy={hub.y} r="18" fill="none" stroke="#059669" strokeWidth="2" />

      {towns.map((t, i) => (
        <g key={t.name} className="net-node" style={{ "--d": `${0.55 + i * 0.25}s`, transformOrigin: `${t.x}px ${t.y}px` } as CSSProperties}>
          <circle cx={t.x} cy={t.y} r="9" fill="#ffffff" stroke="#047857" strokeWidth="3" />
          <text x={t.x + t.dx} y={t.y + t.dy} textAnchor={t.anchor} className="fill-zinc-700 text-[15px] font-semibold">
            {t.name}
          </text>
        </g>
      ))}

      <g className="net-node" style={{ "--d": "1.35s", transformOrigin: "418px 318px" } as CSSProperties}>
        <rect x="362" y="300" width="112" height="36" rx="18" fill="#0a0a0a" />
        <text x="418" y="323" textAnchor="middle" className="fill-white text-[13px] font-semibold">
          Across the UK
        </text>
      </g>

      <circle cx={hub.x} cy={hub.y} r="15" fill="#047857" />
      <circle cx={hub.x} cy={hub.y} r="5" fill="#ffffff" />
      <text x={hub.x + 24} y={hub.y + 6} className="fill-ink text-[18px] font-extrabold">
        {hub.name}
      </text>
    </svg>
  );
}

const contacts = [
  { icon: Phone, label: site.phones.uk.label, value: site.phones.uk.intl, href: `tel:${site.phones.uk.tel}` },
  { icon: Phone, label: site.phones.pk.label, value: site.phones.pk.intl, href: `tel:${site.phones.pk.tel}` },
  { icon: WhatsAppIcon, label: "WhatsApp", value: site.phones.uk.display, href: site.whatsapp, external: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
];

export function LocalSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] items-start gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <InView>
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
            <span className="h-px w-6 bg-brand-dark" />
            Rotherham and the UK
          </p>
          <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-5xl">
            An online agency that knows South Yorkshire
          </h2>

          {/* Answer-first blocks that search engines and AI assistants can quote directly. */}
          <div className="reveal-up mt-8 space-y-6 [--d:0.16s]">
            <div className="border-l-4 border-brand-dark pl-5">
              <h3 className="text-lg font-bold text-ink">Who is DeveloperStudio?</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-zinc-600">{site.entity}</p>
            </div>
            <div className="border-l-4 border-brand-dark pl-5">
              <h3 className="text-lg font-bold text-ink">Are you based in Rotherham?</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-zinc-600">
                We are an online agency with no high-street office. We work with businesses in Rotherham, Sheffield, Doncaster,
                Barnsley and across the UK by phone, WhatsApp and video call, which keeps our prices lower.
              </p>
            </div>
          </div>

          <ul className="reveal-up mt-8 flex flex-wrap gap-2 [--d:0.24s]" aria-label="Areas we serve">
            {site.serviceAreas.map((a) => (
              <li key={a} className="rounded-full bg-mist px-4 py-1.5 text-[14px] font-semibold text-ink ring-1 ring-brand/30">
                {a}
              </li>
            ))}
          </ul>

          <ul className="reveal-up mt-8 grid gap-3 sm:grid-cols-2 [--d:0.32s]">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="group flex h-full items-center gap-4 rounded-2xl p-4 ring-1 ring-brand transition duration-300 hover:-translate-y-0.5 hover:bg-brand/[0.04] hover:shadow-[0_16px_40px_-20px_rgb(4_120_87/0.5)]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                    <c.icon aria-hidden className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-bold tracking-[0.12em] text-brand-dark uppercase">{c.label}</span>
                    <span className="block text-[15px] font-bold text-ink sm:text-[16px] lg:text-[15px]">
                      {/* Allow a clean line break after the @ in the email address. */}
                      {c.value.includes("@") ? (
                        <>
                          {c.value.split("@")[0]}@<wbr />
                          {c.value.split("@")[1]}
                        </>
                      ) : (
                        c.value
                      )}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="reveal-up mt-4 flex items-center gap-2 text-[14px] text-zinc-500 [--d:0.36s]">
            <Video aria-hidden className="size-4 text-brand-dark" />
            {site.hours}. Video calls booked at a time that suits you.
          </p>
        </InView>

        {/* Shorter column: stays pinned while the text beside it scrolls. */}
        <InView threshold={0.3} className="lg:sticky lg:top-28">
          <div className="reveal-up relative overflow-hidden rounded-3xl bg-mist p-6 ring-1 ring-brand sm:p-10">
            <div aria-hidden className="dot-grid-soft absolute inset-0" />
            <div className="relative">
              <AreaNetwork />
            </div>
            <p className="relative mt-4 text-center text-[14px] text-zinc-500">
              Serving Rotherham, South Yorkshire and clients across the UK, online.
            </p>
          </div>
        </InView>
      </div>
    </section>
  );
}
