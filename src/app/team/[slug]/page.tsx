import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { team, trainorTimeline } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: member.name,
    description: `${member.name} — ${member.title} at Trinity Naturopathic in Coronado, San Diego.`,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const isTrainor = member.slug === "dr-brian-trainor";

  return (
    <>
      {/* Hero */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm mb-8 hover:text-white transition-colors"
            style={{ color: "#6b9a7d" }}
          >
            ← Back to Team
          </Link>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div
              className="w-full md:w-72 shrink-0 rounded-xl overflow-hidden"
              style={{
                height: 380,
                backgroundColor: member.color,
                position: "relative",
              }}
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span
                    className="text-8xl text-white/30"
                    style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                  >
                    {member.initial}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <p
                className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
                style={{ color: "#c49a2a" }}
              >
                {member.title}
              </p>
              <h1
                className="text-white mb-2"
                style={{
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 3rem)",
                }}
              >
                {member.name}
              </h1>
              <p className="text-base mb-6" style={{ color: "#93b8a3" }}>
                {member.focus}
              </p>

              {/* Expertise tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {member.expertise.map((e) => (
                  <span
                    key={e}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      backgroundColor: "rgba(196,154,42,0.15)",
                      color: "#d4b04e",
                      border: "1px solid rgba(196,154,42,0.3)",
                    }}
                  >
                    {e}
                  </span>
                ))}
              </div>

              <Link
                href="/new-patient"
                className="inline-block px-6 py-3 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
                style={{
                  backgroundColor: "#c49a2a",
                  color: "#1a2e22",
                  boxShadow: "0 4px 12px rgba(196,154,42,0.3)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                Book with {member.name.split(" ")[1]} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#243b2d",
            }}
          >
            About {member.name.split(",")[0]}
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "#44474f" }}>
            {member.bio}
          </p>

          {/* Therapies if available */}
          {"therapies" in member && Array.isArray(member.therapies) && (
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "#f4f8f5",
                border: "1px solid #c5d9cd",
              }}
            >
              <h3
                className="text-base font-bold mb-3"
                style={{ color: "#243b2d" }}
              >
                Targeted Therapies
              </h3>
              <div className="flex flex-wrap gap-2">
                {(member.therapies as string[]).map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "#e8f0eb",
                      color: "#2d4d3a",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {"website" in member && member.website && (
            <p className="mt-6 text-sm" style={{ color: "#5e6269" }}>
              Visit:{" "}
              <span style={{ color: "#3a6349" }}>
                {member.website as string}
              </span>
            </p>
          )}
        </div>
      </section>

      {/* Dr. Trainor Timeline */}
      {isTrainor && (
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f4f8f5" }}>
          <div className="max-w-[800px] mx-auto px-6 md:px-10">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              The Journey
            </p>
            <h2
              className="mb-10"
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#243b2d",
              }}
            >
              Building a Foundation of Excellence
            </h2>
            <div className="relative">
              <div
                className="absolute left-[88px] top-0 bottom-0 w-px"
                style={{ backgroundColor: "#c5d9cd" }}
              />
              <div className="flex flex-col gap-8">
                {trainorTimeline.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div
                      className="text-sm font-bold tabular-nums w-16 shrink-0 pt-1 text-right"
                      style={{ color: "#c49a2a" }}
                    >
                      {item.year}
                    </div>
                    <div
                      className="w-4 h-4 rounded-full shrink-0 mt-1.5 relative z-10"
                      style={{ backgroundColor: "#2d4d3a", border: "3px solid #f4f8f5" }}
                    />
                    <div>
                      <p
                        className="font-semibold mb-1"
                        style={{ color: "#243b2d" }}
                      >
                        {item.milestone}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "#5e6269" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Book CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "linear-gradient(135deg, #1a2e22 0%, #2d4d3a 100%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            }}
          >
            Ready to Work with {member.name.split(",")[0]}?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#93b8a3" }}>
            Book a free connection call to get started on your personalized
            health journey.
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
