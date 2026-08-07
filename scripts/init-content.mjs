// netlify build-time script
import { execFile } from 'node:child_process'
import { cp, mkdir, rm } from 'node:fs/promises'
import { promisify } from 'node:util'

const repoUrl = 'https://github.com/say1ddd/obsidian-public.git'
const execFileAsync = promisify(execFile)

await rm('.content', { recursive: true, force: true })

await execFileAsync('git', [
  'clone',
  '--depth',
  '1',
  repoUrl,
  '.content',
])

await rm('src/content', { recursive: true, force: true })
await mkdir('src/content', { recursive: true })

for (const collection of [
  'notes',
  'references',
  'troubleshoots',
]) {
  await cp(
    `.content/${collection}`,
    `src/content/${collection}`,
    { recursive: true },
  )
}

await rm('public/content-assets', {
  recursive: true,
  force: true,
})

await cp(
  '.content/assets',
  'public/content-assets',
  { recursive: true },
)

await rm('.content', { recursive: true, force: true })
