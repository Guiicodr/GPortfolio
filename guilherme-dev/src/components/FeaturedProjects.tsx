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
          {featuredProjects.map((project) => {
            const MotionCard = project.link ? motion.a : motion.div;
            const cardProps = project.link
              ? { href: project.link, target: "_blank" as const, rel: "noopener noreferrer" as const }
              : {};

            return (
              <MotionCard
                key={project.number}
                variants={item}
                {...cardProps}
                className={`group relative rounded-xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 ${
                  project.link
                    ? "cursor-pointer hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-15px_rgba(239,68,68,0.35)]"
                    : ""
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-sm text-zinc-500">
                    {project.number}
                  </span>
                  <StatusBadge stage={project.stage} />
                </div>

                <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
                  {project.title}
                  {project.link && (
                    <svg
                      className="h-4 w-4 -translate-y-0.5 text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  )}
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
              </MotionCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
