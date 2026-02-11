import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"

const ROOT = process.cwd()
const HOME = os.homedir()

const links = [
  {
    source: path.join(ROOT, "AGENTS.md"),
    target: path.join(HOME, ".codex", "AGENTS.md"),
  },
  {
    source: path.join(ROOT, "codex", "rules", "default.rules"),
    target: path.join(HOME, ".codex", "rules", "default.rules"),
  },
]

const ensureParent = async (targetPath) => {
  await fs.mkdir(path.dirname(targetPath), { recursive: true })
}

const backupIfNeeded = async (targetPath) => {
  try {
    const stat = await fs.lstat(targetPath)
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
    const backupPath = `${targetPath}.backup-${timestamp}`

    if (stat.isSymbolicLink()) {
      const current = await fs.readlink(targetPath)
      return { exists: true, symlink: true, current, backupPath: null }
    }

    await fs.rename(targetPath, backupPath)
    return { exists: true, symlink: false, backupPath }
  } catch {
    return { exists: false }
  }
}

const linkOne = async ({ source, target }) => {
  await ensureParent(target)

  await fs.access(source)

  const info = await backupIfNeeded(target)

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

const main = async () => {
  const results = []

  for (const item of links) {
    results.push(await linkOne(item))
  }

  for (const result of results) {
    if (result.status === "unchanged") {
      console.log(`= ${result.target} already linked to ${result.source}`)
      continue
    }

    if (result.backupPath) {
      console.log(`~ Existing file moved to ${result.backupPath}`)
    }

    console.log(`+ Linked ${result.target} -> ${result.source}`)
  }

  console.log("Codex global links are ready. Restart Codex to reload.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
