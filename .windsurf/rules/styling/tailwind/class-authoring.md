---
description: "Tailwind class authoring conventions (ordering, variants, readability)"
globs: "*.ts,*.tsx,*.hbs,*.liquid"
alwaysApply: true
priority: high
---

<!-- Windsurf Context: *.ts, *.tsx, *.hbs, *.liquid -->

# Tailwind Class Authoring

- Keep class lists readable and stable.
- Use this order when possible:
  - layout/display -> positioning -> sizing -> spacing -> typography -> colors -> border/radius -> effects -> motion -> state.
- If a component repeatedly needs 20+ utilities:
  - extract a wrapper component or variant map.
- Prefer `cn()` + variant maps (CVA if already present) over inline conditional class spaghetti.
- Avoid creating custom CSS utility layers that duplicate Tailwind.