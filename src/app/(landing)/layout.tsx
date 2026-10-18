import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { legalLinks, site } from "@/content/site";
import { WhatsAppIcon } from "@/components/icons";

// Landing pages (free growth plan, thank you): no main navigation, so the page has one goal.
// Used as the destination for ads, WhatsApp and social links.
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-black">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" aria-label="DeveloperStudio home" className="shrink-0">
            <Image src="/images/developer-studio-logo.png" alt="DeveloperStudio" width={367} height={178} loading="eager" className="h-11 w-auto" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-5">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp us"
              className="flex size-10 items-center justify-center rounded-sm border border-white/20 text-white transition-colors hover:border-[#25D366] hover:text-[#25D366] sm:size-auto sm:border-0 sm:gap-2 sm:text-[15px] sm:font-semibold"
            >
              <WhatsAppIcon className="size-[18px]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${site.phones.uk.tel}`}
              className="group inline-flex h-10 items-center gap-2 rounded-sm bg-white/10 px-4 text-[15px] font-semibold text-white transition-colors hover:bg-white/15"
            >
              <Phone aria-hidden className="size-4 text-brand-light transition-transform duration-300 group-hover:-rotate-12" />
              {site.phones.uk.display}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-black py-8 text-[13px] text-zinc-500">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} DeveloperStudio. {site.areaLine}.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
