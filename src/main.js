// 入口文件
import Vue from 'vue'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import app from './App.vue'

import './lib/mui/css/mui.min.css'

var vm=new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(app)
})