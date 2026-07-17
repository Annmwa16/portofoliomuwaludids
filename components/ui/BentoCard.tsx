"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/lib/data/skills";

const getBentoCardClasses = (id: string) => {
  switch (id) {
    case "web-dev":
      return "lg:col-span-2 md:col-span-2 col-span-1 h-full";
    case "uiux-design":
      return "lg:col-span-1 md:col-span-1 col-span-1 h-full";
    case "infra-network":
      return "lg:col-span-1 md:col-span-1 col-span-1 h-full";
    case "leadership":
      return "lg:col-span-4 md:col-span-2 col-span-1 h-full";
    default:
      return "col-span-1 h-full";
  }
};

interface BentoCardProps {
  category: SkillCategory;
  index: number;
}

export function BentoCard({ category, index }: BentoCardProps) {
  const Icon = category.icon;
  const isWide = category.id === "leadership";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.02] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20 md:p-8",
        getBentoCardClasses(category.id),
        "min-h-[220px]"
      )}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D9B872]/[0.04] blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-0" />

      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] transition-all duration-300 group-hover:bg-[#D9B872]/[0.1] group-hover:shadow-lg group-hover:shadow-[#D9B872]/[0.05]">
            <Icon
              size={20}
              strokeWidth={1.5}
              className="text-zinc-400 transition-colors duration-300 group-hover:text-[#D9B872]"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-serif text-xl text-zinc-100 mb-2 md:text-2xl">
          {category.title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-500 mb-6">
          {category.tagline}
        </p>
      </div>

      <ul
        className={cn(
          "flex flex-wrap gap-2",
          isWide ? "md:max-w-4xl" : ""
        )}
      >
        {category.items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/[0.04] px-3.5 py-1.5 text-xs text-zinc-400 transition-all duration-300 group-hover:bg-white/[0.07] group-hover:text-zinc-300 md:text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
