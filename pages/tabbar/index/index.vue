<template>
	<view class="animate__animated animate__fadeIn main_box">
		<!-- #ifdef APP-PLUS -->
			<view style="height: 60rpx;"></view>
		<!-- #endif -->
		<!-- 搜索区域 -->
		<m-search-bar :placeholder='mainData.placeholder'></m-search-bar>
		<!-- 轮播图 -->
		<m-swiper :data='mainData.swiperData'></m-swiper>
		<!-- nav 部分 -->
		<m-nav-bar :data='mainData.navData'></m-nav-bar>
		<!-- 优惠券部分 -->
		<m-coupon-list :data='CouponData'></m-coupon-list>
		<!-- 分割线+标题 -->
		<view class="divider"></view>
		<m-title-bar leftText='拼团'></m-title-bar>
		<!-- 拼团 -->
		<m-group-list :data='groupData'></m-group-list>
		<!-- 分割线+标题 -->
		<view class="divider"></view>
		<m-title-bar leftText='最新列表' rightText='查看更多'></m-title-bar>
		<!-- 最新拼团列表 -->
		<m-latest-group :data='mainData.latestGroup'></m-latest-group>
		<!-- 底部图片 -->
		<view class="divider"></view>
		<m-footer-view :data='mainData.footerView'></m-footer-view>
	</view>
</template>

<script>
	import {
		IndexApi
	} from '@/api/index.js'
	export default {
		data() {
			return {
				indexData: [],
				CouponData: [],
				groupData: []
			}
		},
		computed: {
			mainData(){
				const obj = {
					placeholder:'请输入搜索关键词',
					swiperData:[],
					navData:[],
					latestGroup:[],
					footerView:''
				}
				try{
					obj.placeholder=this.indexData[0].placeholder;
					obj.swiperData=this.indexData[1].data;
					obj.navData=this.indexData[2].data;
					obj.latestGroup=this.indexData[5].data;
					obj.footerView=this.indexData[6].data;
				}catch(e){
				}
				return obj
			}
		},
		onReady() {
			this.getIndexData()
			this.getCouponList()
			this.getGroupList()
		},
		onLoad() {

		},
		onPullDownRefresh() {
			this.getIndexData()
			this.getCouponList()
			this.getGroupList()
			this.indexData && uni.stopPullDownRefresh()
		},
		methods: {
			async getIndexData() {
				const res = await IndexApi.getIndexData()
				console.log(res);
				this.indexData = res.data
			},
			async getCouponList() {
				const res = await IndexApi.getCouponList()
				this.CouponData = res.data
			},
			async getGroupList() {
				const res = await IndexApi.getGroupList()
				this.groupData = res.data.rows
			}
		}
	}
</script>

<style>
	.main_box {
		padding-bottom: 60rpx;
	}
</style>
