# API 定义

### API 调用说明

所有 API 通过`ccApp`对象来调用，请注意某些 API 需要在`deviceready`后才能调用成功。

### 参数

参数是一个对象，除了每个接口本身需要传的参数之外，还有以下通用参数：

- `success`：接口调用成功时执行的回调函数。

- `fail`：接口调用失败时执行的回调函数。

- `complete`：接口调用完成时执行的回调函数，无论成功或失败都会执行。

以上几个函数返回值都带有一个参数，类型为对象。

其中除了每个接口本身返回的数据之外，还有一个通用属性`errMsg`，其值格式如下：

调用成功时：`"xxx:ok"` ，其中`xxx`为调用的接口名

调用失败时：其值为具体错误信息

<br/>

### 提前了解几个重要的 API

<a href="#"><font size=5>ccApp.exitPage(Object obj)</font></a>

__接口说明:__ 退出当前网页
<br/>
<br/>

<a href="#"><font size=5>ccApp.bindEvent(Object obj)</font></a> 

__接口说明:__ 用来注册监听相关事件，是重要的逻辑处理节点<br/>
__参数说明：__ <br/>
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| eventName | `String` |  | 是 | 事件名称，具体见下表 |
| onReceive | `Function` |  | 是 | 事件回调函数 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

| 事件名称 | 功能说明 | 权限等级 |
| :-: | :-: | :-: | :-: |
| deviceready | 等待酷开系统设备就绪，某些接口需在deviceready状态后才能调用 | 低 |
| resume | 同Android Activity的resume生命周期回调，网页回到前台时触发该事件 | 低 |
| pause | 同Android Activity的pause生命周期回调，网页移到后台时触发该事件 | 低 |
| backbutton | 监听返回键弹起时触发 | 高 |
| backbuttondown | 监听返回键按下时触发 | 高 |
| homebutton | 监听按主页键弹起时触发 | 高 |
| menubutton | 监听按菜单键弹起时触发 | 高 |

::: tip
__`1.监听deviceready事件还可以用：ccApp.deviceReady(callback)，等同于ccApp.bindEvent('deviceready', callback)`__

__`2.当监听主页、返回等按键时，酷开系统则将控制权交给网页处理，请务必考虑好退出网页逻辑，否则网页无法退出，严重影响用户体验甚至引发投诉`__
:::

<br/>

## API 汇总

