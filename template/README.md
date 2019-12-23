# Tjui-template

## Style

- reset.scss 初始化样式
- base.scss 常用样式类
- variable.scss 全局常用变量
- mixin.scss 常用样式方法

## Script 

### request.js axios封装
``` js
// 实例赋值给Vue原型，便于全局调用
Vue.prototype.$request = new Request({
  // 必填，开发环境基本地址
  devBaseUrl: '',
  // 必填，生产环境基本地址
  onlineBaseUrl: '',
  // 选填, 请求数据类型，默认from
  // json格式为 'json'
  // from格式为 'from'
  contenType: 'from'
  // 选填, 指定请求超时的毫秒数
  // 默认值 1000
  timeout: 1000,
  // 选填, 请求后台返回数据key
  // 默认值 'data'
  resDataKey: 'data',
  // 选填, 请求后台返回信息key
  // 默认值 'msg'
  resMesKey: 'msg',
  // 选填, 错误提醒弹框
  // 默认使用alert()提示
  errCallback(msg) {
    // msg为借口错误时返回的错误信息
    Vue.$toast(msg)
  }
})
```

### utils.js 常用工具函数