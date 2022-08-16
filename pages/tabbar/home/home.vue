<template>
	<view class="my-container animate__animated animate__fadeIn">
		<div class="my-top">
			<div class="title py-2 flex justify-between container" @click='handleToSetting'>
				<p>我的</p>
				<b>...</b>
			</div>
			<div class="login_view flex align-center" @click='handleClickLogin'>
				<div class="avatar">
					<image :src="isLogin?userInfo.avatar:notLoginAvatar" ></image>
				</div>
				<div class="login_Info">
					<p>{{isLogin?userInfo.nickname:'立即登录'}}</p>
					<small>{{isLogin?userInfo.desc:'登录解锁更多功能'}}</small>
				</div>
				<div class='editInfoIcon '>
					<uni-icons type="settings-filled"></uni-icons>
				</div>
			</div>
			<div class="user_action">
				<div class="action_box flex">
					<div class="action-item" v-for="item in actions" @click='handleActionClick(item.key)' :key="item.key">
						<uni-icons :type="item.icon"></uni-icons>
						<text>{{item.title}}</text>
					</div>
				</div>
			</div>	
			
		</div>
		<div class="my-btm">
			<div class="btm-list" v-for="item in btmlist" :key="item.key" @click='handleBottomClick(item.key)'>
				<span>
					<uni-icons :type="item.icon" class='left-icon'></uni-icons>
					<text>{{item.title}}</text>
				</span>
				<uni-icons type="right" class='right-icon'></uni-icons>
			</div>
		</div>
	</view>
</template>

<script>
	import Storage from '@/utils/storage.js'
	export default {
		data() {
			return {
				notLoginAvatar:'https://img0.baidu.com/it/u=2250275304,3941496093&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200',
				actions:[
					{
						icon:'calendar',
						title:'订单',
						key:'order'
					},
					{
						icon:'chat',
						title:'消息',
						key:'info'
					},
					{
						icon:'star',
						title:'收藏',
						key:'star'
					},
					{
						icon:'auth',
						title:'在学',
						ket:'learn'
					}
				],
				btmlist:[
					{
						icon:'gift',
						title:'我的优惠券',
						key:'gift'
					},
					{
						icon:'help',
						title:'常见问题',
						key:'help'
					},
					{
						icon:'gear',
						title:'设置',
						key:'setting'
					}
				],
				userInfo:{},
				isLogin:false
				
			};
		},
		onShow() {
			this.getUserInfo()
		},
		onReady() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo(){
				const Info = Storage.getUserInfo()
				if(JSON.stringify(Info)!=='{}'){
					this.isLogin = true
				}
				this.userInfo = Info
			},
			handleActionClick(key) {
				uni.showToast({
					title:`点击了${key}`,
					icon:'none'
				})
			},
			handleBottomClick(key) {
				switch(key){
					case 'setting':
					this.handleToSetting()
					break;
					default:
					return 
					break;
				}
				uni.showToast({
					title:`点击了${key}`,
					icon:'none'
				})
			},
			handleClickLogin(){
				if(!this.isLogin){
					uni.navigateTo({
						url:'/pages/user/login/login'
					})
				}else{
					uni.navigateTo({
						url:'/pages/user/editUserInfo/editUserInfo'
					})
				}
				
			},
			handleToSetting(){
				uni.navigateTo({
					url:'/pages/user/setting/setting'
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.editInfoIcon{
		position: absolute;
		right: 20rpx;
		.uni-icons{
			color: #fff !important;
			font-size: 35rpx !important;
		}
	}
	.my-btm{
		padding: 0rpx 60rpx;
	}
	.btm-list{
		&:last-child{
			border-bottom: none;
		}
		padding: 45rpx 0rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ddd;
		.uni-icons{
			
			font-size: 40rpx !important;
			vertical-align: middle;
			&.left-icon{
				color: #5cadfe !important;
				margin-right: 5rpx;
			}
			&.right-icon{
				color: #b8b8b8 !important;
					font-size: 40rpx !important;
			}
		}
		text{
			font-size: 26rpx;
		}
	}
.my-container{
	height: 100%;
}
.my-top{
	position: relative;
	height: 495rpx;
	background-color: #5ccc84;
	border-radius: 0% 00% 30% 30%;
}
.title{
	color: #fff;
	font-size: 35rpx;
}
.login_view{
	padding: 60rpx 40rpx;
}
.avatar{
	margin-right: 30rpx;
	image{
		width: 125rpx;
		height: 125rpx;
		border-radius: 100%;
		border: 1rpx solid #fff;
	}
}
.action-item{
	width: 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.login_Info{
	color: #fff;
}
.user_action{
	display: flex;
	justify-content: center;
	align-items: center;
	.action_box{
		width: 94%;
		height: 160rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 1px 6px #ddd;
		text{
			margin-top: 20rpx;
			font-size: 23rpx;
		}
		.uni-icons{
			color: #febf00 !important;
			font-size: 45rpx !important;
			font-weight: bolder; 
		}
	}
}

</style>
