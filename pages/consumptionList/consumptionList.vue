<template>
	<view class="consumptionList">
		<view class="title">
			<text>当前就诊人：</text>
			<text class="username">{{ username }}</text>
			<u-icon name="arrow-down" color="#cccccc" @click="show = true"></u-icon>
		</view>
		<view class="content">
			<view class="con-list" v-for="(item,index) in consumptionList" :key="index">
				<text>消费：</text>
				<text>{{item.number}}</text>
			</view>
		</view>
		<view class="footer">
			<u-loadmore :status="status" />
		</view>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
export default {
	data() {
		return {
			username: '',
			status: 'loadmore',
			show: false,
			end:false,
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
			consumptionList: [
				{
					type: '消费',
					number: 100
				}
			]
		};
	},
	onLoad() {
		this.username = this.list[0].label;
		this.getList();
	},
	onReachBottom() {
		if(!this.end){
			setTimeout(() => {
				this.getList();
			}, 1000);
			this.status = 'loading'
		}
	},
	methods: {
		confirm(e) {
			console.log(e);
			this.username = e[0].label;
		},
		getList() {
			let number = this.consumptionList[this.consumptionList.length - 1].number;
			console.log(number);
			if (number >= 140){
				this.status = 'nomore'
				this.end = true
				return false
			}
			for (let i = 0; i < 10; i++) {
				this.consumptionList.push({ type: '消费', number: number + i });
			}
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
		}
	}
}
</style>
