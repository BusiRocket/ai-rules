# Cursor Rules (organised by domain)

Rules are kept under 500 lines, split by domain, and reference each other instead of duplicating content.

## Folder layout

| Folder | Purpose |
|--------|---------|
| `core/` | Project guidelines, general engineering, boundaries, naming, anti-patterns |
| `typescript/` | TS standards, types conventions, refactoring, post-change checks |
| `nextjs/` | App Router, route handlers, API response shapes |
| `react/` | React architecture, components, hooks, state (Zustand) |
| `api/` | Validation at boundaries |
| `styling/` | Tailwind CSS v4 |
| `backend/` | services vs utils, Supabase (when used) |
| `refactor/` | @file refactor workflow |
| `rust/` | Rust + Tauri (when used) |

## Umbrella rules (root)

Use these when you want one rule that points at several:

- **@core** — project, general, boundaries, naming, anti-patterns
- **@frontend** — Next.js, React, components, hooks, state, Tailwind
- **@typescript** — TS standards, types, refactoring, post-change checks
- **@api** — route handlers, response shapes, validation, services vs utils
- **@refactor** — @file refactor + TypeScript refactoring
- **@rust** — Rust + Tauri

## References inside rules

Rules reference other rules by path, e.g. `.cursor/rules/nextjs/route-handlers.mdc`. Do not copy long content; reference the file so rules stay short and stay in sync with the codebase.
