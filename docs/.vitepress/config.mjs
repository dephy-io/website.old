import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DePHY",
  titleTemplate: "DePHY | :title",
  description: "Web3 Infrastructure connecting the Verifiable Physical World.",
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo-l.svg", alt: "DePHY" },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' }
    ],
    search: {
      provider: 'local'
    },
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
