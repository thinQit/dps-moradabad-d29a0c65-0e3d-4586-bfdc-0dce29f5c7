"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HeroBeams } from "@/components/blocks/HeroBeams";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTAGlass } from "@/components/blocks/CTAGlass";

import { TracingBeam } from "@/components/ui/effects/TracingBeam";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { BentoGrid } from "@/components/ui/effects/BentoGrid";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function HomePage() {
  return (
    <TracingBeam>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="DPS Moradabad campus"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="text-white">
            <HeroBeams
              headline="Empowering the Leaders"
              highlightText="of Tomorrow"
              subheadline="DPS Moradabad blends academic excellence, sports facilities, and a caring environment—so every child can thrive with confidence."
              primaryCta={{ label: "Book a Campus Visit", href: "/contact" }}
              secondaryCta={{ label: "Explore Programs", href: "/services" }}
            />
          </div>

          <motion.div
            {...sectionAnim}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            <div className="rounded-2xl bg-background/10 backdrop-blur-xl p-5 text-white">
              <p className="text-sm uppercase tracking-wider opacity-80">
                Trusted Learning
              </p>
              <p className="mt-2 text-lg font-semibold">
                Strong academics + modern classrooms
              </p>
            </div>
            <div className="rounded-2xl bg-background/10 backdrop-blur-xl p-5 text-white">
              <p className="text-sm uppercase tracking-wider opacity-80">
                Sports & Fitness
              </p>
              <p className="mt-2 text-lg font-semibold">
                Facilities that build discipline and teamwork
              </p>
            </div>
            <div className="rounded-2xl bg-background/10 backdrop-blur-xl p-5 text-white">
              <p className="text-sm uppercase tracking-wider opacity-80">
                Student Care
              </p>
              <p className="mt-2 text-lg font-semibold">
                Safe campus, supportive mentors, holistic growth
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <motion.div {...sectionAnim}>
        <StatsCounter
          stats={[
            { label: "Student-first approach", value: "100%" },
            { label: "Co-curricular pathways", value: "20+", suffix: "" },
            { label: "Sports & activity zones", value: "10+", suffix: "" },
            { label: "Parent support", value: "24/7", suffix: "" }
          ]}
          bgColor="bg-sky-400 text-black"
        />
      </motion.div>

      {/* BENTO / HIGHLIGHTS */}
      <motion.section {...sectionAnim} className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Campus Highlights
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A modern school experience—built for outcomes
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              From academics to athletics, we focus on confidence, curiosity, and
              character.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid className="gap-4">
              <div className="md:col-span-2 rounded-2xl bg-background p-6 shadow-sm">
                <div className="relative h-56 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/product-1.png"
                    alt="Students learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  Academics that build strong foundations
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Clear learning goals, supportive teachers, and a focus on
                  conceptual clarity.
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6 shadow-sm">
                <div className="relative h-56 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/product-2.png"
                    alt="Sports facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  Sports & physical development
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Training, teamwork, and healthy competition—on a safe campus.
                </p>
              </div>

              <div className="rounded-2xl bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Clubs & activities</h3>
                <p className="mt-2 text-muted-foreground">
                  Art, music, debates, STEM, and leadership opportunities for
                  every learner.
                </p>
                <div className="mt-6 relative h-40 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/product-3.png"
                    alt="Co-curricular activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 rounded-2xl bg-background p-6 shadow-sm">
                <h3 className="text-xl font-semibold">
                  Parent communication & support
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Transparent updates, approachable staff, and a partnership
                  mindset.
                </p>
                <div className="mt-6 relative h-40 w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/product-1.png"
                    alt="Parent support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </BentoGrid>
          </div>
        </div>
      </motion.section>

      {/* STICKY SCROLL STORY */}
      <motion.section {...sectionAnim} className="py-20 md:py-28 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Why DPS Moradabad
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A clear journey—from admission to achievement
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              A parent-friendly experience with strong learning outcomes.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: "Discover the campus",
                  description:
                    "Explore classrooms, sports areas, and student life—designed to feel safe, modern, and inspiring.",
                  content: (
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/product-1.png"
                        alt="Campus discovery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
                {
                  title: "Choose the right pathway",
                  description:
                    "Academics + activities that match your child’s strengths—supported by caring mentors.",
                  content: (
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/product-3.png"
                        alt="Pathways"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
                {
                  title: "Grow with confidence",
                  description:
                    "A balanced focus on results, discipline, and character—so students thrive in school and beyond.",
                  content: (
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                      <Image
                        src="/images/product-3.png"
                        alt="Student growth"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.div {...sectionAnim}>
        <FeaturesGrid
          badge="Facilities"
          headline="Everything your child needs to succeed"
          subheadline="A complete ecosystem for learning, sports, creativity, and wellbeing."
          features={[
            {
              icon: "🏫",
              title: "Modern classrooms",
              description:
                "Comfortable learning spaces that support focus, discussion, and clarity.",
            },
            {
              icon: "📚",
              title: "Strong academics",
              description:
                "Concept-first teaching with regular feedback and progress support.",
            },
            {
              icon: "⚽",
              title: "Sports excellence",
              description:
                "Training and facilities that build fitness, teamwork, and discipline.",
            },
            {
              icon: "🎭",
              title: "Co-curriculars",
              description:
                "Clubs, events, and competitions that develop confidence and communication.",
            },
            {
              icon: "🧑‍🏫",
              title: "Mentorship",
              description:
                "Teachers who guide students with care, structure, and high standards.",
            },
            {
              icon: "🛡️",
              title: "Safe campus",
              description:
                "A secure environment where parents feel confident and students feel supported.",
            },
          ]}
        />
      </motion.div>

      {/* TESTIMONIALS */}
      <motion.div {...sectionAnim}>
        <TestimonialsAnimated
          headline="What parents and students say"
          subheadline="Trust is built through consistency, care, and outcomes."
          testimonials={[
            {
              quote:
                "The teachers are approachable and the school maintains a great balance between academics and activities.",
              name: "Parent",
              designation: "Primary Wing",
              src: "/images/product-2.png",
            },
            {
              quote:
                "Sports facilities are excellent and I feel encouraged to participate and improve.",
              name: "Student",
              designation: "Middle School",
              src: "/images/product-3.png",
            },
            {
              quote:
                "Communication is clear and timely. We feel involved in our child’s progress.",
              name: "Parent",
              designation: "Senior Wing",
              src: "/images/product-2.png",
            },
          ]}
        />
      </motion.div>

      {/* FAQ */}
      <motion.div {...sectionAnim}>
        <FAQAccordion
          headline="Frequently asked questions"
          subheadline="Quick answers for parents exploring DPS Moradabad."
          items={[
            {
              question: "How can I book a campus visit?",
              answer:
                "Use the Contact page to send your details. Our team will confirm a suitable date and time.",
            },
            {
              question: "Does the school support sports and co-curriculars?",
              answer:
                "Yes—DPS Moradabad encourages sports, clubs, and activities alongside academics for holistic growth.",
            },
            {
              question: "How do admissions work?",
              answer:
                "Admissions typically include an enquiry, interaction/assessment (as applicable), and document submission. Contact us for the latest process.",
            },
            {
              question: "How does the school communicate with parents?",
              answer:
                "We prioritize transparent updates and parent support through regular communication and scheduled interactions.",
            },
          ]}
        />
      </motion.div>

      {/* CTA */}
      <motion.div {...sectionAnim}>
        <CTAGlass
          headline="Ready to visit DPS Moradabad?"
          description="Book a campus visit or ask about admissions. We’ll help you choose the right next step."
          ctaLabel="Book a Visit"
          ctaHref="/contact"
          secondaryCtaLabel="View Programs"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </TracingBeam>
  );
}
