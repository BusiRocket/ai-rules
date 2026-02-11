import path from "node:path"

export const normalizeRel = (baseDir, filePath) =>
  path.relative(baseDir, filePath).split(path.sep).join("/")
