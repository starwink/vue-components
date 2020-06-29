import axios from 'axios'
import store from '@/store'
import { Spin, Message } from 'iview'
import { getAdminToken, removeAdminToken } from '@/libs/util'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {

        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      config.headers['sessionId'] = getAdminToken() || ''

      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
    //   console.log('res', res)
    //   console.log(typeof res.status, 'status', res.status)
      this.destroy(url)
      if (res.status != 200) {

      } else if (res.data.code !== 0) {
        Message.error(res.data.msg)
      }
      let data = res.data

      //   let { data, status } = res;
      //   data=data.data;
      return data
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      Message.error('服务器异常,请稍后再试')
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      if (errorInfo.status === 401) {
        Message.error(`未登录，请重新登录`)
        // window.App.$router.push('/login');
        removeAdminToken()
       // window.location.href = '/login'
      } else {
        addErrorLog(errorInfo)
      }

      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
