<template>
	<view>
		<view class="icon-success">
			<u-icon name="checkmark-circle" color="#05c32a" size="200"></u-icon>
			<text class="icon-text">支付成功</text>
		</view>
		<view class="success-content">
			<view class="content-list">
				<text>订单编号：</text>
				<text>{{data.id}}</text>
			</view>
			<view class="content-list">
				<text>实付金额：</text>
				<text>{{data.totalFee}}元</text>
			</view>
			<view class="content-list">
				<text>支付时间：</text>
				<text>{{data.payTime}}</text>
			</view>
			<view class="content-list">
				<text>收款单位：</text>
				<text>{{data.body}}</text>
			</view>
			<view class="content-list">
				<text>支付状态：</text>
				<text>{{data.status === 1 ? "已入账" : "未入账"}}</text>
			</view>
		</view>
		<u-button type="primary" class="submit" @click="gotoIndex">返回首页</u-button>
	</view>
</template>

<script>
	export default {
		onLoad(params) {
			if (params) {
				this.$u.post(``, {
					id: params.id
				}, {
					code: `order.detail`
				}).then(res => {
					console.log(res);
					this.data = res.data
				})
			} else {
				this.$u.post(``, {

				}, {
					code: `order.detail`
				}).then(res => {
					console.log(res);
					this.data = res.data
				})
			}
		},
		data() {
			return {
				data: null,
			};
		},
		methods:{
			gotoIndex(){
				uni.redirectTo({
					url:`/pages/index/index`
				})
			}
		}
	}
</script>

<style lang="scss">
	.icon-success {
		margin-top: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		.icon-text {
			font-size: 40rpx;
		}
	}

	.success-content {
		padding: 80rpx;
		display: flex;
		flex-direction: column;

		.content-list {
			font-size: 30rpx;
			padding: 10rpx;
		}
	}

	.submit {
		margin: 0 80rpx;
	}
</style>
