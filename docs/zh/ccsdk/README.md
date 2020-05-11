# API 定义

### API 调用说明

所有 API 通过`ccApp`对象来调用，请注意某些 API 需要在`deviceready`后才能调用成功。

### 参数

参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：

- `success`：接口调用成功时执行的回调函数。

- `fail`：接口调用失败时执行的回调函数。

- `complete`：接口调用完成时执行的回调函数，无论成功或失败都会执行。

以上`success`和`fail`回调函数都带有一个参数，类型为对象。

其中除了每个接口本身返回的数据之外，还有一个通用属性`errMsg`，其值格式如下：

调用成功时：`"xxx:ok"` ，其中`xxx`为调用的接口名

调用失败时：其值为具体错误信息

</br>

### 网页页面和按键监听事件

基于酷开系统的网页开发者需重点关注以下API，它用来注册监听网页页面事件和遥控器按键事件，是重要的代码逻辑处理节点，但并非强制使用。

<a name = "15_1" href="#_15_1"><font size=5>ccApp.bindEvent(Object obj)</font></a> 

__参数说明：__ <br/>
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| eventName | `String` |  | 是 | 事件名称，具体见下表 |
| onReceive | `Function` |  | 是 | 事件回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

| 事件名称 | 事件说明 | 权限等级 |
| :-: | :-: | :-: | :-: |
| deviceready | 等待酷开系统设备就绪，某些接口需在deviceready状态后才能调用 | 低 |
| ccready | 等待酷开系统设备就绪和设备属性就绪 | 低 |
| resume | 同Android Activity的resume生命周期回调，网页回到前台时触发该事件 | 低 |
| pause | 同Android Activity的pause生命周期回调，网页移到后台时触发该事件 | 低 |
| backbutton | 监听返回键弹起时触发 | 高 |
| backbuttondown | 监听返回键按下时触发 | 高 |
| homebutton | 监听按主页键弹起时触发 | 高 |
| menubutton | 监听按菜单键弹起时触发 | 高 |

::: tip
__`1.监听deviceready事件还可以用：ccApp.deviceReady(callback)，等同于ccApp.bindEvent('deviceready', callback)`__

__`2.当监听遥控器主页、返回等按键时，酷开系统会将键值处理交给网页，请开发者务必考虑好网页退出逻辑，否则网页无法退出，这将严重影响用户使用体验甚至引发投诉。退出网页请参见ccApp.exitPage()接口`__
:::

<br/>
<br/>



## API 汇总

