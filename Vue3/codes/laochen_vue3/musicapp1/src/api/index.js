
import axios from "axios";

const baseUrl = 'http://localhost:4000'

/**
 * 说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
 * @param {number} type 0: pc；1: android；2: iphone；3: ipad
 * @returns 
 */
export function getBanner(type = 1) {
  return axios.get(`${baseUrl}/banner?type=${type}`)
}

/**
 * 获取推荐歌单
 * @param {number} limit 
 * @returns 
 */
export function getMusicLit(limit = 10) {
  return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}