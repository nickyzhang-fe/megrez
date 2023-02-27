export default {
    markdown: {
        lineNumbers: true //md 加行号
    },
    lastUpdated: true, //显示最近更新时间
    siteTitle: 'vue-template',
    appearance: true, //可以选择深浅主题
    themeConfig: {
        nav: nav(),
        sidebar: sidebar(),
        socialLinks: [{ icon: "github", link: "https://github.com/qddidi/easyest" }],
    },
}
function nav() {

    return [
        { text: "指南", link: "/guild/installation",  activeMatch: '/guide/' },
        { text: "组件", link: "/components/button", activeMatch: '/components/' },
        {
            text: '记录',
            link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
          }
    ]
}
function sidebar() {
    return [
        {
            text: "基础",
            collapsed: false,
            items: [
                {
                    text: "安装",
                    link: "/guild/installation",
                },
                {
                    text: "快速开始",
                    link: "/guild/quickstart",
                },
            ],
        },
        {
            text: "基础组件",
            collapsed: false,
            items: [
                {
                    text: "Button",
                    link: "/components/button",
                },
                {
                    text: "Button",
                    link: "/components/card",
                }
            ],
        }
    ]
}