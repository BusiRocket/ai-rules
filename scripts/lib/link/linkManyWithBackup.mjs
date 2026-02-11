import { linkOneWithBackup } from "./linkOneWithBackup.mjs"

export const linkManyWithBackup = async (links) => {
  const results = []

  for (const link of links) {
    results.push(await linkOneWithBackup(link))
  }

  return results
}
