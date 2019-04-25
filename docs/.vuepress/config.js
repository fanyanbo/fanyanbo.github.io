module.exports = {
  base: '/documents/',
  dest: './docs/.vuepress/dist/documents/',
  title: '酷开系统开放平台',
  description: '再小的个体，也有自己的品牌',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          { text: '主页', link: '/' },
          { text: '前端规范', link: '/frontEnd/' },
          { text: '开发环境', link: '/development/' },
          { text: '学习文档', link: '/notes/' },
          // { text: '官网', link: 'https://www.coocaa.com' },
        ],
        sidebar: {
          '/frontEnd/': genSidebarConfig('前端开发规范'),
          '/notes': [
            {
              title:'前端',
              collapsable: true,
              children:[
                '/notes/frontEnd/前端优化不完全指南',
                '/notes/frontEnd/VueJS组件编码规范',
                '/notes/frontEnd/vue-cli脚手架快速搭建项目',
                '/notes/frontEnd/深入理解vue中的slot与slot-scope',
                '/notes/frontEnd/webpack入门',
                '/notes/frontEnd/PWA初次体验',
                '/notes/frontEnd/最全前端资源汇集',
              ]
            },
            {
              title:'后端',
              collapsable: true,
              children:[
                'notes/backEnd/nginx',
                'notes/backEnd/CentOS如何挂载磁盘',
              ]
            },
            {
              title:'其他',
              collapsable: true,
              children:[
                // '/'
              ]
            },
          ]
        }
      }
    }

  },
  locales: {
    '/': {
      lang: '简体中文',
      description: '再小的个体，也有自己的品牌'
    },
    '/en/': {
      lang: 'English',
      description: 'Connecting your brand to a billion users'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  // serviceWorker: true,
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'html-standard',
      'css-standard',
      'js-standard',
      'git-standard'
    ]
  }]
}
