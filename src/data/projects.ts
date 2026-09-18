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
  { label: "IDEIA", value: "02" },
  { label: "CONSTRUINDO", value: "02" },
  { label: "PROTÓTIPO", value: "03" },
  { label: "ARTIGO CIENTÍFICO", value: "01" },
];

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    stage: "PROTÓTIPO",
    title: "Sistema de Controle Financeiro",
    subtitle: "GESTÃO FINANCEIRA COM API REST E FRONTEND DESACOPLADO",
    description:
      "Frontend em JavaScript, JSX, CSS, JSON e HTML com React 19, Vite 8, React DOM, Recharts, Motion, OGL e i18next/react-i18next. Usa ESLint, Fetch API, LocalStorage e tokens CSS para temas e customização, integrado à API REST em Java 21 e Spring Boot.",
    tags: [
      "JavaScript",
      "JSX",
      "CSS",
      "JSON (idiomas)",
      "HTML",
      "React 19",
      "Vite 8",
      "React DOM",
      "Vite React plugin",
      "React Icons",
      "Recharts",
      "Motion",
      "OGL",
      "i18next",
      "ESLint",
      "Fetch API",
      "LocalStorage",
      "CSS tokens",
      "Spring Boot",
    ],
    link: "https://financial-control-dashboard-smoky.vercel.app",
  },
  {
    number: "02",
    stage: "CONSTRUINDO",
    title: "iAssis",
    subtitle: "GESTÃO CLÍNICA PARA PSICÓLOGOS",
    description:
      "Sistema de gestão clínica com frontend em React + Vite + Tailwind, backend em Python + FastAPI, banco de dados e autenticação em Supabase/PostgreSQL, deploy na Vercel e módulo de IA integrado com OpenAI.",
    tags: ["React", "shadcn/ui", "Tailwind", "Vite", "Python", "FastAPI", "Supabase", "PostgreSQL", "TypeScript"],
    link: "https://i-assis.vercel.app",
  },
  ];

export const allProjects: TableProject[] = [
  {
    number: "01",
    title: "Sistema de Controle Financeiro",
    description:
      "Frontend desacoplado em JavaScript, JSX, CSS, JSON e HTML com React 19, Vite 8, React DOM, React Icons, Recharts, Motion, OGL e i18next/react-i18next; inclui ESLint, Fetch API, LocalStorage e tokens CSS para temas e customização, integrado à API REST em Java 21 e Spring Boot",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://financial-control-dashboard-smoky.vercel.app",
  },
  {
    number: "02",
    title: "iAssis",
    description:
      "Sistema de gestão clínica com frontend em React + Vite + Tailwind, backend em Python + FastAPI, Supabase/PostgreSQL para banco e autenticação, deploy do frontend na Vercel e módulo de IA integrado com OpenAI",
    year: 2026,
    stage: "CONSTRUINDO",
    link: "https://i-assis.vercel.app",
  },
  {
    number: "03",
    title: "Pomodu",
    description:
      "App premium de produtividade em React Native (Expo) com timer Pomodoro, detecção de virada de celular (Flip-to-Focus), tarefas Kanban, métricas com gráficos, geolocalização e SQLite local",
    year: 2026,
    stage: "CONSTRUINDO",
    link: "https://github.com/Guiicodr/Pomodu",
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
    title: "Sole Store",
    description:
      "E-commerce de tênis com API própria em Node.js + Express + SQLite e autenticação JWT. Frontend moderno em React + Vite com catálogo visual e experiência de compra completa",
    year: 2026,
    stage: "PROTÓTIPO",
    link: "https://sole-store-omega.vercel.app",
  },
  {
    number: "06",
    title: "Extensão Universitária: LGPD na Prática",
    description:
      "Artigo científico e estudo de caso sobre adequação de sistemas à Lei Geral de Proteção de Dados (LGPD), com análise prática de conformidade em aplicações reais e propostas de mitigação",
    year: 2025,
    stage: "ARTIGO CIENTÍFICO",
  },
];
