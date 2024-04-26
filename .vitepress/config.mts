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
          { text: 'Updating Variables', link: '/python-esl/unit_1/04_changing_number_variables' },
          { text: 'Equality', link: '/python-esl/unit_1/04_equality' },
          { text: 'Importing Libraries', link: '/python-esl/unit_1/07_importing_libraries' },
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
