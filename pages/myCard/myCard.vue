<template>
	<view>
		<view class="card">
			<view class="card-list" :class="`list${index}`" v-for="(item,index) in cardData" v-if="cardData" :key="index">
				<view class="up">
					<view class="left" style="color: #2d8bfc;"><span class="icon iconfont jiankang">&#xe603;</span></view>
					<view class="center">
						<view class="card-text"><text>健康卡</text></view>
						<view class="card-id"><text class="id1">姓名：</text><text class="id2">{{item.name}}</text></view>
						<view class="card-id"><text class="id1">卡号：</text><text class="id2">{{item.cardno}}</text></view>
						<view class="card-id"><text class="id1">身份证号：</text><text class="id2">{{common.formatNo(item.idno)}}</text></view>
					</view>
					<view class="right">
						<image src="../../static/qrcode.png" @click="showQRcode(item)"></image>
						<!-- <button type="default" class="btn">解绑</button> -->
						<u-button class="btn" :hair-line="false" @click="unbindConfirm(item)">解绑</u-button>
					</view>
				</view>
				<!-- <view class="down"> -->
				<!-- <text>身份证号：{{item.idno}}</text> -->
				<!-- </view> -->
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
		<view class="" v-if="cardData.length === 0" style="margin-bottom: 100rpx;">
			<u-empty text="暂未绑定健康卡" mode="data"></u-empty>
		</view>
		<button class="add" type="primary" @click="common.toURL('/pages/myCard/addCard/addCard')" v-if="cardData.length < 6">添加健康卡</button>
		<view class="extra"><text>最多可以绑定5张健康卡</text></view>
		<u-mask :show="showMask" @click="showMask = !showMask">
			<view class="warp">
				<view class="content-qrcode" v-if="QRcodeImage">
					<view class="user">
						<view class="user-icon">
							<u-icon name="account-fill" color="#ffffff" size="68"></u-icon>
						</view>
						<view class="user-text">
							<text>{{this.current.name}}</text>
							<text>{{this.current.cardno}}</text>
						</view>
					</view>
					<image class="QRcodeImage" :src="QRcodeImage"></image>
					<text>就诊时出示此二维码</text>
				</view>
			</view>
		</u-mask>
		<u-modal v-model="show" :content="content" :show-cancel-button="true" @confirm="confirm"></u-modal>
	</view>
</template>

<script>
	export default {
		// name: "卡片列表",
		data() {
			return {
				cardData: [],
				current: null,
				content: "",
				show: false,
				showMask: false,
				QRcodeImage: null,
			};
		},
		onShow() {
			this.getList()
		},
		methods: {
			getList() {
				this.$u.post(``, {}, {
					code: `card.list`,
				}).then(res => {
					console.log(res);
					this.cardData = res.data
					uni.setStorage({
						key: 'myCard',
						data: res.data
					});
				});
			},
			unbindConfirm(item) {
				this.current = item
				this.content = `是否确认解绑姓名为${this.current.name}的健康卡？`
				this.show = true
			},
			confirm() {
				this.unbind()
			},
			unbind() {
				this.$u.post(``, {
					cardno: this.current.cardno
				}, {
					code: `card.unbind`
				}).then(res => {
					console.log(res);
					uni.showToast({
						icon: 'none',
						title: '解除绑定成功'
					})
					this.getList()
				})
			},
			showQRcode(item) {
				this.current = item
				this.$u.post(``, {
					cardno: item.cardno
				}, {
					code: `card.qrcode`
				}).then(res => {
					console.log(res)
					this.QRcodeImage = `http://wxp.sqsdlrmyy.com${res.data}`
					console.log(this.QRcodeImage);
					this.showMask = true
				})
			}
		}
	};
</script>

<style lang="scss">
	.card {
		min-height: 150rpx;
	}

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
				margin: 20rpx;
				margin-top: 50rpx;
				background-color: #FFFFFF;
				display: flex;
				justify-content: center;
				align-items: center;

				.jiankang {
					margin-top: 6rpx;
					font-size: 44rpx;
				}
			}

			.center {
				flex: 1;
				height: 100%;
				margin-left: -20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: flex-start;
				font-size: 28rpx;

				.card-text {
					width: 100%;
					// padding-left: 100rpx;
					box-sizing: border-box;
					text-align: center;
					font-size: 40rpx;
				}

				.card-id {
					width: 100%;
					margin-top: 15rpx;
					font-size: 26rpx;
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.id1 {
						width: 140rpx;
						text-align: right;
					}

					.id2 {
						flex: 1;
					}
				}
			}

			.right {
				margin: 10rpx;
				height: 100%;
				padding: 10rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				image {
					width: 60rpx;
					height: 60rpx;
				}

				.btn {
					width: 80rpx;
					height: 50rpx;
					border-radius: 25rpx;
					font-size: 20rpx;
					text-align: center;
				}
			}
		}

		.down {
			opacity: .9;
			margin-left: 149rpx;
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

	.warp {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content-qrcode {
		padding: 30rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		.user {
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;

			.user-icon {
				background-color: #2979ff;
				width: 90rpx;
				height: 90rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
			}

			.user-text {
				display: flex;
				flex-direction: column;
				font-size: 30rpx;
				margin-left: 20rpx;
			}
		}
	}

	.QRcodeImage {
		width: 300rpx;
		height: 300rpx;
	}
</style>
