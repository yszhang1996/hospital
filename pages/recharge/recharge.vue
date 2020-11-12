<template>
	<view class="recharge">
		<view class="title">
			<text>当前就诊人：</text>
			<text class="username">{{ username }}</text>
			<u-icon name="arrow-down" color="#cccccc" @click="show = true"></u-icon>
		</view>
		<view class="userinfo">
			<view class="userinfo-list">
				<text class="userinfo-list-left">{{ username }}</text>
				<text class="userinfo-list-right">ABC123456</text>
			</view>
			<view class="userinfo-list">
				<text class="userinfo-list-left">余额</text>
				<text class="userinfo-list-right" style="color: #647aac;">¥0.00</text>
			</view>
		</view>
		<view class="money">
			<view><text>缴纳金额</text></view>
			<view class="money-number">
				<text class="money-number-left">¥</text>
				<u-input class="money-number-right" placeholder-style="font-size: 32rpx;" :custom-style="{'font-size': '40rpx'}"  v-model="money" type="number" />
			</view>
			<view class="money-extra">
				<text class="info">或选择缴纳金额</text>
				<view class="select">
					<view class="select-list" :class="{ selected : money === 100 }" @click="money = 100"><text>100元</text></view>
					<view class="select-list" :class="{ selected : money === 300 }" @click="money = 300"><text>300元</text></view>
					<view class="select-list" :class="{ selected : money === 500 }" @click="money = 500"><text>500元</text></view>
				</view>
				<text class="info">温馨提示：就诊卡充值金额不能超过1000</text>
			</view>
			<u-button type="primary">立即充值</u-button>
		</view>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
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
			],
			username: '',
			money: null
		};
	},
	methods: {
		// 注意返回值为一个数组，单列时取数组的第一个元素即可(只有一个元素)
		confirm(e) {
			console.log(e);
			this.username = e[0].label;
		}
	},
	onLoad() {
		this.username = this.list[0].label;
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
		
		.money-extra{
			margin-top: 10rpx;
			margin-bottom: 50rpx;
			.select{
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 20rpx 0;
				&-list{
					width: calc( ( 100% - 60rpx ) / 3 );
					border: 1px solid #ccc;
					font-size: $normal-add2;
					height: 80rpx;
					border-radius: 10rpx;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				
				.selected{
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
