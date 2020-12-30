import {
    request
} from "@/axios/request/http.js";
let url = "";
export default {
   /*  // 数据资产列表
   
    serviceSourceList(data) {
        return request.post(`${url}/source/list`, data);
    },
    //预览
    serviceSourcePreview(data) {
        return request.get(`${url}/source/data/preview`, data);
    }, */
    
    pythonV1(data={}){
        console.log('')
        // return request.post(`${url}/python/v1`,data)
        return request.postForm(`${url}/python/v1`,data)
    }
    

};
