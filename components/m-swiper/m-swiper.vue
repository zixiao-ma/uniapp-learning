<template>
	<view class="container">
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="(item,index) in data" :key="index">
				<view class="swiper-item" :class="index===0?'pink':'green'">
					<image :src="item.src" mode="heightFix"></image>
				</view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		props: ['data'],
		name: "m-swiper",
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000
			};
		}
	}
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		text-align: center;
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}

		height: 300rpx;
		overflow: hidden;
		border-radius: 10rpx;
		transition: all .2s;
	
	}
	.pink{
			background: linear-gradient(#ff94a5,#e54870);
	}
	.green{
		background-color: #03ac54;
	}
	/* #ff94a5 #e54870 */
</style>
