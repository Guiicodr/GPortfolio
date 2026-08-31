export type Stage = "PROTÓTIPO" | "CONSTRUINDO";

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
  { label: "IDEIA", value: "02" },
  { label: "CONSTRUINDO", value: "02" },
  { label: "PROTÓTIPO", value: "03" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    stage: "CONSTRUINDO",
    title: "Sistema de Controle Financeiro",
    subtitle: "GESTÃO FINANCEIRA COM API REST E FRONTEND DESACOPLADO",
    description:
      "API REST em Spring Boot 3 hospedada no Railway, com frontend em React/Next.js na Vercel. Autenticação via JWT e arquitetura stateful/stateless bem definida entre client e servidor.",
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
    number: "02",
    stage: "PROTÓTIPO",
    title: "Sole Store",
    subtitle: "E-COMMERCE DE TÊNIS COM ESTILO JOVIAL",
    description:
      "E-commerce com curadoria de tênis de marca. Algumas páginas implementadas com foco em experiência visual, sem backend no momento.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "UI/UX"],
  },
];

export const allProjects: TableProject[] = [
  {
    number: "01",
    title: "Sistema de Controle Financeiro",
    description:
      "API REST em Spring Boot 3 (Railway) e frontend em Next.js (Vercel), com autenticação JWT",
    year: 2026,
    stage: "CONSTRUINDO",
    link: "https://financial-control-dashboard-smoky.vercel.app",
  },
  {
    number: "02",
    title: "Sole Store",
    description:
      "E-commerce jovial de tênis de marca, estilo site da Nike — algumas páginas implementadas, sem backend no momento",
    year: 2026,
    stage: "PROTÓTIPO",
  },
  {
    number: "03",
    title: "Mapa Secreto",
    description:
      "Landing page para curso estudantil, site de turismo de regiões pouco conhecidas de São Paulo",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://mapa-secreto-nine.vercel.app",
  },
  {
    number: "04",
    title: "IASSIS",
    description:
      "Gestão, agendamento e acompanhamento de clientes em clínicas psicológicas, com funcionalidade de IA integrada",
    year: 2026,
    stage: "CONSTRUINDO",
  },
  {
    number: "05",
    title: "Extensão Universitária: LGPD na Prática",
    description:
      "Artigo científico e estudo de caso sobre adequação de sistemas à Lei Geral de Proteção de Dados",
    year: 2025,
    stage: "PROTÓTIPO",
  },
];
