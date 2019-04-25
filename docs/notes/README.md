# 超详细动手搭建一个Vuepress站点及开启PWA与自动部署

> 五一之前就想写一篇关于Vuepress的文章,结果朋友结婚就不了了之了。
>
> 记得最后一定要看注意事项！



## Vuepress介绍

官网：https://vuepress.vuejs.org/

类似hexo一个极简的静态网站生成器,用来写技术文档不能在爽。当然搭建成博客也不成问题。

## Vuepress特点

* 响应式,也可以自定义主题与hexo类似
* 内置markdown(还增加了一些扩展),并且可以在其使用Vue组件
* Google Analytics 集成
* PWA 自动生成Service Worker

## 快速上手

### 安装

初始化项目

```shell
yarn init -y
# 或者 npm init -y
```

安装vuepress

```shell
yarn add -D vuepress
# 或者 npm install -D vuepress
```

全局安装vuepress

```shell
yarn global add vuepress
# 或者 npm install -g vuepress
```

新建一个docs文件夹

```shell
mkdir docs
```

设置下package.json

```shell
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

### 写作

```shell
yarn docs:dev # 或者：npm run docs:dev
```

也就是运行开发环境,直接去docs文件下书写文章就可以,打开http://localhost:8080/可以预览

![](https://wx1.sinaimg.cn/large/99a97bd9ly1fr1lnlowflj20kp0b5aap.jpg)

### 构建

build生成静态的HTML文件,默认会在 `.vuepress/dist` 文件夹下

```shell
yarn docs:build # 或者：npm run docs:build
```

## 基本配置

在 `.vuepress`目录下新建一个`config.js`,他导出一个对象

一些配置可以参考[官方文档](https://vuepress.vuejs.org/config/#base),这里我配置常用及必须配置的

### 网站信息

```javascript
module.exports = {
  title: '游魂的文档',
  description: 'Document library',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
  ],
}
```

### 导航栏配置

```javascript
module.exports = {
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '前端规范', link: '/frontEnd/' },
      { text: '开发环境', link: '/development/' },
      { text: '学习文档', link: '/notes/' },
      { text: '游魂博客', link: 'https://www.iyouhun.com' },
      // 下拉列表的配置
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'English', link: '/language/English' }
        ]
      }
    ]
  }
}
```

如图：

![](https://wx1.sinaimg.cn/large/99a97bd9ly1fr1oz3elibj20fg02bjr9.jpg)

### 侧边栏配置

可以省略`.md`扩展名,同时以 `/` 结尾的路径将会被视为 `*/README.md`

```javascript
module.exports = {
  themeConfig: {
    sidebar: {
      '/frontEnd/': genSidebarConfig('前端开发规范'),
    }
  }
}
```

上面封装的`genSidebarConfig`函数

```javascript
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
```

支持侧边栏分组(可以用来做博客文章分类)  collapsable是当前分组是否展开

```javascript
module.exports = {
  themeConfig: {
    sidebar: {
      '/note': [
        {
          title:'前端',
          collapsable: true,
          children:[
            '/notes/frontEnd/VueJS组件编码规范',
            '/notes/frontEnd/vue-cli脚手架快速搭建项目',
            '/notes/frontEnd/深入理解vue中的slot与slot-scope',
            '/notes/frontEnd/webpack入门',
            '/notes/frontEnd/PWA介绍及快速上手搭建一个PWA应用',
          ]
        },
        {
          title:'后端',
          collapsable: true,
          children:[
            'notes/backEnd/nginx入门',
            'notes/backEnd/CentOS如何挂载磁盘',
          ]
        },
      ]
    }
  }
}
```

如图：

![成品图](https://wx2.sinaimg.cn/large/99a97bd9ly1fr1owmkwimj20ey09a74a.jpg)

## 默认主题修改

### 主题色修改

在`.vuepress`目录下的创建一个`override.styl`文件

```css
$accentColor = #3eaf7c // 主题色
$textColor = #2c3e50 // 文字颜色
$borderColor = #eaecef // 边框颜色
$codeBgColor = #282c34 // 代码背景颜色
```

### 自定义页面类

有时需要在不同的页面应用不同的css,可以先在该页面中声明

```yaml
---
pageClass: custom-page-class
---
```

然后在`override.styl`中书写

```css
.theme-container.custom-page-class {
  /* 特定页面的 CSS */
}
```

## PWA设置

设置serviceWorker为true,然后提供Manifest 和 icons,可以参考我之前的《PWA介绍及快速上手搭建一个PWA应用》

```javascript
module.exports = {
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  serviceWorker: true,
}
```

## 部署上线

### 设置基础路径

在`config.js`设置base
例如：你想要部署在https://foo.github.io 那么设置base为`/`,base默认就为`/`,所以可以不用设置
想要部署在https://foo.github.io/bar/,那么 `base` 应该被设置成 `"/bar/"`

```javascript
module.exports = {
  base: '/documents/',
}
```

`base` 将会自动地作为前缀插入到所有以 `/` 开始的其他选项的链接中,所以你只需要指定一次。

### 构建与自动部署

用[gitHub](https://github.com)的pages或者[coding](https://coding.net/r/O5YOFA)的pages都可以,也可以搭建在自己的服务器上。
将`dist`文件夹中的内容提交到git上或者上传到服务器就好

```shell
yarn docs:build # 或者：npm run docs:build
```

> 另外可以弄一个脚本,设置持续集成,在每次 push 代码时自动运行脚本

deploy.sh

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

## 注意事项(坑)

* 把你想引用的资源都放在`.vuepress`目录下的`public`文件夹
* 给git仓库绑定了独立域名后,记得修改`base`路径
* 设置侧边栏分组后默认会自动生成 上/下一篇链接
* 设置了自动生成侧边栏会把侧边栏分组覆盖掉
* 设置PWA记得开启SSL