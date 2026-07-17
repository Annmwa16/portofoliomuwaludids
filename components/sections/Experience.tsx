"use client";

import { motion } from "framer-motion";
import { experienceEntries } from "@/lib/data/experience";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-zinc-500">
            03 — Track Record
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-100">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800">
          {experienceEntries.map((entry, index) => (
            <TimelineItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