| 模块划分 | 调用方法 | 功能说明 | deviceready后调用| 权限等级 |
| :- | :- | :- | :-: | :-: |
| 系统接口 | deviceReady | 监听设备是否准备好，有些接口需要在ready后调用 | 否 | 
| 系统接口 | <a href="#1" name="_1"> getVideoSource </a> | 获取设备视频源 `tencent | iqiyi` |  |
| 系统接口 | <a href="#2" name="_2"> getAppInfo </a> | 获取`app`相关信息 |  |
| 系统接口 | <a href="#3" name="_3">getProperties </a> | 获取属性|  |
| 系统接口 | <a href="#24" name="_24">addStatusChangedListener</a> | 添加`USB|网络|用户登录|支付|下载`等状态变化监听 |  |
| 系统接口 | <a href="#25" name="_25">removeStatusChangedListener</a> | 移除状态变化监听 |  |
| 系统接口 | <a href="#26" name="_26">startBlueToothSetting</a>  | 启动蓝牙设置 |  |
| 系统接口 | <a href="#27" name="_27">startLocalMedia</a>  | 启动本地媒体 |  |
| 系统接口 | <a href="#28" name="_28">startSystemUpgrade</a>  | 启动升级设置 |  |
| 系统接口 | <a href="#29" name="_29">startTVSetting</a>  | 启动电视设置 |  |
| 系统接口 | <a href="#30" name="_30">startNetSetting</a>  | 启动网络设置 |  |
| 系统接口 | <a href="#19" name="_19">startAppX</a> | 启动酷开小程序页 |  |
| 系统接口 | <a href="#23" name="_23">startToast</a> | 启动显示弹窗|  |
| 系统接口 | startCommonNormalAction | 启动传参`action`页面 |  |
| 网络接口 | <a href="#4" name="_4">getNetworkInfo </a>  | 获取网络相关信息 |  |
| 网络接口 | <a href="#12" name="_12">addNetChangedListener </a> | 添加网络状态变化事件监听|  |
| 网络接口 | <a href="#12" name="_12">removeNetChangedListener </a> | 移除网络状态变化事件监听|  |
| 下载接口 | startOrCreateDownloadTask | 启动apk`没有安装的话，启动下载一个任务` |  |
| 下载接口 | createDownloadTask | 直接下载任务 |  |
| 下载接口 | pauseDownloadTask | 暂停下载接口 |  |
| 下载接口 | resumeDownloadTask | 恢复下载接口|  |
| 下载接口 | deleteDownloadTask | 删除下载接口|  |
| 下载接口 | addDownloadChangedListener | 添加APK下载事件监听|  |
| 下载接口 | removeDownloadChangedListener | 移除APK下载事件监听|  |
| 多媒体接口 | <a href="#16" name="_16">startVideoPlayer </a>| 启动播放器 |  |
| 多媒体接口 | <a href="#17" name="_17">addVideoPlayerListener</a> | 添加播放器事件监听 |  |
| 多媒体接口 | <a href="#18" name="_18">removeVideoPlayerListener</a> | 移除播放器事件监听|  |
| 设备接口 | <a href="#5" name="_5">getMemInfo </a> | 获取存储空间信息 |  |
| 设备接口 | <a href="#6" name="_6">getDeviceInfo </a> | 获取设备信息|  |
| 设备接口 | <a href="#7" name="_7">getDeviceLocation </a> | 获取设备位置|  |
| 用户接口 | <a href="#8" name="_8">getUserInfo </a>  | 获取用户信息 |  |
| 用户接口 | <a href="#9" name="_9">getUserAccessToken </a>  | 获取用户token|  |
| 用户接口 | <a href="#10" name="_10">setUserLogout </a>  | 退出用户登录|  |
| 用户接口 | <a href="#9" name="_9">startUserLogin </a>  | 启动用户登录页|  |
| 用户接口 | <a href="#10" name="_10">isUserLogin </a>  | 判断用户是否登录|  |
| 用户接口 | <a href="#9" name="_9">addUserLoginChangedListener </a>  | 添加用户登录状态变化事件监听|  |
| 用户接口 | <a href="#10" name="_10">removeUserLoginChangedListener </a>  | 移除用户登录状态变化事件监听|  |
| 日志接口 | <a href="#11" name="_11">submitDataCollection </a> | 提交至酷开大数据【内部使用，待测】|  |
| 日志接口 | <a href="#12" name="_12">notifyJSMessage </a> | 私有信息通知【内部使用，待测】|  |
| 支付接口 | <a href="#12" name="_12">startPay </a> | 启动支付页面 |  |
| 支付接口 | <a href="#12" name="_12">addPayChangedListener </a> | 添加支付状态变化事件监听|  |
| 支付接口 | <a href="#12" name="_12">removePayChangedListener </a> | 移除支付状态变化事件监听|  |
| 广告接口 | <a href="#13" name="_13">getAdData </a>  | 获取广告数据【内部使用，待测】|  |
| 广告接口 | <a href="#14" name="_14">submitAdData </a>  | 提交广告监测数据【内部使用，待测】|  |
| 广告接口 | <a href="#15" name="_15">submitThirdAdData </a>  | 提交第三方广告监测数据【内部使用，待测】|  |
| 主页接口 | startHomeTab | 跳转主页指定`tab` |  |
| 主页接口 | startHomeCommonList | 启动主页二级列表页 |  |
| 影视接口 | addAppTaskListener | APK下载事件监听|  |
| 影视接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 商城接口 | removeAppTaskListener | 移除APK下载事件监听|  |
| 应用接口 | <a href="#12" name="_12">startMyApps</a> | 启动我的应用|  |
| 应用接口 | <a href="#12" name="_12">startAppStoreDetail</a> | 启动应用详情页|  |
| 语音接口 | <a href="#12" name="_12">addVoiceListener</a>  | 添加语音事件监听|  |
| 语音接口 | <a href="#12" name="_12">removeVoiceListener</a>  | 移除语音事件监听|  |
| 广播接口 | <a href="#20" name="_20">addGlobalBroadcastListener </a> | 添加android全局广播监听|  |
| 广播接口 | <a href="#21" name="_21">removeGlobalBroadcastListener </a> | 移除android全局广播|  |
| 广播接口 | <a href="#22" name="_22">sendGlobalBroadcast </a> | 发送android全局广播|  |
| 页面接口 | bindEvent | 绑定监听页面相关事件|  |
| 页面接口 | exitPage | 退出页面|  |

