---
paths:
  - "*.rs"
  - "*.sql"
  - "*.prompt"
  - "src-tauri/**/*"
---

# Rust / Tauri Rules (umbrella)

Use **@rust** when working on Rust or Tauri code.

This rule references:

- **Rust + Tauri**: `.cursor/rules/rust/rust-tauri.mdc` — one-thing-per-file, module layout, SQL/prompt in separate files, Tauri command checklist (command file + lib.rs + permissions)

## Short summary

- One public function/type/trait per file; no inline SQL or prompts (use `include_str!()`).
- New Tauri command: (1) command file, (2) register in `lib.rs`, (3) add to `commands.allow` in permissions.
