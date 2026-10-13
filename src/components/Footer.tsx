import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Clock, Mail, Phone } from "lucide-react";
import { legalLinks, site } from "@/content/site";
import { services } from "@/content/services";
import { WhatsAppIcon } from "./icons";
import { InView } from "./InView";
import { SocialIcons } from "./SocialIcons";
import { CookieSettingsLink } from "./CookieConsent";

const company = [
  { label: "Our work", href: "/work/" },
  { label: "Case studies", href: "/case-studies/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About us", href: "/about/" },
  { label: "Team", href: "/team/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-[15px] text-zinc-400 transition-colors hover:text-white">
      <span aria-hidden className="h-px w-0 bg-brand-light transition-all duration-300 group-hover:w-3" />
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-black pb-[76px] text-white md:pb-0">
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
          <div>
            <Link href="/" aria-label="DeveloperStudio home" className="inline-block">
              <Image src="/images/developer-studio-logo.png" alt="DeveloperStudio" width={367} height={178} className="h-14 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-zinc-400">{site.entity}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] font-medium text-zinc-300">
              <span className="relative flex size-2">
                <span className="ping absolute inline-flex size-full rounded-full bg-brand-light opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-light" />
              </span>
              {site.areaLine}
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-[13px] font-bold tracking-[0.16em] text-white uppercase">Services</h2>
            <ul className="mt-5 grid gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/services/${s.slug}/`}>{s.name}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/free-growth-plan/">Free growth plan</FooterLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-[13px] font-bold tracking-[0.16em] text-white uppercase">Company</h2>
            <ul className="mt-5 grid gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <FooterLink href={c.href}>{c.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[13px] font-bold tracking-[0.16em] text-white uppercase">Get in touch</h2>
            <ul className="mt-5 grid gap-4 text-[15px]">
              {[site.phones.uk, site.phones.pk].map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="group flex items-start gap-3 text-zinc-400 transition-colors hover:text-white">
                    <Phone aria-hidden className="mt-1 size-4 shrink-0 text-brand-light transition-transform duration-300 group-hover:-rotate-12" />
                    <span>
                      <span className="block text-[12px] font-bold tracking-[0.12em] text-zinc-500 uppercase">{p.label}</span>
                      <span className="font-semibold text-zinc-200">{p.intl}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                  <WhatsAppIcon className="size-4 shrink-0 text-brand-light" />
                  WhatsApp {site.phones.uk.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-zinc-400 transition-colors hover:text-white">
                  <Mail aria-hidden className="size-4 shrink-0 text-brand-light" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <Clock aria-hidden className="mt-1 size-4 shrink-0 text-brand-light" />
                {site.hours}
              </li>
            </ul>
            <SocialIcons className="mt-7" />
          </div>
        </div>

        {/* Signature: oversized wordmark that fills with green as it scrolls into view. */}
        <InView threshold={0.4}>
          <p aria-hidden className="wordmark mt-16 pb-[0.06em] text-center text-[12vw] leading-[0.9] font-extrabold tracking-[-0.05em] select-none lg:text-[9.4rem]">
            DeveloperStudio
          </p>
        </InView>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/10 py-8 text-[13px] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} DeveloperStudio. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink className="transition-colors hover:text-white" />
            </li>
          </ul>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start font-semibold text-zinc-300 transition-colors hover:text-white md:self-auto"
          >
            Back to top
            <span className="flex size-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-light group-hover:bg-brand-dark">
              <ArrowUp aria-hidden className="size-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
