<template>
	<view class="prepayment">
		<view class="content">
			<u-form :model="form" ref="uForm">
				<u-form-item label-position="left" label-width="150" label="就诊人">
					<view class="select-icon" @click="selectUser">
						<text>{{username}}(412345******6789)</text>
						<u-icon name="arrow-right" color="#cccccc" size="28"></u-icon>
					</view>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="院区">
					<text>{{ form.hospital }}</text>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="姓名">
					<text>{{ form.name }}</text>
				</u-form-item>
				<u-form-item label-position="left" label-width="150" label="住院号"><u-input v-model="form.bedId" placeholder="住院号" /></u-form-item>
			</u-form>
		</view>
		<view class="extra"><text class="info">填写需要缴纳预交金的患者姓名及住院号</text></view>
		<button class="submit" type="primary">下一步</button>
		<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			username: null,
			form: {
				name: '张三',
				hospital: 'XXXX医院',
				bedId: ''
			},
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
			]
		};
	},
	onLoad() {
		this.username = this.list[0].label;
	},
	methods: {
		selectUser() {
			this.show = true;
		},
		confirm(e) {
			console.log(e);
			this.username = e[0].label;
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