| 模块划分 | 调用方法 | 功能说明 | deviceready后调用| 权限等级 |
| :- | :- | :- | :-: | :-: |
| 系统接口 | <a href="#0_2" name="_0_2"> getAppInfo </a> | 获取app相关信息，系统应用信息可直接读取ccApp属性获取 | 否 | 低
| 系统接口 | <a href="#0_3" name="_0_3">getProperties </a> | 获取系统属性| 否 | 低
| 系统接口 | <a href="#0_4" name="_0_4">addStatusChangedListener</a> | 添加`USB|网络|用户登录|支付|下载`等状态变化监听 | 否 | 低
| 系统接口 | <a href="#0_5" name="_0_5">removeStatusChangedListener</a> | 移除状态变化监听 | 否 | 低
| 系统接口 | <a href="#0_6" name="_0_6">startBlueToothSetting</a>  | 启动蓝牙设置 | 否 | 低
| 系统接口 | <a href="#0_7" name="_0_7">startLocalMedia</a>  | 启动本地媒体 | 否 | 低
| 系统接口 | <a href="#0_8" name="_0_8">startSystemUpgrade</a>  | 启动升级设置 | 否 | 低
| 系统接口 | <a href="#0_9" name="_0_9">startTVSetting</a>  | 启动电视设置 | 否 | 低
| 系统接口 | <a href="#0_10" name="_0_10">startNetSetting</a>  | 启动网络设置 | 否 | 低
| 系统接口 | <a href="#0_11" name="_0_11">startAppX</a> | 启动酷开小程序页 | 否 | 低
| 系统接口 | <a href="#0_12" name="_0_12">startToast</a> | 启动显示弹窗 | 否 | 低
| 系统接口 | <a href="#0_13" name="_0_13">startCommonPage</a> | 启动任意android页面 | 否 | 低
| 网络接口 | <a href="#1_0" name="_1_0">getNetworkInfo </a>  | 获取网络相关信息 | 是 | 低
| 网络接口 | <a href="#1_1" name="_1_1">addNetChangedListener </a> | 添加网络状态变化事件监听|  否| 低
| 网络接口 | <a href="#1_2" name="_1_2">removeNetChangedListener </a> | 移除网络状态变化事件监听| 否 | 低
| 下载接口 | <a href="#2_0" name="_2_0">startOrCreateDownloadTask</a> | 已安装则打开应用，没有安装则创建下载任务 | 否 | 高
| 下载接口 | <a href="#2_1" name="_2_1">createDownloadTask</a> | 创建下载任务 | 否 | 高
| 下载接口 | <a href="#2_2" name="_2_2">pauseDownloadTask</a> | 暂停下载 | 否 | 高
| 下载接口 | <a href="#2_3" name="_2_3">resumeDownloadTask</a> | 恢复下载| 否 | 高
| 下载接口 | <a href="#2_4" name="_2_4">deleteDownloadTask</a> | 删除下载| 否 | 高
| 下载接口 | <a href="#2_5" name="_2_5">addDownloadChangedListener</a> | 添加下载事件监听| 否 | 低
| 下载接口 | <a href="#2_6" name="_2_6">removeDownloadChangedListener</a> | 移除下载事件监听| 否 | 低
| 多媒体接口 | <a href="#3_0" name="_3_0">startVideoPlayer </a>| 启动播放器 | 否 | 低
| 多媒体接口 | <a href="#3_1" name="_3_1">addVideoPlayerListener</a> | 添加播放器事件监听 | 否 | 低
| 多媒体接口 | <a href="#3_2" name="_3_2">removeVideoPlayerListener</a> | 移除播放器事件监听| 否 | 低
| 设备接口 | <a href="#4_0" name="_4_0">getMemInfo </a> | 获取存储空间信息 | 否 | 低
| 设备接口 | <a href="#4_1" name="_4_1">getDeviceInfo </a> | 获取设备信息| 是 | 低
| 设备接口 | <a href="#4_2" name="_4_2">getDeviceLocation </a> | 获取设备位置| 是 | 低
| 设备接口 | <a href="#4_3" name="_4_3"> getVideoSource </a> | 获取设备视频源 | 是 | 低
| 用户接口 | <a href="#5_0" name="_5_0">getUserInfo </a>  | 获取用户信息 | 是 | 高
| 用户接口 | <a href="#5_1" name="_5_1">getUserAccessToken </a>  | 获取用户token| 是 | 高
| 用户接口 | <a href="#5_2" name="_5_2">setLogout </a>  | 退出用户登录| 否 | 低
| 用户接口 | <a href="#5_3" name="_5_3">startLogin </a>  | 启动用户登录页| 否 | 低
| 用户接口 | <a href="#5_4" name="_5_4">getLoginStatus </a>  | 获取用户登录状态| 是 | 低
| 用户接口 | <a href="#5_5" name="_5_5">addLoginChangedListener </a>  | 添加用户登录状态变化事件监听| 否 | 低
| 用户接口 | <a href="#5_6" name="_5_6">removeLoginChangedListener </a>  | 移除用户登录状态变化事件监听| 否 | 低
| 日志接口 | <a href="#6_0" name="_6_0">logDataCollection </a> | 日志提交酷开大数据 | 否 | 高
| 日志接口 | <a href="#6_1" name="_6_1">sendMessageFromJS </a> | 发送消息到Android App(需集成SystemWebViewSDK) | 否 | 高
| 支付接口 | <a href="#7_0" name="_7_0">startPay </a> | 启动支付页面 | 是 | 高
| 支付接口 | <a href="#7_1" name="_7_1">addPayChangedListener </a> | 添加支付状态变化事件监听| 否 | 低
| 支付接口 | <a href="#7_2" name="_7_2">removePayChangedListener </a> | 移除支付状态变化事件监听| 否 | 低
| 广告接口 | <a href="#8_0" name="_8_0">getAdData </a>  | 获取广告数据【已废弃】 | 是 | 高
| 广告接口 | <a href="#8_1" name="_8_1">adDataCollection </a>  | 采集广告监测数据【已废弃】 | 是 | 高
| 广告接口 | <a href="#8_2" name="_8_2">thirdAdDataCollection </a>  | 采集第三方广告监测数据【已废弃】 | 是 | 高
| 广告接口 | <a href="#8_3" name="_8_3">getAdDataV2 </a>  | 获取广告数据 | 是 | 高
| 广告接口 | <a href="#8_4" name="_8_4">adDataCollectionV2 </a>  | 提交广告数据 | 是 | 高
| 广告接口 | <a href="#8_5" name="_8_5">addVoiceChangedListener </a>  | 添加语音广告监听 | 是 | 高
| 主页接口 | <a href="#9_0" name="_9_0">startHomeTab</a> | 跳转主页tab页 | 否 | 低
| 主页接口 | <a href="#9_1" name="_9_1">startHomeSecondList</a> | 跳转主页二级列表页 | 否 | 低
| 主页接口 | <a href="#9_2" name="_9_2">startHomeSpecial</a> | 跳转主页专题页 | 否 | 低
| 影视接口 | <a href="#10_0" name="_10_0">startMovieDetail</a> | 启动影视详情页| 否 | 低
| 影视接口 | <a href="#10_1" name="_10_1">startMovieCarousel</a> | 启动影视轮播页| 否 | 低
| 影视接口 | <a href="#10_2" name="_10_2">startMovieMemberCenter</a> | 启动影视VIP购买页| 否 | 低
| 商城接口 | <a href="#11_0" name="_11_0">startMallDetail</a> | 启动商品详情页| 否 | 低
| 商城接口 | <a href="#11_1" name="_11_1">startMallOrderDetail</a> | 启动商品订单详情页| 否 | 低
| 应用接口 | <a href="#12_0" name="_12_0">startMyApps</a> | 启动我的应用页| 否 | 低
| 应用接口 | <a href="#12_1" name="_12_1">startAppStoreDetail</a> | 启动应用详情页| 否 | 低
| 语音接口 | <a href="#13_0" name="_13_0">addVoiceChangedListener</a>  | 添加语音事件监听| 否 | 低
| 语音接口 | <a href="#13_1" name="_13_1">removeVoiceChangedListener</a>  | 移除语音事件监听| 否 | 低
| 广播接口 | <a href="#14_0" name="_14_0">addGlobalBroadcastListener</a> | 添加android全局广播监听| 否 | 低
| 广播接口 | <a href="#14_1" name="_14_1">removeGlobalBroadcastListener</a> | 移除android全局广播| 否 | 低
| 广播接口 | <a href="#14_2" name="_14_2">sendGlobalBroadcast</a> | 发送android全局广播| 否 | 高
| 框架接口 | <a href="#15_0" name="_15_0">deviceReady</a> | 监听设备是否准备好，有些接口需要在ready后调用 | 否 | 低 
| 框架接口 | <a href="#15_6" name="_15_6">ccReady</a> | 监听ccApp设备属性是否准备好，监听该事件可以不用监听deviceReady | 否 | 低 
| 框架接口 | <a href="#15_1" name="_15_1">bindEvent</a> | 绑定监听页面和遥控器按键相关事件| 否 | 低
| 框架接口 | <a href="#15_2" name="_15_2">exitPage</a> | 退出页面| 否 | 低
| 框架接口 | <a href="#15_3" name="_15_3">setNativeToJsBridgeMode</a> | 设置酷开系统向网页发送消息的模式| 否 | 高
| 框架接口 | <a href="#15_4" name="_15_4">checkJsApi</a> | 判断当前客户端版本是否支持指定JS接口 | 否 | 低
| 框架接口 | <a href="#15_5" name="_15_5">getPerformance</a> | 获取页面启动节点时间戳 | 否 | 低
| 框架接口 | <a href="#15_6" name="_15_6">setButtonListenerFlag</a> | 动态设置键值监听开关 | 否 | 低

