module.exports = {
  title: '技术文档',
  description: '基于酷开系统网页开发的技术文档',
  theme: 'api',
  base: '/documents/',
  dest: './docs/.vuepress/dist/documents/',
  // head: [
  //   ['link', { rel: 'icon', href: '/favicon.ico' }],
  // ],
  locales: {
    '/': {
      lang: 'en-US',
      title: '技术文档',
      text: 'english',
      description: '📦 🎨 一份友好的基于酷开系统网页开发的技术文档。',
    },
    '/zh/': {
      lang: 'zh-hans',
      title: '技术文档',
      text: '中文',
      description: '📦 🎨 一份友好的基于酷开系统网页开发的技术文档。',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
      },
    },

    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'sqrthree/vuepress-theme-api',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'sqrthree/vuepress-theme-api',
    docsRepo: 'fanyanbo/fanyanbo.github.io',
    editLinkText: 'contact author',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page',
    lastUpdated: 'Last Updated', // string | boolean
    sidebarGroupOrder: [
      'getting-started',
      'ccos-cli',
      'ccsdk',
      'other'
    ],
    configureWebpack: {
      resolve: {
        alias: {
          '@public': './public'
        }
      }
    },
  },
}
