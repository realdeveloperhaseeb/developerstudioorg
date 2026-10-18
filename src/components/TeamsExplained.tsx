import type { CSSProperties } from "react";
import { Clock, Code2, Handshake, Palette, PhoneCall, Target } from "lucide-react";
import { site } from "@/content/site";
import { InView } from "./InView";

// Plain explanation of the UK and PK teams, answering the "who actually does the work" worry.
const teams = [
  {
    name: "UK team",
    phone: site.phones.uk,
    role: "Your point of contact",
    items: [
      { icon: Handshake, text: "Account management and strategy" },
      { icon: PhoneCall, text: "Discovery calls, reviews and monthly reports" },
      { icon: Target, text: "Planning what to do next and why" },
    ],
  },
  {
    name: "PK team",
    phone: site.phones.pk,
    role: "Design, build and delivery",
    items: [
      { icon: Palette, text: "Website and brand design" },
      { icon: Code2, text: "Development, tracking and technical SEO" },
      { icon: Target, text: "Running Google and Meta ad campaigns" },
    ],
  },
];

export function TeamsExplained() {
  return (
    <section className="relative overflow-clip bg-black py-20 text-white sm:py-28">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="max-w-2xl">
          <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-light uppercase">
            <span className="h-px w-6 bg-brand-light" />
            How we work
          </p>
          <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.015em] [--d:0.08s] sm:text-5xl">Two teams, one accountable agency</h2>
          <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-400 [--d:0.16s]">
            We say it plainly, because many agencies hide it: our UK team runs your account and our team in Pakistan designs,
            builds and runs the work. Same agency, same standards, one point of contact.
          </p>
        </InView>

        <InView as="ul" className="mt-12 grid gap-6 md:grid-cols-2" threshold={0.2}>
          {teams.map((t, i) => (
            <li key={t.name} className="reveal-up" style={{ "--d": `${0.1 + i * 0.15}s` } as CSSProperties}>
              <div className="h-full rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-colors duration-300 hover:ring-brand-light/50 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold">{t.name}</h3>
                  <span className="rounded-sm bg-brand-dark px-3 py-1 text-[13px] font-semibold">{t.role}</span>
                </div>
                <ul className="mt-6 grid gap-3">
                  {t.items.map((it) => (
                    <li key={it.text} className="flex items-center gap-3 text-[16px] text-zinc-200">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-brand-light">
                        <it.icon aria-hidden className="size-4" />
                      </span>
                      {it.text}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${t.phone.tel}`}
                  className="mt-7 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-[15px] font-semibold text-zinc-300 transition-colors hover:text-white"
                >
                  <PhoneCall aria-hidden className="size-4 text-brand-light" />
                  {t.phone.intl}
                </a>
              </div>
            </li>
          ))}
        </InView>

        <InView className="mt-6">
          <p className="reveal-up flex items-center gap-3 rounded-2xl bg-white/[0.04] p-5 text-[15px] text-zinc-300 ring-1 ring-white/10">
            <Clock aria-hidden className="size-5 shrink-0 text-brand-light" />
            Both teams work to UK hours on client projects. {site.hours}.
          </p>
        </InView>
      </div>
    </section>
  );
}
