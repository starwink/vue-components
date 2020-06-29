import axios from '@/libs/api.request.js'
import config from '@/config'

// const projectName = 'shuxi-master'
const projectName = config.projectName0;
const server = {
    //上传图片
    uploadImage:function(paramas){
       
        return axios.request({
            url: `/${projectName}/upload/uploadImage`,
            data: paramas,
            method: 'POST'
        })
    },



}

export default server
