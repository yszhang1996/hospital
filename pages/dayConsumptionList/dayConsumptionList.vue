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
						<text>{{item.xmmc}}</text>
					</view>
					<!-- <view class="">
						<text class="text1">支付方式：</text>
						<text>{{item.zffs}}</text>
					</view> -->
					<!-- <view class="">
						<text class="text1">记账部门：</text>
						<text>{{item.jzbm}}</text>
					</view> -->
					<!-- <view class=""> -->
					<!-- <text>{{item.czrq}}</text> -->
					<!-- </view> -->
				</view>
				<view class="center" v-if="item.xmje">
					<text>¥&nbsp;{{Math.abs(item.xmje)}}</text>
				</view>
				<view class="right" v-if="item.xmje" @click="showDetail(item)">
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
					<text class="text1">项目编号：</text>
					<text class="text2">{{currentData.xmbm}}</text>
				</view>
				<view class="datalist">
					<text class="text1">项目名称：</text>
					<text class="text2">{{currentData.xmmc}}</text>
				</view>
				<view class="datalist">
					<text class="text1">单价：</text>
					<text class="text2">¥&nbsp;{{Math.abs(currentData.xmdj)}}</text>
				</view>
				<view class="datalist">
					<text class="text1">数量：</text>
					<text class="text2">{{currentData.xmsl}}</text>
				</view>
				<view class="datalist">
					<text class="text1">金额：</text>
					<text class="text2">¥&nbsp;{{Math.abs(currentData.xmje)}}</text>
				</view>
			</view>
		</u-modal>
		<u-select v-model="show" :list="list" @confirm="confirm" confirm-text="关闭"></u-select>
	</view>
</template>

<script>
	export default {
		// name: "一日清单查询",
		data() {
			return {
				username: '',
				status: 'loadmore',
				show: false,
				showModal: false,
				end: false,
				showData: false,
				currentData: null,
				mode: 'date',
				time: "",
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
			// this.time = "2020-01-20"

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
					name: this.currentUser.name,
					idno: this.currentUser.idno,
					// med_id: this.currentUser.
				}, {
					code: `card.zylist`,
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
					flex: 1;

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
					margin-left: 30rpx;
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
				image{
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
