import axios from 'axios'
import router from '@/router/index'
import qs from "qs";
import * as Utils from './utils'
import { Toast } from 'taojinui'

class Request {

  constructor(options) {

    if (process.env.NODE_ENV === 'development') {
      axios.defaults.baseURL = '/develop/api/'
    } else {
      axios.defaults.baseURL = 'https://atmosphere.glinsunai.com/api/'
    }  

    axios.interceptors.request.use((config) => {
      // 处理请求数据，如添加Header信息等
      if (typeof config.data !== 'string') {
        config.data = qs.stringify(config.data)
      }
      const _token = Utils.getStore('AQFS_TOKEN')
      if (_token) {
       config.headers.Authorization = 'Bearer ' + _token
      }
      return config
    })

    axios.interceptors.response.use((response) => {

      return new Promise((resolve, reject) => {
        // 储层TOKEN
        if (response.data.code === 1) {
          resolve(response.data.data)
        } else {
          reject(response.data)
          if (response.data.msg === '暂无O3数据') return
          if (response.data.msg.search('重新登录') > 0) {
            router.push("/login");
          }
          Toast.error(response.data.msg)
        }
      })

    }, (error) => {
      return Promise.reject(error)
    })
  }

  post(url, data, config) {
    return axios.post(url, data, config)
  }

  get(url, data, config) {
    return axios.get(url, { params: data }, config)
  }

}

export const request = new Request()