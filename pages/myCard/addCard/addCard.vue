<template>
	<view>
		<view class="form">
			<u-form ref="uForm">
				<u-form-item label="" :left-icon="'account'">
					<u-input v-model="name" placeholder="请输入就诊人姓名" />
				</u-form-item>
				<u-form-item label="" :left-icon="'coupon'">
					<u-input v-model="med_id" placeholder="请输入【门诊ID号】(非必填)" />
				</u-form-item>
				<u-form-item label="" :left-icon="'order'">
					<u-input v-model="idno" placeholder="请输入身份证号" />
				</u-form-item>
				<u-form-item label="" :left-icon="'phone-fill'">
					<u-input v-model="phone" placeholder="请输入您的手机号" />
				</u-form-item>
			</u-form>
		</view>
		<view class="extra-info">
			<text>温馨提示：</text>
			<text>
				(1)【门诊患者】请使用医院办卡的信息，需确认
				<text class="red">姓名、“门诊ID号”(充值小票上的患者ID号)、手机号码</text>
				，信息一直获取验证码方可绑定。也可直接到挂号窗口咨询门诊ID号。
			</text>
			<!-- <text>
				(2)【住院患者】请根据
				<text class="red">姓名、住院号、手机号码</text>
				进行绑定，可以进行预交金充值、费用清单、价差检验报告查询！
			</text> -->
			<text>(2)如果出现信息不一致无法绑定时，请到一楼收费室窗口变更个人信息后再做绑定！</text>
			<text>(3)一个微信号可以绑定五位用户信息。</text>
		</view>
		<view class="agreement">
			<u-checkbox v-model="read" />
			<text @click="common.toURL(`/pages/xieyi/xieyi`)">阅读并同意《用户协议》</text>
		</view>
		<button class="bind" type="primary" @click="submit">立即绑卡</button>
	</view>
</template>

<script>
	export default {
		// name: "绑定健康卡",
		data() {
			return {
				name: '',
				idno: '',
				med_id: '',
				phone: '',
				read: false
			};
		},
		methods: {
			submit() {
				if (this.name && this.idno && this.phone && this.read) {
					this.$u.post(``, {
						idno: this.idno,
						med_id: this.med_id,
						phone: this.phone,
						name: this.name
					}, {
						code: `card.bind`,
					}).then(res => {
						console.log(res);
						uni.showToast({
							icon: 'none',
							title: '绑定成功！'
						})
						setTimeout(() => {
							// this.common.toURL(`/pages/myCard/myCard`)
							uni.redirectTo({
								url: `/pages/myCard/myCard`
							})
						}, 1000)
					});
				} else {
					uni.showToast({
						icon: 'none',
						title: '请先完整的填写您的信息并同意《用户协议》'
					})
				}
			}
		}
	};
</script>

<style lang="scss">
	.form {
		width: 90%;
		margin: 0 auto;
	}

	.extra-info {
		width: 90%;
		color: #7d7d7d;
		margin: 30rpx auto;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		text {
			margin: 6rpx 0;
		}

		.red {
			color: #dd524d;
		}
	}

	.agreement {
		width: 90%;
		margin: 20rpx auto;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #2B85E4;
	}

	.bind {
		width: 80%;
	}
</style>
