module.exports = {
  themeConfig: {
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 5,
    sidebar: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: '信仰探索', link: '/#信仰探索' },
      { text: '生活疑难', link: '/#生活疑难' },
      { text: '思麦与我', link: '/#思麦与我' },
      { text: '最近更新', link: '/最近更新/' }
    ]
  },
  title: '思麦之家',
  description: '思麦之家',
  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    ['link', { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}],
  ],
}
