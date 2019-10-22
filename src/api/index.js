import axios from '@/jslib/axios'

export const login = data => {
  return axios({
    method: 'post',
    url: '/admin/login',
    data
  })
}