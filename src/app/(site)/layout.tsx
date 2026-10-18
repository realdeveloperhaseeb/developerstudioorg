import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Main site: full navigation, footer and the phone contact bar.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </>
  );
}
