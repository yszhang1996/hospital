<template>
	<view class="set-item" @click="tap" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend"
	 :class="[waveFlag ? 'u-wave-active' : '']">
		<view class="item">
			<view class="icon">
				<image class="userinfo" :src="logoSrc" mode="aspectFit"></image>
			</view>
			<view class="item-text">
				<text>{{name}}</text>
			</view>
			<slot />
			<u-icon name="arrow-right" color="#C9C9D5" size="28"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		name: "setItem",
		data() {
			return {
				waveFlag: false,
			};
		},
		mounted() {
			console.log(this.logoSrc);
		},
		methods: {
			handleTouchstart(e) {
				// console.log("触发开始");
				// console.log(e);
				this.waveFlag = true
			},
			handleTouchmove(e) {
				// console.log("触发移动");
				// console.log(e);
				this.waveFlag = false
			},
			handleTouchend(e) {
				// console.log("触发结束");
				// console.log(e);
				this.waveFlag = false
			},
			tap() {
				this.$emit('handleTap');
			}
		},
		props: {
			logoSrc: String,
			name: String,
			url: String
		}
	}
</script>

<style lang="scss">
	.set-item {
		width: 100%;
		padding: 0 50rpx 0 34rpx;

		.item {
			width: 100%;
			min-height: 90rpx;
			border-bottom: 1px solid #ebeaea;
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.icon {
				width: 70rpx;
				height: 90rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.userinfo {
					width: 32rpx;
					// height: 34rpx;
				}
			}

			.item-text {
				flex: 1;
				font-size: $normal;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(37, 39, 55, 1);
			}
		}
	}

	.u-wave-active {
		background-color: rgba($color: #000000, $alpha: 0.1);
	}
</style>
