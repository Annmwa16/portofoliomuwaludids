"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import Footer from "@/components/sections/Footer";
import Lightbox from "@/components/ui/Lightbox";
import { projects } from "@/lib/data/projects";
import { experienceEntries } from "@/lib/data/experience";
import { certificates } from "@/lib/data/certificates";

/* ------------------------------------------------------------------ */
/* Motion helpers                                                       */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/* Hybrid Expertise Data                                                */
/* ------------------------------------------------------------------ */
const EXPERTISE = [
  {
    id: "leadership",
    number: "01",
    title: "Leadership & Management",
    description:
      "Memimpin 2.500+ siswa sebagai Ketua OSIS SMKN 1 Garut, mengoordinasikan 38 organisasi dan ekstrakurikuler. Aktif di FOJB Wilayah 11 sebagai Kepala Manajemen Learning Center, menyelenggarakan event 500+ peserta.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "network",
    number: "02",
    title: "Network Infrastructure",
    description:
      "Konfigurasi MikroTik RouterOS, monitoring server, perakitan PC, troubleshooting hardware, dan IT support profesional. Pengalaman langsung di lingkungan kampus UNIGA FEKON.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
  },
  {
    id: "software",
    number: "03",
    title: "Software Development",
    description:
      "Full-stack web development dengan Next.js, React, TypeScript, dan Supabase. UI/UX design di Figma. Membangun produk digital nyata: yearbook web, perpustakaan digital, photobooth studio, dan lainnya.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Featured Projects (top 3)                                            */
/* ------------------------------------------------------------------ */
const FEATURED_PROJECTS = projects.slice(0, 3);

/* ------------------------------------------------------------------ */
/* Page Component                                                       */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [certLightbox, setCertLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== TECH MARQUEE ===== */}
      <TechMarquee />

      {/* ===== HYBRID EXPERTISE ===== */}
      {/* Standardized Padding: pt-24 pb-12 to minimize space below */}
      <section className="px-6 pt-24 pb-12 md:px-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-4">
              <Sparkles size={12} className="text-[#D9B872]/60" />
              Capabilities
            </span>
            <h2 className="max-w-xl font-serif text-4xl text-zinc-100 md:text-5xl">
              Hybrid Expertise
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
              Kombinasi langka antara kepemimpinan organisasi, infrastruktur
              jaringan, dan pengembangan perangkat lunak. Semuanya dibangun dari
              pengalaman nyata, bukan teori.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {EXPERTISE.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] md:p-10"
              >
                {/* Ambient accent glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#D9B872]/[0.04] blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] transition-all duration-300 group-hover:bg-[#D9B872]/[0.1]">
                      <span className="text-zinc-400 transition-colors duration-300 group-hover:text-[#D9B872]">
                        {exp.icon}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-700">
                      {exp.number}
                    </span>
                  </div>
                  <h3 className="mb-3 font-serif text-xl text-zinc-100 md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS PREVIEW ===== */}
      {/* Fix #2: Standardized Padding: pt-12 pb-12 md:pt-16 md:pb-16 to eliminate massive gaps */}
      <section className="px-6 pt-12 pb-12 md:px-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-4">
                Selected Work
              </span>
              <h2 className="font-serif text-4xl text-zinc-100 md:text-5xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-100"
            >
              Lihat Semua
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURED_PROJECTS.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link href="/projects" className="group block">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-900 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] shadow-black/40"
                  >
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-3 flex-col gap-2 p-5 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-serif text-lg leading-tight text-zinc-50 sm:text-xl">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          strokeWidth={1.5}
                          className="h-4 w-4 shrink-0 text-zinc-300"
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
                    <span className="absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-sm opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                      {project.category}
                    </span>
                  </motion.div>
                  <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
                    <h4 className="font-serif text-base text-zinc-200">
                      {project.title}
                    </h4>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                      {project.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== EXPERIENCE PREVIEW ===== */}
      {/* Fix #2: Standardized Padding: pt-12 pb-12 md:pt-16 md:pb-16 to maintain layout harmony */}
      <section className="px-6 pt-12 pb-12 md:px-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-4">
                Track Record
              </span>
              <h2 className="font-serif text-4xl text-zinc-100 md:text-5xl">
                Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-100"
            >
              Lihat Semua
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          <div className="relative border-l border-zinc-800/60">
            {experienceEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="relative pl-8 md:pl-12"
              >
                {/* Dot */}
                <span className="absolute left-[-5px] top-1.5 h-[9px] w-[9px] rounded-full border border-zinc-600 bg-[#0A0A0A]" />

                <div className="pb-16 last:pb-0">
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                      {entry.period}
                    </span>
                  </div>

                  {/* Fix #3: UNIGA logo moved right next to the role title text and scaled proportionally */}
                  <h3 className="font-serif text-2xl text-zinc-100 md:text-3xl flex items-center flex-wrap">
                    <span>{entry.role}</span>
                    {entry.logo && (
                      <span className="relative ml-3 inline-block h-[1.1em] w-[1.1em] align-middle shrink-0">
                        <Image
                          src={entry.logo}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </span>
                    )}
                  </h3>
                  <p className="mb-4 text-sm text-zinc-500 md:text-base">
                    {entry.organization}
                  </p>

                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                    {entry.description}
                  </p>

                  <ul className="mt-4 max-w-2xl space-y-2">
                    {entry.highlights.slice(0, 3).map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D9B872]/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS & ACHIEVEMENTS SECTION ===== */}
      {/* Fix #2: Standardized Padding: pt-12 pb-24 to separate certificates and footer cleanly */}
      <section className="px-6 pt-12 pb-24 md:px-12 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-3">
              Sertifikasi &amp; Pencapaian
            </span>
            <h2 className="font-serif text-3xl text-zinc-100 md:text-4xl">
              Sertifikat Terbaru
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {certificates.map((cert, i) => (
              <motion.button
                key={cert.id}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                onClick={() =>
                  setCertLightbox({
                    images: certificates.map((c) => c.image),
                    index: i,
                  })
                }
                className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] bg-white/[0.02] backdrop-blur-md transition-shadow duration-500 hover:shadow-xl hover:shadow-black/30"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-[10px] font-medium uppercase leading-tight tracking-wide text-zinc-300">
                    {cert.title}
                  </p>
                  <p className="mt-0.5 text-[9px] text-zinc-500">
                    {cert.issuer}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Certificate Lightbox ─── */}
      <AnimatePresence>
        {certLightbox && (
          <Lightbox
            title="Sertifikat &amp; Penghargaan"
            images={certLightbox.images}
            activeIndex={certLightbox.index}
            onIndexChange={(index) =>
              setCertLightbox((prev) => (prev ? { ...prev, index } : null))
            }
            onClose={() => setCertLightbox(null)}
          />
        )}
      </AnimatePresence>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}