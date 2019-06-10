import VueRouter from 'vue-router'


import home from './components/home.vue'
import member from './components/member.vue'
import shoppingCar from './components/shoppingCar.vue'
import search from './components/search.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shoppingCar',component:shoppingCar},
    {path:'/search',component:search}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router