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
      { text: '教会与我', link: '/#教会与我' }
    ]
  },
  title: '七标志',
  description: '七标志',
  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    ['link', { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico"}],
  ],
}
