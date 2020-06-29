import axios from '@/libs/api.request.js'
import config from '@/config'

const projectName = 'shuxi-master-zxzd-test'
// const projectName = config.projectName0;

const server = {
  
    //微信js分享
	getWechatShare:function(params){
        return axios.request({
            url: `/${projectName}/wechat/jssdk`,
            data: params,
            method: 'POST'
        })
    },
    //获取openid
    getMPOpenId:function(params){
        return axios.request({
            url: `/${projectName}/wechat/authorization`,
            data: params,
            method: 'post'
        })
    },

   

   


    



}

export default server
