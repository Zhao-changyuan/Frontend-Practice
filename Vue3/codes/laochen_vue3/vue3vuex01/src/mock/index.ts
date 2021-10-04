

import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

Mock.mock(
  '/user/userInfo',
  'get',
  () => {
    return {
      username: '老陈',
      type: '帅！！！'
    }
  }
)

Mock.mock(
  /\/account.*/,
  'get',
  () => {
    return {
      info: "登录成功"
    }
  }
)