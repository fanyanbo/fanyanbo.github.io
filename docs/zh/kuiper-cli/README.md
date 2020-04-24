# 介绍

kuiper-cli 是一个快速创建web项目模板的脚手架工具。
- `开箱即用，交互友好`
- `可选择多种内置模板`
- `内置模板融合项目最佳实践，可提升效率和质量`
- `配置灵活，可切换你自研的模板`

<br/>

## 环境依赖

在开始使用[kuiper-cli](https://www.npmjs.com/package/@ccos/kuiper-cli)之前，请确保安装有以下环境。

- [Node.js](https://nodejs.org/) *版本必须 >= 8.9.4*

如果你已经有了 `Node.js` 环境，可以通过以下命令安装 `kuiper-cli`。

```bash
# 安装脚手架工具
npm install -g @ccos/kuiper-cli
```

<br/>

## 快速使用

安装脚手架kuiper-cli后，可以通过以下命令查看版本号和帮助信息。

```bash
# 查看版本号
MacBook-Pro:~ username$ kuiper -V
1.0.5

# 查看帮助信息
MacBook-Pro:~ username$ ccos -h
Usage: kuiper <command> [options]

Options:
  -V, --version       output the version number
  -h, --help          display help for command

Commands:
  init [projectName]  Init a project with templete
  help [command]      display help for command
```
<br/>
一切准备就绪，我们来快速创建一个web模板项目吧

```bash
# 创建模板项目，按提示填写或选择内容
MacBook-Pro:~ username$ ccos init mydemo

Kuiper 准备创建一个模板项目!🙅🙅🙅
Need help? Email: fanyanbo@coocaa.com

✔ 拉取远程模板仓库成功！
? 请输入项目介绍:  我的第一个模板项目
? 请选择包管理工具（npm/cnpm/yarn） npm
? 请选择模板 默认模板

✔ 创建项目: mydemo
✔ 创建文件: mydemo/.npmrc
✔ 创建文件: mydemo/.babelrc
✔ 创建文件: mydemo/.eslintrc.js
✔ 创建文件: mydemo/package.json
✔ 创建文件: mydemo/tsconfig.json
✔ 创建文件: mydemo/webpack.config.js
✔ 创建文件: mydemo/config/index.js
✔ 创建文件: mydemo/bin/deploy.sh
✔ 创建文件: mydemo/bin/upload
✔ 创建文件: mydemo/bin/www
✔ 创建文件: mydemo/src/index.html
✔ 创建文件: mydemo/src/css/common.css
✔ 创建文件: mydemo/src/css/index.scss
✔ 创建文件: mydemo/src/images/bg.jpg
✔ 创建文件: mydemo/src/images/logo.png
✔ 创建文件: mydemo/src/js/index.js
✔ 创建文件: mydemo/src/js/index.ts

✔ cd mydemo, 执行 git init
⠼ 执行安装项目依赖 npm install, 需要一会儿...
```

:::tip
Windows平台：`npm install`可能会导致`node-sass`安装失败，建议使用`cnpm install`，cnpm设置方法：`npm install -g cnpm --registry=https://registry.npm.taobao.org` <br>
MacOS平台：注意root权限问题
:::

<br/>

## 切换模板源

默认使用默认模板源，如需切换模板源，请在用户目录/.kuiper/index.json文件中修改templateSource内容

例：如使用基于酷开系统OKR活动开发模板，请使用源：`gitlab:http://gitlab.skysri.com:yuanbo/tv-ccos-template#master`


