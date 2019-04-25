
# JavaScript规范

## 变量声明

总是使用 `var` 来声明变量。如不指定 var，变量将被隐式地声明为全局变量，这将对变量难以控制。如果没有声明，变量处于什么定义域就变得不清（可以是在 Document 或 Window 中，也可以很容易地进入本地定义域）。所以，请总是使用 var 来声明变量。

ES6中有了模块作用域，也就是`let`(声明变量)和`const`(声明常量) 。
如果采用前端工程化开发，使用到了ES6，推荐使用`let`和`const`。

采用严格模式带来的好处是，当你手误输入错误的变量名时，它可以通过报错信息来帮助你定位错误出处。

**不推荐**

```javascript
x = 10;
y = 100;
```

**推荐**

```javascript
var x = 10,
    y = 100;
```

## 全局命名空间污染与 IIFE

总是将代码包裹成一个 IIFE(Immediately-Invoked Function Expression)，用以创建独立隔绝的定义域。这一举措可防止全局命名空间被污染。

IIFE 还可确保你的代码不会轻易被其它全局命名空间里的代码所修改（i.e. 第三方库，window 引用，被覆盖的未定义的关键字等等）。

**不推荐**

```javascript
var x = 10,
    y = 100;
 
console.log(window.x + ' ' + window.y);
```

**推荐**

```javascript
(function(log, w, undefined){
  'use strict';
 
  var x = 10,
      y = 100;
 
  log((w.x === undefined) + ' ' + (w.y === undefined));
 
}(window.console.log, window));
```

## IIFE（立即执行的函数表达式）

无论何时，想要创建一个新的封闭的定义域，那就用 IIFE。它不仅避免了干扰，也使得内存在执行完后立即释放。

所有脚本文件建议都从 IIFE 开始。

立即执行的函数表达式的执行括号应该写在外包括号内。虽然写在内还是写在外都是有效的，但写在内使得整个表达式看起来更像一个整体，因此推荐这么做。

**不推荐**

```javascript
(function(){})();
```

**推荐**

```javascript
(function(){}());
```

so，用下列写法来格式化你的 IIFE 代码：

```javascript
(function(){
  'use strict';
 
  // Code goes here
 
}());
```

如果你想引用全局变量或者是外层 IIFE 的变量，可以通过下列方式传参：

```javascript
(function($, w, d){
  'use strict';
 
  $(function() {
    w.alert(d.querySelectorAll('div').length);
  });
}(jQuery, window, document));
```

## 总是使用带类型判断的比较判断

总是使用 `===` 精确的比较操作符，避免在判断的过程中，由 JavaScript 的强制类型转换所造成的困扰。

如果你使用 `===` 操作符，那比较的双方必须是同一类型为前提的条件下才会有效。

如果你想了解更多关于强制类型转换的信息，你可以读一读 [Dmitry Soshnikov 的这篇文章](http://dmitrysoshnikov.com/notes/note-2-ecmascript-equality-operators/)。

在只使用 `==` 的情况下，JavaScript 所带来的强制类型转换使得判断结果跟踪变得复杂，下面的例子可以看出这样的结果有多怪了：

```javascript
(function(log){
  'use strict';
 
  log('0' == 0); // true
  log('' == false); // true
  log('1' == true); // true
  log(null == undefined); // true
 
  var x = {
    valueOf: function() {
      return 'X';
    }
  };
 
  log(x == 'X');
 
}(window.console.log));
```

## 明智地使用真假判断

当我们在一个 if 条件语句中使用变量或表达式时，会做真假判断。`if(a == true)` 是不同于 `if(a)`的。后者的判断比较特殊，我们称其为真假判断。这种判断会通过特殊的操作将其转换为 true 或 false，下列表达式统统返回 false：`false`, `0`, `undefined`, `null`, `NaN`, `''`（空字符串）.

这种真假判断在我们只求结果而不关心过程的情况下，非常的有帮助。

以下示例展示了真假判断是如何工作的：

```javascript
(function(log){
  'use strict';
 
  function logTruthyFalsy(expr) {
    if(expr) {
      log('truthy');
    } else {
      log('falsy');
    }
  }
 
  logTruthyFalsy(true); // truthy
  logTruthyFalsy(1); // truthy
  logTruthyFalsy({}); // truthy
  logTruthyFalsy([]); // truthy
  logTruthyFalsy('0'); // truthy
 
  logTruthyFalsy(false); // falsy
  logTruthyFalsy(0); // falsy
  logTruthyFalsy(undefined); // falsy
  logTruthyFalsy(null); // falsy
  logTruthyFalsy(NaN); // falsy
  logTruthyFalsy(''); // falsy
 
}(window.console.log));
```

## 变量赋值时的逻辑操作

逻辑操作符 `||` 和 `&&` 也可被用来返回布尔值。如果操作对象为非布尔对象，那每个表达式将会被自左向右地做真假判断。基于此操作，最终总有一个表达式被返回回来。这在变量赋值时，是可以用来简化你的代码的。[参考](http://www.iyouhun.com/post-28.html)

**不推荐**

```javascript
if(!x) {
  if(!y) {
    x = 1;
  } else {
    x = y;
  }
}
```

**推荐**

```javascript
x = x || y || 1;
```

这一小技巧经常用来给方法设定默认的参数。

```javascript
(function(log){
  'use strict';
 
  function multiply(a, b) {
    a = a || 1;
    b = b || 1;
 
    log('Result ' + a * b);
  }
 
  multiply(); // Result 1
  multiply(10); // Result 10
  multiply(3, NaN); // Result 3
  multiply(9, 5); // Result 45
 
}(window.console.log));
```

## 阻止兼容模式###

有时候 IE 会在用户不知道的情况下自作主张切换到兼容模式。要阻止你的站点缺省进入兼容模式，可以在站点的`<head>` 部分加入下列代码：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## 优化 JavaScript 的特征

- 编写可维护的代码
- 单变量模式
- Hoisting：把所有变量声明统一放到函数的起始位置 （在后部声明的变量也会被JS视为在头部定义，由此会产生问题）
- 不要扩充内置原型（虽然给Object(), Function()之类的内置原型增加属性和方法很巧妙，但是会破坏可维护性）
- 不要用隐含的类型转换
- 不要用 eval()
- 用 parseInt() 进行数字转换
- （规范）左大括号的位置
- 构造器首字母大写
- 写注释
- 不要用 void
- 不要用 with 语句
- 不要用 continue 语句
- 尽量不要用位运算
