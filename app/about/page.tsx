"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Mic, Cpu, MessageSquare, Calendar, Zap } from "lucide-react";

import Footer from "@/components/sections/Footer";
import { skillCategories } from "@/lib/data/skills";
import { BentoCard } from "@/components/ui/BentoCard";

/* ------------------------------------------------------------------ */
/* Animation variants                                                   */
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

/* ------------------------------------------------------------------ */
/* Soft Skills Data with Lucide icons (No emojis)                        */
/* ------------------------------------------------------------------ */
const SOFT_SKILLS = [
  {
    title: "Kepemimpinan & Manajemen Tim",
    description:
      "Memimpin organisasi dengan 2.500+ anggota, mengoordinasikan 38 divisi dan ekstrakurikuler. Mengelola tim lintas fungsi untuk event berskala regional.",
    icon: Users,
  },
  {
    title: "Public Speaking",
    description:
      "Sambutan dan pembicara di berbagai event, termasuk One Day Training FOJB Wilayah 11 dengan 500+ peserta dan WJSLS 3.0 dengan 3.500+ pelajar se-Jawa Barat.",
    icon: Mic,
  },
  {
    title: "Problem Solving",
    description:
      "Menyelesaikan masalah teknis jaringan, troubleshooting hardware, dan debugging kode dalam deadline ketat. Pendekatan sistematis dari identifikasi masalah hingga solusi.",
    icon: Cpu,
  },
  {
    title: "Komunikasi Lintas Fungsi",
    description:
      "Koordinasi antara divisi internal, pihak sekolah, instansi pemerintah, universitas (Telkom, UNIGA), dan mitra eksternal seperti TVRI.",
    icon: MessageSquare,
  },
  {
    title: "Manajemen Proyek",
    description:
      "Mengelola multiple proyek freelance secara simultan. Mulai dari scoping klien, timeline produksi, quality control, hingga delivery final.",
    icon: Calendar,
  },
  {
    title: "Adaptabilitas",
    description:
      "Kemampuan cepat beradaptasi dengan teknologi, lingkungan kerja, dan tantangan baru. Dibuktikan dengan transisi mulus antara peran teknis dan organisasi.",
    icon: Zap,
  },
];

/* ------------------------------------------------------------------ */
/* Education Data                                                       */
/* ------------------------------------------------------------------ */
const EDUCATION = {
  school: "SMK Negeri 1 Garut",
  major: "Teknik Jaringan Komputer dan Telekomunikasi (TJKT)",
  period: "2023 • 2026",
  schoolLogo: "/assets/icon/Logo/LogoSMKN1Garut.png",
  majorLogo: "/assets/icon/Logo/LogoJurusanTJKT.png",
  certification: "Sertifikasi Uji Kompetensi TJKT oleh BNSP",
};

/* ------------------------------------------------------------------ */
/* Page Component                                                       */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
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
              Tentang Saya
            </span>
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl text-zinc-50 sm:text-5xl md:text-6xl"
            >
              Ananda Maulid
            </motion.h1>
          </motion.div>

          {/* ─── Intro: Bio + Photo ─── */}
          <div className="mb-24 grid grid-cols-1 gap-12 md:mb-32 md:grid-cols-2 md:gap-16">
            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <p className="text-base leading-relaxed text-zinc-300 md:text-lg">
                Saya adalah seorang profesional hybrid yang menggabungkan keahlian
                di bidang <strong className="text-zinc-100">Software Development</strong>,{" "}
                <strong className="text-zinc-100">Network Infrastructure</strong>, dan{" "}
                <strong className="text-zinc-100">Organizational Leadership</strong>.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-zinc-500 md:text-base">
                Dari memimpin organisasi siswa dengan 2.500+ anggota sebagai Ketua
                OSIS SMKN 1 Garut, hingga membangun sistem web full-stack untuk
                klien nyata. Saya percaya bahwa pemimpin terbaik adalah mereka yang
                bisa membangun, bukan hanya mengarahkan.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-zinc-500 md:text-base">
                Pengalaman saya meliputi pengembangan website profesional (Next.js,
                React, Supabase), konfigurasi infrastruktur jaringan (MikroTik,
                server monitoring), serta desain UI/UX di Figma. Di sisi
                organisasi, saya aktif di Forum OSIS Jawa Barat (FOJB) Wilayah 11
                sebagai Kepala Manajemen Learning Center dan terpilih sebagai Duta
                Sekolah Bakti Masagi.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-zinc-500 md:text-base">
                Saat ini saya menempuh pendidikan di jurusan Teknik Jaringan
                Komputer dan Telekomunikasi (TJKT) di SMKN 1 Garut, dan telah
                tersertifikasi melalui Uji Kompetensi oleh Badan Nasional
                Sertifikasi Profesi (BNSP).
              </p>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const,
                delay: 0.1,
              }}
              className="relative aspect-[3/4] w-full"
            >
              <div
                className="relative h-full w-full drop-shadow-2xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 75%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 75%, transparent 100%)",
                }}
              >
                <Image
                  src="/assets/img/FOTOGW/FotoGwPakeJasTransparan.png"
                  alt="Ananda Maulid"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* Ambient glow behind the figure */}
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-2/3 w-2/3 rounded-full bg-[#D9B872]/[0.06] blur-[80px]" />
              </div>
            </motion.div>
          </div>

          {/* ─── Education ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-24 overflow-hidden rounded-3xl bg-white/[0.02] p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-md md:mb-32 md:p-10"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              {/* School info with large logos */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 shrink-0 md:h-20 md:w-20">
                    <Image
                      src={EDUCATION.schoolLogo}
                      alt={EDUCATION.school}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="relative h-14 w-14 shrink-0 md:h-16 md:w-16">
                    <Image
                      src={EDUCATION.majorLogo}
                      alt="TJKT"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-zinc-100 md:text-2xl">
                    {EDUCATION.school}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{EDUCATION.major}</p>
                </div>
              </div>

              {/* Period & certification */}
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <span className="rounded-full bg-white/[0.05] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                  {EDUCATION.period}
                </span>
                <p className="text-[11px] text-zinc-600">
                  {EDUCATION.certification}
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── Skills Bento Grid (Flexible CSS Grid without clipping heights) ─── */}
          <div className="mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-12 md:mb-16"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-3">
                Capabilities
              </span>
              <h2 className="font-serif text-3xl text-zinc-100 md:text-4xl">
                Skills &amp; Expertise
              </h2>
            </motion.div>

            {/* Replaced auto-rows-[200px] with h-auto and natural heights */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 h-auto">
              {skillCategories.map((category, index) => (
                <BentoCard
                  key={category.id}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* ─── Soft Skills (Clean Lucide Icons instead of emojis, h-auto grid) ─── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-12 md:mb-16"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-3">
                Beyond Technical
              </span>
              <h2 className="font-serif text-3xl text-zinc-100 md:text-4xl">
                Soft Skills
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 h-auto"
            >
              {SOFT_SKILLS.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    variants={fadeUp}
                    whileHover={{ y: -4, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/[0.02] p-7 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-all duration-500 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] transition-all duration-300 group-hover:bg-[#D9B872]/[0.1] group-hover:shadow-lg group-hover:shadow-[#D9B872]/[0.05]">
                      <SkillIcon
                        size={20}
                        strokeWidth={1.5}
                        className="text-zinc-400 transition-colors duration-300 group-hover:text-[#D9B872]"
                      />
                    </div>
                    <h3 className="mb-2 font-serif text-lg text-zinc-100">
                      {skill.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
