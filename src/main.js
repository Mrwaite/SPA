// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

import store from './store/index' //默认是index.js
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'



Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
      path : 'log-time',
      //要是不用懒加载  component : LogTime
      //使用懒加载
      component : resolve => require(['./components/LogTime.vue'], resolve)
  }]
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  ...App,
  store,
});