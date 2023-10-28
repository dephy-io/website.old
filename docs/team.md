---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/avatar/zhe_wang.jpg',
    name: 'Zhe WANG',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/skysummerice' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/%E5%96%86-%E7%8E%8B-0a99a038/' }
    ],
    desc: `
    <ul style="list-style: circle; text-align: left;">
      <li>Ten years+ as hardware engineer</li>
      <li>Built a mining ecosystem from scratch</li>
      <li>Phala Network Co-Founder</li>
    </ul>
    `,
  },
  {
    avatar: '/avatar/jun_jiang.jpg',
    name: 'Jun JIANG',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/jasl' },
      { icon: 'twitter', link: 'https://twitter.com/jasl9187' }
    ],
    desc: `
    <ul style="list-style: circle; text-align: left;">
      <li>Full stack developer</li>
      <li>Ruby developer!</li>
      <li>Phala Network Co-Founder</li>
    </ul>
    `,
  },
  {
    avatar: '/avatar/jiacheng_zhang.jpg',
    name: 'Jiacheng ZHANG',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/krhougs' },
    ],
    desc: `
    <ul style="list-style: circle; text-align: left;">
      <li>Full-stack Engineer with extensive experience in contract and blockchain development</li>
    </ul>
    `,
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/3211941?v=4',
    name: 'Song WU',
    // title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/wsof401' },
    ],
    desc: `
    <ul style="list-style: circle; text-align: left;">
      <li>Full-stack Engineer with rich backend development experience</li>
    </ul>
    `,
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