<br/>

### ccApp对象的属性
| 属性名称 | 功能说明 | ccReady后调用| 权限等级 |
| :- | :- | :- | :-: |
| <a href="#">ccDebug</a> | 设置/获取PC模式下设备/用户/登录/应用版本等信息| 否 | 低
| <a href="#">ccBrowser</a> | 包含浏览器版本信息| 否 | 低
| <a href="#">ccMovieplatform</a> | 包含主页影视版本信息 | 否 | 低
| <a href="#">ccUser</a> | 包含用户版本信息 | 否 | 低
| <a href="#">ccMall</a> | 包含商城版本信息 | 否 | 低
| <a href="#">ccVersion</a> | 酷开系统版本 | 是 | 低
| <a href="#">ccModel</a> | 机型 | 是 | 低
| <a href="#">ccChip</a> | 机芯 | 是 | 低
| <a href="#">ccMAC</a> | mac | 是 | 低
| <a href="#">ccPanel</a> | 尺寸 | 是 | 低
| <a href="#">ccSID</a> | sid | 是 | 低
| <a href="#">ccBarcode</a> | barcode | 是 | 低
| <a href="#">ccActiveId</a> | 激活id | 是 | 低
| <a href="#">ccAndroidSDK</a> | Android 版本 | 是 | 低
| <a href="#">ccBrand</a> | 品牌 | 是 | 低
| <a href="#">ccTVName</a> | 电视名称 | 是 | 低

::: warning
有些属性须在ccReady接口onReceive回调后使用，以确保相关属性已被赋值
ccReady可以取代deviceReady，但deviceReady触发得更早一些
:::

<br/>

## 详细说明

### 系统接口

<a name = "0_2" href="#_0_2"><font size=5>ccApp.getAppInfo(Object obj)</font></a>

__获取app信息【系统应用信息可直接读取ccApp属性获取】__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| pkgList | `Array` |  | 是 | Android应用包名作为数组项 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.getAppInfo({
    pkgList: ["com.tianci.user","com.tianci.movieplatform"],
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getAppInfo:ok","data":"{\"com.tianci.user\":{\"status\":\"0\",
       \"versionName\":\"4.12.5\",\"versionCode\":4120005},\"com.tianci.movieplatform\":
       {\"status\":\"0\",\"versionName\":\"7.8.24\",\"versionCode\":7080024}}"}
      */
    }
  })
```
<br/>

<a name = "0_3" href="#_0_3"><font size=5>ccApp.getProperties(Object obj)</font></a>

__获取属性值__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| keyList | `Array` |  | 是 | 属性名作为数组项 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  var params = ["ro.build.skymodel", "ro.build.skytype", "ro.build.skymid", "ro.build.skyversion"]
  ccApp.getProperties({
    keyList: params,
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"ro.build.skymodel":"9S52","ro.build.skytype":"Q4A","ro.build.skymid":"MST-6A838",
      "ro.build.skyversion":"018.002.260","errMsg":"getProperties:ok"}
      */
    }
  })
```
<br/>

<a name = "0_4" href="#_0_4"><font size=5>ccApp.addStatusChangedListener(Object obj)</font></a>

__添加USB|网络|登录|支付|下载等状态变化监听【待测】__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| user | `String` | `'false'` | 否 | 监听用户登录状态变化 |
| pay | `String` | `'false'` | 否 | 监听支付状态变化|
| usb | `String` | `'false'` | 否 | 监听对接usb状态变化|
| download | `String` | `'false'` | 否 | 监听应用下载状态变化|
| net | `String` | `'false'` | 否 | 监听网络状态变化|
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.addStatusChangedListener({
    net: 'true',
    usb: 'true',
    user: 'true',
    pay: 'true',
    download: 'true',
    onReceive: function(res) {
      console.log(JSON.stringify(res))
    },
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "0_5" href="#_0_5"><font size=5>ccApp.removeStatusChangedListener(Object obj)</font></a>

__移除状态变化监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| user | `String` | `'false'` | 否 | 移除用户登录状态监听 |
| pay | `String` | `'false'` | 否 | 移除支付状态监听|
| usb | `String` | `'false'` | 否 | 移除外接usb状态监听|
| download | `String` | `'false'` | 否 | 移除应用下载状态监听|
| net | `String` | `'false'` | 否 | 移除网络状态监听|
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.removeStatusChangedListener({
    usb: 'true',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "0_6" href="#_0_6"><font size=5>ccApp.startBlueToothSetting(Object obj)</font></a>

__启动蓝牙设置__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startBlueToothSetting({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"startBlueToothSetting:ok"}
      */
    }
  })
```

<br/>
<a name = "0_7" href="#_0_7"><font size=5>ccApp.startLocalMedia(Object obj)</font></a>

__启动本地媒体__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startLocalMedia({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"startLocalMedia:ok"}
      */
    }
  })
```
<br/>
<a name = "0_8" href="#_0_8"><font size=5>ccApp.startSystemUpgrade(Object obj)</font></a>

__启动升级设置__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startSystemUpgrade({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"startSystemUpgrade:ok"}
      */
    }
  })
