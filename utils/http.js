import {uniToPromise} from '@/utils/uniPromise.js'
import publicConfig from '@/config/config.js'
import exceptionMessage from '@/config/exceptionMessage .js'
import Storage from '@/utils/storage.js'
export class Http {
  static async request(options){
    let serviceUrl = options.baseUrl || 'api'
    options.url = publicConfig.ApiConfig[serviceUrl].baseUrl+ options.url 
	options.header = {
		appid:'bd9d01ecc75dbbaaefce',
		token:Storage.getToken() || ''
	}
    uni.showLoading({
      title: '努力加载中...' 
    })
    try {
        const response = await uniToPromise('request',{
        ...options
        })
        const {statusCode,data} = response
        if(statusCode<400){
          uni.hideLoading()
          return data
        }
        if(statusCode===401){
          uni.hideLoading()
          //token超时
          return
        }
		if(statusCode===422){
			console.log('422');
			uni.hideLoading()
			return data
		}
		if(statusCode===400){
			console.log('422');
			uni.hideLoading()
			return data
		}
        Http._showError(response.data.code,response.data.msg)
        return response
    } catch (error) {
		console.log('error');
      uni.hideLoading()
     Http._showError(1)
     console.log(error);
    }
  }
  static _showError(code,msg){
    let title = exceptionMessage[code]||msg || '发送未知错误'
      uni.showToast({
        title,
        icon:'none',
        duration:3000
      })
	  
  }
}