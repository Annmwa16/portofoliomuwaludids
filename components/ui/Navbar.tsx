"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const activeEl = linkRefs.current[pathname];
    const container = containerRef.current;
    if (activeEl && container) {
      const c = container.getBoundingClientRect();
      const r = activeEl.getBoundingClientRect();
      setPill({ left: r.left - c.left, width: r.width, opacity: 1 });
    } else {
      setPill((p) => ({ ...p, opacity: 0 }));
    }
  }, [pathname]);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-4 z-50 mx-auto flex w-fit items-center gap-6 rounded-full border px-2 py-2 transition-all duration-500",
          scrolled
            ? "border-border-hairline bg-surface/70 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "border-border-subtle bg-surface/30 backdrop-blur-md"
        )}
      >
        <Link href="/" className="pl-4 pr-2 font-serif text-sm tracking-[0.15em] text-text-primary">
          A.M.
        </Link>

        <nav ref={containerRef} className="relative hidden items-center gap-1 md:flex">
          <motion.div
            className="absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-text-primary/10"
            animate={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
          />
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => {
                  linkRefs.current[item.href] = el;
                }}
                className={cn(
                  "relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="mr-1 flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-text-primary/5 md:hidden"
          aria-label="Buka menu navigasi"
        >
          <Menu size={20} />
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-serif text-sm tracking-[0.15em] text-text-primary">A.M.</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary hover:bg-text-primary/5"
                aria-label="Tutup menu navigasi"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-baseline gap-4 border-b border-border-subtle py-4 font-serif text-4xl transition-colors",
                        isActive ? "text-text-primary" : "text-text-muted"
                      )}
                    >
                      <span className="font-sans text-xs text-text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}