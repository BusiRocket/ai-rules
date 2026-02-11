import { promises as fs } from "node:fs"
import { normalizeRel } from "./normalizeRel.mjs"

export const generateBundle = async (sourceFiles, sourceDir) => {
  const mdcFiles = sourceFiles
    .filter((filePath) => filePath.endsWith(".mdc"))
    .sort((a, b) => a.localeCompare(b))

  const sections = []

  for (const filePath of mdcFiles) {
    const relativePath = normalizeRel(sourceDir, filePath)
    const content = await fs.readFile(filePath, "utf8")
    sections.push(`## ${relativePath}\n\n\`\`\`mdc\n${content.trimEnd()}\n\`\`\``)
  }

  return sections.join("\n\n")
}
