"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function PricingPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/product-2.png"
            alt="Fees and admissions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 text-white">
          <motion.div {...sectionAnim} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Pricing
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Fees & Admission Plans
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Transparent options for parents. (Replace placeholders with your
              official fee structure.)
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div {...sectionAnim}>
        <PricingTable
          headline="Choose a plan to get started"
          subheadline="These are sample tiers for the website structure—update with official fees."
          tiers={[
            {
              name: "Enquiry",
              price: "₹0",
              period: "",
              description: "Start with a campus visit and counselling.",
              features: [
                "Campus visit scheduling",
                "Program guidance",
                "Document checklist"
              ],
              ctaLabel: "Book a Visit",
              ctaHref: "/contact"
            },
            {
              name: "Admission Support",
              price: "₹—",
              period: "",
              description: "Help with the admission process and next steps.",
              features: [
                "Application guidance",
                "Assessment/interview info",
                "Timeline & follow-ups"
              ],
              ctaLabel: "Talk to Admissions",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Fee Details",
              price: "On Request",
              period: "",
              description: "Get the latest fee structure for your child’s grade.",
              features: [
                "Grade-wise fee details",
                "Transport (if applicable)",
                "Uniform/books guidance"
              ],
              ctaLabel: "Request Fees",
              ctaHref: "/contact"
            }
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <FAQAccordion
          headline="Pricing FAQs"
          subheadline="Common questions about fees and admissions."
          items={[
            {
              question: "Are these fees final?",
              answer:
                "The tiers shown are placeholders for the site layout. Please contact admissions for the official, latest fee structure.",
            },
            {
              question: "Do you offer transport?",
              answer:
                "Transport availability can vary by route. Contact us with your location to confirm.",
            },
            {
              question: "What documents are required?",
              answer:
                "Typically includes student and parent ID details, previous records (as applicable), and photographs. Contact us for the exact list.",
            },
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <CTAGlass
          headline="Need the official fee structure?"
          description="Send your child’s grade and your contact details—we’ll share the latest information."
          ctaLabel="Request Fees"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Programs"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