```
<br/>
<a name = "0_9" href="#_0_9"><font size=5>ccApp.startTVSetting(Object obj)</font></a>

__启动电视设置__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startTVSetting({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"startTVSetting:ok"}
      */
    }
  })
```
<br/>
<a name = "0_10" href="#_0_10"><font size=5>ccApp.startNetSetting(Object obj)</font></a>

__启动网络设置__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startNetSetting({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"startNetSetting:ok"}
      */
    }
  })
```
<br/>

<a name = "0_11" href="#_0_11"><font size=5>ccApp.startAppX(Object obj)</font></a>

__启动酷开小程序页__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| url | `String` |  | 是 | 小程序地址 |
| type | `String` | `'startService'` | 否 | `'startActivity'|'startService'`|
| preload | `Boolean` | `false` | 否 | 是否预加载 `false|true`|
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
	ccApp.startAppX({
		preload: true,
		url: 'appx://com.coocaa.appx.member.guide',
		success: function(res) {
			console.log(JSON.stringify(res))
		}
	})
```
<br/>

<a name = "0_12" href="#_0_12"><font size=5>ccApp.startToast(Object obj)</font></a>

__启动显示弹窗，暂只支持显示整张图片__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| url | `String` | | 是 | 图片地址|
| top | `String` | `'598'` | 否 | 距离顶部距离 |
| left | `String` | `'800'` | 否 | 距左边距离|
| width | `String` | `'725'` | 否 | 弹窗宽度|
| heigth | `String` | `'180'` | 否 | 弹窗高度|
| time | `String` | `'5000'` | 否 | 弹窗显示时长|
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startToast({
    top: '598',
    left: '485',
    width: '724',
    height: '110',
    time: '5000',
    url: 'http://172.20.155.51/uploads/20190521/20190521171059879774.webp',success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "0_13" href="#_0_13"><font size=5>ccApp.startCommonPage(Object obj)</font></a>

__启动Android页面__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | `String` |  | 是 | `action|package|class|uri`|
| actionName | `String` |  | 是 | type为action时必填 |
| packageName | `String` |  | 是 | type为package时必填 |
| className | `String` |  | 是 | type为class时必填 |
| uri | `String` |  | 是 | type为uri时必填 |
| params | `Array` |  | 否 | 对象数组，如[{'key1': 'value1'}, {'key2': 'value2'}] |
| extra | `String` |  | 否 | 额外参数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startCommonPage({
		type: 'action',
		actionName: 'android.settings.ADD_ACCOUNT_SETTINGS',
		params: [{ 'needFinish': true }],
		success: function(res) {
			console.log(res)
		}
	})
```
<br/>

<a name = "1_0" href="#_1_0"><font size=5>ccApp.getNetworkInfo(Object obj)</font></a>

### 网络接口

__获取网络信息，包括连接状态，连接类型和ip等__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | `String` |  | 否 | `netType|netStatus|netInfo` |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

success回调函数参数 `Object res` 部分属性说明
| 属性 | 类型 | 说明 |
| :-: | :-: | :-: |
| netType | `Object` | key: `isnetworking` value: `'true'|'false'` |
| netStatus | `Object` | key: `nettype` value: `ETHERNET|WIFI` |
| netInfo | `Object` | 包含`ip,mac,gateway,netmask,dns0,dns1` |

示例代码
```js
  ccApp.getNetworkInfo({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getNetworkInfo:ok","netStatus":{"isnetworking":"true"},"netType":
      {"nettype":"ETHERNET"},"netInfo":{"dns0":"172.20.135.1","dns1":"172.20.135.2",
      "gateway":"172.20.130.1","ip":"172.20.130.56","mac":"00:1a:9a:00:00:00","netmask":"255.255.255.0"}}
      */
    }
  })

  var params = 'netStatus'
  ccApp.getNetworkInfo({
    type: params,
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getNetworkInfo:ok","netStatus":{"isnetworking":"true"}}
      */
    }
  })
```
<br/>

<a name = "1_1" href="#_1_1"><font size=5>ccApp.addNetChangedListener(Object obj)</font></a>

__添加网络状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.addNetChangedListener({
    onReceive: function(res) {
      console.log(JSON.stringify(res))
    },
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "1_2" href="#_1_2"><font size=5>ccApp.removeNetChangedListener(Object obj)</font></a>

__移除网络状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.removeNetChangedListener({
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 下载接口

<a name = "2_0" href="#_2_0"><font size=5>ccApp.startOrCreateDownloadTask(Object obj)</font></a>

__已安装应用则打开应用，没有安装则创建下载任务__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| downloadUrl | `String` | | 是 | 下载地址 |
| iconUrl | `String` | | 是 | icon地址 |
| packageName | `String` | | 是 | 应用包名 |
| md5 | `String` | | 是 | md5值 |
| appId | `String` | | 是 | 应用id |
| title | `String` | | 是 | 应用名称 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startOrCreateDownloadTask({
		downloadUrl: 'http://apk.sky.fs.skysrt.com/uploads/20180704/20180704153037704669.apk',
		iconUrl: 'http://img.sky.fs.skysrt.com/uploads/20170930/20170930110626036777.png',
		packageName: 'com.dangbei.health.fitness',
		md5: 'XXXXXXXXXXXXXXXX',
		appId: '26371',
		title: '当贝健身',
		success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"startOrCreateDownloadTask:ok","res":{"taskid":97,"status":"ON_DEFAULT",
      "name":"当贝健身","url":"http://apk.sky.fs.skysrt.com/uploads/20180704/
      20180704153037704669.apk","progress":0,"createtime":1576053055339,"code":0}}
      */
		}
	})
```
<br/>

<a name = "2_1" href="#_2_1"><font size=5>ccApp.createDownloadTask(Object obj)</font></a>

