<template>
	<view class="consumptionList">
		<view class="title">
			<text>当前就诊人：</text>
			<text class="username">{{ currentUser.name }}</text>
			<u-icon name="arrow-down" color="#cccccc" @click="show = true"></u-icon>
		</view>
		<view class="title">
			<text>消费日期：</text>
			<text class="username">{{ time }}</text>
			<u-icon name="arrow-down" color="#cccccc" @click="showData = true"></u-icon>
		</view>
		<u-calendar v-model="showData" :mode="mode" @change="change"></u-calendar>
		<!-- 		<u-button @click="show = true">打开</u-button> -->
		<view class="content" v-if="consumptionList.length > 0">
			<view class="con-list" v-for="(item,index) in consumptionList" :key="index">
				<view class="left">
					<!-- <view class="">
						<text class="text1">金额：</text>
						<text>¥&nbsp;{{item.jje - item.dje}}</text>
					</view> -->
					<view class="">
						<!-- <text class="text1">类型：</text> -->
						<text>{{item.czlx}}</text>
					</view>
					<!-- <view class="">
						<text class="text1">支付方式：</text>
						<text>{{item.zffs}}</text>
					</view> -->
					<!-- <view class="">
						<text class="text1">记账部门：</text>
						<text>{{item.jzbm}}</text>
					</view> -->
					<view class="">
						<text>{{item.czrq}}</text>
					</view>
				</view>
				<view class="center" v-if="item.jje">
					<text>¥&nbsp;{{Math.abs(item.jje - item.dje)}}</text>
				</view>
				<view class="right" v-if="item.jje" @click="showDetail(item)">
					<text>详情</text>
				</view>
			</view>
		</view>
		<view class="content" v-else-if="time">
			<view class="none">
				<image src="../../static/img/null.png" mode=""></image>
				<text>{{ time }}无消费记录</text>
			</view>
		</view>
		<!-- 		<view class="footer">
			<u-loadmore :status="status" />
		</view> -->
		<u-modal v-model="showModal" title="消费详情" :title-style="{'font-size': '16px'}" confirm-text="关闭">
			<view class="slot-content" v-if="currentData">
				<view class="datalist">
					<text class="text1">金额：</text>
					<text class="text2">¥&nbsp;{{Math.abs(currentData.jje - currentData.dje)}}</text>
				</view>
				<view class="datalist">
					<text class="text1">类型：</text>
					<text class="text2">{{currentData.czlx}}</text>
				</view>
				<view class="datalist">
					<text class="text1">支付方式：</text>
					<text class="text2">{{currentData.zffs}}</text>
				</view>
				<view class="datalist">
					<text class="text1">记账部门：</text>
					<text class="text2">{{currentData.jzbm}}</text>
				</view>
				<view class="datalist">
					<text class="text1">日期：</text>
					<text class="text2">{{currentData.czrq.slice(0,10)}}</text>
				</view>
				<view class="datalist">
					<text class="text1">时间：</text>
					<text class="text2">{{currentData.czrq.substring(currentData.czrq.length-9)}}</text>
				</view>
			</view>
		</u-modal>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		// name: "消费查询",
		data() {
			return {
				username: '',
				status: 'loadmore',
				show: false,
				showModal: false,
				end: false,
				showData: false,
				mode: 'date',
				time: "",
				currentData: null,
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
				consumptionList: [{
					type: '消费',
					number: 100
				}],
				myCard: null,
				currentUser: null,
			};
		},
		// onLoad() {
		// 	this.username = this.list[0].label;
		// 	// this.getList();
		// 	let time = new Date();
		// 	this.time = time.toLocaleDateString().replace(/\//g, '-');
		// 	this.getList()
		// },
		onLoad() {
			let time = new Date();
			this.time = time.toLocaleDateString().replace(/\//g, '-');
			// this.time = "2019-06-03"

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
		// onReachBottom() {
		// 	if (!this.end) {
		// 		setTimeout(() => {
		// 			this.getList();
		// 		}, 1000);
		// 		this.status = 'loading'
		// 	}
		// },
		methods: {
			confirm(e) {
				console.log(e);
				let index = e[0].value;
				this.currentUser = this.myCard[index]
				this.getList()
			},
			getList() {
				this.$u.post(``, {
					cardno: this.currentUser.cardno,
					date: this.time,
				}, {
					code: `card.mzlist`,
				}).then(res => {
					uni.showToast({
						icon: 'none',
						title: '查询成功'
					})
					this.consumptionList = res.data
				});
			},
			change(e) {
				console.log(e);
				this.time = e.result
				this.getList()
			},
			showDetail(item) {
				this.showModal = true
				this.currentData = item
			}
		}
	};
</script>

<style lang="scss">
	.consumptionList {
		background-color: #f5f5f5;
		min-height: 100vh;
		padding-bottom: 20rpx;

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

		.content {
			.con-list {
				width: 100vw;
				margin: 20rpx 0;
				padding: 40rpx;
				background-color: #ffffff;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					view {
						margin: 10rpx 0;
						display: flex;

						.text1 {
							width: 180rpx;
						}
					}
				}

				.center {
					font-size: 36rpx;
					text-align: right;
					width: 200rpx;
				}

				.right {
					font-size: 32rpx;
					text-align: right;
					color: #2864ee;
				}
			}

			.none {
				height: 500rpx;
				width: 100vw;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				image {
					width: 250rpx;
					height: 250rpx;
					margin-bottom: 50rpx;
				}
			}

		}
	}

	.slot-content {
		margin: 30rpx;
	}

	.datalist {
		width: 100%;
		margin: 10rpx auto;
		padding: 0 60rpx;
		display: flex;

		.text1 {
			width: 180rpx;
		}

		.text2 {
			width: calc(100% - 180rpx);
		}
	}
</style>
