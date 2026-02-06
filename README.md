# BusiRocket Rules

**Cursor IDE rules for maintainable, agent-friendly codebases** — Next.js, React, TypeScript, API boundaries, and optional Rust/Tauri.

A reusable set of [Cursor rules](https://docs.cursor.com/context/rules-for-ai) organised by domain. Rules are kept under ~500 lines, split by concern, and reference each other instead of duplicating content. Optimised for **many small, focused files** and **thin route handlers** so both humans and AI agents can navigate and change the codebase safely.

---

## Why use this?

- **Consistent structure** — One exported symbol per file, types in `types/`, helpers in `utils/`, boundaries in `services/`.
- **Thin API layer** — Route handlers only validate input, call a service, and return a response.
- **Quality gate** — Rules remind you to run the project check script after meaningful changes.
- **Agent-friendly** — Small files and explicit boundaries improve context and reduce refactor risk when using Cursor (or similar) AI assistance.
- **Optional stacks** — Core + frontend + API rules are always relevant; Rust/Tauri and Supabase rules apply only when you use those stacks.

---

## Requirements

- [Cursor](https://cursor.com) (or any editor that supports Cursor-style `.cursor/rules`).

---

## Quick start

1. **Copy the rules into your repo:**

   ```bash
   git clone https://github.com/YOUR_ORG/busirocket-rules.git /tmp/busirocket-rules
   cp -r /tmp/busirocket-rules/.cursor/rules .cursor/
   ```

   Or copy the `.cursor/rules` folder from this repo into your project root so you have `.cursor/rules/` with all `.mdc` files.

2. **Optional — format rules (Prettier):**

   ```bash
   cd /path/to/your/project
   yarn add -D prettier   # or npm/pnpm
   yarn prettier --write ".cursor/rules/**/*.mdc"
   ```

3. **Use umbrella rules in Cursor** when you want one rule that pulls in several:
   - **@core** — project, general, boundaries, naming, anti-patterns
   - **@frontend** — Next.js, React, components, hooks, state, Tailwind
   - **@typescript** — TS standards, types, refactoring, post-change checks
   - **@api** — route handlers, response shapes, validation, services vs utils
   - **@refactor** — @file refactor + TypeScript refactoring
   - **@rust** — Rust + Tauri (when used)

---

## Folder layout

| Folder        | Purpose                                                                    |
| ------------- | -------------------------------------------------------------------------- |
| `core/`       | Project guidelines, general engineering, boundaries, naming, anti-patterns |
| `typescript/` | TypeScript standards, type conventions, refactoring, post-change checks    |
| `nextjs/`     | App Router, route handlers, API response shapes                            |
| `react/`      | React architecture, components, hooks, state (e.g. Zustand)                |
| `api/`        | Validation at boundaries                                                   |
| `styling/`    | Tailwind CSS v4                                                            |
| `backend/`    | services vs utils, Supabase (when used)                                    |
| `refactor/`   | @file refactor workflow                                                    |
| `rust/`       | Rust + Tauri (when used)                                                   |

---

## References inside rules

Rules reference other rules by path (e.g. `.cursor/rules/nextjs/route-handlers.mdc`). Do not copy long content into multiple files; reference the single source so rules stay short and in sync.

---

## Customization

- **Rename or remove domains** — Delete or rename folders under `.cursor/rules/` and update any umbrella rule files (`core.mdc`, `frontend.mdc`, `api.mdc`, etc.) that point at them.
- **Add your own rules** — Add new `.mdc` files under `.cursor/rules/` (and optionally new umbrella entries).
- **Adjust strictness** — Edit the rule files to loosen or tighten constraints (e.g. file length, export count) to match your team.

---

## Scripts (from this repo)

When working inside this repository:

| Script              | Description                           |
| ------------------- | ------------------------------------- |
| `yarn format`       | Format all `.mdc` rules with Prettier |
| `yarn format:check` | Check that rules are formatted (CI)   |

---

## Contributing

Contributions are welcome. Please open an issue or a pull request. Keep rules under ~500 lines per file, one concern per file, and use references to other rules instead of duplicating content.

---

## License

[Choose your license](https://choosealicense.com/) (e.g. MIT, Apache-2.0) and add it here and in a `LICENSE` file in the repo root.
