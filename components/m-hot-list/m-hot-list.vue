<template>
	<view class="flex flex-wrap">
		<m-goods-item v-for="item in data" :key="item.id" :item='item' type='row'></m-goods-item>
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"m-hot-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>