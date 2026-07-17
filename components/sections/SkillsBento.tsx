"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";
import { BentoCard } from "@/components/ui/BentoCard";

export function SkillsBento() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-zinc-500">
            02 — Capabilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-100">
            Skills &amp; Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px] md:gap-6">
          {skillCategories.map((category, index) => (
            <BentoCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsBento;
