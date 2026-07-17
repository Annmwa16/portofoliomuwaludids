"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import ProjectCard from "@/components/ui/ProjectCard";
import Lightbox from "@/components/ui/Lightbox";
import Footer from "@/components/sections/Footer";
import { projects, type Project } from "@/lib/data/projects";

const ALL = "All";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProjectsPage() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return [ALL, ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>(ALL);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL) return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const handleClose = () => setActiveProject(null);

  return (
    <>
      <section className="px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          {/* ─── Header ─── */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            initial="hidden"
            animate="visible"
            className="mb-14 sm:mb-20"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] mb-4">
              Karya &amp; Proyek
            </span>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl text-zinc-50 sm:text-5xl md:text-6xl"
            >
              Proyek Saya
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base"
            >
              Koleksi proyek web development, UI/UX design, dan creative work —
              dari produk digital untuk klien nyata hingga eksperimen desain
              personal.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10">
              <FilterTabs
                categories={categories}
                activeFilter={activeFilter}
                onChange={setActiveFilter}
              />
            </motion.div>
          </motion.div>

          {/* ─── Project Grid ─── */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={handleOpen}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="py-20 text-center font-mono text-sm text-zinc-600">
              Belum ada proyek di kategori ini.
            </p>
          )}
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {activeProject && (
          <Lightbox
            title={activeProject.title}
            images={activeProject.images}
            activeIndex={activeImageIndex}
            onIndexChange={setActiveImageIndex}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}