<template>
	<view class="main_box">
		<m-skeleton-index v-if="!loading"></m-skeleton-index>
		<view v-else class='animate__animated animate__fadeIn'>
			<!-- #ifdef APP-PLUS -->
				<view style="height: 60rpx;"></view>
			<!-- #endif -->
			<!-- 搜索区域-->
			<m-search-bar :placeholder='mainData.placeholder' v-if="permission.includes('search')"></m-search-bar>
			<!-- 轮播图 -->
			<m-swiper :data='mainData.swiperData' v-if="permission.includes('swiper')"></m-swiper>
			<!-- nav 部分 -->
			<m-nav-bar :data='mainData.navData' v-if="permission.includes('icons')"></m-nav-bar>
			<!-- 优惠券部分 -->
			<m-coupon-list :data='CouponData' v-if="permission.includes('coupon')"></m-coupon-list>
			<!-- 分割线+标题 -->
			<view class="divider" v-if="permission.includes('promotion')"></view>
			<m-title-bar leftText='拼团' v-if="permission.includes('promotion')"></m-title-bar>
			<!-- 拼团 -->
			<m-group-list :data='groupData' v-if="permission.includes('promotion')"></m-group-list>
			<!-- 分割线+标题 -->
			<view class="divider" v-if="permission.includes('list')"></view>
			<m-title-bar leftText='最新列表' rightText='查看更多' v-if="permission.includes('list')"></m-title-bar>
			<!-- 最新拼团列表 -->
			
			<m-latest-group :data='mainData.latestGroup' v-if="permission.includes('list')"></m-latest-group>
			<!-- 热门排行 -->
			<view class="divider" v-if="permission.includes('list')"></view>
			<m-title-bar leftText='热门推荐' rightText='查看全部' v-if="permission.includes('list')"></m-title-bar>
			<m-hot-list :data='mainData.latestGroup'></m-hot-list>
			<!-- 底部图片 -->
			<view class="divider" v-if="permission.includes('imageAd')"></view>
			<m-footer-view :data='mainData.footerView' v-if="permission.includes('imageAd')"></m-footer-view>
		</view>
	</view>
</template>

<script>
	import {
		IndexApi
	} from '@/api/index.js'
	export default {
		data() {
			return {
				loading:false,
				indexData: [],
				CouponData: [],
				groupData: [],
				permission:[]
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
			this.loadRequest()
		},
		onPullDownRefresh() {
		this.loadRequest()
			this.indexData && uni.stopPullDownRefresh()
		},
		methods: {
			async loadRequest(){
				this.loading = false
				await this.getIndexData()
				await this.getCouponList()
				await this.getGroupList()
				this.loading = true
			},
			async getIndexData() {
				const res = await IndexApi.getIndexData()
				console.log(res);
				this.indexData = res.data
				this.permission = this.indexData.map(item=>item.type)
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
