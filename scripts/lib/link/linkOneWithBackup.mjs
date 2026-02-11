import { promises as fs } from "node:fs"
import path from "node:path"
import { backupExistingPath } from "./backupExistingPath.mjs"
import { ensureParentDirectory } from "./ensureParentDirectory.mjs"

export const linkOneWithBackup = async ({ source, target }) => {
  await ensureParentDirectory(target)
  await fs.access(source)

  const info = await backupExistingPath(target)

  if (info.exists && info.symlink) {
    const resolvedCurrent = path.resolve(path.dirname(target), info.current)
    if (resolvedCurrent === source) {
      return { target, source, status: "unchanged" }
    }

    await fs.unlink(target)
  }

  await fs.symlink(source, target)

  return {
    target,
    source,
    status: "linked",
    backupPath: info.backupPath ?? null,
  }
}
