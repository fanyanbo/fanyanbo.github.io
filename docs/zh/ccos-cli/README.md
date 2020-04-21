# 介绍

ccos-cli 是一个快速搭建基于酷开系统web项目的脚手架工具。
- `开箱即用，灵活配置`
- `可选择多种构建工具`
- `支持桌面浏览器调试`
- `支持热更新`
- `一键打包上传`

<br/>

## 构建于

该项目基于以下开源技术构建：

- [Node.js](https://nodejs.org/) *版本必须 >= 8.9.4*

<br/>

## 环境依赖

在开始使用[ccos-cli](https://www.npmjs.com/package/ccos-cli)之前，请确保安装有以下环境。

- [Node.js](https://nodejs.org/) *版本必须 >= 8.9.4*

如果你已经有了 `Node.js` 环境，可以通过以下命令安装 `ccos-cli`。

```bash
# 安装脚手架工具
npm install -g ccos-cli

# 建议使用淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

<br/>

## 快速使用

安装脚手架ccos-cli后，可以通过以下命令查看版本号和帮助信息。

```bash
# 查看版本号
MacBook-Pro:~ username$ ccos -v
0.1.34

# 查看帮助信息
MacBook-Pro:~ username$ ccos -h
Usage: ccos [options] [command]

Options:
  -v, --version           output the version number
  -h, --help              output usage information

Commands:
  help                    显示使用帮助
  init|i [options] [dir]  创建一个可以使用酷开系统Api的web项目
```
<br/>
一切准备就绪，我们来快速创建一个web项目吧

```bash
# 查看init命令使用帮助
MacBook-Pro:~ username$ ccos init -h
Usage: init|i [dir] -t [fis|webpack|gulp]

创建一个可以使用酷开系统Api的web项目

Options:
  -t, --tool [fis|webpack|gulp]  选择构建工具, 默认是fis, 建议使用webpack构建
  -h, --help                     output usage information
```

> [dir] 指定项目目录，不指定则默认在当前工作目录创建<br/>
> -t 指定构建工具，不指定则默认使用fis3，建议使用webpack构建，目前暂不支持使用gulp构建

```bash
# 创建项目，工程目录为mydemo，构建工具为fis3
MacBook-Pro:~ username$ ccos init mydemo
⠋ creating the project...

   create dir
   create index.html
   create index.css
   create logo.png
   create js/ccsdk-1.0.js
   create js/ccsdk-common-1.0.js
   create js/ccmap-2.1.js
   create js/index.js
   create js/jquery-1.8.3.min.js
   create bin/www
   create bin/upload
   create bin/deploy
   create config/index.js
   create package.json

  Create complete.

  Tip: cd mydemo && cnpm install 
```

:::warning
Windows平台下，`npm install`可能会导致`node-sass`安装失败，建议使用`cnpm install` <br>
cnpm设置方法：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
:::

创建后使用`treer`输出目录结构如下:

```js{1}
  mydemo
  ├─package.json
  ├─src
  |  ├─fis-conf.js
  |  ├─index.html
  |  ├─js
  |  | ├─ccmap-2.1.js
  |  | ├─ccsdk-1.0.js
  |  | ├─ccsdk-common-1.0.js
  |  | ├─index.js
  |  | └jquery-1.8.3.min.js
  |  ├─images
  |  |   └logo.png
  |  ├─css
  |  |  └index.css
  ├─config
  |   └index.js
  ├─bin
  |  ├─deploy.sh
  |  ├─online
  |  ├─upload
  |  ├─www
  |  ├─online-edit
  |  |      ├─ccmap-2.1.js
  |  |      ├─index.html
  |  |      ├─index.js
  |  |      └jquery-1.8.3.min.js
```

<br/>

修改配置文件，默认只支持你通过ftp协议上传静态文件，否则无法使用上传功能

文件路径：`config/index.js`

```js
'use strict'

const path = require('path')

module.exports = {
    dev: {
        //请输入您http服务器信息
        ftpConnection: {
            host: "xx.xx.xx.xx",  //如172.20.135.54
            user: "您的账号", //appuser
            password: "您的密码" 
        },
        serverDomain: 'beta.webapp.skysrt.com',
        serverDir: 'fyb/aaa', //只支持已存在目录下创建一级目录
        localPort: 3003,
        localDistDir: path.join(__dirname, '../dist'),
        localSrcDir: path.join(__dirname, '../src'),
        entry: 'index.html'
    },

    build: {
        ftpConnection: {
            host: '',
            user: '',
            password: ''
        },
        serverDomain: '',
        serverDir: '',
        localDistDir: path.join(__dirname, '../dist'),
        entry: 'index.html'
    }
}
```

::: warning
1. <font size=3 color=#f00>请先填写您的http服务器信息，否则无法连接服务器；</font>
2. <font size=3 color=#f00>请注意serverDir配置项的用法，请不要在fyb目录下提前创建aaa目录，工具会自动创建，如存在aaa目录则会导致上传失败；</font>
3. <font size=3 color=#f00>暂只支持在fyb目录下创建一级目录，不支持创建多级目录，如fyb/aaa/bbb则不支持。</font>
:::

进入工程目录（注意不是src目录），执行以下命令开始你的工作吧。
```bash
# 编译开发环境，自动打开桌面浏览器
npm run dev
OR
npm start

# 实时监听文件修改，自动刷新桌面浏览器
npm run watch

# 构建生产目录，默认为dist
npm run build

# 上传生产代码，默认目录为dist
npm run upload

# 一键打包上传
npm run deploy
```
<br/>

## 自定义构建


__fis3构建配置文件__

文件路径：`src/fis-conf.js`

__webpack构建配置文件__

文件路径：`webpack.config.js`

