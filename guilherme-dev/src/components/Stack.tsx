"use client";

import { motion } from "framer-motion";

interface StackItem {
  name: string;
  level: string;
}

interface StackCategory {
  category: string;
  items: StackItem[];
}

const stackData: StackCategory[] = [
  {
    category: "LINGUAGENS",
    items: [
      { name: "Java", level: "Foco principal" },
      { name: "TypeScript", level: "Foco principal" },
      { name: "JavaScript", level: "Avançado" },
      { name: "SQL", level: "Avançado" },
      { name: "HTML5 / CSS3", level: "Avançado" },
    ],
  },
  {
    category: "FRAMEWORKS & BIBLIOTECAS",
    items: [
      { name: "Spring Boot 3", level: "APIs REST, Security, Webhooks" },
      { name: "Spring Security", level: "JWT, OAuth2, RBAC" },
      { name: "React 19", level: "Componentes, Hooks, Server Components" },
      { name: "Next.js 16", level: "App Router, SSR, SSG" },
      { name: "Tailwind CSS 4", level: "Design system utility-first" },
    ],
  },
  {
    category: "FERRAMENTAS & PLATAFORMAS",
    items: [
      { name: "Railway", level: "Deploy de APIs e bancos" },
      { name: "Vercel", level: "Deploy de frontends" },
      { name: "Git & GitHub", level: "Versionamento e CI/CD" },
      { name: "PostgreSQL", level: "Modelagem e queries" },
      { name: "Meta Cloud API", level: "WhatsApp Business Integration" },
    ],
  },
  {
    category: "ARQUITETURA & CONCEITOS",
    items: [
      { name: "REST API", level: "Design e versionamento" },
      { name: "Autenticação JWT", level: "Stateless + Refresh Token" },
      { name: "Webhooks", level: "Eventos e callbacks em tempo real" },
      { name: "Stateful / Stateless", level: "Sessão vs Token" },
      { name: "Arquitetura Monolítica", level: "Modular e escalável" },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
} as const;

export default function Stack() {
  return (
    <section id="stack" className="border-b border-white/10">
      <div className="mx-auto w-full px-6 py-24 sm:px-12 lg:px-20 xl:px-28">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Stack
          </h2>
          <span className="font-mono text-xs tracking-widest text-zinc-500">
            LINGUAGENS & FERRAMENTAS
          </span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {stackData.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-15px_rgba(239,68,68,0.25)]"
            >
              <h3 className="mb-5 font-mono text-xs font-semibold tracking-[0.2em] text-zinc-500">
                <span className="text-red-400/80">&gt;</span> {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between border-b border-white/[0.04] pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-white transition-colors duration-300 group-hover:text-zinc-200">
                      {tech.name}
                    </span>
                    <span className="ml-4 text-right font-mono text-[11px] tracking-wide text-zinc-500">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}