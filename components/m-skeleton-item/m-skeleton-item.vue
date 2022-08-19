<template>
	<view :class="itemClass" :style="itemStyles"></view>
</template>

<script>
	
	export default {
		props:['width','height','circle','className'],
		name:"m-skeleton-item",
		data() {
			return {
				
			};
		},
		computed:{
			itemStyles(){
				return `width: ${this.width}rpx;height: ${this.height}rpx;`
			},
			itemClass(){
				return `skeleton ${this.className} ${this.circle?'isRounder':''}`
			}
		}
	}
</script>

<style lang="scss">
.skeleton{
	background-color: #f5f5f1;
	width: 100rpx;
	border-radius: 10rpx;
	height: 100rpx;
}
.isRounder{
	border-radius: 100%;
}
</style>