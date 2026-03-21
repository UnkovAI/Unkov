# Unkov

AI-native identity orchestration for the agentic enterprise.

## Development

```bash
pnpm install
pnpm dev
```

Opens at `http://localhost:3000`.

## Build

```bash
pnpm build
```

Output goes to `dist/`.

## Deploy (Vercel)

Connect this repository to Vercel. The `vercel.json` at the root handles build config and SPA routing rewrites automatically.

**Required environment variables in Vercel dashboard:** none for the base deployment.

## Structure

```
unkov/
├── vercel.json          ← Vercel build + routing config
├── vite.config.ts       ← Vite build config
├── package.json
├── tsconfig.json
├── shared/              ← Shared constants
└── client/              ← All frontend code
    ├── vercel.json      ← SPA routing rewrites
    ├── index.html
    ├── public/          ← Static assets (PDFs, etc.)
    └── src/
        ├── App.tsx      ← Router + page registry
        ├── main.tsx
        ├── index.css
        ├── pages/       ← One file per route
        ├── components/  ← Shared UI components
        ├── hooks/
        ├── lib/
        └── contexts/
```

## Investor Access

The `/for-investors` and `/roadmap` routes are access-code gated. Run the code generator locally:

```bash
pnpm investor:code          # 24h code
pnpm investor:code 72       # 72h code
pnpm investor:list          # list all active codes
```

Codes are generated client-side. Nothing is sent to any server.

---

© 2026 Unkov. Confidential.
