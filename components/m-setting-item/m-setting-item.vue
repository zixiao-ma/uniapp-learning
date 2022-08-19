<template>
	<div class="editlist flex container justify-between align-center" @click='handleClick'>
		<span>{{title}}</span>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props:['title'],
		name:"m-setting-item",
		data() {
			return {
				
			};
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		},
	}
</script>

<style lang="scss" scoped>

	.editlist {
		padding: 30rpx 20rpx;
		border-bottom: 1px solid #f2f2f2;
	}


</style>