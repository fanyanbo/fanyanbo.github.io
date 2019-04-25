
# Vue-cli脚手架快速搭建项目图文教程

> ​	前言：比较基础的教程，大神自行忽略

## 脚手架是什么？

“脚手架”是一种元编程的方法，用于构建基于数据库的应用。许多MVC框架都有运用这种思想。
程序员编写一份specification（规格说明书），来描述怎样去使用数据库；而由（脚手架的）编译器来根据这份specification生成相应的代码，进行增、删、改、查数据库的操作。我们把这种模式称为"脚手架"，在脚手架上面去更高效的建造出强大的应用！

好吧，其实说白点就是可以快速帮你搭建一个项目的基础架子，你直接拿过来用然后添加新项目需要的东西。
## 准备工作
### 安装node

首先我们需要安装node环境，官网[https://nodejs.org](!https://nodejs.org)下载安装包。

安装完成后可以，可以命令行工具中输入 `node -v` 和 `npm -v`，如果能显示出版本号，就说明安装成功。

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8wvb9mjsj20bv03gwed.jpg)

### 安装 Vue-cli

首先全局安装 vue-cli

```shell
npm install -g vue-cli
```

安装完成后 同样适用命令行工具 输入 `vue -V` 记住 大写V ! 	大写V ! 	大写V !

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8x45ygu2j20a1029glf.jpg)

## 生成项目

首先需要在命令行中进入到项目目录，然后输入：

```shell
vue init webpack Vue-Project
```

Vue-Project 是自定义的项目名称，命令执行之后，会在当前目录生成一个以该名称命名的项目文件夹,如下图

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8y6zg2vfj20ui0ln40r.jpg)



**初始化，安装依赖**

如果跟我一样没有立即执行npm装包，那么咱们可以手动 执行去安装依赖

```shell
npm install
```

安装依赖完成

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8yemihnbj20a702fweb.jpg)

**run**

```shell
npm run dev
```

浏览器打开<http://localhost:8080/#/> ，会看到欢迎页：

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8yix99sij20ql0jlwf8.jpg)

**build**

```shell
npm run build
```

打包后会生成dist文件夹

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8ymhd1kij20l30dkt9i.jpg)

打开dist文件夹下新生成的index.html文件，会发现页面空白，打开控制台会发现页面中引用的css和js文件都找不到：

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8yny5572j20t50453ym.jpg)

说明引用路径错了，需要手动修改：

进入config/index.js

![img](https://ww2.sinaimg.cn/large/a15b4afegy1fq8yqd75y2j20gk0dtaad.jpg)

如果本地的8080端口被占用，可以修改端口号。

**打包上线**

打包完成后，会生成 dist 文件夹，如果已经修改了文件路径，可以直接打开本地文件查看

项目上线时，只需要将 dist 文件夹放到服务器就行了。
