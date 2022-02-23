import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}//解决在当前路由再次点击它会重复跳转控制台报错

import Home from '../views/Home'
const routes =  [

    {
      path: '/',
      name:Home,
      component: Home,
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
