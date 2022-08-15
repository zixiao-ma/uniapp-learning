import {Http} from '@/utils/http.js'
export class IndexApi extends Http {
  static getIndexData() {
    return Http.request({
      url: "/index",
      method: "GET"
    })
  }
  static getCouponList(){
	  return Http.request({
		  url:'/coupon',
		  method:'GET'
	  })
  }
  static getGroupList(){
  	  return Http.request({
  		  url:'/group?usable=1',
  		  method:'GET'
  	  })
  }
}