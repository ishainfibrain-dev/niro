import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | NIRO",
  description:
    "Privacy Policy for Niro, describing how information is collected, used, shared, and protected.",
};

const sections = [
  {
    id: "information-collection",
    title: "Information Collection",
    clauses: [
      {
        title: "Personal Data",
        body: "We collect essential personal identifiers, specifically email addresses and securely hashed passwords, which are required to establish and maintain a user account for both customer and merchant registration. This data is the foundation for platform access and service personalization.",
      },
      {
        title: "Social Login",
        body: "Users have the option to register or log in using third-party social services (e.g., Google or Apple). If you choose this convenience, Niro may collect data necessary to authenticate your identity from these services, adhering to their respective terms and privacy policies.",
      },
      {
        title: "Location Data",
        body: "To fulfill the core functionality of connecting users with nearby promotions and merchants, Niro requires and collects real-time GPS data. This data is essential for service delivery, including merchant ranking and displaying location-based services.",
      },
      {
        title: "Business Information",
        body: "For our merchant partners, we collect detailed business-specific data including registered business names, commercial categories, official contact details, physical store addresses, and brand logos. This information is utilized to create and verify merchant profiles on the Niro platform.",
      },
    ],
  },
  {
    id: "use-of-information",
    title: "Use of Information",
    clauses: [
      {
        title: "Service Delivery",
        body: "The primary use of collected location data is to personalize the user experience by accurately ranking merchants and displaying targeted, relevant promotions that are physically nearby the user’s current location.",
      },
      {
        title: "Watcher System and Loyalty Notifications",
        body: "When a user actively chooses to “Watch” a specific business, their engagement data is utilized by our system. This data is processed to trigger automated, loyalty-based notifications, alerting the user to new or relevant promotions from the watched business.",
      },
      {
        title: "Analytics and Performance Metrics",
        body: "We collect non-personal engagement data, including views, clicks, saves, and shares of promotions. This aggregated data is used to generate performance metrics, which are provided to merchants to help them optimize their campaigns and to platform administrators for system-wide service improvement.",
      },
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing & Disclosure",
    clauses: [
      {
        title: "Merchant Analytics",
        body: "We share aggregated and anonymized analytical data with merchants. This includes metrics such as total number of watchers, user growth trends for their business, and general engagement metrics related to their promotions. This sharing is strictly limited to non-personally identifiable information.",
      },
      {
        title: "Protection of Personal Data",
        body: "Merchants specifically do not have access to user personal email addresses, passwords, or specific location history. We are committed to protecting user identity from merchant access.",
      },
      {
        title: "Admin Access for Support and Management",
        body: "Our authorized Super Admins are granted full access to platform-wide statistics for operational oversight and system management. They also have access to user support tickets, which may contain necessary personal or transaction details, exclusively for the purpose of resolving support and service issues.",
      },
    ],
  },
  {
    id: "user-controls",
    title: "User Controls & Preferences",
    clauses: [
      {
        title: "Customization of Preferences",
        body: "Users are provided with granular control over their experience. They can customize their profile to reflect preferred business categories, select specific promotion types they wish to see, and set their notification frequency (Immediate, Daily, Weekly, or Off) to manage the volume of communications received.",
      },
      {
        title: "Management of Saved Content",
        body: "Users maintain full control over their saved promotions. A dedicated section within the app allows users to manage, view, and organize their list of saved content at any time.",
      },
      {
        title: "Data Updates and Account Deletion",
        body: "Users can easily update their registration details, such as their email or password, within the application settings. Crucially, a permanent account deletion request is honored, which initiates the irreversible removal of all associated personal user data from the Niro platform.",
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    clauses: [
      {
        title: "Robust Verification Procedures",
        body: "To ensure the integrity of our user base, we utilize One-Time Password (OTP) verification for both new customer sign-ups and merchant registration processes, adding an essential layer of identity confirmation.",
      },
      {
        title: "Super Admin Panel Security",
        body: "Access to the Super Admin Panel is secured with mandatory Two-Factor Authentication (2FA) and strictly enforced role-based access control (RBAC). These measures ensure that only authorized personnel can access sensitive platform data and functionality, minimizing the risk of unauthorized access.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="niro-legal-page">
          <div className="niro-legal-hero">
            <p className="niro-legal-kicker">Legal</p>
            <h1 className="niro-legal-title">Privacy Policy</h1>
            <p className="niro-legal-intro">
              This Privacy Policy describes how Niro (“we,” “us,” or “our”)
              collects, uses, shares, and protects information in connection
              with your use of the Niro mobile application and services. We are
              committed to protecting your privacy and ensuring you have a
              positive experience on our platform.
            </p>
            <nav className="niro-legal-toc" aria-label="Privacy sections">
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
