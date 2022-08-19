<template>
	<view class="login-container animate__animated animate__fadeIn">
	<div class="container back py-1">
		<uni-icons type="back" @click="handleBackHome"></uni-icons>
	</div>
		<div class="login-box">
			<p class='title'>{{isReg?'注册':'登录'}}</p>

			<m-form :formCol='formCol' :formData='formData' @submit='handleSubmit' :btnText="isReg?'注册':'登录'"></m-form>
			<p class='toggleType'>
				<span @click='toggleType'>{{isReg?'去登录':'注册账号'}}</span>
				<span @click='toFindPwd'>忘记密码？</span>
			</p>
			<p class='weixin' v-if="!isReg">
				<span>
					<uni-icons type="weixin"></uni-icons>
				</span>
			</p>
			<p class='footer' v-if="!isReg">
				<span>
					<checkbox-group @change='checkboxChange'>
						<label>
							<checkbox value="true" style="transform:scale(0.7)" :checked="isAgree" />
							<text>已阅读并同意用户协议&隐私声明</text>
						</label>
					</checkbox-group>
				</span>
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
				isReg: false,
				isAgree: false,
				formData: {
					username: '',
					password: '',
					repassword: ''
				},
				formCol: [{
						prop: 'username',
						type: 'text',
						icon: 'person',
						placeholder: '请输入用户名'
					},
					{
						prop: 'password',
						type: 'password',
						icon: 'locked',
						placeholder: '请输入密码'
					}

				]
			};
		},
		methods: {
			toFindPwd(){
				uni.navigateTo({
					url:'/pages/user/findPassword/findPassword'
				})
			},
			checkboxChange(val) {
				this.isAgree = Boolean(val.detail.value[0])
			},
			handleBackHome() {
				uni.navigateBack()
			},
			async handleSubmit(val) {
				if (!this.isAgree) {
					return uni.showToast({
						title: '请先阅读并同意用户协议&隐私声明',
						icon: 'none'
					})
				}
				let res;
				this.isReg ? res = await userAPI.userReg(val) : res = await userAPI.userLogin(val);
				console.log(res);
				switch (res.msg) {
					case 'fail':
						uni.showToast({
							title: res.data,
							icon: 'none'
						})
						break;
					case 'ok':
						if(this.isReg){
							this.isAgree = false
							this.isReg = false;
							this.formCol.splice(this.formCol.length - 1, 1)
							this.resetFrom()
							return false
						}
						let token = res.data.token
						Storage.setUserInfo(res.data)
						Storage.setToken(token)
						if(!res.data.phone){
							return uni.navigateTo({
								url:'/pages/user/bindPhone/bindPhone'
							})
						}
						token&& uni.switchTab({
							url:'/pages/tabbar/home/home'
						})
						break;
					default:
						break;
				}

				console.log(res);
			},
			resetFrom(){
				this.formData={
					username: '',
					password: '',
					repassword: ''
				}
			},
			toggleType() {
				this.isReg = !this.isReg
				if (this.isReg) {
					this.isAgree = true
					this.formCol.push({
						prop: 'repassword',
						type: 'password',
						icon: 'locked',
						placeholder: '请再次输入密码'
					})
				} else {
					this.isAgree = false
					this.formCol.splice(this.formCol.length - 1, 1)
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
