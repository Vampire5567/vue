// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router'



import { Header,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import app from './App.vue'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router
})