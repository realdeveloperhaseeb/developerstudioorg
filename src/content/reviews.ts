// Reviews must be real, with the client's written permission to show their name and business.
// These entries are layout placeholders only. Replace each one with a real quote, or delete it.
// Do not add star ratings or review counts unless they come from a public source such as Google.
export type Review = {
  quote: string;
  name: string;
  business: string;
  service: string;
  date: string;
  source: { label: string; href: string } | null;
  placeholder?: boolean;
};

export const reviews: Review[] = [
  {
    quote: "[Real client quote, two or three lines: the problem, what changed, and whether they would recommend us.]",
    name: "[Client name]",
    business: "StayRight",
    service: "Web design",
    date: "[Month 2026]",
    source: null,
    placeholder: true,
  },
  {
    quote: "[Real client quote about the website and the enquiries it brings in.]",
    name: "[Client name]",
    business: "Formula Unu Driving School",
    service: "Web design",
    date: "[Month 2026]",
    source: null,
    placeholder: true,
  },
  {
    quote: "[Real client quote about working with the team and the results.]",
    name: "Nat Berman",
    business: "Nat Berman Coaching",
    service: "Web design and SEO",
    date: "[Month 2026]",
    source: null,
    placeholder: true,
  },
  {
    quote: "[Real client quote about Google Ads or Meta ads results.]",
    name: "[Client name]",
    business: "[Business]",
    service: "Google Ads",
    date: "[Month 2026]",
    source: null,
    placeholder: true,
  },
  {
    quote: "[Real client quote about social media or ongoing support.]",
    name: "[Client name]",
    business: "Adorned by Ifra",
    service: "Social media",
    date: "[Month 2026]",
    source: null,
    placeholder: true,
  },
];
