// Blog posts. Each one opens with a direct answer so Google's AI Overviews and assistants can quote it.
// Price ranges are typical UK market ranges, not DeveloperStudio quotes.

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: "Websites" | "SEO" | "Ads" | "Social media" | "Business growth";
  published: string;
  updated: string;
  author: { name: string; role: string; photo: string };
  readMins: number;
  answer: string;
  sections: { h: string; blocks: Block[] }[];
  service: { label: string; href: string };
  // Optional cover illustration; defaults to the category illustration.
  cover?: "chart" | "checklist" | "split";
};

const haseeb = { name: "Haseeb Ahmad", role: "Founder, DeveloperStudio", photo: "/images/team/haseeb-founder.png" };

export const posts: Post[] = [
  {
    slug: "digital-marketing-agency-cost-uk",
    title: "How much does a digital marketing agency cost per month in the UK?",
    description:
      "Typical UK prices for SEO, Google Ads management, social media and full-service retainers in 2026, and what changes the price.",
    category: "Business growth",
    published: "2026-10-11",
    updated: "2026-10-11",
    author: haseeb,
    readMins: 6,
    answer:
      "Most UK small businesses pay between £500 and £2,500 a month for a digital marketing agency. Single services such as local SEO or Google Ads management usually cost £300 to £1,500 a month each, and full-service retainers run from about £1,500 to £5,000 or more. Ad spend is paid on top, directly to Google or Meta.",
    sections: [
      {
        h: "Typical monthly prices by service",
        blocks: [
          {
            type: "p",
            text: "These are typical ranges for UK agencies working with small and medium businesses in 2026. Freelancers often charge less and large agencies charge more.",
          },
          {
            type: "table",
            head: ["Service", "Typical monthly fee", "What drives the price"],
            rows: [
              ["Local SEO", "£300 to £1,000", "Competition, number of locations, content needed"],
              ["National SEO", "£800 to £3,000+", "Keyword difficulty, site size, link building"],
              ["Google Ads management", "£250 to £1,500", "Ad spend, number of campaigns, ecommerce feeds"],
              ["Social media management", "£300 to £1,500", "Platforms, posts and videos per month, paid ads"],
              ["Full-service retainer", "£1,500 to £5,000+", "Combined scope and reporting"],
            ],
          },
        ],
      },
      {
        h: "What you pay on top of the agency fee",
        blocks: [
          {
            type: "list",
            items: [
              "Ad spend, paid straight to Google, Meta or LinkedIn. A good agency never hides a markup in this.",
              "Software such as booking tools, email platforms or premium plugins.",
              "Photography or video shoots, if your content needs them.",
              "A new website or landing pages, which are usually a one-off project rather than part of the retainer.",
            ],
          },
        ],
      },
      {
        h: "Percentage of ad spend or fixed fee?",
        blocks: [
          {
            type: "p",
            text: "Some agencies charge 10% to 20% of your ad spend for managing Google Ads. That can reward them for spending more rather than spending better. A fixed monthly fee, quoted separately from your ad budget, keeps the incentives clean. Whichever model you choose, ask to see the spend in your own ad account.",
          },
        ],
      },
      {
        h: "How to tell if an agency is worth the money",
        blocks: [
          {
            type: "list",
            items: [
              "They report enquiries, calls and sales, not just clicks, impressions and likes.",
              "You own your website, domain, Google Ads, Analytics and Meta accounts.",
              "The contract is rolling monthly or short, so they keep earning your business.",
              "They show case studies with numbers you can check, and clients you can speak to.",
            ],
          },
          {
            type: "p",
            text: "A simple test: divide the monthly fee by the number of new customers it brings in. If that cost per customer is well below what a customer is worth to you, the agency is paying for itself.",
          },
        ],
      },
      {
        h: "What DeveloperStudio charges",
        blocks: [
          {
            type: "p",
            text: "DeveloperStudio is an online agency serving Rotherham and the UK, so we do not carry the cost of a large office. Websites start from £99. SEO starts from £299, Google Ads management from £349 and social media and Meta ads from £149. Google Business Profile optimisation starts from £49. Every project gets a custom quote after a free call.",
          },
        ],
      },
    ],
    service: { label: "Get a custom offer", href: "/free-growth-plan/" },
  },
  {
    slug: "how-to-choose-digital-marketing-agency-rotherham",
    cover: "checklist",
    title: "How to choose a digital marketing agency in Rotherham (and avoid the wrong one)",
    description:
      "A practical checklist for Rotherham and South Yorkshire businesses: what to ask, what to check and the red flags that should end the conversation.",
    category: "Business growth",
    published: "2026-10-11",
    updated: "2026-10-11",
    author: haseeb,
    readMins: 7,
    answer:
      "Choose a digital marketing agency by checking four things: real case studies with numbers you can verify, clear pricing, a short or rolling contract, and that you will own every account and your website. Ask who does the work, how results are reported and what happens if you leave. Avoid anyone who guarantees first place on Google.",
    sections: [
      {
        h: "1. Start with what you need, not the agency",
        blocks: [
          {
            type: "p",
            text: "Decide whether you need more enquiries now, a better website, or long-term visibility on Google. Enquiries now usually means Google Ads. A website that converts comes first if visitors arrive but never get in touch. SEO is the long-term play. An agency that recommends everything at once, before asking about your goals, is selling, not advising.",
          },
        ],
      },
      {
        h: "2. Check the proof",
        blocks: [
          {
            type: "list",
            items: [
              "Case studies with a named client, what was done and a measurable result.",
              "Live websites you can visit, not just screenshots.",
              "Reviews on Google or another public platform, not only quotes on their own site.",
              "A client you can speak to, if the project is large.",
            ],
          },
        ],
      },
      {
        h: "3. Ask who does the work",
        blocks: [
          {
            type: "p",
            text: "Many agencies use freelancers or overseas teams. That is not a problem in itself, and it can keep prices down, but it should be stated openly. Ask who your point of contact is, who builds and runs the work, and what hours they keep. Problems start when outsourcing is hidden and nobody owns the result.",
          },
          {
            type: "p",
            text: "At DeveloperStudio we say it plainly: our UK team manages your account and our team in Pakistan designs, builds and runs campaigns during UK hours.",
          },
        ],
      },
      {
        h: "4. Make sure you own everything",
        blocks: [
          {
            type: "p",
            text: "Your domain, website code and hosting, Google Ads account, Google Analytics, Search Console and Meta Business account should be in your name, with the agency added as a user. If an agency insists on owning them, leaving later becomes slow and expensive.",
          },
        ],
      },
      {
        h: "5. Agree how results are reported",
        blocks: [
          {
            type: "p",
            text: "Ask for a sample report before you sign. It should show enquiries, calls and sales, and what they cost, not just traffic and impressions. Monthly reports should also say what was done and what comes next.",
          },
        ],
      },
      {
        h: "Red flags",
        blocks: [
          {
            type: "list",
            items: [
              "Guaranteed rankings or a guaranteed first position on Google.",
              "Long fixed contracts with no exit, or the agency owning your accounts.",
              "Ad spend billed through the agency with no access to the ad account.",
              "No named clients, no live work to look at, and reviews only on their own website.",
              "\"Marketing\" firms that recruit for door-to-door or event sales. These are direct-sales companies, not digital marketing agencies.",
            ],
          },
        ],
      },
      {
        h: "Local or online?",
        blocks: [
          {
            type: "p",
            text: "An agency that knows Rotherham and South Yorkshire understands local search terms and the towns your customers come from. That knowledge does not need an office on the high street. What matters is that the agency answers the phone, reports clearly and can show work for businesses like yours.",
          },
        ],
      },
    ],
    service: { label: "Get a free growth plan", href: "/free-growth-plan/" },
  },
  {
    slug: "70-20-10-rule-digital-marketing",
    cover: "split",
    title: "What is the 70/20/10 rule in digital marketing?",
    description:
      "The 70/20/10 rule splits your marketing budget between proven channels, growth bets and experiments. Here is how a small business can use it.",
    category: "Business growth",
    published: "2026-10-11",
    updated: "2026-10-11",
    author: haseeb,
    readMins: 4,
    answer:
      "The 70/20/10 rule is a way to split your marketing budget or content: 70% on proven channels that already bring customers, 20% on growing what is starting to work, and 10% on new experiments. It protects your core results while still leaving room to test new ideas.",
    sections: [
      {
        h: "Where the rule comes from",
        blocks: [
          {
            type: "p",
            text: "The idea is often credited to Coca-Cola's content strategy, which split content into 70% low-risk, 20% innovative and 10% high-risk ideas. The same split is now widely used for marketing budgets.",
          },
        ],
      },
      {
        h: "How it looks for a small business",
        blocks: [
          {
            type: "table",
            head: ["Share", "What it covers", "Example on £1,000 a month"],
            rows: [
              ["70%", "Channels with proven returns", "£700 on Google Ads search campaigns that already bring enquiries"],
              ["20%", "Growing what shows promise", "£200 on SEO content or retargeting ads"],
              ["10%", "Experiments", "£100 testing short video ads or a new platform"],
            ],
          },
        ],
      },
      {
        h: "When to change the split",
        blocks: [
          {
            type: "list",
            items: [
              "New businesses with no proven channel yet may spend more on testing at first.",
              "When an experiment beats your core channel on cost per enquiry, move it up into the 70%.",
              "Review the split every quarter using real enquiry and sales data.",
            ],
          },
        ],
      },
      {
        h: "The catch",
        blocks: [
          {
            type: "p",
            text: "The rule only works if you can measure what each channel brings in. Set up conversion tracking for calls, forms, WhatsApp and sales before you split any budget. Without it, you are guessing which channel deserves the 70%.",
          },
        ],
      },
    ],
    service: { label: "Talk to us about Google Ads", href: "/services/google-ads/" },
  },
  {
    slug: "how-much-does-a-website-cost-uk",
    title: "How much does a website cost in the UK? (2026 guide)",
    description:
      "UK website prices in 2026, from simple brochure sites to online shops and web apps, plus the running costs people forget.",
    category: "Websites",
    published: "2026-10-11",
    updated: "2026-10-11",
    author: haseeb,
    readMins: 6,
    answer:
      "A small business website in the UK typically costs £1,000 to £6,000 from an agency in 2026. Simple template sites can cost less, while online shops usually cost £4,000 to £15,000 and custom web apps more. Budget too for yearly running costs: domain, hosting, maintenance and any paid software.",
    sections: [
      {
        h: "Typical UK website prices",
        blocks: [
          {
            type: "table",
            head: ["Type of site", "Typical cost", "Good for"],
            rows: [
              ["Template or DIY builder", "£0 to £1,000", "Testing an idea, very small budgets"],
              ["Small business site (5 to 10 pages)", "£1,000 to £6,000", "Trades, services, local businesses"],
              ["Online shop", "£4,000 to £15,000", "Selling products online"],
              ["Custom web app or portal", "£8,000+", "Calculators, bookings, client areas"],
            ],
          },
        ],
      },
      {
        h: "What changes the price",
        blocks: [
          {
            type: "list",
            items: [
              "The number of pages and how many unique layouts they need.",
              "Features such as booking, payments, quote calculators or a client login.",
              "Copywriting, photography and moving content from an old site.",
              "SEO set-up and redirects so you keep your existing Google rankings.",
            ],
          },
        ],
      },
      {
        h: "Running costs after launch",
        blocks: [
          {
            type: "list",
            items: [
              "Domain name: around £10 to £30 a year.",
              "Hosting: from a few pounds to £50+ a month, depending on traffic and platform.",
              "Maintenance or a care plan for updates, backups and security.",
              "Paid plugins or software subscriptions.",
            ],
          },
        ],
      },
      {
        h: "Questions to ask before you pay",
        blocks: [
          {
            type: "list",
            items: [
              "Will I own the website, code and domain once it is paid for?",
              "Can I update it myself, and what does it cost if you do it?",
              "Will it be built for mobile first and tested for speed?",
              "What happens to my Google rankings when the old site is replaced?",
            ],
          },
        ],
      },
      {
        h: "What DeveloperStudio charges",
        blocks: [
          {
            type: "p",
            text: "Websites from DeveloperStudio start from £99, with a custom quote after a free discovery call. You own the finished site, and every build includes mobile-first design, speed work, tracking and SEO basics.",
          },
        ],
      },
    ],
    service: { label: "Web design and development", href: "/services/web-design-development/" },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

// Planned posts from the content plan, not yet written. Not linked anywhere on the site.
export const plannedPosts = [
  "Local SEO checklist for small businesses in Rotherham and South Yorkshire",
  "How to set up and optimise your Google Business Profile",
  "Google Ads or SEO: which is better for a small business?",
  "How long does SEO take to work?",
  "Website redesign checklist: how to launch without losing your Google rankings",
  "What is a good cost per lead on Google Ads?",
  "Why your website isn't getting enquiries: 7 fixes",
  "WhatsApp for business: turning chats into customers",
];
