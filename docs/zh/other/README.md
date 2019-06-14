# 插件

## coocaakeymap

### 介绍

当网页有元素切换的业务需求时，推荐开发者使用该插件: `coocaakeymap.js`。

使用电视端网页与移动端、PC端网页最大的不同就是交互方式，电视端使用遥控器来操作，如何方便让网页元素之间焦点切换变得非常重要，`coocaakeymap.js` 应此需求而生，它可以方便控制网页元素之间的切换。

::: warning 
不推荐开发者使用 `button、input` 等标签作为落焦元素，尽管浏览器内核会自动寻址这些标签元素，但不利于控制。
:::

<br/>

### 安装与环境依赖

直接下载并用`<script>`标签引入，[开发版本链接](https://beta.webapp.skysrt.com/fyb/other/cdn/coocaakeymap-2.1.js)， coocaakeymap会被注册为一个全局变量。


在开始使用`coocaakeymap`之前，请确保先引入`jQuery`：[下载链接](http://jquery.com/download/)。

<br/>

### 快速使用


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>




<Block>

## Block 组件

`Block` 组件主要用于在本页所使用的布局中划分页面结构。每个 `Block` 组件为一个内容分组。方便你能够自由灵活地把控页面结构。

<Example>

使用方式：

```vue
<Block>

Contents...

</Block>
```

</Example>

</Block>

<Block>

## Example 组件

`Example` 组件用于在 `<Block>` 组件中指定右侧深色区域的内容。可以清晰地标识当前部分内容为使用案例。

<Example>

使用方式：

```vue
<Block>

Contents...

<Example>

Some examples...

</Example>

</Block>
```

</Example>

</Block>

<Block>

## CURL 组件

`CURL` 组件是一个非常有用的组件。主要用于在编写 API 时更好的显示 `curl` 命令时使用。

例如下面的内容将会渲染成右侧的形式：

````vue
<CURL>
```bash
curl -X POST http://api.example.com/api/auth/login \
  --data '{
    "username": "my-username",
    "password": "my-password"
  }'
```
</CURL>
````

`CURL` 组件会在组件下方自动生成一个按钮，当点击按钮时，会通过分析 `curl` 命令内的参数，通过 `JS` 发送请求到对应的地址上。并将其请求信息输出到浏览器开发者工具中的控制台上。方便进行快速测试和预览。

<Example>

<CURL>

```bash
curl -X POST http://api.example.com/api/auth/login \
  --data '{
    "username": "my-username",
    "password": "my-password"
  }'
```
</CURL>

</Example>

</Block>

<Block>

## Button 组件

Button 组件可以使用在任何页面的任何地方。你可以用来指向一个链接，或是一些特殊的内容。

支持的参数如下：

| Name | Type | Description | Default |
| :-: | :-: | :-: | :-: | :-: |
| to | String | 链接地址 | `""` |
| size | String | 按钮大小，可选值有 `small | large` | `""` |
| light | Boolean | 是否采用亮色主题 | `false` |

使用下面的代码即可放置一个按钮：

```vue
<Button>默认状态</Button>
```

效果如下：

<Button>默认状态</Button>

<br>
<br>

站内跳转：

```vue
<Button to="/zh/">首页</Button>
```

效果如下：

<Button to="/zh/">首页</Button>

<Example>

更多使用案例：

```vue
<Button light>亮色主题</Button>
```

<Button light>亮色主题</Button>

```vue
<Button to="https://github.com/sqrthree/vuepress-theme-api" light>指定为一个链接</Button>
```

<Button to="https://github.com/sqrthree/vuepress-theme-api" light>指定为一个链接</Button>

```vue
<Button size="small" light>不同的 size</Button>
```

<Button size="small" light>不同的 size</Button>

</Example>

</Block>

<Block>

## Section 组件

`Section` 组件是一种特殊的布局形式，主要用于 [首页](/zh/#%E4%B8%BA-restful-api-%E8%80%8C%E7%94%9F)。具体效果可参考 [首页 | 为 RESTful API 而生](/zh/#%E4%B8%BA-restful-api-%E8%80%8C%E7%94%9F)。

| Name | Type | Description | Default |
| :-: | :-: | :-: | :-: | :-: |
| theme | String | 主题颜色，可选值有 `dark | light` | `"dark"` |
| center | Boolean | 内容是否居中 | `true` |
| enhanceMode | Boolean | 是否启用增强模式 | `true` |

::: tip 增强模式
增强模式是指该 `Section` 组件突破父级元素宽度限制，达到和浏览器窗口宽度一致的效果。
:::

<Example>

首页中使用的配置案例为：

```vue
<Section>

## 为 RESTful API 而生

一个简洁易用的 VuePress 主题。

开箱即用，你需要做的只是安装它，然后写吧。

<Button type="light" to="/getting-started/">开始出发</Button>

</Section>
```

</Example>

</Block>
