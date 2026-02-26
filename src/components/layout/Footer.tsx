import Link from "next/link";
import { PHONE, ADDRESS, EMAIL } from "@/lib/data";

const footerLinks = {
  Services: [
    { label: "Naturopathic Medicine", href: "/services#zone-1" },
    { label: "Regenerative Technology", href: "/services#zone-2" },
    { label: "Structural Therapy", href: "/services#zone-3" },
    { label: "IV Therapy", href: "/services" },
    { label: "Memberships", href: "/memberships" },
  ],
  "Our Practice": [
    { label: "Our Team", href: "/team" },
    { label: "New Patients", href: "/new-patient" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2e22", color: "#93b8a3" }}>
      {/* CTA banner */}
      <div
        className="py-12 text-center"
        style={{ backgroundColor: "#2d4d3a", borderBottom: "1px solid #3a6349" }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "#c49a2a" }}
        >
          Coronado, San Diego
        </p>
        <h2
          className="text-3xl md:text-4xl text-white mb-4"
          style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
        >
          Ready to Leave Feeling Better?
        </h2>
        <p className="text-base mb-8 max-w-lg mx-auto px-4" style={{ color: "#93b8a3" }}>
          Schedule your free 15-minute connection call and discover how Trinity can
          support your health journey.
        </p>
        <Link
          href="/new-patient"
          className="inline-block px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:brightness-90 transition-all"
          style={{
            backgroundColor: "#c49a2a",
            color: "#1a2e22",
            boxShadow: "0 4px 12px rgba(196,154,42,0.3)",
          }}
        >
          Book Your Free Connection Call
        </Link>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "#c49a2a" }}
              >
                T
              </div>
              <span
                className="text-xl text-white"
                style={{ fontFamily: "var(--font-dm-serif), Georgia, serif" }}
              >
                Trinity Naturopathic
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-sm" style={{ color: "#6b9a7d" }}>
              San Diego&apos;s premier naturopathic and regenerative medicine center.
              Our commitment: To leave everyone better.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span style={{ color: "#c49a2a" }}>📍</span>
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#c49a2a" }}>📞</span>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#c49a2a" }}>✉️</span>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs uppercase tracking-widest font-bold mb-4"
                style={{ color: "#c49a2a" }}
              >
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: "1px solid #2d4d3a", color: "#4a7c5c" }}
        >
          <p>© {new Date().getFullYear()} Trinity Naturopathic. All rights reserved.</p>
          <p>1224 10th St, Suite 201, Coronado, CA 92118</p>
        </div>
      </div>
    </footer>
  );
}
