// Legal pages. Plain-English drafts based on the revamp plan's outline.
// These are not legal advice: have a UK solicitor or a reputable template service review them before launch.
// Where DeveloperStudio's exact terms are not confirmed (deposit size, notice period, due dates), the wording
// points to the client's written quote or invoice rather than inventing a figure.

export type LegalBlock = string | { list: string[] } | { table: { head: string[]; rows: string[][] } };

export type LegalPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  updated: string;
  summary: string[];
  sections: { id: string; heading: string; body: LegalBlock[] }[];
};

const contact = "ceo@developerstudio.org or +44 7988 563005";

export const privacyPolicy: LegalPage = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  metaTitle: "Privacy Policy | DeveloperStudio",
  description: "How DeveloperStudio collects, uses and protects your personal data, and the rights you have over it.",
  updated: "13 October 2026",
  summary: [
    "We only collect what we need to reply to you and deliver your project.",
    "We never sell your personal data.",
    "Our team in Pakistan can access client data, and we protect those transfers as UK law requires.",
    "You can ask to see, correct or delete your data at any time.",
  ],
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      body: [
        "DeveloperStudio is an online digital marketing agency serving Rotherham, South Yorkshire and the rest of the UK. We are the data controller for personal data collected through developerstudio.org and through our work with clients.",
        `If you have any questions about this policy or your data, contact us at ${contact}.`,
      ],
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      body: [
        { list: [
          "Details you give us: your name, email address, phone number, business name, website address and anything you write in a message.",
          "Conversations with us by WhatsApp, phone, video call or email.",
          "Project information: access you give us to your website, hosting, Google Ads, Google Analytics, Search Console or Meta accounts, and the data inside them that we need to do the work.",
          "Billing details needed to invoice you and keep accounting records.",
          "Basic technical data such as IP addresses, which our hosting provider may log to keep the website secure.",
        ] },
        "Our website does not currently use analytics or advertising cookies. See our Cookie Policy for details.",
      ],
    },
    {
      id: "how-we-use-it",
      heading: "How we use it, and our lawful basis",
      body: [
        { table: {
          head: ["Purpose", "Lawful basis under UK GDPR"],
          rows: [
            ["Replying to your enquiry and preparing your free growth plan", "Steps taken at your request before a contract, and our legitimate interest in responding"],
            ["Delivering the services you have agreed to", "Performance of a contract"],
            ["Invoicing and keeping financial records", "Legal obligation"],
            ["Improving our services and keeping our systems secure", "Legitimate interests"],
            ["Sending marketing emails", "Your consent, which you can withdraw at any time"],
          ],
        } },
      ],
    },
    {
      id: "whatsapp",
      heading: "Our enquiry forms and WhatsApp",
      body: [
        "When you send one of our website forms, it opens WhatsApp with your message ready to send to our UK team. The message is only sent if you press send. Messages sent through WhatsApp are also handled by WhatsApp (owned by Meta) under its own privacy policy.",
      ],
    },
    {
      id: "sharing",
      heading: "Who we share it with",
      body: [
        "We only share personal data where it is needed to run our business or deliver your project:",
        { list: [
          "Our own team in the UK and in Pakistan.",
          "Service providers such as website hosting, email, WhatsApp, Google, Meta and our accounting and customer records tools.",
          "Professional advisers, regulators or law enforcement where the law requires it.",
        ] },
        "We never sell your personal data or share it for other companies' marketing.",
      ],
    },
    {
      id: "international-transfers",
      heading: "International transfers",
      body: [
        "Our design and delivery team works in Pakistan, so client and enquiry data may be accessed from there. The UK has not made adequacy regulations for Pakistan, so we protect these transfers with the safeguards UK GDPR requires, such as the International Data Transfer Agreement, together with access controls and confidentiality commitments from our team.",
        "Some of our service providers, such as Google and Meta, may also process data outside the UK. They do this under their own approved safeguards.",
      ],
    },
    {
      id: "how-long",
      heading: "How long we keep it",
      body: [
        { list: [
          "Enquiries that do not lead to a project: up to two years from our last contact, then deleted.",
          "Client records, contracts and invoices: six years after our work ends, to meet tax and accounting rules.",
          "Access to your accounts: removed when our work for you ends, or sooner if you ask.",
        ] },
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      body: [
        "Under UK data protection law you have the right to:",
        { list: [
          "Ask for a copy of the personal data we hold about you.",
          "Ask us to correct data that is wrong or incomplete.",
          "Ask us to delete your data, or to stop or limit how we use it.",
          "Object to us using your data for our legitimate interests or for marketing.",
          "Ask for your data in a format you can take elsewhere.",
          "Withdraw your consent at any time, where we rely on consent.",
        ] },
        `To use any of these rights, contact us at ${contact}. It is free, and we will reply within one month.`,
      ],
    },
    {
      id: "security",
      heading: "Keeping your data safe",
      body: [
        "We limit access to personal data to the people who need it, use secure, password-protected tools, and remove access to client accounts when it is no longer needed.",
      ],
    },
    {
      id: "complaints",
      heading: "Complaints",
      body: [
        "If you are unhappy with how we have handled your data, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk or on 0303 123 1113.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      body: ["We may update this policy from time to time. The date at the top of the page shows when it last changed."],
    },
  ],
};

