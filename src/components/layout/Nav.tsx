"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE } from "@/lib/data";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/new-patient", label: "New Patients" },
  { href: "/memberships", label: "Memberships" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#1a2e22" }}
    >
      {/* Top bar */}
      <div
        className="hidden md:flex justify-end px-8 py-1.5 text-xs gap-6"
        style={{ backgroundColor: "#111318", color: "#93b8a3" }}
      >
        <span>{PHONE}</span>
        <span>1224 10th St, Suite 201, Coronado, CA</span>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm"
            style={{ backgroundColor: "#c49a2a" }}
          >
            T
          </div>
          <span
            className="text-xl tracking-tight"
            style={{
              fontFamily: "var(--font-dm-serif), Georgia, serif",
              color: "#ffffff",
            }}
          >
            Trinity
          </span>
          <span
            className="hidden sm:block text-xs uppercase tracking-widest ml-1 mt-0.5"
            style={{ color: "#6b9a7d" }}
          >
            Naturopathic
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-white relative"
                style={{
                  color: active ? "#ffffff" : "#93b8a3",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                {link.label}
                {active && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#c49a2a" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/new-patient"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded text-sm font-bold transition-all hover:brightness-90 tracking-wide"
            style={{
              backgroundColor: "#c49a2a",
              color: "#1a2e22",
              boxShadow: "0 2px 8px rgba(196,154,42,0.3)",
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-6 flex flex-col gap-1"
          style={{ backgroundColor: "#1a2e22", borderTop: "1px solid #2d4d3a" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-medium border-b"
              style={{
                color: pathname === link.href ? "#ffffff" : "#93b8a3",
                borderColor: "#2d4d3a",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/new-patient"
            className="mt-4 text-center py-3 rounded font-bold text-sm"
            style={{
              backgroundColor: "#c49a2a",
              color: "#1a2e22",
            }}
          >
            Book Your Free Connection Call
          </Link>
          <div className="mt-3 text-center text-sm" style={{ color: "#6b9a7d" }}>
            {PHONE}
          </div>
        </div>
      )}
    </header>
  );
}
