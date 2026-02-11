import os from "node:os"
import path from "node:path"
import { linkManyWithBackup } from "./lib/link/linkManyWithBackup.mjs"

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

const main = async () => {
  const results = await linkManyWithBackup(links)

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
