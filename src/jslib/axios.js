import axios from 'axios'
import router from '@router/index'
import { Loading } from 'element-ui'
const env = require('../../env')

const instance = process.env.NODE_ENV !== 'production' ?
  axios.create({
    timeout: 10000
  }) :
  axios.create({
    timeout: 10000,
    baseURL: env.API_ROOT
  })

// baseURL and proxy doesn't work together,
// you need to use prefix instead.

// const instance = axios.create({
//   // proxy: process.env.NODE_ENV !== 'production' ? true : false,
//   timeout: 10000,
//   // baseURL: env.API_ROOT
// })

let loadinginstace

instance.interceptors.request.use(function (config) {
  // 全局loading
  loadinginstace = Loading.service({ fullscreen: true })
  return config
}, function (error) {
  loadinginstace.close()
  return Promise.reject(error)
})

instance.interceptors.response.use(function (res) {
  loadinginstace.close()
  if (res.data.access_token) {
    localStorage.setItem('token', res.data.token)
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token
  }
  return res
}, function (error) {
  // 对响应码做相应处理
  const response = error.response
  const { status } = response
  if (error && response && status === 401) {
    const { fullPath } = router.history.current
    if (fullPath.indexOf('/login') === -1) {
      router.push({
        path: '/login',
        query: {
          returnUrl: fullPath
        }
      })
    }
  } else if (error && response && status === 500) {
    window.message('服務器繁忙')
  }
  loadinginstace.close()
  return Promise.reject(error)
})

export default instance