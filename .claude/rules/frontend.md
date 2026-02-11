---
paths:
  - "app/**/*"
  - "components/**/*"
  - "hooks/**/*"
  - "*.tsx"
---

# Frontend Rules (umbrella)

Use **@frontend** when working on UI, pages, components, or styling.

This rule references:

- **Next.js umbrella**: `.cursor/rules/nextjs.mdc` — App Router architecture bundle
- **React umbrella**: `.cursor/rules/react.mdc` — architecture, hooks, state, a11y, forms, performance
- **JavaScript umbrella** (optional): `.cursor/rules/javascript.mdc` — extensions, QA, RN/Expo, Shopify JS, cross-runtime rules
- **Next.js**: `.cursor/rules/nextjs/nextjs.mdc` — Server/Client components, special-file exports
- **Route handlers**: `.cursor/rules/nextjs/route-handlers.mdc` — thin API handlers
- **Server actions**: `.cursor/rules/nextjs/server-actions.mdc` — validation, typed result shapes, expected failures
- **Data fetching**: `.cursor/rules/nextjs/data-fetching.mdc` — RSC-first fetch and waterfall prevention
- **Forms/actions**: `.cursor/rules/nextjs/forms-and-actions.mdc` — form + action integration
- **Rendering/performance**: `.cursor/rules/nextjs/rendering-performance.mdc` — dynamic imports, image/script strategy
- **Error/observability**: `.cursor/rules/nextjs/error-observability.mdc` — boundaries and logging context
- **API responses**: `.cursor/rules/nextjs/api-response-shapes.mdc` — JSON shapes, status codes
- **Tailwind umbrella**: `.cursor/rules/tailwind.mdc` — Tailwind v4 standards split by concept
- **Bootstrap** (optional): `.cursor/rules/styling/bootstrap.mdc` — responsive grid/components/utilities with accessibility
- **HTMX** (optional): `.cursor/rules/javascript/htmx.mdc` — server-driven HTML fragments and declarative interactions
- **Vite runtime** (when using Vite): `.cursor/rules/vite/runtime-safety.mdc` — no Node globals in browser bundles; use `import.meta.env`

## Short summary

- Server Components by default; `'use client'` only when needed.
- One component/hook per file; types in `types/`; helpers in `utils/`.
- Prefer Tailwind in `className`; avoid large custom CSS.
