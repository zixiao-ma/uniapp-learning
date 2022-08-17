<template>
	<view class="title-bar">
		<h3>{{leftText}}</h3>
		<small @click='toAllCourse'>{{rightText}}</small>
	</view>
</template>

<script>
	
	export default {
		props:['leftText','rightText'],
		name:"m-title-bar",
		data() {
			return {
				
			};
		},
		methods: {
			toAllCourse() {
				uni.navigateTo({
					url:'/pages/shop/courseList/courseList'
				})
			}
		},
	}
</script>

<style lang="scss">
	.title-bar{
		display: flex;
		justify-content: space-between;
		padding: 25rpx 17rpx;
	}
h3{
	font-size: 30rpx;
}
small{
	font-size: 20rpx;
	color: #a6a5a1;
}
</style>