"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { ContactForm } from "@/components/blocks/ContactForm";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/product-2.png"
            alt="Contact DPS Moradabad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 text-white">
          <motion.div {...sectionAnim} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Talk to Admissions
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Share your child’s grade and your priorities. We’ll help you plan
              the next step.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div {...sectionAnim}>
        <ContactForm
          headline="Send an enquiry"
          subheadline="We typically respond within 1–2 working days."
          contactInfo={[
            { icon: "📍", label: "Campus", value: "DPS Moradabad (Address to be added)" },
            { icon: "📞", label: "Phone", value: "+91-XXXXXXXXXX" },
            { icon: "✉️", label: "Email", value: "admissions@dpsmoradabad.example" }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <CTAGlass
          headline="Prefer a campus visit?"
          description="Book a visit and explore classrooms, sports facilities, and student life."
          ctaLabel="Book a Visit"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Programs"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
