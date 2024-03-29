import { mdPlugin } from './config/plugins'
export default {
  base: '/megrez/',
  title: 'Megrez',
  markdown: {
    lineNumbers: true, //md 加行号
    config: (md) => mdPlugin(md),
  },
  lastUpdated: true, //显示最近更新时间
  siteTitle: 'Megrez',
  appearance: true, //可以选择深浅主题
  themeConfig: {
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/components/': sidebarComponents()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 亦秋'
    },
    outlineTitle: '当前页',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: '上次更新时间'
  },
}

function nav() {
  return [
    { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
    { text: '组件', link: '/components/checkbox', activeMatch: '/components/' },
    {
      text: '记录',
      link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
    },
  ]
}
function sidebarGuide() {
  return [
    {
      text: '基础',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: '安装',
          link: '/guide/installation',
        },
        {
          text: '快速开始',
          link: '/guide/quickstart',
        },
      ],
    },
  ]
}
function sidebarComponents() {
  return [
    {
      text: '基础组件',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'Checkbox',
          link: '/components/checkbox',
        },
        {
          text: 'Tree',
          link: '/components/tree',
        },
      ]
    },
    {
      text: '基础组件',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'Checkbox',
          link: '/components/checkbox',
        },
        {
          text: 'Tree',
          link: '/components/tree',
        }
      ]
    }
  ]
}
