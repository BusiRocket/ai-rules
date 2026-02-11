import { parseMdc } from "./parseMdc.mjs"

export const toClaudeRule = (content) => {
  const { frontmatter, body } = parseMdc(content)

  if (!frontmatter) {
    return content.trimEnd()
  }

  const globs = (frontmatter.globs ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
    .filter((value) => value !== "*")

  if (globs.length === 0) {
    return body
  }

  const pathLines = globs.map((glob) => `  - "${glob}"`).join("\n")
  return `---\npaths:\n${pathLines}\n---\n\n${body}`
}
