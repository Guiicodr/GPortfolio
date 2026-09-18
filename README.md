# 🎯 GPortfolio — Personal Portfolio

Personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS** to showcase projects and skills as a developer.

## 🛠️ Tech Stack

- **Next.js** — React framework with SSR and App Router
- **TypeScript** — Static typing
- **Tailwind CSS** — Utility-first styling
- **Geist** — Vercel font

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

```bash
npm run build
npm start
```

## 📄 License

Personal project — all rights reserved.

## 🔐 API de Controle Financeiro

O backend está em `backend/` e usa Java 21, Spring Boot, PostgreSQL, JWT e Spring Security. H2 é usado exclusivamente durante os testes.

### Requisitos

- Java 21
- Maven 3.9+
- PostgreSQL 15+ para execução local

### Executar

```bash
cd backend
export DATABASE_URL=jdbc:postgresql://localhost:5432/controle_financeiro
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=postgres
export JWT_SECRET='troque-por-uma-chave-com-pelo-menos-32-caracteres'
mvn spring-boot:run
```

Para validar sem PostgreSQL:

```bash
mvn -f backend/pom.xml test
```

### Endpoints principais

- `POST /api/auth/register` e `POST /api/auth/login`: cadastro e autenticação; login retorna um JWT.
- `GET /api/transacoes?inicio=2026-01-01&fim=2026-01-31`: lista transações do usuário autenticado.
- `POST /api/transacoes`, `PUT /api/transacoes/{id}` e `DELETE /api/transacoes/{id}`: CRUD protegido por `Authorization: Bearer <token>`.
- `GET /api/transacoes/resumo`: retorna receitas, despesas, saldo e quantidade do período.
- `GET /api/webhooks/whatsapp`: valida o webhook da Meta usando `WHATSAPP_VERIFY_TOKEN`.
- `POST /api/webhooks/whatsapp`: recebe payloads com `X-Webhook-Secret: WHATSAPP_WEBHOOK_SECRET`.

As variáveis `DATABASE_URL`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`, `JWT_SECRET`, `CORS_ALLOWED_ORIGINS`, `WHATSAPP_VERIFY_TOKEN`, `WHATSAPP_WEBHOOK_SECRET`, `WHATSAPP_ACCESS_TOKEN` e `WHATSAPP_PHONE_NUMBER_ID` podem ser fornecidas pelo ambiente. Nunca use os valores padrão em produção.
## 📱 Responsividade

O portfólio é totalmente responsivo utilizando Tailwind CSS:

- **Breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Header**: navegação adaptável com links que se ajustam ao viewport
- **Hero**: layout flexível que reorganiza stats verticalmente em mobile
- **Grids**: projetos em destaque em grid de 2 colunas (desktop), 1 coluna (mobile)
- **Tabela de projetos**: colunas extras aparecem/desaparecem conforme o tamanho da tela
- **Footer**: centralizado e compacto em dispositivos móveis
