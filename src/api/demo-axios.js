import axiosClass from '@/axios/axios.class'

const axios = new axiosClass({
    baseUrl: '/',
    timeout: 1000,
})
//重写方法demo ,去掉过渡器
/* axios.post=function(url,data={},config={}){
        console.log('neee',url,data,config)
        config.data=data;
        let option={headers:{
            'content-type': 'application/json;charset=UTF-8'
        }}
        
        // this.interceptors(url);
        option = Object.assign(this.getInsideConfig(), option,config)
        return this.instance.post(url,data,option);
} */
const projectName = ''

const server = {

    // 列表
    list: (params) => {
        return axios.get(
            `${projectName}/json/1`, params, {
            // responseType:'document',
            // headers:{demo:12321}
        }
        )
    },
    pushData: (params) => {
        return axios.post(`${projectName}/json/1`, params)
    }


}



export default server
