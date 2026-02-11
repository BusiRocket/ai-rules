import { promises as fs } from "node:fs"
import path from "node:path"

const defaultIsIgnored = (entryName) => entryName === ".DS_Store"

export const listFilesRecursive = async (dirPath, isIgnored = defaultIsIgnored) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    if (isIgnored(entry.name)) {
      continue
    }

    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      const nested = await listFilesRecursive(fullPath, isIgnored)
      results.push(...nested)
      continue
    }

    if (entry.isFile()) {
      results.push(fullPath)
    }
  }

  return results.sort((a, b) => a.localeCompare(b))
}
