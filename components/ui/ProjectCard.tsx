"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative flex flex-col"
    >
      <motion.button
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title} gallery`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-900 text-left shadow-lg transition-shadow duration-500 hover:shadow-xl hover:shadow-black/40"
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Bottom gradient for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Reveal-on-hover content */}
        <div className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-2 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-serif text-xl leading-tight text-zinc-50 sm:text-2xl">
              {project.title}
            </h3>
            <ArrowUpRight
              strokeWidth={1.5}
              className="h-5 w-5 shrink-0 text-zinc-300"
            />
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.15em]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-2.5 py-1 text-zinc-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Static corner badge */}
        <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 opacity-100 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
          {project.category}
        </span>
      </motion.button>

      {/* Caption below */}
      <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
        <h4 className="font-serif text-base text-zinc-200">
          {project.title}
        </h4>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
          {project.category}
        </span>
      </div>
    </motion.article>
  );
}
