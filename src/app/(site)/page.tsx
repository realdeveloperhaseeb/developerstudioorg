import { Hero } from "@/components/Hero";
import { ResultsStrip } from "@/components/ResultsStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { WorkSection } from "@/components/WorkSection";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { LocalSection } from "@/components/LocalSection";
import { TeamSection } from "@/components/TeamSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ResultsStrip />
      <ProblemSection />
      <ServicesSection />
      <CaseStudiesSection />
      <WorkSection />
      <ProcessSection />
      <WhyUsSection />
      <TeamSection />
      <LocalSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
