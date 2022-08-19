<template>
	<view>
		<m-setting-item title='原密码'>
			<input type="text" style="width: 200rpx;" v-model="pwd.opassword" placeholder="请输入原密码"></m-setting-item>
			<m-setting-item title='新密码'>
				<input type="text" style="width: 200rpx;" v-model="pwd.password" placeholder="请输入新密码"></m-setting-item>
				<m-setting-item title='确认密码'>
					<input type="text" style="width: 200rpx;" v-model="pwd.repassword" placeholder="请确认密码"></m-setting-item>
					<view class="my-2 container">
						<view class="m-button" @click="saveInfo">
							保存
						</view>
					</view>
					
	</view>
</template>

<script>
	import {userAPI} from '@/api/user.js';
	import Storage from '@/utils/storage.js'
	export default {
		data() {
			return {
				pwd:{
					opassword: "",
					password: "",
					repassword: "",
				}
			}
		},
		methods: {
			checkPwd(){
				if(this.pwd.opassword&&this.pwd.password&&this.pwd.repassword){
					return true
				}else{
					return false
				}
			},
			async saveInfo(){
				if(this.checkPwd()){
					const res = await userAPI.userEditPassword(this.pwd)
					if(res.msg==='ok'){
						uni.showToast({
							title:'修改成功！'
						})
						uni.navigateTo({
							url:'/pages/user/setting/setting'
						})
					}
				}
			}
		}
	}
</script>

<style>

</style>
