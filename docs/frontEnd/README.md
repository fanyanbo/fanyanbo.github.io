---
meta:
  - name: description
    content: 前端开发规范手册
  - name: keywords
    content: 前端规范,前端开发规范,前端开发
---
# 一般规范 :tada: 

## 统一编码

为了使我们所编写的项目在任何语言的操作系统上都能运行，达到国际化，编码统一使用 UTF-8

##  文件/资源命名

在 web 项目中，所有的文件名应该都遵循同一命名约定。以可读性而言，减号（-）是用来分隔文件名的不二之选。同时它也是常见的 URL 分隔符，所以理所当然的，减号应该也是用来分隔资源名称的好选择。

请确保文件命名总是以字母开头而不是数字。而以特殊字符开头命名的文件，一般都有特殊的含义与用处（比如 compass[1] 中的下划线就是用来标记跳过直接编译的文件用的）。

资源的字母名称必须全为小写，这是因为在某些对大小写字母敏感的操作系统中，当文件通过工具压缩混淆后，或者人为修改过后，大小写不同而导致引用文件不同的错误，很难被发现。

还有一些情况下，需要对文件增加前后缀或特定的扩展名（比如 .min.js, .min.css），抑或一串前缀（比如 `3fa89b.main.min.css`）。这种情况下，建议使用点分隔符来区分这些在文件名中带有清晰意义的元数据。

**不推荐**

```javascript
MyScript.js
myCamelCaseName.css
i_love_underscores.html
1001-scripts.js
my-file-min.css
```

**推荐**

```javascript
my-script.js
my-camel-case-name.css
i-love-underscores.html
thousand-and-one-scripts.js
my-file.min.css
```

##  协议

不要指定引入资源所带的具体协议。

当引入图片或其他媒体文件，还有样式和脚本时，URLs 所指向的具体路径，不要指定协议部分（http:, https:），除非这两者协议都不可用。

不指定协议使得 URL 从绝对的获取路径转变为相对的，在请求资源协议无法确定时非常好用，而且还能为文件大小节省几个字节。

**不推荐**

```html
<script src="http://cdn.com/foundation.min.js"></script>
```

**推荐**

```html
<script src="//cdn.com/foundation.min.js"></script>
```

**不推荐**

```css
.example {
  background: url(http://static.example.com/images/bg.jpg);
}
```

**推荐**

```css
.example {
  background: url(//static.example.com/images/bg.jpg);
}
```

## 文本缩进

一次缩进两个空格。

html 代码:

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
  <li>
    <a href="#">Test</a>
  </li>
</ul>
```

css 代码:

```css
@media screen and (min-width: 1100px) {
  body {
    font-size: 100%;
  }
}
```

js 代码:

```js
(function(){
  var x = 10;
 
  function y(a, b) {
    return {
      result: (a + b) * x
    }
 
  }
}());
```

这个其实也就是一直在讨论的代码风格,例如分号到底是加还是不加，使用单引号还是双引号等等。

为了约定大家的代码风格，所以在社区中诞生了一些比较规范的代码风格规范：

* [JavaScript Standard Style](https://standardjs.com/)
* [Airbnb JavaScript Style](http://airbnb.io/javascript/)

## 注释

注释是**你自己**与你的小伙伴们了解代码写法和目的的唯一途径。特别是在写一些看似琐碎的无关紧要的代码时，由于记忆点不深刻，注释就变得尤为重要了。

编写自解释代码只是一个**传说**，没有任何代码是可以完全自解释的。而代码注释，则是永远也不嫌多。当然，尽量让自己写的代码一目了然，减少注释也就减少项目体积。

当你写注释时一定要注意：尽量不要写你的代码都干了些什么，而要写你的代码为什么要这么写，背后的考量是什么。当然也可以加入所思考问题或是解决方案的链接地址。

大区块必须注释，小区块适量注释。

例如：

```javascript
//时间戳转换日期时间
inspiry.getDate = function (dt) {
  dt = new Date(dt);
  var year = dt.getFullYear(); 
  var month = dt.getMonth() + 1; 
  var day = dt.getDate();
  var hour = dt.getHours();
  var min = dt.getMinutes();
  var s = dt.getSeconds();
  //修改双位数
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  s = s < 10 ? "0" + s : s;
  //返回转换后的日期（返回格式可根据项目需求更改）
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + s;
}
```

## 代码检查

对于比较宽松自由的编程语言来说，严格遵循编码规范和格式化风格指南就显得极为重要。遵循规范固然很好，但是有自动化流程来确保其执行情况，岂不更佳。Trust is good, control is better.

对于 JavaScript，建议使用 [JSLint](http://www.jslint.com/) 或 [JSHint](http://www.jshint.com/)。当然可能对国人不太友好，我个人经常在用的是[Fundebug](https://www.fundebug.com/)，目前完全免费。


