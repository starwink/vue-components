import axios from '@/libs/api.request.js'
import config from '@/config'

// const projectName = 'shuxi-master'
const projectName = config.projectName1;

const server = {
    //会员批量导入
    uploadMemberExcel:function(paramas){
        return axios.request({
            url: `/${projectName}/member/import`,
            data: paramas,
            method: 'POST'
        })
    },



}

export default server
