# 接口定义

### 接口调用说明

所有接口通过`ccApp`对象来调用。

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

## 接口汇总

| 模块划分 | 调用方法 | 功能说明 | 权限等级 |
| :-: | :-: | :-: | :-: | :-: |
| 系统接口 | <a href="#1" name="_1"> getVideoSource </a> | 获取设备视频源 `tencent | iqiyi` |  |
| 系统接口 | <a href="#2" name="_2"> getAppInfo </a> | 获取`app`相关信息 |  |
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

### 系统接口

<a name = "1" href="#_1"><font size=5>ccApp.getVideoSource(Object obj)</font></a>

__获取本机视频源，与后台交互细节封装在接口内。__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function |  | 否 | 接口调用失败的回调函数 |
| complete | function |  | 否 | 接口调用结束的回调函数`成功失败都会执行` |

success回调函数参数 `Object res`
| 属性 | 类型 | 说明 |
| :-: | :-: | :-: |
| source | string | `tencent|iqiyi|other` |

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

__获取app相关信息__

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| :-: | :-: | :-: | :-: | :-: |
| pkgname | Object |  | 是 | key是`pkgList`,value是app包名的数组 |
| success | function |  | 否 | 接口调用成功的回调函数 |
| fail | function |  | 否 | 接口调用失败的回调函数 |
| complete | function |  | 否 | 接口调用结束的回调函数`成功失败都会执行` |

success回调函数参数 `Object res`
| 属性 | 类型 | 说明 |
| :-: | :-: | :-: |
| versionCode | Number | `100348` |
| status | String | `0:ok` |
| versionName | String | `1.3.48` |

示例代码

```js
  var params = '{"pkgList":["com.tianci.user","com.coocaa.mall"]}'
  ccApp.getAppInfo({
    pkgname: params,
    success(res) {
      console.log(res.errMsg); //调用成功时："xxx:ok" ，其中xxx为调用的接口名
      Console.log(JSON.stringify(res));
  }
```

<br/>
<br/>
<br/>
