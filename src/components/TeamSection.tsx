import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { team } from "@/content/team";
import { InView } from "./InView";
import { Tilt } from "./Tilt";

// Bios in team.ts carry [reminders] for details still to confirm; they are not shown on the page.
const clean = (text: string) => text.replace(/\s*\[[^\]]*\]/g, "").trim();

// Reusable team grid: the home page uses the defaults; the About and Team pages pass their own heading.
export function TeamSection({
  eyebrow = "Meet the team",
  title = "Real people behind your results",
  intro = "A small team across the UK and Pakistan. You always know who is working on your project and how to reach them.",
  showLink = true,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  showLink?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div aria-hidden className="dot-grid-soft pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        <InView className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              {eyebrow}
            </p>
            <h2 className="reveal-up mt-4 text-4xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-5xl">{title}</h2>
            <p className="reveal-up mt-5 text-lg leading-relaxed text-zinc-600 [--d:0.16s]">{intro}</p>
          </div>
          {showLink && (
            <div className="reveal-up [--d:0.2s]">
              <Link
                href="/team/"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 text-[15px] font-bold text-ink transition-colors hover:border-brand-dark hover:text-brand-dark"
              >
                Meet the whole team
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </InView>

        <InView as="ul" className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5" threshold={0.15}>
          {team.map((m, i) => (
            <li key={m.name} className="reveal-up" style={{ "--d": `${0.1 + i * 0.1}s` } as CSSProperties}>
              <Tilt max={9}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-200 ring-1 ring-brand transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-25px_rgb(4_120_87/0.6)] group-hover:ring-2">
                    <Image
                      src={m.photo ?? "/images/team/abdullah-designer.svg"}
                      unoptimized={!m.photo}
                      alt={`${m.name}, ${m.role} at DeveloperStudio`}
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 30vw, 46vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {/* Shared green-to-black fade unifies the different photo backgrounds. */}
                    <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div aria-hidden className="absolute inset-0 bg-brand-dark/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-brand-dark/15" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-[17px] leading-tight font-extrabold text-white sm:text-lg">{m.name}</h3>
                      <p className="mt-0.5 text-[13px] leading-snug font-medium text-brand-light">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 px-1 text-[14px] leading-relaxed text-zinc-600">{clean(m.bio)}</p>
                </article>
              </Tilt>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}
