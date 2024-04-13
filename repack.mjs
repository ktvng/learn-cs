console.log("repacking...")

const files = [
    'pyodide-lock.json',
    'pyodide.asm.js',
    'pyodide.asm.wasm',
    'python_stdlib.zip'
  ]

import { copyFile } from 'fs/promises'
for (const file of files) {
    await copyFile(`node_modules/pyodide/${file}`, `docs/.vitepress/dist/assets/${file}`)
  }
