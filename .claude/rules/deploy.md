---
paths:
  - "*.sh"
  - "lib/**/*"
  - "*.yaml"
  - ".env*"
  - "deploy.sh"
---

# Deploy Rules (umbrella)

Use **@deploy** when working on deployment scripts, K8s/Helm, or agent-driven deploy flows.

This rule references:

- **Sonnet/agent**: `.cursor/rules/deploy/sonnet.mdc` — codebase search first, list rules, output discipline

## Short summary

- Agent: search codebase first; check existing files before creating; list rules when helpful.
