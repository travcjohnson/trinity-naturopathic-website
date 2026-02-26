import type { Metadata } from "next";
import Link from "next/link";
import { PHONE } from "@/lib/data";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "Start your health journey at Trinity Naturopathic. Book a free 15-minute connection call and discover your 5-step path to optimal wellness.",
};

const steps = [
  {
    num: "01",
    title: "Free Connection Call",
    description:
      "Schedule a complimentary 15-minute call with our care coordinator. We'll listen to your health goals, answer your questions, and match you with the right practitioner.",
  },
  {
    num: "02",
    title: "Comprehensive Intake",
    description:
      "Complete a thorough health history and intake forms so your practitioner arrives fully prepared to dive deep on your first visit.",
  },
  {
    num: "03",
    title: "Initial Consultation",
    description:
      "Your practitioner conducts a full root-cause assessment — reviewing labs, history, and goals — to build a clear picture of your health.",
  },
  {
    num: "04",
    title: "Personalized Treatment Plan",
    description:
      "Receive a detailed, prioritized plan tailored to your biology, lifestyle, and goals. You'll know exactly what we're doing and why.",
  },
  {
    num: "05",
    title: "Sustained Growth",
    description:
      "Ongoing support, adjustments, and accountability as you progress. We track outcomes and adapt your plan as your health evolves.",
  },
];

const tracks = [
  {
    title: "Female Hormone Health",
    description:
      "Thyroid, adrenal, hormonal balance, peptides, and women's health optimization.",
    doctor: "Dr. Catherine Murray, ND",
    color: "#2d4d3a",
  },
  {
    title: "Men's Health & Performance",
    description:
      "Men's hormones, performance optimization, veteran health, and complex root-cause.",
    doctor: "Dr. Brian Trainor, ND",
    color: "#243b2d",
  },
  {
    title: "Pediatric & Family Wellness",
    description:
      "Gentle naturopathic care for children and families, women's health optimization.",
    doctor: "Dr. Paria Fantini, ND",
    color: "#3a6349",
  },
];

export default function NewPatientPage() {
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
            New Patients
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
            }}
          >
            Your 5-Step Path to Optimal Wellness
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "#93b8a3" }}>
            We make starting simple. A free 15-minute connection call is all it
            takes to begin your personalized health journey.
          </p>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-block px-8 py-4 rounded font-bold text-base tracking-wide transition-all hover:brightness-90"
            style={{
              backgroundColor: "#c49a2a",
              color: "#1a2e22",
              boxShadow: "0 4px 16px rgba(196,154,42,0.35)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Call {PHONE} to Book
          </a>
        </div>
      </section>

      {/* 5 Steps */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <div className="mb-14 text-center">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              The Process
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#243b2d",
              }}
            >
              Simple. Personalized. Effective.
            </h2>
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-6 pb-10 relative"
              >
                {/* Line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-[1.4rem] top-10 bottom-0 w-px"
                    style={{ backgroundColor: "#c5d9cd" }}
                  />
                )}
                {/* Number */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-sm font-bold relative z-10"
                  style={{
                    backgroundColor: "#1a2e22",
                    color: "#c49a2a",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                      color: "#243b2d",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "#44474f" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Tracks */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f4f8f5" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p
              className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
              style={{ color: "#c49a2a" }}
            >
              Find Your Path
            </p>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif), Georgia, serif",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                color: "#243b2d",
              }}
            >
              Which Track Is Right for You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="rounded-lg p-8 flex flex-col gap-4"
                style={{ backgroundColor: track.color }}
              >
                <h3
                  className="text-xl text-white"
                  style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
                >
                  {track.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#93b8a3" }}>
                  {track.description}
                </p>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mt-auto pt-2"
                  style={{ color: "#d4b04e" }}
                >
                  {track.doctor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            Ready to Start?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#93b8a3" }}>
            Your free connection call is waiting. No commitment required —
            just a conversation about your health.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-block px-7 py-3.5 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
              style={{
                backgroundColor: "#c49a2a",
                color: "#1a2e22",
                boxShadow: "0 4px 12px rgba(196,154,42,0.3)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Call {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 rounded font-semibold text-sm tracking-wide transition-all hover:bg-white/10"
              style={{
                color: "#ffffff",
                border: "1.5px solid #6b9a7d",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
