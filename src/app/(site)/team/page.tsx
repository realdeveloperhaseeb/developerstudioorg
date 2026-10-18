import type { Metadata } from "next";
import { team } from "@/content/team";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { TeamSection } from "@/components/TeamSection";
import { TeamsExplained } from "@/components/TeamsExplained";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Meet the Team | DeveloperStudio",
  description:
    "Meet the developers, designers and marketers at DeveloperStudio. Real people across the UK and Pakistan, with one point of contact.",
  alternates: { canonical: "/team/" },
};

const clean = (text: string) => text.replace(/\s*\[[^\]]*\]/g, "").trim();

export default function TeamPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${site.url}/team/`,
          name: "Meet the DeveloperStudio team",
          mainEntity: team.map((m) => ({
            "@type": "Person",
            name: m.name,
            jobTitle: m.role,
            description: clean(m.bio),
            worksFor: { "@type": "Organization", name: site.name, url: site.url },
            ...(m.photo ? { image: `${site.url}${m.photo}` } : {}),
          })),
        }}
      />

      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 pb-6 sm:px-6 sm:pt-10">
          <Breadcrumbs
            className="hero-in"
            items={[
              { name: "Home", href: "/" },
              { name: "Team", href: "/team/" },
            ]}
          />
          <h1 className="hero-in mt-8 max-w-3xl text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
            Meet the people behind{" "}
            <span className="relative isolate whitespace-nowrap text-brand-dark">
              <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
              your results
            </span>
          </h1>
          <p className="hero-in mt-6 max-w-[640px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
            Developers, designers and marketers across the UK and Pakistan. You always know who is working on your project and how
            to reach them.
          </p>
        </div>
      </section>

      <TeamSection eyebrow="The team" title="Who you will work with" intro="Each card shows the person's role and what they look after on your project." showLink={false} />
      <TeamsExplained />
      <CtaSection title="Want to work with us?" source="team" />
    </main>
  );
}
