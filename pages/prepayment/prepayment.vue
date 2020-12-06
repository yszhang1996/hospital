<!-- <template>
	<view class="prepayment">
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item label-position="left" label-width="150" label="就诊人">
					<view class="select-icon" @click="selectUser">
						<text>{{username}}(412345******6789)</text>
						<u-icon name="arrow-right" color="#cccccc" size="28"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="院区">
					<text>{{ form.hospital }}</text>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="姓名">
					<text>{{ form.name }}</text>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="住院号"><u-input v-model="form.bedId" placeholder="住院号" /></u-form-item>
			</u-form>
		</view>
		<view class="extra"><text class="info">填写需要缴纳预交金的患者姓名及住院号</text></view>
		<button class="submit" type="primary">下一步</button>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			username: null,
			form: {
				name: '张三',
				hospital: 'XXXX医院',
				bedId: ''
			},
			list: [
				{
					label: '张三',
					value: 1
				},
				{
					label: '李四',
					value: 2
				},
				{
					label: '王五',
					value: 3
				}
			]
		};
	},
	onLoad() {
		this.username = this.list[0].label;
	},
	methods: {
		selectUser() {
			this.show = true;
		},
		confirm(e) {
			console.log(e);
			this.username = e[0].label;
		}
	}
};
</script>

