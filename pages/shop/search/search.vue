<template>
	<view>
		<div class="search-bar flex my-2 align-center">
			<view class="leftIcon">
				<uni-icons type="left"></uni-icons>
			</view>
			<div class="right-search">
				<uni-search-bar  :focus="true" v-model="searchValue">
							</uni-search-bar>
			</div>
		</div>
		<m-title-bar leftText='历史记录' rightText='清除全部'>
		</m-title-bar>
		<div class="history container">
			<div v-for="item in 8" :key="item">
				<span class='history_item' >uniapp</span>
			</div>
			
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue:''
			};
		}
	}
</script>

<style lang="scss">
.search-bar{
	width: 100%;
	height: 70rpx;
}
.right-search{
	flex: 1;
}
.leftIcon{
	width: 70rpx;
	height: 70rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.uni-icons{
		font-size: 40rpx !important;
		color: #000 !important;
	}
}
.history{
	display: flex;
	flex-wrap: wrap;
	div{
		
		flex: 25%;
	}
}
.history_item{
	margin-bottom: 20rpx;
	width: 160rpx;
	height: 65rpx;
	background-color: #f8f8f8;
	border-radius: 10rpx;
	display: inline-block;
	text-align: center;
	line-height: 65rpx;
	color: #000;
	font-size: 22rpx;
}
</style>
