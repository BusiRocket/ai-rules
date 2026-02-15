---
description: "Umbrella: Deploy (K8s Helm, agent guidelines)"
globs: "*.sh,lib/**/*,*.yaml,.env*,deploy.sh"
alwaysApply: false
priority: high
---

<!-- Windsurf Context: *.sh, lib/**/*, *.yaml, .env*, deploy.sh -->

# Deploy Rules (umbrella)

Use **@deploy** when working on deployment scripts, K8s/Helm, or agent-driven deploy flows.

This rule references:

- **Sonnet/agent**: `.windsurf/rules/deploy/sonnet.mdc` — codebase search first, list rules, output discipline
- **GitHub security**: `.windsurf/rules/deploy/github-security.mdc` — secrets handling and workflow hardening

## Short summary

- Agent: search codebase first; check existing files before creating; list rules when helpful.