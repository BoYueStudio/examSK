<template>
	<view class="content">

		<view class="list">
			<view class="tishi">若您忘记了密码，可在此重新设置新密码。</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" type="text" v-model="phoneno" maxlength="11" placeholder="请输入昵称" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" type="text" v-model="password" maxlength="32" placeholder="请输入新密码" :password="!showPassword" />
				<image class="img" :src="showPassword?'/static/shilu-login/op.png':'/static/shilu-login/cl.png'" @tap="display"></image>
			</view>

		</view>
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
			<text>修改密码</text>
		</view>

	</view>
</template>

<script>
	var tha, js;
	export default {
		data() {
			return {
				phoneno: '',
				second: 0,
				code: "",
				showPassword: false,
				password: ''
			}
		},
		onLoad() {
			tha = this;
		},
		computed: {

		},
		methods: {
			display() {
				this.showPassword = !this.showPassword
			},
			bindLogin() {

				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码长度小于六位'
					});
					return;
				}

				uni.request({
					url: "http://wwboyue.xicp.io/demo/userlog/forget",
					data: {
						name: this.phoneno,
						password: this.password,
					},
					method: 'POST',
					dataType: 'json',
					success: (res) => {
						if (res.data.code != 200) {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							});
						} else {
							uni.showToast({
								title: res.data.msg
							});
							setTimeout(function() {
								uni.switchTab({
									url: "../myinfo/myinfo"
								});
							}, 1500)
						}
					}
				});

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.tishi {
		color: #999999;
		font-size: 28upx;
		line-height: 50upx;
		margin-bottom: 50upx;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
	}

	.list-call .img {
		width: 40upx;
		height: 40upx;
	}

	.list-call .biaoti {
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width: 470upx;
		height: 100upx;
		background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
		box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
		border-radius: 50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}

	.dlbutton-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.9), rgba(188, 226, 158, 0.9));
	}

	.yzm {
		color: #FF7D13;
		font-size: 24upx;
		line-height: 64upx;
		padding-left: 10upx;
		padding-right: 10upx;
		width: auto;
		height: 64upx;
		border: 1upx solid rgba(255, 131, 30, 1);
		border-radius: 50upx;
	}

	.yzms {
		color: #999999 !important;
		border: 1upx solid #999999;
	}
</style>
