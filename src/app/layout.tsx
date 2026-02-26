import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Trinity Naturopathic | San Diego's Premier Naturopathic & Regenerative Medicine Center",
    template: "%s | Trinity Naturopathic",
  },
  description:
    "Personalized naturopathic and regenerative medicine in Coronado, San Diego. Expert care for lasting vitality, foundational healing, and peak performance.",
  keywords: [
    "naturopathic doctor San Diego",
    "regenerative medicine Coronado",
    "functional medicine San Diego",
    "HBOT San Diego",
    "IV therapy Coronado",
    "naturopathic medicine",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Trinity Naturopathic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "var(--font-dm-sans), -apple-system, sans-serif" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
