<template>
	<view class="login-container animate__animated animate__fadeIn">
		<div class="container back py-1">
			<uni-icons type="back" @click="handleBackHome"></uni-icons>
		</div>
		<div class="login-box">
			<p class='title'>绑定手机号</p>

			<m-form :formCol='formCol' :formData='formData' @submit='handleSubmit' btnText='绑定'></m-form>
			<p class='container my-2 notBind' @click='notBindPhone'>
				<span>暂不绑定</span>
			</p>
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
					code: ''
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
					}

				]
			};
		},
		methods: {
			notBindPhone(){
				uni.switchTab({
					url:'/pages/tabbar/home/home'
				})
			},
			handleBackHome() {
				uni.navigateBack()
			},
			async handleSubmit(val) {
				const res = await userAPI.userBindPhone(val)
				console.log(res);
				if(res.msg==='ok'){
					uni.showToast({
						title:'绑定成功！',
						icon:'none'
					})
					const Info = Storage.getUserInfo()
					if(Info){
						Info.phone = this.formData.phone
						Storage.setUserInfo(Info)
					}
				}else{
					uni.showToast({
						title:res.data,
						icon:'none'
					})
				}
				uni.switchTab({
					url:'/pages/tabbar/home/home'
				})
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
	.notBind{
		text-align: center;
		span{
			font-size: 30rpx;
			color: #666;
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
