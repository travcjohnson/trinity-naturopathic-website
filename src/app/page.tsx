import Link from "next/link";
import Image from "next/image";
import { pillars, serviceZones, team } from "@/lib/data";

export default function HomePage() {
  const featuredTeam = team.slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center min-h-[90vh]"
        style={{
          background:
            "linear-gradient(135deg, #1a2e22 0%, #243b2d 50%, #2d4d3a 100%)",
        }}
      >
        <div
          className="absolute right-0 bottom-0 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-dm-serif), Georgia, serif",
            fontSize: "clamp(12rem, 30vw, 24rem)",
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
          }}
        >
          T
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-[620px]">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-5 font-bold"
              style={{ color: "#c49a2a" }}
            >
              Coronado, San Diego
            </p>
            <h1
              className="text-white mb-5 leading-[1.08]"
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
              }}
            >
              Foundational Health.<br />
              Optimal Wellness.
            </h1>
            <p
              className="text-lg mb-10 leading-relaxed"
              style={{ color: "#93b8a3", maxWidth: 520 }}
            >
              San Diego&apos;s premier naturopathic and regenerative medicine
              center. Personalized, expert care for lasting vitality,
              foundational healing, and peak performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/new-patient"
                className="inline-block px-7 py-4 rounded font-bold text-base tracking-wide transition-all hover:brightness-90"
                style={{
                  backgroundColor: "#c49a2a",
                  color: "#1a2e22",
                  boxShadow: "0 4px 16px rgba(196,154,42,0.35)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Start Your Health Journey
              </Link>
              <Link
                href="/services"
                className="inline-block px-7 py-4 rounded font-semibold text-base tracking-wide transition-all hover:bg-white/10"
                style={{
                  color: "#ffffff",
                  border: "1.5px solid #6b9a7d",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Explore Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-12">
              {["Naturopathic Medicine", "Regenerative Technology", "Structural Therapy"].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#c49a2a" }}
                    />
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#6b9a7d" }}
                    >
                      {badge}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="max-w-[720px] mx-auto text-center">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-4"
              style={{ color: "#c49a2a" }}
            >
              Why Choose Trinity?
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#243b2d",
              }}
            >
              Our Commitment: To Leave Everyone Better.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#44474f" }}>
              At Trinity Naturopathic, our goal is to leave everyone better.
              Naturopathic root-cause treatment is the clinical foundation for
              every service we offer. We deliver personalized, accessible,
              affordable, and effective care by meeting you exactly where you
              are. We fundamentally believe that <em>Health is Wealth.</em> Our
              expert team is committed to resolving the root cause of your
              health blocks, delivering lifelong vitality.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f4f8f5" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              The 4 Potent Pillars of Trinity Health
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#243b2d",
              }}
            >
              Your Roadmap to Optimal Wellness
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-lg flex flex-col gap-4"
                style={{ backgroundColor: "#1a2e22" }}
              >
                <div
                  className="text-xs uppercase tracking-[0.15em] font-bold"
                  style={{ color: "#c49a2a" }}
                >
                  Pillar {pillar.number}
                </div>
                <h3
                  className="text-xl text-white leading-snug"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#93b8a3" }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-7 py-3.5 rounded font-semibold text-sm tracking-wide transition-all hover:brightness-90"
              style={{
                backgroundColor: "#2d4d3a",
                color: "#ffffff",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE ZONES PREVIEW ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              Our Integrated Approach
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#243b2d",
              }}
            >
              Three Zones of Expert Care
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {serviceZones.map((zone) => (
              <div
                key={zone.zone}
                className={`rounded-lg p-8 ${zone.bg} ${zone.border}`}
              >
                <div
                  className={`text-xs uppercase tracking-[0.12em] font-bold mb-2 ${zone.accent}`}
                >
                  {zone.zone}
                </div>
                <h3
                  className="text-2xl mb-3"
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    color: zone.dark ? "#ffffff" : "#111318",
                  }}
                >
                  {zone.title}
                </h3>
                <p
                  className="text-sm mb-5 leading-relaxed max-w-2xl"
                  style={{ color: zone.dark ? "#93b8a3" : "#5e6269" }}
                >
                  {zone.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {zone.services.map((svc) => (
                    <span
                      key={svc.name}
                      className="text-sm px-4 py-2 rounded-full"
                      style={{
                        backgroundColor: zone.dark
                          ? "rgba(255,255,255,0.1)"
                          : "#ffffff",
                        color: zone.dark ? "#c5d9cd" : "#44474f",
                        border: zone.dark
                          ? "1px solid rgba(255,255,255,0.15)"
                          : "1px solid #e4e5e7",
                      }}
                    >
                      {svc.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block px-7 py-3.5 rounded font-semibold text-sm tracking-wide transition-all hover:brightness-90"
              style={{
                backgroundColor: "#2d4d3a",
                color: "#ffffff",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f4f8f5" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              Meet Your Practitioners
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#243b2d",
              }}
            >
              Expert Care. Personal Attention.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTeam.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group block rounded-lg overflow-hidden border bg-white hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "#e4e5e7" }}
              >
                <div
                  className="h-72 relative overflow-hidden"
                  style={{ backgroundColor: member.color }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-end justify-center pb-6">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <span
                          className="text-4xl text-white/60"
                          style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                        >
                          {member.initial}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h4
                    className="text-lg mb-0.5"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      color: "#111318",
                    }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium mb-2" style={{ color: "#3a6349" }}>
                    {member.title}
                  </p>
                  <p className="text-xs" style={{ color: "#7a7e85" }}>
                    {member.focus}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/team"
              className="inline-block px-7 py-3.5 rounded font-semibold text-sm tracking-wide border-2 transition-all hover:brightness-90"
              style={{
                color: "#2d4d3a",
                borderColor: "#2d4d3a",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 md:py-28 text-center"
        style={{ background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <p
            className="text-xs uppercase tracking-[0.2em] font-bold mb-4"
            style={{ color: "#c49a2a" }}
          >
            New Patient? Start Here.
          </p>
          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            Your 5-Step Path to Optimal Wellness
          </h2>
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: "#93b8a3" }}>
            Begin with a free 15-minute connection call. We&apos;ll match you
            with the right practitioner and build a personalized plan.
          </p>
          <Link
            href="/new-patient"
            className="inline-block px-8 py-4 rounded font-bold text-base tracking-wide transition-all hover:brightness-90"
            style={{
              backgroundColor: "#c49a2a",
              color: "#1a2e22",
              boxShadow: "0 4px 16px rgba(196,154,42,0.35)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Book Your Connection Call Today →
          </Link>
        </div>
      </section>
    </>
  );
}
