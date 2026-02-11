import { promises as fs } from "node:fs"
import { listFilesRecursive } from "../fs/listFilesRecursive.mjs"
import { sha256 } from "../hash/sha256.mjs"
import { normalizeRel } from "./normalizeRel.mjs"

export const checkCursorRules = async (sourceFiles, sourceDir, cursorDir) => {
  const sourceMap = new Map()

  for (const sourcePath of sourceFiles) {
    const rel = normalizeRel(sourceDir, sourcePath)
    const content = await fs.readFile(sourcePath)
    sourceMap.set(rel, sha256(content))
  }

  let cursorFiles = []
  try {
    cursorFiles = await listFilesRecursive(cursorDir)
  } catch {
    return ["Missing .cursor/rules directory"]
  }

  const cursorMap = new Map()
  for (const cursorPath of cursorFiles) {
    const rel = normalizeRel(cursorDir, cursorPath)
    const content = await fs.readFile(cursorPath)
    cursorMap.set(rel, sha256(content))
  }

  const errors = []

  for (const [filePath, hash] of sourceMap.entries()) {
    if (!cursorMap.has(filePath)) {
      errors.push(`Missing generated file: .cursor/rules/${filePath}`)
      continue
    }

    if (cursorMap.get(filePath) !== hash) {
      errors.push(`Outdated generated file: .cursor/rules/${filePath}`)
    }
  }

  for (const filePath of cursorMap.keys()) {
    if (!sourceMap.has(filePath)) {
      errors.push(`Unexpected generated file: .cursor/rules/${filePath}`)
    }
  }

  return errors
}