<br/>

## 详细说明

### 系统接口

<a name = "1" href="#_1"><font size=5>ccApp.getVideoSource(Object obj)</font></a>

__获取本机视频源，与后台交互细节封装在接口内。__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function |  | 否 | 接口调用失败的回调函数 |
| complete | function |  | 否 | 接口调用结束的回调函数`成功或失败后执行` |

success回调函数参数 `Object res`
| 属性 | 类型 | 说明 |
| :-: | :-: | :-: |
| source | `String` | `tencent|iqiyi|other` |

示例代码

```js
  ccApp.getVideoSource({
    success(res) {
      console.log(res.errMsg); //调用成功时："xxx:ok" ，其中xxx为调用的接口名
      Console.log(res.source);
    }
  })
```

<br/>

<a name = "2" href="#_2"><font size=5>ccApp.getAppInfo(Object obj)</font></a>

__获取app信息__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| pkgList | `Array` |  | 是 | 包名作为数组项 |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  var params = ["com.tianci.user","com.tianci.movieplatform"]
  ccApp.getAppInfo({
    pkgList: params,
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getAppInfo:ok","msg":"{\"com.tianci.user\":{\"status\":\"0\",
       \"versionName\":\"4.12.5\",\"versionCode\":4120005},\"com.tianci.movieplatform\":
       {\"status\":\"0\",\"versionName\":\"7.8.24\",\"versionCode\":7080024}}"}
      */
    }
  })
```
<br/>

<a name = "3" href="#_3"><font size=5>ccApp.getProperties(Object obj)</font></a>

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
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"ro.build.skymodel":"9S52","ro.build.skytype":"Q4A","ro.build.skymid":"MST-6A838",
      "ro.build.skyversion":"018.002.260","errMsg":"getProperties:ok"}
      */
    }
  })
```

<br/>

<a name = "4" href="#_4"><font size=5>ccApp.getNetworkInfo(Object obj)</font></a>

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
      Console.log(JSON.stringify(res))
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
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getNetworkInfo:ok","netStatus":{"isnetworking":"true"}}
      */
    }
  })
```

<br/>

<a name = "5" href="#_5"><font size=5>ccApp.getMemInfo(Object obj)</font></a>

__获取设备存储空间信息，包括磁盘和内存信息__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getMemInfo({
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getMemInfo:ok","msg":{"totalMem":1940705280,"leftMem":228605952,
       "totalSpace":12557602816,"freeSpace":8580689920}}
      */
    }
  })
```

<br/>

<a name = "6" href="#_6"><font size=5>ccApp.getDeiveInfo(Object obj)</font></a>

__获取设备信息__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getDeviceInfo({
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getDeiveInfo:ok","msg":{"panel":"50","version":"6.20.180226",
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

<a name = "7" href="#_7"><font size=5>ccApp.getDeviceLocation(Object obj)</font></a>

__获取设备位置__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getDeviceLocation({
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getDeviceLocation:ok","msg":{"location":"广东省,深圳市,"}}
      */
    }
  })
```
<br/>

<a name = "8" href="#_8"><font size=5>ccApp.getUserInfo(Object obj)</font></a>

__获取用户信息__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getUserInfo({
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"getUserInfo:ok","msg":{信息太多，省略}}
      */
    }
  })
```

<br/>

<a name = "9" href="#_9"><font size=5>ccApp.getUserAccessToken(Object obj)</font></a>

__获取用户token__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.getUserAccessToken({
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
       {"errMsg":"getUserAccessToken:ok","msg":
       {"accesstoken":"2.0f3674599cca4c9d966842784763adb2"}}
      */
    }
  })
```

<br/>

<a name = "10" href="#_10"><font size=5>ccApp.setUserLogout(Object obj)</font></a>

__退出用户登录__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
  ccApp.setUserLogout({
    success(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"setUserLogout:ok"}
      */
    }
  })
```
<br/>

