import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Public_Sans } from "next/font/google";

import { NavbarFloating } from "@/components/blocks/NavbarFloating";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DPS Moradabad",
  description:
    "DPS Moradabad — a modern, student-first school experience with strong academics, sports, and holistic development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <header className="fixed top-0 left-0 right-0 w-full z-50">
          <NavbarFloating
            logo="DPS Moradabad"
            navItems={[
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
              { label: "Portfolio", href: "/portfolio" }
            ]}
            ctaLabel="Apply Now"
            ctaHref="/contact"
          />
        </header>

        <main className="pt-20">{children}</main>

        <FooterMultiColumn
          brand="DPS Moradabad"
          description="A modern, student-first campus experience with strong academics, sports excellence, and holistic development."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" }
              ]
            },
            {
              title: "Admissions",
              links: [
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" }
              ]
            },
            {
              title: "Quick Links",
              links: [
                { label: "Home", href: "/" },
                { label: "Contact Office", href: "/contact" }
              ]
            }
          ]}
          copyright="© DPS Moradabad. All rights reserved."
        />
      </body>
    </html>
  );
}
