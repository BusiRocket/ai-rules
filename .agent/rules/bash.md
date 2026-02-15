<!-- Antigravity Rule
Activation: Glob: *.sh
Description: Umbrella: Bash/Shell standards and refactor workflow
-->

# Bash Rules (umbrella)

Use **@bash** when working on Bash or shell scripts.

This rule references:

- **Bash standards**: `.agent/rules/bash/bash.mdc` — language, structure, functions, IO, layout, validation
- **Bash refactor**: `.agent/rules/bash/refactor.mdc` — @file refactor workflow for .sh files

## Short summary

- One responsibility per script; entry scripts thin (parse + call helpers); helpers in `scripts/bash/utils/` or area subfolders.
- Validate with `bash -n` and `shellcheck` where possible.