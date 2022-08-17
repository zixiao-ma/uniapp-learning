<template>
	<view class="container group mt-2">
		 <m-goods-item v-for="item in data" :key="item.id" :item='item' type='row'></m-goods-item>
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"m-group-list",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.group{
		display: flex;
		overflow-x: scroll;
	}

</style>