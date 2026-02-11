import { promises as fs } from "node:fs"
import path from "node:path"
import { listFilesRecursive } from "./lib/fs/listFilesRecursive.mjs"
import { readIfExists } from "./lib/fs/readIfExists.mjs"
import { checkClaudeRules } from "./lib/rules/checkClaudeRules.mjs"
import { checkCursorRules } from "./lib/rules/checkCursorRules.mjs"
import { generateBundle } from "./lib/rules/generateBundle.mjs"
import { renderAgents } from "./lib/rules/renderAgents.mjs"
import { renderClaude } from "./lib/rules/renderClaude.mjs"
import { syncClaudeRules } from "./lib/rules/syncClaudeRules.mjs"
import { syncCursorRules } from "./lib/rules/syncCursorRules.mjs"

const ROOT = process.cwd()
const SOURCE_DIR = path.join(ROOT, "rules")
const CURSOR_DIR = path.join(ROOT, ".cursor", "rules")
const CLAUDE_RULES_DIR = path.join(ROOT, ".claude", "rules")
const CLAUDE_PATH = path.join(ROOT, "CLAUDE.md")
const AGENTS_PATH = path.join(ROOT, "AGENTS.md")

const main = async () => {
  const checkOnly = process.argv.includes("--check")

  let sourceFiles = []
  try {
    sourceFiles = await listFilesRecursive(SOURCE_DIR)
  } catch {
    console.error("Missing rules source directory: /rules")
    process.exit(1)
  }

  const bundle = await generateBundle(sourceFiles, SOURCE_DIR)
  const nextClaude = renderClaude(bundle)
  const nextAgents = renderAgents(bundle)

  if (checkOnly) {
    const errors = [
      ...(await checkCursorRules(sourceFiles, SOURCE_DIR, CURSOR_DIR)),
      ...(await checkClaudeRules(sourceFiles, SOURCE_DIR, CLAUDE_RULES_DIR)),
    ]

    const currentClaude = await readIfExists(CLAUDE_PATH)
    const currentAgents = await readIfExists(AGENTS_PATH)

    if (currentClaude !== nextClaude) {
      errors.push("Outdated generated file: CLAUDE.md")
    }

    if (currentAgents !== nextAgents) {
      errors.push("Outdated generated file: AGENTS.md")
    }

    if (errors.length > 0) {
      console.error("Rules are not compiled or are out of date:\n")
      for (const error of errors) {
        console.error(`- ${error}`)
      }
      process.exit(1)
    }

    console.log("Rules are up to date.")
    return
  }

  await syncCursorRules(sourceFiles, SOURCE_DIR, CURSOR_DIR)
  await syncClaudeRules(sourceFiles, SOURCE_DIR, CLAUDE_RULES_DIR)
  await fs.writeFile(CLAUDE_PATH, nextClaude, "utf8")
  await fs.writeFile(AGENTS_PATH, nextAgents, "utf8")

  console.log("Compiled rules for Cursor, Claude, and Codex.")
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
