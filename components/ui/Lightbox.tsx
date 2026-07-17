"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  title: string;
  images: string[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export default function Lightbox({
  title,
  images,
  activeIndex,
  onIndexChange,
  onClose,
}: LightboxProps) {
  const goNext = useCallback(() => {
    onIndexChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onIndexChange]);

  const goPrev = useCallback(() => {
    onIndexChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [goNext, goPrev, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col bg-[#0A0A0A]/97 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image viewer`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5 sm:px-10">
        <div className="flex items-baseline gap-3">
          <h2 className="font-display text-lg text-zinc-100 sm:text-xl">
            {title}
          </h2>
          <span className="font-mono text-xs text-zinc-500">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close viewer"
          className="text-zinc-400 transition-colors duration-200 hover:text-zinc-50"
        >
          <X strokeWidth={1.5} className="h-6 w-6" />
        </button>
      </div>

      {/* Image stage */}
      <div className="relative flex flex-1 items-center justify-center px-4 py-6 sm:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full max-h-[75vh] w-full max-w-5xl"
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} — image ${activeIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 border border-zinc-800 bg-[#0A0A0A]/80 p-2 text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-50 sm:left-6"
            >
              <ChevronLeft strokeWidth={1.5} className="h-5 w-5" />
            </button>

            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 border border-zinc-800 bg-[#0A0A0A]/80 p-2 text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-50 sm:right-6"
            >
              <ChevronRight strokeWidth={1.5} className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 border-t border-zinc-800 px-6 py-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => onIndexChange(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1 w-6 transition-colors duration-300 ${
                i === activeIndex ? "bg-zinc-50" : "bg-zinc-800 hover:bg-zinc-600"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
