"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import type { LeadershipRole } from "@/lib/data/leadership";

interface LeadershipCardProps {
  role: LeadershipRole;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function LeadershipCard({
  role,
  isExpanded,
  onToggle,
}: LeadershipCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex flex-col overflow-visible rounded-3xl bg-white/[0.02] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/20"
    >
      {/* Portrait / formal background */}
      <div className="relative h-72 w-full overflow-hidden rounded-t-3xl">
        <Image
          src={role.backgroundImage}
          alt={`${role.role} • ${role.org}`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />

        {/* Org logo */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
          <Image
            src={role.logo}
            alt={`${role.org} logo`}
            width={22}
            height={22}
            className="object-contain"
          />
        </div>

        {/* Period pill */}
        <span className="absolute right-5 top-5 rounded-full bg-black/40 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-zinc-200 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
          {role.period}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            {role.org}
          </p>
          <h3 className="mt-1 font-serif text-2xl leading-tight text-zinc-100">
            {role.role}
          </h3>
        </div>

        {/* Stats */}
        <div className="flex gap-6 border-y border-white/[0.06] py-4">
          {role.stats.map((stat) => (
            <div key={stat.label} className="flex-1">
              <p className="font-serif text-3xl leading-none text-[#D9B872]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-zinc-400">{role.summary}</p>

        {/* Expandable highlights — per-card toggle */}
        <div className="relative z-10">
          <button
            type="button"
            onClick={onToggle}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:text-[#D9B872]"
            aria-expanded={isExpanded}
          >
            <Plus
              strokeWidth={1.5}
              size={14}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-45 text-[#D9B872]" : "rotate-0"
              }`}
            />
            {isExpanded ? "Sembunyikan detail" : "Lihat kontribusi"}
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="mt-4 space-y-2.5 overflow-hidden"
              >
                {role.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <ArrowUpRight
                      strokeWidth={1.5}
                      size={14}
                      className="mt-1 shrink-0 text-[#D9B872]/75"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}