__创建下载任务__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| downloadUrl | `String` | | 是 | 下载地址 |
| iconUrl | `String` | | 是 | icon地址 |
| packageName | `String` | | 是 | 应用包名 |
| md5 | `String` | | 是 | md5值 |
| appId | `String` | | 是 | 应用id |
| title | `String` | | 是 | 应用名称 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.createDownloadTask({
		downloadUrl: 'http://apk.sky.fs.skysrt.com/uploads/20180704/20180704153037704669.apk',
		iconUrl: 'http://img.sky.fs.skysrt.com/uploads/20170930/20170930110626036777.png',
		packageName: 'com.dangbei.health.fitness',
		md5: 'XXXXXXXXXXXXXXXX',
		appId: '26371',
		title: '当贝健身',
		success: function(res) {
      console.log(JSON.stringify(res))
      console.log('taskId='+res.res.taskid)
		}
	})
```
<br/>

<a name = "2_2" href="#_2_2"><font size=5>ccApp.pauseDownloadTask(Object obj)</font></a>

__暂停下载__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| taskId | `Number` | | 是 | 任务id, 创建下载任务返回结果中可获取 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.pauseDownloadTask({
    taskId: 97,
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "2_3" href="#_2_3"><font size=5>ccApp.resumeDownloadTask(Object obj)</font></a>

__恢复下载__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| taskId | `Number` | | 是 | 任务id, 创建下载任务返回结果中可获取 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.resumeDownloadTask({
    taskId: 97,
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "2_4" href="#_2_4"><font size=5>ccApp.deleteDownloadTask(Object obj)</font></a>

__删除下载__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| taskId | `Number` | | 是 | 任务id, 创建下载任务返回结果中可获取 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.deleteDownloadTask({
    taskId: 97,
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "2_5" href="#_2_5"><font size=5>ccApp.addDownloadChangedListener(Object obj)</font></a>

__添加下载状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.addDownloadChangedListener({
    onReceive: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"isTrusted":false,"taskid":95,"status":"ON_STARTING","name":"当贝健身",
      "url":"http://apk.sky.fs.skysrt.com/uploads/20180704/20180704153037704669.apk",
      "progress":0,"createtime":1576052333905,"code":0}
      */
    },
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "2_6" href="#_2_6"><font size=5>ccApp.removeDownloadChangedListener(Object obj)</font></a>

__移除下载状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.removeDownloadChangedListener({
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 多媒体接口

<a name = "3_0" href="#_3_0"><font size=5>ccApp.startVideoPlayer(Object obj)</font></a>

__启动播放器【待测】__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| channel | `String` |  | 是 | `browser|service|movie`,分别表示浏览器内置播放器，影视播放器, 影视播放器（旧，不推荐）|
| actionName | `String` |  | 是| channel为service时填写 |
| params | `Array` | `[{}]` | 是 | channel为service时填写，例`[{'key1': 'value1'}]` |
| title | `String` |  | 否 | channel为movie时填写 |
| url | `String` |  | 是 | channel为movie时填写 |
| needParse | `String` | `'false'` | 否 | channel为movie时填写`'true'|'false'` |
| id | `String` |  | 否 | channel为browser时填写 |
| uri | `String` |  | 是 | channel为browser时填写 |
| tips | `String` |  | 否 | channel为browser时填写 |
| width | `String` | `'1920'` | 否 | channel为browser时填写 |
| height | `String` | `'1080'` | 否 | channel为browser时填写|
| url | `String` |  | 否 | channel为browser时填写 |
| name | `String` |  | 否 | channel为browser时填写 |
| type | `String` |  | 否 | channel为browser时填写 |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码
```js
  ccApp.startVideoPlayer({
    channel: 'service',
    actionName: 'coocaa.intent.player.live',
    params: [{'url_type':'iqiyi'},{'liveType': '2'}],
    success: function(result) {
      console.log(JSON.stringify(result))
    }
  })

  ccApp.startVideoPlayer({
    channel: 'browser',
    uri: 'http://gm-vd.coocaa.com/edb2878fvodtransgzp1253922718/
    771febd05285890783126907326/v.f240.m3u8?t=6198a5c6&exper=0&
    sign=08725d427cccb9d2d3214b085fa025e5',
    tips: '看过的节目去哪里找', 
    height: '1080', 
    width: '1920', 
    name: '新手学习', 
    type: '', 
    url: '',
    needParse: 'true',
    success: function(result) {
      console.log(JSON.stringify(result))
    }
  })
```
<br/>

<a name = "3_1" href="#_3_1"><font size=5>ccApp.addVideoPlayerListener(Object obj)</font></a>

__监听播放器事件【暂只支持channel为browser的播放监听】__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取监听到的数据 |

示例代码
```js
  ccApp.addVideoPlayerListener({
    onReceive: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"isTrusted":false,"web_player_source_uri":"http://gm-vd.coocaa.com/
      edb2878fvodtransgzp1253922718/771febd05285890783126907326/v.f240.m3u8?
      t=6198a5c6&exper=0&sign=08725d427cccb9d2d3214b085fa025e5",
      "web_player_extra":"","web_player_source_id":"",
      "web_player_event":"on_start","cc_type":"common"}
      */
    }
  })
```
<br/>

<a name = "3_2" href="#_3_2"><font size=5>ccApp.removeVideoPlayerListener(Object obj)</font></a>

__移除播放器事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | `Function` |  | 否 | 接口回调函数 |

示例代码
```js
  ccApp.removeVideoPlayerListener({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"removeVideoPlayerListener:ok"}
      */
    }
  })
```
<br/>

### 设备接口

<a name = "4_0" href="#_4_0"><font size=5>ccApp.getMemInfo(Object obj)</font></a>

__获取设备存储空间信息，包括磁盘和内存信息__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.getMemInfo({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getMemInfo:ok","data":{"totalMem":1940705280,"leftMem":228605952,
       "totalSpace":12557602816,"freeSpace":8580689920}}
      */
    }
  })
```
<br/>

