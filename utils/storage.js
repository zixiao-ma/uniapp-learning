import publicConfig from '../config/config'
class Storage {
  /**
   * 设置本地存储的数据
   * @param {*} key 
   * @param {*} value 
   */
  static set(key,value){
    uni.setStorageSync(key, value)
  }

  /**
   * 获取本地存储的数据
   * @param {*} key 
   */
  static get(key){
    return uni.getStorageSync(key) || ""
  }

  /**
   * 删除本地存储的数据
   * @param {*} key 
   */
  static remove(key){
    uni.removeStorageSync()
  }

  /**
   * 清空本地存储的数据
   */
  static removeAll(){
    uni.clearStorageSync()
  }

  /**
   * 存储token
   */
  static setToken(token){
    uni.setStorageSync(publicConfig.field.loginCredentials, token)
  }
  static getToken(){
    return uni.getStorageSync(publicConfig.field.loginCredentials)
  }
 /**
  * 存储用户信息
  */
 static setUserInfo(userInfo){
   uni.setStorageSync(publicConfig.field.userInfoKey, userInfo)
   
 }
 static getUserInfo(){
  return uni.getStorageSync(publicConfig.field.userInfoKey) || {}
   
 }
}

export default Storage