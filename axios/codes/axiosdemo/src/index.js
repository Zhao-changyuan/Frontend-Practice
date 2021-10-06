

import axios from 'axios'

const baseUrl = 'https://api.shop.eduwork.cn'
const access_token = '"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnNob3AuZWR1d29yay5jblwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzMzUwOTQyNSwiZXhwIjoxNjMzODY5NDI1LCJuYmYiOjE2MzM1MDk0MjUsImp0aSI6IlVGU3dRN0sxNTd0elB1WEYiLCJzdWIiOjIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IZ5rqRVybIE453MTXhxQFN1IT_zxlCvVFo5FbEkLQto"'

// 全局默认配置
axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['Authorization'] = access_token
axios.defaults.timeout = 5000

let eduworkAxiosInstance = axios.create({
  baseURL: 'https://api.shop.eduwork.cn',
  headers: {
    Authorization: access_token,
  },
  timeout: 5000,
})


/**
 * 1. 登录接口
 * @returns 
 */
async function loginApi() {
  const {data} = await axios.post(`/api/auth/login`)
  return data
}

/**
 * 测试 axios.all 方法
 */
async function axiosAll() {
  axios.all([
    eduworkAxiosInstance.get(`/api/index`),
    eduworkAxiosInstance.get(`/api/goods`)
  ]).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}

axiosAll();