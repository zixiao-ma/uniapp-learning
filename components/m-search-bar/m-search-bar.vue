<template>
	<view class="container">
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
		}
	}
</script>

<style lang="scss">
	.uni-searchbar {
		padding-left: 0;
		padding-right: 0;
	}
</style>
