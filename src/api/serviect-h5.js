import axios from '@/libs/api.request-json.js'
import config from '@/config'

// const projectName = 'shuxi-master'
const projectName = config.projectName0;

const server = {

    //微信分享详情
	getTaskDetail:function(id){
        return axios.request({
            url: `/${projectName}/taskIssue/detailsByIdNoLogin/${id}`,
            method: 'GET'
        })
    },
    //提交任务
    submitTask:function(params){
        return axios.request({
            url: `/${projectName}/taskIssue/submitTask`,
            data: params,
            method: 'POST'
        })
    },

   


    



}

export default server
