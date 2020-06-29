import axios from '@/libs/api.request-json.js'

const projectName = 'sx-demo'
const server = {

  // 列表
  login: (params) => {
    return axios.request({
      url: `/${projectName}/login/login`,
      method: 'get'
    })
  }

}

export default server
