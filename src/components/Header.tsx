"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header tightens and turns translucent once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation, and stop the page scrolling behind it.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${scrolled ? "bg-black/85 shadow-[0_10px_30px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl" : "bg-black"}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-black"
      >
        Skip to content
      </a>

      <div className={`mx-auto flex max-w-[1200px] items-center gap-8 px-4 transition-[height] duration-300 sm:px-6 ${scrolled ? "h-16" : "h-[72px]"}`}>
        <Link href="/" aria-label="DeveloperStudio home" className="shrink-0">
          <Image
            src="/images/developer-studio-logo.png"
            alt="DeveloperStudio"
            width={367}
            height={178}
            loading="eager"
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-11" : "h-12 sm:h-[52px]"}`}
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.label === "Services" ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="nav-link flex items-center gap-1 rounded-md px-3 py-2 text-[15px] font-medium text-zinc-300 transition-colors hover:text-white"
                  >
                    Services
                    <ChevronDown aria-hidden className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute top-full -left-2 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="w-72 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}/`}
                            className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-mist"
                          >
                            <span className="block text-[15px] font-semibold text-ink">{s.name}</span>
                            <span className="block text-[13px] leading-snug text-zinc-500">{s.card}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="nav-link rounded-md px-3 py-2 text-[15px] font-medium text-zinc-300 transition-colors hover:text-white aria-[current=page]:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <a
            href={`tel:${site.phones.uk.tel}`}
            className="group hidden items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-brand-light xl:flex"
          >
            <Phone aria-hidden className="size-4 text-brand-light transition-transform duration-300 group-hover:-rotate-12" />
            {site.phones.uk.display}
          </a>
          <Link
            href="/free-growth-plan/"
            className="btn-shine hidden h-11 items-center rounded-full bg-brand-dark px-5 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper sm:inline-flex"
          >
            Free Growth Plan
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-white lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-black lg:hidden">
        <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-4 pt-4 pb-32 sm:px-6">
          <p className="px-3 pb-2 text-[12px] font-semibold tracking-widest text-zinc-500 uppercase">Services</p>
          <ul className="border-b border-white/10 pb-4">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="block rounded-md px-3 py-3 text-lg font-semibold text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="pt-4">
            {nav
              .filter((n) => n.label !== "Services")
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="block rounded-md px-3 py-3 text-lg font-medium text-zinc-300">
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
          <Link
            href="/free-growth-plan/"
            className="mt-6 flex h-12 items-center justify-center rounded-full bg-brand-dark font-bold text-white"
          >
            Get your free growth plan
          </Link>
        </nav>
      </div>
    </header>
  );
}
