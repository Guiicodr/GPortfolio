"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/data/projects";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.12),_transparent_60%)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full px-6 py-24 sm:px-12 lg:px-20 xl:px-28 sm:py-32"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm tracking-widest text-zinc-500"
        >
          ~/PORTFOLIO $ <span className="text-red-400">LS PROJETOS</span>
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Ideias viram{" "}
          <span className="text-red-500">protótipos</span> antes de virarem
          promessas.
        </motion.h1>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            variants={item}
            className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
          >
            Engenheiro de software, estudante de Análise e Desenvolvimento de
            Sistemas. Este é um registro aberto do que estou construindo — do
            primeiro esboço de arquitetura ao protótipo rodando. Cada projeto
            mostra o estágio real em que está, não uma versão maquiada.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-shrink-0 gap-8"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/10 pl-6 first:border-l-0 first:pl-0"
              >
                <p className="font-mono text-[11px] tracking-widest text-zinc-500">
                  {stat.label}
                </p>
                <p className="mt-1 font-mono text-3xl font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
