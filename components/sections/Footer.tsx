import { Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

const CONTACT = {
  name: "Ananda Maulid",
  phone: "+62 895-2439-4626",
  phoneHref: "tel:+6289524394626",
  email: "anandamaulids@gmail.com",
  site: "anandamaulid.vercel.app",
  siteHref: "https://anandamaulid.vercel.app",
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 pb-8 pt-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-zinc-800 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              {CONTACT.name}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-zinc-100 md:text-6xl">
              Get in
              <br />
              Touch
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
            >
              <Mail size={16} strokeWidth={1.5} className="shrink-0 text-zinc-500 transition-colors group-hover:text-[#D9B872]" />
              <span>{CONTACT.email}</span>
            </a>
            <a
              href={CONTACT.phoneHref}
              className="group flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
            >
              <Phone size={16} strokeWidth={1.5} className="shrink-0 text-zinc-500 transition-colors group-hover:text-[#D9B872]" />
              <span>{CONTACT.phone}</span>
            </a>
            <Link
              href={CONTACT.siteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-zinc-300 transition-colors hover:text-white"
            >
              <Globe size={16} strokeWidth={1.5} className="shrink-0 text-zinc-500 transition-colors group-hover:text-[#D9B872]" />
              <span>{CONTACT.site}</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start gap-4 pt-6 text-[11px] uppercase tracking-[0.15em] text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>
            &copy; {currentYear} {CONTACT.name}. All rights reserved.
          </span>
          <span>Student Leader &amp; Digital Creator</span>
        </div>
      </div>
    </footer>
  );
}
