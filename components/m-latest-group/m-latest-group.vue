<template>
	<view class="mt-2">
		 <m-goods-item v-for="item in data" :key="item.id" :item='item' type='column'></m-goods-item>
	</view>
</template>

<script>
	export default {
		props:['data'],
		name:"m-latest-group",
		data() {
			return {
				types:{
					column:'专栏',
					media:'媒体',
					audio:'音频',
					video:'视频'
				}
			};
		}
	}
</script>

<style lang="scss">

</style>