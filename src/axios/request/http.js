import axios from 'axios'
import qs from 'qs'
// import NProgress from "nprogress";
import { Message } from 'view-design'
// NProgress.configure({showSpinner: false});
// http request 拦截器
// axios.defaults.timeout=5000;
axios.create({
  withCredentials: true
})
axios.interceptors.request.use(
  config => {
    // NProgress.start() // 设置加载进度条(开始..)
    config.headers['Authorization'] = localStorage['Authorization']
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

let errorStatus = new Map([
  [400, { error: '错误请求' }],
  [401, { error: '未授权，请重新登录' }],
  [403, { error: '拒绝访问' }],
  [404, { error: '请求错误,未找到该资源' }],
  [405, { error: '请求方法未允许' }],
  [408, { error: '请求超时' }],
  [500, { error: '服务器端出错' }],
  [501, { error: '网络未实现' }],
  [502, { error: '网络错误' }],
  [503, { error: '服务不可用' }],
  [504, { error: '网络超时' }],
  [505, { error: 'http版本不支持该请求' }],
  [-100, { error: '请退出重新登录' }],
  ['default', { error: '连接错误' }]
])

// 响应拦截器即异常处理
axios.interceptors.response.use(
  response => {
    console.log('--->>>')
    // NProgress.done() // 设置加载进度条(结束..)
    if (response.data.code === -1 || response.data.code === -2) {
      // 登录超时重定向
      window.location.replace('/platform-home')
    } else if (response.data.code !== undefined && response.data.code !== 200) {
      let msg = response.data.message || '服务异常'
      Message.error(msg)
    }

    return response
  },
  err => {
    console.log('--errrr->>>')
    if (err && err.response) {
      let status = err.response.status
      let error = errorStatus.get(status).error || errorStatus.get('default').error + err.response.status
      Message.error(error)
    } else {
      Message.error('连接到服务器失败')
    }
    return Promise.resolve(err.response)
  }
)

export const request = {
  async get (url, data) {
    try {
      let res = await axios.get(url, { params: data })
      res = res.data
      return new Promise(resolve => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },
  async post (url, data) {
    try {
      let headers = { 'Content-Type': 'application/json;charset=UTF-8' }
      let res = await axios.post(url, data, headers)
      res = res.data
      return new Promise(resolve => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },
  async getTest (url, data) {
    try {
    //   let headers = { "Content-Type": "application/json;charset=UTF-8" };
      console.log('---')
      let res = await axios.get(url, data, { timeout: 3000 })
      console.log('---', res)
      res = res.data
      return new Promise(resolve => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },
  async postForm (url, data) {
    try {
      let headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
      let res = await axios.post(url, qs.stringify(data), headers)
      res = res.data
      return new Promise(resolve => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },
  async patch (url, data) {
    try {
      let res = await axios.patch(url, data)
      res = res.data
      return new Promise(resolve => {
        resolve(res)
      })
    } catch (err) {
      console.log(err)
    }
  },
  // 用来导出excel
  exportExcel (url, data) {
    console.log(qs.stringify(data))
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), { responseType: 'blob', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    })
  },
  getExport (data, name, type) {
    let Authorization = JSON.parse(localStorage.getItem('Authorization'))
    var xhr = new XMLHttpRequest()
    xhr.open('GET', data, true)
    // 设置请求头参数的方式,如果没有可忽略此行代码
    xhr.setRequestHeader('Authorization', `${Authorization}`)
    // 设置响应类型为 blob
    xhr.send()
    xhr.responseType = 'blob'
    // 关键部分
    xhr.onload = function (e) {
      // 如果请求执行成功
      if (this.status == 200) {
        const link = document.createElement('a')
        let blob = new Blob([this.response], type)
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)
        link.download = name // 下载的文件名
        document.body.appendChild(link)
        link.click()
      }
    }
  }

}
export function getUrl () {
  return axios.defaults.baseURL
}
