"use client";

import { motion } from "framer-motion";
import { allProjects } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

export default function ProjectsTable() {
  return (
    <section id="todos-projetos" className="border-b border-white/10">
      <div className="mx-auto w-full px-6 py-24 sm:px-12 lg:px-20 xl:px-28">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Todos os projetos
          </h2>
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            ÍNDICE
          </span>
        </div>

        <div className="hidden grid-cols-[4rem_1fr_6rem_11rem] gap-4 border-b border-white/10 pb-4 font-mono text-xs tracking-widest text-zinc-500 sm:grid">
          <span>Nº</span>
          <span>PROJETO</span>
          <span>ANO</span>
          <span>ESTÁGIO</span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.number}
              variants={item}
              className="group grid grid-cols-[4rem_1fr] items-center gap-4 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[4rem_1fr_6rem_11rem]"
            >
              <span className="font-mono text-sm text-zinc-500">
                {project.number}
              </span>
              <div>
                <h3 className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-red-400">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-red-400"
                    >
                      {project.title}
                      <svg
                        className="h-3.5 w-3.5 text-zinc-500 transition-colors"
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
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {project.description}
                </p>
              </div>
              <span className="hidden font-mono text-sm text-zinc-400 sm:block">
                {project.year}
              </span>
              <div className="mt-3 sm:mt-0">
                <StatusBadge stage={project.stage} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
