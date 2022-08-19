import {Http} from '@/utils/http.js'
export class userAPI extends Http {
  static userLogin(data) {
    return Http.request({
      url: "/login",
      method: "POST",
	  data
    })
  }
  static userReg(data) {
    return Http.request({
      url: "/reg",
      method: "POST",
  	  data
    })
  }
  static userGetCode(data) {
    return Http.request({
      url: "/get_captcha",
      method: "POST",
  	  data
    })
  }
  static userBindPhone(data) {
    return Http.request({
      url: "/bind_mobile",
      method: "POST",
  	  data
    })
  }
  static updateUserInfo(data) {
    return Http.request({
      url: "/update_info",
      method: "POST",
  	  data
    })
  }
  static uploadAvatar(data) {
    return Http.request({
      url: "/upload",
      method: "POST",
  	  data
    })
  }
  static userEditPassword(data) {
    return Http.request({
      url: "/update_password",
      method: "POST",
  	  data
    })
  }
  static userFindPassword(data) {
    return Http.request({
      url: "/forget",
      method: "POST",
  	  data
    })
  }
}