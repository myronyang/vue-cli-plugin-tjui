import axios from 'axios'
import qs from "qs";

class Request {

  constructor(options) {
    const defaultConfig = {
      timeout: 1000,
      contenType: 'from',
      resSuccessCode: 200,
      resDataKey: 'data',
      resMesKey: 'msg',
      errCallback(msg) {
        alert(msg)
      }
    }
    this.options = Object.assign(defaultConfig, options)
    this.init()
  }

  init() {
    const { options } = this
    this.instance = axios.create({
      baseURL: process.env.NODE_ENV === 'development' ? options.devBaseUrl : options.onlineBaseUrl,
      timeout: options.timeout
    })
    this.request()
    this.response()
  }

  request() {
    this.instance.interceptors.request.use(config => {
      const { parameters } = this
      parameters.request && parameters.request(config)
      if (this.options.contenType === 'from') {
        config.data = qs.stringify(config.data)
      }
      return config
    })
  }

  response() {
    this.instance.interceptors.response.use(response => {
      const data = response.data
      const { options, parameters } = this
      parameters.response && parameters.response(response)
      return new Promise((resolve, reject) => {
        if (data.code === options.resSuccessCode) {
          resolve(data[options.resDataKey])
        } else {
          options.errCallback(data[options.resMesKey])
          reject(data)
        }
      })
    })
  }

  post(parameters) {
    this.parameters = parameters
    return this.instance.post(parameters.url, parameters.params)
  }

  get(parameters) {
    this.parameters = parameters
    return this.instance.get(parameters.url, { params: parameters.params })
  }

}

export default Request