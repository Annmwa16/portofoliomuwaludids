"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { TimelineItem } from "@/components/ui/TimelineItem";
import LeadershipGrid from "@/components/sections/LeadershipGrid";
import Lightbox from "@/components/ui/Lightbox";
import Footer from "@/components/sections/Footer";
import { experienceEntries } from "@/lib/data/experience";

import { certificates } from "@/lib/data/certificates";

/* ------------------------------------------------------------------ */
/* Variants                                                             */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ExperiencePage() {
  const [certLightbox, setCertLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <>
      <section className="px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          {/* ─── Page Header ─── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mb-16 md:mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-4">
              Perjalanan Karier
            </span>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl text-zinc-50 sm:text-5xl md:text-6xl"
            >
              Pengalaman &amp; Kepemimpinan
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base"
            >
              Rekam jejak profesional dan organisasi, dari magang IT support
              dan freelance development hingga memimpin organisasi siswa
              terbesar di SMKN 1 Garut.
            </motion.p>
          </motion.div>

          {/* ─── Professional Experience Timeline ─── */}
          <div className="mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-3">
                Professional Experience
              </span>
              <h2 className="font-serif text-3xl text-zinc-100 md:text-4xl">
                Karier &amp; Magang
              </h2>
            </motion.div>

            <div className="relative border-l border-zinc-800/60">
              {experienceEntries.map((entry, index) => (
                <TimelineItem key={entry.id} entry={entry} index={index} />
              ))}
            </div>
          </div>

          {/* ─── Organizational Leadership ─── */}
          <div className="mb-24 md:mb-32">
            <LeadershipGrid />
          </div>

          {/* ─── Certifications ─── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-12"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-3">
                Sertifikasi &amp; Penghargaan
              </span>
              <h2 className="font-serif text-3xl text-zinc-100 md:text-4xl">
                Sertifikat
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
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
                  <div className="absolute bottom-0 left-0 right-0 p-3">
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
        </div>
      </section>

      {/* ─── Certificate Lightbox ─── */}
      <AnimatePresence>
        {certLightbox && (
          <Lightbox
            title="Sertifikat & Penghargaan"
            images={certLightbox.images}
            activeIndex={certLightbox.index}
            onIndexChange={(index) =>
              setCertLightbox((prev) => (prev ? { ...prev, index } : null))
            }
            onClose={() => setCertLightbox(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
