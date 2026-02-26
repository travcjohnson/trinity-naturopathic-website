import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Trinity Insights: Expert articles on foundational health, hormones, performance, and regenerative medicine.",
};

const pillars = [
  { label: "Foundational Health", color: "#e8f0eb", text: "#2d4d3a" },
  { label: "Elite Performance", color: "#1a2e22", text: "#93b8a3" },
  { label: "Hormonal Health", color: "#faf3de", text: "#8a6914" },
  { label: "Recovery Therapies", color: "#f4f8f5", text: "#3a6349" },
];

// Placeholder posts — replace with CMS or MDX when ready
const posts = [
  {
    pillar: "Foundational Health",
    title: "Why Root-Cause Medicine Changes Everything",
    excerpt:
      "Most conventional care treats symptoms. Naturopathic medicine digs deeper — identifying and resolving the underlying imbalances driving your health challenges.",
    date: "February 2026",
    author: "Dr. Brian Trainor, ND",
  },
  {
    pillar: "Hormonal Health",
    title: "The Thyroid-Adrenal Connection: What Your Doctor May Be Missing",
    excerpt:
      "Fatigue, weight changes, and mood swings are often blamed on a single system. Here's why the thyroid-adrenal axis needs to be evaluated together.",
    date: "February 2026",
    author: "Dr. Catherine Murray, ND",
  },
  {
    pillar: "Recovery Therapies",
    title: "HOCATT™ Ozone Sauna: The Science Behind the Sessions",
    excerpt:
      "Transdermal ozone, far-infrared heat, and CO2 therapy in a single session. We break down the clinical mechanisms that make HOCATT so effective.",
    date: "January 2026",
    author: "Trinity Naturopathic Team",
  },
  {
    pillar: "Elite Performance",
    title: "Peptide Therapy for Performance: A Naturopathic Perspective",
    excerpt:
      "Peptides offer targeted physiological support for muscle recovery, cognitive function, and hormonal balance — but protocol matters.",
    date: "January 2026",
    author: "Dr. Brian Trainor, ND",
  },
  {
    pillar: "Foundational Health",
    title: "Pediatric Naturopathic Care: A Gentle Start for Lifelong Health",
    excerpt:
      "Early interventions in gut health, immune resilience, and nutrition lay the foundation for a lifetime of vitality.",
    date: "December 2025",
    author: "Dr. Paria Fantini, ND",
  },
  {
    pillar: "Recovery Therapies",
    title: "Hyperbaric Oxygen Therapy: Applications Beyond Wound Care",
    excerpt:
      "HBOT has expanded far beyond its traditional applications. Current evidence supports its use in neurological recovery, immune modulation, and performance.",
    date: "December 2025",
    author: "Trinity Naturopathic Team",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-[0.2em] font-bold mb-4"
              style={{ color: "#c49a2a" }}
            >
              Trinity Insights
            </p>
            <h1
              className="text-white mb-5"
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
              }}
            >
              Your Guide to Optimal Wellness and Foundational Health
            </h1>
            <p className="text-lg mb-8" style={{ color: "#93b8a3" }}>
              Expert articles across the 4 Pillars of Trinity Health — written
              by our practitioners to help you understand your body and make
              informed decisions.
            </p>
          </div>

          {/* Pillar filters */}
          <div className="flex flex-wrap gap-2">
            <span
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: "#c49a2a", color: "#1a2e22" }}
            >
              All
            </span>
            {pillars.map((p) => (
              <span
                key={p.label}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#93b8a3",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-xl overflow-hidden border bg-white hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                style={{ borderColor: "#e4e5e7" }}
              >
                {/* Pillar tag */}
                <div
                  className="h-2"
                  style={{ backgroundColor: "#2d4d3a" }}
                />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "#3a6349" }}
                  >
                    {post.pillar}
                  </span>
                  <h3
                    className="text-xl leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      color: "#111318",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#5e6269" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: "#e4e5e7" }}>
                    <span className="text-xs" style={{ color: "#7a7e85" }}>
                      {post.author}
                    </span>
                    <span className="text-xs" style={{ color: "#a0a3a8" }}>
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p
            className="text-xs uppercase tracking-[0.2em] font-bold mb-3"
            style={{ color: "#c49a2a" }}
          >
            Stay Informed
          </p>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            Subscribe for Weekly Insights
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#93b8a3" }}>
            Get the latest articles from our practitioners delivered directly to
            your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded text-sm"
              style={{ color: "#111318", border: "none", outline: "none" }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
              style={{
                backgroundColor: "#c49a2a",
                color: "#1a2e22",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
