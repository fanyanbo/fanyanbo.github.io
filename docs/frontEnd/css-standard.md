<CodingAD/>

# CSS规范

## class 命名

- class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，`.btn` 和 `.btn-danger`）。
- 避免过度任意的简写。`.btn` 代表 *button*，但是 `.s` 不能表达任何意思。
- class 名称应当尽可能短，并且意义明确。
- 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
- 基于最近的父 class 或基本（base） class 作为新 class 的前缀。
- 使用 `.js-*` class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。

在为 Sass 和 Less 变量命名时也可以参考上面列出的各项规范。

**不推荐**

```css
.t { ... }
.red { ... }
.header { ... }
```

**推荐**

```css
.tweet { ... }
.important { ... }
.tweet-header { ... }
```

## css代码组织（按块书写css样式）

- 以组件为单位组织代码段。
- 制定一致的注释规范。
- 使用一致的空白符将代码分隔成块，这样利于扫描较大的文档。
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动。

把父类下边所有的子类都写在父类后边，兄弟类同级，类似于一颗大树，分支条理清晰。

**推荐**

```css
/*第一屏*/
.screen01 {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("../images/01-bg.png") no-repeat center bottom;
}
.screen01 .text {
    width: 470px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -235px;
    transform: translate(250px,100px);
    animation: screen01-text 0.75s linear infinite alternate;
}
.screen01 .sofa {
    width: 134px;
    height: 147px;
    position: absolute;
    left: 50%;
    margin-left: -67px;
    transform: translate(-160px,200px);
    animation: screen01-sofa 1s linear infinite alternate;
}
```

## 合理的避免使用ID

一般情况下ID不应该被应用于样式。
ID的样式不能被复用并且每个页面中你只能使用一次ID。
使用ID唯一有效的是确定网页或整个站点中的位置。
尽管如此，你应该始终考虑使用class，而不是id，除非只使用一次。

## CSS选择器中避免标签名及合理的语义类名

当构建选择器时应该使用清晰， 准确和有语义的class(类)名。不要使用标签选择器。 如果你只关心你的class(类)名，而不是你的代码元素，这样会更容易维护。

从分离的角度考虑,在表现层中不应该分配html标记/语义。
它可能是一个有序列表需要被改成一个无序列表，或者一个div将被转换成article。
如果你只使用具有实际意义的class(类)名，
并且不使用元素选择器，那么你只需要改变你的html标记，而不用改动你的CSS。

## 尽可能的精确

很多前端开发人员写选择器链的时候不使用 直接子选择器（注：直接子选择器和后代选择器的区别）。
有时，这可能会导致疼痛的设计问题并且有时候可能会很耗性能。
然而，在任何情况下，这是一个非常不好的做法。
如果你不写很通用的，需要匹配到DOM末端的选择器， 你应该总是考虑直接子选择器。

## 缩写属性

CSS提供了各种缩写属性（如 font 字体）应该尽可能使用，即使在只设置一个值的情况下。

使用缩写属性对于代码效率和可读性是有很有用的。

**不推荐**

```css
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;
```

**推荐**

```css
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

##  0 和 单位

省略“0”值后面的单位。不要在0值后面使用单位，除非有值。

对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，`.5`代替 `0.5`；`-.5px` 代替 `-0.5px` ）。

**不推荐**

```css
padding-bottom: 0px;
margin: 0em;
```

**推荐**

```css
padding-bottom: 0;
margin: 0;
```

## 十六进制表示法

在可能的情况下，使用3个字符的十六进制表示法。
颜色值允许这样表示，
3个字符的十六进制表示法更简短。

始终使用小写的十六进制数字。

**不推荐**

```css
color: #FF33AA;
```

**推荐**

```css
color: #f3a;
```

## 声明结束和属性名结束

为了保证一致性和可扩展性，每个声明应该用分号结束，每个声明换行。

属性名的冒号后使用一个空格。出于一致性的原因，
属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。

**不推荐**

```css
.test {
  display: block; height:100px
}
```

**推荐**

```css
.test {
  display: block;
  height: 100px;
}
```

## 规则分隔

规则之间始终有一个空行（双换行符）分隔。

**推荐**

```css
html {
  background: #fff;
}
 
body {
  margin: auto;
  width: 50%;
}
```

## CSS引号

属性选择器或属性值用双引号（””），而不是单引号（”）括起来。
URI值（url()）不要使用引号。

**不推荐**

```css
@import url('//cdn.com/foundation.css');
 
html {
  font-family: 'open sans', arial, sans-serif;
}
 
body:after {
  content: 'pause';
}
```

**推荐**

```css
@import url(//cdn.com/foundation.css);
 
html {
  font-family: "open sans", arial, sans-serif;
}
 
body:after {
  content: "pause";
}
```

## 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`

class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

## Less 和 Sass 中的嵌套

避免不必要的嵌套。这是因为虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。

## Less 和 Sass 中的操作符

为了提高可读性，在圆括号中的数学计算表达式的数值、变量和操作符之间均添加一个空格。
