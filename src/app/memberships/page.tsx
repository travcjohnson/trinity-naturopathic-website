import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Trinity Naturopathic membership plans — Simple Wellness, Hormone, and Luxury. Maintain your health momentum with accessible monthly options.",
};

const tiers = [
  {
    name: "Simple Wellness",
    tagline: "Foundational Health Support",
    description:
      "Our entry-level membership designed to keep you on track with foundational naturopathic care, preventive support, and priority access.",
    features: [
      "15% discount on all services and products",
      "Priority scheduling",
      "Access to member-only educational content",
      "Quarterly wellness check-in",
    ],
    highlight: false,
    color: "#f4f8f5",
    border: "#c5d9cd",
  },
  {
    name: "Hormone",
    tagline: "Precision Hormonal Optimization",
    description:
      "Comprehensive hormonal health management with ongoing lab monitoring, peptide protocols, and dedicated practitioner support.",
    features: [
      "Everything in Simple Wellness",
      "15% discount on all services and products",
      "Monthly hormone panel review",
      "Dedicated practitioner support",
      "Customized peptide and supplement protocols",
      "Priority same-day scheduling",
    ],
    highlight: true,
    color: "#1a2e22",
    border: "transparent",
  },
  {
    name: "Luxury",
    tagline: "Fully Customized Annual Strategy",
    description:
      "The ultimate concierge wellness experience. A customized annual health strategy with quarterly ND consultations, deep discounts, and white-glove access.",
    features: [
      "Everything in Hormone",
      "Customized annual health strategy",
      "Quarterly ND consultations",
      "Deep discounts on all services",
      "Exclusive access to new therapies",
      "Concierge scheduling and support",
    ],
    highlight: false,
    color: "#f4f8f5",
    border: "#c5d9cd",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] font-bold mb-4"
            style={{ color: "#c49a2a" }}
          >
            Memberships
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
            }}
          >
            Maintain Your Health Momentum
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#93b8a3" }}>
            Maximize your investment with accessible monthly membership options.
            All memberships include a{" "}
            <strong style={{ color: "#d4b04e" }}>15% discount</strong> on all
            services and products.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-xl p-8 flex flex-col gap-5 relative"
                style={{
                  backgroundColor: tier.color,
                  border: `1px solid ${tier.border}`,
                }}
              >
                {tier.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "#c49a2a", color: "#1a2e22" }}
                  >
                    Most Popular
                  </div>
                )}
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.15em] font-bold mb-2"
                    style={{ color: tier.highlight ? "#d4b04e" : "#c49a2a" }}
                  >
                    {tier.tagline}
                  </p>
                  <h2
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      color: tier.highlight ? "#ffffff" : "#243b2d",
                    }}
                  >
                    {tier.name}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: tier.highlight ? "#93b8a3" : "#5e6269" }}
                  >
                    {tier.description}
                  </p>
                </div>

                <div
                  className="py-1"
                  style={{
                    borderTop: `1px solid ${tier.highlight ? "#2d4d3a" : "#c5d9cd"}`,
                  }}
                />

                <ul className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className="text-xs mt-0.5 shrink-0"
                        style={{ color: "#c49a2a" }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: tier.highlight ? "#c5d9cd" : "#44474f" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <p
                    className="text-xs mb-4 italic"
                    style={{ color: tier.highlight ? "#6b9a7d" : "#7a7e85" }}
                  >
                    Pricing available upon consultation
                  </p>
                  <Link
                    href="/new-patient"
                    className="block text-center py-3 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
                    style={{
                      backgroundColor: tier.highlight ? "#c49a2a" : "#2d4d3a",
                      color: tier.highlight ? "#1a2e22" : "#ffffff",
                      fontFamily: "var(--font-dm-sans), sans-serif",
                    }}
                  >
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style note */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#f4f8f5" }}>
        <div className="max-w-[720px] mx-auto px-6 md:px-10 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#243b2d",
            }}
          >
            Questions About Memberships?
          </h2>
          <p className="text-base mb-8 leading-relaxed" style={{ color: "#5e6269" }}>
            Our care coordinator can walk you through the best membership option
            for your health goals and budget. Book a free connection call to learn
            more.
          </p>
          <Link
            href="/new-patient"
            className="inline-block px-7 py-3.5 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
            style={{
              backgroundColor: "#c49a2a",
              color: "#1a2e22",
              boxShadow: "0 4px 12px rgba(196,154,42,0.3)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
