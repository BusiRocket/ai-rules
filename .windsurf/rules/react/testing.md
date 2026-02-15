---
description: "React testing strategy (opt-in, risk-based)"
globs: "*.tsx,*.test.ts,*.test.tsx"
alwaysApply: false
priority: high
---

<!-- Windsurf Context: *.tsx, *.test.ts, *.test.tsx -->

# React Testing

## When to test

- Tests are opt-in unless explicitly requested or the change is high-risk.

## Baseline stack

- Unit/component tests: Jest + React Testing Library.
- E2E tests for critical flows: Playwright.

## Test style

- Follow Arrange-Act-Assert.
- Prefer behavior-focused tests over implementation-detail tests.
- Use deterministic setup/teardown; avoid fragile timing assumptions.