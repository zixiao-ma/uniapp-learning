<template>
	<view>
		<template v-for="(item,index) in formCol">
			<p class='m-input  animate__animated animate__fadeIn' v-if="inputType.includes(item.type)" :key="index">
				<span>
					<uni-icons :type="item.icon"></uni-icons>
				</span>
				<input class="inputText" :type="item.type" :placeholder="item.placeholder"
					v-model="formData[item.prop]">
			</p>
			<p class='m-input  animate__animated animate__fadeIn' v-if="item.type==='code'" :key="index">
				<span>
					<uni-icons :type="item.icon"></uni-icons>
				</span>
				<input class="inputText" :type="item.type" :placeholder="item.placeholder"
					v-model="formData[item.prop]"/>
				<span class='send' @click='sendCode'>{{codeText}}</span>
			</p>
		</template>


		<p class='m-button' @click='handleClickButton'>
			<text>{{btnText}}</text>
		</p>
	</view>
</template>

<script>
	import {
		userAPI
	} from '@/api/user.js'
	export default {
		props: ['formData', 'formCol', 'btnText'],
		name: "m-form",
		data() {
			return {
				codeText: '发送',
				inputType: ['text', 'password'],
				timer: null,
				codeTime: 60
			};
		},
		methods: {
			checkMobile() {
				if (!(/^1[3456789]\d{9}$/.test(this.formData.phone))) {
					uni.showToast({
						title: '手机号格式不正确',
						icon: "none"
					})
					return false;
				} else {
					return true
				}
			},
			handleClickButton() {
			this.$emit('submit', this.formData)
			},
			async sendCode() {
				if(!this.checkMobile()){
					return false
				}
				if (this.timer) {
					clearInterval(this.timer)
				}
				try {
					const res = await userAPI.userGetCode({
						phone: this.formData.phone
					})
					if (res.msg === 'ok') {
						this.formData.code = res.data
					}
				} catch (e) {
					//TODO handle the exception
				}
				this.timer = setInterval(() => {
					this.codeTime--;
					this.codeText = `${this.codeTime}s后重试`
					if (this.codeTime < 0) {
						clearInterval(this.timer)
						this.codeTime = 60;
						this.codeText = `重新发送`
					}
				}, 1000)
			}
		},
	}
</script>

<style lang="scss">
	.send {
		text-align: center;
		background-color: #5ccc84;
		color: #fff;
		line-height: 100rpx;
		height: 100%;
		position: absolute;
		right: 0;
		padding: 0 40rpx;
	}

	.inputText {
		border: 0;
		background: transparent;
		outline: 0;
		flex: 1	;
		font-size: 35rpx;
	}

	



	.m-input {
		position: relative;
		height: 102rpx;
		background-color: #f5f5f5;
		box-sizing: border-box;
		margin-bottom: 50rpx;
		display: flex;
		align-items: center;
		border-radius: 10rpx;
		overflow: hidden;

		span {
			display: inline-block;
			width: 100rpx;
			text-align: center;

			.uni-icons {
				font-size: 35rpx !important;
				color: #000 !important;
			}
		}
	}
</style>