<style lang="scss">
.prepayment {
	background-color: $bgc;
	height: 100vh;

	.content {
		background-color: #ffffff;
		padding: 0 30rpx;

		.select-icon {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.extra {
		margin: 30rpx;
		.info {
			color: #7d7d7d;
			font-size: $normal-sub3;
		}
	}

	.submit {
		margin: 0 30rpx;
	}
}
</style>
 -->
 
 <template>
 	<view class="recharge">
 		<view class="title">
 			<text>当前就诊人：</text>
 			<text class="username">{{ currentUser.name }}</text>
 			<u-icon name="arrow-down" color="#cccccc" @click="show = true"></u-icon>
 		</view>
 		<view class="userinfo">
 			<view class="userinfo-list">
 				<text class="userinfo-list-left">{{ currentUser.name }}</text>
 				<text class="userinfo-list-right">{{ currentUser.cardno }}</text>
 			</view>
 			<view class="userinfo-list">
 				<text class="userinfo-list-left">余额</text>
 				<text class="userinfo-list-right" style="color: #647aac;">¥{{ currentUser.amount }}</text>
 			</view>
 		</view>
 		<view class="money">
 			<view><text>缴纳金额</text></view>
 			<view class="money-number">
 				<text class="money-number-left">¥</text>
 				<u-input class="money-number-right" placeholder="请输入您需要缴纳的金额" placeholder-style="font-size: 32rpx;" :custom-style="{'font-size': '40rpx'}"
 				 v-model="money" type="number" />
 			</view>
 			<view class="money-extra">
 				<text class="info">或选择缴纳金额</text>
 				<view class="select">
 					<view class="select-list" :class="{ selected : money === 100 }" @click="money = 100"><text>100元</text></view>
 					<view class="select-list" :class="{ selected : money === 300 }" @click="money = 300"><text>300元</text></view>
 					<view class="select-list" :class="{ selected : money === 500 }" @click="money = 500"><text>500元</text></view>
 				</view>
 				<text class="info">温馨提示：就诊卡充值金额不能超过100000</text>
 			</view>
 			<u-button type="primary" @click="pay()">立即充值</u-button>
 		</view>
 		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
 		<u-modal v-model="showModal" :content="content" @confirm="confirmModal"></u-modal>
 	</view>
 </template>
 
 <script>
 	export default {
 		data() {
 			return {
 				show: false,
 				showModal: false,
 				content: `支付成功`,
 				list: [{
 						label: '张三',
 						value: 1
 					},
 					{
 						label: '李四',
 						value: 2
 					},
 					{
 						label: '王五',
 						value: 3
 					}
 				],
 				myCard: null,
 				currentUser: null,
 				money: null,
 				jweixin: null,
 			};
 		},
 		onLoad() {
 			this.myCard = uni.getStorageSync('myCard');
 			console.log(this.myCard);
 			if (this.myCard) {
 				this.list = []
 				this.myCard.forEach((item, index) => {
 					this.list.push({
 						label: item.name,
 						value: index
 					})
 				})
 				this.currentUser = this.myCard[0];
 			} else {
 				alert('暂未绑定健康卡，请先绑定');
 				this.common.toURL(`/pages/myCard/addCard/addCard`)
 			}
 		},
 		onReady() {
 			// alert('onready')
 			this.jweixin = require('@/common/jweixin.js')
 
 			let apiList = [ // 可能需要用到的能力
 				'onMenuShareAppMessage',
 				'onMenuShareTimeline',
 				'hideOptionMenu',
 				'showOptionMenu',
 				'chooseWXPay'
 			];
 
 			let info = {
 				debug: false, // 调试，发布的时候改为false
 				appId: 'wx55cacb92f2202f90',
 				// nonceStr: resConfig.noncestr,
 				// timestamp: resConfig.timestamp,
 				// signature: resConfig.sign,
 				jsApiList: apiList
 			};
 			this.jweixin.config(info);
 
 			this.jweixin.ready(function() {
 
 			});
 		},
 		methods: {
 			// 注意返回值为一个数组，单列时取数组的第一个元素即可(只有一个元素)
 			confirm(e) {
 				console.log(e);
 				let index = e[0].value;
 				this.currentUser = this.myCard[index]
 			},
 			pay() {
 				if(this.money > 100000){
 					uni.showToast({
 						icon: 'none',
 						title: '每次充值金额不得大于100000'
 					})
 				}
 				this.$u.post(``, {
 					ammount: this.money,
 					card_no: this.currentUser.cardno,
 					type: 1
 				}, {
 					code: `order.create`
 				}).then(res => {
 					this.jweixin.chooseWXPay({
 						appId: res.data.addId,
 						timestamp: res.data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
 						nonceStr: res.data.nonceStr, // 支付签名随机串，不长于 32 位
 						package: res.data.packageValue, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
 						signType: res.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
 						paySign: res.data.paySign, // 支付签名
 						success: function(res2) {
 							// 支付成功后的回调函数
 							// alert(JSON.stringify(res2));
 							// alert(JSON.stringify(res2.errMsg))
 							if (res2.errMsg == "chooseWXPay:ok") {
 								this.showModal = true
 							}
 						}.bind(this)
 					});
 				})
 			},
 			confirmModal() {
 				// uni.redirectTo({
 				//     url: '/pages/myCard/myCard'
 				// });
 				this.money = null
 			}
 		}
 	};
 </script>
 
 <style lang="scss">
 	.recharge {
 		background-color: #f5f5f5;
 		height: 100vh;
 
 		.title {
 			width: 100vw;
 			padding: 20rpx 40rpx;
 			display: flex;
 			justify-content: space-between;
 			align-items: center;
 			background-color: #ffffff;
 			font-size: $normal;
 
 			.username {
 				flex: 1;
 			}
 		}
 
 		.userinfo {
 			display: flex;
 			background-color: #ffffff;
 			margin-top: 20rpx;
 			padding: 40rpx;
 			flex-direction: column;
 
 			&-list {
 				display: flex;
 				margin-bottom: 10rpx;
 
 				&-left {
 					width: 150rpx;
 				}
 			}
 		}
 
 		.money {
 			margin-top: 20rpx;
 			padding: 40rpx;
 			background-color: #ffffff;
 
 			&-number {
 				display: flex;
 				justify-content: flex-start;
 				align-items: center;
 				margin-top: 20rpx;
 				border-bottom: 1px solid #cccccc;
 
 				&-left {
 					font-size: 50rpx;
 					margin-right: 10rpx;
 				}
 
 				&-right {
 					height: 60rpx;
 				}
 			}
 
 			.money-extra {
 				margin-top: 10rpx;
 				margin-bottom: 50rpx;
 
 				.select {
 					width: 100%;
 					display: flex;
 					justify-content: space-around;
 					align-items: center;
 					margin: 20rpx 0;
 
 					&-list {
 						width: calc((100% - 60rpx) / 3);
 						border: 1px solid #ccc;
 						font-size: $normal-add2;
 						height: 80rpx;
 						border-radius: 10rpx;
 						display: flex;
 						justify-content: center;
 						align-items: center;
 					}
 
 					.selected {
 						border: 1px solid #3e86d8;
 						color: #3e86d8;
 					}
 				}
 			}
 		}
 	}
 
 	.info {
 		color: #7d7d7d;
 		font-size: $normal-sub3;
 	}
 </style>
 