<template>
	<view :class="type" @click="handleToDetail">
		<div class="imgTitle">
			<image :src="item.cover"></image>
			<span>{{types[item.type]||'暂无'}}</span>
		</div>
		<div class="textTitle">
			<p>{{item.title}}</p>
			<p v-html="item.try || desc"></p>
			<p> <text>¥{{item.price}}</text> <sub>¥{{item.t_price}}</sub> </p>
		</div>
	
	</view>
</template>

<script>
	export default {
		props:['item','type'],
		name:"m-goods-item",
		data() {
			return {
				desc:'<span>暂无描述</span>',
				types:{
					column:'专栏',
					media:'媒体',
					audio:'音频',
					video:'视频'
				}
			};
		},
		methods: {
			handleToDetail() {
				let defaultUrl = `/pages/shop/courseDetail/courseDetail?id=${this.item.id}`;
				if(this.item.column_id){
					defaultUrl += `&column_id=${this.item.column_id}`;
					console.log(defaultUrl);
				}
				if(this.item.group_id){
					defaultUrl += `&group_id=${this.item.group_id}`;
					console.log(defaultUrl);
				}
				if(this.item.flashsale_id){
					defaultUrl += `&flashsale_id=${this.item.flashsale_id}`;
					console.log(defaultUrl);
				}
				uni.navigateTo({
					url:defaultUrl
				})
				
			}
		},
	}
</script>

<style scoped lang="scss">
.row{
	min-width:340rpx;
	box-shadow: 0px 0px 4px -1px #ddd;
	width: 344rpx;
	height: 332rpx;
	margin: 15rpx;
	overflow: hidden;
	box-sizing: border-box;
	.imgTitle{
		position: relative;
		image{
			width: 344rpx;
			height: 190rpx;
			
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
	.textTitle{
		p{
			width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			lines: 1;
			margin-top: 5rpx;
			&:first-child{
				font-size: 30rpx;
				color: #000;
			}
			&:nth-child(2){
				font-size: 23rpx;
				color: #666;
			}
			&:last-child{
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
}
.column{
	width: 100vw;
	min-width:344rpx;
	box-shadow: 0px 0px 4px -1px #ddd;
	padding: 10rpx 17rpx;
	display: flex;
	.imgTitle{
		position: relative;
		image{
			width: 344rpx;
			height: 190rpx;
			
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
	.textTitle{
		flex: 1;
		margin-left: 22rpx;
		p{
			width: 85%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			lines: 1;
			&:first-child{
				font-size: 30rpx;
				color: #000;
				margin-top: 5rpx;
			}
			&:nth-child(2){
				font-size: 23rpx;
				color: #666;
				margin-top: 25rpx;
			}
			&:last-child{
				margin-top: 50rpx;
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
	
}
</style>