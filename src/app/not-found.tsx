import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Home, Phone, Wrench } from "lucide-react";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

// Real 404 page: the server returns a 404 status and Next.js adds noindex.
// Missing pages are not redirected to the home page, which Google treats as a "soft 404".
export const metadata: Metadata = {
  title: "Page not found | DeveloperStudio",
};

const links = [
  { icon: Home, label: "Home page", href: "/" },
  { icon: Wrench, label: "Our services", href: "/services/" },
  { icon: Briefcase, label: "Our work", href: "/work/" },
  { icon: BookOpen, label: "Guides and advice", href: "/blog/" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1fr]">
          <div>
            <p
              aria-hidden
              className="hero-in bg-gradient-to-r from-brand-dark to-brand-light bg-clip-text text-[7rem] leading-none font-extrabold tracking-tighter text-transparent sm:text-[10rem]"
            >
              404
            </p>
            <h1 className="hero-in mt-2 text-4xl font-extrabold tracking-[-0.015em] text-ink [animation-delay:100ms] sm:text-5xl">
              Sorry, we couldn&apos;t find that page
            </h1>
            <p className="hero-in mt-5 max-w-[520px] text-lg leading-relaxed text-zinc-600 [animation-delay:180ms]">
              It may have moved when we rebuilt our website. Try one of these pages, or talk to us directly.
            </p>
            <div className="hero-in mt-8 flex flex-wrap gap-3 [animation-delay:260ms]">
              <Link
                href="/free-growth-plan/"
                className="btn-shine group inline-flex h-12 items-center gap-2 rounded-sm bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
              >
                Get your free growth plan
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${site.phones.uk.tel}`}
                className="inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-6 text-[15px] font-bold text-white"
              >
                <Phone aria-hidden className="size-4" />
                Call {site.phones.uk.display}
              </a>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map((l, i) => (
              <li key={l.href} className="hero-in" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                <Link
                  href={l.href}
                  className="group flex h-full items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand transition duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-dark text-white transition-transform duration-300 group-hover:-rotate-6">
                    <l.icon aria-hidden className="size-5" />
                  </span>
                  <span className="flex-1 font-bold text-ink">{l.label}</span>
                  <ArrowRight aria-hidden className="size-4 text-brand-dark transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
