"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="About DPS Moradabad"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 text-white">
          <motion.div {...sectionAnim} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              About
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              DPS Moradabad
            </h1>
            <p className="mt-4 text-lg text-white/90">
              A modern, student-first school focused on academics, sports, and
              holistic development—built to help every learner thrive.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div {...sectionAnim}>
        <FeaturesGrid
          badge="Our Values"
          headline="What we stand for"
          subheadline="A clear, parent-friendly approach to learning and growth."
          features={[
            {
              icon: "🎯",
              title: "Excellence with clarity",
              description:
                "High standards, structured learning, and consistent feedback.",
            },
            {
              icon: "🤝",
              title: "Care & mentorship",
              description:
                "Teachers who guide students with empathy and accountability.",
            },
            {
              icon: "🌱",
              title: "Holistic development",
              description:
                "Sports, clubs, and leadership opportunities beyond textbooks.",
            },
            {
              icon: "🛡️",
              title: "Safety & wellbeing",
              description:
                "A secure environment where students feel confident and supported.",
            },
            {
              icon: "🧠",
              title: "Curiosity & creativity",
              description:
                "Encouraging questions, exploration, and independent thinking.",
            },
            {
              icon: "🏆",
              title: "Discipline & character",
              description:
                "Habits that prepare students for life, not just exams.",
            },
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <TeamGrid
          headline="Leadership & mentors"
          subheadline="A dedicated team committed to student success."
          members={[
            {
              name: "Principal",
              title: "School Leadership",
              bio: "Guiding academic excellence and a student-first culture.",
              imageUrl: "/images/product-1.png",
            },
            {
              name: "Academic Coordinator",
              title: "Academics",
              bio: "Ensuring strong learning outcomes and teacher support.",
              imageUrl: "/images/product-2.png",
            },
            {
              name: "Sports Coordinator",
              title: "Sports & Fitness",
              bio: "Building discipline, teamwork, and performance through sports.",
              imageUrl: "/images/product-3.png",
            },
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <CTAGlass
          headline="Want to know if DPS is the right fit?"
          description="Talk to our team and plan a campus visit."
          ctaLabel="Contact Admissions"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Programs"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
