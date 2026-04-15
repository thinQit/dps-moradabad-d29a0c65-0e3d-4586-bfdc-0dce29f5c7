"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function ServicesPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/product-1.png"
            alt="Programs at DPS Moradabad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 text-white">
          <motion.div {...sectionAnim} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Programs & Student Support
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Academics, sports, activities, and guidance—designed for confident,
              well-rounded learners.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <StickyScrollReveal
            content={[
              {
                title: "Academics",
                description:
                  "Concept-first learning, regular assessments, and supportive teaching practices.",
                content: (
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/images/product-2.png"
                      alt="Academics"
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              },
              {
                title: "Sports & fitness",
                description:
                  "Facilities and coaching that build discipline, teamwork, and resilience.",
                content: (
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/images/product-3.png"
                      alt="Sports"
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              },
              {
                title: "Clubs & activities",
                description:
                  "Art, music, debates, STEM, and leadership opportunities for every student.",
                content: (
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                    <Image
                      src="/images/product-3.png"
                      alt="Activities"
                      fill
                      className="object-cover"
                    />
                  </div>
                ),
              },
            ]}
          />
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <FeaturesGrid
          badge="Support"
          headline="Student support that parents can trust"
          subheadline="Clear communication, structured routines, and guidance at every step."
          features={[
            {
              icon: "🧭",
              title: "Guidance & mentoring",
              description:
                "Helping students build habits, confidence, and direction.",
            },
            {
              icon: "🧾",
              title: "Progress updates",
              description:
                "Transparent communication to keep parents informed and involved.",
            },
            {
              icon: "🧑‍🤝‍🧑",
              title: "Community culture",
              description:
                "A respectful environment that encourages collaboration and kindness.",
            },
            {
              icon: "🧪",
              title: "Practical learning",
              description:
                "Hands-on activities and projects that deepen understanding.",
            },
            {
              icon: "🎤",
              title: "Communication skills",
              description:
                "Stage exposure, presentations, and events to build confidence.",
            },
            {
              icon: "🛡️",
              title: "Wellbeing focus",
              description:
                "A safe campus and supportive staff for student wellbeing.",
            },
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <CTAGlass
          headline="Explore the right program for your child"
          description="Tell us the class/grade and your priorities—we’ll guide you."
          ctaLabel="Talk to Admissions"
          ctaHref="/contact"
          secondaryCtaLabel="View Fees"
          secondaryCtaHref="/pricing"
        />
      </motion.div>
    </div>
  );
}
