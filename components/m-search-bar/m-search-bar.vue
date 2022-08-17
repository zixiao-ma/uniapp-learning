<template>
	<view class="container" @click="toSearchPage">
		<uni-search-bar :placeholder="placeholder" bgColor="#f5f5f3" @confirm="search" readonly="" />
	</view>
</template>

<script>
	export default {
		props: ['placeholder'],
		name: "m-search-bar",
		data() {
			return {

			};
		},
		methods: {
			toSearchPage() {
				uni.navigateTo({
					url:'/pages/shop/search/search'
				})
			}
		},
	}
</script>

<style lang="scss">
	.uni-searchbar {
		padding-left: 0;
		padding-right: 0;
	}
</style>
