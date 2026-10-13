import type { Metadata } from "next";
import { paymentPolicy } from "@/content/legal";
import { LegalTemplate } from "@/components/LegalTemplate";

export const metadata: Metadata = {
  title: paymentPolicy.metaTitle,
  description: paymentPolicy.description,
  alternates: { canonical: "/payment-policy/" },
};

export default function Page() {
  return <LegalTemplate page={paymentPolicy} />;
}
