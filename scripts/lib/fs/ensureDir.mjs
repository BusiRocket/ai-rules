import { promises as fs } from "node:fs"

export const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true })
}
