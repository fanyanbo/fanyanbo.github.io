# 接口定义

### 接口调用说明

所有接口通过ccos对象来调用。

### 参数

参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：

- success：接口调用成功时执行的回调函数。

- fail：接口调用失败时执行的回调函数。

- complete：接口调用完成时执行的回调函数，无论成功或失败都会执行。

以上几个函数返回值都带有一个参数，类型为对象。

其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：

调用成功时："xxx:ok" ，其中xxx为调用的接口名

调用失败时：其值为具体错误信息

<br/>

## 接口汇总

| 模块划分 | 调用方法 | 功能说明 | 权限等级 |
| :-: | :-: | :-: | :-: | :-: |
| 系统接口 | getVideoSource | 获取设备视频源 `tencent | iqiyi` |  |
| 系统接口 | getAppInfo | 获取`app`相关信息 |  |
| 系统接口 | getPushInfo | 获取应用`push`信息 |  |
| 系统接口 | getPropertiesValue | 获取属性|  |
| 系统接口 | addUSBChangedListener | `USB`状态事件监听 |  |
| 系统接口 | removeUSBChangedListener | 移除`USB`状态事件监听 |  |
| 系统接口 | startBlueToothSetting | 启动蓝牙设置 |  |
| 系统接口 | startLocalMedia | 启动本地媒体 |  |
| 系统接口 | startMessageBox | 启动消息盒子 |  |
| 系统接口 | startSourceList | 启动信号源|  |
| 系统接口 | startSystemUpgrade | 启动升级设置 |  |
| 系统接口 | startTVSetting | 启动电视设置 |  |
| 系统接口 | startNetSetting | 启动网络设置页 |  |
| 系统接口 | startCommonNormalAction | 启动传参`action`页面 |  |
| 系统接口 | startHomeTab | 跳转主页指定`tab` |  |
| 系统接口 | startHomeCommonList | 启动主页二级列表页 |  |
| 系统接口 | startByPackName | 包名方式启动 |  |
| 网络接口 | getNetworkStatus | 获取网络连接状态 |  |
| 网络接口 | getNetworkType | 获取网络连接类型 |  |
| 网络接口 | getIpInfo | 获取网络参数 |  |
| 网络接口 | addNetChangedListener | 网络状态变更事件监听|  |
| 网络接口 | removeNetChangedListener | 移除网络状态变更事件监听|  |
| 下载接口 | startOrCreateDownloadTask | 启动apk`没有安装的话，启动下载一个任务` |  |
| 下载接口 | createDownloadTask | 直接下载任务 |  |
| 下载接口 | pauseDownloadTask | 暂停下载接口 |  |
| 下载接口 | resumeDownloadTask | 恢复下载接口|  |
| 下载接口 | deleteDownloadTask | 删除下载接口|  |
| 下载接口 | addAppTaskListener | APK下载事件监听|  |
| 下载接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 多媒体接口 | startCommonWebview | 启动`web`播放器 |  |
| 多媒体接口 | addCommonListener | `web`播放器通用事件监听 |  |
| 多媒体接口 | removeCommonListener | 移除`web`播放器通用事件监听|  |
| 多媒体接口 | playOnlineMovie | 启动播放器|  |
| 设备接口 | pauseDownloadTask | 暂停下载接口 |  |
| 设备接口 | resumeDownloadTask | 恢复下载接口|  |
| 设备接口 | deleteDownloadTask | 删除下载接口|  |
| 设备接口 | addAppTaskListener | APK下载事件监听|  |
| 设备接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 用户接口 | pauseDownloadTask | 暂停下载接口 |  |
| 用户接口 | resumeDownloadTask | 恢复下载接口|  |
| 用户接口 | deleteDownloadTask | 删除下载接口|  |
| 用户接口 | addAppTaskListener | APK下载事件监听|  |
| 用户接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 用户接口 | addAppTaskListener | APK下载事件监听|  |
| 用户接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 日志接口 | addAppTaskListener | APK下载事件监听|  |
| 日志接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 支付接口 | pauseDownloadTask | 暂停下载接口 |  |
| 支付接口 | resumeDownloadTask | 恢复下载接口|  |
| 支付接口 | deleteDownloadTask | 删除下载接口|  |
| 支付接口 | addAppTaskListener | APK下载事件监听|  |
| 支付接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 优惠券接口 | addAppTaskListener | APK下载事件监听|  |
| 优惠券接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 广告接口 | addAppTaskListener | APK下载事件监听|  |
| 广告接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 广告接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 影视接口 | addAppTaskListener | APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 影视接口 | addAppTaskListener | APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 影视接口 | addAppTaskListener | APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 游戏接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 游戏接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 游戏接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 游戏接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 游戏接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 游戏接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 语音接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 语音接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 广播接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 广播接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 广播接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 页面接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 页面接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 页面接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 页面接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 页面接口 | removeAppTaskListener | 移除APK下载事件监听|  |

<br/>

## 详细说明
<br/>
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

# 内置组件

得益于 `VuePress` 的 [组件支持特性](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)，我们可以在 Markdown 文件中直接使用 Vue 组件。

为了更好的展示文档内容，主题内置了几个非常有用的组件，你可以在任一 Markdown 文件中直接使用。

内置组件开箱即用，并且在组件内仍旧可以写 Markdown 语法的内容。

目前主要内置了以下组件：

[[toc]]

</Block>

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
