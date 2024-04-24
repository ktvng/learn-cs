import { defineConfig } from 'vitepress'
import { vitepressPythonEditor } from 'vitepress-python-editor/vite-plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learn CS",
  description: "A simple, straightforward presentation of computer science, fit for everyone.",
  srcExclude: ['README.md'],
  vite: {
    plugins: [vitepressPythonEditor()],
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ktvng/learn-cs' }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Editor', link: '/python-editor'},
      { text: 'Unit 1', link: '/unit_1/index' }
    ],
    sidebar: [
      {
        text: 'Unit 1',
        items: [
          { text: 'Overview', link: '/unit_1/' },
          { text: 'First Steps', link: '/unit_1/01_basic_printing' },
          { text: 'Simple Math', link: '/unit_1/02_simple_math' },
          { text: 'Names and Variables', link: '/unit_1/03_defining_number_variables' },
          { text: 'Updating Variables', link: '/unit_1/04_changing_number_variables' },
          { text: 'Equality', link: '/unit_1/04_equality' },
          { text: 'Importing Libraries', link: '/unit_1/07_importing_libraries' },
        ]
      },
    ],
  },
})
