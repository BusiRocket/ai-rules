---
paths:
  - "*.js"
  - "*.mjs"
  - "*.cjs"
  - "*.ts"
  - "*.tsx"
---

# JavaScript Rules (umbrella)

Use **@javascript** when working outside strictly Next.js/React app rules or
when the project includes multiple JS/TS runtimes.

This rule references:

- **General JS/TS**: `.cursor/rules/javascript/general.mdc`
- **Chrome Extensions MV3**: `.cursor/rules/javascript/chrome-extension-mv3.mdc`
- **Modern web apps**: `.cursor/rules/javascript/web-apps.mdc`
- **React Native/Expo**: `.cursor/rules/javascript/react-native-expo.mdc`
- **Playwright QA**: `.cursor/rules/javascript/playwright-qa.mdc`
- **Shopify theme JS**: `.cursor/rules/javascript/shopify-theme.mdc`

## Short summary

- Security-first input handling and least privilege.
- Prefer TypeScript and explicit boundaries.
- Apply stack-specific rules only when that stack is present.
