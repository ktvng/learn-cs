import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn CS",
  description: "A simple, straightforward presentation of computer science, fit for everyone.",
  vite: {
    optimizeDeps: {
      exclude: ["pyodide"]
    },
    worker: {
      format: 'es'
    },
    build: {
      target: 'esnext',
      rollupOptions: {
        plugins: [pyodide()]
      }
    },
    // For an unknown reason, adding the headers here in the vite config does not
    // extend to the HTML files
    server: {
      headers: {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin"
      }
    },
    preview: {
      headers: {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin"
      }
    },
    plugins: [
      {
        name: "configure-response-headers",
        configureServer: (server) => {
          server.middlewares.use((_req, res, next) => {
            res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
            res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
            next();
          });
        },
      },
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Editor', link: '/python-editor'},
      { text: 'Unit 1', link: '/python-esl/unit_1/index' }
    ],

    sidebar: [
      {
        text: 'Unit 1',
        items: [
          { text: 'Overview', link: '/python-esl/unit_1/index' },
          { text: 'First Steps', link: '/python-esl/unit_1/01_basic_printing' },
          { text: 'Simple Math', link: '/python-esl/unit_1/02_simple_math' },
          { text: 'Names and Variables', link: '/python-esl/unit_1/03_defining_number_variables' },
          { text: 'Equality', link: '/python-esl/unit_1/04_equality' },
        ]
      },
      // {
      //   text: 'Unit 2',
      //   items: [
      //     { text: 'Overview', link: '/python-esl/unit_1/index' },


      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ktvng/learn-cs' }
    ]
  },
})

import { copyFile, mkdir } from 'fs/promises'

// https://pyodide.org/en/latest/usage/working-with-bundlers.html#vite
function pyodide() {
  return {
    name: 'pyodide',
    generateBundle: async () => {
      await mkdir('dist/assets', { recursive: true })
      const files = [
        'pyodide-lock.json',
        'pyodide.asm.js',
        'pyodide.asm.wasm',
        'python_stdlib.zip'
      ]
      for (const file of files) {
        await copyFile(`node_modules/pyodide/${file}`, `dist/assets/${file}`)
      }
    }
  }
}
