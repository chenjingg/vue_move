import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//vue init webpack first 或 vue create first创建一个空白项目

import ElementUI from 'element-ui';//导入ElementUI
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)//使用ElementUI

import VAnimateCss from 'v-animate-css';

Vue.use(VAnimateCss);

 
import axios from 'axios'
Vue.prototype.$axios = axios

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts//导入使用echarts包

import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'
Vue.use(RouterTab)// 导入使用vue-route-tab组件和样式


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
