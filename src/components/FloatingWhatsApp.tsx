import { site } from "@/content/site";
import { WhatsAppIcon } from "./icons";

// Square WhatsApp button fixed bottom-right on desktop. Phones use the bottom contact bar instead.
export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Message DeveloperStudio on WhatsApp"
      className="group fixed right-6 bottom-6 z-40 hidden items-center gap-0 rounded-sm bg-brand-dark p-3.5 text-white shadow-[0_12px_28px_-8px_rgb(4_120_87/0.7)] ring-1 ring-white/20 transition-all duration-300 hover:gap-2.5 hover:bg-brand-deeper hover:pr-5 md:flex"
    >
      <WhatsAppIcon className="size-6" />
      <span className="max-w-0 overflow-hidden text-[15px] font-semibold whitespace-nowrap transition-[max-width] duration-300 group-hover:max-w-40">
        WhatsApp us
      </span>
    </a>
  );
}
