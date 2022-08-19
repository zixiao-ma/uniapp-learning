<template>
	<view class="editView animate__animated animate__fadeIn">
		<m-setting-item title='头像'>
			<image :src="userInfo.avatar || avatarEmpty" style="width: 70rpx;height: 70rpx;border-radius: 100%;"></image>
			<!-- <span>
				<uni-file-picker limit="1" @select='handleSelect' :imageStyles="imageStyles" disablePreview=""
					:value="fileLists" :del-icon="false" file-mediatype="image">选择</uni-file-picker>
			</span> -->
		</m-setting-item>
		<m-setting-item title='昵称'>
			<input type="text" style="width: 150rpx;"  v-model="nickname" placeholder="点击输入">
		</m-setting-item>
		<m-setting-item title='性别' @click='handleClickSex'>
			<span>{{sex || '选择'}}</span>
		</m-setting-item>
		<m-setting-item title='手机' @click='handleToBindPhone'>
			<span>{{userInfo.phone || '未绑定'}}</span>
		</m-setting-item>
		<view class="my-2 container">
			<view class="m-button" @click="saveInfo">
				保存
			</view>
		</view>
		<view class="dislogs">
			<!-- 分享示例 -->
			<uni-popup ref="share" type="share" safeArea>
				<view class="container">
					<div class='rounded share'>
						<p v-for="item in sexData" @click='setSex(item.value)' :key="item.key">{{item.value}}</p>
					</div>
					<div class='mt-2'>
						<p class='rounded' @click='$refs.share.close()'>取消</p>
					</div>
				</view>
			</uni-popup>
		</view>
	</view>
</template>
<!-- avatar: "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f647359335f5bd29128b.jpg"
nickname: "杀杀杀"
sex: "男" -->
<script>
	import Storage from '@/utils/storage.js'
	import {
		userAPI
	} from '@/api/user.js'
	export default {
		data() {
			return {
				imageStyles: {
					width: '90rpx',
					height: '90rpx',
					border: {
						radius: '50%'
					}
				},
				sexData: [{
						value: '未知',
						key: 0
					},
					{
						value: '男',
						key: 1
					},
					{
						value: '女',
						key: 2
					}
				],
				userInfo: {},
				nickname: '',
				sex: '未知',
				avatarEmpty:'http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/f647359335f5bd29128b.jpg'
			};
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			async handleSelect(val) {
				const file = val.tempFiles[0].file
				const formData = new FormData()
				for (let key in file) {
					formData.append(key, file[key])
				}
				const res = await userAPI.uploadAvatar(formData)
				console.log(res, 'res');
			},
			getUserInfo() {
				const Info = Storage.getUserInfo()
				this.userInfo = Info
				this.fileLists[0].url = Info.avatar
				this.nickname = Info.nickname
				this.sex = Info.sex
			},
			handleClickSex() {
				this.$refs.share.open()
			},
			setSex(val) {
				console.log(val);
				this.sex = val
				this.$refs.share.close()
			},
			handleToBindPhone() {
				uni.navigateTo({
					url: '/pages/user/bindPhone/bindPhone'
				})
			},
			async saveInfo() {
				let obj = {
					avatar: this.userInfo.avatar || this.avatarEmpty,
					nickname: this.nickname,
					sex: this.sex
				}
				const res = await userAPI.updateUserInfo(obj)
				if(res.data==='ok'){
					const newUserInfo = {
						...this.userInfo,
						...obj
						
					}
					Storage.setUserInfo(newUserInfo)
					uni.switchTab({
						url:'/pages/tabbar/home/home'
					})
				}
				
			}
		},
	}
</script>

<style scoped lang="scss">
	.uni-popup {
		background: transparent;
		display: flex;
		justify-content: center;

		p {
			width: 99%;
			height: 50rpx;
			background-color: #fff;
			text-align: center;
			padding: 20rpx 0;
			border-bottom: 1px solid #f2f2f2;

		}
	}

	.share {
		p {
			&:first-child {
				border-radius: 10rpx 10rpx 0 0;
			}

			&:last-child {
				border-radius: 0 0 10rpx 10rpx;
			}
		}
	}
</style>
