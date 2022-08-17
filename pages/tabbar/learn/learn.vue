<template>
	<div>
		<div class="not-login" v-if="!isLogin">
			<image src="http://edu.2yuecloud.com/static/noLogin.png" mode=""></image>
			<p class='my-2'>登录后才可以查看我的学习哦</p>
			<button type="default" plain="true" size="mini" @click="toLogin">立即登录</button>
		</div>
		<!-- row and column -->

	
	</div>
</template>

<script>
	import Storage from '@/utils/storage.js'
	export default {
		data() {
			return {
				isLogin: false,
				goodsData:[
    {
        "cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/10ccf3a973f5193bec3c.png",
        "id": 6,
        "price": "9.98",
        "t_price": "20.00",
        "title": "VueCli 实战在线教育后台系统",
        "try": "<p>VueCli 实战在线教育后台系统试看内容</p>",
        "type": "media"
    },
    {
        "cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/47d1aa930177515cd95e.png",
        "id": 7,
        "price": "9.98",
        "t_price": "20.00",
        "title": "uni-app实战视频点播app小程序",
        "try": "<p>uni-app实战视频点播app小程序试看内容</p>",
        "type": "media"
    },
    {
        "cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/c948f4a7e402473337cb.png",
        "id": 11,
        "price": "90.00",
        "t_price": "100.00",
        "title": "uni-app实战直播app全栈开发",
        "try": "<p>uni-app实战直播app全栈开发介绍</p>",
        "type": "video"
    },
    {
        "cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/2e96031726768d0d493f.png",
        "id": 3,
        "price": "9.98",
        "t_price": "20.00",
        "title": "uni-app实战仿微信app开发",
        "try": "uni-app实战仿微信app开发描述"
    },
    {
        "cover": "http://demo-mp3.oss-cn-shenzhen.aliyuncs.com/egg-edu-demo/b688b9bf339a6ece9f54.png",
        "id": 25,
        "price": "10.00",
        "t_price": "20.00",
        "title": "uni-app实战在线教育类app开发",
        "try": "<p>uni-app实战在线教育类app开发</p>",
        "type": "audio"
    }
]
			}
		},
		onShow() {
		this.checkLogin()
		},
		onReady() {
			this.checkLogin()
		},
		methods: {
			checkLogin(){
				const token = Storage.getToken()
				 this.isLogin =Boolean(token)
				 return Boolean(token)
			},
			toLogin() {
				uni.navigateTo({
					url:'/pages/user/login/login'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.not-login{
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p{
		font-size: 30rpx;
		color: #666;
		
	}
	image{
		width: 400rpx;
		height: 400rpx;
	}
}
</style>