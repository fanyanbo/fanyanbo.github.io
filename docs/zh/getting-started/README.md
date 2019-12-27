# 起步

## 介绍

酷开JS-SDK是`酷开开放平台`面向网页开发者提供的运行在酷开系统的网页开发工具包。<br>

通过使用酷开JS-SDK,网页开发者可以简单方便的使用酷开系统能力，如获取设备信息，监听网络状态变化，跳转指定版面等酷开系统特有能力，以满足更丰富的产品或运营需求。

<br/>

### #兼容性

- 不支持webp

- 不支持`<video> <canvas>`标签

- 多`<button>`会自动寻焦，推荐使用插件：[ccmap](/zh/other/)

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

直接下载并用`<script>`标签引入`ccsdk.js`[[使用文档]](/zh/other/)，`ccApp`会被注册为一个全局变量。

下载地址：[Common开发版本](https://beta.webapp.skysrt.com/fyb/other/cdn/ccsdk-common-1.0.js) | [Lite开发版本](https://beta.webapp.skysrt.com/fyb/other/cdn/ccsdk-1.0.js)


::: tip 
Common版本集成了`ccmap插件`和`jQuery`, Lite版本则不集成。
如单独使用`ccmap插件`[[使用文档]](/zh/other/)，必须要先引入`jQuery`[下载地址](https://jquery.com/download/)，否则你将无法正常使用ccmap。<br/>
在开发环境下不要使用压缩版本，否则你就失去了所有常见错误相关的警告！
:::

<br/>

### #CDN

```html
<!-- 开发环境Common版本，包含了有帮助的命令行警告 -->
<script src="https://beta.webapp.skysrt.com/fyb/other/cdn/ccsdk-common-1.0.js"></script>
<!-- 开发环境Lite版本，包含了有帮助的命令行警告 -->
<script src="https://beta.webapp.skysrt.com/fyb/other/cdn/ccsdk-1.0.js"></script>
```

```html
<!-- 生产环境Common版本，优化了尺寸和速度 -->
<script src="https://beta.webapp.skysrt.com/fyb/other/cdn/ccsdk-common-1.0.min.js"></script>
<!-- 生产环境Lite版本，优化了尺寸和速度 -->
<script src="https://beta.webapp.skysrt.com/fyb/other/cdn/ccsdk-1.0.min.js"></script>
```
<br/>

## 脚手架工具（`CLI`）

提供了一个快速搭建工程的脚手架，只需要几分钟的时间就可以运行起来并带有本地调试、热更新、保存时lint校验以及可选择不同的构建工具。<br/>
更多详情可查阅 [ccos-cli](/zh/ccos-cli/)

::: tip 
我们`推荐`开发者使用`ccos-cli`进行开发，前提是你熟悉基于Node.js的构建工具。
:::


