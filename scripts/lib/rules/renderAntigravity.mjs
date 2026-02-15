import { renderBundleWithMdcFrontmatter } from "./renderBundleWithMdcFrontmatter.mjs"

function getActivation(item) {
  const { frontmatter } = item
  if (frontmatter.alwaysApply === true) return "Always On"
  if (frontmatter.globs && frontmatter.globs.trim() !== "") return `Glob: ${frontmatter.globs}`
  return "Model Decision"
}

export function renderAntigravity(bundle) {
  return renderBundleWithMdcFrontmatter("GEMINI.md", "", bundle, (item) => ({
    activation: getActivation(item),
  }))
}
