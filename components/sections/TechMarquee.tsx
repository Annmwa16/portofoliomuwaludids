"use client";

import { motion } from "framer-motion";
import { webTools, creativeTools } from "@/lib/data/tools";

function MarqueeRow({
  tools,
  reverse = false,
}: {
  tools: { name: string; icon: string }[];
  reverse?: boolean;
}) {
  // Kita panjangin array-nya biar muternya nggak pernah putus
  const quadrupled = [...tools, ...tools, ...tools, ...tools];

  return (
    /* PERBAIKAN 1: py-12 ngasih ruang super lega di atas-bawah biar tooltip ga kepotong */
    <div className="relative flex py-12">
      {/* PERBAIKAN 2: Pake Framer Motion murni buat muterin, anti-ngelag anti-bug CSS! */}
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 15, // <-- KECEPATAN MUTER (Makin kecil makin ngebut, coba 10 atau 15)
          repeat: Infinity,
        }}
        className="flex w-max shrink-0 items-center gap-10 md:gap-14"
      >
        {quadrupled.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="group relative flex shrink-0 flex-col items-center"
          >
            {/* Tooltip — Dibikin z-[100] biar selalu paling depan */}
            <div className="pointer-events-none absolute -top-12 left-1/2 z-[100] -translate-x-1/2 translate-y-2 scale-90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              <div className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                {tool.name}
              </div>
              {/* Panah bawah tooltip */}
              <div className="mx-auto h-0 w-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-white/20" />
            </div>

            {/* Icon dengan efek ngambang */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{
                repeat: Infinity,
                duration: 3 + (i % 3) * 0.5,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.25, y: -4 }}
              className="flex h-12 w-12 cursor-pointer items-center justify-center"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(217,184,114,0.4)]"
                loading="lazy"
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    /* PERBAIKAN 3: Section dipastikan punya overflow-hidden biar ngga bisa digeser kiri-kanan manual di HP */
    <section className="relative overflow-hidden py-10 md:py-16">
      {/* Garis pemisah atas bawah */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4.5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            Tools &amp; Technologies
          </span>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <MarqueeRow tools={webTools} />
        {/* Jarak antar baris */}
        <div className="my-[-20px] md:my-[-10px]" />
        <MarqueeRow tools={creativeTools} reverse />
      </div>

      {/* Efek fade (bayangan gelap) di kiri kanan biar ikonnya kayak muncul/hilang perlahan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
    </section>
  );
}
