import axios from '@/libs/api.request-json-admin.js'
import config from '@/config'

const projectName = 'shuxi-dmsm';
const server = {

    login: (params) => {
        return axios.request({
            url: `/${projectName}/login/login`,
            data: params,
            method: 'POST'
        })
    },
    //获取项目列表
    getProjectList: () => {
        return axios.request({
            url: `/${projectName}/platform/platformChoice`
        })
    },
    //获取登录token
    getLoginToken: (platformId) => {
        return axios.request({
            url: `/${projectName}/platform/token/${platformId}`
        })
    },

}

export default server
