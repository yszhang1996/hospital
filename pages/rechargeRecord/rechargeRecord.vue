<template>
	<view class="rechargeRecord">
		<view class="title">
			<text>当前就诊人：</text>
			<text class="username">{{ currentUser.name }}</text>
			<u-icon name="arrow-down" color="#cccccc" @click="show = true"></u-icon>
		</view>
		<view class="null-info">
			<image src="../../static/img/null.png" mode=""></image>
			<text>仅可查询90天内缴费记录</text>
		</view>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
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
			getList(){
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
			}
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
				width: 300rpx;
				height: 300rpx;
			}

			text {
				margin-top: 50rpx;
				color: #515151;
				font-size: $normal;
			}
		}
	}
</style>
