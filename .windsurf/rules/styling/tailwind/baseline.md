---
description: "Tailwind v4 baseline defaults (utility-first, setup, no apply in production)"
globs: "*.ts,*.tsx,*.css,*.hbs,*.liquid"
alwaysApply: true
priority: high
---

<!-- Windsurf Context: *.ts, *.tsx, *.css, *.hbs, *.liquid -->

# Tailwind Baseline

- Utility-first by default.
- Do not use `@apply` in production code (only short-lived spikes).
- Keep Tailwind as a build-time concern.
- Import Tailwind from one global stylesheet:
  - `@import 'tailwindcss';`
- Keep global stylesheet imports centralized in app/root entries.