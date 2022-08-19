<template>
	<view>
		<view class="container my-2">
			<m-skeleton-item  width='720' height='75'></m-skeleton-item>
		</view>
		<view class="container">
			<m-skeleton-item  width='720' height='300'></m-skeleton-item>
		</view>
		<view v-for="item in 2" :key="item+Math.random()">
			<view class="container flex mt-4">
				<view v-for="item in 4" :key="item+Math.random()" class="flex justify-center align-center" style="width: 25%;">
					<m-skeleton-item  width='70' height='70' circle ></m-skeleton-item>
				</view>
			</view>
			<view class="container flex mt-2">
				<view v-for="item in 4" :key="item+Math.random()" class="flex justify-center align-center" style="width: 25%;">
					<m-skeleton-item  width='70' height='30'  ></m-skeleton-item>
				</view>
			</view>
		</view>
		<view class="container flex justify-between my-2">
			<m-skeleton-item  width='345' height='130'></m-skeleton-item>
			<m-skeleton-item  width='345' height='130'></m-skeleton-item>
		</view>
		<view class="container my-2">
			<m-skeleton-item  width='80' height='30'></m-skeleton-item>
		</view>
		<view class="container flex justify-between">
			<view v-for="item in 2" :key="item+Math.random()" style="width: 50%;">
				<m-skeleton-item  width='345' height='190'></m-skeleton-item>
				<m-skeleton-item  width='245' height='30' className='my-1'></m-skeleton-item>
				<m-skeleton-item  width='145' height='30'></m-skeleton-item>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"m-skeleton-index",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>