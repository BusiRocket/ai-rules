import { promises as fs } from "node:fs"

export const readIfExists = async (filePath, encoding = "utf8") => {
  try {
    return await fs.readFile(filePath, encoding)
  } catch {
    return null
  }
}
