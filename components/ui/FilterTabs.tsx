"use client";

import { motion } from "framer-motion";

interface FilterTabsProps {
  categories: string[];
  activeFilter: string;
  onChange: (category: string) => void;
}

export default function FilterTabs({
  categories,
  activeFilter,
  onChange,
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-6 border-b border-zinc-800 pb-0 sm:gap-10"
    >
      {categories.map((category) => {
        const isActive = category === activeFilter;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className="group relative pb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 outline-none transition-colors duration-300 hover:text-zinc-200 focus-visible:text-zinc-200"
          >
            <span
              className={`transition-colors duration-300 ${
                isActive ? "text-zinc-50" : ""
              }`}
            >
              {category}
            </span>

            {isActive && (
              <motion.span
                layoutId="filter-tab-underline"
                className="absolute inset-x-0 -bottom-px h-px bg-zinc-50"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
