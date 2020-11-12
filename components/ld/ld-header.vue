<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
			<!-- 因为在非H5端，状态栏为沉浸式，下方的文字/图片会和状态栏重叠，所以加一个占位div -->
		</view>
		<view class="header">
			<view style="width: 100rpx;">
				<u-icon :name="leftName" v-show="leftName" color="#FFFFFF" size="36" @click="back"></u-icon>
			</view>
			<text class="header-text">{{title}}</text>
			<view style="width: 100rpx;">
				<view class="search" v-if="searchURL" @click="common.toURL(searchURL)">
					<u-icon name="search" color="#FFFFFF" size="36"></u-icon>
					<text>搜索</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			searchURL: String,
			leftName: String,
		},
		data() {
			return {

			};
		},
		methods: {
			back() {
				uni.navigateBack({
					animationType: 'pop-out',
					animationDuration: 200
				});
			},
		},
	}
</script>

<style lang="scss">
	.header {
		height: 108rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		opacity: .7;
		position: relative;
		z-index: 2;

		.header-text {
			font-size: $normal-add4;
			font-weight: bold;
			color: #FFFFFF;
		}

		.search {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: $normal-sub4;
			font-weight: bold;
			color: #FFFFFF;
		}
	}
</style>
