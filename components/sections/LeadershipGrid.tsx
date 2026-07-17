"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipRoles } from "@/lib/data/leadership";
import LeadershipCard from "@/components/ui/LeadershipCard";

export default function LeadershipGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setSlideIndex((prev) => Math.min(prev + 1, leadershipRoles.length - 1));
    } else if (info.offset.x > swipeThreshold) {
      setSlideIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="leadership"
      className="px-6 py-24 md:px-12 md:py-32 lg:px-20 overflow-visible"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-14 flex flex-col gap-4 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              Leadership &amp; Impact
            </span>
            <h2 className="mt-4 font-serif text-4xl text-zinc-100 md:text-5xl">
              Mandat yang Dijalankan
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
            Tiga peran formal yang menuntut tanggung jawab atas ribuan siswa dan
            koordinasi lintas institusi di tingkat sekolah hingga provinsi.
          </p>
        </motion.div>

        {isMobile ? (
          /* ── Mobile: Horizontal Swiper ── */
          <div className="relative flex w-full flex-col items-center gap-8 overflow-visible py-4">
            <div className="relative flex w-full justify-center overflow-visible touch-pan-y"
              style={{ minHeight: expandedId === leadershipRoles[slideIndex].id ? "auto" : "580px" }}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={slideIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0, scale: 0.95, x: 80 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95, x: -80 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-full max-w-[360px] cursor-grab overflow-visible px-2 active:cursor-grabbing"
                >
                  <LeadershipCard
                    role={leadershipRoles[slideIndex]}
                    isExpanded={expandedId === leadershipRoles[slideIndex].id}
                    onToggle={() => handleToggle(leadershipRoles[slideIndex].id)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2.5">
              {leadershipRoles.map((role, i) => (
                <button
                  key={role.id}
                  onClick={() => {
                    setSlideIndex(i);
                    setExpandedId(null);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slideIndex ? "w-7 bg-[#D9B872]" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── Desktop: 3-column Grid ── */
          <div className="grid grid-cols-3 gap-6">
            {leadershipRoles.map((role) => (
              <LeadershipCard
                key={role.id}
                role={role}
                isExpanded={expandedId === role.id}
                onToggle={() => handleToggle(role.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
