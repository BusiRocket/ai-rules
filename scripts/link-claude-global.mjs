import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"

const ROOT = process.cwd()
const HOME = os.homedir()

const links = [
  {
    source: path.join(ROOT, "CLAUDE.md"),
    target: path.join(HOME, ".claude", "CLAUDE.md"),
  },
  {
    source: path.join(ROOT, ".claude", "rules"),
    target: path.join(HOME, ".claude", "rules", "busirocket"),
  },
]

const ensureParent = async (targetPath) => {
  await fs.mkdir(path.dirname(targetPath), { recursive: true })
}

const pathExists = async (targetPath) => {
  try {
    await fs.lstat(targetPath)
    return true
  } catch {
    return false
  }
}

const backupIfNeeded = async (targetPath) => {
  const exists = await pathExists(targetPath)
  if (!exists) {
    return { exists: false }
  }

  const stat = await fs.lstat(targetPath)
  if (stat.isSymbolicLink()) {
    const current = await fs.readlink(targetPath)
    return { exists: true, symlink: true, current }
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
  const backupPath = `${targetPath}.backup-${timestamp}`
  await fs.rename(targetPath, backupPath)
  return { exists: true, symlink: false, backupPath }
}

const linkOne = async ({ source, target }) => {
  await ensureParent(target)
  await fs.access(source)

  const info = await backupIfNeeded(target)

  if (info.exists && info.symlink) {
    const currentResolved = path.resolve(path.dirname(target), info.current)
    if (currentResolved === source) {
      return { status: "unchanged", source, target }
    }

    await fs.unlink(target)
  }

  await fs.symlink(source, target)

  return {
    status: "linked",
    source,
    target,
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

  console.log("Claude global links are ready. Restart Claude Code to reload.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
