<template>
	<view class="animate__animated animate__fadeIn">
		<m-setting-item title='账户安全' @click='handleEditPwd'>
		<uni-icons type="right"></uni-icons>
		</m-setting-item>
		<m-setting-item title='清除缓存' @click='showDialog'>
		<span>{{cookie}}</span>
		</m-setting-item>
		<m-setting-item title='检查更新'>
		<uni-icons type="right"></uni-icons>
		</m-setting-item>
		<m-setting-item title='当前版本'>
<span>1.0.0</span>
		</m-setting-item>
		<view class="my-2 container" >
			<view class="m-button" @click="handlelogout">
				退出登录
			</view>
		</view>
		<uni-popup ref="inputDialog" type="dialog">
						<uni-popup-dialog ref="inputClose"  mode="base" title="提示" content="确定清除缓存?"
							 @confirm="dialogInputConfirm"></uni-popup-dialog>
					</uni-popup>
	</view>
</template>

<script>
	import Storage from '@/utils/storage.js'
	export default {
		data() {
			return {
				cookie:'2.00kb'
			};
		},
		methods: {
			handleEditPwd() {
				uni.navigateTo({
					url:'/pages/user/editPassword/editPassword'
				})
			},
			showDialog(){
				this.$refs.inputDialog.open()
			},
			dialogInputConfirm(){
				uni.showToast({
					title:'清除成功！',
					icon:'none'
				})
				this.cookie = '0.00kb'
			},
			handlelogout(){
			 uni.clearStorageSync()
				uni.switchTab({
					url:'/pages/tabbar/index/index'
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
