// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

//引入组件
import Hello from 'components/Hello'
import demo1 from 'components/demo1'
import demo2 from 'components/demo2'
//全局安装路由功能
Vue.use(Router)

//创建路由对象
const router = new Router({
  routes: [
    { path: '/', name: 'Hello', component: Hello},  //path打一个斜杠表示默认第一个vue加载
    { path: '/demo1', name: 'demo1', component: demo1},
    { path: '/demo2', name: 'demo2', component: demo2}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App}
})