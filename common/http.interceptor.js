// common/http.interceptor.js

// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
// 如果需要了解这个install方法是什么，请移步：https://uviewui.com/components/vueUse.html
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://wxp.sqsdlrmyy.com/api',
		loadingText: '努力加载中~',
		loadingTime: 800,
		// 设置自定义头部content-type
		header: {
			'content-type': 'application/json;charset=UTF-8'
		}
		// ......
	});

	// 请求拦截部分，如配置，每次请求前都会执行
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		const token = uni.getStorageSync('token');
		config.header.token = token ? token : 'xxx';
		// config.header.Token = 'xxxxxx';

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		// if (config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}

	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.code == 1) {
			console.log("success");
			return res;
		} else if (res.code == -100) {
			// 假设-1为token失效，这里跳转登录
			// vm.$u.toast('验证失败，请重新登录');

			function getUrlParam(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
				let url = window.location.href.split('#')[0];
				let search = url.split('?')[1];
				if (search) {
					var r = search.substr(0).match(reg);
					if (r !== null) return unescape(r[2]);
					return null;
				} else {
					return null;
				}
			}

			let link = window.location.href;
			// let params = this._getUrlParams(link);  // 地址解析
			//console.log(link);	
			let params = getUrlParam('code'); // 地址解析
			console.log(params);
			// 已经授权登录过的就不用再授权了
			// if (store.state.token) return;

			// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取
			// if (params.code) {
			if (params) {
				// api.wxAuth(params.code); // 调用后台接口，授权
			} else {

				let appid = 'wx55cacb92f2202f90';
				//1.使用encodeURIComponent以及JSON.stringify()方法对对象进行字符串化和编码，这样可以控制url参数的长度，参考示例代码（uni-app书写方式，微信小程序自己改。）

				let uri = encodeURIComponent(link);
				//2.接受信息的页面使用JSON.parse()以及decodeURIComponent()接收和解码参数。
				//snsapi_base   //snsapi_base    scope = snsapi_base（不弹出授权页面，直接跳转，只能获取用户 openid ）。
				//snsapi_userinfo  弹出
				let authURL =
					`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
				window.location.href = authURL;
			}
			return false;
		} else if (res.code === 0) {
			vm.$u.toast(res.message);
			return false;
		}
	}

}

export default {
	install
}
