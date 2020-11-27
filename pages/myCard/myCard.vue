<template>
	<view>
		<view class="card">
			<view class="card-list" :class="`list${index}`" v-for="(item,index) in cardData" :key="index">
				<view class="up">
					<view class="left" style="color: #2d8bfc;"><span class="icon iconfont jiankang">&#xe603;</span></view>
					<view class="center"><text class="card-text">XX医院健康卡</text><text class="card-id">卡号：{{item.cardno}}</text></view>
					<view class="right"><text>持有人：{{item.name}}</text></view>
				</view>
				<view class="down">
					<text>身份证号：{{item.idno}}</text>
				</view>
			</view>
			<!-- 			<view class="card-list" style="background-image: linear-gradient(45deg, #1ccfcb, #12adba);">
				<view class="up">
					<view class="left" style="color: #12adba;"><span class="icon iconfont jiankang">&#xe603;</span></view>
					<view class="center"><text class="card-text">XX医院健康卡</text><text class="card-id">卡号：654321</text></view>
					<view class="right"><text>持有人：李四</text></view>
				</view>
				<view class="down">
					<text>身份证号：123456****12345678</text>
				</view>
			</view>
			<view class="card-list" style="background-image: linear-gradient(45deg, #f9ab50, #eb7930);">
				<view class="up">
					<view class="left" style="color: #eb7930;"><span class="icon iconfont jiankang">&#xe603;</span></view>
					<view class="center"><text class="card-text">XX医院健康卡</text><text class="card-id">卡号：142536</text></view>
					<view class="right"><text>持有人：王五</text></view>
				</view>
				<view class="down">
					<text>身份证号：123456****12345678</text>
				</view>
			</view> -->
			<!-- 			<view class="card-list" style="background-image: linear-gradient(45deg, #ed6dab, #c71d6f);">
				<view class="up">
					<view class="left" style="color: #c71d6f;"><span class="icon iconfont jiankang">&#xe603;</span></view>
					<view class="center"><text class="card-text">XX医院健康卡</text><text class="card-id">卡号：142536</text></view>
					<view class="right"><text>持有人：王五</text></view>
				</view>
				<view class="down">
					<text>身份证号：123456789012345678</text>
				</view>
			</view>
			<view class="card-list" style="background-image: linear-gradient(45deg, #a5cf3d, #50cc7f);">
				<view class="up">
					<view class="left" style="color: #50cc7f;"><span class="icon iconfont jiankang">&#xe603;</span></view>
					<view class="center"><text class="card-text">XX医院健康卡</text><text class="card-id">卡号：142536</text></view>
					<view class="right"><text>持有人：王五</text></view>
				</view>
				<view class="down">
					<text>身份证号：123456789012345678</text>
				</view>
			</view> -->
		</view>
		<button class="add" type="primary" @click="common.toURL('/pages/myCard/addCard/addCard')">添加健康卡</button>
		<view class="extra"><text>您还可以办理2张卡</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardData: null,
			};
		},
		onShow() {
			this.$u.post(``, {}, {
				code: `card.list`,
			}).then(res => {
				console.log(res);
				this.cardData = res.data
			});
		}
	};
</script>

<style lang="scss">
	.card-list {
		margin: 30rpx;
		padding: 16rpx 10rpx;
		height: 240rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		color: #FFFFFF;
		border-radius: 16rpx;

		.up {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			width: 100%;
			opacity: .9;

			.left {
				width: 75rpx;
				height: 75rpx;
				border-radius: 50%;
				margin: 30rpx;
				background-color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;

				.jiankang {
					margin-top: 4rpx;
					font-size: 44rpx;
				}
			}

			.center {
				flex: 1;
				height: 100%;
				margin-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: flex-start;

				.card-text {
					font-size: 40rpx;
				}

				.card-id {
					margin-top: 20rpx;
					font-size: 26rpx;
				}
			}

			.right {
				margin: 10rpx;
			}
		}

		.down {
			opacity: .9;
			margin-left: 155rpx;
			margin-bottom: 10rpx;
		}
	}

	.add {
		width: 80%;
	}

	.extra {
		padding: 20rpx;
		width: 100%;
		text-align: center;
		color: #7d7d7d;
	}

	.color {
		color: #007aff;
	}

	.list0 {
		background-image: linear-gradient(45deg, #3ab3fe, #2d8bfc);
	}

	.list1 {
		background-image: linear-gradient(45deg, #1ccfcb, #12adba);
	}

	.list2 {
		background-image: linear-gradient(45deg, #f9ab50, #eb7930);
	}

	.list3 {
		background-image: linear-gradient(45deg, #ed6dab, #c71d6f);
	}

	.list4 {
		background-image: linear-gradient(45deg, #a5cf3d, #50cc7f);
	}
</style>
