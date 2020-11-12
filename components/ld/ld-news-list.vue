<template>
	<view class="news-list" @tap="tap" @touchstart="handleTouchstart" @touchmove="handleTouchmove" @touchend="handleTouchend"
	 :class="[waveFlag ? 'u-wave-active' : '']">
		<view class="flex">
			<view class="news-list-text">
				<text>{{text}}</text>
				<text class="time-text">{{time}}</text>
			</view>
			<view>
				<image :src="imgSrc" mode="scaleToFill"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'newsList',
		props: {
			text: String,
			time: String,
			imgSrc: String,
		},
		data() {
			return {
				waveFlag: false,	
			};
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
	}
</script>

<style lang="scss">
	.news-list {
		color: #333333;
		background-color: #FFFFFF;
		padding: 30rpx 30rpx;
		padding-bottom: 0rpx;
		height: 200rpx;
		box-sizing: border-box;

		.flex {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			border-bottom: 1px solid #EEEDED;
			padding-bottom: 24rpx;
			box-sizing: border-box;

			.news-list-text {
				margin-right: 20rpx;
				height: 100%;
				font-size: $normal;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;

				.time-text {
					font-size: $normal-sub2;
					color: #CCCCCC;
				}
			}

			image {
				width: 180rpx;
				height: 139rpx;
			}
		}

	}

	.u-wave-active {
		background-color: rgba($color: #000000, $alpha: 0.1);
	}
</style>
