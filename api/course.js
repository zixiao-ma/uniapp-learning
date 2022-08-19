import {Http} from '@/utils/http.js'
export class courseApi extends Http {
  static getCourseData(model) {
	  if(!model){
		  model.page=1;
		  model.limit=10;
	  }
    return Http.request({
      url: `/course/list?page=${model.page}&limit=${model.limit}`,
      method: "GET"
    })
  }
  static getCourseDetail(model){
	  return Http.request({
		  url:`/course/read?id=${model.id}&column_id=${model.column_id || 0}&group_id=${model.group_id|| 0}&flashsale_id=${model.flashsale_id|| 0}`,
		  method:'GET'
	  })
  }
  static getColumnDetail(model){
  	  return Http.request({
  		  url:`/column/read?id=${model.id}&column_id=${model.column_id || 0}&group_id=${model.group_id|| 0}&flashsale_id=${model.flashsale_id|| 0}`,
  		  method:'GET'
  	  })
  }
}