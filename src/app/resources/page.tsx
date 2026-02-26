import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Tools for optimal living — recommended labs, supplements, and patient education from Trinity Naturopathic.",
};

const categories = [
  {
    title: "Patient Education",
    icon: "📖",
    items: [
      "Understanding Root-Cause Medicine",
      "The Naturopathic Approach to Hormones",
      "IV Therapy: What to Expect",
      "Hyperbaric Oxygen Therapy Guide",
      "HOCATT™ Ozone Sauna Overview",
    ],
  },
  {
    title: "Lab Testing",
    icon: "🔬",
    items: [
      "Comprehensive Metabolic Panel",
      "Hormone Panel (Male & Female)",
      "Gut Microbiome Assessment",
      "Advanced Cardiovascular Risk Panel",
      "Nutrient Deficiency Screen",
    ],
  },
  {
    title: "Supplement Protocols",
    icon: "💊",
    items: [
      "Foundational Daily Protocol",
      "Immune Support Stack",
      "Performance & Recovery Protocol",
      "Hormonal Balance Support",
      "Gut Healing Protocol",
    ],
  },
  {
    title: "Lifestyle Tools",
    icon: "🌿",
    items: [
      "Anti-Inflammatory Nutrition Guide",
      "Sleep Optimization Protocol",
      "Stress & HPA Axis Support",
      "Movement & Recovery Principles",
      "Coronado Wellness Community",
    ],
  },
];

export default function ResourcesPage() {
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
            Resources
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
            }}
          >
            Tools for Optimal Living
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#93b8a3" }}>
            Links to recommended labs, supplements, and patient education
            materials curated by the Trinity team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-xl p-8 border"
                style={{ borderColor: "#e4e5e7" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2
                    className="text-xl"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      color: "#243b2d",
                    }}
                  >
                    {cat.title}
                  </h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "#c49a2a" }}
                      />
                      <span className="text-sm" style={{ color: "#44474f" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient-only note */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#f4f8f5", borderTop: "1px solid #c5d9cd" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p
            className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
            style={{ color: "#c49a2a" }}
          >
            For Current Patients
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#243b2d",
            }}
          >
            Full Resource Library Available via Practice Better
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "#5e6269" }}>
            Active patients have access to a personalized resource library,
            custom supplement protocols, and educational content in their patient
            portal.
          </p>
          <Link
            href="/new-patient"
            className="inline-block px-7 py-3.5 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
            style={{
              backgroundColor: "#2d4d3a",
              color: "#ffffff",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Become a Patient →
          </Link>
        </div>
      </section>
    </>
  );
}
