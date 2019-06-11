# 起步

## 介绍

酷开JS-SDK是`酷开开放平台`面向网页开发者提供的运行在酷开系统的网页开发工具包。<br>

通过使用酷开JS-SDK,网页开发者可以简单高效的使用酷开系统能力，如获取设备信息，监听状态变化，跳转指定版面等酷开系统特有能力，以满足更丰富的产品或运营需求。

<br/>

### #兼容性

- 不支持webp

- 不支持`<video>`标签

- 多`<button>`会自动寻焦，建议使用推荐做法：[coocaamap](/zh/)

<br/>

### #更新日志

暂无

<br/>

## 安装

### 开发工具（推荐使用）

- `VSCode`

- `Google Chrome`

<br/>

### 直接用`<script>`引入

直接下载并用`<script>`标签引入，CCOS会被注册为一个全局变量。

`酷开JS-SDK下载`：[开发版本](https://nodejs.org/)，[生产版本](https://nodejs.org/) | `jQuery下载`：[链接](https://nodejs.org/)

::: warning 
你使用酷开JS-SDK，必须要先引入jQuery，否则你将无法正常使用。<br/>
在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告！
:::

<br/>

### #CDN

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

```html
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
<br/>

## 命令行工具（`CLI`）

提供了一个快速搭建工程的脚手架，只需要几分钟的时间就可以运行起来并带有热重载、保存时lint校验，以及可选择不同的构建工具。<br/>
更多详情可查阅 [ccos-cli](/zh/ccos-cli/)

请注意我们`不推荐`新手直接使用ccos-cli，尤其是在你还不熟悉基于Node.js的构建工具时。
