<template>
	<view class="prepayment">
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item label-position="left" label-width="150" label="就诊人">
					<view class="select-icon" @click="selectUser">
						<text>{{currentUser.name}}({{common.formatNo(currentUser.idno)}})</text>
						<u-icon name="arrow-right" color="#cccccc" size="28"></u-icon>
					</view>
				</u-form-item>
				<!-- <u-form-item label-position="left" label-width="150" label="院区">
					<text>{{ hospital }}</text>
				</u-form-item> -->
				<u-form-item label-position="left" label-width="150" label="姓名">
					<text>{{ currentUser.name }}</text>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="住院号">
					<u-input v-model="medid" placeholder="住院号" />
				</u-form-item>
			</u-form>
		</view>
		<view class="extra"><text class="info">填写需要缴纳预交金的患者住院号</text></view>
		<button class="submit" type="primary" @click="submit">下一步</button>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				username: null,
				currentUser: null,
				myCard: null,
				hospital: 'XXXX医院',
				medid: '',
				form: {},
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
				]
			};
		},
		onLoad() {
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
		},
		methods: {
			selectUser() {
				this.show = true;
			},
			confirm(e) {
				console.log(e);
				let index = e[0].value;
				this.currentUser = this.myCard[index]
			},
			submit() {
				this.$u.post(``, {
					cardno: this.currentUser.cardno,
					idno: this.currentUser.idno,
					name: this.currentUser.name,
					med_id: this.medid
				}, {
					code: `card.medid`
				}).then(res => {
					console.log(res);
					this.common.toURL(
						`/pages/prepaymentcontent/prepaymentcontent?name=${this.currentUser.name}&medid=${this.medid}&cardno=${this.currentUser.cardno}&idno=${this.currentUser.idno}&amount=${this.currentUser.amount}`
					)
				})
			}
		}
	};
</script>

<style lang="scss">
	.prepayment {
		background-color: $bgc;
		height: 100vh;

		.content {
			background-color: #ffffff;
			padding: 0 30rpx;

			.select-icon {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.extra {
			margin: 30rpx;

			.info {
				color: #7d7d7d;
				font-size: $normal-sub3;
			}
		}

		.submit {
			margin: 0 30rpx;
		}
	}
</style>
