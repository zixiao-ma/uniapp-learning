<template>
	<view class="container footerView">
	 <image :src="data" ></image> 
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"m-footer-view",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.footerView{
	height: 330rpx;
	background-color: #fff;
	image{
		width: 100%;
		height: 100%;
		margin: 20rpx 0;
	}
}
</style>