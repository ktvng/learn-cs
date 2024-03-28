import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Learning Python",
  description: "A Python curriculum aimed at introducing beginners to programming concepts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Unit 1', link: '/python-esl/unit_1/index' }
    ],

    sidebar: [
      {
        text: 'Unit 1',
        items: [
          { text: 'Overview', link: '/python-esl/unit_1/index' },
          { text: 'Printing Basics', link: '/python-esl/unit_1/01_basic_printing' },
          { text: 'Simple Math', link: '/python-esl/unit_1/02_simple_math' },
          { text: 'Introduction to Variables', link: '/python-esl/unit_1/03_defining_number_variables' },
          { text: 'Updating Variables', link: '/python-esl/unit_1/04_changing_number_variables' },
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
