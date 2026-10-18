import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Clock, Mail, MessageSquareText, Phone, PhoneCall, ScrollText } from "lucide-react";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { LeadForm } from "@/components/LeadForm";
import { FaqSection } from "@/components/FaqSection";
import { WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact DeveloperStudio | Rotherham Digital Agency",
  description:
    "Call 07988 563005, WhatsApp or send a message. DeveloperStudio, online agency serving Rotherham, South Yorkshire and the UK. We reply within one working day.",
  alternates: { canonical: "/contact/" },
};

const routes = [
  {
    icon: Phone,
    label: site.phones.uk.label,
    value: site.phones.uk.intl,
    note: "Main number for UK clients",
    href: `tel:${site.phones.uk.tel}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: site.phones.uk.display,
    note: "Message us any time",
    href: site.whatsapp,
    external: true,
  },
  {
    icon: Phone,
    label: site.phones.pk.label,
    value: site.phones.pk.intl,
    note: "Our design and delivery team",
    href: `tel:${site.phones.pk.tel}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    note: site.replyPromise,
    href: `mailto:${site.email}`,
  },
];

const next = [
  { icon: MessageSquareText, title: "We reply", body: `${site.replyPromise}, by WhatsApp, email or phone, whichever you prefer.` },
  { icon: PhoneCall, title: "A free call", body: "A short call to understand your business, your customers and what you want to achieve." },
  { icon: ScrollText, title: "Your plan and quote", body: "A plain-English plan with a fixed price. No obligation and no pushy follow-ups." },
];

const contactFaqs = [
  {
    q: "Are you based in Rotherham?",
    a: "DeveloperStudio is an online agency with no high-street office. We work with businesses in Rotherham, Sheffield, Doncaster, Barnsley and across the UK by phone, WhatsApp and video call.",
  },
  {
    q: "Can we meet on a video call?",
    a: "Yes. We book video calls at a time that suits you, including early mornings and evenings, and share our screen to walk you through plans and reports.",
  },
  {
    q: "Which number should I call?",
    a: `Call the UK team on ${site.phones.uk.display} for new enquiries and account questions. The PK team number is for clients already working with our design and delivery team.`,
  },
  {
    q: "How quickly will you reply?",
    a: `${site.replyPromise}. Phone and WhatsApp are answered 24/7 across our UK and PK teams.`,
  },
];

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contact/`,
          name: "Contact DeveloperStudio",
          about: {
            "@type": "ProfessionalService",
            name: site.name,
            url: site.url,
            email: site.email,
            telephone: site.phones.uk.tel,
            areaServed: ["Rotherham", "Sheffield", "Doncaster", "Barnsley", "South Yorkshire", "United Kingdom"],
            contactPoint: [
              { "@type": "ContactPoint", contactType: "sales", telephone: site.phones.uk.tel, areaServed: "GB", availableLanguage: "en" },
              { "@type": "ContactPoint", contactType: "customer support", telephone: site.phones.pk.tel, availableLanguage: ["en", "ur"] },
            ],
          },
        }}
      />

      {/* Hero with the form */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-start gap-12 px-4 pt-8 pb-16 sm:px-6 sm:pt-10 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:pb-24">
          <div>
            <Breadcrumbs
              className="hero-in"
              items={[
                { name: "Home", href: "/" },
                { name: "Contact", href: "/contact/" },
              ]}
            />
            <h1 className="hero-in mt-8 text-[2.5rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
              Contact DeveloperStudio, digital agency in{" "}
              <span className="relative isolate whitespace-nowrap text-brand-dark">
                <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                Rotherham
              </span>
            </h1>
            <p className="hero-in mt-6 max-w-[540px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
              Call, WhatsApp or send a message. A real person on our team will reply within one working day.
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {routes.map((r, i) => (
                <li key={r.label} className="hero-in" style={{ animationDelay: `${0.24 + i * 0.08}s` }}>
                  <a
                    href={r.href}
                    {...(r.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="group flex h-full items-start gap-4 rounded-2xl bg-white/80 p-4 ring-1 ring-brand backdrop-blur transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-brand/[0.04] hover:shadow-[5px_5px_0_0_#047857]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                      <r.icon aria-hidden className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-bold tracking-[0.12em] text-brand-dark uppercase">{r.label}</span>
                      <span className="block text-[16px] font-bold text-ink">
                        {r.value.includes("@") ? (
                          <>
                            {r.value.split("@")[0]}@<wbr />
                            {r.value.split("@")[1]}
                          </>
                        ) : (
                          r.value
                        )}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-zinc-500">{r.note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="hero-in mt-5 flex items-center gap-2 text-[14px] text-zinc-500 [animation-delay:600ms]">
              <Clock aria-hidden className="size-4 text-brand-dark" />
              {site.hours}.
            </p>
          </div>

          <div className="hero-in [animation-delay:200ms] lg:sticky lg:top-24">
            <div className="rounded-3xl bg-white p-6 shadow-[0_40px_80px_-30px_rgb(10_10_10/0.35)] ring-1 ring-brand sm:p-8">
              <p className="text-2xl font-extrabold tracking-tight text-ink">Send us a message</p>
              <p className="mt-1 mb-6 text-[15px] text-zinc-500">Tell us a little about your business and what you need.</p>
              <LeadForm source="contact" variant="contact" submitLabel="Send message" />
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-mist py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="max-w-2xl">
            <p className="reveal-up inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] text-brand-dark uppercase">
              <span className="h-px w-6 bg-brand-dark" />
              What happens next
            </p>
            <h2 className="reveal-up mt-4 text-3xl font-extrabold tracking-[-0.015em] text-ink [--d:0.08s] sm:text-4xl">
              From your message to a fixed quote
            </h2>
          </InView>
          <InView as="ol" className="mt-10 grid gap-5 md:grid-cols-3" threshold={0.2}>
            {next.map((n, i) => (
              <li key={n.title} className="reveal-up" style={{ "--d": `${0.1 + i * 0.12}s` } as CSSProperties}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-brand transition duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857]">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                      <n.icon aria-hidden className="size-6" />
                    </span>
                    <span className="text-4xl font-extrabold text-brand/20">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink">{n.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{n.body}</p>
                </div>
              </li>
            ))}
          </InView>

          <InView className="mt-12">
            <div className="reveal-up flex flex-col gap-4 rounded-3xl bg-white p-6 ring-1 ring-zinc-200 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="text-[16px] text-zinc-600">
                <strong className="text-ink">{site.areaLine}.</strong> Working with you by phone, WhatsApp and video call.
              </p>
              <ul className="flex flex-wrap gap-2">
                {site.serviceAreas.map((a) => (
                  <li key={a} className="rounded-sm bg-mist px-3.5 py-1.5 text-[13px] font-semibold text-ink ring-1 ring-brand/30">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </InView>
        </div>
      </section>

      <FaqSection items={contactFaqs} title="Before you get in touch" intro="Quick answers about how we work with you." />
    </main>
  );
}
