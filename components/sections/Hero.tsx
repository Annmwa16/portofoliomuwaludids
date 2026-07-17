"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Motion variants — staggered fade-up untuk teks Hero                 */
/* ------------------------------------------------------------------ */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/* Magnetic wrapper — mouse-follow physics terbatas untuk tombol CTA   */
/* ------------------------------------------------------------------ */
interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

function Magnetic({ children, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relativeX = event.clientX - rect.left - rect.width / 2;
    const relativeY = event.clientY - rect.top - rect.height / 2;
    x.set(relativeX * strength);
    y.set(relativeY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pt-40"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D9B872]/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-white/[0.01] blur-[160px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12">
        {/* Kolom teks */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4.5 py-2 backdrop-blur-sm"
          >
            {/* Border glow */}
            <div className="pointer-events-none absolute -inset-px rounded-full border border-white/[0.04]" />
            <Sparkles size={12} className="text-[#D9B872]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Achiever • Kreator Digital
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Front-End Developer
            <span className="block text-[#D9B872]">&amp; Network Engineer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base"
          >
            Dari memimpin organisasi siswa dengan 2.500+ anggota hingga
            membangun sistem web full-stack untuk klien nyata • Saya menerjemahkan
            pengalaman kepemimpinan menjadi kode, dan visi menjadi produk digital
            yang siap pakai.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-zinc-100 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-white"
              >
                Lihat Proyek
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href="/assets/Ananda-Maulid-CV.pdf"
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                Unduh CV
                <Download
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Kolom foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto aspect-[3/4] w-full max-w-sm md:order-2 md:max-w-none"
        >
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative h-full w-full"
          >
            {/* Ambient gold background glow behind the photo */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-4/5 w-4/5 rounded-full bg-[#D9B872]/[0.08] blur-[100px]" />
            </div>

            <div
              className="relative h-full w-full"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            >
              <Image
                src="/assets/img/FOTOGW/FotoUtamaPakeJasFormalPoseTransparan.png"
                alt="Ananda Maulid • Front-End Developer & Network Engineer"
                fill
                priority
                sizes="(min-width: 768px) 45vw, 85vw"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          Gulir
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px origin-top bg-zinc-800"
        />
      </motion.div>
    </section>
  );
}
