<template>
	<view class="rechargeRecord">
		<view class="title">
			<text>当前就诊人：</text>
			<text class="username">{{ currentUser.name }}</text>
			<u-icon name="arrow-down" color="#cccccc" @click="show = true"></u-icon>
		</view>
		<view class="null-info" v-if="orderList.length <= 0">
			<image src="../../static/img/null.png" mode=""></image>
			<text>仅可查询90天内缴费记录</text>
		</view>
		<view class="content-recharge" v-else>
			<view class="recharge-list" v-for="(item,index) in orderList" :key="index">
				<view class="left">
					<text class="text1"><text class="text3" style="text-align: right;">{{item.bizType == "1" ? "住院充值 " : "门诊充值 " }}</text>{{Math.abs(item.totalFee)}}元</text>
					<text class="text2">{{item.payTime}}</text>
				</view>
				<view class="right" @click="showDetail(item)">
					<text>
						详情
					</text>
				</view>
			</view>
		</view>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		// name: "充值记录-充值查询",
		data() {
			return {
				show: false,
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
				username: '',
				money: '',
				myCard: null,
				currentUser: null,
				orderList: null,
			};
		},
		methods: {
			// 注意返回值为一个数组，单列时取数组的第一个元素即可(只有一个元素)
			confirm(e) {
				console.log(e);
				let index = e[0].value;
				this.currentUser = this.myCard[index]
				this.getList()
			},
			getList() {
				this.$u.post(``, {
					cardno: this.currentUser.cardno
				}, {
					code: `order.list`,
				}).then(res => {
					uni.showToast({
						icon: 'none',
						title: '查询成功'
					})
					this.orderList = res.data
				});
			},
			showDetail(item) {
				// this.$u.post(``, {
				// 	id: item.id
				// }, {
				// 	code: `order.detail`,
				// }).then(res => {
				// 	this.showModal = true
				// 	this.currentData = res.data
				// });
				this.common.toURL(`/pages/paySuccess/paySuccess?id=${item.id}`)
			}
		},
		onLoad() {
			this.myCard = uni.getStorageSync('myCard');
			console.log(this.myCard);
			if (this.myCard.length > 0) {
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
				// this.common.toURL(`/pages/myCard/addCard/addCard`)
				uni.redirectTo({
					url: `/pages/myCard/addCard/addCard`
				})
			}
			this.getList()
		},
	};
</script>

<style lang="scss">
	.rechargeRecord {
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

		.null-info {
			margin-top: 300rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 250rpx;
				height: 250rpx;
			}

			text {
				margin-top: 50rpx;
				color: #515151;
				font-size: $normal;
			}
		}
	}

	.right {
		font-size: 32rpx;
		text-align: right;
		color: #2864ee;
	}

	.content-recharge {
		width: 100%;
		margin: 30rpx 0;
		padding: 0 30rpx;

		.recharge-list {
			margin: 20rpx 0;
			padding: 20rpx 40rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				display: flex;
				flex-direction: column;

				.text1 {
					font-size: 40rpx;
				}

				.text2 {
					font-size: 24rpx;
					color: #C0C0C0;
				}
			}
		}
	}
</style>
