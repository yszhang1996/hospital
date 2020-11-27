<script>
	// import * as jwx from "common/jwx.js";
	// var jweixin = require('jweixin-module')  
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			// 分享页面配置
			// jwx.configWeiXin(jweixin => {
			// 	let shareInfo = {
			// 		title: '标题内容',
			// 		desc: '描述',
			// 		link: window.location.href,
			// 		imgUrl: '图片地址',
			// 		success: function() {}
			// 	};
			// 	jweixin.onMenuShareAppMessage(shareInfo);
			// 	jweixin.onMenuShareTimeline(shareInfo);
			// 	console.log("success");
			// });
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';
	/*每个页面公共css */

	@font-face {
		font-family: 'iconfont';
		src: url('./static/icon/iconfont.eot');
		src: url('./static/icon/iconfont.eot?#iefix') format('embedded-opentype'), url('./static/icon/iconfont.woff2') format('woff2'),
			url('./static/icon/iconfont.woff') format('woff'), url('./static/icon/iconfont.ttf') format('truetype'), url('./static/icon/iconfont.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: 'iconfont' !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