<a name = "4_1" href="#_4_1"><font size=5>ccApp.getDeiveInfo(Object obj)</font></a>

__获取设备信息__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.getDeviceInfo({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getDeiveInfo:ok","data":{"panel":"50","version":"6.20.180226",
      "model":"Q4A","chipid":"MST-6A838","mac":"001a9a000000","chip":"9S52",
      "androidsdk":23,"devid":"83ec547b4ca46a394719bdae81d912e4","activeid":"23320005",
      "emmcid":"90014a484147346132a559776981c400","brand":"Skyworth",
      "barcode":"50Q4AXXXXX-XXXXXXX-XXXXXXX","sid":"dbcc7f85-19b3-4168-acdb-2181f481ce05",
      "tvName":"客厅电视"}}
      */
    }
  })
```
<br/>

<a name = "4_2" href="#_4_2"><font size=5>ccApp.getDeviceLocation(Object obj)</font></a>

__获取设备位置__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getDeviceLocation({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getDeviceLocation:ok","data":{"location":"广东省,深圳市,"}}
      */
    }
  })
```
<br/>

<a name = "4_3" href="#_4_3"><font size=5>ccApp.getVideoSource(Object obj)</font></a>

__获取本机视频源__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `function` |  | 否 | `fail|complete`接口回调函数 |
| 公共属性 | `function` |  | 是 | `success`接口回调函数必填 |

success回调函数参数 `Object res`
| 属性 | 类型 | 说明 |
| :-: | :-: | :-: |
| source | `String` | `tencent【注：腾讯源】|yinhe【注：奇艺源】|youku【注：优酷源】|voole【注：优朋源】` |

示例代码
```js
  ccApp.getVideoSource({
    success(res) {
      console.log(res.errMsg) //调用成功时："xxx:ok" ，其中xxx为调用的接口名
      console.log(res.source)
    }
  })
```
<br/>

### 用户接口

<a name = "5_0" href="#_5_0"><font size=5>ccApp.getUserInfo(Object obj)</font></a>

__获取用户信息__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| sync | `Boolean` | `false` | 否 | 是否同步获取，浏览器版本要求：v2.0.73 |
| 公共属性 | `function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.getUserInfo({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getUserInfo:ok","data":{信息太多，省略}}
      */
    }
  })
```
<br/>

<a name = "5_1" href="#_5_1"><font size=5>ccApp.getUserAccessToken(Object obj)</font></a>

__获取用户token__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| sync | `Boolean` | `false` | 否 | 是否同步获取，浏览器版本要求：v2.0.73 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getUserAccessToken({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getUserAccessToken:ok","data":
       {"accesstoken":"2.0f3674599cca4c9d966842784763adb2"}}
      */
    }
  })
```

<br/>

<a name = "5_2" href="#_5_2"><font size=5>ccApp.setLogout(Object obj)</font></a>

__退出用户登录__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.setUserLogout({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"setUserLogout:ok"}
      */
    }
  })
```
<br/>

<a name = "5_3" href="#_5_3"><font size=5>ccApp.startLogin(Object obj)</font></a>

