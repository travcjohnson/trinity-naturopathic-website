import type { Metadata } from "next";
import Link from "next/link";
import { serviceZones } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Trinity Naturopathic offers naturopathic medicine, regenerative technology, and structural therapy in Coronado, San Diego.",
};

export default function ServicesPage() {
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
            Our Services
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
            }}
          >
            Our Integrated Approach to Optimal Wellness
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#93b8a3" }}>
            We believe in combining advanced diagnostics with proven natural
            therapies. Our Naturopathic Doctors oversee every aspect of your
            treatment.
          </p>
        </div>
      </section>

      {/* Zone 1 */}
      <section
        id="zone-1"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#f4f8f5" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ZoneHeader zone={serviceZones[0]} dark={false} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {serviceZones[0].services.map((svc) => (
              <ServiceCard key={svc.name} service={svc} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Zone 2 */}
      <section
        id="zone-2"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#1a2e22" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ZoneHeader zone={serviceZones[1]} dark={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {serviceZones[1].services.map((svc) => (
              <ServiceCard key={svc.name} service={svc} dark={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Zone 3 */}
      <section
        id="zone-3"
        className="py-20 md:py-28"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <ZoneHeader zone={serviceZones[2]} dark={false} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {serviceZones[2].services.map((svc) => (
              <ServiceCard key={svc.name} service={svc} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#f4f8f5", borderTop: "1px solid #c5d9cd" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "#243b2d",
            }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "#5e6269" }}>
            Book a free 15-minute connection call and we&apos;ll match you with
            the right practitioner and services.
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

function ZoneHeader({
  zone,
  dark,
}: {
  zone: (typeof serviceZones)[0];
  dark: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p
        className="text-xs uppercase tracking-[0.15em] font-bold mb-2"
        style={{ color: dark ? "#d4b04e" : "#2d4d3a" }}
      >
        {zone.zone}
      </p>
      <h2
        className="mb-4"
        style={{
          fontFamily: "var(--font-dm-serif), Georgia, serif",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          color: dark ? "#ffffff" : "#243b2d",
        }}
      >
        {zone.title}
      </h2>
      <p className="text-base leading-relaxed" style={{ color: dark ? "#93b8a3" : "#5e6269" }}>
        {zone.description}
      </p>
    </div>
  );
}

function ServiceCard({
  service,
  dark,
}: {
  service: { name: string; description: string };
  dark: boolean;
}) {
  return (
    <div
      className="rounded-lg p-6 flex flex-col gap-3"
      style={{
        backgroundColor: dark ? "rgba(255,255,255,0.07)" : "#ffffff",
        border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e4e5e7",
        boxShadow: dark ? "none" : "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <h3
        className="text-lg"
        style={{
          fontFamily: "var(--font-dm-serif), Georgia, serif",
          color: dark ? "#ffffff" : "#111318",
        }}
      >
        {service.name}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: dark ? "#93b8a3" : "#5e6269" }}
      >
        {service.description}
      </p>
      <Link
        href="/new-patient"
        className="text-sm font-semibold mt-auto pt-1 inline-flex items-center gap-1 hover:gap-2 transition-all"
        style={{ color: dark ? "#d4b04e" : "#3a6349" }}
      >
        Book This Service →
      </Link>
    </div>
  );
}
