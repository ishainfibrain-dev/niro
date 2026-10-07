import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { termsCopy } from "@/i18n/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | NIRO",
  description:
    "Terms and Conditions for Niro, a location-based discovery platform for consumers and merchants.",
};

export default function TermsPage() {
  return <LegalDocument copy={termsCopy} />;
}
