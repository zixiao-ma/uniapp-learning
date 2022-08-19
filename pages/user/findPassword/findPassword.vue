<template>
	<view class="login-container animate__animated animate__fadeIn">
		<div class="container back py-1">
			<uni-icons type="back" @click="handleBackHome"></uni-icons>
		</div>
		<div class="login-box">
			<p class='title'>找回密码</p>

			<m-form :formCol='formCol' :formData='formData' @submit='handleSubmit' btnText='找回密码'></m-form>
			
		</div>
	</view>
</template>

<script>
	import Storage from '@/utils/storage.js'
	import {
		userAPI
	} from '@/api/user.js'
	export default {
		data() {
			return {
				formData: {
					phone: '',
					code: '',
					password:'',
					repassword:''
				},
				formCol: [{
						prop: 'phone',
						type: 'text',
						icon: 'person',
						placeholder: '请输入手机号'
					},
					{
						prop: 'code',
						type: 'code',
						icon: 'locked',
						placeholder: '请输入验证码'
					},
					{
						prop: 'password',
						type: 'password',
						icon: 'locked',
						placeholder: '请输入密码'
					},
					{
						prop: 'repassword',
						type: 'password',
						icon: 'locked',
						placeholder: '请确认密码'
					}

				]
			};
		},
		methods: {
			
			handleBackHome() {
				uni.navigateBack()
			},
			async handleSubmit(val) {
			const res = await userAPI.userFindPassword(val)
			console.log(res,'res');
			if(res.msg==='ok'){
				uni.navigateTo({
					url:'/pages/user/login/login'
				})
			}
			}
		},
	}
</script>

<style lang="scss">
	.footer {
		text-align: center;
		margin-top: 40rpx;

		span {
			font-size: 25rpx;


		}
	}

	.toggleType {
		display: flex;
		justify-content: space-between;

		span {
			&:first-child {
				color: #5ccc84;
			}

			&:last-child {
				color: #666;
			}
		}
	}

	.weixin {
		text-align: center;
		margin-top: 70rpx;

		span {
			display: inline-block;
			width: 100rpx;
			height: 100rpx;
			border: 1rpx solid #5ccc84;
			text-align: center;
			line-height: 100rpx;

			border-radius: 100%;

			.uni-icons {
				font-size: 60rpx !important;
				color: #5ccc84 !important;
			}
		}
	}

	.login-container {
		height: 100vh;
		width: 100%;
		background: linear-gradient(to right, #85f8b5, #8ed6ef);
		overflow: hidden;

		.login-box {
			margin-top: 114rpx;
			width: 100%;
			padding: 56rpx 70rpx;
			box-sizing: border-box;
			height: 100%;
			background-color: #fff;
			border-radius: 30rpx 30rpx 0 0;
		}
	}

	.back {
		.uni-icons {

			font-size: 50rpx !important;
			color: #fff !important;
		}
	}

	.title {
		margin-bottom: 70rpx;
		font-size: 40rpx;
	}
</style>
