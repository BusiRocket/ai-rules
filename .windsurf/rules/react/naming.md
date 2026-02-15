---
description: "React naming conventions for handlers, booleans, and hooks"
globs: "*.tsx,hooks/**/*.ts,components/**/*.tsx"
alwaysApply: true
priority: high
---

<!-- Windsurf Context: *.tsx, hooks/**/*.ts, components/**/*.tsx -->

# React Naming

## Handlers

- Event handlers must start with `handle`:
  - `handleClick`
  - `handleSubmit`
  - `handleKeyDown`

## Booleans

- Use auxiliary-verb names:
  - `isLoading`
  - `hasError`
  - `canSubmit`
  - `shouldRetry`

## Hooks

- Hooks must start with `use`:
  - `useAuth`
  - `useFormState`
  - `useUserSettings`