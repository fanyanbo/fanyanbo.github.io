---
pageClass: custom-page-class
---

# HTML规范

## 文档类型

推荐使用 HTML5 的文档类型申明： `<!DOCTYPE html>`.

（建议使用 text/html 格式的 HTML。避免使用 XHTML。XHTML 以及它的属性，比如 `application/xhtml+xml` 在浏览器中的应用支持与优化空间都十分有限）。

HTML 中最好不要将无内容元素[1] 的标签闭合，例如：使用 `<br>` 而非 `<br />`.

## HTML验证

一般情况下，建议使用能通过标准规范验证的 HTML 代码，除非在性能优化和控制文件大小上不得不做出让步。

使用诸如 W3C HTML validator 这样的工具来进行检测。

规范化的 HTML 是显现技术要求与局限的显著质量基线，它促进了 HTML 被更好地运用。

## 省略可选标签

HTML5 规范中规定了 HTML 标签是可以省略的。但从可读性来说，在开发的源文件中最好不要这样做，因为省略标签可能会导致一些问题。

省略一些可选的标签确实使得页面大小减少，这很有用，尤其是对于一些大型网站来说。为了达到这一目的，我们可以在开发后期对页面进行压缩处理，在这个环节中这些可选的标签完全就可以省略掉了。

**不推荐**

```html
<title>Test</title>
<article>This is only a test.
```

**推荐**

```html
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
```

## 脚本加载

出于性能考虑，脚本异步加载很关键。一段脚本放置在 `<head>` 内，比如 `<script src="main.js"></script>`，其加载会一直阻塞 DOM 解析，直至它完全地加载和执行完毕。这会造成页面显示的延迟。特别是一些重量级的脚本，对用户体验来说那真是一个巨大的影响。

异步加载脚本可缓解这种性能影响。如果只需兼容 IE10+，可将 HTML5 的 async 属性加至脚本中，它可防止阻塞 DOM 的解析，甚至你可以将脚本引用写在 `<head>` 里也没有影响。

