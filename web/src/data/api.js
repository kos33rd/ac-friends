import axios from 'axios';
import { includes } from 'lodash'

const baseURL = process.env === 'production' ? '/api' : 'http://127.0.0.1:8000'
const AUTH_CHECK_METHODS = ['post', 'put', 'patch', 'delete', 'get']

const api = axios.create({
  baseURL,
  withCredentials: true
})

api.interceptors.request.use(
  (config) => {

    if (includes(AUTH_CHECK_METHODS, config.method)) {
      const accessToken = localStorage.getItem('accessToken')

      if (accessToken) {
        config.headers['Authorization'] = 'Bearer ' + accessToken
      }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default api
