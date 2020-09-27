import axios from 'axios'
import qs from "qs";
import store from '@/store'
import NProgress from "nprogress";
import { Spin, Message } from 'iview'
import { getToken, removeToken } from '@/libs/util'
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
    constructor(...params) {
        this.baseUrl = params.baseUrl;
        this.queue = {};
        this.defaultPost='JSON'
        this.instance = axios.create(params.config)
    }
    
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            withCredentials:false,//是否携带cookie信息
            headers: {
                //
            }
        }
        return config
    }
    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            NProgress.done()
        }
    }
    //配置拦截
    interceptors( url) {
        // 请求拦截
        this.instance.interceptors.request.use(config => {
            // 添加全局的顶部读条...
            if (!Object.keys(this.queue).length) {
                NProgress.start()
            }
            config.headers['sessionId'] = getToken() || ''
            
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        this.instance.interceptors.response.use(res => {
            this.destroy(url)
            const { data, status } = res
            if(data.code===1){
                return data;
            }else if(data.code){
                Message.error(`${data.code}:${data.msg}`)
                return Promise.reject(res)
            }else{
                Message.error(data.msg || '服务器异常,请稍后再试' )
                return Promise.reject(res)
            }
           
        }, error => { //header status 不为200时
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
            addErrorLog(errorInfo)
            return Promise.reject(error)
        })
    }

    
    get(url, data = {}, config = {}) {
        config.params=data;
        this.interceptors(url);
        return this.instance.get(url,config);
    }
    post(url, data = {}, config = {}) {
        if(this.defaultPost=='JSON'){
            return this.postOfJson(url,data,config)
        }else{
            return this.postOfFormData(url,data,config)
        }
    }
    postOfJson(url, data = {}, config = {}) {
        config.data=data;
        let option={headers:{
            'content-type': 'application/json;charset=UTF-8'
        }}
        this.interceptors(url);
        option = Object.assign(this.getInsideConfig(), option,config)
        return this.instance.post(url,data,option);
    }
    postOfFormData(url, data = {}, config = {}) {
        let option={headers:{
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }}
        this.interceptors(url);
        option = Object.assign(this.getInsideConfig(), option,config)
        return this.instance.post(url,data,option);
    }
    put(url, data = {}, config = {}) {
        this.interceptors(url);
        return this.instance.put(url,data,config);
    }
    delete(url, data = {}, config = {}) {
        this.interceptors(url);
        return this.instance.delete(url,data,config);
    }
    patch(url, data = {}, config = {}){
        let option={}
        option = Object.assign(this.getInsideConfig(),option,config)
        return this.instance.patch(url,data,option);
    }
    expoertExcel(url, data = {}, config = {}){
        let option={
            responseType: 'blob',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
        }
        option = Object.assign(this.getInsideConfig(),option,config)
        return this.instance.patch(url,qs.stringify(data),option);
    }
}
export default HttpRequest
