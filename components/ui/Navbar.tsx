"use client";

import { useEffect, useState } from "react";
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

  // Efek untuk shadow navbar saat di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile otomatis tiap kali pindah halaman
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

        {/* --- NAVBAR DESKTOP --- */}
        <nav className="relative hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "text-text-primary" : "text-text-muted hover:text-text-secondary"
                )}
              >
                {/* Bayangan Pill pakai layoutId (Otomatis geser mulus) */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 z-0 rounded-full bg-text-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {/* Teks link harus di atas shadow (z-10) */}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* --- TOMBOL MENU MOBILE --- */}
        <button
          onClick={() => setMobileOpen(true)}
          className="mr-1 flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-text-primary/5 md:hidden"
          aria-label="Buka menu navigasi"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* --- DROPDOWN MENU MOBILE --- */}
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
