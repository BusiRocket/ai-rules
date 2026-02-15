---
description: "Umbrella: JavaScript/TypeScript domain rules (web, extensions, RN, QA, Shopify)"
globs: "*.js,*.mjs,*.cjs,*.ts,*.tsx"
alwaysApply: false
priority: high
---

<!-- Windsurf Context: *.js, *.mjs, *.cjs, *.ts, *.tsx -->

# JavaScript Rules (umbrella)

Use **@javascript** when working outside strictly Next.js/React app rules or
when the project includes multiple JS/TS runtimes.

This rule references:

- **General JS/TS**: `.windsurf/rules/javascript/general.mdc`
- **Chrome Extensions MV3**: `.windsurf/rules/javascript/chrome-extension-mv3.mdc`
- **Modern web apps**: `.windsurf/rules/javascript/web-apps.mdc`
- **Vue + Vite** (optional): `.windsurf/rules/javascript/vue-vite.mdc`
- **SvelteKit** (optional): `.windsurf/rules/javascript/sveltekit.mdc`
- **Payload CMS + Node** (optional): `.windsurf/rules/integrations/payload-cms.mdc`
- **React Native/Expo**: `.windsurf/rules/javascript/react-native-expo.mdc`
- **Playwright QA**: `.windsurf/rules/javascript/playwright-qa.mdc`
- **Shopify theme JS**: `.windsurf/rules/javascript/shopify-theme.mdc`

## Short summary

- Security-first input handling and least privilege.
- Prefer TypeScript and explicit boundaries.
- Apply stack-specific rules only when that stack is present.