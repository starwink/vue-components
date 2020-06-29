import axios from '@/libs/api.request-json.js'
import config from '@/config'

// const projectName = 'shuxi-master'
const projectName = config.projectName0;
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
    //上传图片
    uploadImage:function(code){
        if(!code){
			return false;
        }
        
        return axios.request({
            url: `/${projectName}/upload/uploadImage`,
            method: 'POST'
        })
    },

    

    



}

export default server
