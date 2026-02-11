# 🚀 BusiRocket Rules

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

- [Cursor](https://cursor.com) (for `.cursor/rules`)
- Claude Code (for `CLAUDE.md`)
- Codex (for `AGENTS.md`)

---

## Global setup (symlink)

Rules now live in `rules/` and are compiled into tool-specific outputs.

To use with Cursor globally, compile first and symlink generated `.cursor/rules`:

```bash
git clone https://github.com/BusiRocket/ai-rules.git
cd ai-rules
pnpm rules:compile
ln -s "$(pwd)/ai-rules/.cursor/rules" ~/.cursor/rules
```

If you cloned into a different directory, use that path as the source:

```bash
ln -s /path/to/ai-rules/.cursor/rules ~/.cursor/rules
```

Cursor will then load these rules globally. To use rules per project instead, see [Quick start](#quick-start) below.

---

## Quick start

1. **Edit source rules** in `rules/`.
2. **Compile outputs**:

   ```bash
   pnpm rules:compile
   ```

   This generates:
   - `.cursor/rules/**` for Cursor
   - `CLAUDE.md` for Claude Code
   - `AGENTS.md` for Codex

3. **Optional — validate generated outputs**:

   ```bash
   pnpm rules:check
   ```

4. **Use umbrella rules in Cursor** when you want one rule that pulls in several:
   - **@core** — project, general, boundaries, naming, anti-patterns
   - **@react** — React architecture, hooks, state, accessibility, forms, performance, security
   - **@nextjs** — App Router architecture, route handlers, data fetching, server actions, performance, error handling
   - **@frontend** — Next.js, React, components, hooks, state, Tailwind, Vite runtime (when using Vite)
   - **@tailwind** — Tailwind v4 standards (baseline, tokens, class authoring, states, responsive, hygiene)
   - **@typescript** — TS standards, types, refactoring, post-change checks
   - **@javascript** — JS/TS domain rules (web apps, MV3 extensions, RN/Expo, Playwright, Shopify theme)
   - **@api** — route handlers, response shapes, validation, services vs utils
   - **@php** — general PHP + Laravel + WordPress + Drupal standards
   - **@refactor** — @file refactor + TypeScript refactoring
   - **@rust** — Rust + Tauri (when used)
   - **@bash** — Bash/Shell standards and @file refactor for `.sh` files
   - **@python** — Python schema-driven development and UV
   - **@n8n** — n8n workflow design and MCP tools
   - **@deploy** — K8s Helm deploy and agent (Sonnet) guidelines

---

## Folder layout

| Folder           | Purpose                              |
| ---------------- | ------------------------------------ |
| `rules/`         | Source of truth for all `.mdc` rules |
| `.cursor/rules/` | Generated rules for Cursor           |
| `CLAUDE.md`      | Generated bundle for Claude Code     |
| `AGENTS.md`      | Generated bundle for Codex           |

---

## References inside rules

Rules reference other rules by path (e.g. `.cursor/rules/nextjs/route-handlers.mdc`). Keep references target-compatible and avoid duplicating content.

---

## Customization

- **Rename or remove domains** — Delete or rename folders under `rules/` and update umbrella files (`core.mdc`, `frontend.mdc`, `api.mdc`, etc.) that point at them.
- **Add your own rules** — Add new `.mdc` files under `rules/` (and optionally new umbrella entries).
- **Adjust strictness** — Edit the rule files to loosen or tighten constraints (e.g. file length, export count) to match your team.

---

## Scripts (from this repo)

When working inside this repository:

| Script               | Description                            |
| -------------------- | -------------------------------------- |
| `pnpm rules:compile` | Compile rules for Cursor/Claude/Codex  |
| `pnpm rules:check`   | Validate generated outputs are current |
| `pnpm format`        | Format all `.mdc` rules with Prettier  |
| `pnpm format:check`  | Check that rules are formatted (CI)    |

---

## Contributing

Contributions are welcome. Please open an issue or a pull request. Keep rules under ~500 lines per file, one concern per file, and use references to other rules instead of duplicating content.

---

## License

MIT — see [LICENSE](LICENSE) for details.
