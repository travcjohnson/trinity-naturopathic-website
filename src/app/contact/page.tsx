import type { Metadata } from "next";
import { PHONE, ADDRESS, EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Trinity Naturopathic in Coronado, San Diego. Book your free connection call or send us a message.",
};

export default function ContactPage() {
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
            Get In Touch
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
            }}
          >
            Start Your Journey to Optimal Wellness
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#93b8a3" }}>
            We&apos;re here to answer your questions and help you take the
            first step toward lasting health.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.15em] font-bold mb-4"
                  style={{ color: "#c49a2a" }}
                >
                  Contact Information
                </p>
                <div className="flex flex-col gap-5">
                  <ContactItem
                    icon="📍"
                    label="Address"
                    value={ADDRESS}
                    href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
                  />
                  <ContactItem
                    icon="📞"
                    label="Phone"
                    value={PHONE}
                    href={`tel:${PHONE.replace(/\D/g, "")}`}
                  />
                  <ContactItem
                    icon="✉️"
                    label="Email"
                    value={EMAIL}
                    href={`mailto:${EMAIL}`}
                  />
                </div>
              </div>

              {/* Map embed placeholder */}
              <div
                className="rounded-xl overflow-hidden border"
                style={{ height: 240, borderColor: "#e4e5e7" }}
              >
                <iframe
                  title="Trinity Naturopathic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.9!2d-117.17!3d32.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z1224+10th+St+Coronado+CA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Hours placeholder */}
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: "#f4f8f5", border: "1px solid #c5d9cd" }}
              >
                <p
                  className="text-xs uppercase tracking-[0.15em] font-bold mb-3"
                  style={{ color: "#c49a2a" }}
                >
                  Office Hours
                </p>
                <p className="text-sm" style={{ color: "#5e6269" }}>
                  Please call or email for current office hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <p
                className="text-xs uppercase tracking-[0.15em] font-bold mb-6"
                style={{ color: "#c49a2a" }}
              >
                Send Us a Message
              </p>
              <form className="flex flex-col gap-5" action="/api/contact" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="First Name" name="firstName" type="text" required />
                  <FormField label="Last Name" name="lastName" type="text" required />
                </div>
                <FormField label="Email" name="email" type="email" required />
                <FormField label="Phone" name="phone" type="tel" />
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "#2a2d33" }}
                  >
                    How can we help?
                  </label>
                  <select
                    name="topic"
                    className="w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2 focus:ring-primary-300 bg-white"
                    style={{ borderColor: "#c7c9cc", color: "#111318" }}
                  >
                    <option value="">Select a topic...</option>
                    <option>Book a Connection Call</option>
                    <option>Service Information</option>
                    <option>Memberships</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1.5"
                    style={{ color: "#2a2d33" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2 resize-none"
                    style={{ borderColor: "#c7c9cc", color: "#111318" }}
                    placeholder="Tell us a bit about your health goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90 self-start"
                  style={{
                    backgroundColor: "#c49a2a",
                    color: "#1a2e22",
                    boxShadow: "0 4px 12px rgba(196,154,42,0.3)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section
        className="py-14 text-center"
        style={{ backgroundColor: "#f4f8f5", borderTop: "1px solid #c5d9cd" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#243b2d",
            }}
          >
            Prefer to Talk?
          </h2>
          <p className="text-base mb-6 max-w-md mx-auto" style={{ color: "#5e6269" }}>
            Call us directly to book your free 15-minute connection call.
          </p>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-block px-7 py-3.5 rounded font-bold text-sm tracking-wide transition-all hover:brightness-90"
            style={{
              backgroundColor: "#2d4d3a",
              color: "#ffffff",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-lg mt-0.5">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider font-bold mb-0.5" style={{ color: "#7a7e85" }}>
          {label}
        </p>
        <a
          href={href}
          className="text-sm leading-relaxed hover:underline"
          style={{ color: "#2d4d3a" }}
          target={href.startsWith("https") ? "_blank" : undefined}
          rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: "#2a2d33" }}>
        {label} {required && <span style={{ color: "#c49a2a" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded border text-sm outline-none focus:ring-2"
        style={{ borderColor: "#c7c9cc", color: "#111318" }}
      />
    </div>
  );
}
