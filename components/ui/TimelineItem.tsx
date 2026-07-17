"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "@/lib/data/experience";

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
}

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="relative pl-8 md:pl-12"
    >
      {/* Dot indicator */}
      <span
        className={cn(
          "absolute left-[-5px] top-1.5 h-[9px] w-[9px] rounded-full border transition-all duration-300",
          isActive
            ? "border-[#D9B872] bg-[#D9B872] shadow-[0_0_8px_rgba(217,184,114,0.5)]"
            : "border-zinc-600 bg-[#0A0A0A]"
        )}
      />

      <div className="pb-16 md:pb-20 last:pb-0">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {entry.period}
          </span>
          {entry.logo && (
            <span className="relative inline-block h-5 w-5">
              <Image src={entry.logo} alt="" fill className="object-contain" />
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl md:text-3xl text-zinc-100">{entry.role}</h3>
        <p className="mb-4 text-sm md:text-base text-zinc-500">{entry.organization}</p>

        <p className="max-w-2xl text-sm md:text-base leading-relaxed text-zinc-400">
          {entry.description}
        </p>

        <ul className="mt-4 max-w-2xl space-y-2">
          {entry.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-zinc-400"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D9B872]/60" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Hover-revealed mini image grid */}
        <motion.div
          initial={false}
          animate={{
            height: isActive ? "auto" : 0,
            opacity: isActive ? 1 : 0,
            marginTop: isActive ? 24 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-3">
            {entry.gallery.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 33vw, 160px"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