export const cookiePolicy: LegalPage = {
  slug: "cookie-policy",
  title: "Cookie Policy",
  metaTitle: "Cookie Policy | DeveloperStudio",
  description: "The cookies developerstudio.org uses, and how to change your choices.",
  updated: "13 October 2026",
  summary: [
    "Right now our website does not use analytics or advertising cookies.",
    "If we add them, we will ask for your permission first, with Accept and Reject buttons that are equally easy to use.",
    "You can block or delete cookies in your browser at any time.",
  ],
  sections: [
    {
      id: "what-are-cookies",
      heading: "What cookies are",
      body: [
        "Cookies are small files a website stores on your device. Some are essential to make a site work. Others, such as analytics and advertising cookies, track how you use a site and need your permission under UK law.",
      ],
    },
    {
      id: "cookies-we-use",
      heading: "Cookies we use today",
      body: [
        "Our website does not set analytics, advertising or social media tracking cookies. Our fonts and images are served from our own website, not from third parties.",
        { table: {
          head: ["Type", "Used on our site", "Needs your consent"],
          rows: [
            ["Strictly necessary", "Only if needed for the site to work securely", "No"],
            ["Analytics (for example Google Analytics)", "Not used", "Yes, if added"],
            ["Advertising (for example Meta Pixel)", "Not used", "Yes, if added"],
          ],
        } },
      ],
    },
    {
      id: "links",
      heading: "Links to other services",
      body: [
        "Our WhatsApp, phone and social media links take you to other services. Those services may set their own cookies under their own policies once you visit them.",
      ],
    },
    {
      id: "future",
      heading: "If we add analytics or advertising cookies",
      body: [
        "If we start measuring visits or running advertising tracking, we will show a cookie banner before any of those cookies load. You will be able to accept or reject them with one click, and change your choice at any time. We will also update this page to list each cookie, what it does and how long it lasts.",
      ],
    },
    {
      id: "control",
      heading: "How to control cookies",
      body: [
        "You can block or delete cookies in your browser settings. Most browsers explain how in their help pages. Blocking strictly necessary cookies may stop some parts of a website working.",
      ],
    },
    {
      id: "contact",
      heading: "Questions",
      body: [`If you have any questions about cookies on our website, contact us at ${contact}.`],
    },
  ],
};

export const terms: LegalPage = {
  slug: "terms",
  title: "Terms & Conditions",
  metaTitle: "Terms & Conditions | DeveloperStudio",
  description: "The terms that apply to DeveloperStudio's web design, SEO, Google Ads and social media services.",
  updated: "13 October 2026",
  summary: [
    "Your written quote sets out exactly what we will do and what it costs.",
    "Once paid in full, the website and content we create for you are yours.",
    "Ad spend is paid by you directly to Google or Meta.",
    "Ongoing services run on rolling monthly agreements.",
  ],
  sections: [
    {
      id: "about",
      heading: "About these terms",
      body: [
        "These terms apply when you use DeveloperStudio's services. Your written quote or proposal sets out the specific work, price and timeline for your project. If anything in your quote differs from these terms, the quote applies.",
      ],
    },
    {
      id: "services",
      heading: "Our services",
      body: [
        "We provide web design and development, search engine optimisation (SEO), Google Ads management and social media marketing. The scope of each project is set out in your quote.",
      ],
    },
    {
      id: "quotes",
      heading: "Quotes",
      body: [
        "Our quotes are fixed for the work described. A quote is valid for the period stated on it, or for 30 days if no period is stated. Work outside the agreed scope is quoted separately before we start it.",
      ],
    },
    {
      id: "your-part",
      heading: "What we need from you",
      body: [
        { list: [
          "Content, images and information we ask for, provided on time.",
          "Access to accounts we need, such as your domain, hosting, Google or Meta accounts.",
          "Feedback within the timescales agreed, so the project keeps moving.",
        ] },
        "Delays in providing these may move the timeline. We will always tell you if this happens.",
      ],
    },
    {
      id: "timelines-revisions",
      heading: "Timelines and revisions",
      body: [
        "Timelines in your quote are estimates based on prompt feedback. Website projects include the rounds of revisions stated in your quote. Further changes are quoted separately.",
      ],
    },
    {
      id: "ownership",
      heading: "Who owns the work",
      body: [
        "Once your final invoice is paid in full, you own the website design, code and content we create for you. Accounts such as your domain, hosting, Google Ads, Google Analytics and Meta are set up in your name from the start.",
        "Third-party themes, plugins, fonts, images and software remain under their own licences. We will tell you about any that need paid renewals.",
      ],
    },
    {
      id: "ads-and-results",
      heading: "Advertising and results",
      body: [
        "Advertising spend is paid by you directly to Google, Meta or other platforms, and is separate from our fees. We work hard to get you results, but we cannot guarantee specific rankings, traffic, leads or sales, because these depend on search engines, ad platforms and your market.",
      ],
    },
    {
      id: "third-parties",
      heading: "Third-party services",
      body: [
        "Your website and campaigns rely on services such as hosting providers, Google and Meta. Their own terms apply, and we are not responsible for their outages, policy changes or decisions such as ad disapprovals, although we will help you deal with them.",
      ],
    },
    {
      id: "portfolio",
      heading: "Showing your project",
      body: [
        "We may show work we have done for you in our portfolio and case studies. If you would rather we did not, tell us and we will not. We only publish your results and business name with your permission.",
      ],
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      body: ["We keep your business information and account access confidential and only use it to deliver your project."],
    },
    {
      id: "liability",
      heading: "Limits of our liability",
      body: [
        "Our total liability to you for any claim is limited to the fees you paid us in the 12 months before the claim. We are not liable for indirect losses such as lost profits or lost business. Nothing in these terms limits liability that cannot be limited by law, such as for death or personal injury caused by negligence, or for fraud.",
      ],
    },
    {
      id: "ending",
      heading: "Ending our agreement",
      body: [
        "Ongoing services such as SEO, ads and social media run on rolling monthly agreements and can be ended with the notice set out in your quote. If a website project is cancelled, you pay for the work completed up to that point. When our work ends, we hand over any logins and files that belong to you.",
      ],
    },
    {
      id: "law",
      heading: "Governing law",
      body: ["These terms are governed by the law of England and Wales, and the courts of England and Wales deal with any dispute."],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [`Questions about these terms? Contact us at ${contact}.`],
    },
  ],
};

