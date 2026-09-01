export type Stage = "PROTÓTIPO" | "CONSTRUINDO" | "ARTIGO CIENTÍFICO";

export interface FeaturedProject {
  number: string;
  stage: Stage;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface TableProject {
  number: string;
  title: string;
  description: string;
  year: number;
  stage: Stage;
  link?: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export const heroStats: StatItem[] = [
  { label: "PROTÓTIPO", value: "04" },
  { label: "CONSTRUINDO", value: "00" },
  { label: "ARTIGO CIENTÍFICO", value: "01" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    stage: "PROTÓTIPO",
    title: "iAssis — Intelligent Clinical Management",
    subtitle: "GESTÃO CLÍNICA INTELIGENTE COM IA E SUPABASE",
    description:
      "Full-stack platform for clinical management with Supabase Auth, SOAP electronic health records, digital prescriptions, exam management, and AI triage module. Features profile-based authentication (professional/patient), real-time dashboard, and smooth animations.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Recharts",
      "AI",
    ],
    link: "https://i-assis.vercel.app",
  },
  {
    number: "02",
    stage: "PROTÓTIPO",
    title: "Sistema de Controle Financeiro",
    subtitle: "GESTÃO FINANCEIRA COM API REST E FRONTEND DESACOPLADO",
    description:
      "API REST em Spring Boot 3 com segurança JWT e Docker, hospedada no Railway, com frontend em Next.js na Vercel. Arquitetura desacoplada com autenticação stateful/stateless e dashboard completo de gestão financeira.",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React",
      "Next.js",
      "Tailwind",
      "JWT",
    ],
    link: "https://financial-control-dashboard-smoky.vercel.app",
  },
  {
    number: "03",
    stage: "PROTÓTIPO",
    title: "Sole Store",
    subtitle: "E-COMMERCE DE TÊNIS COM ESTILO JOVIAL",
    description:
      "E-commerce de tênis com frontend em React + Vite + Tailwind e backend próprio em Node.js + Express + SQLite com autenticação JWT. Catálogo com curadoria visual, páginas de produto e experiência de compra fluida do início ao fim.",
    tags: ["React", "Node.js", "Express", "TypeScript", "Tailwind", "JWT", "SQLite", "UI/UX"],
    link: "https://sole-store-omega.vercel.app",
  },
];

export const allProjects: TableProject[] = [
  {
    number: "01",
    title: "iAssis — Intelligent Clinical Management",
    description:
      "Full-stack platform for clinical management with Supabase Auth, SOAP records, digital prescriptions, exams, AI triage, real-time dashboard and profile-based access",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://github.com/Guiicodr/iAssis",
  },
  {
    number: "02",
    title: "Sistema de Controle Financeiro",
    description:
      "API REST em Spring Boot 3 (Railway) e frontend em Next.js (Vercel), com autenticação JWT, Docker e dashboard financeiro completo",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://financial-control-dashboard-smoky.vercel.app",
  },
  {
    number: "03",
    title: "Sole Store",
    description:
      "E-commerce de tênis com API própria em Node.js + Express + SQLite e autenticação JWT. Frontend moderno em React + Vite com catálogo visual e experiência de compra completa",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://sole-store-omega.vercel.app",
  },
  {
    number: "04",
    title: "Mapa Secreto",
    description:
      "Landing page com mapa interativo em Leaflet + React para divulgação de um curso estudantil sobre regiões pouco conhecidas de São Paulo. Inclui servidor Express próprio e animações com Framer Motion",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://mapa-secreto-nine.vercel.app",
  },
  {
    number: "05",
    title: "Extensão Universitária: LGPD na Prática",
    description:
      "Artigo científico e estudo de caso sobre adequação de sistemas à Lei Geral de Proteção de Dados (LGPD), com análise prática de conformidade em aplicações reais e propostas de mitigação",
    year: 2025,
    stage: "ARTIGO CIENTÍFICO",
  },
];