<a name = "11" href="#_11"><font size=5>ccApp.submitDataCollection(Object obj)</font></a>

__提交大数据【内部使用，待测】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| eventName | `String` |  | 是 |  |
| eventParams | `String|Object` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码

```js
  ccApp.submitDataCollection({
    eventId: 'button_click',
    eventParams: {'pageName': 'homepage', 'buttonName': 'cancel'},
    success(res) {
      Console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "12" href="#_12"><font size=5>ccApp.notifyJSMessage(Object obj)</font></a>

__通知私有信息【内部使用，待测】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| message | `String|Object` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码

```js
  ccApp.notifyJSMessage({
    message: 'hello',
    success(res) {
      Console.log(JSON.stringify(res))
    }
  })
```
<br/>

<a name = "13" href="#_13"><font size=5>ccApp.getAdData(Object obj)</font></a>

__获取广告数据【内部使用，待测】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| appId | `String` |  | 是 |  |
| params | `Object` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码

```js
  ccApp.getAdData({
    appId: 'CCADTV10007',
    params: {'key1':'value1','key2':'value2'},
    success: function(result) {
      console.log(JSON.stringify(result))
    }
  })
```
<br/>

<a name = "14" href="#_14"><font size=5>ccApp.submitAdData(Object obj)</font></a>

__提交广告监测数据【内部使用，待测】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | `String` |  | 是 | `custom|normal` |
| baseInfo | `String` |  | 是 | type是normal时传该值 |
| url | `String` |  | 是 | type是custom时传该值 |
| eventName | `String` |  | 是 |  |
| eventParams | `Object` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码

```js
  ccApp.submitAdData({
    type: 'normal',
    baseInfo: 'baseInfo',
    eventName: 'ad_show',
    eventParams: {'key1':'value1','key2':'value2','key3':'value3'},
    success: function(result) {
      console.log(JSON.stringify(result))
    }
  })

  ccApp.submitAdData({
    type: 'custom',
    url: 'https://xxx.xxx',
    eventName: 'web_dmp_show',
    eventParams: {'crowdId':'213','policyIds':'213','schemeId':'312'},
    success: function(result) {
      console.log(JSON.stringify(result))
    }
  })
```

<br/>

<a name = "15" href="#_15"><font size=5>ccApp.submitThirdAdData(Object obj)</font></a>

__提交第三方广告监测数据【内部使用，待测】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| scheduleId | `String` |  | 是 | |
| orderId | `String` |  | 是 | |
| adSpaceId | `String` |  | 是 | |
| trackUrl | `Array` |  | 是 |  |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码

```js
  ccApp.submitThirdAdData({
    scheduleId: 'scheduleId',
    orderId: 'orderId',
    adSpaceId: 'adSpaceId',
    trackUrl: ['https://xxx.xxx','https://xxx.xxx'],
    success(res) {
      Console.log(JSON.stringify(res))
    }
  })
