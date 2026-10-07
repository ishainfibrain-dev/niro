import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { privacyCopy } from "@/i18n/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | NIRO",
  description:
    "Privacy Policy for Niro, describing how information is collected, used, shared, and protected.",
};

export default function PrivacyPage() {
  return <LegalDocument copy={privacyCopy} />;
}
