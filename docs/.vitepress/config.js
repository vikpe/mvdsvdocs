import { defineConfig } from 'vitepress';
import sidebars from "./sidebars"

export default defineConfig({
    title: 'MVDSV',
    description: 'QuakeWorld Server',
    lastUpdated: true,
    outDir: '../dist',
    ignoreDeadLinks: true,
    //cleanUrls: 'without-subfolders',
    vite: {
      define: {
        global: {}
      }
    },
    themeConfig: {
      logo: '/assets/img/mvdsv_logo.png',
      nav: [
        { text: 'Getting started', link: '/info/getting-started' },
        { text: 'Documentation', link: '/docs' },
        { text: 'Downloads', link: '/info/downloads' },
        { text: 'About', link: '/info/about' },
      ],
//      algolia: {},
      socialLinks: [
        { icon: 'github', link: 'https://github.com/QW-Group/mvdsv' },
        { icon: 'discord', link: 'https://discord.quake.world' },
      ],
      editLink: {
        pattern: 'https://github.com/vikpe/mvdsvdocs/edit/main/docs/:path'
      },
      sidebar: sidebars.general
    }
  }
)
