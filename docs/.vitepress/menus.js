export const main = {
  items: [
    { text: 'Getting started', link: '/info/getting-started' },
    { text: 'Downloads', link: '/info/downloads' },
    { text: 'About', link: '/info/about' },
  ]
};

export const community = {
  text: 'Community',
  collapsible: true,
  collapsed: true,
  items: [
    { text: 'Discord', link: 'https://discord.quake.world' },
    { text: 'Twitch', link: 'https://www.twitch.tv/quakeworld' },
    { text: 'QuakeWorld Hub', link: 'https://hub.quakeworld.nu' },
    { text: 'QuakeWorld.nu', link: 'https://www.quakeworld.nu' },
    { text: 'QuakeWorld GFX', link: 'https://gfx.quakeworld.nu' },
    { text: 'QuakeWorld Wiki', link: 'https://www.quakeworld.nu/wiki/Overview' },
  ]
};

export const sourceCode = {
  text: 'Source code',
  items: [
    { text: 'MVDSV server', link: 'https://github.com/QW-Group/mvdsv' },
    { text: 'MVDSV website', link: 'https://github.com/vikpe/mvdsvdocs' },
    { text: 'KTX', link: 'https://github.com/QW-Group/ktx' },
  ]
};

export const relatedProjects = {
  text: 'Related projects',
  items: [
    { text: 'ezQuake', link: 'https://ezquake.com' },
    { text: 'QTV', link: 'https://github.com/QW-Group/qtv' },
    { text: 'qwfwd', link: 'https://github.com/QW-Group/qwfwd' },
  ]
};

export const misc = {
  text: 'Misc',
  items: [
    { text: 'Files and directory structure', link: '/docs/structure' },
  ]
};

export const documentation = {
  text: 'Documentation',
  items: [
    { text: 'Overview', link: '/docs' },
    { text: 'Command Line Parameters', link: '/docs/command-line-parameters' },
    { text: 'Commands', link: '/docs/commands' },
    { text: 'Variables', link: '/docs/variables' },
    { text: 'KTX', link: '/docs/ktx' },
  ]
};

export default {
  community,
  main,
  misc,
  documentation,
  relatedProjects,
  sourceCode,
}
