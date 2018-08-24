import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import VueResource from 'vue-resource'
import Moment from 'moment'

// 安装 ElementUI（ui）
Vue.use(ElementUI)

// 安装 路由（url）
Vue.use(VueRouter)

// 绑定 vue-resource（ajax）
Vue.use(VueResource)

// 绑定 moment 进行时间格式化 ✔
Vue.prototype.$moment = Moment;//赋值使用

// 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
Vue.http.options.root = 'http://120.79.197.130:8080/';

// 全局启用 emulateJSON 选项:如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。
Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  render: h => h(App),
  // 挂在路由对象到 VM 实例上
  router
})

