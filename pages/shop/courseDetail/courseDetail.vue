<template>
	<view>
		<div class="banner">
			<image :src="detailInfo.cover"></image>
			<span>{{types[detailInfo.type]||'暂无'}}</span>
		</div>
		<div class="group" v-if="detailInfo.group">
				<div class="left">
						<p> <text>¥{{detailInfo.price}}</text> <sub>¥{{detailInfo.t_price}}</sub> </p>
				</div>
		</div>
		<div class="tabs" v-if="detailInfo.column_courses">
			<view @click="handleClickTab(index)" :class="activeTab===index?'active':''" v-for="(item,index) in tabs" :key='index'>
				<h3>{{item}}</h3>
				<span></span>
			</view>
		</div>
		<view class="countent" v-if="activeTab===0">
			<div class="textTitle container">
				<p>{{detailInfo.title}}</p>
				<p>{{detailInfo.sub_count}}人学过</p>
				<p> <text>¥{{detailInfo.price}}</text> <sub>¥{{detailInfo.t_price}}</sub> </p>
			</div>
			<view class="divider"></view>
			<div class='htmlCnt' v-html="detailInfo.try || desc"></div>
		</view>
		<view class="directory" v-if="activeTab===1">
			<view class="directory-title">
			<text>	共{{detailInfo.column_courses.length}}节</text>
			</view>
			<view class="directory-box">
				<div class="directory-item" v-for="(item,index) in detailInfo.column_courses" :key="index">
					<span class="item-index">
						{{index+1 | filterIndex}}
					</span>
					<span class='item-title'>{{item.title}}</span>
				</div>
			</view>
		</view>
		<footer class='py-1'>
			<view class="m-button">立即订购<text>¥{{detailInfo.price}}</text></view>
		</footer>
	</view>
</template>

<script>
	import {courseApi} from '@/api/course.js'
	export default {
		onLoad(options) {
			this.getDetailData(options)
		},
		
		data() {
			return {
				tabs:['介绍','目录'],
				activeTab:0,
				detailInfo:{},
				desc:'暂无内容',
				types:{
					column:'专栏',
					media:'媒体',
					audio:'音频',
					video:'视频'
				}
			};	
		},
		filters:{
			filterIndex(v){
				let length = (v+'').length;
				let str = [v]
				for(let i=0;i<(3-length);i++){
					str.unshift(0)
				}
				return str.join('')
			}
		},
		methods: {
			
			handleClickTab(i){
			this.activeTab = i	
			},
			async getDetailData(model) {
				let res;
				try{
					res = await courseApi.getCourseDetail(model);
					if(res.data.msg==='fail'){
					res = await courseApi.getColumnDetail(model);
					}
				}catch(e){
					//TODO handle the exception
				}
			
				
				if(res.msg==='ok'){
					this.detailInfo = res.data;
					console.log(res.data);
					uni.setNavigationBarTitle({
						title:res.data.title
					})
				}
				
			}
		},
		
	}
</script>
<!-- http://demonuxtapi.dishait.cn/mobile/course/read?id=3&column_id=0&group_id=0&flashsale_id=0 -->
<!-- http://demonuxtapi.dishait.cn/mobile/column/read?id=3&group_id=0&flashsale_id=0 -->
<style lang="scss">
	.group{
		height: 140rpx;
		background-color:#dc3545;
	}
.banner{
	position: relative;
	image{
		height: 422rpx;
		width: 100%;
	}
	span{
		position: absolute;
		right: 10rpx;
		bottom: 20rpx;
		width: 68rpx;
		height: 44rpx;
		background-color: rgba(0, 0, 0, 0.5);
		overflow: hidden;
		text-align: center;
		line-height: 44rpx;
		color: #fff;
		font-size: 14rpx;
		box-sizing: border-box;
	}
}
.directory{
	box-sizing: border-box;
}
.directory-item{
	height: 120rpx;
	box-sizing: border-box;
	border-bottom: 1px solid #ddd;
	padding: 45rpx 30rpx;
	font-size: 32rpx;
	color: #58626c;
	.item-index{
		margin-right: 38rpx;
	}
}
.directory-box{
	padding-bottom: 130rpx;
}
.directory-title{
	margin: 30rpx;
	border-radius: 5rpx;
	height: 90rpx;
	background-color: #f8f9fb;
	border: 1px solid #ddd;
	line-height: 90rpx;
	padding-left: 35rpx;
	font-size: 26rpx;
}
.tabs{
	width: 100%;
	height: 100rpx;
	display: flex;
	border-bottom: 1px solid #ddd;
	&>view{
		width: 50%;
		box-sizing: border-box;
		padding-top: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h3{
			font-size: 35rpx;
			color: #666
		}
		span{
			margin-top: 20rpx;
			display: inline-block;
			width: 50rpx;
			height: 10rpx;
			background-color: #fff;
			border-radius: 5rpx;
		}
	}
}
footer{
	border-top: 1px solid #ddd;
	min-width:100vw;
	padding: 15rpx;
	box-sizing: border-box;
	position: fixed;
	bottom: 0;
	background-color: #fff;
	.m-button{
		margin-bottom: 0;
	}
}
.htmlCnt{
	padding: 10rpx 17rpx;
	width: 100vw;
	::v-deep .cintrocon{
		img{
			width: 100% !important;
			height: auto !important;
		}
		h2{
			margin: 20rpx 0 !important;
		}
	}
	::v-deep .j-courseintroImgs{
		img{
			width: 100% !important;
			height: auto !important;
		}
	}
	
}
.active{
	h3{
		color: #5dcd85 !important;
	}
	span{
		background-color: #5dcd85 !important;
	}
}
.textTitle{
		p{
			width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			lines: 1;
			&:first-child{
				font-size: 40rpx;
				color: #000;
				margin-top: 25rpx;
			}
			&:nth-child(2){
				font-size: 23rpx;
				color: #666;
				margin-top: 25rpx;
			}
			&:last-child{
				margin-top: 25rpx;
				text{
					color: red;
				}
				sub{
					font-size: 19rpx;
					color: #666;
					position: relative;
					top: -7rpx;
					margin-left: 5rpx;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
