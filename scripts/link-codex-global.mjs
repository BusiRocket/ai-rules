import os from "node:os"
import path from "node:path"
import { linkManyWithBackup } from "./lib/link/linkManyWithBackup.mjs"

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

  console.log("Codex global links are ready. Restart Codex to reload.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
