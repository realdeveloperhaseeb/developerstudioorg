// Ad campaign case studies, taken from the DeveloperStudio case study Google Doc (Oct 2026).
// Every number below is shown in the matching platform screenshot in /images/case-studies/.

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  platform: "Meta Ads" | "Google Ads";
  title: string;
  overview: string;
  objective: string;
  strategy: string[];
  highlights: { value: string; label: string }[];
  results: { metric: string; value: string }[];
  breakdown?: { head: string[]; rows: string[][] };
  period: string;
  currency: "PKR" | "GBP" | "USD";
  images: { src: string; alt: string; w: number; h: number }[];
  relatedSite?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "roadside-hero-google-ads",
    client: "Roadside Hero",
    sector: "Roadside assistance and towing",
    platform: "Google Ads",
    title: "Scaling inbound phone leads from scratch for Roadside Hero",
    overview:
      "We partnered with Roadside Hero from January 2026 to build their customer acquisition from scratch. We designed high-intent Google Ads call campaigns around emergency roadside requests, helping the business scale quickly and hit its daily lead targets consistently.",
    objective: "Inbound phone calls from people who need roadside help now.",
    strategy: [
      "Google Search and Call-Only campaigns built for urgent, local searches.",
      "Single-theme ad groups for each emergency service: towing, tyre changes, jump-starts and lockouts, with tight location radiuses.",
      "Ongoing work on negative keywords, ad schedules and bidding to lower cost per call while keeping daily call volume high during opening hours.",
    ],
    highlights: [
      { value: "818", label: "Phone calls from ads" },
      { value: "~$12.71", label: "Average cost per call" },
      { value: "2.02k", label: "Clicks" },
    ],
    results: [
      { metric: "Phone calls", value: "818" },
      { metric: "Clicks", value: "2.02k" },
      { metric: "Impressions", value: "36.7k" },
      { metric: "Average cost per call", value: "~$12.71" },
      { metric: "Total spend", value: "$10.4k" },
    ],
    breakdown: {
      head: ["Metric", "Overall (16 Feb to 17 Aug 2026)", "Peak season (Jun to Aug)"],
      rows: [
        ["Calls / conversions", "818 calls", "359 conversions"],
        ["Clicks", "2.02k", "1.55k"],
        ["Impressions", "36.7k", "26.4k"],
        ["Average cost", "~$12.71 per call", "~$22.06 per conversion"],
        ["Spend", "$10.4k", "$7.92k"],
      ],
    },
    period: "16 Feb to 17 Aug 2026",
    currency: "USD",
    images: [
      {
        src: "/images/case-studies/roadside-hero-google-ads-overall.webp",
        alt: "Google Ads overview for Roadside Hero: 2.02k clicks, 36.7k impressions, 818 phone calls, $10.4k cost, 16 Feb to 17 Aug 2026",
        w: 1015,
        h: 347,
      },
      {
        src: "/images/case-studies/roadside-hero-google-ads-peak-season.webp",
        alt: "Google Ads peak season view for Roadside Hero: 1.55k clicks, 26.4k impressions, 359 conversions, $7.92k cost",
        w: 1069,
        h: 384,
      },
    ],
    // The Roadside Hero website also appears in the portfolio mockups.
    relatedSite: "/images/projects/auto-repair-shop-website-design.png",
  },
  {
    slug: "excite-property-meta-leads",
    client: "Excite Property Real Estate",
    sector: "Real estate",
    platform: "Meta Ads",
    title: "Low-cost Meta Instant Form leads for Excite Property",
    overview:
      "We designed and managed a long-running Meta Ads lead generation set-up for Excite Property Real Estate, capturing buyer and investor leads through Meta's native Instant Forms.",
    objective: "Qualified buyer and investor leads with as little friction as possible.",
    strategy: [
      "Lead generation through Meta Instant Forms, so people enquire without leaving Facebook or Instagram.",
      "Focused audience targeting for local property buyers and investors.",
      "Stable ad sets kept running over several months, letting Meta's delivery learn while avoiding audience fatigue.",
    ],
    highlights: [
      { value: "72", label: "Leads from Instant Forms" },
      { value: "£5.45", label: "Cost per lead" },
      { value: "9.3%", label: "Lower cost per lead than similar ad sets" },
    ],
    results: [
      { metric: "Leads (form submissions)", value: "72" },
      { metric: "Cost per lead", value: "£5.45" },
      { metric: "Total spend", value: "£392.31" },
      {
        metric: "Benchmark",
        value: "Meta reported a cost per lead 9.3% lower than similar ad sets (10 Sep to 11 Oct 2026)",
      },
    ],
    breakdown: {
      head: ["Period", "Leads", "Cost per lead", "Spend"],
      rows: [
        ["19 Jun to 11 Oct 2026 (overall)", "72", "£5.45", "£392.31"],
        ["11 Sep to 11 Oct 2026", "37", "£4.19", "£155.16"],
      ],
    },
    period: "19 Jun to 11 Oct 2026",
    currency: "GBP",
    images: [
      {
        src: "/images/case-studies/excite-property-meta-leads-overall.webp",
        alt: "Meta Ads performance for Excite Property: 72 form leads at £5.45 per lead, £392.31 spent, cost per lead 9.3% lower than similar ad sets",
        w: 922,
        h: 360,
      },
      {
        src: "/images/case-studies/excite-property-meta-leads-sep-oct.webp",
        alt: "Meta Ads performance for Excite Property, 11 Sep to 11 Oct 2026: 37 form leads at £4.19 per lead, £155.16 spent",
        w: 731,
        h: 372,
      },
    ],
  },
  {
    slug: "blanche-beauty-whatsapp-leads",
    client: "Blanche Beauty Bar & Aesthetic Clinic",
    sector: "Beauty and aesthetics",
    platform: "Meta Ads",
    title: "WhatsApp booking leads for a beauty and aesthetic clinic",
    overview:
      "We ran a Meta engagement campaign built to generate direct WhatsApp enquiries and booking leads for Blanche Beauty Bar & Aesthetic Clinic.",
    objective: "Direct WhatsApp conversations that turn into bookings.",
    strategy: [
      "One Meta campaign with two ad sets, testing the original audience targeting against Advantage+ audience.",
      "Compared the two audiences on cost per conversation to keep daily message volume steady while lowering cost.",
      "Reviewed results by age and gender to see which groups started conversations most cheaply.",
    ],
    highlights: [
      { value: "184", label: "WhatsApp conversations" },
      { value: "Rs 91.55", label: "Cost per conversation" },
      { value: "17 days", label: "Campaign length" },
    ],
    results: [
      { metric: "Messaging conversations started", value: "184" },
      { metric: "Cost per conversation", value: "Rs 91.55" },
      { metric: "Total spend", value: "Rs 16,844.91" },
      { metric: "Date range", value: "16 Sep to 2 Oct 2026" },
    ],
    breakdown: {
      head: ["Ad set", "Conversations", "Cost per conversation", "Spend"],
      rows: [
        ["Advantage+ audience", "134", "Rs 84.64", "Rs 11,342.00"],
        ["Original audience", "50", "Rs 110.06", "Rs 5,502.91"],
        ["Campaign total", "184", "Rs 91.55", "Rs 16,844.91"],
      ],
    },
    period: "16 Sep to 2 Oct 2026",
    currency: "PKR",
    images: [
      {
        src: "/images/case-studies/blanche-meta-whatsapp-overview.webp",
        alt: "Meta Ads campaign overview for Blanche Beauty Bar: 184 messaging conversations at Rs 91.55 each, Rs 16,844.91 spent, 16 Sep to 2 Oct 2026",
        w: 1600,
        h: 582,
      },
      {
        src: "/images/case-studies/blanche-meta-adset-advantage-plus.webp",
        alt: "Advantage+ audience ad set for Blanche Beauty Bar: 134 messaging conversations at Rs 84.64 each",
        w: 1600,
        h: 467,
      },
      {
        src: "/images/case-studies/blanche-meta-adset-original-audience.webp",
        alt: "Original audience ad set for Blanche Beauty Bar: 50 messaging conversations at Rs 110.06 each",
        w: 1600,
        h: 414,
      },
      {
        src: "/images/case-studies/blanche-meta-breakdown-chart.webp",
        alt: "Meta Ads breakdown chart for Blanche Beauty Bar showing conversations and cost by age and gender",
        w: 1600,
        h: 754,
      },
      {
        src: "/images/case-studies/blanche-meta-breakdown-table.webp",
        alt: "Meta Ads breakdown table for Blanche Beauty Bar by age and gender",
        w: 1529,
        h: 754,
      },
    ],
  },
  {
    slug: "aswora-travels-whatsapp-leads",
    client: "Aswora Travels",
    sector: "Travel and tours",
    platform: "Meta Ads",
    title: "Ultra-low cost WhatsApp leads for Aswora Travels",
    overview:
      "We designed and managed direct-response Meta messaging campaigns for Aswora Travels, driving real-time WhatsApp enquiries for seasonal tour packages.",
    objective: "High-intent WhatsApp enquiries from holiday seekers.",
    strategy: [
      "Separate engagement campaigns testing general agency offers against destination-specific creative, such as the Shogran tour package.",
      "Eye-catching visuals with a direct message-us call to action, built to maximise click-to-WhatsApp conversions.",
      "Budget kept small and focused on the campaign with the lower cost per lead.",
    ],
    highlights: [
      { value: "147", label: "WhatsApp leads" },
      { value: "~Rs 27.37", label: "Average cost per lead" },
      { value: "Rs 4,023", label: "Total spend" },
    ],
    results: [
      { metric: "Messaging leads", value: "147" },
      { metric: "Average cost per lead", value: "~Rs 27.37" },
      { metric: "Total spend", value: "Rs 4,023.07" },
    ],
    breakdown: {
      head: ["Campaign", "Messaging leads", "Cost per lead", "Spend"],
      rows: [
        ["Aswora engagement campaign", "82", "Rs 23.11", "Rs 1,894.83"],
        ["Shogran tour campaign", "65", "Rs 32.74", "Rs 2,128.24"],
        ["Combined total", "147", "~Rs 27.37", "Rs 4,023.07"],
      ],
    },
    period: "2026 tour season",
    currency: "PKR",
    images: [
      {
        src: "/images/case-studies/aswora-meta-whatsapp-engagement.webp",
        alt: "Meta Ads engagement campaign for Aswora Travels: 82 messaging conversations at Rs 23.11 each, Rs 1,894.83 spent",
        w: 1600,
        h: 551,
      },
      {
        src: "/images/case-studies/aswora-meta-whatsapp-shogran.webp",
        alt: "Meta Ads Shogran tour campaign for Aswora Travels: 65 messaging conversations at Rs 32.74 each, Rs 2,128.24 spent",
        w: 1600,
        h: 443,
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