```

<br/>

<a name = "16" href="#_16"><font size=5>ccApp.startVideoPlayer(Object obj)</font></a>

__启动播放器【待测】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| channel | `String` |  | 是 | `browser|movie|service`|
| title | `String` | `''` | 否 | channel为movie时填写 |
| url | `String` |  | 是 | channel为movie时填写 |
| needParse | `String` | `'false'` | 否 | channel为movie时填写`'true'|'false'` |
| id | `String` | `''` | 否 | channel为browser时填写 |
| uri | `String` |  | 是 | channel为browser时填写 |
| tips | `String` | `''` | 否 | channel为browser时填写 |
| width | `String` | `'1920'` | 否 | channel为browser时填写 |
| height | `String` | `'1080'` | 否 | channel为browser时填写|
| url | `String` | `''` | 否 | channel为browser时填写 |
| name | `String` | `''` | 否 | channel为browser时填写 |
| type | `String` | `''` | 否 | channel为browser时填写 |
| 公共属性 | `Function` |  | 否 | `success|fail`接口回调函数 |

示例代码

```js
  ccApp.startVideoPlayer({
    channel: 'movie',
    url: 'http://gm-vd.coocaa.com/edb2878fvodtransgzp1253922718/
    771febd05285890783126907326/v.f240.m3u8?t=6198a5c6&exper=0&
    sign=08725d427cccb9d2d3214b085fa025e5',
    title: '看过的节目去哪里找',
    needParse: 'true',
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

<a name = "17" href="#_17"><font size=5>ccApp.addVideoPlayerListener(Object obj)</font></a>

__监听播放器事件【暂只支持channel为browser的播放监听】__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| onReceive | `Function` |  | 是 | 获取监听到的数据 |

示例代码

```js
  ccApp.addVideoPlayerListener({
    onReceive: function(res) {
      Console.log(JSON.stringify(res))
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

<a name = "18" href="#_18"><font size=5>ccApp.removeVideoPlayerListener(Object obj)</font></a>

__移除播放器事件监听__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | `Function` |  | 否 | 接口回调函数 |

示例代码

```js
  ccApp.removeVideoPlayerListener({
    success: function(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"removeVideoPlayerListener:ok"}
      */
    }
  })
```
<br/>

<a name = "19" href="#_19"><font size=5>ccApp.startAppX(Object obj)</font></a>

__启动酷开小程序页__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| url | `String` |  | 是 | 小程序地址 |
| type | `String` | `'startService'` | 否 | `'startActivity'|vstartService'`|
| preload | `String` | `'false'` | 否 | 是否预加载 `'false'|'true'`|
| 公共属性 | `Function` |  | 否 | `success|fail|complete`接口回调函数 |

示例代码

```js
	ccApp.startAppX({
		preload: 'true',
		url: 'appx://com.coocaa.appx.member.guide',
		success: function(res) {
			console.log(JSON.stringify(res));
		}
	});
```
<br/>

<a name = "20" href="#_20"><font size=5>ccApp.addGlobalBroadcastListener(Object obj)</font></a>

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
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"isTrusted":false,"key1":"value1","key2":"value2","key3":"value3"}
      */
    }
  })
```
<br/>

<a name = "21" href="#_21"><font size=5>ccApp.removeGlobalBroadcastListener(Object obj)</font></a>

__移除android全局广播__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | `Function` |  | 否 | 回调函数 |

示例代码

```js
  ccApp.removeGlobalBroadcastListener({
    success: function(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"removeGlobalBroadcastListener:ok"}
      */
    }
  })
```
<br/>

<a name = "22" href="#_22"><font size=5>ccApp.sendGlobalBroadcast(Object obj)</font></a>

__发送android全局广播__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| type | `String` | `android` | 否 | `android|web`|
| action | `String` |  | 是 | `android action`|
| params | `Object` | `{}` | 否 | 参数 |
| success | `Function` |  | 否 | 回调函数 |

示例代码

```js
  ccApp.sendGlobalBroadcast({
    type: 'web',
    action: 'coocaa.intent.action.js_broadcast_test',
    params: {'key1':'value1','key2':'value2','key3':'value3'},
    success: function(res) {
      Console.log(JSON.stringify(res))
      /* 结果输出
      {"errMsg":"sendGlobalBroadcast:ok"}
      */
    }
  })
```
<a name = "23" href="#_23"><font size=5>ccApp.startToast(Object obj)</font></a>

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
      console.log(JSON.stringify(res));
    }
  });
```
<br/>

<a name = "24" href="#_24"><font size=5>ccApp.addStatusChangedListener(Object obj)</font></a>

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
      console.log(JSON.stringify(res));
    },
    success: function(res) {
      console.log(JSON.stringify(res));
    }
  })
```
<br/>

<a name = "25" href="#_25"><font size=5>ccApp.removeStatusChangedListener(Object obj)</font></a>

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
<a name = "26" href="#_26"><font size=5>ccApp.startBlueToothSetting(Object obj)</font></a>

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
<a name = "27" href="#_27"><font size=5>ccApp.startLocalMedia(Object obj)</font></a>


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
<a name = "28" href="#_28"><font size=5>ccApp.startSystemUpgrade(Object obj)</font></a>

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
<a name = "29" href="#_29"><font size=5>ccApp.startTVSetting(Object obj)</font></a>

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
<a name = "30" href="#_30"><font size=5>ccApp.startNetSetting(Object obj)</font></a>

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
<br/>
