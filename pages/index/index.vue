<template>
	<view class="content">
		<view class="title">
			<image class="titleImg" src="../../static/img/index/title.jpg" mode="scaleToFill"></image>
		</view>
		<view class="treat">
			<text class="treat-title">门诊</text>
			<view class="grid">
				<view class="grid-list" @click="common.toURL('/pages/myCard/myCard')">
					<view class="grid-icon" style="background-color: #26D49F;">
						<image src="../../static/img/index/bind.png" mode="widthFix" style="width:52rpx;height: 50rpx;"></image>
					</view>
					<view class="grid-text"><text>绑卡建卡</text></view>
				</view>
				<view class="grid-list" @click="common.toURL('/pages/recharge/recharge')">
					<view class="grid-icon" style="background-color: #2899F5;">
						<image src="../../static/img/index/money.png" mode="widthFix" style="width:49rpx;height: 49rpx;"></image>
					</view>
					<view class="grid-text"><text>门诊充值</text></view>
				</view>
				<view class="grid-list" @click="common.toURL('/pages/rechargeRecord/rechargeRecord')">
					<view class="grid-icon" style="background-color: #23CBDA;">
						<image src="../../static/img/index/searchmoney.png" mode="widthFix" style="width:46rpx;height: 48rpx;"></image>
					</view>
					<view class="grid-text"><text>充值查询</text></view>
				</view>
				<view class="grid-list" @click="common.toURL('/pages/consumptionList/consumptionList')">
					<view class="grid-icon" style="background-color: #59B3F8;">
						<image src="../../static/img/index/searchlist.png" mode="widthFix" style="width:43rpx;height: 48rpx;"></image>
					</view>
					<view class="grid-text"><text>消费查询</text></view>
				</view>
			</view>
		</view>
		<view class="treat">
			<text class="treat-title">住院</text>
			<view class="grid">
				<view class="grid-list" @click="common.toURL('/pages/prepayment/prepayment')">
					<view class="grid-icon" style="background-color: #26D49F;">
						<image src="../../static/img/index/money.png" mode="widthFix" style="width:52rpx;height: 50rpx;"></image>
					</view>
					<view class="grid-text"><text>住院预交金</text></view>
				</view>
				<view class="grid-list">
					<view class="grid-icon" style="background-color: #2899F5;">
						<image src="../../static/img/index/searchlist.png" mode="widthFix" style="width:49rpx;height: 49rpx;"></image>
					</view>
					<view class="grid-text"><text>一日清单查询</text></view>
				</view>
			</view>
		</view>
		<button type="default" @click="login">1234</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				text: '1111111111'
			};
		},
		onLoad(param) {
			// var jweixin = require('@/common/jweixin.js')

			// jweixin.ready(function(){

			// });
			// // console.log(jweixin);
			// jweixin.checkJsApi({
			//   jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
			//   success: function(res) {
			//   // 以键值对的形式返回，可用的api值true，不可用为false
			//   // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
			//     alert(JSON.stringify(res))
			//   }
			// });
			console.log(JSON.stringify(param));
			if (param.code) {
				let appid = 'wx5ec94806588674ae';
				let secret = '2008a05d0e71fecb7461957dfbcf9324';
				let authURL = 'https://api.weixin.qq.com/sns/oauth2/access_token';
				this.text = authURL;
				uni.setStorageSync('token', param.code);
				this.$u.post(``, {}, {
					code: `sys.login`,
				}).then(res => {
					uni.showToast({
						icon:'none',
						title:'授权成功'
					})
				});
				// uni.request({
				//     url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx5ec94806588674ae&secret=2008a05d0e71fecb7461957dfbcf9324&code=031wiCFa1fOfUz0K02Ja1zH0DH1wiCFJ&grant_type=authorization_code`, //仅为示例，并非真实接口地址。
				// 	method: 'GET',
				//     header: {
				//         'content-type': 'application/json;charset=UTF-8'
				//     },
				//     success: (res) => {
				//         console.log(res.data);
				//         this.text = 'request success';
				//     }
				// });
			}
		},
		onShow() {},
		methods: {
			getcode() {
				let url = window.location.href;
				return url;
			},
			showcode() {
				let url = window.location.href;
				alert(url);
			},
			login() {
				// let appid = 'wx5ec94806588674ae';
				// try {
				// 	window.location.href =
				// 		'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5ec94806588674ae&redirect_uri=http://192.168.1.3:8080/hospital/&response_type=code&scope=snsapi_userinfo&state=1&connect_redirect=1#wechat_redirect';
				// } catch (err) {
				// 	alert(err); // 可执行
				// 	alert(123); // 可执行
				// }
				// const uniID = require('uni-id');
				// exports.main = async function(event, context) {
				// 	const res = await uniID.code2SessionWeixin({
				// 		code: event.code
				// 	});
				// 	return res;
				// };
				this.wxAuthorize();
			},
			getUrlParam(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
				let url = window.location.href.split('#')[0];
				alert(url);
				let search = url.split('?')[1];
				if (search) {
					var r = search.substr(0).match(reg);
					if (r !== null) return unescape(r[2]);
					return null;
				} else {
					return null;
				}
			},
			wxAuthorize() {
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
					api.wxAuth(params.code); // 调用后台接口，授权
				} else {
					// alert('22221');

					let appid = 'wx5ec94806588674ae';
					//1.使用encodeURIComponent以及JSON.stringify()方法对对象进行字符串化和编码，这样可以控制url参数的长度，参考示例代码（uni-app书写方式，微信小程序自己改。）

					let uri = encodeURIComponent(link);
					//2.接受信息的页面使用JSON.parse()以及decodeURIComponent()接收和解码参数。
					//snsapi_base   //snsapi_base    scope = snsapi_base（不弹出授权页面，直接跳转，只能获取用户 openid ）。
					//snsapi_userinfo  弹出
					let authURL =
						`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
					window.location.href = authURL;
				}
			}
		}
	};
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;
		height: 100vh;
	}

	.title {
		width: 100vw;
		height: 320rpx;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 700rpx;
			height: 280rpx;
		}
	}

	.treat {
		width: 100vw;
		background-color: #ffffff;
		margin-top: 30rpx;
		padding: 30rpx;

		&-title {
			font-size: $normal-add2;
		}

		.grid {
			width: calc(100vw - 60rpx);
			margin-top: 30rpx;
			display: flex;
			align-items: center;

			.grid-list {
				width: calc((100vw - 60rpx) / 4);
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;

				.grid-icon {
					width: 89rpx;
					height: 89rpx;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.grid-text {
					margin-top: 15rpx;
					font-size: $normal-sub3;
					color: #333333;
				}
			}
		}
	}
</style>
