# 起步

## 介绍

酷开JS-SDK是`酷开开放平台`面向网页开发着提供的基于酷开系统的网页开发工具包。<br>

通过使用酷开JS-SDK,网页开发者可以简单高效的使用酷开系统能力，如获取设备信息，监听状态变化，跳转固定版面等酷开系统特有能力，满足更丰富的产品或运营需求。

### #兼容性

暂无

### #更新日志

暂无

## 安装

### 开发工具

- `VSCode`

- `Google Chrome`


### 直接用`<script>`引入

- `开发版本`

- `生产版本`

### #CDN

## 命令行工具（`CLI`）

提供了一个快速搭建工程的脚手架，只需要几分钟的时间就可以运行起来并带有热重载、保存时lint校验，以及可选择不同的构建工具。<br/>
更多详情可查阅 [ccos-cli](/zh/ccos-cli/)

## 构建于

该项目基于以下开源技术构建：

- [Node.js](https://nodejs.org/)
- [VuePress](https://github.com/vuejs/vuepress)

## 环境依赖

在开始使用本主题之前，请确保安装有以上环境。

- [Node.js](https://nodejs.org/)
- [VuePress](https://github.com/vuejs/vuepress)
- [vuepress-theme-api](https://github.com/sqrthree/vuepress-theme-api)

如果你已经有了 [Node.js](https://nodejs.org/) 环境，可以通过以下命令安装 `VuePress` 和 `vuepress-theme-api`。

```bash
# 安装 vuepress
yarn global add vuepress # OR npm install -g vuepress

# 安装主题
yarn global add vuepress-theme-api # OR npm install -g vuepress-theme-api
```

::: warning 本地依赖
如果你想在一个现有项目中使用 `VuePress`，同时想要在该项目中管理文档，则应该将 `VuePress` 安装为本地依赖。需要注意的是，你同时需要将 [vuepress-theme-api](https://github.com/sqrthree/vuepress-theme-api) 安装为本地依赖。
:::

## 应用主题

`VuePress` 默认情况下将会使用自带的默认主题，因此我们需要在 `.vuepress/config.js` 中配置 theme 选项指定为 `vuepress-theme-api` 来应用主题。更多详情请参考 [VuePress | 自定义主题](https://vuepress.vuejs.org/zh/guide/custom-themes.html#%E4%BD%BF%E7%94%A8%E6%9D%A5%E8%87%AA-npm-%E7%9A%84%E4%B8%BB%E9%A2%98)。

```js{5}
// .vuepress/config.js
module.exports = {
  title: 'Hello, World.',
  description: '📦 🎨 A api-friendly theme for VuePress.',
  theme: 'api',
}
```