export const paymentPolicy: LegalPage = {
  slug: "payment-policy",
  title: "Payment & Refund Policy",
  metaTitle: "Payment & Refund Policy | DeveloperStudio",
  description: "How DeveloperStudio invoices, when payment is due, how ad spend works and our refund terms.",
  updated: "13 October 2026",
  summary: [
    "You get a fixed price in writing before any work starts.",
    "Website projects are paid as a deposit and a final balance, as set out in your quote.",
    "Monthly services are invoiced on the same date each month.",
    "Ad spend goes straight to Google or Meta and is never marked up.",
  ],
  sections: [
    {
      id: "pricing",
      heading: "How we price",
      body: ["Every project starts with a written quote showing the fixed price for the agreed work. We do not start work until you have accepted it."],
    },
    {
      id: "website-projects",
      heading: "Website projects",
      body: [
        "Website projects are paid in two parts: a deposit before work starts, and the balance when the website is ready to launch. The amounts are set out in your quote. Larger projects may be split into further milestones, which your quote will show.",
      ],
    },
    {
      id: "monthly-services",
      heading: "Monthly services",
      body: ["SEO, Google Ads management and social media are invoiced monthly in advance, on the same date each month."],
    },
    {
      id: "ad-spend",
      heading: "Advertising spend",
      body: [
        "Ad spend is paid by you directly to Google, Meta or other platforms from your own account. It is not a DeveloperStudio fee, we never add a markup to it, and it is not covered by our refund terms.",
      ],
    },
    {
      id: "how-to-pay",
      heading: "How and when to pay",
      body: [
        "Invoices show the amount due, the payment methods we accept and the date payment is due. If you need different arrangements, talk to us before the due date.",
      ],
    },
    {
      id: "late-payment",
      heading: "Late payment",
      body: [
        "If a business client pays late, we may claim statutory interest and fixed compensation under the Late Payment of Commercial Debts (Interest) Act 1998. Interest is 8% a year above the Bank of England base rate, and compensation is £40, £70 or £100 depending on the size of the debt.",
        "If payment for ongoing services stops, we may pause the work and, after giving you notice, end the agreement. Your accounts and website stay in your name.",
      ],
    },
    {
      id: "refunds",
      heading: "Refunds",
      body: [
        { list: [
          "If you cancel a website project before we start work, we refund your deposit, less any costs we have already paid on your behalf.",
          "Once work has started, we charge for the work completed up to cancellation. Payments for completed work are not refundable.",
          "Monthly services can be ended with the notice in your quote. Months already worked are not refunded.",
          "If something we delivered is not as agreed, tell us and we will put it right first.",
        ] },
      ],
    },
    {
      id: "consumers",
      heading: "If you are buying as an individual",
      body: [
        "If you are a consumer rather than a business, you have the right to cancel within 14 days of agreeing to our services under the Consumer Contracts Regulations 2013. If you ask us to start work within those 14 days and then cancel, you pay for the work done up to that point.",
      ],
    },
    {
      id: "vat",
      heading: "VAT",
      body: ["Your quote and invoices show whether VAT applies and, if so, the rate charged."],
    },
    {
      id: "contact",
      heading: "Questions about payment",
      body: [`Contact us at ${contact}.`],
    },
  ],
};

export const legalPages = [privacyPolicy, cookiePolicy, terms, paymentPolicy];
