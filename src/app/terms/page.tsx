import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | NIRO",
  description:
    "Terms and Conditions for Niro, a location-based discovery platform for consumers and merchants.",
};

const sections = [
  {
    id: "nature-of-service",
    title: "Nature of Service",
    clauses: [
      {
        title: "Discovery Platform Definition",
        body: "Niro functions exclusively as a GPS-driven, location-based discovery platform. Its sole purpose is to facilitate meaningful engagement by connecting consumer users directly with local merchants through the sharing of location-relevant promotions and offers. The platform utilizes real-time location data, with user consent, to provide the most relevant local information.",
      },
      {
        title: "Limitation of Transactional Liability",
        body: "The Niro platform is strictly designed as an engagement and informational tool. At no point does Niro process or facilitate any financial transactions, including, but not limited to, payments, bookings, reservations, or checkouts. Niro is not a party to any agreement or transaction entered into between a user and a merchant.",
      },
      {
        title: "Offline Redemption Requirement",
        body: "All promotions, discounts, and offers listed on the Niro platform must be redeemed exclusively offline at the merchant’s physical location or via the merchant’s own separate, external transactional systems. Merchants are responsible for verifying and honoring all valid promotions presented by users.",
      },
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts & Access",
    clauses: [
      {
        title: "Registration and Credentials",
        body: "To utilize the core features of the Niro platform, users must complete a registration process which requires providing a valid, verifiable email address and a secure, unique password. Users are solely responsible for maintaining the confidentiality of their account credentials.",
      },
      {
        title: "Account Verification Process",
        body: "Account activation is mandatory and is completed through a two-factor verification method, either a One-Time Password (OTP) sent to the registered email or a unique verification link. Failure to complete verification will result in limited or prohibited access to the platform’s full functionality.",
      },
      {
        title: "Location Permissions and Data Usage",
        body: "Core discovery features, including the display and updating of localized promotions, are dependent upon the user granting continuous GPS permission. Promotions are dynamically updated and filtered based on the user’s real-time location within an established 30-mile operational radius. User location data is used solely for service delivery and according to the Privacy Policy.",
      },
      {
        title: "Permanent Account Deletion",
        body: "Users have the right to request and execute the permanent deletion of their account through the provided platform mechanism. Once initiated and confirmed, this process is final, irreversible, and results in the removal of all associated user data, subject to data retention policies for legal compliance.",
      },
    ],
  },
  {
    id: "merchant-terms",
    title: "Merchant & Subscription Terms",
    clauses: [
      {
        title: "Subscription Plan Requirements",
        body: "Merchants wishing to list and promote offers on the Niro platform must subscribe to an active, paid plan. Two tiers are available: the Basic Plan ($10/month) and the Premium Plan ($29/month). Each plan offers different levels of access and feature sets, as detailed in the separate Merchant Agreement.",
      },
      {
        title: "Promotion Content Accuracy and Responsibility",
        body: "Merchants bear full and exclusive responsibility for the accuracy, truthfulness, and validity of all promotion content, including all specified terms and conditions, start and end dates, and inventory availability. Niro is not responsible for any disputes arising from inaccurate or misrepresented merchant promotions.",
      },
      {
        title: "Pay-Per-Engagement (PPE) Boosting",
        body: "Merchants may opt-in to Pay-Per-Engagement (PPE) boosting services. This paid feature provides priority placement for their listed promotions, ensuring higher visibility in general search results and inclusion in automated email digests sent to relevant consumer users. PPE costs are calculated based on user interaction metrics.",
      },
    ],
  },
  {
    id: "ratings-reviews",
    title: "Ratings, Reviews & Moderation",
    clauses: [
      {
        title: "User Feedback Mechanism",
        body: "Niro provides users with the ability to offer feedback on merchants and promotions through a standard ratings system (1 to 5 stars) and descriptive written reviews. All feedback must be genuine and based on the user’s actual experience.",
      },
      {
        title: "Moderation Rights and Policies",
        body: "The Super Admin Panel retains the unqualified right to review, flag, and remove any content deemed inappropriate, offensive, misleading, or in violation of these Terms or community guidelines. This includes the removal of inappropriate promotions or flagged user reviews at the sole discretion of the platform administrator.",
      },
      {
        title: "Reporting Violations",
        body: "Users are encouraged to utilize the reporting function for promotions that are perceived as spam, misleading in their terms, inappropriate in content, or expired beyond their stated end date. All reports are investigated by the Moderation team.",
      },
    ],
  },
  {
    id: "external-links",
    title: "External Links & Communications",
    clauses: [
      {
        title: "Third-Party Link Disclaimer",
        body: "Merchant profiles may contain hyperlinks that direct users to external, third-party websites (e.g., merchant’s official website, booking page). Niro explicitly disclaims all responsibility and liability for the content, security, privacy practices, or accuracy of any information presented on external sites. Accessing third-party links is done at the user’s own risk.",
      },
      {
        title: "User Notification Options",
        body: "Users have the option to actively opt into various notification types. These include alerts for new, relevant promotions in their area, ‘watcher-only’ alerts related to specific promotions they are tracking, and essential admin announcements regarding platform service changes or updates. Users can manage these preferences within their account settings.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="niro-legal-page">
          <div className="niro-legal-hero">
            <p className="niro-legal-kicker">Legal</p>
            <h1 className="niro-legal-title">Terms &amp; Conditions</h1>
            <p className="niro-legal-intro">
              Welcome to the Terms and Conditions for Niro, a location-based
              discovery platform. These comprehensive terms govern your access
              and use of the Niro service, whether you are a consumer user
              seeking local deals or a subscribing merchant listing promotions.
              By accessing, browsing, or using any part of the Niro platform,
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms and Conditions in their entirety.
            </p>
            <nav className="niro-legal-toc" aria-label="Terms sections">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="niro-legal-sections">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="niro-legal-section"
              >
                <header className="niro-legal-section-head">
                  <span className="niro-legal-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{section.title}</h2>
                </header>
                <div className="niro-legal-clauses">
                  {section.clauses.map((clause) => (
                    <div key={clause.title} className="niro-legal-clause">
                      <h3>{clause.title}</h3>
                      <p>{clause.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