__启动用户登录页面__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| source | `String` | `other` | 否 | `tencent|other,other包括yinhe,youku等`|
| tencentType | `String` |  | 是 | 腾讯源登录方式，source为tencent时使用：`qq|weixin|both` |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startLogin({
    source: 'tencent',
    tencentType: 'weixin',
    success(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "5_4" href="#_5_4"><font size=5>ccApp.getLoginStatus(Object obj)</font></a>

__获取用户登录状态__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| source | `String` | `other` | 否 | `tencent|other` |
| sync | `Boolean` | `false` | 否 | 是否同步获取，浏览器v2.0.73及以上支持此属性 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

success回调函数参数 `Object res.data`
| 属性 | 类型 | 说明 |
| :-: | :-: | :-: |
| hasLogin | `Boolean` | `true|false` |
| tencentType | `String` | `qq|weixin|both`, 当source=tencent且hasLogin=false时使用，表示腾讯源可选择的登录方式 |

示例代码

```js
  ccApp.getLoginStatus({
    success(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getLoginStatus:ok","data":
       {"hasLogin":true}}
      */
    }
  })
```
<br/>

<a name = "5_5" href="#_5_5"><font size=5>ccApp.addLoginChangedListener(Object obj)</font></a>

__添加用户登录状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.addLoginChangedListener({
    onReceive: function(res) {
      console.log(JSON.stringify(res))
    },
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "5_6" href="#_5_6"><font size=5>ccApp.removeLoginChangedListener(Object obj)</font></a>

__移除用户登录状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.removeLoginChangedListener({
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 日志接口

<a name = "6_0" href="#_6_0"><font size=5>ccApp.logDataCollection(Object obj)</font></a>

__发送自定义数据到酷开大数据__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| eventName | `String` |  | 是 |  |
| eventParams | `String|Object` |  | 否 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码
```js
  ccApp.logDataCollection({
    eventName: 'button_click',
    eventParams: {'pageName': 'homepage', 'buttonName': 'cancel'},
    success(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "6_1" href="#_6_1"><font size=5>ccApp.sendMessageFromJS(Object obj)</font></a>

__发送私有数据到Android App端__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| message | `String|Object` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码
```js
  ccApp.sendMessageFromJS({
    message: 'hello',
    success(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 支付接口

<a name = "7_0" href="#_7_0"><font size=5>ccApp.startPay(Object obj)</font></a>

__启动支付页面__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| appCode | `String` |  | 是 | 商户编号ID,由酷开发布给第三方 |
| tradeId | `String` |  | 是 | 订单编号ID |
| productName | `String` |  | 是 | 商品名称，如“影视包年” |
| productType | `String` |  | 是 | 商品类型，如“实体”或“虚拟” |
| specialType | `String` |  | 是 | 通知支付结果给第三方开发者服务器URL，必须以http://开头 |
| price | `Number` |  | 是 | 商品价格，以“元”为单位 |
| token | `String` |  | 是 | 待补充 |
| tel | `String` | `''` | 否 | 电话号码 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startPay({
    appCode: '3002',
    tradeId: 'Coin19060411381607532',
    productName: '包月',
    productType: '虚拟',
    specialType: JSON.stringify({ "notify_url": "https://beta-goldshop.coocaa.com/exchange-shop/ossPay/notify_url" }),
    price: 1.0,
    token: '2.89648db6324345ab8ff10b0f9229c197',
    success: function(result) {
      console.log(JSON.stringify(result))
    }
  })
```
<br/>

<a name = "7_1" href="#_7_1"><font size=5>ccApp.addPayChangedListener(Object obj)</font></a>

__添加支付状态变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取监听到的数据 |

示例代码
```js
  ccApp.addPayChangedListener({
    onReceive: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "7_2" href="#_7_2"><font size=5>ccApp.removePayChangedListener(Object obj)</font></a>

__移除支付状态变化事件监听__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | `Function` |  | 否 | 接口回调函数 |

示例代码

```js
  ccApp.removePayChangedListener({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"removePayChangedListener:ok"}
      */
    }
  })
```
<br/>

### 广告接口

<a name = "8_3" href="#_8_3"><font size=5>ccApp.getAdDataV2(Object obj)</font></a>

__获取广告数据__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| appId | `String` |  | 是 |  |
| params | `Object` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码
```js
  ccApp.getAdDataV2({
    appId: 'CCADTV10007',
    params: {'game_id': 'G0005'},
    success: function(result) {
      let baseInfo = JSON.parse(res.data).baseInfo // 提交广告数据时需要
      let { actionDataList, mediaData } = JSON.parse(res.data).bodyData[0]
      let { voiceCmd: {key, val} } = actionDataList[0] // 🈶️语音监听时需要
    }
  })
```
<br/>

<a name = "8_4" href="#_8_4"><font size=5>ccApp.adDataCollectionV2(Object obj)</font></a>

__提交广告数据__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| baseInfo | `String` |  | 是 | 从广告数据中解析获取 |
| state | `String` |  | 是 | `index_start|index_finish|index_error|index_tick|index_voice_0|index_voice_2|index_click_0|index_click_2` |
| index | `Int` |  | 是 | 固定传0 |
| extraInfo | `String` |  | 是 | 根据不同state传不同值 |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码
```js
  ccApp.adDataCollectionV2({
    baseInfo: baseInfo,
    state: 'index_tick',
    index: 0,
    extraInfo: JSON.stringify({'tick': 1})
  })

  ccApp.adDataCollectionV2({
    baseInfo: baseInfo,
    state: 'index_start',
    index: 0,
    extraInfo: ''
  })
```
<br/>

<a name = "8_5" href="#_8_5"><font size=5>ccApp.addVoiceChangedListener(Object obj)</font></a>

__添加语音广告监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.addVoiceChangedListener({
    onReceive: function(res) {
      // 以下条件中key从广告数据解析获取
      if(res.cc_type === 'ad' && res.ad_voice_key === key) {
        // Todo your business
      }
    }
  })
```
<br/>

### 主页接口

<a name = "9_0" href="#_9_0"><font size=5>ccApp.startHomeTab(Object obj)</font></a>

__跳转主页tab页【待完善】__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| tabId | `String` |  | 是 | 运营提供 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startHomeTab({
    tabId: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "9_1" href="#_9_1"><font size=5>ccApp.startHomeSecondList(Object obj)</font></a>

__跳转主页二级列表页，不带运营背景__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| id | `String` |  | 是 | 版面id |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startHomeSecondList({
    id: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "9_2" href="#_9_2"><font size=5>ccApp.startHomeSpecial(Object obj)</font></a>

__跳转主页专题页，带运营背景__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| id | `String` |  | 是 | 版面id |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startHomeSpecial({
    id: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 影视接口

<a name = "10_0" href="#_10_0"><font size=5>ccApp.startMovieDetail(Object obj)</font></a>

__启动影视详情页__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| id | `String` |  | 是 | 详情页id |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startMovieDetail({
    id: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "10_1" href="#_10_1"><font size=5>ccApp.startMovieCarousel(Object obj)</font></a>

__启动影视轮播页__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| id | `String` |  | 是 | 版面id |
| type | `String` | `first` | 否 | `first|second`,表示一级或二级轮播页 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startMovieCarousel({
    id: '123',
    type: 'second',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "10_2" href="#_10_2"><font size=5>ccApp.startMovieMemberCenter(Object obj)</font></a>

__启动影视VIP购买页__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| sourceId | `String` |  | 是 | 产品源id，如奇异果vip，教育vip等 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startMovieMemberCenter({
    sourceId: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 商城接口

<a name = "11_0" href="#_11_0"><font size=5>ccApp.startMallDetail(Object obj)</font></a>

__启动商城商品详情页，区分图文和视频两种__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | `String` |  | 是 | `video|text` |
| id | `String` |  | 是 | 详情页跳转id |
| url | `String` |  | 否 | type=video必传 |
| name | `String` |  | 否  | type=video必传 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startMallDetail({
    type: 'text',
    id: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "11_1" href="#_11_1"><font size=5>ccApp.startMallOrderDetail(Object obj)</font></a>

__启动商城商品订单详情页__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| orderId | `String` |  | 是 | 商品订单id |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startMallOrderDetail({
    orderId: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "12_0" href="#_12_0"><font size=5>ccApp.startMyApps(Object obj)</font></a>

### 应用接口

__启动我的应用页__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| mode | `String` | `common` | 否 | `common|child`,普通或儿童模式 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startMyApps({
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "12_0" href="#_12_0"><font size=5>ccApp.startAppStoreDetail(Object obj)</font></a>

__启动应用详情页__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| id | `String` |  | 是 | 详情页id |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.startAppStoreDetail({
    id: '123',
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 语音接口

<a name = "13_0" href="#_13_0"><font size=5>ccApp.addVoiceChangedListener(Object obj)</font></a>

__添加语音消息变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.addVoiceChangedListener({
    onReceive: function(res) {
      console.log(JSON.stringify(res))
    },
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "13_1" href="#_13_1"><font size=5>ccApp.removeVoiceChangedListener(Object obj)</font></a>

__移除语音消息变化事件监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.removeVoiceChangedListener({
    success: function(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

### 广播接口

<a name = "14_0" href="#_14_0"><font size=5>ccApp.addGlobalBroadcastListener(Object obj)</font></a>

__添加android全局广播监听__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| action | `String` |  | 是 | `android action`|
| onReceive | `Function` |  | 是 | 获取数据回调函数 |
| success | `Function` |  | 否 | 回调函数 |

示例代码
```js
  ccApp.addGlobalBroadcastListener({
    action: 'coocaa.intent.action.js_broadcast_test',
    onReceive: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"isTrusted":false,"key1":"value1","key2":"value2","key3":"value3"}
      */
    }
  })
```
<br/>

<a name = "14_1" href="#_14_1"><font size=5>ccApp.removeGlobalBroadcastListener(Object obj)</font></a>

__移除android全局广播__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | `Function` |  | 否 | 回调函数 |

示例代码
```js
  ccApp.removeGlobalBroadcastListener({
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"removeGlobalBroadcastListener:ok"}
      */
    }
  })
```
<br/>

<a name = "14_2" href="#_14_2"><font size=5>ccApp.sendGlobalBroadcast(Object obj)</font></a>

__发送android全局广播__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | `String` | `android` | 否 | `android|web`|
| action | `String` |  | 是 | `action`名称|
| params | `Object` | `{}` | 否 | 参数 |
| success | `Function` |  | 否 | 回调函数 |

示例代码
```js
  ccApp.sendGlobalBroadcast({
    type: 'web',
    action: 'coocaa.intent.action.js_broadcast_test',
    params: {'key1':'value1','key2':'value2','key3':'value3'},
    success: function(res) {
      console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"sendGlobalBroadcast:ok"}
      */
    }
  })
```
<br/>

### 框架接口

<a name = "15_0" href="#_15_0"><font size=5>ccApp.deviceReady(Object obj)</font></a>

__监听酷开系统设备就绪状态__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 设备就绪后触发该回调 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.deviceReady({
    onReceive() { //在回调中获取设备信息
      ccApp.getDeviceInfo({
        success(res) {
          console.log(JSON.stringify(res))
        }
      })
    },
    success(res) {
      //该回调只表示设置成功
    }
  })
```
<br/>
<a name = "15_6" href="#_15_6"><font size=5>ccApp.ccReady(Object obj)</font></a>

__监听ccApp设备属性就绪状态__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 设备就绪后触发该回调 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.ccReady({
    onReceive() { //在回调中可以直接获取ccApp设备属性
      console.log(ccApp.ccChip)
    },
    success(res) {
      //该回调只表示设置成功
    }
  })
```
<br/>

<a name = "15_2" href="#_15_2"><font size=5>ccApp.exitPage(Object obj)</font></a>

__退出当前网页__ 
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.exitPage({
    success(res) {
      console.log(JSON.stringify(res))
    }
  })
```

<a name = "15_3" href="#_15_3"><font size=5>ccApp.setNativeToJsBridgeMode(Object obj)</font></a>

__启动用户登录页面__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| mode | `Number` | 2 | 否 | 可选`0|1|2` 分别表示`POLLING|LOAD_URL|ONLINE_EVENT` |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.setNativeToJsBridgeMode({
    mode: 1,
    success(res) {
      console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "15_4" href="#_15_4"><font size=5>ccApp.checkJsApi(Object obj)</font></a>

__判断当前客户端版本是否支持指定JS接口__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| jsApiList | `Array` |  | 是 | 需要检测的JS接口名称 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.checkJsApi({
    jsApiList: ['getAppInfo', 'getProperties', 'startCommonPage', 'startAppx'],
    success(res) {
      console.log(JSON.stringify(res))
      // 可用的api值true，不可用为false
      // 如：{"errMsg":"checkJsApi:ok","getAppInfo":true,"getProperties":true,    "startCommonPage":true,"startAppx":true}
    }
  })
```
<br/>

<a name = "15_5" href="#_15_5"><font size=5>ccApp.getPerformance(Object obj)</font></a>

__获取页面启动节点时间戳__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.getPerformance({
    success(res) {
      console.log(JSON.stringify(res))
      // 结果输出：{"errMsg":"getPerformance:ok","data":"{\"initWebViewBeforeTime\":1579169963499,\"initWebViewAfterTime\":1579169963529,\"loadUrlBeforeTime\":1579169963677,\"loadUrlStartTime\":1579169964241,\"loadUrlFinishTime\":1579169965960}"}
    }
  })
```
<br/>

<a name = "15_6" href="#_15_6"><font size=5>ccApp.setButtonListenerFlag(Object obj)</font></a>

__动态设置键值监听开关【浏览器v2.1.x版本支持】__
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| name | `String` |  | 是 | 键值名称，如返回键名称：`backbutton` |
| flag | `Boolean` |  | 是 | 开关值 `true|false` |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码
```js
  ccApp.setButtonListenerFlag({
    name: 'backbutton',
    flag: false
  })
```
<br/>

<br/>
<br/>
