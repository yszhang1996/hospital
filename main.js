import Vue from 'vue'
import App from './App'
import store from "./store";
import uView from "uview-ui";
import common from "./common/common.js";
Vue.use(uView);

Vue.prototype.$store = store;
Vue.prototype.common = common;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/common/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)
app.$mount()
//修改sass中的变量，用于修改主题色
// document.getElementsByTagName('body')[0].style.setProperty('--error', '#000')
//#ifdef H5
//条件编译，仅在H5端引入jweixin模块，用于H5端的微信登录
// var jweixin = require('jweixin-module')  
// jweixin.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: 'wx5ec94806588674ae', // 必填，公众号的唯一标识
//   timestamp: "", // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '',// 必填，签名
//   jsApiList: [] // 必填，需要使用的JS接口列表
// });
// Vue.config.$jweixin = jweixin
// jweixin.ready(function(){  
// 	// TODO  
// 	console.log("success");
// });
//#endif