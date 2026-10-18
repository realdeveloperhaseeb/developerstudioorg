import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { WhatsAppIcon } from "./icons";

// Always-visible contact bar on phones: call, WhatsApp and the free plan.
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="grid grid-cols-[1fr_1fr_1.3fr] gap-2">
        <a
          href={`tel:${site.phones.uk.tel}`}
          className="flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-white/80 text-[15px] font-semibold text-white"
        >
          <Phone aria-hidden className="size-4" />
          Call
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener"
          className="flex h-12 items-center justify-center gap-2 rounded-sm border-2 border-white/80 text-[15px] font-semibold text-white"
        >
          <WhatsAppIcon className="size-[18px]" />
          WhatsApp
        </a>
        <Link href="/free-growth-plan/" className="flex h-12 items-center justify-center rounded-sm bg-brand-dark text-[15px] font-bold text-white">
          Free Plan
        </Link>
      </div>
    </div>
  );
}
