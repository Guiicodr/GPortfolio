"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

const links = [
  {
    label: "EMAIL",
    href: "mailto:contato@guilherme.dev",
  },
  {
    label: "GITHUB",
    href: "https://github.com/Guiicodr",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/guilhermehriq/",
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_bottom,_rgba(239,68,68,0.08),_transparent_60%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto w-full px-6 py-24 sm:px-12 lg:px-20 xl:px-28 sm:py-32"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm tracking-widest text-zinc-500"
        >
          ~/CONTATO $ <span className="text-red-400">NOVA IDEIA</span>
        </motion.p>

        <motion.h2
          variants={item}
          className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Tem alguma ideia que quer{" "}
          <span className="text-red-500">transformar em produto</span>?
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
        >
          Vamos conversar sobre um projeto, uma vaga ou trocar uma ideia sobre
          engenharia de software. Estou aberto a colaborações e novos desafios.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-4 font-mono text-xs tracking-widest"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rounded border border-white/15 px-5 py-3 text-white transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.4)]"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}