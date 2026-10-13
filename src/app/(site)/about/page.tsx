import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { BadgeCheck, KeyRound, LineChart, MessagesSquare } from "lucide-react";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { CountUpOnView } from "@/components/CountUpOnView";
import { ResultsStrip } from "@/components/ResultsStrip";
import { TeamsExplained } from "@/components/TeamsExplained";
import { TeamSection } from "@/components/TeamSection";
import { CtaSection } from "@/components/CtaSection";
import { projects, moreWork } from "@/content/projects";

export const metadata: Metadata = {
  title: "About DeveloperStudio | Rotherham Digital Agency",
  description:
    "DeveloperStudio is an online digital agency serving Rotherham and the UK, with a UK and Pakistan team. See how we work and why clients trust us.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    icon: LineChart,
    title: "Results you can measure",
    body: "We judge our work on calls, leads and sales, and we show you the numbers straight from your own accounts.",
  },
  {
    icon: KeyRound,
    title: "Everything in your name",
    body: "Your domain, website and ad accounts belong to you from day one. You stay because the work is good, not because you are locked in.",
  },
  {
    icon: MessagesSquare,
    title: "Straight talking",
    body: "Plain-English plans and reports, fixed prices agreed up front, and honest advice when something is not worth doing.",
  },
];

const enquiries = 818 + 72 + 184 + 147;
const websites = projects.length + moreWork.length;

export default function AboutPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/about/`,
          name: "About DeveloperStudio",
          about: {
            "@type": "ProfessionalService",
            name: site.name,
            url: site.url,
            description: site.entity,
            founder: { "@type": "Person", name: "Haseeb Ahmad" },
            areaServed: ["Rotherham", "South Yorkshire", "United Kingdom"],
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
          <div className="drift-a absolute top-[-15%] right-[-10%] h-[560px] w-[560px] rounded-full bg-brand/15 blur-[110px]" />
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 pt-8 pb-16 sm:px-6 sm:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pb-24">
          <div>
            <Breadcrumbs
              className="hero-in"
              items={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about/" },
              ]}
            />
            <h1 className="hero-in mt-8 text-[2.5rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-ink [animation-delay:80ms] sm:text-6xl">
              About DeveloperStudio, a digital agency in{" "}
              <span className="relative isolate whitespace-nowrap text-brand-dark">
                <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                Rotherham
              </span>
            </h1>
            {/* The entity sentence, worded the same as everywhere else, so search engines and AI describe us consistently. */}
            <p className="hero-in mt-6 max-w-[600px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">{site.entity}</p>
            <p className="hero-in mt-4 max-w-[600px] text-[17px] leading-relaxed text-zinc-600 [animation-delay:220ms]">
              Founded by Haseeb Ahmad, we work online with businesses in Rotherham, South Yorkshire and across the UK. No
              high-street office means more of your budget goes into the work itself.
            </p>
          </div>

          <div className="hero-in [animation-delay:260ms]">
            <dl className="float-slow grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 shadow-[0_40px_80px_-30px_rgb(10_10_10/0.5)]">
              {[
                { value: <CountUpOnView value={enquiries} />, label: "enquiries from four 2026 ad campaigns" },
                { value: <CountUpOnView value={websites} />, label: "websites in our portfolio" },
                { value: <>4</>, label: "services under one roof" },
                { value: <>24/7</>, label: "phone and WhatsApp cover" },
              ].map((s, i) => (
                <div key={s.label} className={`p-6 sm:p-7 ${i === 0 ? "bg-brand-dark" : "bg-ink"} text-white`}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-4xl font-extrabold tracking-tight">{s.value}</dd>
                  <dd className={`mt-2 text-[13px] leading-snug ${i === 0 ? "text-white/80" : "text-zinc-400"}`}>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              What we believe
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink [--d:0.08s] sm:text-4xl">Three things we never compromise on</h2>
          </InView>
          <InView as="ul" className="mt-10 grid gap-5 md:grid-cols-3" threshold={0.2}>
            {principles.map((p, i) => (
              <li key={p.title} className="reveal-up" style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)]">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                    <p.icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{p.body}</p>
                </div>
              </li>
            ))}
          </InView>
          <InView className="mt-8">
            <p className="reveal-up flex items-center gap-3 text-[15px] text-zinc-600">
              <BadgeCheck aria-hidden className="size-5 shrink-0 text-brand-dark" />
              Every result we quote comes with a screenshot from the client&apos;s own ad or Search Console account.
            </p>
          </InView>
        </div>
      </section>

      <TeamsExplained />
      <ResultsStrip />
      <TeamSection />
      <CtaSection title="Let's talk about your business" source="about" />
    </main>
  );
}
