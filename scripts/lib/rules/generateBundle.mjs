import { promises as fs } from "node:fs"
import path from "node:path"
import { parseMdc } from "./parseMdc.mjs"

export const generateBundle = async (sourceFiles, sourceDir) => {
  const mdcFiles = sourceFiles
    .filter((filePath) => filePath.endsWith(".mdc"))
    .sort((a, b) => a.localeCompare(b))

  const items = []

  for (const filePath of mdcFiles) {
    const relativePath = path.relative(sourceDir, filePath)
    const content = await fs.readFile(filePath, "utf8")
    const parsed = parseMdc(content)

    items.push({
      rel: relativePath,
      frontmatter: parsed.frontmatter || {},
      content: parsed.body || content.trimEnd(),
    })
  }

  return items
}
