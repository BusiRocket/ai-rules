---
paths:
  - "app/**/*.tsx"
  - "app/**/*.ts"
  - "src/**/*.tsx"
  - "src/**/*.ts"
---

# React Native / Expo

## Component and state

- Use functional components and hooks.
- Prefer local state by default; promote to global state only when needed.
- For complex transitions, prefer reducer-style state handling.

## Performance

- Optimize lists (`FlatList`) only when measurable.
- Avoid anonymous render hot-path callbacks when rerender pressure exists.
- Memoize expensive calculations and stable render props where justified.

## Operations

- Plan OTA update safety and rollback strategy when using EAS Updates.
- Handle offline/fetch failures with explicit fallback states.
