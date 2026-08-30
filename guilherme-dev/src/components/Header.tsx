"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "PROJETOS", href: "#todos-projetos" },
  { label: "STACK", href: "#stack" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 py-5 sm:px-12 lg:px-20 xl:px-28">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-red-500/90 text-xs text-black">
            /
          </span>
          <span>guilherme.dev</span>
        </a>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden font-mono text-xs font-medium tracking-widest text-zinc-400 transition-colors duration-300 hover:text-white sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded border border-white/15 px-4 py-2 font-mono text-xs font-medium tracking-widest text-white transition-colors duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400"
          >
            CONTATO
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