如需兼容老旧的浏览器，实践表明可使用用来动态注入脚本的脚本加载器。你可以考虑 [yepnope](http://yepnopejs.com/) 或 [labjs](http://labjs.com/)。注入脚本的一个问题是：[一直要等到 CSS 对象文档已就绪，它们才开始加载](https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/)（短暂地在 CSS 加载完毕之后），这就对需要及时触发的 JS 造成了一定的延迟，这多多少少也影响了用户体验吧。

终上所述，兼容老旧浏览器(IE9-)时，应该遵循以下最佳实践。

脚本引用写在 body 结束标签之前，并带上 async 属性。这虽然在老旧浏览器中不会异步加载脚本，但它只阻塞了 body 结束标签之前的 DOM 解析，这就大大降低了其阻塞影响。而在现代浏览器中，脚本将在 DOM 解析器发现 body 尾部的 script 标签才进行加载，此时加载属于异步加载，不会阻塞 CSSOM（但其执行仍发生在 CSSOM 之后）。

**所有浏览器中(考虑兼容)，推荐**

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <!-- body goes here -->
 
    <script src="main.js" async></script>
  </body>
</html>
```

**只在现代浏览器中(不考虑兼容)，推荐**

```html
<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <script src="main.js" async></script>
  </head>
  <body>
    <!-- body goes here -->
  </body>
</html>
```

## 语义化

根据元素（有时被错误地称作“标签”）其被创造出来时的初始意义来使用它。打个比方，用 heading 元素来定义头部标题，p 元素来定义文字段落，用 a 元素来定义链接锚点，等等。

有根据有目的地使用 HTML 元素，对于可访问性、代码重用、代码效率来说意义重大。

以下示例列出了一些的语义化 HTML 主要情况：

**不推荐**

```html
<b>My page title</b>
<div class="top-navigation">
  <div class="nav-item"><a href="#home">Home</a></div>
  <div class="nav-item"><a href="#news">News</a></div>
  <div class="nav-item"><a href="#about">About</a></div>
</div>
 
<div class="news-page">
  <div class="page-section news">
    <div class="title">All news articles</div>
    <div class="news-article">
      <h2>Bad article</h2>
      <div class="intro">Introduction sub-title</div>
      <div class="content">This is a very bad example for HTML semantics</div>
      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
      <div class="article-foot-notes">
        This article was created by David <div class="time">2014-01-01 00:00</div>
      </div>
    </div>
 
    <div class="section-footer">
      Related sections: Events, Public holidays
    </div>
  </div>
</div>
 
<div class="page-footer">
  Copyright 2014
</div>
```

**推荐**

```html
<!-- 页面头部 -->
<header>
  <!-- 页面标题 一个页面要求只能有一个h1标签 -->
  <h1>My page title</h1>
</header>
 
<!-- 导航 -->
<nav class="top-navigation">
  <ul>
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#news">News</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
  </ul>
</nav>
 
<!-- 页面主体内容 -->
<main class="news-page" role="main">
  <!-- 页面的一部分应该进入一个section元素。将页面划分为具有语义元素的部分. -->
  <section class="page-section news">
    <!-- 一个节头应该进入一个节元素 -->
    <header>
      <h2 class="title">All news articles</h2>
    </header>
 
    <!-- 文章模块 -->
    <article class="news-article">
      <!-- 文章模块头部 -->
      <header>
        <div class="article-title">Good article</div>
        <small class="intro">Introduction sub-title</small>
      </header>
 
      <!-- 文章模块内容 -->
      <div class="content">
        <p>This is a good example for HTML semantics</p>
      </div>
      <!-- 文章侧边栏 -->
      <aside class="article-side-notes">
        <p>I think I'm more on the side and should not receive the main credits</p>
      </aside>
      <!-- 文章页脚 -->
      <footer class="article-foot-notes">
        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
      </footer>
    </article>
  <!-- 区域页脚 -->
    <footer class="section-footer">
      <p>Related sections: Events, Public holidays</p>
    </footer>
  </section>
</main>
 
<!-- 页面尾部 -->
<footer class="page-footer">
  Copyright 2014
</footer>
```

## 多媒体回溯

对页面上的媒体而言，像图片、视频、canvas 动画等，要确保其有可替代的接入接口。图片文件我们可采用有意义的备选文本（alt），视频和音频文件我们可以为其加上说明文字或字幕。

提供可替代内容对可用性来说十分重要。试想，一位盲人用户如何能知晓一张图片是什么，要是没有 @alt 的话。

（图片的 alt 属性是可不填写内容的，纯装饰性的图片就可用这么做：`alt=""`）。

**不推荐**

```html
<img src="luke-skywalker.jpg">
```

**推荐**

```html
<img src="luke-skywalker.jpg" alt="天行者骑着一匹陌生的马">
```

尽量用 alt 标签去描述图片，设想你需要对于那些只能通过语音或者看不见图片的用户表达图片到底是什么。

**不推荐**

```html
<img src="huge-spaceship-approaching-earth.jpg" alt="头部图片">
```

**推荐**

```html
<img src="huge-spaceship-approaching-earth.jpg" alt="一艘正在接近地球的巨大宇宙飞船">
```

## 关注点分离

理解 web 中如何和为何区分不同的关注点，这很重要。这里的关注点主要指的是：信息（HTML 结构）、外观（CSS）和行为（JavaScript）。为了使它们成为可维护的干净整洁的代码，我们要尽可能的将它们分离开来。

严格地保证结构、表现、行为三者分离，并尽量使三者之间没有太多的交互和联系。

就是说，尽量在文档和模板中只包含结构性的 HTML；而将所有表现代码，移入样式表中；将所有动作行为，移入脚本之中。

在此之外，为使得它们之间的联系尽可能的小，在文档和模板中也尽量少地引入样式和脚本文件。

清晰的分层意味着：

- 不使用超过一到两张样式表（i.e. main.css, vendor.css）
- 不使用超过一到两个脚本（学会用合并脚本）
- 不使用行内样式（`<style>.no-good {}</style>`）
- 不在元素上使用 style 属性（`<hr style="border-top: 5px solid black">`）
- 不使用行内脚本（`<script>alert('no good')</script>`）
- 不使用表象元素（i.e. `<b>`, `<u>`, `<center>`, `<font>`, `<b>`）
- 不使用表象 class 名（i.e. red, left, center）

**不推荐**

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="base.css">
  <link rel="stylesheet" href="grid.css">
  <link rel="stylesheet" href="type.css">
  <link rel="stylesheet" href="modules/teaser.css">
</head>
<body>
  <h1 style="font-size: 3rem"></h1>
  <b>I'm a subtitle and I'm bold!</b>
  <center>Dare you center me!</center>
  <script>
    alert('Just dont...');
  </script>
  <div class="red">I'm important!</div>
</body>
</html>
```

**推荐**

```html
<!DOCTYPE html>
<html>
<head>
  <!-- 将你的样式表统一成一个单一的样式 -->
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <!-- 不要使用行内样式，而是在样式表中指定合理的类并应用样式 -->
  <h1 class="title"></h1>
  <!-- 不要使用表意不明的类 -->
  <div class="sub-title">I'm a subtitle and I'm bold!</div>
  <span class="comment">Dare you center me!</span>
  <div class="important">I'm important!</div>
 
  <!-- 将所有脚本放入文件中，并将其放入一个单独的文件中 -->
  <script async src="main.js"></script>
</body>
</html>
```

## Type 属性

省略样式表与脚本上的 type 属性。鉴于 HTML5 中以上两者默认的 type 值就是 text/css 和 text/javascript，所以 type 属性一般是可以忽略掉的。甚至在老旧版本的浏览器中这么做也是安全可靠的。

**不推荐**

```html
<link rel="stylesheet" href="main.css" type="text/css">
<script src="main.js" type="text/javascript"></script>
```

**推荐**

```html
<link rel="stylesheet" href="main.css">
<script src="main.js"></script>
```

### 微格式在 SEO 和可用性上的运用

如果 SEO 和可用性环境条件允许的话，建议考虑采用微格式。微格式是通过在元素标签上申明一系列特定数据来达成特定语义的方法。

谷歌、微软和雅虎对如何使用这些额外的数据一定程度上的达成一致，如果正确的使用，这将给搜索引擎优化带来巨大的好处。

你可以访问 [schema.org](http://schema.org/) 获得更多内容细节。

看一个电影网站的简单例子：

**不带微格式**

```html
<div>
 <h1>Avatar</h1>
 <span>Director: James Cameron (born August 16, 1954)</span>
 <span>Science fiction</span>
 <a href="../movies/avatar-theatrical-trailer.html">Trailer</a>
</div>
```

**带有微格式**

```html
<div itemscope itemtype ="http://schema.org/Movie">
  <h1 itemprop="name">Avatar</h1>
  <div itemprop="director" itemscope itemtype="http://schema.org/Person">
  Director: <span itemprop="name">James Cameron</span> (born <span itemprop="birthDate">August 16, 1954)</span>
  </div>
  <span itemprop="genre">Science fiction</span>
  <a href="../movies/avatar-theatrical-trailer.html" itemprop="trailer">Trailer</a>
</div>
```

## ID 和锚点

通常一个比较好的做法是将页面内所有的头部标题元素都加上 ID. 这样做，页面 URL 的 hash 中带上对应的 ID 名称，即形成描点，方便跳转至对应元素所处位置。

## 格式化规则

在每一个块状元素，列表元素和表格元素后，加上一新空白行，并对其子孙元素进行缩进。内联元素写在一行内，块状元素还有列表和表格要另起一行。

（如果由于换行的空格引发了不可预计的问题，那将所有元素并入一行也是可以接受的，格式警告总好过错误警告）。

**推荐**

```html
<blockquote>
  <p><em>Space</em>, the final frontier.</p>
</blockquote>
 
<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>
 
<table>
  <thead>
    <tr>
      <th scope="col">Income</th>
      <th scope="col">Taxes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$ 5.00</td>
      <td>$ 4.50</td>
    </tr>
  </tbody>
</table>
```

## HTML 引号

使用双引号(“”) 而不是单引号(”) 。
