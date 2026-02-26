import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { team, strategicPartners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Trinity Naturopathic's multidisciplinary team of naturopathic doctors and wellness specialists in Coronado, San Diego.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <p
            className="text-xs uppercase tracking-[0.2em] font-bold mb-4"
            style={{ color: "#c49a2a" }}
          >
            The Team
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
            }}
          >
            Expert Care. Personal Attention.
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#93b8a3" }}>
            Our multidisciplinary team brings together naturopathic physicians,
            regenerative medicine specialists, and bodywork experts — all united
            by one mission: to leave you better.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group block rounded-lg overflow-hidden border bg-white hover:shadow-xl transition-all duration-300"
                style={{ borderColor: "#e4e5e7" }}
              >
                {/* Photo */}
                <div
                  className="h-80 relative overflow-hidden"
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
                    <div className="w-full h-full flex items-center justify-center">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <span
                          className="text-5xl text-white/50"
                          style={{
                            fontFamily:
                              "var(--font-dm-serif), Georgia, serif",
                          }}
                        >
                          {member.initial}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3
                    className="text-xl mb-1"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      color: "#111318",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-3"
                    style={{ color: "#3a6349" }}
                  >
                    {member.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#7a7e85" }}>
                    {member.focus}
                  </p>
                  <div
                    className="mt-4 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: "#3a6349" }}
                  >
                    View Full Bio →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f4f8f5" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              Strategic Partners
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#243b2d",
              }}
            >
              Expanding the Circle of Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-lg p-8 border bg-white"
                style={{ borderColor: "#e4e5e7" }}
              >
                <p
                  className="text-xs uppercase tracking-[0.15em] font-bold mb-2"
                  style={{ color: "#3a6349" }}
                >
                  {partner.role}
                </p>
                <h3
                  className="text-xl mb-1"
                  style={{
                    fontFamily: "var(--font-dm-serif), Georgia, serif",
                    color: "#111318",
                  }}
                >
                  {partner.name}
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: "#5e6269" }}
                >
                  {partner.title}
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#44474f" }}>
                  {partner.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {partner.expertise.map((e) => (
                    <span
                      key={e}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "#e8f0eb",
                        color: "#2d4d3a",
                      }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            Find Your Right Practitioner
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "#93b8a3" }}>
            Not sure which team member is right for you? Book a free connection
            call and we&apos;ll guide you to the best match.
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
            Book Your Free Connection Call
          </Link>
        </div>
      </section>
    </>
  );
}
