<template>
	<view>
		 <m-goods-item v-for="item in data" :key="item.id" :item='item' type='column'></m-goods-item>
	</view>
</template>

<script>
	import {courseApi} from '@/api/course.js'
	export default {
		data() {
			return {
				model:{
					page:1,
					limit:10
				},
				data:[],
				count:0
			};
		},
		onLoad() {
			this.getData()
		},
		methods: {	
			async getData() {
				const res = await courseApi.getCourseData(this.model)
				this.data = res.data.rows
				this.count = res.data.count
			}
		},
	}
</script>

<style lang="scss">

</style>
