{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from  './store/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

{{#tjui}}
import Tjui from 'taojinui'
import 'taojinui/packages/theme-chalk/lib/index.css'
Vue.use(Tjui)
{{/tjui}}

{{#axios}}
import Request from './assets/script/request'
Vue.prototype.$request = new Request({
  // 具体配置查看文档
  // 开发环境基本地址
  devBaseUrl: '',
  // 生产环境基本地址
  onlineBaseUrl: '',
  // 错误提醒弹框
  errCallback(msg) {
    {{#tjui}}
    Vue.$toast(msg)
    {{else}}
    // console.log(msg)
    {{/tjui}}
  }
})
{{/axios}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
