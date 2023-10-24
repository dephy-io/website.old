import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DePHY.io",
  description: "Web3 Infrastructure connecting the Verifiable Physical World.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' }
    ],

    sidebar: [
      {
        // text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Roadmap', link: '/roadmap' },
          { text: 'Team', link: '/team' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dephy-io' }
    ]
  }
})
