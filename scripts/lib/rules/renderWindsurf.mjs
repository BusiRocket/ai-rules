import { renderBundleWithMdcFrontmatter } from "./renderBundleWithMdcFrontmatter.mjs"

function getPriority(item) {
  const { frontmatter } = item
  if (frontmatter.alwaysApply === true) return "high"
  if (frontmatter.globs && frontmatter.globs.trim() !== "") return "high"
  return "medium"
}

export function renderWindsurf(bundle) {
  return renderBundleWithMdcFrontmatter("WINDSURF.md", "(Windsurf/Cascade)", bundle, (item) => ({
    priority: getPriority(item),
  }))
}
