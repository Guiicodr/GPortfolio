"use client";

import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

export default function FeaturedProjects() {
  return (
    <section id="destaques" className="border-b border-white/10">
      <div className="mx-auto w-full px-6 py-24 sm:px-12 lg:px-20 xl:px-28">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Em destaque
          </h2>
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            RODANDO AGORA
          </span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.number}
              variants={item}
              className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-15px_rgba(239,68,68,0.35)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-sm text-zinc-500">
                  {project.number}
                </span>
                <StatusBadge stage={project.stage} />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 font-mono text-xs font-medium tracking-widest text-zinc-500">
                {project.subtitle}
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition-colors duration-300 group-hover:border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
