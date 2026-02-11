import { promises as fs } from "node:fs"
import path from "node:path"
import { ensureDir } from "../fs/ensureDir.mjs"

export const syncCursorRules = async (sourceFiles, sourceDir, cursorDir) => {
  await fs.rm(cursorDir, { recursive: true, force: true })
  await ensureDir(cursorDir)

  for (const sourcePath of sourceFiles) {
    const relativePath = path.relative(sourceDir, sourcePath)
    const targetPath = path.join(cursorDir, relativePath)
    await ensureDir(path.dirname(targetPath))
    await fs.copyFile(sourcePath, targetPath)
  }
}
