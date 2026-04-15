"use client";

const Image = "img" as any;
import { motion } from "framer-motion";

import { HoverEffect } from "@/components/ui/effects/HoverEffect";
import { TestimonialsAnimated } from "@/components/blocks/TestimonialsAnimated";
import { CTAGlass } from "@/components/blocks/CTAGlass";

const sectionAnim = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
} as const;

export default function PortfolioPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/product-3.png"
            alt="Student achievements"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 text-white">
          <motion.div {...sectionAnim} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Projects, Events & Achievements
            </h1>
            <p className="mt-4 text-lg text-white/90">
              A snapshot of student life—academics, sports, clubs, and community
              events.
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section {...sectionAnim} className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Highlights
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Explore what students build and achieve
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Replace these with real events, galleries, and award stories.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                {
                  title: "Annual Sports Meet",
                  description:
                    "Track, field, team sports, and awards celebrating discipline and teamwork.",
                  link: "/contact",
                },
                {
                  title: "STEM & Innovation Showcase",
                  description:
                    "Student projects, models, and demonstrations that build curiosity and confidence.",
                  link: "/contact",
                },
                {
                  title: "Cultural Fest",
                  description:
                    "Music, dance, theatre, and art—helping students express creativity.",
                  link: "/contact",
                },
                {
                  title: "Debate & Public Speaking",
                  description:
                    "Communication skills through debates, speeches, and competitions.",
                  link: "/contact",
                },
                {
                  title: "Community & Service",
                  description:
                    "Student-led initiatives that build empathy and responsibility.",
                  link: "/contact",
                },
                {
                  title: "Academic Achievements",
                  description:
                    "Celebrating consistent performance and learning milestones.",
                  link: "/contact",
                },
              ]}
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-background shadow-sm">
              <Image src="/images/product-1.png" alt="Gallery 1" fill className="object-cover" />
            </div>
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-background shadow-sm">
              <Image src="/images/product-2.png" alt="Gallery 2" fill className="object-cover" />
            </div>
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-background shadow-sm">
              <Image src="/images/product-3.png" alt="Gallery 3" fill className="object-cover" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.div {...sectionAnim}>
        <TestimonialsAnimated
          headline="Moments that matter"
          subheadline="Student growth is visible in confidence, participation, and results."
          testimonials={[
            {
              quote:
                "Events helped my child become more confident and expressive.",
              name: "Parent",
              designation: "Co-curricular",
              src: "/images/product-3.png",
            },
            {
              quote:
                "The sports culture motivates students to improve consistently.",
              name: "Student",
              designation: "Sports",
              src: "/images/product-2.png",
            },
            {
              quote:
                "Projects and activities make learning feel practical and exciting.",
              name: "Student",
              designation: "Academics",
              src: "/images/product-1.png",
            },
          ]}
        />
      </motion.div>

      <motion.div {...sectionAnim}>
        <CTAGlass
          headline="Want to see the campus in person?"
          description="Book a visit and explore facilities, classrooms, and student life."
          ctaLabel="Book a Campus Visit"
          ctaHref="/contact"
          secondaryCtaLabel="Explore Programs"
          secondaryCtaHref="/services"
        />
      </motion.div>
    </div>
  );
}
