"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FilterTabs from "@/components/ui/FilterTabs";
import ProjectCard from "@/components/ui/ProjectCard";
import Lightbox from "@/components/ui/Lightbox";
import { projects, type Project } from "@/lib/data/projects";

const ALL = "All";

export default function ProjectsShowcase() {
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
    <section
      id="projects"
      className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32"
    >
      <header className="mb-14 flex flex-col gap-6 sm:mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </span>
        <h2 className="font-display text-4xl text-zinc-50 sm:text-5xl">
          Projects &amp; Design
        </h2>

        <FilterTabs
          categories={categories}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />
      </header>

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
          No projects in this category yet.
        </p>
      )}

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
    </section>
  );
}
