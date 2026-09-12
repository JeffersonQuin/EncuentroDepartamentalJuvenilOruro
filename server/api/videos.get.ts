import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineEventHandler(() => {
  const filePath = resolve('./server/data/videos.json')
  const data = JSON.parse(readFileSync(filePath, 'utf-8'))
  return data
})
